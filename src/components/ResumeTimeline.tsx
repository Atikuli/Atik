import { experienceTimeline, educationTimeline, awardsList, certificationsList } from '../data';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award, ShieldCheck, Calendar, ArrowUpRight } from 'lucide-react';

export default function ResumeTimeline() {
  return (
    <section id="resume" className="py-20 px-6 sm:px-12 lg:px-16 border-t border-[#222222]/5 bg-white/30 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-14 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">Chronology</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal mt-1">Experience & Background</h2>
          <div className="w-12 h-1 bg-gold mt-4 rounded-full" />
        </div>

        {/* Timelines Grid (Experience on Left, Education on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Experience Timeline */}
          <div 
            className="space-y-8"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="flex items-center gap-3 border-b border-charcoal/5 pb-4">
              <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-bold text-charcoal">Professional Practice</h3>
            </div>

            <div className="relative border-l-2 border-gold/25 pl-6 sm:pl-8 ml-4 space-y-10 text-left">
              {experienceTimeline.map((item, idx) => (
                <div
                  key={item.id}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                >
                  {/* Timeline Node Point */}
                  <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-gold shadow-sm flex items-center justify-center z-10" />

                  {/* Period Badge */}
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-gold uppercase tracking-wider bg-charcoal px-2.5 py-1 rounded-md mb-2">
                    <Calendar className="w-3 h-3 text-gold" /> {item.period}
                  </span>

                  {/* Card Block */}
                  <div className="bg-white border border-charcoal/5 p-5 sm:p-6 rounded-[1.5rem] shadow-sm hover:shadow-md hover:border-gold/35 transition-all duration-300 relative overflow-hidden group">
                    <h4 className="font-display font-bold text-base text-charcoal group-hover:text-gold transition-colors duration-300">
                      {item.roleOrDegree}
                    </h4>
                    <p className="text-xs font-mono font-bold text-muted-dark uppercase tracking-wide mt-1">
                      {item.companyOrInstitution}
                    </p>
                    <p className="text-xs text-muted-dark leading-relaxed font-sans font-light mt-3">
                      {item.description}
                    </p>

                    {item.highlights && item.highlights.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="text-[11px] text-charcoal/80 flex items-start gap-2 leading-relaxed">
                            <span className="text-gold font-bold text-xs shrink-0 mt-0.5">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div 
            className="space-y-8"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="flex items-center gap-3 border-b border-charcoal/5 pb-4">
              <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-bold text-charcoal">Education & Training</h3>
            </div>

            <div className="relative border-l-2 border-gold/25 pl-6 sm:pl-8 ml-4 space-y-10 text-left">
              {educationTimeline.map((item, idx) => (
                <div
                  key={item.id}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                >
                  {/* Timeline Node Point */}
                  <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-gold shadow-sm flex items-center justify-center z-10" />

                  {/* Period Badge */}
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-gold uppercase tracking-wider bg-charcoal px-2.5 py-1 rounded-md mb-2">
                    <Calendar className="w-3 h-3 text-gold" /> {item.period}
                  </span>

                  {/* Card Block */}
                  <div className="bg-white border border-charcoal/5 p-5 sm:p-6 rounded-[1.5rem] shadow-sm hover:shadow-md hover:border-gold/35 transition-all duration-300 relative overflow-hidden group">
                    <h4 className="font-display font-bold text-base text-charcoal group-hover:text-gold transition-colors duration-300">
                      {item.roleOrDegree}
                    </h4>
                    <p className="text-xs font-mono font-bold text-muted-dark uppercase tracking-wide mt-1">
                      {item.companyOrInstitution}
                    </p>
                    <p className="text-xs text-muted-dark leading-relaxed font-sans font-light mt-3">
                      {item.description}
                    </p>

                    {item.highlights && item.highlights.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="text-[11px] text-charcoal/80 flex items-start gap-2 leading-relaxed">
                            <span className="text-gold font-bold text-xs shrink-0 mt-0.5">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Awards & Certifications Combined Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-charcoal/5 text-left">
          
          {/* Awards Column */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-lg text-charcoal flex items-center gap-2">
              <Award className="w-5 h-5 text-gold shrink-0" /> Honors & Awards
            </h4>
            <div className="space-y-4">
              {awardsList.map((award) => (
                <div key={award.id} className="bg-white p-5 rounded-2xl border border-charcoal/5 shadow-sm hover:shadow-md transition-shadow relative">
                  <span className="absolute top-5 right-5 text-xs font-mono font-bold text-gold">{award.year}</span>
                  <h5 className="font-display font-bold text-sm text-charcoal pr-12">{award.title}</h5>
                  <p className="text-[10px] font-mono uppercase text-muted-dark mt-1">{award.issuer}</p>
                  <p className="text-xs text-muted-dark font-sans font-light mt-2.5 leading-relaxed">{award.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-lg text-charcoal flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gold shrink-0" /> Certified Credentials
            </h4>
            <div className="space-y-4">
              {certificationsList.map((cert) => (
                <div key={cert.id} className="bg-white p-5 rounded-2xl border border-charcoal/5 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-gold/30 transition-all duration-300 flex items-start gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-sm text-charcoal leading-tight">{cert.name}</h5>
                    <p className="text-[10px] font-mono uppercase text-muted-dark mt-1">{cert.authority} • {cert.date}</p>
                    {cert.credentialId && (
                      <span className="inline-block bg-[#FAF6EA] border border-charcoal/10 text-[9px] font-mono px-2 py-0.5 rounded text-charcoal mt-2.5">
                        License: {cert.credentialId}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
