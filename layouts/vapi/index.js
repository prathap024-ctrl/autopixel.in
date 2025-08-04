"use client";
import React, { useState, useEffect } from "react";
import Vapi from "@vapi-ai/web";

const VapiWidget = ({ apiKey, assistantId, config = {} }) => {
  const [vapi, setVapi] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState([]);

  useEffect(() => {
    const vapiInstance = new Vapi(apiKey);
    setVapi(vapiInstance);

    // Event listeners
    vapiInstance.on("call-start", () => {
      console.log("Call started");
      setIsConnected(true);
    });

    vapiInstance.on("call-end", () => {
      console.log("Call ended");
      setIsConnected(false);
      setIsSpeaking(false);
    });

    vapiInstance.on("speech-start", () => {
      console.log("Assistant started speaking");
      setIsSpeaking(true);
    });

    vapiInstance.on("speech-end", () => {
      console.log("Assistant stopped speaking");
      setIsSpeaking(false);
    });

    vapiInstance.on("message", (message) => {
      if (message.type === "transcript") {
        setTranscript((prev) => [
          ...prev,
          {
            role: message.role,
            text: message.transcript,
          },
        ]);
      }
    });

    vapiInstance.on("error", (error) => {
      console.error("Vapi error:", error);
    });

    return () => {
      vapiInstance?.stop();
    };
  }, [apiKey, setTranscript, setVapi]);

  const startCall = () => {
    if (vapi) {
      vapi.start(assistantId);
    }
  };

  const endCall = () => {
    if (vapi) {
      vapi.stop();
    }
  };

  return (
<div
  style={{
    position: "fixed",
    bottom: "24px",
    right: "24px",
    zIndex: 1000,
    fontFamily: '"Poppins", "Outfit", sans-serif',
  }}
>
  {!isConnected ? (
    <button
      onClick={startCall}
      style={{
        background: "#111827", // gray-900
        color: "#ffffff",
        border: "2px solid #ffffff",
        borderRadius: "50px",
        padding: "16px 24px",
        fontSize: "16px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 6px 16px rgba(255, 255, 255, 0.2)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      🎤 Talk to Assistant
    </button>
  ) : (
    <div
      style={{
        background: "linear-gradient(to bottom, #111827, #000000)",
        borderRadius: "16px",
        padding: "28px",
        width: "420px",
        boxShadow: "0 12px 32px rgba(0, 0, 0, 0.6)",
        border: "1px solid #1f2937",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: isSpeaking ? "#EF4444" : "#10B981",
              animation: isSpeaking ? "pulse 1s infinite" : "none",
            }}
          ></div>
          <span style={{ fontWeight: "600" }}>
            {isSpeaking ? "Assistant Speaking..." : "Listening..."}
          </span>
        </div>
        <button
          onClick={endCall}
          style={{
            background: "#EF4444",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "6px 12px",
            fontSize: "12px",
            cursor: "pointer",
          }}
        >
          End Call
        </button>
      </div>

      <div
        style={{
          maxHeight: "300px",
          overflowY: "auto",
          marginBottom: "20px",
          padding: "10px",
          borderRadius: "12px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {transcript.length === 0 ? (
          <p style={{ color: "#9CA3AF", fontSize: "14px", margin: 0 }}>
            Conversation will appear here...
          </p>
        ) : (
          transcript
            .filter(
              (msg, index, self) =>
                index === 0 || msg.text !== self[index - 1].text
            )
            .map((msg, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "10px",
                  textAlign: msg.role === "user" ? "right" : "left",
                }}
              >
                <span
                  style={{
                    background:
                      msg.role === "user" ? "#10B981" : "transparent",
                    color: "#ffffff",
                    padding: "10px 14px",
                    borderRadius: "14px",
                    display: "inline-block",
                    fontSize: "14px",
                    maxWidth: "80%",
                    border:
                      msg.role === "user" ? "none" : "1px solid #4B5563", // subtle border for assistant
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))
        )}
      </div>
    </div>
  )}

  <style>{`
    @keyframes pulse {
      0% { opacity: 1; }
      50% { opacity: 0.5; }
      100% { opacity: 1; }
    }

    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600&family=Poppins:wght@400;600&display=swap');
  `}</style>
</div>

  );
};

export default VapiWidget;
