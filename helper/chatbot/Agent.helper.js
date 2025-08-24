import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import dotenv from "dotenv";
import OpenAI from "openai";
import { queryResult } from "./ChromaDB.helper";

dotenv.config();

export const embeddings = new GoogleGenerativeAIEmbeddings({
  model: "text-embedding-004",
});

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
});

export const AgentHelper = async (message) => {
  try {
    if (!message || message.trim() === "") {
      throw new Error("Message is required");
    }

    const contextData = await queryResult({ message });
    if (contextData.error) throw new Error(contextData.error);
    const receivedText = contextData || "";

    const systemMessageContent =
      "You are an assistant for question-answering tasks. " +
      "Use the following pieces of retrieved context to answer " +
      "the question. If you don't know the answer, say that you " +
      "don't know. Use three sentences maximum and keep the " +
      "answer concise." +
      "\n\n" +
      `${receivedText}`;

    const result = await openai.chat.completions.create({
      model: "deepseek/deepseek-r1-0528:free",
      messages: [
        {
          role: "system",
          content: `${systemMessageContent}`,
        },
        {
          role: "user",
          content: `${message}`,
        },
      ],
      stream: true,
    });

    if (!result) {
      return Response.json({ error: "Failed to generate response" });
    }

    return result;
  } catch (error) {
    return Response.json({ error: "Failed to fetch answer!" });
  }
};
