import { useState, useEffect, useRef } from 'react';
import { stats } from '../data';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Calendar, Trophy } from 'lucide-react';

interface AnimatedCounterProps {
  value: number;
  suffix: string;
}

function AnimatedCounter({ value, suffix }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = value;
          const duration = 2000; // 2 seconds counting animation
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease-out expo curve for ultra smooth visual decelerating
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentCount = Math.floor(easeProgress * end);
            
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value]);

  return (
    <span ref={elementRef} className="font-display font-extrabold text-4xl sm:text-5xl text-charcoal dark:text-cream tracking-tight">
      {count}
      <span className="text-gold">{suffix}</span>
    </span>
  );
}

const statIcons: Record<string, any> = {
  'stat-1': CheckCircle2,
  'stat-2': Award,
  'stat-3': Calendar,
  'stat-4': Trophy,
};

export default function Stats() {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-16 border-b border-[#222222]/5 dark:border-white/5 bg-white/40 dark:bg-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const IconComponent = statIcons[stat.id] || CheckCircle2;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-[#1a1a1a]/80 rounded-[2rem] p-6 sm:p-8 border border-charcoal/5 dark:border-white/5 shadow-sm text-center flex flex-col items-center justify-center space-y-3 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <span className="text-[10px] sm:text-xs font-mono font-medium uppercase tracking-widest text-muted-dark dark:text-gray-400 mt-2">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
