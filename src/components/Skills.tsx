import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { skills } from '../data';
import { Sparkles, Sliders } from 'lucide-react';

interface SkillBarProps {
  key?: any;
  name: string;
  percentage: number;
  colorClass: string;
  delay: number;
  isGoldGlow: boolean;
}

function SkillBar({ name, percentage, colorClass, delay, isGoldGlow }: SkillBarProps) {
  const [currentPercent, setCurrentPercent] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (!hasEntered) return;
    
    let start = 0;
    const duration = 1500; // Matches progress animation (1.5s)
    const end = percentage;
    if (end === 0) return;

    const stepTime = Math.max(Math.floor(duration / end), 12);
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

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-sm">
        <span className="font-semibold text-charcoal font-sans tracking-wide">{name}</span>
      </div>
      
      {/* Progress Bar Container with percentage displayed at the right end */}
      <div className="flex items-center gap-4">
        <div className="h-4.5 flex-1 bg-[#FAF6EA] rounded-full overflow-hidden border border-charcoal/5 relative p-[3px] shadow-inner">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true, margin: '-50px' }}
            onViewportEnter={() => setHasEntered(true)}
            transition={{ duration: 1.5, ease: 'easeOut', delay }}
            animate={{
              boxShadow: isGoldGlow
                ? [
                    '0 0 4px rgba(212, 175, 55, 0.25)',
                    '0 0 16px rgba(212, 175, 55, 0.65)',
                    '0 0 4px rgba(212, 175, 55, 0.25)'
                  ]
                : [
                    '0 0 4px rgba(34, 34, 34, 0.1)',
                    '0 0 10px rgba(34, 34, 34, 0.35)',
                    '0 0 4px rgba(34, 34, 34, 0.1)'
                  ]
            }}
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
            
            {/* Highly polished glowing leading edge tip */}
            <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[80%] rounded-full blur-[1px] opacity-90 ${
              isGoldGlow ? 'bg-white shadow-[0_0_8px_#FAF6EA]' : 'bg-white/75 shadow-[0_0_8px_rgba(255,255,255,0.7)]'
            }`} />
          </motion.div>
        </div>
        
        {/* display percentage at the right end */}
        <span className={`font-mono text-sm font-bold min-w-[3rem] text-right transition-all duration-300 ${
          isGoldGlow ? 'text-gold' : 'text-charcoal'
        }`}>
          {currentPercent}%
        </span>
      </div>
    </div>
  );
}

export default function Skills() {
  // Splitting skills for better layout representation
  const designSkills = skills.filter(s => s.category === 'design');
  const toolAndTechSkills = skills.filter(s => s.category === 'tools' || s.category === 'technical');

  return (
    <section id="skills" className="py-20 px-6 sm:px-12 lg:px-16 border-t border-[#222222]/5 bg-white/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-14 text-left" data-aos="fade-up">
          <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal mt-1">My Expertise</h2>
          <div className="w-12 h-1 bg-gold mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Column 1 - Creative & Art Direction */}
          <div 
            className="space-y-8 bg-white/65 backdrop-blur-md p-8 sm:p-10 rounded-[2rem] border border-charcoal/5 shadow-sm"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="flex items-center gap-3 border-b border-[#222222]/5 pb-4">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-charcoal">Creative & Art Direction</h3>
                <p className="text-xs text-muted-dark">Conceptualization and brand standards</p>
              </div>
            </div>

            <div className="space-y-6">
              {designSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  colorClass="bg-gradient-to-r from-gold via-[#eac352] to-[#f7e189]"
                  delay={index * 0.1}
                  isGoldGlow={true}
                />
              ))}
            </div>
          </div>

          {/* Column 2 - Production Tools & Tech */}
          <div 
            className="space-y-8 bg-white/65 backdrop-blur-md p-8 sm:p-10 rounded-[2rem] border border-charcoal/5 shadow-sm"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="flex items-center gap-3 border-b border-[#222222]/5 pb-4">
              <div className="w-10 h-10 rounded-xl bg-charcoal text-white flex items-center justify-center">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-charcoal">Production & Technology</h3>
                <p className="text-xs text-muted-dark">Software execution & local systems support</p>
              </div>
            </div>

            <div className="space-y-6">
              {toolAndTechSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  colorClass="bg-gradient-to-r from-charcoal via-[#444444] to-gold/70"
                  delay={index * 0.1}
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
            <strong className="font-semibold text-charcoal">Design Philosophy:</strong> A robust aesthetic is only as powerful as the systems that render it. Combining high-end graphic design with certified systems maintenance ensures that every print file is perfectly calibrated, every pixel is sharp, and client delivery channels operate without a single point of failure.
          </p>
        </div>

      </div>
    </section>
  );
}
