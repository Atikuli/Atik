import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if loaded in this session to instantly skip if needed
    const hasLoaded = sessionStorage.getItem('portfolio-session-loaded');
    if (hasLoaded) {
      onComplete();
      return;
    }

    // Step-by-step organic loading simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDone(true);
          return 100;
        }
        // Increment by varying amounts for a more realistic feel
        const randomIncrement = Math.floor(Math.random() * 12) + 5;
        return Math.min(prev + randomIncrement, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Handle completion animation ending
  useEffect(() => {
    if (isDone) {
      const timeout = setTimeout(() => {
        sessionStorage.setItem('portfolio-session-loaded', 'true');
        onComplete();
      }, 600); // Wait for the fade-out duration
      return () => clearTimeout(timeout);
    }
  }, [isDone, onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 bg-[#FAF6EA] dark:bg-[#121212] z-[9999] flex flex-col items-center justify-center p-6 selection:bg-transparent"
        >
          {/* Glowing Ambient Backdrop Accent */}
          <div className="absolute w-[350px] h-[350px] bg-gold/15 dark:bg-gold/5 rounded-full blur-[100px] pointer-events-none animate-pulse" />

          <div className="relative text-center flex flex-col items-center max-w-sm w-full">
            
            {/* Logo Wrapper with elegant zoom and rotation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6"
            >
              <div className="w-24 h-24 rounded-3xl bg-white dark:bg-[#1a1a1a] shadow-xl dark:shadow-black/40 border border-charcoal/5 dark:border-white/5 flex items-center justify-center p-2.5">
                <img
                  src="https://res.cloudinary.com/davtdct3r/image/upload/f_auto,q_auto/image-clean_mrkr6l"
                  alt="Atik Hamim Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -inset-1 rounded-3xl bg-gold/30 blur-md pointer-events-none -z-10" />
            </motion.div>

            {/* Display Name Atik Hamim */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-1.5 text-center mb-10"
            >
              <h2 className="font-display font-bold text-3xl text-charcoal dark:text-cream tracking-tight">
                Atik Hamim
              </h2>
              <p className="text-xs uppercase font-mono tracking-widest text-gold font-bold">
                Design Creative &bull; Support Specialist
              </p>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-full h-1 bg-charcoal/10 dark:bg-white/10 rounded-full overflow-hidden relative mb-4">
              <motion.div
                className="absolute left-0 top-0 bottom-0 bg-gold rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ type: 'spring', stiffness: 80, damping: 15 }}
              />
            </div>

            {/* Percentage counter in terminal style */}
            <motion.span 
              className="text-[11px] font-mono font-bold text-muted-dark dark:text-gray-400 tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              SYS_BOOT_PROGRESS: <span className="text-gold font-bold">{progress}%</span>
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
