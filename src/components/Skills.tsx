import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { skills } from '../data';
import * as Lucide from 'lucide-react';

interface SkillBarProps {
  key?: any;
  name: string;
  percentage: number;
  colorClass: string;
  delay: number;
  isGoldGlow: boolean;
  iconName?: string;
}

function SkillBar({ name, percentage, colorClass, delay, isGoldGlow, iconName }: SkillBarProps) {
  const [currentPercent, setCurrentPercent] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (!hasEntered) return;
    
    let start = 0;
    const duration = 1200; // Fast and snappy matching the premium portfolio experience
    const end = percentage;
    if (end === 0) return;

    const stepTime = Math.max(Math.floor(duration / end), 8);
    const timer = setInterval(() => {
      start += 1;
      if (start <= end) {
        setCurrentPercent(start);
      } else {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasEntered, percentage]);

  // Dynamically resolve icon from Lucide library
  const IconComponent = (Lucide as any)[iconName || 'Award'] || Lucide.Award;

  return (
    <motion.div 
      className="p-3.5 rounded-2xl bg-white/40 hover:bg-[#FAF6EA]/70 border border-charcoal/[0.04] hover:border-gold/30 hover:shadow-[0_4px_20px_-4px_rgba(212,175,55,0.12)] transition-all duration-300 group/item flex flex-col gap-2.5"
      whileHover={{ y: -2 }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
            isGoldGlow 
              ? 'bg-gold/10 text-gold group-hover/item:bg-gold group-hover/item:text-white' 
              : 'bg-charcoal/10 text-charcoal group-hover/item:bg-charcoal group-hover/item:text-white'
          }`}>
            <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover/item:scale-110" />
          </div>
          <span className="font-semibold text-charcoal font-sans tracking-wide text-xs sm:text-sm">{name}</span>
        </div>
        
        <span className={`font-mono text-xs sm:text-sm font-bold min-w-[2.5rem] text-right transition-all duration-300 ${
          isGoldGlow ? 'text-gold' : 'text-charcoal'
        }`}>
          {currentPercent}%
        </span>
      </div>
      
      {/* Progress Bar Container */}
      <div className="h-2 w-full bg-charcoal/5 rounded-full overflow-hidden relative shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, margin: '-40px' }}
          onViewportEnter={() => setHasEntered(true)}
          transition={{ duration: 1.2, ease: 'easeOut', delay }}
          style={{
            boxShadow: isGoldGlow 
              ? '0 0 8px rgba(212, 175, 55, 0.4)' 
              : '0 0 8px rgba(34, 34, 34, 0.2)'
          }}
          className={`h-full rounded-full relative ${colorClass}`}
        >
          {/* Smooth glowing metallic shimmer wave passing through the gradient */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
              ease: 'linear'
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
          
          {/* Glowing leading edge tip */}
          <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-[80%] rounded-full blur-[1px] opacity-90 ${
            isGoldGlow ? 'bg-white shadow-[0_0_8px_#FAF6EA]' : 'bg-white/75 shadow-[0_0_8px_rgba(255,255,255,0.7)]'
          }`} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  // Splitting skills for clean layout representation
  const designSkills = skills.filter(s => s.category === 'design');
  const itSupportSkills = skills.filter(s => s.category === 'technical');

  return (
    <section id="skills" className="py-20 px-4 sm:px-12 lg:px-16 border-t border-[#222222]/5 bg-white/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-14 text-left" data-aos="fade-up">
          <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal mt-1">My Expertise</h2>
          <div className="w-12 h-1 bg-gold mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Column 1 - Graphic Design */}
          <div 
            className="space-y-6 bg-white/65 backdrop-blur-md p-6 sm:p-8 rounded-[2rem] border border-charcoal/5 shadow-sm"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="flex items-center gap-3 border-b border-[#222222]/5 pb-4">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                <Lucide.Palette className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-charcoal">Graphic Design</h3>
                <p className="text-xs text-muted-dark">Bespoke brand identities, layouts, and typography</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {designSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  iconName={skill.iconName}
                  colorClass="bg-gradient-to-r from-gold via-[#eac352] to-[#f7e189]"
                  delay={index * 0.05}
                  isGoldGlow={true}
                />
              ))}
            </div>
          </div>

          {/* Column 2 - IT Support */}
          <div 
            className="space-y-6 bg-white/65 backdrop-blur-md p-6 sm:p-8 rounded-[2rem] border border-charcoal/5 shadow-sm"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="flex items-center gap-3 border-b border-[#222222]/5 pb-4">
              <div className="w-10 h-10 rounded-xl bg-charcoal text-white flex items-center justify-center">
                <Lucide.Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-charcoal">IT Support</h3>
                <p className="text-xs text-muted-dark">Certified technical troubleshooting, installation & setup</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {itSupportSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  iconName={skill.iconName}
                  colorClass="bg-gradient-to-r from-charcoal via-[#444444] to-gold/70"
                  delay={index * 0.05}
                  isGoldGlow={false}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Skill Notes footer */}
        <div 
          className="mt-12 bg-gold/10 border border-gold/20 rounded-2xl p-6 text-left max-w-3xl"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans font-light">
            <strong className="font-semibold text-charcoal">Synergistic Advantage:</strong> Melding high-fidelity brand visual development with rigorous systems engineering. By bridging creative graphic artistry with NSDA Level-3 certified systems diagnostics, I ensure every deliverable—whether a pixel-perfect vector print or a secure operating platform—is robust, optimized, and ready to deploy.
          </p>
        </div>

      </div>
    </section>
  );
}
