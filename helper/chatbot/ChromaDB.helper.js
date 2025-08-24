import { CloudClient } from "chromadb";
import { embeddings } from "./Agent.helper.js";
import { redis } from "@/lib/redis.js";

const client = new CloudClient({
  apiKey: process.env.CHROMADB_API_KEY,
  tenant: process.env.CHROMADB_TENANT_ID,
  database: process.env.CHROMADB_DATABASE_ID,
});

export const CreateCollection = async ({ context, pdfPath }) => {
  try {
    const CreatedCollection = await collection.add({
      ids: ["id1"],
      documents: [context],
      metadatas: [{ source: pdfPath }],
      embeddings: await embeddings.embedDocuments([context]),
    });

    if (CreatedCollection) {
      return Response.json({ error: "Collection already exists!" });
    }

    return new Response({
      data: CreatedCollection,
      message: "Collection created Successfully!",
    });
  } catch (error) {
    return Response.json({ error: "Failed to create collection" });
  }
};

export const queryResult = async ({ message }) => {
  try {
    if (!message || message.trim() === "") {
      return Response.json({ error: "Message is required" });
    }
    const queryEmbedding = await embeddings.embedQuery(message);

    const collection = await client.getCollection({
      name: "chatbot_faqs",
      embeddingFunction: embeddings,
    });
    const retrievedDocs = await collection.query({
      queryEmbeddings: [queryEmbedding],
      nResults: 3,
      include: ["embeddings", "documents", "distances", "metadatas", "uris"],
    });
    if (!retrievedDocs || !retrievedDocs.documents?.length) {
      return { text: "" }; // no matching context
    }

    const receivedText = retrievedDocs.documents.flat().join("\n");

    return receivedText;
  } catch (error) {
    return Response.json({ error: "Query not found!" });
  }
};
