import React from 'react';
import { Palette, Sparkles, Printer, Cpu, Wrench, Headphones } from 'lucide-react';
import { motion } from 'motion/react';

const expertiseItems = [
  {
    title: 'Graphic Design',
    description: 'Bespoke high-fidelity visual concepts, layouts, and artwork built around core design rules of symmetry, balance, and visual hierarchy.',
    icon: Palette,
    color: 'from-[#D4AF37]/10 to-[#FAF6EA]/10',
    borderColor: 'group-hover:border-gold/30',
  },
  {
    title: 'Brand Identity Design',
    description: 'Dynamic vector logos, bespoke color palettes, and typographic guidelines that establish a highly professional and memorable corporate image.',
    icon: Sparkles,
    color: 'from-[#444444]/10 to-[#222222]/10',
    borderColor: 'group-hover:border-charcoal/30',
  },
  {
    title: 'Print Design',
    description: 'Expert, prepress-ready designs for business cards, flyers, multi-page corporate brochures, and custom product packaging layouts.',
    icon: Printer,
    color: 'from-[#D4AF37]/10 to-[#FAF6EA]/10',
    borderColor: 'group-hover:border-gold/30',
  },
  {
    title: 'IT Support',
    description: 'Certified, full-spectrum diagnostic support for hardware components, operating systems, custom software deployment, and office setups.',
    icon: Cpu,
    color: 'from-[#444444]/10 to-[#222222]/10',
    borderColor: 'group-hover:border-charcoal/30',
  },
  {
    title: 'Computer Troubleshooting',
    description: 'Systematic triage and repair of computing systems, memory bottlenecks, peripheral drivers, local network setups, and printer spools.',
    icon: Wrench,
    color: 'from-[#D4AF37]/10 to-[#FAF6EA]/10',
    borderColor: 'group-hover:border-gold/30',
  },
  {
    title: 'Technical Support',
    description: 'Outstanding client assistance via remote diagnostic channels, implementing malware cleanup, registry optimizations, and data recovery.',
    icon: Headphones,
    color: 'from-[#444444]/10 to-[#222222]/10',
    borderColor: 'group-hover:border-charcoal/30',
  }
];

export default function CoreExpertise() {
  return (
    <section id="expertise" className="py-20 px-6 sm:px-12 lg:px-16 border-t border-[#222222]/5 bg-[#FAF6EA]/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-14 text-left" data-aos="fade-up">
          <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">Specialties</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal mt-1">Core Expertise</h2>
          <div className="w-12 h-1 bg-gold mt-4 rounded-full" />
        </div>

        {/* Bento/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
                className="group relative h-full rounded-2xl bg-white p-6 sm:p-8 border border-charcoal/5 hover:border-gold/30 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
                id={`expertise-card-${index}`}
              >
                {/* Micro Ambient Glow Background on Hover */}
                <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors duration-300" />
                
                <div className="space-y-4 relative z-10">
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-charcoal transition-all duration-300">
                    <Icon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-charcoal tracking-tight group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted-dark leading-relaxed font-sans font-light">
                    {item.description}
                  </p>
                </div>
                
                {/* Bottom Highlight Indicator */}
                <div className="w-0 group-hover:w-full h-[2px] bg-gold absolute bottom-0 left-0 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
