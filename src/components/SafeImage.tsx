import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageOff, Sparkles } from 'lucide-react';

interface SafeImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  category?: string; // Used to customize the abstract fallback illustration style
  loading?: 'lazy' | 'eager';
}

export default function SafeImage({ src, fallbackSrc, alt, className = '', category = 'branding', loading = 'lazy' }: SafeImageProps) {
  const [loadState, setLoadState] = useState<'primary' | 'fallback' | 'vector'>('primary');
  const [isHovered, setIsHovered] = useState(false);

  const handlePrimaryError = () => {
    if (fallbackSrc) {
      setLoadState('fallback');
    } else {
      setLoadState('vector');
    }
  };

  const handleFallbackError = () => {
    setLoadState('vector');
  };

  if (loadState === 'primary') {
    return (
      <img
        src={src}
        alt={alt}
        onError={handlePrimaryError}
        referrerPolicy="no-referrer"
        className={className}
        loading={loading}
      />
    );
  }

  if (loadState === 'fallback') {
    return (
      <img
        src={fallbackSrc}
        alt={alt}
        onError={handleFallbackError}
        referrerPolicy="no-referrer"
        className={className}
        loading={loading}
      />
    );
  }

  // Generate a beautiful luxury-inspired abstract CSS layout placeholder customized for the specific domain
  const getGradientForCategory = () => {
    switch (category) {
      case 'logo':
        return 'from-charcoal via-[#2f2d25] to-[#4e4528]';
      case 'branding':
        return 'from-[#2e2612] via-gold/40 to-cream';
      case 'flyer':
        return 'from-[#d4af37] via-charcoal to-[#1a1a1a]';
      case 'social-media':
        return 'from-[#eed7a1] via-[#e2b34c] to-[#a37c22]';
      case 'packaging':
        return 'from-charcoal via-[#444] to-[#222]';
      case 'print':
        return 'from-[#FAF6EA] via-[#eedbb3] to-gold/30';
      default:
        return 'from-[#222] via-[#444] to-[#111]';
    }
  };

  const getMonogramSymbol = () => {
    switch (category) {
      case 'logo':
        return 'Ω';
      case 'branding':
        return 'Φ';
      case 'flyer':
        return 'Ξ';
      case 'social-media':
        return '◈';
      case 'packaging':
        return '⊞';
      case 'print':
        return '■';
      default:
        return '★';
    }
  };

  return (
    <div 
      className={`relative w-full h-full bg-gradient-to-br ${getGradientForCategory()} flex flex-col items-center justify-center overflow-hidden p-6 text-center select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative luxury vector lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="#F4B223" strokeWidth="1" strokeDasharray="5,5" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="#F4B223" strokeWidth="1" strokeDasharray="5,5" />
          <circle cx="50%" cy="50%" r="30%" stroke="#F4B223" strokeWidth="0.5" fill="none" />
          <circle cx="50%" cy="50%" r="15%" stroke="#F4B223" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Centerpiece Typographic Icon & Visual Feedback */}
      <div className="relative z-10 space-y-3">
        <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mx-auto text-gold shadow-md">
          <span className="font-display font-bold text-2xl tracking-tight leading-none">
            {getMonogramSymbol()}
          </span>
        </div>
        <div>
          <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-white">
            {category.replace('-', ' ')}
          </h4>
          <p className="text-[10px] text-gold/80 font-mono mt-1">ATIK HAMIM BRANDING</p>
        </div>
      </div>

      {/* Corner Luxury Markers */}
      <div className="absolute top-3 left-3 text-[8px] font-mono text-white/40">001 / AH</div>
      <div className="absolute bottom-3 right-3 text-[8px] font-mono text-white/40">GRAPHIC DESIGN</div>
    </div>
  );
}
