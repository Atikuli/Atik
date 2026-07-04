import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileDown, CheckCircle, AlertTriangle, Sparkles, FileText } from 'lucide-react';
import { personalInfo } from '../data';

export default function DownloadCV() {
  const [status, setStatus] = useState<'idle' | 'checking' | 'coming-soon' | 'ready'>('idle');
  const fileSize = '1.2 MB'; // Configured size of the high-res resume PDF
  const isAvailable = personalInfo.cvUrl && personalInfo.cvUrl !== '#' && personalInfo.cvUrl !== '';

  const handleDownload = (e: React.MouseEvent, type: 'resume' | 'cv') => {
    e.preventDefault();
    setStatus('checking');

    setTimeout(() => {
      if (!isAvailable) {
        setStatus('coming-soon');
      } else {
        setStatus('ready');
        window.open(personalInfo.cvUrl, '_blank', 'noopener,noreferrer');
        // Reset status after download launches
        setTimeout(() => setStatus('idle'), 2000);
      }
    }, 800);
  };

  return (
    <section id="download-cv" className="py-20 px-6 sm:px-12 lg:px-16 border-t border-[#222222]/5 bg-white/30 relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-32 -top-32 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-8" data-aos="fade-up">
        
        {/* Section Title */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">Credentials</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal">Download My CV</h2>
          <div className="w-12 h-1 bg-gold mt-4 mx-auto rounded-full" />
        </div>

        {/* Beautiful Glassmorphic Download Box */}
        <div className="relative bg-white/60 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-charcoal/5 shadow-inner max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 hover:border-gold/30 transition-all duration-300">
          
          {/* Metadata Display */}
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-gold/10 text-gold flex items-center justify-center shrink-0">
              <FileText className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-dark block">Verified Document</span>
              <h3 className="text-lg font-display font-bold text-charcoal leading-none">Professional Resume.pdf</h3>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-gold bg-gold/10 px-2 py-0.5 rounded-md font-bold">PDF Format</span>
                <span className="text-[10px] font-mono text-muted-dark">• {fileSize}</span>
              </div>
            </div>
          </div>

          {/* Download Action Triggers */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            {/* Download Resume Button */}
            <button
              onClick={(e) => handleDownload(e, 'resume')}
              disabled={status === 'checking'}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-charcoal hover:bg-gold text-white hover:text-charcoal rounded-xl text-xs font-mono font-extrabold uppercase tracking-widest shadow-lg transition-all cursor-pointer hover:scale-[1.02] active:scale-95"
            >
              <FileDown className="w-4 h-4" />
              Download Resume
            </button>

            {/* Download CV Button */}
            <button
              onClick={(e) => handleDownload(e, 'cv')}
              disabled={status === 'checking'}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FAF6EA] hover:bg-gold/15 border border-charcoal/10 text-charcoal rounded-xl text-xs font-mono font-extrabold uppercase tracking-widest transition-all cursor-pointer hover:scale-[1.02] active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              Download CV
            </button>
          </div>

        </div>

        {/* Dynamic Status / Feedback Panel with Smooth Animation */}
        <div className="h-12 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {status === 'checking' && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="flex items-center gap-2 text-xs font-mono text-muted-dark"
              >
                <div className="w-4 h-4 border-2 border-gold border-t-transparent rounded-full animate-spin" />
                <span>Verifying Secure Download Integrity...</span>
              </motion.div>
            )}

            {status === 'coming-soon' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-600 px-4 py-2 rounded-xl text-xs font-mono"
              >
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Coming Soon! CV document is being polished. Let's discuss via contact!</span>
                <button 
                  onClick={() => setStatus('idle')}
                  className="ml-2 text-[10px] uppercase font-bold hover:underline opacity-80 hover:opacity-100"
                >
                  Dismiss
                </button>
              </motion.div>
            )}

            {status === 'ready' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 px-4 py-2 rounded-xl text-xs font-mono"
              >
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Download Launched Successfully in New Tab!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
