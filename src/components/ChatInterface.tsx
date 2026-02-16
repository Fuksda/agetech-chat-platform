"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { generateResponse, type ChatMessage } from "@/lib/chat-engine";

const SUGGESTED_QUESTIONS = [
  "What categories are in the market map?",
  "Show me caregiving companies",
  "I need fall detection solutions",
  "Tell me about companionship technology",
  "What smart home solutions exist for seniors?",
  "Show me robotics companies",
];

export default function ChatInterface() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm the **AgeTech Directory Assistant**. I can help you discover companies and solutions from the [2025 AgeTech Market Map](https://thegerontechnologist.com/wp-content/uploads/2025/11/2025-AgeTech-Market-Map-Final-Nov.pdf) by TheGerontechnologist.\n\nAsk me about specific needs, categories, or companies — or try one of the suggestions below!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend(text?: string) {
    const messageText = text || input.trim();
    if (!messageText) return;

    const userMessage: ChatMessage = { role: "user", content: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay for natural feel
    setTimeout(() => {
      const response = generateResponse(messageText);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response },
      ]);
      setIsTyping(false);
    }, 400 + Math.random() * 600);
  }

  function renderMarkdown(text: string) {
    // Simple markdown rendering
    let html = text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-teal-400 underline hover:text-teal-300">$1</a>')
      .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold mt-3 mb-1">$1</h3>')
      .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-3 mb-2">$1</h2>')
      .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc">$1</li>')
      .replace(/^---$/gm, '<hr class="border-gray-600 my-3">')
      .replace(/\n/g, "<br>");

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "assistant" && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
                <Bot size={18} className="text-white" />
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                msg.role === "user"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-800 text-gray-100 border border-gray-700"
              }`}
            >
              <div className="text-sm leading-relaxed">
                {msg.role === "assistant"
                  ? renderMarkdown(msg.content)
                  : msg.content}
              </div>
            </div>
            {msg.role === "user" && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                <User size={18} className="text-white" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3 justify-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
              <Bot size={18} className="text-white" />
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested questions */}
      {messages.length <= 1 && (
        <div className="px-4 pb-2">
          <div className="flex items-center gap-2 mb-2 text-gray-400 text-xs">
            <Sparkles size={14} />
            <span>Suggested questions</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1.5 rounded-full hover:bg-gray-700 hover:border-teal-600 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-gray-800">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about agetech companies, categories, or solutions..."
            className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
            disabled={isTyping}
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="bg-teal-600 hover:bg-teal-500 disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-xl px-4 py-3 transition-colors"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
