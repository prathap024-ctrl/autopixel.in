import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mic,
  Paperclip,
  RefreshCw,
  Send,
  MessageCircle,
  X,
} from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function Chatbot() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chat-history");
    try {
      return saved
        ? JSON.parse(saved)
        : [
            {
              from: "bot",
              text: "Hi! How can I help you today?",
              timestamp: new Date(),
            },
          ];
    } catch (e) {
      return [
        {
          from: "bot",
          text: "Hi! How can I help you today?",
          timestamp: new Date(),
        },
      ];
    }
  });

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [language, setLanguage] = useState("auto");
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  const supportedLanguages = [
    { code: "auto", label: "Auto Detect" },
    { code: "hi-IN", label: "Hindi" },
    { code: "ta-IN", label: "Tamil" },
    { code: "te-IN", label: "Telugu" },
    { code: "kn-IN", label: "Kannada" },
    { code: "ml-IN", label: "Malayalam" },
    { code: "mr-IN", label: "Marathi" },
    { code: "bn-IN", label: "Bengali" },
    { code: "gu-IN", label: "Gujarati" },
    { code: "pa-IN", label: "Punjabi" },
    { code: "ur-IN", label: "Urdu" },
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [
      ...messages,
      { from: "user", text: input, timestamp: new Date() },
    ];
    setMessages(newMessages);
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: `**You said:** ${input}`, timestamp: new Date() },
      ]);
      setIsTyping(false);
    }, 1000);

    setInput("");
  };

  useEffect(() => {
    localStorage.setItem("chat-history", JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("Speech recognition not supported");

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.lang = language === "auto" ? undefined : language;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };
    recognition.onerror = (err) => alert("Voice error: " + err.error);
    recognition.start();
  };

  const clearChat = () => {
    localStorage.removeItem("chat-history");
    setMessages([]);
  };


  return (
    <>
      {/* FAB Launcher Button */}
      {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          className="fixed bottom-4 right-4 bg-black hover:bg-gray-900 text-white p-4 rounded-full shadow-lg z-50 cursor-pointer"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chatbox UI with slide/fade animation */}
      {showChat && (
        <div className="fixed bottom-4 right-4 w-full max-w-md z-50 transition-all duration-300 ease-in-out transform animate-fadeInUp">
          <div className="flex flex-col h-[600px] bg-gradient-to-b from-gray-900 to-black text-white p-4 rounded-2xl shadow-xl">
            <Card className="flex flex-col flex-grow overflow-hidden rounded-2xl shadow-lg bg-transparent text-white">
              {/* Close button inside */}
              <div className="flex justify-between items-center px-4">
                <h2 className="text-lg font-semibold">AI Assistant</h2>
                <Button
                  variant="ghost"
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
                    className={`flex flex-col max-w-[75%] px-4 py-2 rounded-xl text-sm ${
                      msg.from === "bot"
                        ? "self-start"
                        : "text-white self-end"
                    }`}
                  >
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                    <span className="text-[10px] text-gray-200 mt-1 self-end">
                      {formatTime(msg.timestamp)}
                    </span>
                  </div>
                ))}
                {isTyping && (
                  <div className="px-4 py-2 rounded-xl text-sm text-white self-start max-w-[75%]">
                    <span className="animate-pulse">Typing...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>

              {/* Input + Controls */}
              <div className="flex flex-col gap-2 p-4 border-t bg-transparent">
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full"
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <div className="flex flex-wrap gap-2 justify-between items-center">
                  <div className="flex gap-2 flex-wrap">
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="border rounded-md p-2 text-sm bg-black"
                    >
                      {supportedLanguages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                          {lang.label}
                        </option>
                      ))}
                    </select>
                    <Button variant="ghost">
                      <Paperclip className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" onClick={handleVoice}>
                      <Mic className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" onClick={clearChat}>
                      <RefreshCw className="h-5 w-5" />
                    </Button>
                    <Button onClick={handleSend}>
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
