import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import dotenv from "dotenv";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { ChromaRateLimitError, CloudClient } from "chromadb";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const genai = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function POST(req) {
  try {
    const { message } = await req.json();

    const pdfPath =
      "C:/Users/Preethi/Desktop/autopixel/docs/faqChatbot/AutoPixel Digital – Chatbot FAQs & Knowledge Notes.pdf";

    const loader = new PDFLoader(pdfPath);

    const docs = await loader.load();

    if (!docs) {
      return Response.json({ error: "Failed to load PDF document" });
    }

    if (!message || message.trim() === "") {
      return Response.json({ error: "Message is required" });
    }

    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 200,
      chunkOverlap: 100,
    });

    let splitText = [];
    for (const doc of docs) {
      const text = await textSplitter.splitText(doc.pageContent);
      splitText.push(...text);
    }

    if (!splitText || splitText.length === 0) {
      return Response.json({ error: "Failed to split text" });
    }
    const context = splitText.join("\n");

    const embeddings = new GoogleGenerativeAIEmbeddings({
      model: "text-embedding-004",
    });

    const client = new CloudClient({
      apiKey: process.env.CHROMADB_API_KEY,
      tenant: process.env.CHROMADB_TENANT_ID,
      database: process.env.CHROMADB_DATABASE_ID,
    });

    const collection = await client.getOrCreateCollection({
      name: "chatbot_faqs",
    });

    await collection.add({
      ids: ["id1"],
      documents: [context],
      metadatas: [{ source: pdfPath }],
      embeddings: await embeddings.embedDocuments([context]),
    });

    const model = genai.getGenerativeModel({
      model: "gemini-2.0-flash",
      temperature: 0,
    });

    const retrievedDocs = await collection.query({
      queryEmbeddings: [await embeddings.embedQuery(message)],
      nResults: 5,
    });

    const systemMessageContent =
      "You are an assistant for question-answering tasks. " +
      "Use the following pieces of retrieved context to answer " +
      "the question. If you don't know the answer, say that you " +
      "don't know. Use three sentences maximum and keep the " +
      "answer concise." +
      "\n\n" +
      `${context}`;

    const recievedText = retrievedDocs.documents
      ? retrievedDocs.documents.flat().join("\n")
      : "";

    const result = await model.generateContentStream({
      contents: [
        {
          role: "user",
          parts: [
            { text: `Context from database:\n${recievedText}` },
            { text: systemMessageContent },
            { text: `Question: ${message}` },
          ],
        },
      ],
    });

    if (!result) {
      return Response.json({ error: "Failed to generate response" });
    }

    const responseText = (await result.response).text();

    const prisma = new PrismaClient();
    await prisma.chatbot_faq.create({
      data: {
        question: message,
        answer: responseText,
      },
    });

    const encoder = new TextEncoder();

    const readableStream = new ReadableStream({
      async start(controller) {
        await new Promise((res) => setTimeout(res, 30));
        for await (const chunk of result.stream) {
          const delta = chunk.text() || "";
          if (delta) {
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({ content: delta })}\n\n`)
            );
          }
        }
        controller.close();
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.log("Error:", error);
    return Response.json({ error: "Failed to generate response" });
  }
}
