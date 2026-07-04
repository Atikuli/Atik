import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Download, Sparkles, Check } from 'lucide-react';
import { Magnetic, RippleButton } from './AnimatedElements';
import { personalInfo } from '../data';

export default function CallToAction() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      window.open(personalInfo.cvUrl, '_blank');
    }, 1500);
  };

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-16 relative overflow-hidden bg-charcoal text-[#FAF6EA]">
      {/* Dynamic Background Accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#FAF6EA" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="absolute -left-1/4 -top-1/4 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -right-1/4 -bottom-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8">
        {/* Visual Badge Accent */}
        <div 
          className="inline-flex items-center gap-1.5 bg-gold/15 border border-gold/30 px-4 py-1.5 rounded-full text-gold font-mono text-[10px] font-bold uppercase tracking-widest"
          data-aos="fade-down"
        >
          <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '3s' }} /> Unleash Synergized Brand Power & IT Security
        </div>

        {/* Catchy Display Heading */}
        <div className="space-y-4 max-w-3xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-[1.1] text-white">
            Ready to Elevate Your Digital Footprint?
          </h2>
          <p className="text-sm sm:text-base font-sans font-light text-white/70 max-w-2xl mx-auto leading-relaxed">
            Whether you require luxury, timeless identity assets that capture customer attention or a highly resilient, cyber-secure network to support your operation, I am here to deploy first-class solutions.
          </p>
        </div>

        {/* Supportive Trust Framework Indicators */}
        <div 
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto py-4 border-y border-white/10 text-left"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <div className="space-y-1">
            <span className="block text-xl font-display font-extrabold text-gold">100%</span>
            <span className="block text-[9px] font-mono uppercase text-white/60 tracking-wider">Project Completion SLA</span>
          </div>
          <div className="space-y-1">
            <span className="block text-xl font-display font-extrabold text-gold">Zero</span>
            <span className="block text-[9px] font-mono uppercase text-white/60 tracking-wider">Network Cyber Breaches</span>
          </div>
          <div className="space-y-1 col-span-2 sm:col-span-1 text-center sm:text-left">
            <span className="block text-xl font-display font-extrabold text-gold">24hr</span>
            <span className="block text-[9px] font-mono uppercase text-white/60 tracking-wider">First Response Guarantee</span>
          </div>
        </div>

        {/* Buttons Action Bar */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Magnetic>
            <RippleButton
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-white text-charcoal rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-gold/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" /> Start Project Brief
            </RippleButton>
          </Magnetic>

          <Magnetic>
            <RippleButton
              onClick={handleDownload}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/35 rounded-xl font-bold text-sm text-white transition-all flex items-center justify-center gap-2 cursor-pointer min-w-[240px]"
            >
              {downloading ? (
                <>
                  <Check className="w-4 h-4 text-gold animate-bounce" />
                  Preparing Secure PDF...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" /> Download Resume (CV)
                </>
              )}
            </RippleButton>
          </Magnetic>
        </div>

      </div>
    </section>
  );
}
