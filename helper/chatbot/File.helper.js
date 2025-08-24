import { PDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { EmbeddingsHelper } from "./Embeddings.helper";

export const FileUpload = async () => {
  try {
    const pdfPath =
      "C:/Users/Preethi/Desktop/autopixel/docs/faqChatbot/AutoPixel Digital – Chatbot FAQs & Knowledge Notes.pdf";
    const loader = new PDFLoader(pdfPath);
    const docs = await loader.load();
    if (!docs) {
      return Response.json({ error: "Failed to load PDF document" });
    }
    const response = EmbeddingsHelper(docs, pdfPath);
    const resData = response;
  } catch (error) {
    return Response.json({ error: "Failed to Send Data!" });
  }
};
