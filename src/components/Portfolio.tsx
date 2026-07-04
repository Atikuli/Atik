import { useState } from 'react';
import { projects } from '../data';
import { Project } from '../types';
import Lightbox from './Lightbox';
import SafeImage from './SafeImage';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Layers } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'branding', label: 'Branding' },
    { id: 'logo', label: 'Logo' },
    { id: 'flyer', label: 'Flyer' },
    { id: 'social-media', label: 'Social Media' },
    { id: 'print', label: 'Print' },
    { id: 'packaging', label: 'Packaging' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
          <div className="inline-flex items-center gap-2 bg-white/60 border border-charcoal/5 px-4 py-2 rounded-xl text-xs font-mono text-muted-dark">
            <Layers className="w-3.5 h-3.5 text-gold" />
            <span>Showing {filteredProjects.length} Selected Projects</span>
          </div>
        </div>

        {/* Category Filters with fluid sliding spring animations */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {categories.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className="relative px-5 py-2.5 rounded-xl text-xs font-semibold font-sans tracking-wide transition-all duration-300 outline-none select-none"
              >
                {/* Active Sliding Background Pill with Spring physics */}
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-gold rounded-xl shadow-lg shadow-gold/20"
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

        {/* Portfolio Grid with Motion Layout */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-charcoal/5 cursor-pointer aspect-[4/3]"
              >
                {/* Image Container with Zoom */}
                <div className="w-full h-full overflow-hidden relative">
                  <SafeImage
                    src={project.image}
                    fallbackSrc={project.fallbackImage}
                    alt={project.title}
                    category={project.category}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Glassmorphic Overlay on Hover */}
                  <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-between p-6 text-left">
                    
                    {/* Top Tag & Indicator */}
                    <div className="flex justify-between items-center">
                      <span className="px-2.5 py-1 rounded-md text-[9px] font-mono font-bold uppercase tracking-wider bg-gold text-charcoal shadow-sm">
                        {project.category.replace('-', ' ')}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        <Eye className="w-4.5 h-4.5" />
                      </div>
                    </div>

                    {/* Project Label Title & Tech */}
                    <div className="space-y-1.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                      <p className="text-[10px] font-mono text-gold uppercase tracking-widest">Case Study</p>
                      <h3 className="text-lg font-display font-bold text-white leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-1 pt-1.5">
                        {project.tools.slice(0, 2).map((tool, idx) => (
                          <span key={idx} className="text-[9px] font-mono text-white/60 bg-white/10 px-2 py-0.5 rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Lightbox */}
        <AnimatePresence>
          {selectedProject && (
            <Lightbox
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
