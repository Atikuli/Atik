import { X, Calendar, User, Hammer, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import SafeImage from './SafeImage';
import { motion } from 'motion/react';

interface LightboxProps {
  project: Project;
  onClose: () => void;
}

export default function Lightbox({ project, onClose }: LightboxProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-charcoal/90 backdrop-blur-md cursor-zoom-out"
      />

      {/* Lightbox Modal Window */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 220 }}
        className="relative bg-[#FAF6EA] w-full max-w-5xl rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 max-h-[90vh] flex flex-col md:flex-row z-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-charcoal/80 hover:bg-gold text-white hover:text-charcoal flex items-center justify-center transition-all shadow-md"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Large Portfolio Media */}
        <div className="md:w-3/5 bg-black/5 flex items-center justify-center relative min-h-[250px] md:min-h-0 md:h-auto overflow-hidden">
          <SafeImage
            src={project.image}
            fallbackSrc={project.fallbackImage}
            alt={project.title}
            category={project.category}
            className="w-full h-full object-cover max-h-[45vh] md:max-h-[90vh]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Right Side: Rich Case Study Details */}
        <div className="md:w-2/5 p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[45vh] md:max-h-[90vh] text-left">
          
          <div className="space-y-6">
            {/* Category Tag */}
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-gold text-charcoal">
              {project.category.replace('-', ' ')}
            </span>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-charcoal leading-tight">
              {project.title}
            </h3>

            {/* Narrative Case Study */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-dark border-b border-[#222222]/10 pb-2">
                Project Overview
              </h4>
              <p className="text-sm text-muted-dark leading-relaxed font-sans font-light">
                {project.description}
              </p>
            </div>

            {/* Spec / Project Details Grid */}
            <div className="space-y-3.5 bg-white rounded-2xl p-5 border border-charcoal/5 shadow-sm">
              <div className="flex items-center gap-3 text-xs">
                <User className="w-4 h-4 text-gold shrink-0" />
                <div className="font-sans">
                  <span className="text-muted-dark block text-[10px] uppercase font-mono">Client</span>
                  <span className="font-bold text-charcoal">{project.client}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <Calendar className="w-4 h-4 text-gold shrink-0" />
                <div className="font-sans">
                  <span className="text-muted-dark block text-[10px] uppercase font-mono">Date Completion</span>
                  <span className="font-bold text-charcoal">{project.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <Hammer className="w-4 h-4 text-gold shrink-0" />
                <div className="font-sans">
                  <span className="text-muted-dark block text-[10px] uppercase font-mono">Tools & Tech</span>
                  <span className="font-bold text-charcoal">{project.tools.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Interactive Trigger */}
          <div className="pt-6 border-t border-[#222222]/5 mt-8 flex justify-between items-center">
            <span className="text-xs text-muted-dark font-mono uppercase tracking-widest">Atik Ahmed Portfolio</span>
            <button
              onClick={onClose}
              className="text-xs font-semibold text-charcoal hover:text-gold flex items-center gap-1.5 transition-colors font-mono uppercase"
            >
              Back To Grid
            </button>
          </div>

        </div>

      </motion.div>
    </div>
  );
}
