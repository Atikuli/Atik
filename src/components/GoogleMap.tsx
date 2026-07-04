import { useState, useEffect } from 'react';
import { MapPin, Compass, Globe, Clock, ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';

export default function GoogleMap() {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // Bangladesh is UTC+6
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const bdTime = new Date(utc + 3600000 * 6);
      
      const hours = bdTime.getHours();
      const minutes = bdTime.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      
      setLocalTime(`${formattedHours}:${formattedMinutes} ${ampm} (GMT+6)`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const mapUrl = `https://www.google.com/maps/place/Court+Rayapara,+Rajshahi,+Bangladesh/@24.3636,88.6241,15z`;

  return (
    <div className="w-full h-full rounded-[2rem] bg-charcoal text-[#FAF6EA] overflow-hidden relative border border-white/10 shadow-xl group">
      {/* Background Tech Grid effect */}
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
      
      {/* Dynamic Gold radial glow behind coordinate beacon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Layout */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
        
        {/* Top Header Row */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-mono tracking-widest text-gold uppercase font-bold flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 animate-spin-slow" />
              Studio Coordinates
            </span>
            <h4 className="font-display font-bold text-base text-[#FAF6EA] tracking-wide">
              {personalInfo.displayName} Studio
            </h4>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1 flex items-center gap-1.5 text-[10px] font-mono text-gold/90 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            LIVE STATUS
          </div>
        </div>

        {/* Center Graphic: Digital Compass and Radar Ring */}
        <div className="flex flex-col items-center justify-center py-2 relative">
          <div className="relative w-28 h-28 rounded-full border border-white/10 flex items-center justify-center">
            {/* Pulsing radar rings */}
            <div className="absolute inset-0 rounded-full border border-gold/20 animate-ping opacity-30" />
            <div className="absolute -inset-4 rounded-full border border-gold/10 animate-pulse opacity-20" />
            
            {/* Center target cursor */}
            <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center relative">
              <MapPin className="w-7 h-7 text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold" />
            </div>
          </div>
          
          <div className="text-center mt-3 space-y-0.5">
            <p className="text-xs font-mono font-bold tracking-wider text-white/90">
              24.3636° N, 88.6241° E
            </p>
            <p className="text-[10px] text-muted-dark/80 font-sans">
              Court Rayapara, Rajshahi, Bangladesh
            </p>
          </div>
        </div>

        {/* Bottom Metadata & CTA Action Link */}
        <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          
          {/* Local Clock Row */}
          <div className="flex items-center gap-2 text-left">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gold/80">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[9px] font-mono uppercase text-muted-dark tracking-wider">Local Studio Time</p>
              <p className="text-xs font-semibold text-white/95 mt-0.5">{localTime || 'Calculating...'}</p>
            </div>
          </div>

          {/* Call To Action Direct Map URL */}
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-gold hover:bg-[#FAF6EA] text-charcoal rounded-xl font-bold text-xs transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md hover:shadow-gold/20 shrink-0 group-hover:scale-[1.03]"
          >
            View on Google Maps
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

        </div>

      </div>

      {/* Modern subtle outline edge details */}
      <div className="absolute top-3 left-3 w-1.5 h-1.5 border-t border-l border-white/20" />
      <div className="absolute top-3 right-3 w-1.5 h-1.5 border-t border-r border-white/20" />
      <div className="absolute bottom-3 left-3 w-1.5 h-1.5 border-b border-l border-white/20" />
      <div className="absolute bottom-3 right-3 w-1.5 h-1.5 border-b border-r border-white/20" />
    </div>
  );
}
