import React, { useMemo, useState } from "react";
import { Send, MessageCircle, Database, Search, ShieldCheck } from "lucide-react";

const WEBSITE_URL = "https://californiacenterdigitaltwins.com/#/";

// Website-only knowledge base.
// Add each tab/page from the site here after extracting its visible text.
// The chat will only answer from this array.
const WEBSITE_DATA = [
  {
    id: "home",
    page: "Home",
    title: "Digital Twins Projects Hub",
    url: WEBSITE_URL,
    content:
      "Digital Twins Projects Hub. This platform is a collaborative space where innovators, researchers, and students can create, showcase, and track projects from any discipline.",
  },
];

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function searchWebsiteData(question) {
  const queryTokens = tokenize(question);

  if (queryTokens.length === 0) {
    return [];
  }

  return WEBSITE_DATA.map((item) => {
    const haystack = tokenize(`${item.page} ${item.title} ${item.content}`);
    const score = queryTokens.reduce((total, token) => {
      return total + haystack.filter((word) => word.includes(token)).length;
    }, 0);

    return { ...item, score };
  })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);
}

function createWebsiteOnlyAnswer(question) {
  const matches = searchWebsiteData(question);

  if (matches.length === 0) {
    return {
      text:
        "I could not find that in the website data I currently have. Add the matching tab/page text into WEBSITE_DATA and I will answer from it only.",
      sources: [],
    };
  }

  const bestMatches = matches.slice(0, 2);
  const answer = bestMatches
    .map((match) => `${match.title}: ${match.content}`)
    .join("\n\n");

  return {
    text: answer,
    sources: bestMatches.map((match) => ({
      page: match.page,
      url: match.url,
    })),
  };
}

export default function WebsiteOnlyChatRoom() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text:
        "Hi! Ask me about the California Center Digital Twins website. I will answer only from the saved website data.",
      sources: [],
    },
  ]);
  const [input, setInput] = useState("");

  const pages = useMemo(() => WEBSITE_DATA.map((item) => item.page), []);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const response = createWebsiteOnlyAnswer(trimmed);

    setMessages((current) => [
      ...current,
      {
        id: Date.now(),
        sender: "user",
        text: trimmed,
        sources: [],
      },
      {
        id: Date.now() + 1,
        sender: "bot",
        text: response.text,
        sources: response.sources,
      },
    ]);

    setInput("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 grid md:grid-cols-[280px_1fr]">
        <aside className="bg-slate-950 text-white p-5 hidden md:flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-white/10 flex items-center justify-center">
              <Database size={22} />
            </div>
            <div>
              <h1 className="font-semibold leading-tight">Website Database</h1>
              <p className="text-xs text-slate-400">Site-only chat source</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white/10 p-4 space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium">
              <ShieldCheck size={16} />
              Locked to website data
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              This chat searches only the saved content from californiacenterdigitaltwins.com.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">Pages loaded</p>
            <div className="space-y-2">
              {pages.map((page) => (
                <div key={page} className="rounded-xl bg-white/10 px-3 py-2 text-sm">
                  {page}
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className="flex flex-col min-h-[650px]">
          <div className="bg-white p-4 border-b border-slate-200 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center md:hidden">
              <MessageCircle size={21} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">California Center Digital Twins Chat</h2>
              <p className="text-sm text-slate-500">Answers are generated from website data only.</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                    message.sender === "user"
                      ? "bg-slate-900 text-white rounded-br-sm"
                      : "bg-white text-slate-800 border border-slate-200 rounded-bl-sm"
                  }`}
                >
                  {message.text}

                  {message.sources.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-slate-200 text-xs text-slate-500">
                      Source: {message.sources.map((source) => source.page).join(", ")}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-white border-t border-slate-200">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask from the website database..."
                  className="w-full rounded-xl border border-slate-300 pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
              <button
                onClick={sendMessage}
                className="rounded-xl bg-slate-900 text-white px-4 flex items-center justify-center hover:bg-slate-700 transition"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
