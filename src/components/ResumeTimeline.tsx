import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, Award, BookOpen, Palette, Cpu, 
  Calendar, Building2, CheckCircle2, ShieldCheck, 
  School, Sparkles, Milestone, ArrowRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface TimelineItem {
  id: string;
  title: { en: string; bn: string };
  institution: { en: string; bn: string };
  department?: { en: string; bn: string };
  board?: { en: string; bn: string };
  group?: { en: string; bn: string };
  period: { en: string; bn: string };
  type: 'education' | 'training' | 'certification';
  description: { en: string; bn: string };
  highlights: { en: string[]; bn: string[] };
}

const timelineItems: TimelineItem[] = [
  {
    id: 'ssc',
    title: {
      en: 'Secondary School Certificate (SSC)',
      bn: 'মাধ্যমিক স্কুল সার্টিফিকেট (এসএসসি)'
    },
    institution: {
      en: 'Rajshahi Court Academy',
      bn: 'রাজশাহী কোর্ট একাডেমি'
    },
    board: {
      en: 'Rajshahi Board',
      bn: 'রাজশাহী বোর্ড'
    },
    group: {
      en: 'Science',
      bn: 'বিজ্ঞান'
    },
    period: {
      en: 'Completed',
      bn: 'সম্পন্ন'
    },
    type: 'education',
    description: {
      en: 'Acquired secondary education with a strong base in science, mathematics, and logical reasoning.',
      bn: 'বিজ্ঞান, গণিত এবং যুক্তিবিদ্যার দৃঢ় ভিত্তির সাথে সফলভাবে মাধ্যমিক স্কুল সার্টিফিকেট সম্পন্ন করেছেন।'
    },
    highlights: {
      en: ['Science Group Curriculum', 'Rajshahi Board Examination', 'Academic Excellence Foundation'],
      bn: ['বিজ্ঞান বিভাগ কারিকুলাম', 'রাজশাহী বোর্ড পরীক্ষা', 'প্রাতিষ্ঠানিক দক্ষতার ভিত্তি']
    }
  },
  {
    id: 'hsc',
    title: {
      en: 'Higher Secondary Certificate (HSC)',
      bn: 'উচ্চ মাধ্যমিক সার্টিফিকেট (এইচএসসি)'
    },
    institution: {
      en: 'Metropolitan College',
      bn: 'মেট্রোপলিটন কলেজ'
    },
    board: {
      en: 'Rajshahi Board',
      bn: 'রাজশাহী বোর্ড'
    },
    group: {
      en: 'Humanities',
      bn: 'মানবিক'
    },
    period: {
      en: 'Completed',
      bn: 'সম্পন্ন'
    },
    type: 'education',
    description: {
      en: 'Successfully completed higher secondary studies, expanding understanding of humanities, literature, and social sciences.',
      bn: 'সফলভাবে উচ্চ মাধ্যমিক স্তরের পড়াশোনা সম্পন্ন করেছেন, যা মানবিক শাখা, সাহিত্য এবং সমাজবিজ্ঞানের জ্ঞান প্রসারিত করেছে।'
    },
    highlights: {
      en: ['Humanities Group Curriculum', 'Rajshahi Board Examination', 'Critical & Empathetic Thinking'],
      bn: ['মানবিক বিভাগ কারিকুলাম', 'রাজশাহী বোর্ড পরীক্ষা', 'গঠনমূলক ও সহমর্মিতাপূর্ণ চিন্তাভাবনা']
    }
  },
  {
    id: 'bachelor',
    title: {
      en: 'Bachelor (Honours)',
      bn: 'স্নাতক (সম্মান)'
    },
    institution: {
      en: 'Government Bangla College, Dhaka',
      bn: 'সরকারি বাংলা কলেজ, ঢাকা'
    },
    department: {
      en: 'Islamic Studies',
      bn: 'ইসলামিক স্টাডিজ'
    },
    period: {
      en: 'Second Year (Running)',
      bn: '২য় বর্ষ (চলমান)'
    },
    type: 'education',
    description: {
      en: 'Currently pursuing a Bachelor’s Degree, focusing on academic research, cultural synthesis, and communication frameworks.',
      bn: 'বর্তমানে ইসলামিক স্টাডিজ বিভাগে স্নাতক (সম্মান) ডিগ্রিতে অধ্যয়নরত, যা প্রাতিষ্ঠানিক গবেষণা ও যোগাযোগ দক্ষতাকে আরও সমৃদ্ধ করছে।'
    },
    highlights: {
      en: ['Department of Islamic Studies', 'Academic Research & Literature Analysis', 'Active Undergraduate Progression'],
      bn: ['ইসলামিক স্টাডিজ বিভাগ', 'প্রাতিষ্ঠানিক গবেষণা ও সাহিত্য বিশ্লেষণ', 'সক্রিয় স্নাতক স্তরের অগ্রগতি']
    }
  },
  {
    id: 'graphics',
    title: {
      en: 'Graphics Design for Freelancing',
      bn: 'গ্রাফিক্স ডিজাইন ফর ফ্রিল্যান্সিং'
    },
    institution: {
      en: 'Aerodesk Learning Institute',
      bn: 'অ্যারোডেস্ক লার্নিং ইনস্টিটিউট'
    },
    period: {
      en: 'NSDA Certified Level-3',
      bn: 'এনএসডিএ সার্টিফাইড লেভেল-৩'
    },
    type: 'certification',
    description: {
      en: 'Comprehensive professional training covering visual identity systems, vector assets, color theories, and commercial packaging design under NSDA guidelines.',
      bn: 'ভিজ্যুয়াল আইডেন্টিটি সিস্টেম, ভেক্টর অ্যাসেট লেআউট, কালার থিওরি এবং বাণিজ্যিক প্যাকেজিং ডিজাইনের ওপর জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ (NSDA) স্বীকৃত পেশাদার লেভেল-৩ সার্টিফিকেশন।'
    },
    highlights: {
      en: ['National Skills Development Authority (NSDA) Certified', 'Aerodesk Learning Institute Alumnus', 'Expertise in Illustrator, Photoshop & Grid layouts'],
      bn: ['জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ (NSDA) কর্তৃক লেভেল-৩ সার্টিফাইড', 'অ্যারোডেস্ক লার্নিং ইনস্টিটিউট থেকে ট্রেনিং সম্পন্ন', 'ইলাস্ট্রেটর, ফটোশপ এবং গ্রিড লেআউটে বিশেষ পারদর্শিতা']
    }
  },
  {
    id: 'it-support',
    title: {
      en: 'IT Support Service',
      bn: 'আইটি সাপোর্ট সার্ভিস'
    },
    institution: {
      en: 'Aerodesk Learning Institute',
      bn: 'অ্যারোডেস্ক লার্নিং ইনস্টিটিউট'
    },
    period: {
      en: 'NSDA Certified Level-3',
      bn: 'এনএসডিএ সার্টিফাইড লেভেল-৩'
    },
    type: 'certification',
    description: {
      en: 'Professional validation covering operating systems, hardware configuration, network security routing, and customer support troubleshooting helpdesk.',
      bn: 'অপারেটিং সিস্টেম সেটআপ, কম্পিউটার হার্ডওয়্যার ডায়াগনস্টিকস, নেটওয়ার্ক সিকিউরিটি এবং পেশাদার আইটি হেল্পডেস্ক ট্রাবলশুটিংয়ের ওপর জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ (NSDA) স্বীকৃত লেভেল-৩ সার্টিফিকেশন।'
    },
    highlights: {
      en: ['National Skills Development Authority (NSDA) Certified', 'Aerodesk Learning Institute Alumnus', 'Hardware Triage, Router Setup & Software Support'],
      bn: ['জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ (NSDA) কর্তৃক লেভেল-৩ সার্টিফাইড', 'অ্যারোডেস্ক লার্নিং ইনস্টিটিউট থেকে ট্রেনিং সম্পন্ন', 'হার্ডওয়্যার ট্রায়াজ, রাউটার সেটআপ এবং সফটওয়্যার সাপোর্ট']
    }
  }
];

