import React, { useState } from 'react';
import { 
  Palette, Sparkles, Award, Share2, FileText, 
  BookOpen, CreditCard, Box, Layout, Cpu,
  Contact, Megaphone, Tv, Printer, Download,
  Layers, Briefcase, Wifi, Laptop, UserCheck
} from 'lucide-react';
import { services } from '../data';
import { motion, AnimatePresence } from 'motion/react';

// Predefined static mapper to maintain strict type safety and high performance
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Sparkles,
  Award,
  Share2,
  FileText,
  BookOpen,
  CreditCard,
  Box,
  Layout,
  Cpu,
  Contact,
  Megaphone,
  Tv,
  Printer,
  Download,
  Layers,
  Briefcase,
  Wifi,
  Laptop,
  UserCheck,
};

interface ServiceCardProps {
  key?: any;
  service: typeof services[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Palette;
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    // Calculate tilt angles (max tilt 8 degrees for elegant 3D effect)
    const rX = -(mouseY / (height / 2)) * 8;
    const rY = (mouseX / (width / 2)) * 8;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      layout
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{ perspective: 1000 }}
      className="h-full"
      id={`service-card-wrapper-${service.id}`}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
          y: isHovered ? -8 : 0,
          boxShadow: isHovered 
            ? '0 15px 30px rgba(212, 175, 55, 0.25)' 
            : '0 4px 6px -1px rgba(0, 0, 0, 0.03), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
        }}
        transition={{
          type: 'tween',
          ease: 'easeOut',
          duration: 0.3,
        }}
        className={`group relative h-full rounded-2xl p-[1px] overflow-hidden transition-colors duration-300 ${
          isHovered 
            ? 'bg-gradient-to-br from-gold via-gold/40 to-transparent' 
            : 'bg-gradient-to-br from-charcoal/10 via-[#222222]/5 to-transparent'
        }`}
        id={`service-card-${service.id}`}
      >
        {/* Inner Card Body with Glass Effect */}
        <div className="relative bg-white/80 backdrop-blur-md hover:bg-white/90 rounded-[15px] p-6 flex flex-col justify-between h-full space-y-4 z-10 border border-white/40 shadow-inner">
          <div className="space-y-3">
            
            {/* Icon Container */}
            <div className="w-10 h-10 rounded-lg bg-gold/10 group-hover:bg-gold text-gold group-hover:text-charcoal flex items-center justify-center transition-all duration-300">
              <motion.div
                animate={{
                  rotate: isHovered ? 12 : 0,
                  scale: isHovered ? 1.1 : 1
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeOut'
                }}
              >
                <IconComponent className="w-5 h-5" />
              </motion.div>
            </div>

            {/* Title */}
            <h3 className="font-display font-bold text-base text-charcoal group-hover:text-gold transition-colors duration-300 text-left">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-muted-dark leading-relaxed font-sans font-light text-left">
              {service.description}
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-1 border-t border-[#222222]/5 pt-3">
            {service.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="text-[9px] font-mono text-charcoal/70 bg-[#FAF6EA]/80 border border-charcoal/5 px-1.5 py-0.5 rounded transition-colors duration-300 group-hover:bg-[#FAF6EA] group-hover:border-gold/20"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const [activeTab, setActiveTab] = useState<'all' | 'design' | 'technical'>('all');

  const filteredServices = services.filter(service => {
    if (activeTab === 'all') return true;
    return service.category === activeTab;
  });

  return (
    <section id="services" className="py-20 px-6 sm:px-12 lg:px-16 border-t border-[#222222]/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading & Filtering Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left" data-aos="fade-up">
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">Offerings</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal mt-1">My Services</h2>
            <div className="w-12 h-1 bg-gold mt-4 rounded-full" />
          </div>

          {/* Tabs Filter */}
          <div 
            className="flex p-1 bg-charcoal/5 rounded-xl border border-charcoal/5 self-start md:self-auto"
            data-aos="fade-left"
          >
            {[
              { id: 'all', label: 'All Services' },
              { id: 'design', label: 'Graphic Design' },
              { id: 'technical', label: 'IT Support' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`relative px-4 py-2 text-xs font-mono rounded-lg transition-colors duration-300 cursor-pointer ${
                  activeTab === tab.id 
                    ? 'text-white' 
                    : 'text-charcoal/60 hover:text-charcoal'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-service-tab"
                    className="absolute inset-0 bg-charcoal rounded-lg z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
