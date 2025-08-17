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
  const [language, setLanguage] = useState("auto");

  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

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

      const data = await response.json();
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: data.reply,
            timestamp: new Date(),
          },
        ]);
        setIsTyping(false);
      }, 1000);
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
    window.location.href =
      "mailto:autopixel.in@gmail.com?subject=Contact%20Request&body=Hi,%20I%20would%20like%20to%20connect.";
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
          <div className="flex flex-col h-[600px] bg-blue-500 text-white p-4 rounded-2xl shadow-xl">
            <Card className="flex flex-col flex-grow overflow-hidden rounded-2xl bg-transparent text-white">
              <div className="flex justify-between items-center px-4">
                <h2 className="text-lg font-semibold">AI Assistant</h2>
                <Button
                  variant="default"
                  size="icon"
                  onClick={() => setShowChat(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <CardContent className="flex flex-col flex-grow p-4 overflow-y-auto gap-3">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex flex-col max-w-[100%] py-2 rounded-xl text-pretty text-sm ${
                      msg.from === "bot" ? "self-start" : "text-white self-end"
                    }`}
                  >
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                    <span className="text-[10px] text-gray-200 mt-1 self-end">
                      {formatTime(msg.timestamp)}
                    </span>
                  </div>
                ))}
                {isTyping && (
                  <div className="py-2 rounded-xl text-sm text-white self-start max-w-[75%]">
                    <span className="animate-pulse">Typing...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>
              <div className="flex flex-col gap-2 p-4 border-t">
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className={"bg-white text-black"}
                />
                <div className="flex justify-between items-center gap-2 flex-wrap">
                  <div>
                    <Button variant="ghost">
                      <Paperclip className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" onClick={clearChat}>
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
