import dotenv from "dotenv";
import { AgentHelper } from "@/helper/chatbot/Agent.helper";
//import { redis } from "@/lib/redis";

dotenv.config();

// In-memory IP map for rate limiting
const ipMap = new Map();
const WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 10;

function checkRateLimit(ip) {
  const now = Date.now();
  let record = ipMap.get(ip);

  if (!record) {
    ipMap.set(ip, { count: 1, start: now });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  if (now - record.start < WINDOW) {
    if (record.count >= MAX_REQUESTS) {
      return { allowed: false, retryAfter: WINDOW - (now - record.start) };
    }
    record.count++;
    ipMap.set(ip, record);
    return { allowed: true, remaining: MAX_REQUESTS - record.count };
  }

  // Reset window
  ipMap.set(ip, { count: 1, start: now });
  return { allowed: true, remaining: MAX_REQUESTS - 1 };
}

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message || message.trim() === "") {
      return Response.json({ error: "Message is required" });
    }

    //const cacheKey = `chatbot_faqs:${message}`;
    //const cached = await redis.get(cacheKey);
    //
    //if (cached) {
    //  const cachedData = JSON.parse(cached);
    //  const encoder = new TextEncoder();
    //  const textChunks = cachedData.text;
    //  const readableStream = new ReadableStream({
    //    async start(controller) {
    //      await new Promise((res) => setTimeout(res, 30));
    //      for (const chunk of textChunks) {
    //        controller.enqueue(
    //          encoder.encode(`data: ${JSON.stringify({ content: chunk })}\n\n`)
    //        );
    //      }
    //      controller.close();
    //    },
    //  });
    //
    //  return new Response(readableStream, {
    //    headers: {
    //      "Content-Type": "text/event-stream",
    //      "Cache-Control": "no-cache",
    //      Connection: "keep-alive",
    //    },
    //  });
    //}

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const rate = checkRateLimit(ip);
    if (!rate.allowed) {
      return new Response(
        JSON.stringify({
          error: `Rate limit exceeded. Try again in ${Math.ceil(
            rate.retryAfter / 1000
          )}s.`,
        }),
        { status: 429, headers: { "Content-Type": "application/json" } }
      );
    }

    //calling AgentHelper
    const result = await AgentHelper(message);

    if (result.error) {
      return Response.json({ error: result.error });
    }
    console.log(result);
    
    const encoder = new TextEncoder();

    //let finalText = "";

    const readableStream = new ReadableStream({
      async start(controller) {
        await new Promise((res) => setTimeout(res, 30));
        for await (const chunk of result) {
          const delta = chunk.choices?.[0]?.delta?.content || "";
          if (delta) {
            //finalText += delta;
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({ content: delta })}\n\n`)
            );
          }
        }
        //await redis.set(cacheKey, JSON.stringify({ text: finalText }), {
        //  ex: 30,
        //});
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
