import { CreateCollection } from "./ChromaDB.helper";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

export const EmbeddingsHelper = async ({ docs, pdfPath }) => {
  try {
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

    const response = CreateCollection(context, pdfPath);

    if (!response) {
      return Response.json({
        error: "No response found",
      });
    }

    const resData = response.data;
    const resMessage = response.message;

    return new Response({
      data: resData,
      message: resMessage,
    });
  } catch (error) {
    return Response.json({ error: "Failed to Embed the Text!" });
  }
};