export default function ResumeTimeline() {
  const { language } = useApp();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getIcon = (type: string, id: string) => {
    switch (id) {
      case 'ssc':
        return <BookOpen className="w-5 h-5 text-gold" />;
      case 'hsc':
        return <School className="w-5 h-5 text-gold" />;
      case 'bachelor':
        return <GraduationCap className="w-5 h-5 text-gold animate-bounce-slow" style={{ animationDuration: '4s' }} />;
      case 'graphics':
        return <Palette className="w-5 h-5 text-gold" />;
      case 'it-support':
        return <Cpu className="w-5 h-5 text-gold" />;
      default:
        return <Award className="w-5 h-5 text-gold" />;
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
      case 'training':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
      case 'certification':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      default:
        return 'bg-gold/10 text-gold border-gold/25';
    }
  };

  return (
    <section 
      id="resume" 
      className="py-24 px-6 sm:px-12 lg:px-16 border-t border-charcoal/5 dark:border-white/5 bg-gradient-to-b from-[#FAF6EA]/10 to-white/30 dark:from-[#141414] dark:to-[#111111] relative overflow-hidden text-left"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-left animate-fade-in" data-aos="fade-up">
          <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
            {language === 'bn' ? 'ক্রোনোলজি ও শিক্ষাগত ভিত্তি' : 'Chronology & Foundations'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal dark:text-cream mt-1 leading-tight tracking-tight">
            {language === 'bn' ? 'আমার জীবনবৃত্তান্ত টাইমলাইন' : 'Resume Timeline'}
          </h2>
          <p className="text-sm text-muted-dark dark:text-gray-400 mt-2 max-w-xl font-sans leading-relaxed">
            {language === 'bn' 
              ? 'আমার একাডেমিক শিক্ষা, জাতীয় প্রশিক্ষণ এবং সরকারি লেভেল-৩ সার্টিফিকেশনের সমন্বিত একটি চমৎকার টাইমলাইন।' 
              : 'A combined master timeline tracing academic degrees, professional trainings, and national level-3 certified qualifications in one elegant vertical path.'}
          </p>
          <div className="w-16 h-1.5 bg-gold mt-4 rounded-full" />
        </div>

        {/* Timeline Core Container */}
        <div className="relative pl-6 sm:pl-12 ml-2 sm:ml-6">
          
          {/* Vertical animated line track */}
          <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-gold/70 via-gold/30 to-transparent">
            {/* Glowing active animation indicator moving down the timeline */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-gold to-transparent animate-pulse" />
          </div>

          {/* Timeline Items List */}
          <div className="space-y-12">
            {timelineItems.map((item, idx) => {
              const isHovered = hoveredCard === item.id;

              return (
                <div 
                  key={item.id} 
                  className="relative group text-left"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  
                  {/* Glowing Node Point */}
                  <div className="absolute -left-[31px] sm:-left-[55px] top-6 w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] rounded-full bg-white dark:bg-[#121212] border-4 border-gold shadow-[0_0_12px_rgba(212,175,55,0.4)] flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-125">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  </div>

                  {/* Premium Glassmorphic Card Wrapper */}
                  <div className="rounded-[2.2rem] border-2 border-gold/15 dark:border-white/10 bg-white/40 dark:bg-[#1a1a1a]/40 backdrop-blur-xl p-6 sm:p-8 shadow-md hover:shadow-xl hover:border-gold transition-all duration-500 relative overflow-hidden flex flex-col md:flex-row gap-6 items-start">
                    
                    {/* Top corner gradient accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gold/[0.03] rounded-bl-full pointer-events-none group-hover:bg-gold/[0.06] transition-colors" />

                    {/* Timeline Left Icon Frame */}
                    <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform duration-300 shadow-inner">
                      {getIcon(item.type, item.id)}
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 space-y-3">
                      
                      {/* Meta Tags Row */}
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className={`text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${getBadgeColor(item.type)}`}>
                          {item.type === 'education' ? (language === 'bn' ? 'শিক্ষা' : 'Education') : (language === 'bn' ? 'সার্টিফিকেশন' : 'Credential')}
                        </span>
                        
                        <span className="text-[9px] font-mono text-muted-dark dark:text-gray-400 px-2.5 py-1 rounded-full bg-charcoal/5 dark:bg-white/5 border border-charcoal/5 dark:border-white/5 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-gold shrink-0" />
                          {language === 'bn' ? item.period.bn : item.period.en}
                        </span>
                      </div>

                      {/* Main Title */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-display font-black text-charcoal dark:text-cream leading-tight tracking-tight group-hover:text-gold transition-colors duration-300">
                          {language === 'bn' ? item.title.bn : item.title.en}
                        </h3>
                        
                        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-1 sm:gap-2 text-xs font-semibold text-charcoal/80 dark:text-gray-300 mt-1">
                          <span className="flex items-center gap-1">
                            <Building2 className="w-3.5 h-3.5 text-gold shrink-0" />
                            {language === 'bn' ? item.institution.bn : item.institution.en}
                          </span>
                          
                          {item.board && (
                            <>
                              <span className="hidden sm:inline text-charcoal/40 dark:text-white/20">|</span>
                              <span className="text-muted-dark dark:text-gray-400 font-mono text-[11px] uppercase tracking-wide">
                                {language === 'bn' ? `বোর্ড: ${item.board.bn}` : `Board: ${item.board.en}`}
                              </span>
                            </>
                          )}

                          {item.group && (
                            <>
                              <span className="hidden sm:inline text-charcoal/40 dark:text-white/20">|</span>
                              <span className="text-muted-dark dark:text-gray-400 font-mono text-[11px] uppercase tracking-wide">
                                {language === 'bn' ? `গ্রুপ: ${item.group.bn}` : `Group: ${item.group.en}`}
                              </span>
                            </>
                          )}

                          {item.department && (
                            <>
                              <span className="hidden sm:inline text-charcoal/40 dark:text-white/20">|</span>
                              <span className="text-muted-dark dark:text-gray-400 font-mono text-[11px] uppercase tracking-wide">
                                {language === 'bn' ? `বিভাগ: ${item.department.bn}` : `Dept: ${item.department.en}`}
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Main Description */}
                      <p className="text-xs sm:text-sm text-charcoal/80 dark:text-gray-300 leading-relaxed font-sans font-light">
                        {language === 'bn' ? item.description.bn : item.description.en}
                      </p>

                      {/* Bullet Highlights */}
                      {item.highlights && (
                        <div className="pt-2 border-t border-charcoal/5 dark:border-white/5 space-y-2">
                          <span className="text-[9px] font-mono uppercase font-bold tracking-wider text-gold block">
                            {language === 'bn' ? 'গুরুত্বপূর্ণ হাইলাইটস' : 'Key Milestones / Focus Areas'}
                          </span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] sm:text-xs text-charcoal/70 dark:text-gray-400 font-sans font-normal">
                            {(language === 'bn' ? item.highlights.bn : item.highlights.en).map((hl, hIdx) => (
                              <li key={hIdx} className="flex items-start gap-1.5 leading-snug">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{hl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
