// Optimized and organized FloatingDock component
"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  MessageCircle,
  Mail,
  FileText,
  Bot,
  Mic,
  Paperclip,
  RefreshCw,
  Send,
  X,
} from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function FloatingDock() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("chat-history");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setMessages(parsed);
      } catch (e) {
        console.warn("Failed to parse saved chat history:", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chat-history", JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const formatTime = (date) =>
    new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { from: "user", text: input, timestamp: new Date() },
    ]);
    setIsTyping(true);
    setInput("");
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "", timestamp: new Date() },
      ]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = JSON.parse(line.slice(6));
            setMessages((prev) => {
              const updated = [...prev];
              const lastMsg = updated[updated.length - 1];

              if (!lastMsg || lastMsg.from !== "bot") {
                updated.push({
                  from: "bot",
                  text: data.content,
                  timestamp: new Date(),
                });
              } else {
                updated[updated.length - 1] = {
                  ...lastMsg,
                  text: lastMsg.text + data.content,
                };
              }
              return updated;
            });
          }
        }
      }

      setIsTyping(false);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Sorry, something went wrong.",
          timestamp: new Date(),
        },
      ]);
    }
  };

  const clearChat = () => {
    localStorage.removeItem("chat-history");
    setMessages([
      {
        from: "bot",
        text: "Hi! How can I help you today?",
        timestamp: new Date(),
      },
    ]);
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/918105871804", "_blank");
  };

  const openForm = () => {
    window.open("https://forms.gle/cdiqS6rrLR1Vds5U9", "_blank");
  };

  const sendEmail = () => {
    const subject = encodeURIComponent("Contact Request");
    const body = encodeURIComponent("Hi, I would like to connect.");

    // Check if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      window.location.href = `mailto:autopixel.in@gmail.com?subject=${subject}&body=${body}`;
    } else {
      const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=autopixel.in@gmail.com&su=${subject}&body=${body}`;
      window.open(gmailUrl, "_blank");
    }
  };
  const handleChatbotClick = () => {
    setShowChat(true);
    document.activeElement?.blur();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className="rounded-full h-14 w-14 p-0 shadow-xl"
            variant="default"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="flex flex-col gap-2 p-4 w-48 bg-black"
        >
          <Button
            variant="default"
            onClick={openWhatsApp}
            className="justify-start gap-2 bg-transparent hover:bg-transparent"
          >
            <MessageCircle className="h-4 w-4 text-green-500" /> WhatsApp
          </Button>
          <Button
            variant="default"
            onClick={openForm}
            className="justify-start gap-2 bg-transparent hover:bg-transparent"
          >
            <FileText className="h-4 w-4 text-blue-500" /> Open Form
          </Button>
          <Button
            variant="default"
            onClick={sendEmail}
            className="justify-start gap-2 bg-transparent hover:bg-transparent"
          >
            <Mail className="h-4 w-4 text-yellow-500" /> Email Us
          </Button>
          {!showChat && (
            <Button
              variant="default"
              onClick={handleChatbotClick}
              className="justify-start gap-2 bg-transparent hover:bg-transparent"
            >
              <Bot className="h-4 w-4 text-white" /> ChatBot
            </Button>
          )}
        </PopoverContent>
      </Popover>

      {showChat && (
        <div className="fixed bottom-5 md:bottom-4 right-0 md:right-4 w-full max-w-md z-50 animate-fadeInUp">
          <div className="flex flex-col h-[600px] bg-blue-400 text-gray-900 p-4 rounded-2xl border-2 border-gray-900">
            <Card className="flex flex-col flex-grow overflow-hidden rounded-2xl border-2 border-gray-900 bg-blue-100 text-gray-900">
              <div className="flex justify-between items-center px-4">
                <h2 className="text-lg font-semibold">Got Questions?</h2>
                <Button
                  variant="default"
                  size="icon"
                  onClick={() => setShowChat(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <CardContent className="flex flex-col flex-grow p-4 bg-white overflow-y-auto gap-3">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex flex-col max-w-[90%] px-2 py-2 rounded-xl text-pretty text-sm ${
                      msg.from === "bot"
                        ? "self-start"
                        : "text-gray-900 self-end"
                    }`}
                  >
                    <ReactMarkdown
                      components={{
                        p: ({ node, ...props }) => (
                          <p className="mb-3 leading-relaxed" {...props} />
                        ),
                        ul: ({ node, ...props }) => (
                          <ul className="mb-3 list-disc pl-5" {...props} />
                        ),
                        ol: ({ node, ...props }) => (
                          <ol className="mb-3 list-decimal pl-5" {...props} />
                        ),
                        li: ({ node, ...props }) => (
                          <li className="mb-1" {...props} />
                        ),
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                    <span className="text-[10px] text-gray-600 mt-1 self-end">
                      {formatTime(msg.timestamp)}
                    </span>
                  </div>
                ))}
                {isTyping && (
                  <div className="text-sm text-gray-900 self-start max-w-[75%]">
                    <span className="animate-pulse">Typing...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>
              <div className="flex flex-col gap-2 p-4 border-t-2 border-gray-900">
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className={"bg-white text-black border-2 border-gray-900"}
                />
                <div className="flex justify-between items-center gap-2 flex-wrap">
                  <div className="space-x-2">
                    <Button>
                      <Paperclip className="h-5 w-5" />
                    </Button>
                    <Button onClick={clearChat}>
                      <RefreshCw className="h-5 w-5" />
                    </Button>
                  </div>
                  <Button onClick={handleSend}>
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
