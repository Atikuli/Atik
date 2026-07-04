import { useState, useEffect } from 'react';
import { testimonials } from '../data';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SafeImage from './SafeImage';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  // Slide transition configurations for premium horizontal movement
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.96
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 28 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 120 : -120,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 28 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 }
      }
    })
  };

  return (
    <section id="testimonials" className="py-24 px-6 sm:px-12 lg:px-16 border-t border-[#222222]/5 dark:border-white/5 relative overflow-hidden bg-gradient-to-b from-transparent to-[#FAF6EA]/10 dark:to-black/30">
      
      {/* 3D Ambient Blur Background Glows */}
      <div className="absolute top-1/4 left-1/12 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold bg-gold/10 px-3.5 py-1.5 rounded-full">Endorsements</span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-charcoal dark:text-cream mt-3 tracking-tight">Client Reviews</h2>
          <div className="w-12 h-1 bg-gold mx-auto mt-5 rounded-full" />
        </div>

        {/* Swiper Slider Wrapper */}
        <div className="relative max-w-4xl mx-auto min-h-[380px] sm:min-h-[320px] flex flex-col justify-between">
          
          {/* Quote Watermark Icon */}
          <div className="absolute -top-12 -left-8 text-gold/5 pointer-events-none z-0">
            <Quote className="w-36 h-36 transform -scale-x-100" />
          </div>

          {/* Slider Container with AnimatePresence */}
          <div className="relative overflow-hidden w-full grow flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-white/60 dark:bg-[#1a1a1a]/60 backdrop-blur-md rounded-[2.5rem] p-8 sm:p-12 shadow-[0_20px_40px_rgba(212,175,55,0.04)] hover:shadow-[0_25px_50px_rgba(212,175,55,0.08)] border border-white/80 dark:border-white/5 w-full relative z-10 transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
                  
                  {/* Left Column: Avatar & Rating */}
                  <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                    
                    {/* Circle Avatar with golden pulse glow */}
                    <div className="relative w-24 h-24">
                      <div className="absolute inset-0 rounded-full bg-gold/20 blur-md animate-pulse" />
                      <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gold p-0.5 bg-white dark:bg-[#111111] shadow-md">
                        <SafeImage 
                          src={currentTestimonial.avatar} 
                          fallbackSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
                          alt={currentTestimonial.name}
                          category="branding"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Meta labels */}
                    <div>
                      <h3 className="font-display font-extrabold text-lg text-charcoal dark:text-cream leading-tight">
                        {currentTestimonial.name}
                      </h3>
                      <p className="text-xs text-muted-dark dark:text-gray-400 mt-1 font-mono font-medium">
                        {currentTestimonial.role}, <span className="text-gold font-bold">{currentTestimonial.company}</span>
                      </p>
                    </div>

                    {/* Star Rating Panel */}
                    <div className="flex gap-1 bg-[#FAF6EA] dark:bg-[#121212] border border-charcoal/5 dark:border-white/5 px-3 py-1 rounded-full shadow-inner">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                      ))}
                    </div>

                  </div>

                  {/* Right Column: Narrative Review Statement */}
                  <div className="md:col-span-8 space-y-4 flex flex-col justify-center">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-gold font-bold bg-gold/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 self-start shadow-sm border border-gold/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                      Verified Client Endorsement
                    </span>
                    <p className="text-base sm:text-lg text-charcoal dark:text-cream font-sans font-light italic leading-relaxed text-left drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] dark:drop-shadow-none">
                      "{currentTestimonial.review}"
                    </p>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Navigation Control Panel */}
          <div className="flex justify-between items-center mt-10 px-6 relative z-20">
            {/* Custom Styled Pagination Dots */}
            <div className="flex justify-start items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex 
                      ? 'w-7 bg-gold shadow-[0_0_8px_rgba(212,175,55,0.5)]' 
                      : 'w-2.5 bg-charcoal/15 dark:bg-white/15 hover:bg-charcoal/30 dark:hover:bg-white/30'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows with ripple styled hovers */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-xl bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-md border border-charcoal/10 dark:border-white/10 shadow-sm hover:shadow-md hover:border-gold hover:text-gold dark:hover:text-gold text-charcoal dark:text-cream flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-xl bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-md border border-charcoal/10 dark:border-white/10 shadow-sm hover:shadow-md hover:border-gold hover:text-gold dark:hover:text-gold text-charcoal dark:text-cream flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
