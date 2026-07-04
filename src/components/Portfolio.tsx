import { useState } from 'react';
import { projects } from '../data';
import { Project } from '../types';
import Lightbox from './Lightbox';
import SafeImage from './SafeImage';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Layers, ExternalLink, Github, Info } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  // Categories requested
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'logo-design', label: 'Logo Design' },
    { id: 'brand-identity', label: 'Brand Identity' },
    { id: 'business-card', label: 'Business Card' },
    { id: 'flyer-design', label: 'Flyer Design' },
    { id: 'banner-design', label: 'Banner Design' },
    { id: 'social-media-design', label: 'Social Media Design' },
    { id: 'brochure-design', label: 'Brochure Design' },
    { id: 'packaging-design', label: 'Packaging Design' },
    { id: 'it-support-projects', label: 'IT Support Projects' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Format category identifier into a readable label
  const formatCategoryLabel = (catId: string) => {
    const matched = categories.find(c => c.id === catId);
    if (matched) return matched.label;
    return catId.replace('-', ' ');
  };

  const handlePrev = () => {
    if (selectedProjectIndex !== null) {
      const prevIndex = (selectedProjectIndex - 1 + filteredProjects.length) % filteredProjects.length;
      setSelectedProjectIndex(prevIndex);
    }
  };

  const handleNext = () => {
    if (selectedProjectIndex !== null) {
      const nextIndex = (selectedProjectIndex + 1) % filteredProjects.length;
      setSelectedProjectIndex(nextIndex);
    }
  };

  return (
    <section id="portfolio" className="py-20 px-6 sm:px-12 lg:px-16 border-t border-[#222222]/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-10 text-left flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6" data-aos="fade-up">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">My Works</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal mt-1">Creative Portfolio</h2>
            <div className="w-12 h-1 bg-gold mt-4 rounded-full" />
          </div>

          {/* Inline short stats indicator */}
          <div className="inline-flex items-center gap-2 bg-white/60 border border-charcoal/5 px-4 py-2 rounded-xl text-xs font-mono text-muted-dark shadow-sm">
            <Layers className="w-3.5 h-3.5 text-gold" />
            <span>Showing {filteredProjects.length} Selected Projects</span>
          </div>
        </div>

        {/* Category Filters with fluid sliding spring animations */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className="relative px-4 py-2.5 rounded-xl text-xs font-semibold font-sans tracking-wide transition-all duration-300 outline-none select-none cursor-pointer"
              >
                {/* Active Sliding Background Pill with Spring physics */}
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-gold rounded-xl shadow-lg shadow-gold/25"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
                
                {/* Text Label */}
                <span className={`relative z-10 transition-colors duration-300 ${
                  isActive ? 'text-charcoal font-extrabold' : 'text-muted-dark hover:text-charcoal'
                }`}>
                  {cat.label}
                </span>

                {/* Subtle outer stroke on inactive buttons */}
                {!isActive && (
                  <div className="absolute inset-0 rounded-xl border border-[#222222]/5 hover:border-gold/30 transition-colors duration-300 pointer-events-none" />
                )}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid with Glassmorphic Cards & High-End Interactions */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white/40 backdrop-blur-md rounded-3xl border border-charcoal/5 hover:border-gold/60 shadow-inner hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500 overflow-hidden flex flex-col h-full"
                id={`portfolio-card-${project.id}`}
              >
                {/* Thumbnail container with zoom on hover */}
                <div 
                  className="h-52 w-full overflow-hidden relative cursor-zoom-in bg-black/5"
                  onClick={() => setSelectedProjectIndex(index)}
                >
                  <SafeImage
                    src={project.image}
                    fallbackSrc={project.fallbackImage}
                    alt={project.title}
                    category={project.category}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Subtle glass vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Eye Badge floating on hover */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-charcoal opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-md">
                    <Eye className="w-4 h-4 text-gold" />
                  </div>
                </div>

                {/* Card details body */}
                <div className="p-5 flex flex-col flex-grow text-left space-y-3 justify-between">
                  
                  <div className="space-y-1.5">
                    {/* Category */}
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold">
                      {formatCategoryLabel(project.category)}
                    </span>

                    {/* Title */}
                    <h3 className="text-base font-display font-bold text-charcoal leading-snug group-hover:text-gold transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-muted-dark leading-relaxed font-sans font-light line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Dynamic Action Buttons Row */}
                  <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-charcoal/[0.04] mt-2">
                    {/* View Details Button */}
                    <button
                      onClick={() => setSelectedProjectIndex(index)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-charcoal text-white hover:bg-gold hover:text-charcoal transition-all text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm cursor-pointer"
                    >
                      <Info className="w-3 h-3" />
                      Details
                    </button>

                    {/* Preview Button */}
                    <button
                      onClick={() => setSelectedProjectIndex(index)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#FAF6EA] border border-charcoal/10 text-charcoal hover:bg-gold/15 hover:border-gold transition-all text-[10px] font-mono font-bold uppercase tracking-wider cursor-pointer"
                    >
                      <Eye className="w-3 h-3" />
                      Preview
                    </button>

                    {/* Optional Github Button */}
                    <a
                      href="https://github.com/mdatikulislamhamim68"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-white border border-charcoal/10 hover:border-gold/40 hover:bg-[#FAF6EA] text-charcoal/70 hover:text-charcoal transition-all"
                      title="View GitHub Project"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Lightbox with full gallery controls */}
        <AnimatePresence>
          {selectedProjectIndex !== null && (
            <Lightbox
              project={filteredProjects[selectedProjectIndex]}
              onClose={() => setSelectedProjectIndex(null)}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
