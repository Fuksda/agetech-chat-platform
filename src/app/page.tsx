"use client";

import { useState } from "react";
import { MessageCircle, LayoutGrid, ExternalLink } from "lucide-react";
import ChatInterface from "@/components/ChatInterface";
import Directory from "@/components/Directory";

type Tab = "chat" | "directory";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("chat");

  return (
    <div className="h-screen flex flex-col bg-[#0f1117]">
      {/* Header */}
      <header className="border-b border-gray-800 px-4 py-3 flex-shrink-0">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold text-sm">
              AT
            </div>
            <div>
              <h1 className="text-white font-semibold text-sm leading-tight">
                AgeTech Directory
              </h1>
              <p className="text-gray-500 text-xs">
                300+ companies from the 2025 Market Map
              </p>
            </div>
          </div>
          <a
            href="https://thegerontechnologist.com/wp-content/uploads/2025/11/2025-AgeTech-Market-Map-Final-Nov.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-teal-500 hover:text-teal-400 transition-colors"
          >
            View Market Map
            <ExternalLink size={12} />
          </a>
        </div>
      </header>

      {/* Tab bar */}
      <div className="border-b border-gray-800 flex-shrink-0">
        <div className="max-w-5xl mx-auto flex">
          <button
            onClick={() => setActiveTab("chat")}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors border-b-2 ${
              activeTab === "chat"
                ? "text-teal-400 border-teal-400"
                : "text-gray-500 border-transparent hover:text-gray-300"
            }`}
          >
            <MessageCircle size={16} />
            Chat
          </button>
          <button
            onClick={() => setActiveTab("directory")}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors border-b-2 ${
              activeTab === "directory"
                ? "text-teal-400 border-teal-400"
                : "text-gray-500 border-transparent hover:text-gray-300"
            }`}
          >
            <LayoutGrid size={16} />
            Directory
          </button>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 overflow-hidden">
        <div className="max-w-5xl mx-auto h-full">
          {activeTab === "chat" ? <ChatInterface /> : <Directory />}
        </div>
      </main>
    </div>
  );
}
