import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, Palette, Cpu, MessageSquare, 
  Lightbulb, Globe, Sparkles, CheckCircle2 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface HireReason {
  id: string;
  title: { en: string; bn: string };
  description: { en: string; bn: string };
  icon: React.ReactNode;
  tag: { en: string; bn: string };
}

export default function WhyHireMe() {
  const { language } = useApp();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const reasons: HireReason[] = [
    {
      id: 'nsda',
      title: {
        en: 'NSDA Certified Professional',
        bn: 'এনএসডিএ সার্টিফাইড প্রফেশনাল'
      },
      description: {
        en: 'Holding National Level-3 qualifications certified by the Prime Minister’s Office, PMO Bangladesh.',
        bn: 'প্রধানমন্ত্রীর কার্যালয় (PMO) এবং জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ কর্তৃক আনুষ্ঠানিকভাবে লেভেল-৩ সার্টিফাইড।'
      },
      icon: <ShieldCheck className="w-6 h-6 text-gold" />,
      tag: { en: 'Government Certified', bn: 'সরকারি স্বীকৃত' }
    },
    {
      id: 'designer',
      title: {
        en: 'Professional Graphic Designer',
        bn: 'পেশাদার গ্রাফিক্স ডিজাইনার'
      },
      description: {
        en: 'Skilled in creating distinctive logos, visual assets, brand identity materials, and layouts.',
        bn: 'লোগো ডিজাইন, ব্র্যান্ড ভিজ্যুয়াল আইডেন্টিটি এবং আকর্ষণীয় কমার্শিয়াল লেআউট তৈরিতে দক্ষ।'
      },
      icon: <Palette className="w-6 h-6 text-gold" />,
      tag: { en: 'Creative Expert', bn: 'ক্রিয়েটিভ এক্সপার্ট' }
    },
    {
      id: 'it-support',
      title: {
        en: 'IT Support Specialist',
        bn: 'আইটি সাপোর্ট স্পেশালিস্ট'
      },
      description: {
        en: 'Trained in system administration, hardware troubleshooting, and helpdesk support.',
        bn: 'কম্পিউটার হার্ডওয়্যার ডায়াগনস্টিকস, রাউটার সেটআপ এবং আইটি হেল্পডেস্ক ট্রাবলশুটিংয়ে প্রশিক্ষিত।'
      },
      icon: <Cpu className="w-6 h-6 text-gold" />,
      tag: { en: 'Technical Diagnostician', bn: 'কারিগরি বিশেষজ্ঞ' }
    },
    {
      id: 'communication',
      title: {
        en: 'Fast Communication',
        bn: 'দ্রুত যোগাযোগ ব্যবস্থা'
      },
      description: {
        en: 'Committed to transparent progress, real-time client updates, and rapid reply turnarounds.',
        bn: 'সহজ ও স্পষ্ট যোগাযোগ, রিয়েল-টাইম কাজের আপডেট এবং দ্রুত রেসপন্স দিতে সর্বদা প্রতিশ্রুতিবদ্ধ।'
      },
      icon: <MessageSquare className="w-6 h-6 text-gold" />,
      tag: { en: 'Client-First', bn: 'ক্লায়েন্ট-ফার্স্ট' }
    },
    {
      id: 'problem-solver',
      title: {
        en: 'Creative Problem Solver',
        bn: 'ক্রিয়েটিভ প্রবলেম সলভার'
      },
      description: {
        en: 'Applying systematic logical deduction to identify issues and resolve design or system bugs.',
        bn: 'যুক্তিভিত্তিক ও সৃজনশীল চিন্তাভাবনার মাধ্যমে জটিল ডিজাইন বা সিস্টেমের নিখুঁত সমাধান তৈরি করি।'
      },
      icon: <Lightbulb className="w-6 h-6 text-gold" />,
      tag: { en: 'Analytical Mind', bn: 'বিশ্লেষণাত্মক মেধা' }
    },
    {
      id: 'freelance',
      title: {
        en: 'Available for Freelance Projects',
        bn: 'ফ্রিল্যান্স কাজের জন্য প্রস্তুত'
      },
      description: {
        en: 'Ready to collaborate globally on creative freelance projects and dedicated contracts.',
        bn: 'দেশী-বিদেশী যেকোনো আকর্ষণীয় রিমোট বা কন্টাক্ট-ভিত্তিক প্রজেক্টে কাজ করতে প্রস্তুত।'
      },
      icon: <Globe className="w-6 h-6 text-gold animate-spin-slow" style={{ animationDuration: '8s' }} />,
      tag: { en: 'Global Contract', bn: 'গ্লোবাল কন্টাক্ট' }
    }
  ];

  return (
    <section 
      id="why-hire-me" 
      className="py-24 px-6 sm:px-12 lg:px-16 border-t border-charcoal/5 dark:border-white/5 bg-gradient-to-b from-white to-[#FAF6EA]/20 dark:from-[#111111] dark:to-[#161616] relative overflow-hidden text-left"
    >
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-left" data-aos="fade-up">
          <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            {language === 'bn' ? 'কেন আমাকে বেছে নিবেন' : 'Why Hire Me'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal dark:text-cream mt-1 leading-tight tracking-tight">
            {language === 'bn' ? 'কেন ক্লায়েন্ট এবং নিয়োগকর্তারা আমাকে বেছে নেন' : 'Why Clients & Employers Choose Me'}
          </h2>
          <p className="text-sm text-muted-dark dark:text-gray-400 mt-2 max-w-2xl font-sans leading-relaxed">
            {language === 'bn' 
              ? 'আমার অর্জিত পেশাদার যোগ্যতা, কাজের দক্ষতা এবং স্বচ্ছ যোগাযোগ পদ্ধতির মূল চালিকাশক্তি যা প্রতিটি প্রজেক্টকে সফল করে।' 
              : 'Verifiable government qualifications, practical specialized training, and commitment to clear execution guidelines that build long-term business value.'}
          </p>
          <div className="w-16 h-1.5 bg-gold mt-4 rounded-full" />
        </div>

        {/* Six Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, index) => {
            const isHovered = hoveredId === reason.id;

            return (
              <motion.div
                key={reason.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredId(reason.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative p-6 sm:p-8 rounded-[2.2rem] bg-white/40 dark:bg-[#1a1a1a]/40 backdrop-blur-xl border-2 border-gold/15 hover:border-gold/60 shadow-md hover:shadow-gold/10 transition-all duration-500 group flex flex-col justify-between h-full"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Decorative visual watermark badge in bg */}
                <div className="absolute right-6 top-6 opacity-[0.02] group-hover:opacity-[0.05] group-hover:scale-110 transition-all duration-500 pointer-events-none">
                  <CheckCircle2 className="w-32 h-32 text-gold" />
                </div>

                <div>
                  {/* Top Row: Icon Frame & Micro Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/25 flex items-center justify-center shadow-inner transition-transform duration-500 group-hover:rotate-12">
                      {reason.icon}
                    </div>

                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-gold/10 text-gold border border-gold/30">
                      {language === 'bn' ? reason.tag.bn : reason.tag.en}
                    </span>
                  </div>

                  {/* Text Details */}
                  <div className="space-y-3">
                    <h3 className="text-lg sm:text-xl font-display font-black text-charcoal dark:text-cream leading-snug tracking-tight group-hover:text-gold transition-colors duration-300">
                      {language === 'bn' ? reason.title.bn : reason.title.en}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-charcoal/80 dark:text-gray-300 leading-relaxed font-sans font-light">
                      {language === 'bn' ? reason.description.bn : reason.description.en}
                    </p>
                  </div>
                </div>

                {/* Decorative card indicator */}
                <div className="mt-6 pt-4 border-t border-charcoal/5 dark:border-white/5 flex items-center justify-between text-[10px] font-mono text-muted-dark dark:text-gray-400">
                  <span>0{index + 1}. KEY ATTRIBUTE</span>
                  <div className="w-2 h-2 rounded-full bg-gold/40 group-hover:bg-gold transition-colors duration-300" />
                </div>

                {/* Corner inner border frame details */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-gold/20 rounded-tl-lg pointer-events-none group-hover:border-gold/50 transition-colors" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-gold/20 rounded-tr-lg pointer-events-none group-hover:border-gold/50 transition-colors" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-gold/20 rounded-bl-lg pointer-events-none group-hover:border-gold/50 transition-colors" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-gold/20 rounded-br-lg pointer-events-none group-hover:border-gold/50 transition-colors" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
