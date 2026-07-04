import React, { useState } from 'react';
import { faqItems } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 px-6 sm:px-12 lg:px-16 border-t border-[#222222]/5 dark:border-white/5 bg-white/30 dark:bg-black/10 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-14 text-left" data-aos="fade-up">
          <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">Inquiries</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal dark:text-cream mt-1">Frequently Asked Questions</h2>
          <div className="w-12 h-1 bg-gold mt-4 rounded-full" />
        </div>

        {/* FAQs Accordion Stack */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`rounded-[1.5rem] border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white dark:bg-[#1a1a1a] border-gold shadow-md'
                    : 'bg-white/70 dark:bg-[#1a1a1a]/70 border-charcoal/5 dark:border-white/5 hover:border-charcoal/10 dark:hover:border-white/10 hover:bg-white dark:hover:bg-[#1a1a1a]'
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full py-5 px-6 sm:py-6 sm:px-8 text-left flex justify-between items-center gap-4 cursor-pointer focus:outline-none select-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                      isOpen ? 'bg-gold text-charcoal' : 'bg-[#FAF6EA] dark:bg-[#121212] text-muted-dark dark:text-gray-400 group-hover:bg-gold/15 group-hover:text-gold'
                    }`}>
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="font-display font-bold text-sm sm:text-base text-charcoal dark:text-cream leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <div className={`w-6 h-6 rounded-full border border-charcoal/10 dark:border-white/10 flex items-center justify-center text-charcoal dark:text-cream transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-gold/10 border-gold/20 text-gold' : 'bg-transparent'
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {/* Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 sm:px-8 sm:pb-7 text-left border-t border-charcoal/5 dark:border-white/5">
                        <p className="text-xs sm:text-sm text-muted-dark dark:text-gray-300 leading-relaxed font-sans font-light whitespace-pre-line">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Help Card Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-[2rem] bg-charcoal dark:bg-[#1c1c1a] text-[#FAF6EA] border border-charcoal dark:border-gold/20 text-center space-y-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
              <MessageSquare className="w-4.5 h-4.5 text-gold" /> Have a bespoke technical or design question?
            </h4>
            <p className="text-xs text-white/75 font-sans font-light">
              Send a detailed brief directly. I will analyze your files and revert with solid advice.
            </p>
          </div>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-6 py-3 bg-gold hover:bg-white dark:hover:bg-[#1a1a1a] dark:hover:text-gold text-charcoal rounded-xl font-bold text-xs uppercase tracking-wider font-mono transition-all shrink-0 cursor-pointer shadow-sm hover:shadow-gold/15"
          >
            Consult Atik Now
          </button>
        </div>

      </div>
    </section>
  );
}
