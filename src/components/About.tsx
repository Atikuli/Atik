import { useState } from 'react';
import { Download, Mail, Phone, MapPin, GraduationCap, Briefcase, Calendar, Flag, CheckCircle2, Palette, Sparkles, Layout, Printer } from 'lucide-react';
import { personalInfo } from '../data';
import SafeImage from './SafeImage';
import { motion } from 'motion/react';
import { Magnetic, RippleButton } from './AnimatedElements';

export default function About() {
  const [imgError, setImgError] = useState(false);

  const personalDetails = [
    { label: 'Full Name', value: personalInfo.name, icon: Mail },
    { label: 'Email', value: personalInfo.email, icon: Mail, isLink: true, href: `mailto:${personalInfo.email}` },
    { label: 'Phone', value: personalInfo.phone, icon: Phone, isLink: true, href: `tel:${personalInfo.phone}` },
    { label: 'Address', value: personalInfo.address, icon: MapPin },
    { label: 'Education', value: personalInfo.education, icon: GraduationCap },
    { label: 'Experience', value: personalInfo.experience, icon: Briefcase },
    { label: 'Availability', value: personalInfo.availability, icon: CheckCircle2 },
    { label: 'Nationality', value: personalInfo.nationality, icon: Flag },
    { label: 'Birthday', value: personalInfo.birthday, icon: Calendar },
  ];

  const specializationCards = [
    { title: 'Graphic Design', desc: 'Timeless layouts & visual hierarchy', icon: Palette, color: 'bg-gold/10 text-gold' },
    { title: 'Brand Identity', desc: 'Bespoke design systems & guidelines', icon: Sparkles, color: 'bg-[#FAF6EA] text-charcoal border border-gold/30' },
    { title: 'Social Media Design', desc: 'Engaging, clean and modern grids', icon: Layout, color: 'bg-gold/10 text-gold' },
    { title: 'Print Design', desc: 'Sophisticated dielines and pre-press', icon: Printer, color: 'bg-charcoal text-white' },
  ];

  return (
    <section id="about" className="py-20 px-6 sm:px-12 lg:px-16 border-t border-[#222222]/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-14 text-left" data-aos="fade-up">
          <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">Biography</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal mt-1">About Me</h2>
          <div className="w-12 h-1 bg-gold mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Professional Image */}
          <div 
            className="lg:col-span-5 relative group"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="absolute inset-4 rounded-[2rem] bg-gold/10 rotate-3 group-hover:rotate-6 transition-transform duration-500" />
            <div className="absolute inset-4 rounded-[2rem] border border-gold/40 -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
            
            <div className="relative rounded-[2rem] overflow-hidden bg-white p-3 shadow-xl border border-charcoal/5">
              <SafeImage
                src="https://res.cloudinary.com/davtdct3r/image/upload/f_auto,q_auto/IMG_20260124_210702_1_i7kzyi"
                fallbackSrc="https://res.cloudinary.com/davtdct3r/image/upload/f_auto,q_auto/IMG_20260124_210702_1_i7kzyi"
                alt={`${personalInfo.displayName} Professional`}
                category="branding"
                loading="lazy"
                className="w-full h-auto aspect-[3/4] object-cover rounded-[1.5rem] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </div>

          {/* Right Column - Narrative, Personal Grid, Badges */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Paragraph */}
            <div 
              className="space-y-4 max-w-[620px]"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h3 className="text-2xl font-display font-bold text-charcoal">
                Designing Visual Brands & Building Solid IT Backbones
              </h3>
              <div className="space-y-4 text-muted-dark font-sans font-light text-base leading-[1.9]" style={{ lineHeight: '1.9' }}>
                {Array.isArray(personalInfo.about) ? (
                  personalInfo.about.map((para, index) => (
                    <p key={index}>{para}</p>
                  ))
                ) : (
                  <p>{personalInfo.about}</p>
                )}
              </div>
            </div>

            {/* Personal Details Grid */}
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 border-t border-b border-[#222222]/10 py-6 font-sans text-sm"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              {personalDetails.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-gold/10 flex items-center justify-center text-gold mt-0.5 shrink-0">
                    <detail.icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-muted-dark uppercase tracking-wider">{detail.label}</span>
                    {detail.isLink ? (
                      <a href={detail.href} className="font-medium text-charcoal hover:text-gold transition-colors underline decoration-gold/30">
                        {detail.value}
                      </a>
                    ) : (
                      <span className="font-medium text-charcoal">{detail.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Specialization Cards */}
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
              <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-charcoal mb-4">Core Focus Areas</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specializationCards.map((card, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white rounded-2xl p-5 border border-charcoal/5 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 hover:-translate-y-1 hover:border-gold/30 group"
                    data-aos="zoom-in"
                    data-aos-delay={idx * 100}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${card.color}`}>
                      <card.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-display font-bold text-sm text-charcoal group-hover:text-gold transition-colors">{card.title}</h5>
                      <p className="text-xs text-muted-dark mt-1 leading-relaxed font-light">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download CV CTA */}
            <div className="pt-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              <Magnetic>
                <RippleButton
                  onClick={() => window.open(personalInfo.cvUrl, '_blank')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-charcoal text-[#FAF6EA] font-semibold text-sm rounded-xl hover:bg-gold hover:text-charcoal transition-all shadow-md hover:shadow-gold/15 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Download Full Curriculum Vitae
                </RippleButton>
              </Magnetic>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
