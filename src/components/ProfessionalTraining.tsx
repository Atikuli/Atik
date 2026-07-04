import { motion } from 'motion/react';
import { BookOpen, Award, CheckCircle2, Building, ShieldCheck } from 'lucide-react';
import { professionalTraining } from '../data';

export default function ProfessionalTraining() {
  return (
    <section id="training" className="py-20 px-6 sm:px-12 lg:px-16 border-t border-[#222222]/5 bg-white/35 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-14 text-left" data-aos="fade-up">
          <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">Development</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal mt-1">Professional Training</h2>
          <div className="w-12 h-1 bg-gold mt-4 rounded-full" />
        </div>

        {/* Institute Info Banner */}
        <div 
          className="mb-10 p-6 rounded-3xl bg-white/70 border border-charcoal/5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <div className="w-12 h-12 rounded-2xl bg-gold/10 text-gold flex items-center justify-center shrink-0">
            <Building className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-muted-dark">Training Institute</span>
            <h3 className="text-lg font-display font-bold text-charcoal">Aerodesk Learning Institute</h3>
            <p className="text-xs text-muted-dark mt-0.5">Premier skill-development organization delivering NSDA approved professional programs</p>
          </div>
        </div>

        {/* Training Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {professionalTraining.map((item, idx) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 bg-white border border-charcoal/5 rounded-[2rem] shadow-sm hover:shadow-md hover:border-gold/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/[0.02] to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Skill Badge */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-gold/15 text-gold border border-gold/25">
                    <Award className="w-3 h-3" /> {item.level}
                  </span>
                  
                  {/* Status */}
                  <span className="inline-flex items-center gap-1 text-[11px] font-sans font-medium text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" /> {item.status}
                  </span>
                </div>

                <div className="space-y-1.5 text-left">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-dark">{item.type}</span>
                  <h4 className="text-xl font-display font-bold text-charcoal group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-xs text-charcoal/80 font-sans leading-relaxed">
                    Under the authority of <strong className="font-semibold text-charcoal">{item.authority}</strong>
                  </p>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="mt-6 pt-4 border-t border-charcoal/[0.04] flex items-center justify-between text-xs text-muted-dark font-sans font-light">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold shrink-0" /> Certified Qualification
                </span>
                <span className="font-mono text-[10px] uppercase font-semibold text-gold">NSDA L3</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
