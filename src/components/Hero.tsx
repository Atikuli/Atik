import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { personalInfo } from '../data';
import SafeImage from './SafeImage';
import { Magnetic, RippleButton, Parallax } from './AnimatedElements';

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="h-screen flex items-center px-6 sm:px-12 lg:px-16 overflow-hidden relative">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left column - Content */}
        <div className="flex flex-col justify-center text-left py-4 max-w-[580px] w-full">
          
          <div 
            className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full w-fit mb-4"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            <Sparkles className="w-4 h-4 text-gold fill-gold/20" />
            <span className="text-xs font-semibold tracking-wider text-charcoal uppercase font-mono">Hi, I'm {personalInfo.displayName}</span>
          </div>

          <div className="mb-[32px]">
            <h1 
              className="text-[34px] sm:text-[46px] lg:text-[56px] font-display font-bold text-charcoal tracking-tight leading-[1.08]"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Creative <br className="hidden sm:inline" />
              <span className="relative inline-block text-gold min-h-[1.2em] w-full">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={titleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute left-0 right-0 inline-block font-bold md:whitespace-nowrap"
                  >
                    {personalInfo.titles[titleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </div>

          <p 
            className="text-muted-dark text-sm sm:text-base lg:text-lg max-w-[540px] leading-[1.8] font-sans font-light"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            {personalInfo.tagline} Brand builder, print specialist, and technical IT infrastructure engineer. Delivering aesthetic precision and secure enterprise support.
          </p>

          <div 
            className="flex flex-wrap gap-4 mt-[22px]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <Magnetic>
              <RippleButton
                onClick={handleScrollToContact}
                className="group px-6 py-3.5 rounded-xl font-semibold bg-charcoal text-[#FAF6EA] text-sm hover:bg-gold hover:text-charcoal shadow-lg hover:shadow-gold/20 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                Hire Me
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </RippleButton>
            </Magnetic>

            <Magnetic>
              <a
                href={personalInfo.cvUrl}
                className="px-6 py-3.5 rounded-xl font-semibold bg-white border border-[#222222]/15 text-charcoal text-sm hover:border-gold hover:text-gold shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Right column - Graphic / Profile Cutout */}
        <div 
          className="flex justify-center items-center relative py-4"
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="relative w-[40vw] h-[40vw] max-w-[420px] max-h-[420px] min-w-[260px] min-h-[260px] flex items-center justify-center translate-y-8 md:translate-y-16 z-10">
            
            {/* Background luxury glowing circle */}
            <div className="absolute inset-4 rounded-full bg-gold/15 blur-2xl animate-pulse" />
            
            {/* Styled Gold Ring Grid Frame */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-dashed border-gold/30 opacity-60"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-6 rounded-full border border-double border-gold/20 opacity-40"
            />

            {/* Parallax & Float wrapper for the main image */}
            <Parallax speed={-0.08} className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ 
                  y: [0, -12, 0],
                  rotate: [0, 1.5, 0, -1.5, 0]
                }}
                transition={{ 
                  y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                  rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
                }}
                className="relative w-[90%] h-[90%] rounded-full overflow-hidden bg-white/40 backdrop-blur-md p-3 shadow-[0_0_35px_rgba(212,175,55,0.45)] border border-gold/30 flex items-center justify-center cursor-pointer hover:border-gold/60 transition-colors duration-300"
              >
                <div className="w-full h-full rounded-full overflow-hidden relative bg-[#FAF6EA]">
                  {/* Visual Accent */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full border border-gold/15 flex items-center justify-center z-20">
                    <div className="w-2 h-2 rounded-full bg-gold animate-ping" />
                  </div>
                  
                  <SafeImage
                    src="https://res.cloudinary.com/davtdct3r/image/upload/f_auto,q_auto/IMG_20260124_210702_1_i7kzyi"
                    fallbackSrc="https://res.cloudinary.com/davtdct3r/image/upload/f_auto,q_auto/IMG_20260124_210702_1_i7kzyi"
                    alt={personalInfo.name}
                    category="branding"
                    loading="lazy"
                    className="w-full h-full object-cover object-center relative z-10 scale-[1.02]"
                  />
                </div>
              </motion.div>
            </Parallax>

            {/* Interactive floating stats node */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-2 -right-2 glass-card rounded-2xl px-5 py-3 shadow-lg border border-white/80 flex items-center gap-3 z-20"
            >
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <Sparkles className="w-4.5 h-4.5 text-gold fill-gold/10" />
              </div>
              <div className="text-left">
                <span className="block font-display font-bold text-sm text-charcoal">5+ Years</span>
                <span className="block text-[10px] text-muted-dark font-mono uppercase tracking-wider">Experience</span>
              </div>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Soft Fade Overlay blending the overlapping image and the section into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF6EA] via-[#FAF6EA]/75 to-transparent pointer-events-none z-20" />
    </section>
  );
}
