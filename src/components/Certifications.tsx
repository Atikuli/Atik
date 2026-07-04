import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, GraduationCap, Calendar, ShieldCheck, CheckCircle2, 
  Bookmark, Eye, X, ZoomIn, Download, Sparkles, AlertCircle, FileDown,
  ExternalLink, FileText, Check, Copy
} from 'lucide-react';
import { certificationsList, personalInfo } from '../data';
import { useApp } from '../context/AppContext';

export default function Certifications() {
  const { language } = useApp();
  const [selectedScan, setSelectedScan] = useState<any | null>(null);
  const [showConfigModal, setShowConfigModal] = useState<boolean>(false);
  const [activeCertForModal, setActiveCertForModal] = useState<any | null>(null);
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  const handleDownloadClick = (e: React.MouseEvent, cert: any) => {
    e.stopPropagation();
    setActiveCertForModal(cert);
    
    // Attempt download of dummy certificate or trigger modal
    if (cert.scanUrl && cert.scanUrl.startsWith('http')) {
      // If a real URL exists, let's open it or trigger download
      window.open(cert.scanUrl, '_blank');
    } else {
      // Otherwise, open the helpful configuration modal
      setShowConfigModal(true);
    }
  };

  const handleCopyPath = (path: string) => {
    navigator.clipboard.writeText(path);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  // Mock certificate generator for high-end visual placeholders
  const renderCertificatePlaceholder = (cert: any) => {
    return (
      <div className="relative w-full aspect-[1.414/1] bg-gradient-to-br from-white to-[#FAF6EA]/60 dark:from-[#1e1e1e] dark:to-[#161616] rounded-2xl border-4 border-double border-gold/30 p-4 sm:p-6 text-center flex flex-col justify-between overflow-hidden shadow-inner group-hover:border-gold/60 transition-colors duration-500">
        
        {/* Decorative background security Guilloche lines / watermark crest */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] flex items-center justify-center pointer-events-none">
          <Award className="w-48 h-48 text-gold animate-spin-slow" />
        </div>

        {/* Ornate corner frames */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold/40" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold/40" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold/40" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold/40" />

        {/* Inner solid framing line */}
        <div className="absolute inset-2 border border-gold/15 rounded-xl pointer-events-none" />

        {/* Header */}
        <div className="space-y-1 relative z-10 pt-1">
          <div className="flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            <h4 className="text-[8px] sm:text-[9px] font-mono tracking-widest text-gold font-bold uppercase">
              {language === 'bn' ? 'গণপ্রজাতন্ত্রী বাংলাদেশ সরকার' : 'Government of Bangladesh'}
            </h4>
          </div>
          <h3 className="text-[9px] sm:text-[11px] font-display font-extrabold text-charcoal dark:text-cream uppercase tracking-wide">
            National Skills Development Authority (NSDA)
          </h3>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto" />
        </div>

        {/* Body */}
        <div className="my-1.5 sm:my-2 space-y-1 relative z-10">
          <p className="text-[7px] sm:text-[9px] font-sans italic text-muted-dark dark:text-gray-400">
            This is to certify that
          </p>
          <h2 className="text-xs sm:text-lg font-display font-black text-charcoal dark:text-cream leading-none tracking-wide text-gold">
            {personalInfo.name}
          </h2>
          <p className="text-[7px] sm:text-[8px] font-sans text-muted-dark dark:text-gray-400">
            has successfully achieved competency standards in
          </p>
          <h3 className="text-[10px] sm:text-sm font-display font-black text-charcoal dark:text-cream tracking-tight max-w-[92%] mx-auto leading-tight mt-0.5">
            {cert.name}
          </h3>
          <div className="inline-block mt-1 px-2 py-0.5 rounded bg-gold/15 text-[8px] font-mono font-bold text-gold border border-gold/30">
            LEVEL-3 SPECIFICATION
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-end border-t border-charcoal/5 dark:border-white/5 pt-2 relative z-10">
          <div className="text-left">
            <span className="block text-[5px] sm:text-[7px] text-muted-dark uppercase font-mono leading-none">REGISTRATION ID</span>
            <span className="text-[6px] sm:text-[9px] font-mono font-bold text-charcoal dark:text-cream">{cert.credentialId}</span>
          </div>
          
          {/* Ornate Gold Foil Seal Mockup */}
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-dashed border-gold bg-gold/10 flex items-center justify-center relative shadow-sm group-hover:scale-105 transition-transform duration-300">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
            </div>
            {/* Ribbon representation on seal */}
            <div className="absolute -bottom-1 left-2 w-2 h-4 bg-gold/20 origin-top rotate-[25deg] clip-ribbon border-r border-gold/10" />
            <div className="absolute -bottom-1 right-2 w-2 h-4 bg-gold/20 origin-top -rotate-[25deg] clip-ribbon border-l border-gold/10" />
          </div>

          <div className="text-right">
            <span className="block text-[5px] sm:text-[7px] text-muted-dark uppercase font-mono leading-none">ISSUING STATUS</span>
            <span className="text-[6px] sm:text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase">{cert.date}</span>
          </div>
        </div>

        {/* Instructional placeholder badge overlay */}
        <div className="absolute top-2 right-2 bg-charcoal/90 dark:bg-gold/95 text-gold dark:text-charcoal text-[7px] font-mono font-black uppercase tracking-widest px-2 py-0.5 rounded shadow z-20">
          {language === 'bn' ? 'সার্টিফিকেট টেমপ্লেট' : 'Image Placeholder'}
        </div>
      </div>
    );
  };

  return (
    <section 
      id="certifications" 
      className="py-24 px-6 sm:px-12 lg:px-16 border-t border-charcoal/5 dark:border-white/5 bg-gradient-to-b from-white to-[#FAF6EA]/40 dark:from-[#111111] dark:to-[#161616] relative overflow-hidden text-left"
    >
      {/* Premium background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-left" data-aos="fade-up">
          <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
            {language === 'bn' ? 'যাচাইকৃত অর্জন' : 'Verified Credentials'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal dark:text-cream mt-1 leading-tight tracking-tight">
            {language === 'bn' ? 'সার্টিফিকেট গ্যালারি' : 'Certificate Gallery'}
          </h2>
          <p className="text-sm text-muted-dark dark:text-gray-400 mt-2 max-w-2xl font-sans leading-relaxed">
            {language === 'bn' 
              ? 'জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ (NSDA) কর্তৃক প্রদানকৃত আমার লেভেল-৩ পেশাদার সার্টিফিকেট সমূহ।' 
              : 'Explore government-certified credentials verifying technical excellence in international freelance systems and physical IT diagnostics.'}
          </p>
          <div className="w-16 h-1.5 bg-gold mt-4 rounded-full" />
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {certificationsList.map((cert, index) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 sm:p-8 rounded-[2.5rem] bg-white/40 dark:bg-[#1e1e1e]/40 backdrop-blur-xl border-2 border-gold/20 hover:border-gold shadow-lg hover:shadow-gold/10 transition-all duration-500 group flex flex-col justify-between text-left h-full"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Premium Background Emblem */}
              <div className="absolute right-6 top-6 opacity-[0.02] group-hover:opacity-[0.05] group-hover:scale-110 transition-all duration-500 pointer-events-none">
                <Bookmark className="w-44 h-44 text-gold" />
              </div>

              <div>
                {/* Header Row: Seal Icon & Verification Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 text-gold flex items-center justify-center border border-gold/25 shadow-inner transition-transform duration-500 group-hover:rotate-[360deg]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  
                  {/* Premium Verification Badge */}
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/35 shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> {language === 'bn' ? 'এনএসডিএ সার্টিফাইড' : 'NSDA Certified'}
                  </span>
                </div>

                {/* Card Title & Institution Meta */}
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-bold">
                      {language === 'bn' ? 'লেভেল-৩ সার্টিফাইড স্পেশালিস্ট' : 'NSDA LEVEL-3 SPECIFICATION'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-black text-charcoal dark:text-cream tracking-tight leading-snug mt-1 group-hover:text-gold transition-colors duration-300">
                      {cert.name}
                    </h3>
                  </div>

                  {/* Training Info List */}
                  <div className="space-y-3 font-sans text-xs sm:text-sm text-charcoal/80 dark:text-gray-300">
                    <div className="flex items-start gap-2.5">
                      <GraduationCap className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[9px] font-mono uppercase text-muted-dark dark:text-gray-400 block">Training Institute</span>
                        <span className="font-bold text-charcoal dark:text-cream">Aerodesk Learning Institute</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 border-t border-charcoal/5 dark:border-white/5 pt-2.5">
                      <Calendar className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[9px] font-mono uppercase text-muted-dark dark:text-gray-400 block">Current Status</span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" /> {cert.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificate Image Placeholder Container */}
              <div 
                onClick={() => setSelectedScan(cert)}
                className="cursor-pointer group/placeholder mb-6 overflow-hidden rounded-2xl relative"
              >
                {cert.scanUrl && cert.scanUrl.startsWith('http') ? (
                  // Real uploaded scan image
                  <div className="relative rounded-2xl overflow-hidden border border-gold/20 shadow-md aspect-[1.414/1] group-hover:border-gold/50 transition-colors duration-500">
                    <img 
                      src={cert.scanUrl} 
                      alt={cert.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover/placeholder:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-gold text-charcoal flex items-center justify-center transform scale-95 group-hover/placeholder:scale-100 transition-transform duration-300">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                ) : (
                  // Custom stunning mock placeholder
                  <div className="relative">
                    {renderCertificatePlaceholder(cert)}
                    {/* Visual Hover State */}
                    <div className="absolute inset-0 bg-charcoal/70 backdrop-blur-[1px] opacity-0 group-hover/placeholder:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-2 rounded-2xl">
                      <div className="w-10 h-10 rounded-full bg-gold text-charcoal flex items-center justify-center shadow-lg transform scale-90 group-hover/placeholder:scale-100 transition-transform duration-300">
                        <ZoomIn className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-white font-bold uppercase tracking-widest">
                        {language === 'bn' ? 'সার্টিফিকেট জুম করুন' : 'Zoom Certificate'}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer: Metadata Rows */}
              <div className="mb-6 py-3 px-4 rounded-xl bg-charcoal/[0.02] dark:bg-white/[0.02] border border-charcoal/5 dark:border-white/5 flex items-center justify-between text-[11px] font-mono">
                <span className="text-muted-dark dark:text-gray-400">
                  {language === 'bn' ? 'কর্তৃপক্ষ: এনএসডিএ' : 'Authority: NSDA'}
                </span>
                <span className="font-bold text-gold">
                  ID: {cert.credentialId}
                </span>
              </div>

              {/* Interactive Card Action Buttons */}
              <div className="grid grid-cols-2 gap-3.5">
                {/* View Full Certificate Button */}
                <button
                  onClick={() => setSelectedScan(cert)}
                  className="px-4 py-3 rounded-xl bg-charcoal dark:bg-[#FAF6EA] text-white dark:text-charcoal font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer border border-transparent hover:bg-gold hover:text-charcoal dark:hover:bg-gold dark:hover:text-charcoal"
                >
                  <Eye className="w-3.5 h-3.5 shrink-0" />
                  {language === 'bn' ? 'ফুল ভিউ' : 'View Full'}
                </button>

                {/* Download Certificate Button */}
                <button
                  onClick={(e) => handleDownloadClick(e, cert)}
                  className="px-4 py-3 rounded-xl bg-transparent text-charcoal dark:text-cream font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer border border-charcoal/20 dark:border-white/20 hover:border-gold hover:text-gold"
                >
                  <Download className="w-3.5 h-3.5 shrink-0 animate-bounce" style={{ animationDuration: '2s' }} />
                  {language === 'bn' ? 'ডাউনলোড' : 'Download'}
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Full-Screen Lightbox Zoom for Certificates */}
      <AnimatePresence>
        {selectedScan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedScan(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedScan(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Certificate Display Card inside Lightbox */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative bg-white dark:bg-[#121212] rounded-3xl border-8 border-double border-gold/60 p-6 sm:p-12 max-w-4xl w-full text-center flex flex-col justify-between overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent close on body click
            >
              {/* Watermark Crest */}
              <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] flex items-center justify-center pointer-events-none">
                <Award className="w-80 h-80 text-gold" />
              </div>

              {/* Ornate corner frames */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-gold/60" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-gold/60" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-gold/60" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-gold/60" />

              {/* Header */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono tracking-widest text-gold font-bold uppercase">
                  National Skill Development Framework of Bangladesh
                </h4>
                <h1 className="text-base sm:text-2xl font-display font-extrabold text-charcoal dark:text-cream uppercase tracking-wide">
                  National Skills Development Authority (NSDA)
                </h1>
                <p className="text-[10px] font-mono text-muted-dark dark:text-gray-400">
                  Prime Minister's Office, Government of the People's Republic of Bangladesh
                </p>
                <div className="w-32 h-[2px] bg-gold mt-3 mx-auto rounded-full" />
              </div>

              {/* Body */}
              <div className="my-8 sm:my-10 space-y-4">
                <p className="text-xs sm:text-sm font-sans italic text-muted-dark dark:text-gray-400">
                  This certificate of competency is officially awarded to
                </p>
                <h2 className="text-2xl sm:text-4xl font-display font-black tracking-wide text-gold">
                  {personalInfo.name}
                </h2>
                <p className="text-xs sm:text-sm font-sans text-muted-dark dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
                  for successfully meeting all assessments, standards, and metrics to be formally certified as a Level-3 expert in the field of
                </p>
                <h3 className="text-lg sm:text-2xl font-display font-black text-charcoal dark:text-cream tracking-tight max-w-2xl mx-auto leading-snug">
                  {selectedScan.name}
                </h3>
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-500" /> NSDA LEVEL-3 REGISTERED
                </div>
              </div>

              {/* Footer row */}
              <div className="flex flex-col sm:flex-row items-center justify-between border-t border-charcoal/10 dark:border-white/10 pt-6 gap-6 text-left">
                <div className="space-y-1">
                  <span className="block text-[8px] uppercase font-mono text-gray-400">Credential Identifier</span>
                  <span className="text-xs font-mono font-bold text-charcoal dark:text-cream">{selectedScan.credentialId}</span>
                  <span className="block text-[8px] uppercase font-mono text-gray-400 mt-2">Registration Status</span>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase">{selectedScan.date}</span>
                </div>

                {/* Big Stamp */}
                <div className="w-16 h-16 rounded-full border-4 border-double border-gold bg-gold/10 flex items-center justify-center relative shadow-lg">
                  <ShieldCheck className="w-8 h-8 text-gold" />
                </div>

                <div className="text-right space-y-1 sm:text-right text-center">
                  <span className="block text-[8px] uppercase font-mono text-gray-400">Certifying Authority</span>
                  <span className="text-xs font-sans font-bold text-charcoal dark:text-cream">{selectedScan.authority}</span>
                  <span className="block text-[8px] uppercase font-mono text-gray-400 mt-2">Training Institution</span>
                  <span className="text-xs font-sans text-charcoal dark:text-cream">Aerodesk Learning Institute</span>
                </div>
              </div>

              {/* Instructions on how to replace */}
              <p className="text-[9px] font-mono text-muted-dark dark:text-gray-500 mt-6 pt-4 border-t border-charcoal/[0.03] dark:border-white/[0.03]">
                * To replace this placeholder scan, configure the 'scanUrl' variable in '/src/config/portfolio.ts' with your high-res certificate image file URL.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Helpful Instructions Modal for Image / File uploads */}
      <AnimatePresence>
        {showConfigModal && activeCertForModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setShowConfigModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white dark:bg-[#1a1a1a] rounded-3xl border border-gold/30 p-6 sm:p-8 max-w-md w-full relative text-left shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Icon */}
              <button
                onClick={() => setShowConfigModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-charcoal/5 dark:bg-white/5 text-charcoal dark:text-cream hover:bg-gold/20 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 text-gold flex items-center justify-center border border-gold/20">
                  <FileText className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-display font-black text-charcoal dark:text-cream leading-tight">
                    {language === 'bn' ? 'সার্টিফিকেট ফাইল আপলোড গাইড' : 'How to Upload Your Certificate'}
                  </h3>
                  <p className="text-xs text-muted-dark dark:text-gray-400 mt-1">
                    Configure your high-resolution original document files for view and download.
                  </p>
                </div>

                <div className="space-y-3 pt-2 text-xs font-sans text-charcoal/80 dark:text-gray-300">
                  <div className="p-3 rounded-xl bg-charcoal/[0.02] dark:bg-white/[0.02] border border-charcoal/5 dark:border-white/5 space-y-1">
                    <span className="text-[10px] font-mono font-bold text-gold uppercase tracking-wider block">Step 1: Save Your File</span>
                    <p>Place your certificate PDF or high-res JPG inside your project's public folder at:</p>
                    <div className="flex items-center justify-between gap-2 mt-1.5 p-2 bg-charcoal/5 dark:bg-black/35 rounded border border-charcoal/5 dark:border-white/5 font-mono text-[10px] break-all">
                      <span>/public/certificates/{activeCertForModal.id === 'cert-1' ? 'graphics_design.pdf' : 'it_support.pdf'}</span>
                      <button 
                        onClick={() => handleCopyPath(`/public/certificates/${activeCertForModal.id === 'cert-1' ? 'graphics_design.pdf' : 'it_support.pdf'}`)}
                        className="text-gold hover:text-white shrink-0 p-1 rounded hover:bg-white/10"
                      >
                        {copiedPath ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-charcoal/[0.02] dark:bg-white/[0.02] border border-charcoal/5 dark:border-white/5 space-y-1">
                    <span className="text-[10px] font-mono font-bold text-gold uppercase tracking-wider block">Step 2: Update Configuration</span>
                    <p>Open <strong>/src/config/portfolio.ts</strong> and replace the empty <strong>scanUrl</strong> field for this card with:</p>
                    <div className="flex items-center justify-between gap-2 mt-1.5 p-2 bg-charcoal/5 dark:bg-black/35 rounded border border-charcoal/5 dark:border-white/5 font-mono text-[10px] break-all">
                      <span>"/certificates/{activeCertForModal.id === 'cert-1' ? 'graphics_design.pdf' : 'it_support.pdf'}"</span>
                      <button 
                        onClick={() => handleCopyPath(`/certificates/${activeCertForModal.id === 'cert-1' ? 'graphics_design.pdf' : 'it_support.pdf'}`)}
                        className="text-gold hover:text-white shrink-0 p-1 rounded hover:bg-white/10"
                      >
                        {copiedPath ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-3">
                  <button
                    onClick={() => setShowConfigModal(false)}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-charcoal dark:bg-cream text-white dark:text-charcoal font-bold text-xs uppercase tracking-wider text-center cursor-pointer"
                  >
                    Got It
                  </button>
                  <a
                    href={`/certificates/${activeCertForModal.id === 'cert-1' ? 'graphics_design.pdf' : 'it_support.pdf'}`}
                    download
                    onClick={(e) => {
                      // Attempt a real download trigger just in case the file already exists
                      setShowConfigModal(false);
                    }}
                    className="px-4 py-2.5 rounded-xl border border-charcoal/20 dark:border-white/20 hover:border-gold hover:text-gold font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <FileDown className="w-4 h-4" /> Download Anyway
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
