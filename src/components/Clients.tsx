import { clients } from '../data';
import { ShieldCheck, Sparkles, Box, Layout, Globe } from 'lucide-react';
import SafeImage from './SafeImage';

const clientIcons = [Globe, Box, ShieldCheck, Sparkles, Layout];

export default function Clients() {
  // Quadruple the list to ensure a truly dense, seamless horizontal loop
  const marqueeItems = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="py-14 border-t border-b border-[#222222]/5 dark:border-white/5 bg-white/25 dark:bg-black/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 mb-6 text-center">
        <p className="text-[11px] font-mono uppercase tracking-widest text-muted-dark dark:text-gray-400 font-semibold">
          Trusted by Industry Leaders and Creative Brands globally
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex items-center py-4 bg-[#FAF6EA]/50 dark:bg-[#1a1a1a]/50">
        
        {/* Left and Right ambient shading gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAF6EA] dark:from-[#111111] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAF6EA] dark:from-[#111111] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-8 items-center hover:[animation-play-state:paused] cursor-pointer">
          {marqueeItems.map((client, idx) => {
            return (
              <div
                key={`${client.id}-${idx}`}
                className="flex items-center gap-4 bg-white dark:bg-[#1a1a1a] border border-charcoal/5 dark:border-white/5 hover:border-gold/30 dark:hover:border-gold/50 px-6 py-4.5 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-400 cursor-default shrink-0 min-w-[220px] filter grayscale dark:filter-none hover:grayscale-0 opacity-75 hover:opacity-100 group"
              >
                {/* Logo Frame: display the image, or fall back if broken */}
                <div className="w-10 h-10 rounded-full overflow-hidden border border-charcoal/5 dark:border-white/5 flex items-center justify-center shrink-0">
                  <SafeImage 
                    src={client.logoUrl}
                    alt={client.name}
                    category="logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-left font-display">
                  <span className="block text-xs font-bold text-charcoal dark:text-cream tracking-wide uppercase group-hover:text-gold transition-colors duration-400">
                    {client.name.split(' ')[0]}
                  </span>
                  <span className="block text-[9px] font-mono text-muted-dark dark:text-gray-400 uppercase tracking-widest leading-none">
                    {client.name.split(' ').slice(1).join(' ') || 'Co'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

