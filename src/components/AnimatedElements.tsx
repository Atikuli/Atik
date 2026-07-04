import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

// ==========================================
// 1. MAGNETIC COMPONENT
// ==========================================
interface MagneticProps {
  children: React.ReactElement;
  range?: number;
  strength?: number;
}

export function Magnetic({ children, range = 50, strength = 0.35 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;
      const distance = Math.hypot(distanceX, distanceY);

      if (distance < range) {
        // Attract toward cursor
        gsap.to(el, {
          x: distanceX * strength,
          y: distanceY * strength,
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        // Return to original position
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)',
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [range, strength]);

  return React.cloneElement(children, { ref });
}


// ==========================================
// 2. RIPPLE BUTTON
// ==========================================
export function RippleButton({ children, className = '', ...props }: React.ComponentPropsWithoutRef<'button'>) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number; size: number }[]>([]);

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = {
      id: Date.now(),
      x,
      y,
      size,
    };

    setRipples((prev) => [...prev, newRipple]);
  };

  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples((prev) => prev.slice(1));
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  return (
    <button
      className={`relative overflow-hidden ${className}`}
      onClick={(e) => {
        createRipple(e);
        if (props.onClick) props.onClick(e);
      }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-current opacity-25 pointer-events-none animate-ripple"
          style={{
            width: ripple.size,
            height: ripple.size,
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ))}
    </button>
  );
}


// ==========================================
// 3. PARALLAX CONTAINER
// ==========================================
interface ParallaxProps {
  children: React.ReactNode;
  speed?: number; // negative moves opposite, positive moves with scroll
  className?: string;
}

export function Parallax({ children, speed = 0.1, className = '' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const { top } = el.getBoundingClientRect();
      const scrollY = window.scrollY;
      const offset = top * speed;
      gsap.to(el, {
        y: offset,
        duration: 0.1,
        ease: 'none',
        overwrite: 'auto',
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger initially
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}


// ==========================================
// 4. MOUSE MOVEMENT INTERACTIVE BACKGROUND
// ==========================================
export function MouseSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    // Use GSAP quickTo for 120fps mouse tracking performance
    const xTo = gsap.quickTo(spotlight, 'x', { duration: 0.4, ease: 'power3.out' });
    const yTo = gsap.quickTo(spotlight, 'y', { duration: 0.4, ease: 'power3.out' });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX - 100); // offset by half width/height
      yTo(e.clientY - 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="hidden md:block fixed top-0 left-0 w-[200px] h-[200px] rounded-full bg-gold/5 blur-[80px] pointer-events-none z-0"
      style={{ transform: 'translate3d(0, 0, 0)' }}
    />
  );
}
