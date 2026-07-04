import { useState, useEffect } from 'react';
import { ArrowUp, Facebook, Linkedin, Github, Dribbble, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-12 px-6 sm:px-12 lg:px-16 border-t border-[#222222]/5 bg-white/20 relative">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left copyright */}
        <div className="text-center sm:text-left space-y-1">
          <p className="text-xs text-muted-dark font-sans font-light">
            © 2026 <span className="font-semibold text-charcoal">{personalInfo.displayName}</span>. {personalInfo.address}. All rights reserved.
          </p>
          <p className="text-[10px] text-muted-dark/70 font-mono tracking-wider">
            Premium Portfolio Template • Graphic Design & IT Support
          </p>
        </div>

        {/* Middle Social Link Row */}
        <div className="flex gap-3">
          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-charcoal/5 text-muted-dark hover:text-gold hover:border-gold transition-all" aria-label="Facebook">
            <Facebook className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-charcoal/5 text-muted-dark hover:text-gold hover:border-gold transition-all" aria-label="LinkedIn">
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-charcoal/5 text-muted-dark hover:text-gold hover:border-gold transition-all" aria-label="GitHub">
            <Github className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-charcoal/5 text-muted-dark hover:text-gold hover:border-gold transition-all" aria-label="Dribbble">
            <Dribbble className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-charcoal/5 text-muted-dark hover:text-gold hover:border-gold transition-all" aria-label="Behance">
            <Globe className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ scale: 0, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 15 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 w-12 h-12 rounded-full bg-charcoal hover:bg-gold text-white hover:text-charcoal flex items-center justify-center transition-all shadow-lg hover:shadow-gold/25 cursor-pointer border border-white/10"
            aria-label="Back To Top"
          >
            <ArrowUp className="w-5 h-5 animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
