import Vapi from "@vapi-ai/web";

const vapi = new Vapi(process.env.VAPI_API_KEY);

vapi.start(process.env.VAPI_ASSISTANT_API_KEY);

vapi.on("call-start", () => console.log("Call started"));
vapi.on("call-end", () => console.log("Call ended"));
vapi.on("message", (message) => {
  if (message.type === "transcript") {
    console.log(`${message.role}: ${message.transcript}`);
  }
});
