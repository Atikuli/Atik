import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Double check if device is mobile or primary touch to fully disable
    const checkDevice = () => {
      const hasTouch = window.matchMedia('(pointer: coarse)').matches;
      const isSmallScreen = window.innerWidth < 1024;
      setIsMobile(hasTouch || isSmallScreen);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    // 2. Position tracking variables
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    // Set initial off-screen
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    // Use GSAP quickTo for highly optimized rendering loop (runs at 120hz+)
    const dotXTo = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3.out' });
    const dotYTo = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3.out' });
    
    const ringXTo = gsap.quickTo(ring, 'x', { duration: 0.4, ease: 'power2.out' });
    const ringYTo = gsap.quickTo(ring, 'y', { duration: 0.4, ease: 'power2.out' });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      dotXTo(clientX);
      dotYTo(clientY);
      ringXTo(clientX);
      ringYTo(clientY);
    };

    // 3. Hover elements styling controller
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.closest('button') || 
        target.closest('a') || 
        target.closest('select') || 
        target.closest('input') || 
        target.closest('textarea') || 
        target.closest('.cursor-pointer') ||
        target.classList.contains('swiper-button-prev') ||
        target.classList.contains('swiper-button-next') ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A';

      if (isClickable) {
        gsap.to(ring, {
          scale: 1.8,
          backgroundColor: 'rgba(244, 178, 35, 0.15)',
          borderColor: '#F4B223',
          borderWidth: '1.5px',
          duration: 0.3
        });
        gsap.to(dot, {
          scale: 1.5,
          backgroundColor: '#F4B223',
          duration: 0.3
        });
      } else {
        gsap.to(ring, {
          scale: 1,
          backgroundColor: 'transparent',
          borderColor: '#F4B223',
          borderWidth: '1px',
          duration: 0.3
        });
        gsap.to(dot, {
          scale: 1,
          backgroundColor: '#F4B223',
          duration: 0.3
        });
      }
    };

    // Handle mouse leaving window
    const handleMouseLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
    };

    const handleMouseEnter = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Inner Precision Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-gold rounded-full pointer-events-none z-[99999] mix-blend-difference"
        style={{ transform: 'translate3d(0px, 0px, 0px)', willChange: 'transform' }}
      />
      {/* Outer Smooth Trailing Ring with glowing border */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-gold pointer-events-none z-[99998]"
        style={{ 
          transform: 'translate3d(0px, 0px, 0px)', 
          willChange: 'transform',
          boxShadow: '0 0 10px rgba(244, 178, 35, 0.15)'
        }}
      />
    </>
  );
}
