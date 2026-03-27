import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { gitCurriculum } from "../data/git-curriculum";
import { aiCurriculum } from "../data/ai-curriculum";
import { dockerCurriculum } from "../data/docker-curriculum";
import { githubCurriculum } from "../data/github-curriculum";
import { githubActionsCurriculum } from "../data/github-actions-curriculum";

interface Message {
  role: 'user' | 'model';
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'Hi! I can help you find course information or answer technical questions about Git, GitHub, AI, and Docker. What would you like to know?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // @ts-ignore
      const apiKey = process.env.GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY not set");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      // Prepare context from curriculums
      const allCurriculums = {
        git: gitCurriculum,
        ai: aiCurriculum,
        docker: dockerCurriculum,
        github: githubCurriculum,
        githubActions: githubActionsCurriculum
      };

      // Create a simplified text representation of the curriculum for the model
      let curriculumContext = "Here is the curriculum structure for the available courses:\n\n";
      
      for (const [course, data] of Object.entries(allCurriculums)) {
        curriculumContext += `Course: ${course}\n`;
        const levels = data as any[];
        for (const level of levels) {
          const levelTitle = level.title || level.level;
          curriculumContext += `  Level: ${levelTitle} (${level.description})\n`;
          for (const module of level.modules) {
            curriculumContext += `    - ${module.title}\n`;
          }
        }
        curriculumContext += "\n";
      }

      const systemInstruction = `You are a helpful AI assistant for the "Learn Build Share" platform. 
      Your goal is to help users find information about the courses and answer questions related to the curriculum.
      
      ${curriculumContext}
      
      If a user asks about a specific topic, check if it exists in the curriculum and guide them to the relevant module.
      You can also answer general technical questions related to Git, AI, Docker, GitHub, and GitHub Actions.
      Keep your responses concise, encouraging, and helpful.
      If you are unsure, admit it and suggest they check the course list.`;

      const chat = ai.chats.create({
        model: "gemini-3.1-pro-preview",
        config: {
          systemInstruction: systemInstruction,
        },
        history: messages.map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }]
        })),
      });

      const result = await chat.sendMessage({ message: userMessage });
      const responseText = result.text;

      if (responseText) {
        setMessages(prev => [...prev, { role: 'model', content: responseText }]);
      } else {
        throw new Error("Empty response from AI");
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'model', content: "I'm sorry, I encountered an error. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-indigo-600 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                <span className="font-medium">LBS Assistant</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-indigo-500 p-1 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.role === 'user' ? 'bg-indigo-100 text-indigo-600' : 'bg-emerald-100 text-emerald-600'
                  }`}>
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-tr-none' 
                      : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none shadow-sm'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm flex items-center">
                    <Loader2 className="w-4 h-4 animate-spin text-slate-400" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-indigo-600 text-white p-2 rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-700 transition-colors z-50"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>
    </>
  );
}
