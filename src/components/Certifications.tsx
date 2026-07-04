import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, GraduationCap, Calendar, ShieldCheck, CheckCircle2, Bookmark, Eye, X, ZoomIn, FileText, Download } from 'lucide-react';
import { certificationsList, personalInfo } from '../data';
import { useApp } from '../context/AppContext';

export default function Certifications() {
  const { language } = useApp();
  const [selectedScan, setSelectedScan] = useState<any | null>(null);

  // Mock certificate generator for visual placeholders
  const renderCertificatePlaceholder = (cert: any) => {
    return (
      <div className="relative w-full aspect-[1.414/1] bg-white dark:bg-[#1a1a1a] rounded-2xl border-4 border-double border-gold/40 p-4 sm:p-6 text-center flex flex-col justify-between overflow-hidden shadow-md group-hover:border-gold transition-colors duration-500">
        {/* Background watermark crest */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] flex items-center justify-center pointer-events-none">
          <Award className="w-48 h-48 text-gold animate-spin-slow" />
        </div>

        {/* Ornate corners */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-gold/60" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-gold/60" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-gold/60" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-gold/60" />

        {/* Header */}
        <div className="space-y-1">
          <h4 className="text-[9px] font-mono tracking-widest text-gold font-bold uppercase">
            Government of Bangladesh
          </h4>
          <h3 className="text-[10px] font-display font-bold text-charcoal dark:text-cream uppercase">
            National Skills Development Authority (NSDA)
          </h3>
          <div className="w-16 h-px bg-gold/30 mx-auto" />
        </div>

        {/* Body */}
        <div className="my-2 space-y-1">
          <p className="text-[8px] font-sans italic text-muted-dark dark:text-gray-400">
            This is to certify that
          </p>
          <h2 className="text-sm font-display font-bold text-charcoal dark:text-cream leading-none tracking-wide text-gold">
            {personalInfo.name}
          </h2>
          <p className="text-[8px] font-sans text-muted-dark dark:text-gray-400">
            has successfully completed the national competency standards for
          </p>
          <h3 className="text-xs font-display font-extrabold text-charcoal dark:text-cream tracking-tight max-w-[90%] mx-auto leading-tight">
            {cert.name}
          </h3>
          <p className="text-[9px] font-mono font-bold text-gold">
            NSDA LEVEL-3 CERTIFICATION
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-end border-t border-charcoal/5 dark:border-white/5 pt-2">
          <div className="text-left">
            <span className="block text-[6px] text-muted-dark uppercase font-mono">Credential ID</span>
            <span className="text-[7px] font-mono font-bold text-charcoal dark:text-cream">{cert.credentialId}</span>
          </div>
          
          {/* Gold Seal */}
          <div className="w-10 h-10 rounded-full border-2 border-gold/50 bg-gold/10 flex items-center justify-center relative">
            <ShieldCheck className="w-5 h-5 text-gold" />
          </div>

          <div className="text-right">
            <span className="block text-[6px] text-muted-dark uppercase font-mono">Issued Status</span>
            <span className="text-[7px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase">{cert.date}</span>
          </div>
        </div>

        {/* Interactive Hover Overlay */}
        <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-gold text-charcoal flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <ZoomIn className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono text-white font-bold uppercase tracking-widest">
            {language === 'bn' ? 'সার্টিফিকেট জুম করুন' : 'Zoom Certificate Scan'}
          </span>
          <span className="text-[8px] font-mono text-gold uppercase tracking-wider">
            {cert.credentialId}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="certifications" className="py-20 px-6 sm:px-12 lg:px-16 border-t border-[#222222]/5 bg-gradient-to-b from-white/20 to-[#FAF6EA]/40 dark:from-[#121212]/20 dark:to-[#1a1a1a]/10 relative overflow-hidden text-left">
      
      {/* Decorative premium radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-14 text-left" data-aos="fade-up">
          <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">Verification</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal dark:text-cream mt-1">Certifications</h2>
          <div className="w-12 h-1 bg-gold mt-4 rounded-full" />
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {certificationsList.map((cert, index) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 sm:p-8 rounded-[2.5rem] bg-white/50 dark:bg-[#1a1a1a]/50 backdrop-blur-md border-2 border-gold/30 hover:border-gold shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] transition-all duration-500 group flex flex-col justify-between text-left h-full"
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
                    <Award className="w-3.5 h-3.5 text-charcoal shrink-0" /> Level-3 Certified
                  </span>
                </div>

                {/* Card Content */}
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-bold">NSDA LEVEL-3 CERTIFIED</span>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-charcoal dark:text-cream tracking-tight leading-snug mt-1 group-hover:text-gold transition-colors duration-300">
                      {cert.name}
                    </h3>
                  </div>

                  {/* Body information list */}
                  <div className="space-y-2.5 font-sans text-xs sm:text-sm text-charcoal/80 dark:text-gray-300">
                    <div className="flex items-start gap-2.5">
                      <GraduationCap className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <div>
                        <span className="text-muted-dark dark:text-gray-400 block text-[10px] font-mono uppercase">Training Institute</span>
                        <span className="font-semibold text-charcoal dark:text-cream">Aerodesk Learning Institute</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 border-t border-charcoal/[0.04] dark:border-white/[0.04] pt-2.5">
                      <Calendar className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <div>
                        <span className="text-muted-dark dark:text-gray-400 block text-[10px] font-mono uppercase">Status</span>
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 inline" /> {cert.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificate Scan Container - Clicking triggers preview */}
              <div 
                onClick={() => setSelectedScan(cert)}
                className="cursor-pointer"
              >
                {cert.scanUrl ? (
                  // Real Image Certificate Scan if provided
                  <div className="relative rounded-2xl overflow-hidden border border-gold/30 shadow-md aspect-[1.414/1] group-hover:border-gold transition-colors duration-500">
                    <img 
                      src={cert.scanUrl} 
                      alt={cert.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-gold text-charcoal flex items-center justify-center transform scale-95 group-hover:scale-100 transition-transform duration-300">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                ) : (
                  // CSS/SVG Ornate Mockup Placeholder
                  renderCertificatePlaceholder(cert)
                )}
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-charcoal/[0.05] dark:border-white/[0.05] flex items-center justify-between">
                <span className="text-[10px] font-mono text-muted-dark dark:text-gray-400 uppercase tracking-wider">
                  Authority: {cert.authority}
                </span>
                <span className="text-[9px] font-mono px-2.5 py-1 bg-charcoal dark:bg-white text-[#FAF6EA] dark:text-charcoal rounded-md font-bold uppercase tracking-wide">
                  ID: {cert.credentialId}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full-Screen Zoom Lightbox for Certificates */}
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
              className="relative bg-white dark:bg-[#121212] rounded-3xl border-8 border-double border-gold/60 p-6 sm:p-12 max-w-4xl w-full text-center flex flex-col justify-between overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()} // Prevent close on body click
            >
              {/* Watermark Crest */}
              <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] flex items-center justify-center pointer-events-none">
                <Award className="w-80 h-80 text-gold animate-spin-slow" />
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
                  Government Office of the Prime Minister, Dhaka, Bangladesh
                </p>
                <div className="w-32 h-[2px] bg-gold mt-3 mx-auto rounded-full" />
              </div>

              {/* Body */}
              <div className="my-8 sm:my-10 space-y-4">
                <p className="text-xs sm:text-sm font-sans italic text-muted-dark dark:text-gray-400">
                  This certificate of achievement is officially awarded to
                </p>
                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-charcoal dark:text-cream tracking-wide text-gold">
                  {personalInfo.name}
                </h2>
                <p className="text-xs sm:text-sm font-sans text-muted-dark dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
                  for successfully completing all parts, examinations, and competency metrics required to be verified and registered as a Level-3 certified professional in
                </p>
                <h3 className="text-lg sm:text-2xl font-display font-black text-charcoal dark:text-cream tracking-tight max-w-2xl mx-auto leading-snug">
                  {selectedScan.name}
                </h3>
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-gold text-charcoal shadow-sm border border-gold/10">
                  <Award className="w-4 h-4 shrink-0" /> Verified NSDA Level-3 Specialist
                </div>
              </div>

              {/* Footer row */}
              <div className="flex flex-col sm:flex-row items-center justify-between border-t border-charcoal/10 dark:border-white/10 pt-6 gap-6">
                <div className="text-left space-y-1">
                  <span className="block text-[8px] uppercase font-mono text-gray-500">Credential ID</span>
                  <span className="text-xs font-mono font-bold text-charcoal dark:text-cream">{selectedScan.credentialId}</span>
                  <span className="block text-[8px] uppercase font-mono text-gray-500 mt-2">Registration Status</span>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase">{selectedScan.date}</span>
                </div>

                {/* Big Stamp */}
                <div className="w-16 h-16 rounded-full border-4 border-double border-gold bg-gold/10 flex items-center justify-center relative shadow-lg">
                  <ShieldCheck className="w-8 h-8 text-gold" />
                </div>

                <div className="text-right space-y-1">
                  <span className="block text-[8px] uppercase font-mono text-gray-500">Issuing Authority</span>
                  <span className="text-xs font-sans font-bold text-charcoal dark:text-cream">{selectedScan.authority}</span>
                  <span className="block text-[8px] uppercase font-mono text-gray-500 mt-2">Certified Institution</span>
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

    </section>
  );
}
