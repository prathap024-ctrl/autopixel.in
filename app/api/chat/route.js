import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req) {
  try {
    const { message } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: message }] }],
    });
    const reply =
      response.candidates[0].content.parts[0].text ||
      "Sorry, I didn't understand that.";
    return Response.json({ reply });
  } catch (error) {
    console.log("Error:", error);
    return Response.json({ error: "Failed to generate response" });
  }
}
