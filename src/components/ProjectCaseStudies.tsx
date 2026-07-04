import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  projects 
} from '../data';
import { Project } from '../types';
import { useApp } from '../context/AppContext';
import SafeImage from './SafeImage';
import { 
  ChevronDown, ChevronUp, Clock, Briefcase, AlertCircle, 
  CheckCircle2, Milestone, Settings, Award, Image as ImageIcon, 
  ArrowRight, HeartHandshake, CheckCircle, Tag, Layers
} from 'lucide-react';

export default function ProjectCaseStudies() {
  const { language } = useApp();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
      // Smooth scroll to the expanded element
      setTimeout(() => {
        const el = document.getElementById(`case-study-${id}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleCtaClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter out any projects that do not have caseStudy details just to be completely safe
  const projectsWithCaseStudy = projects.filter(p => p.caseStudy);

  return (
    <section 
      id="case-studies" 
      className="py-24 px-6 sm:px-12 lg:px-16 border-t border-[#222222]/5 dark:border-white/5 bg-gradient-to-b from-[#FAF6EA]/20 to-white/40 dark:from-[#161616]/40 dark:to-[#121212]/50 relative overflow-hidden text-left"
    >
      {/* Visual Ambient Background Ornaments */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-left" data-aos="fade-up">
          <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
            {language === 'bn' ? 'গভীর বিশ্লেষণ' : 'In-Depth Analysis'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal dark:text-cream mt-1 leading-tight tracking-tight">
            {language === 'bn' ? 'প্রজেক্ট কেস স্টাডিজ' : 'Project Case Studies'}
          </h2>
          <p className="text-sm text-muted-dark dark:text-gray-400 mt-2 max-w-2xl font-sans leading-relaxed">
            {language === 'bn' 
              ? 'আমার কাজের পেছনের গল্প, সমস্যা সমাধান পদ্ধতি এবং অর্জিত ফলাফলের বাস্তবভিত্তিক এবং বিস্তারিত কেস স্টাডি।' 
              : 'Detailed analysis of my design workflow, core technical solutions, real client parameters, and the strategic thinking behind my successful outputs.'}
          </p>
          <div className="w-16 h-1.5 bg-gold mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-charcoal/10 dark:border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {projectsWithCaseStudy.map((project, idx) => {
            const isExpanded = expandedId === project.id;
            const cs = project.caseStudy!;

            return (
              <div 
                key={project.id} 
                id={`case-study-${project.id}`}
                className="relative group text-left"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                
                {/* Timeline node marker */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-4 w-6 h-6 rounded-full bg-white dark:bg-[#1a1a1a] border-2 border-gold flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 z-10">
                  <div className={`w-2.5 h-2.5 rounded-full bg-gold transition-all duration-300 ${isExpanded ? 'scale-125' : 'scale-75 opacity-70'}`} />
                </div>

                {/* Main Case Study Card (Glassmorphic) */}
                <div className="rounded-3xl border border-charcoal/10 dark:border-white/10 bg-white/40 dark:bg-[#1a1a1a]/40 backdrop-blur-xl shadow-xl transition-all duration-300 hover:shadow-gold/10 overflow-hidden relative">
                  
                  {/* Subtle Top-Right Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-50" />

                  {/* Top Header Row (Static summary always visible) */}
                  <div className="p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                    <div className="flex-1 space-y-3">
                      
                      {/* Meta Tags / Badges */}
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-gold px-2.5 py-1 rounded-full bg-gold/10 border border-gold/25">
                          {project.category.replace('-', ' ')}
                        </span>
                        
                        {cs.clientType && (
                          <span className="text-[9px] font-mono text-muted-dark dark:text-gray-400 px-2.5 py-1 rounded-full bg-charcoal/5 dark:bg-white/5 border border-charcoal/5 dark:border-white/5 flex items-center gap-1">
                            <Briefcase className="w-3 h-3 text-gold shrink-0" />
                            {cs.clientType}
                          </span>
                        )}

                        <span className="text-[9px] font-mono text-muted-dark dark:text-gray-400 px-2.5 py-1 rounded-full bg-charcoal/5 dark:bg-white/5 border border-charcoal/5 dark:border-white/5 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-gold shrink-0" />
                          {cs.duration}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-xl sm:text-2xl font-display font-black text-charcoal dark:text-cream leading-tight">
                        {project.title}
                      </h3>

                      {/* Brief Overview */}
                      <p className="text-xs sm:text-sm text-charcoal/80 dark:text-gray-300 leading-relaxed font-sans max-w-3xl">
                        {cs.overview}
                      </p>

                      {/* Highlights of Tools */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tools.slice(0, 3).map((tool, index) => (
                          <span 
                            key={index} 
                            className="text-[10px] font-mono font-semibold text-charcoal/70 dark:text-gray-400 bg-charcoal/5 dark:bg-white/5 px-2 py-0.5 rounded"
                          >
                            #{tool}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* Expand Trigger Button */}
                    <div className="pt-4 md:pt-0">
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="w-full sm:w-auto inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-charcoal dark:bg-[#FAF6EA] text-white dark:text-charcoal font-semibold text-xs uppercase tracking-wider cursor-pointer border border-transparent hover:border-gold/30 hover:bg-gold hover:text-charcoal dark:hover:bg-gold dark:hover:text-charcoal transition-all shadow-md"
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? (
                          <>
                            {language === 'bn' ? 'সংক্ষেপ করুন' : 'Collapse Details'}
                            <ChevronUp className="w-4 h-4 shrink-0" />
                          </>
                        ) : (
                          <>
                            {language === 'bn' ? 'বিস্তারিত দেখুন' : 'Explore Case Study'}
                            <ChevronDown className="w-4 h-4 shrink-0" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expandable Case Study Deep Dive Panel */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden border-t border-charcoal/10 dark:border-white/10"
                      >
                        <div className="p-6 sm:p-8 bg-charcoal/[0.01] dark:bg-black/10 space-y-8">
                          
                          {/* Grid for Problem and Solution */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                            
                            {/* Problem Card */}
                            <div className="p-5 sm:p-6 rounded-2xl border border-rose-500/10 dark:border-rose-500/20 bg-rose-500/[0.01] dark:bg-rose-500/[0.02] space-y-3">
                              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
                                <AlertCircle className="w-5 h-5 shrink-0" />
                                <h4 className="text-xs font-mono uppercase font-bold tracking-wider">
                                  {language === 'bn' ? 'সমস্যা ও চ্যালেঞ্জ' : 'The Problem & Challenge'}
                                </h4>
                              </div>
                              <p className="text-xs sm:text-sm text-charcoal/90 dark:text-gray-300 leading-relaxed font-sans">
                                {cs.problem}
                              </p>
                            </div>

                            {/* Solution Card */}
                            <div className="p-5 sm:p-6 rounded-2xl border border-emerald-500/10 dark:border-emerald-500/20 bg-emerald-500/[0.01] dark:bg-emerald-500/[0.02] space-y-3">
                              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                                <CheckCircle2 className="w-5 h-5 shrink-0" />
                                <h4 className="text-xs font-mono uppercase font-bold tracking-wider">
                                  {language === 'bn' ? 'প্রদত্ত সমাধান' : 'The Deployed Solution'}
                                </h4>
                              </div>
                              <p className="text-xs sm:text-sm text-charcoal/90 dark:text-gray-300 leading-relaxed font-sans">
                                {cs.solution}
                              </p>
                            </div>

                          </div>

                          {/* Nested Process Timeline */}
                          <div className="space-y-4">
                            <div className="flex items-center gap-2 text-gold">
                              <Milestone className="w-5 h-5 shrink-0" />
                              <h4 className="text-xs font-mono uppercase font-bold tracking-wider">
                                {language === 'bn' ? 'ডিজাইন ও বাস্তবায়ন প্রক্রিয়া' : 'Design & Implementation Process'}
                              </h4>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                              {/* Background link line for desktop */}
                              <div className="hidden md:block absolute top-6 left-12 right-12 h-[2px] bg-charcoal/5 dark:bg-white/5 z-0" />

                              {cs.designProcess.map((step, sIdx) => (
                                <div 
                                  key={sIdx} 
                                  className="relative z-10 p-5 rounded-2xl bg-white/50 dark:bg-[#202020]/40 border border-charcoal/5 dark:border-white/5 flex flex-col justify-between"
                                >
                                  <div>
                                    <div className="w-8 h-8 rounded-xl bg-gold/15 text-gold border border-gold/30 flex items-center justify-center font-mono text-xs font-bold mb-3.5 shadow-sm">
                                      {step.step}
                                    </div>
                                    <h5 className="text-sm font-display font-bold text-charcoal dark:text-cream leading-tight mb-1.5">
                                      {step.title}
                                    </h5>
                                    <p className="text-xs text-muted-dark dark:text-gray-400 leading-relaxed">
                                      {step.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Tools & Tech Used Grid */}
                          <div className="p-5 sm:p-6 rounded-2xl border border-charcoal/10 dark:border-white/10 bg-white/30 dark:bg-[#1f1f1f]/30 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <div className="flex items-center gap-1.5 text-gold">
                                <Settings className="w-4 h-4 shrink-0" />
                                <span className="text-[10px] font-mono uppercase font-bold tracking-wider">Tools Deployed</span>
                              </div>
                              <div className="flex flex-wrap gap-1.5">
                                {project.tools.map((tVal, i) => (
                                  <span key={i} className="text-[10px] font-mono px-2.5 py-1 rounded bg-charcoal/10 dark:bg-white/5 text-charcoal/80 dark:text-gray-300">
                                    {tVal}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-2 border-t sm:border-t-0 sm:border-l border-charcoal/10 dark:border-white/10 pt-4 sm:pt-0 sm:pl-6">
                              <div className="flex items-center gap-1.5 text-gold">
                                <Layers className="w-4 h-4 shrink-0" />
                                <span className="text-[10px] font-mono uppercase font-bold tracking-wider">Technologies / Standards</span>
                              </div>
                              <div className="flex flex-wrap gap-1.5">
                                {cs.technologiesUsed.map((tech, i) => (
                                  <span key={i} className="text-[10px] font-mono px-2.5 py-1 rounded bg-gold/10 text-gold border border-gold/20">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Final Outcome Box */}
                          <div className="p-5 sm:p-6 rounded-2xl border border-gold/30 bg-gold/5 dark:bg-gold/[0.02] relative overflow-hidden">
                            <div className="absolute right-4 top-4 opacity-[0.03] pointer-events-none">
                              <Award className="w-24 h-24 text-gold" />
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0 mt-0.5">
                                <Award className="w-5 h-5" />
                              </div>
                              <div className="space-y-1 text-left">
                                <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-gold">
                                  {language === 'bn' ? 'চূড়ান্ত ফলাফল' : 'The Final Strategic Outcome'}
                                </h4>
                                <p className="text-xs sm:text-sm text-charcoal dark:text-cream leading-relaxed font-sans font-semibold">
                                  {cs.finalOutcome}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Project Gallery */}
                          {cs.gallery && cs.gallery.length > 0 && (
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 text-gold">
                                <ImageIcon className="w-4 h-4 shrink-0" />
                                <h4 className="text-xs font-mono uppercase font-bold tracking-wider">
                                  {language === 'bn' ? 'প্রজেক্ট গ্যালারি' : 'Project Visual Showcase'}
                                </h4>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {cs.gallery.map((imgUrl, imgIdx) => (
                                  <div 
                                    key={imgIdx} 
                                    className="relative rounded-xl overflow-hidden border border-charcoal/10 dark:border-white/10 group/img aspect-[1.5/1]"
                                  >
                                    <SafeImage 
                                      src={imgUrl} 
                                      alt={`${project.title} Gallery ${imgIdx + 1}`} 
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Custom Call To Action in Expanded View */}
                          <div className="flex flex-col sm:flex-row items-center justify-between p-5 rounded-2xl bg-[#FAF6EA] dark:bg-[#1c1c1a] border border-gold/20 gap-4 text-center sm:text-left">
                            <div className="space-y-1">
                              <h5 className="text-xs font-mono uppercase font-bold text-gold">
                                {language === 'bn' ? 'এই প্রজেক্টটি কি আপনার পছন্দ হয়েছে?' : 'Like this project approach?'}
                              </h5>
                              <p className="text-xs text-charcoal/80 dark:text-gray-300">
                                {language === 'bn' 
                                  ? 'আপনার ব্র্যান্ড বা আইটি অবকাঠামোর জন্য একই মানের সেবা পেতে যোগাযোগ করুন।' 
                                  : 'Collaborate with Atik to design premium materials or troubleshoot your IT assets.'}
                              </p>
                            </div>
                            <button
                              onClick={handleCtaClick}
                              className="px-5 py-2.5 rounded-xl bg-charcoal hover:bg-gold text-white hover:text-charcoal dark:bg-cream dark:hover:bg-gold dark:text-charcoal font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
                            >
                              {cs.ctaText || (language === 'bn' ? 'আলোচনা শুরু করুন' : 'Start Discussion')}
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
