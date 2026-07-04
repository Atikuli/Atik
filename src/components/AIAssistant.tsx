import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, User, HelpCircle, ArrowRight, Loader2, Bot } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

export default function AIAssistant() {
  const { language, theme } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: language === 'bn' 
        ? 'হ্যালো! আমি আতিকের এআই অ্যাসিস্ট্যান্ট। আমি আতিক হামিমের কাজ, দক্ষতা বা সার্টিফিকেশন সম্পর্কে আপনার প্রশ্নের উত্তর দিতে পারি। আজ আপনাকে কীভাবে সাহায্য করতে পারি?' 
        : 'Hello! I am Atik\'s AI Assistant. I can answer questions about Atik Hamim\'s design portfolio, technical skills, services, and certifications. How can I assist you today?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Handle active language change for initial message
  useEffect(() => {
    if (messages.length === 1) {
      setMessages([
        {
          role: 'assistant',
          text: language === 'bn' 
            ? 'হ্যালো! আমি আতিকের এআই অ্যাসিস্ট্যান্ট। আমি আতিক হামিমের কাজ, দক্ষতা বা সার্টিফিকেশন সম্পর্কে আপনার প্রশ্নের উত্তর দিতে পারি। আজ আপনাকে কীভাবে সাহায্য করতে পারি?' 
            : 'Hello! I am Atik\'s AI Assistant. I can answer questions about Atik Hamim\'s design portfolio, technical skills, services, and certifications. How can I assist you today?'
        }
      ]);
    }
  }, [language]);

  const suggestions = language === 'bn' ? [
    { text: 'আতিক কে?', query: 'Who is Atik?' },
    { text: 'সেবা সমূহ কি কি?', query: 'What services does he offer?' },
    { text: 'সার্টিফিকেশন কি কি আছে?', query: 'What certifications does he have?' },
    { text: 'ফ্রিল্যান্সিং এর জন্য উপলব্ধ?', query: 'Is he available for freelance?' },
    { text: 'যোগাযোগের তথ্য কি?', query: 'How can I contact him?' }
  ] : [
    { text: 'Who is Atik?', query: 'Who is Atik Hamim?' },
    { text: 'What services does he offer?', query: 'What services does he provide?' },
    { text: 'What certifications does he have?', query: 'What certifications does he have?' },
    { text: 'Is he available for freelance?', query: 'Are you available for freelance work?' },
    { text: 'How can I contact him?', query: 'How can I contact him?' }
  ];

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = { role: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: messages.slice(1) // omit greeting to save context space and align clean
        })
      });

      if (!response.ok) {
        throw new Error('API pipeline failed');
      }

      const data = await response.json();
      const botMsg: Message = { role: 'assistant', text: data.reply };
      setMessages((prev) => [...prev, botMsg]);

    } catch (error) {
      console.error('Error fetching AI Assistant reply:', error);
      const fallbackMsg: Message = {
        role: 'assistant',
        text: language === 'bn'
          ? 'দুঃখিত, সংযোগে ত্রুটি হয়েছে। অনুগ্রহ করে সরাসরি আতিকের সাথে mdatikulislamhamim68@gmail.com অথবা +8801316839703 নম্বরে যোগাযোগ করুন।'
          : 'I encountered an issue connecting to my brain. Please contact Atik directly at mdatikulislamhamim68@gmail.com or call +8801316839703!'
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="ai-assistant-widget" className="fixed bottom-6 left-6 z-40 select-none">
      
      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-charcoal dark:bg-[#FAF6EA] text-[#FAF6EA] dark:text-charcoal flex items-center justify-center shadow-2xl border-2 border-gold cursor-pointer transition-all hover:shadow-gold/25 relative"
        aria-label="Open AI Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat-icon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageSquare className="w-6 h-6" />
              {/* Active breathing notification dot */}
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-charcoal dark:border-[#FAF6EA] rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-charcoal dark:border-[#FAF6EA] rounded-full" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Widget Drawer Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="absolute bottom-18 left-0 w-[350px] sm:w-[380px] max-w-[90vw] h-[520px] bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-xl rounded-3xl border border-charcoal/10 dark:border-white/10 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-charcoal dark:bg-[#121212] border-b border-white/5 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gold/15 border border-gold/35 flex items-center justify-center text-gold">
                  <Bot className="w-5 h-5 animate-pulse" />
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-display font-bold flex items-center gap-1.5 leading-none">
                    Atik's AI Copilot
                    <Sparkles className="w-3.5 h-3.5 text-gold" />
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1 leading-none">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-mono tracking-wider text-emerald-400 font-bold uppercase">Ready</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Assistant"
              >
                <X className="w-4 h-4 text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* Chat Conversation Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gold/25 scrollbar-track-transparent">
              {messages.map((msg, index) => {
                const isBot = msg.role === 'assistant';
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-2.5 ${isBot ? 'justify-start text-left' : 'justify-end text-right'}`}
                  >
                    {isBot && (
                      <div className="w-7 h-7 rounded-lg bg-gold/10 text-gold flex items-center justify-center shrink-0">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}
                    
                    <div className="max-w-[80%] space-y-0.5">
                      <div className={`px-4 py-2.5 rounded-2xl text-xs leading-relaxed font-sans ${
                        isBot 
                          ? 'bg-[#FAF6EA] dark:bg-[#262626] text-charcoal dark:text-cream border border-charcoal/[0.04] dark:border-white/[0.04]' 
                          : 'bg-gold text-charcoal font-semibold rounded-br-none'
                      }`}>
                        {msg.text}
                      </div>
                      <span className="text-[9px] font-mono text-muted-dark dark:text-gray-500 block px-1">
                        {isBot ? 'Assistant' : 'You'}
                      </span>
                    </div>

                    {!isBot && (
                      <div className="w-7 h-7 rounded-lg bg-gold/10 text-gold flex items-center justify-center shrink-0">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                  </motion.div>
                );
              })}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex gap-2.5 justify-start text-left">
                  <div className="w-7 h-7 rounded-lg bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-[#FAF6EA] dark:bg-[#262626] px-4 py-2.5 rounded-2xl border border-charcoal/[0.04] dark:border-white/[0.04] flex items-center gap-1.5">
                    <Loader2 className="w-4 h-4 text-gold animate-spin" />
                    <span className="text-xs font-mono text-muted-dark dark:text-gray-400">Typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips Footer */}
            <div className="px-4 py-2 border-t border-charcoal/5 dark:border-white/5 bg-gray-50/50 dark:bg-black/10">
              <div className="text-[10px] font-mono text-muted-dark dark:text-gray-500 mb-1.5 text-left font-bold uppercase tracking-wider flex items-center gap-1">
                <HelpCircle className="w-3 h-3 text-gold" />
                {language === 'bn' ? 'প্রস্তাবিত প্রশ্নাবলী:' : 'Suggested Questions:'}
              </div>
              <div className="flex flex-wrap gap-1.5 overflow-x-auto max-h-[85px] pb-1 scrollbar-thin">
                {suggestions.map((chip, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(chip.query)}
                    className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white dark:bg-[#2a2a2a] hover:bg-gold/15 dark:hover:bg-gold/15 hover:text-gold text-charcoal dark:text-cream border border-charcoal/10 dark:border-white/10 transition-all cursor-pointer hover:scale-[1.02] flex items-center gap-1 shrink-0"
                  >
                    {chip.text}
                    <ArrowRight className="w-2.5 h-2.5 text-gold" />
                  </button>
                ))}
              </div>
            </div>

            {/* Message Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 border-t border-charcoal/5 dark:border-white/5 bg-white dark:bg-[#1a1a1a] flex gap-2 items-center"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={language === 'bn' ? 'আতিককে নিয়ে প্রশ্ন করুন...' : 'Ask about Atik...'}
                className="flex-1 bg-charcoal/5 dark:bg-white/5 border border-charcoal/10 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-charcoal dark:text-cream focus:outline-none focus:border-gold/50"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="w-9 h-9 rounded-xl bg-charcoal hover:bg-gold dark:bg-[#FAF6EA] dark:hover:bg-gold text-white dark:text-charcoal hover:text-charcoal flex items-center justify-center shrink-0 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
