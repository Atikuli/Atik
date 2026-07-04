import { motion } from 'motion/react';
import { Award, ShieldCheck, GraduationCap, Briefcase, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: 'NSDA Certified Graphics Design for Freelancing Level-3',
      description: 'Nationally accredited Level-3 professional design qualification recognized by the Government of Bangladesh.',
      icon: Award,
    },
    {
      title: 'NSDA Certified IT Support Service Level-3',
      description: 'Government approved and certified credential covering enterprise tech diagnostics, networking, and system config.',
      icon: ShieldCheck,
    },
    {
      title: 'Successfully completed professional training from Aerodesk Learning Institute',
      description: 'Comprehensive, intensive hands-on training covering modern design pipelines and expert IT systems support.',
      icon: GraduationCap,
    },
    {
      title: 'Available for Freelance Projects',
      description: 'Highly adaptable and ready to cooperate on custom design layouts, print catalogs, or IT systems troubleshooting.',
      icon: Briefcase,
    },
    {
      title: 'Passionate Graphic Designer & IT Support Specialist',
      description: 'Bringing double-discipline advantages to every project to combine beautiful design with fully optimized execution.',
      icon: Sparkles,
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6 sm:px-12 lg:px-16 border-t border-[#222222]/5 dark:border-white/5 bg-[#FAF6EA]/20 dark:bg-black/10 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-14 text-left" data-aos="fade-up">
          <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">Milestones</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal dark:text-cream mt-1">My Achievements</h2>
          <div className="w-12 h-1 bg-gold mt-4 rounded-full" />
        </div>

        {/* Bento/Column grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((ach, index) => {
            const IconComponent = ach.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white/70 dark:bg-[#1a1a1a]/70 backdrop-blur-md p-6 sm:p-8 rounded-[2rem] border border-charcoal/5 dark:border-white/5 shadow-sm hover:shadow-md hover:border-gold/30 dark:hover:border-gold/50 transition-all duration-300 flex flex-col justify-between text-left h-full group"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <div className="space-y-4">
                  {/* Icon Node */}
                  <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center border border-gold/10 transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-base sm:text-lg text-charcoal dark:text-cream leading-snug group-hover:text-gold transition-colors duration-300">
                      {ach.title}
                    </h3>
                    <p className="text-xs text-muted-dark dark:text-gray-400 font-sans font-light leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-charcoal/[0.04] dark:border-white/[0.04] flex items-center justify-between text-[11px] font-mono font-bold text-gold uppercase tracking-wider">
                  <span>Verified Accomplishment</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
