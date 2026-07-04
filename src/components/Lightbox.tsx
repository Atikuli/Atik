import React, { useEffect, useState, useRef } from 'react';
import { 
  X, Calendar, User, Hammer, ExternalLink, Github, 
  ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Maximize2, Minimize2 
} from 'lucide-react';
import { Project } from '../types';
import SafeImage from './SafeImage';
import { motion, AnimatePresence } from 'motion/react';

interface LightboxProps {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ project, onClose, onPrev, onNext }: LightboxProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setIsZoomed(false);
        onPrev();
      } else if (e.key === 'ArrowRight') {
        setIsZoomed(false);
        onNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 select-none">
      {/* Dynamic Background with Strong Blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#0f0e0a]/95 backdrop-blur-xl cursor-zoom-out"
        id="lightbox-backdrop"
      />

      {/* Lightbox Container Frame */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        transition={{ type: 'spring', damping: 28, stiffness: 240 }}
        className="relative bg-white/5 backdrop-blur-md w-full h-full max-w-7xl rounded-[2.5rem] overflow-hidden border border-white/10 flex flex-col md:flex-row z-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]"
        id="lightbox-modal"
      >
        
        {/* Left/Image Area: Generous dark media space */}
        <div className="relative flex-1 bg-black/40 flex items-center justify-center overflow-hidden h-3/5 md:h-full group">
          
          {/* Main Display Image */}
          <div 
            ref={containerRef}
            className={`w-full h-full flex items-center justify-center p-4 md:p-8 transition-all duration-300 overflow-auto ${
              isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={toggleZoom}
          >
            <motion.div
              animate={{
                scale: isZoomed ? 1.8 : 1,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="max-w-full max-h-full flex items-center justify-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="max-w-full max-h-[50vh] md:max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10 pointer-events-none select-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Previous/Next On-Demand Arrow overlays (Hover state) */}
          <button
            onClick={(e) => { e.stopPropagation(); setIsZoomed(false); onPrev(); }}
            className="absolute left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-gold backdrop-blur-md text-white hover:text-charcoal flex items-center justify-center transition-all shadow-lg hover:scale-110 active:scale-95"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setIsZoomed(false); onNext(); }}
            className="absolute right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-gold backdrop-blur-md text-white hover:text-charcoal flex items-center justify-center transition-all shadow-lg hover:scale-110 active:scale-95"
            aria-label="Next Project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Floating Media Actions Bar */}
          <div className="absolute top-6 left-6 flex items-center gap-2">
            <button
              onClick={(e) => { e.stopPropagation(); toggleZoom(); }}
              className="w-10 h-10 rounded-xl bg-charcoal/80 hover:bg-gold text-white hover:text-charcoal flex items-center justify-center transition-all shadow-md backdrop-blur-md"
              title={isZoomed ? "Zoom Out" : "Zoom In"}
            >
              {isZoomed ? <ZoomOut className="w-4.5 h-4.5" /> : <ZoomIn className="w-4.5 h-4.5" />}
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setShowInfo(!showInfo); }}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-md backdrop-blur-md ${
                showInfo 
                  ? 'bg-gold text-charcoal' 
                  : 'bg-charcoal/80 hover:bg-gold text-white hover:text-charcoal'
              }`}
              title={showInfo ? "Hide Project Details" : "Show Project Details"}
            >
              <Maximize2 className="w-4.5 h-4.5" />
            </button>
          </div>

        </div>

        {/* Right Side: Case Study Metadata & Controls */}
        <AnimatePresence>
          {showInfo && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="w-full md:w-[420px] bg-[#FAF6EA] border-t md:border-t-0 md:border-l border-white/10 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto h-2/5 md:h-full text-left"
            >
              <div className="space-y-6">
                {/* Category & Status */}
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-gold text-charcoal shadow-sm">
                    {project.category.replace('-', ' ')}
                  </span>
                  
                  {/* Exit Close Button */}
                  <button
                    onClick={onClose}
                    className="w-8 h-8 rounded-full bg-charcoal/10 hover:bg-gold text-charcoal hover:text-charcoal flex items-center justify-center transition-all"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Main Case Title */}
                <div className="space-y-1.5">
                  <p className="text-[10px] font-mono text-gold uppercase tracking-widest font-bold">Project Details</p>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-charcoal leading-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Narrative Overview */}
                <div className="space-y-2.5">
                  <h4 className="text-[10px] font-mono font-semibold uppercase tracking-widest text-muted-dark border-b border-[#222222]/10 pb-1.5">
                    Creative Narrative
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-dark leading-relaxed font-sans font-light">
                    {project.description}
                  </p>
                </div>

                {/* Metadata Table */}
                <div className="space-y-3 bg-white/80 rounded-2xl p-4 border border-charcoal/5 shadow-inner">
                  
                  <div className="flex items-center gap-3 text-xs">
                    <User className="w-3.5 h-3.5 text-gold shrink-0" />
                    <div>
                      <span className="text-muted-dark block text-[9px] uppercase font-mono tracking-wider">Client</span>
                      <span className="font-bold text-charcoal">{project.client}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs border-t border-charcoal/[0.04] pt-2.5">
                    <Calendar className="w-3.5 h-3.5 text-gold shrink-0" />
                    <div>
                      <span className="text-muted-dark block text-[9px] uppercase font-mono tracking-wider">Completed</span>
                      <span className="font-bold text-charcoal">{project.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs border-t border-charcoal/[0.04] pt-2.5">
                    <Hammer className="w-3.5 h-3.5 text-gold shrink-0" />
                    <div>
                      <span className="text-muted-dark block text-[9px] uppercase font-mono tracking-wider">Tools & Utilities</span>
                      <span className="font-bold text-charcoal">{project.tools.join(', ')}</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Interactive Triggers */}
              <div className="pt-6 border-t border-charcoal/[0.05] mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={project.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-charcoal text-white rounded-xl text-xs font-mono font-bold hover:bg-gold hover:text-charcoal transition-all shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Preview
                </a>
                
                {/* Optional Github button (shown as generic design source or IT script helper code if needed) */}
                <a
                  href="https://github.com/mdatikulislamhamim68"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white border border-charcoal/10 text-charcoal rounded-xl text-xs font-mono hover:border-gold/50 hover:bg-[#FAF6EA] transition-all"
                >
                  <Github className="w-3.5 h-3.5 text-charcoal/70" />
                  Source Code
                </a>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
}
