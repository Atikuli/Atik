import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// ====================================================
// 1. SCROLL PROGRESS BAR COMPONENT
// ====================================================
export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight === 0) return;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-charcoal/5 dark:bg-white/5 z-[9999] pointer-events-none">
      <div 
        className="h-full bg-gold shadow-[0_1px_8px_rgba(244,178,35,0.8)] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

// ====================================================
// 2. BACK TO TOP BUTTON COMPONENT
// ====================================================
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScrollVisibility, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          whileHover={{ 
            y: -5,
            scale: 1.08,
            boxShadow: '0 10px 20px rgba(244, 178, 35, 0.25)' 
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-2xl bg-charcoal dark:bg-gold hover:bg-gold dark:hover:bg-cream hover:text-charcoal dark:text-charcoal text-cream flex items-center justify-center shadow-lg border border-white/10 dark:border-charcoal/10 transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
