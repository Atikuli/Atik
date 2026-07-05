import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { personalInfo } from '../data';
import SafeImage from './SafeImage';
import { Magnetic, RippleButton, Parallax } from './AnimatedElements';
import { useApp } from '../context/AppContext';

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const { t, translate, language } = useApp();
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      const header = document.getElementById('mobile-header');
      if (header) {
        const rect = header.getBoundingClientRect();
        setHeaderHeight(rect.height || header.offsetHeight || 0);
      } else {
        setHeaderHeight(0);
      }
    };

    updateHeight();

    // Setup ResizeObserver for responsive auto-adjustment if header height changes
    let resizeObserver: ResizeObserver | null = null;
    const header = document.getElementById('mobile-header');
    if (header && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        updateHeight();
      });
      resizeObserver.observe(header);
    }

    window.addEventListener('resize', updateHeight);
    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen lg:h-screen flex items-center px-6 sm:px-12 lg:px-16 overflow-hidden relative"
      style={{ paddingTop: headerHeight > 0 ? `${headerHeight}px` : undefined }}
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left column - Content */}
        <div className="flex flex-col justify-center text-left py-4 max-w-[580px] w-full">
          
          <div 
            className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full w-fit mb-5"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            <Sparkles className="w-4 h-4 text-gold fill-gold/20" />
            <span className="text-xs font-semibold tracking-wider text-charcoal dark:text-cream uppercase font-mono">
              {language === 'bn' ? 'পেশাদার দক্ষতা' : 'Professional Expertise'}
            </span>
          </div>

          <div className="mb-4">
            <h1 
              className="text-[34px] sm:text-[46px] lg:text-[56px] font-display font-bold text-charcoal dark:text-cream tracking-tight leading-[1.08]"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              {language === 'bn' ? 'ক্রিয়েটিভ' : 'Creative'} <br className="hidden sm:inline" />
              <span className="relative inline-block text-gold min-h-[1.2em] w-full overflow-hidden select-none">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={titleIndex}
                    initial={{ y: '80%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-80%', opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 right-0 inline-block font-bold truncate md:whitespace-nowrap"
                  >
                    {translate(personalInfo.titles[titleIndex])}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </div>

          <div 
            className="text-sm sm:text-base font-semibold text-charcoal dark:text-cream tracking-wide mb-5 leading-relaxed text-left flex flex-wrap items-center gap-x-2.5 gap-y-1"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <span className="text-gold font-mono uppercase tracking-wider text-[10px] px-2 py-0.5 bg-gold/15 rounded-md font-bold shrink-0">
              {t('general.certification_authority')}
            </span>
            <span className="font-display font-bold text-charcoal/90 dark:text-cream/90">
              {t('general.designer_it')}
            </span>
          </div>

          <p 
            className="text-muted-dark dark:text-gray-300 text-sm sm:text-base max-w-[500px] leading-[1.75] font-sans font-light mb-6"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            {translate(personalInfo.tagline)} {language === 'bn' ? 'ব্র্যান্ড বিল্ডার, প্রিন্ট স্পেশালিস্ট এবং টেকনিক্যাল আইটি সাপোর্ট ইঞ্জিনিয়ার। নান্দনিক নির্ভুলতা এবং নিরাপদ এন্টারপ্রাইজ গ্রেড সহায়তা সরবরাহ করি।' : 'Brand builder, print specialist, and technical IT infrastructure engineer. Delivering aesthetic precision and secure enterprise support.'}
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
                className="group px-6 py-3.5 rounded-xl font-semibold bg-charcoal dark:bg-gold text-[#FAF6EA] dark:text-charcoal text-sm hover:bg-gold hover:text-charcoal dark:hover:bg-[#FAF6EA] dark:hover:text-charcoal shadow-lg hover:shadow-gold/20 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                {t('hero.cta_contact')}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </RippleButton>
            </Magnetic>

            <Magnetic>
              <a
                href={personalInfo.cvUrl}
                className="px-6 py-3.5 rounded-xl font-semibold bg-white dark:bg-[#1a1a1a] border border-[#222222]/15 dark:border-white/15 text-charcoal dark:text-cream text-sm hover:border-gold hover:text-gold shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                {t('general.download_cv')}
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
                className="relative w-[90%] h-[90%] rounded-full overflow-hidden bg-white/40 dark:bg-black/40 backdrop-blur-md p-3 shadow-[0_0_35px_rgba(212,175,55,0.45)] border border-gold/30 flex items-center justify-center cursor-pointer hover:border-gold/60 transition-colors duration-300"
              >
                <div className="w-full h-full rounded-full overflow-hidden relative bg-cream dark:bg-[#1a1a1a]">
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
              whileHover={{ scale: 1.04, y: [0, 8, 0] }}
              transition={{ 
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
                scale: { duration: 0.2 }
              }}
              className="absolute -bottom-6 -right-6 md:-bottom-2 md:-right-2 glass-card rounded-2xl px-5 py-3.5 shadow-lg border border-white/80 dark:border-white/10 flex items-center gap-3.5 z-20 hover:border-gold/30 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] transition-colors duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0 border border-gold/20">
                <Sparkles className="w-5 h-5 fill-gold/10" />
              </div>
              <div className="text-left">
                <span className="block font-display font-bold text-xs sm:text-sm text-charcoal dark:text-cream tracking-wide">
                  {language === 'bn' ? 'এনএসডিএ সার্টিফাইড' : 'NSDA Certified'}
                </span>
                <span className="block text-[9px] text-muted-dark dark:text-gray-300 font-mono uppercase tracking-wide leading-relaxed mt-0.5">
                  • {language === 'bn' ? 'গ্রাফিক্স ডিজাইন (লেভেল-৩)' : 'Graphics Design (L-3)'}<br />
                  • {language === 'bn' ? 'আইটি সাপোর্ট সার্ভিস (লেভেল-৩)' : 'IT Support Service (L-3)'}
                </span>
              </div>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Soft Fade Overlay blending the overlapping image and the section into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream dark:from-[#121212] via-cream/75 dark:via-[#121212]/75 to-transparent pointer-events-none z-20" />
    </section>
  );
}
