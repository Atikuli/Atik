import { motion } from 'motion/react';
import { Award, GraduationCap, Calendar, ShieldCheck, CheckCircle2, Bookmark } from 'lucide-react';

export default function Certifications() {
  const certs = [
    {
      title: 'Graphics Design for Freelancing',
      subtitle: 'NSDA Certified • Level-3',
      institute: 'Aerodesk Learning Institute',
      authority: 'National Skills Development Authority (NSDA)',
      status: 'Completed Successfully',
      badge: 'Level-3 Certified',
      credentialId: 'NSDA-GD-L3-CERT',
      isGold: true,
    },
    {
      title: 'IT Support Service',
      subtitle: 'NSDA Certified • Level-3',
      institute: 'Aerodesk Learning Institute',
      authority: 'National Skills Development Authority (NSDA)',
      status: 'Completed Successfully',
      badge: 'Level-3 Certified',
      credentialId: 'NSDA-ITSS-L3-CERT',
      isGold: true,
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 sm:px-12 lg:px-16 border-t border-[#222222]/5 bg-gradient-to-b from-white/20 to-[#FAF6EA]/40 relative overflow-hidden">
      
      {/* Decorative premium radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-14 text-left" data-aos="fade-up">
          <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">Verification</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal mt-1">Certifications</h2>
          <div className="w-12 h-1 bg-gold mt-4 rounded-full" />
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 sm:p-8 rounded-[2.5rem] bg-white/50 backdrop-blur-md border-2 border-gold/30 hover:border-gold shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] transition-all duration-500 group flex flex-col justify-between text-left h-full"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Premium Certificate Watermark Icon */}
              <div className="absolute right-6 top-6 opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-110 transition-all duration-500 pointer-events-none">
                <Bookmark className="w-40 h-40 text-gold" />
              </div>

              <div>
                {/* Card Header: Icon & Completion Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 text-gold flex items-center justify-center border border-gold/25 shadow-inner transition-transform duration-500 group-hover:rotate-[360deg]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  
                  {/* Completion Badge */}
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-gold text-charcoal shadow-sm border border-gold/10">
                    <Award className="w-3.5 h-3.5 text-charcoal shrink-0" /> {cert.badge}
                  </span>
                </div>

                {/* Card Content */}
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-bold">NSDA LEVEL-3 CERTIFIED</span>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-charcoal tracking-tight leading-snug mt-1 group-hover:text-gold transition-colors duration-300">
                      {cert.title}
                    </h3>
                  </div>

                  {/* Body information list */}
                  <div className="space-y-2.5 font-sans text-xs sm:text-sm text-charcoal/80">
                    <div className="flex items-start gap-2.5">
                      <GraduationCap className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <div>
                        <span className="text-muted-dark block text-[10px] font-mono uppercase">Training Institute</span>
                        <span className="font-semibold text-charcoal">{cert.institute}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 border-t border-charcoal/[0.04] pt-2.5">
                      <Calendar className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <div>
                        <span className="text-muted-dark block text-[10px] font-mono uppercase">Status</span>
                        <span className="font-semibold text-emerald-600 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 inline" /> {cert.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-4 border-t border-charcoal/[0.05] flex items-center justify-between">
                <span className="text-[10px] font-mono text-muted-dark uppercase tracking-wider">
                  Authority: {cert.authority}
                </span>
                <span className="text-[9px] font-mono px-2.5 py-1 bg-charcoal text-[#FAF6EA] rounded-md font-bold uppercase tracking-wide">
                  ID: {cert.credentialId}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
