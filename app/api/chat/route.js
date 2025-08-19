import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const client = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message || message.trim() === "") {
      return Response.json({ error: "Message is required" });
    }

    const model = client.getGenerativeModel({
      model: "gemini-2.0-flash",
      temperature: 0,
    });

    const result = await model.generateContentStream({
      contents: [{ role: "user", parts: [{ text: message }] }],
    });

    if (!result) {
      return Response.json({ error: "Failed to generate response" });
    }

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
