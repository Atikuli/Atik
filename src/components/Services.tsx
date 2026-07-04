import React, { useState } from 'react';
import { 
  Palette, Sparkles, Award, Share2, FileText, 
  BookOpen, CreditCard, Box, Layout, Cpu 
} from 'lucide-react';
import { services } from '../data';
import { motion } from 'motion/react';

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
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.05 }}
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
          y: isHovered ? -12 : 0,
          boxShadow: isHovered 
            ? '0 20px 35px rgba(212, 175, 55, 0.35)' 
            : '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        }}
        transition={{
          type: 'tween',
          ease: 'easeOut',
          duration: 0.4, // Smooth transition 400ms
        }}
        className={`group relative h-full rounded-[20px] p-[1.5px] overflow-hidden transition-colors duration-400 ${
          isHovered 
            ? 'bg-gradient-to-br from-gold via-gold/50 to-gold/10' 
            : 'bg-gradient-to-br from-charcoal/10 via-[#222222]/5 to-transparent'
        }`}
        id={`service-card-${service.id}`}
      >
        {/* Animated border glowing light ray that rotates on hover */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            rotate: isHovered ? 360 : 0
          }}
          transition={{
            rotate: { repeat: Infinity, duration: 4, ease: 'linear' },
            opacity: { duration: 0.4 }
          }}
          className="absolute -inset-10 bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0 rounded-full blur-xl pointer-events-none"
        />

        {/* Inner Card Body with Glass Effect */}
        <div className="relative bg-white/75 backdrop-blur-md hover:bg-white/85 rounded-[18.5px] p-6 sm:p-7 flex flex-col justify-between h-full space-y-6 z-10 border border-white/40 shadow-inner">
          <div className="space-y-4">
            
            {/* Icon Container - rotates slightly on hover */}
            <div className="w-12 h-12 rounded-xl bg-gold/10 group-hover:bg-gold text-gold group-hover:text-charcoal flex items-center justify-center transition-all duration-400">
              <motion.div
                animate={{
                  rotate: isHovered ? 12 : 0,
                  scale: isHovered ? 1.1 : 1
                }}
                transition={{
                  duration: 0.4, // Smooth transition 400ms
                  ease: 'easeOut'
                }}
              >
                <IconComponent className="w-5 h-5" />
              </motion.div>
            </div>

            {/* Title */}
            <h3 className="font-display font-bold text-lg text-charcoal group-hover:text-gold transition-colors duration-400 text-left">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-muted-dark leading-relaxed font-sans font-light text-left">
              {service.description}
            </p>
          </div>

          {/* Badges / Subskills list */}
          <div className="flex flex-wrap gap-1.5 border-t border-[#222222]/5 pt-4">
            {service.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="text-[10px] font-mono text-charcoal/70 bg-[#FAF6EA]/80 border border-charcoal/5 px-2 py-0.5 rounded-md transition-colors duration-400 group-hover:bg-[#FAF6EA] group-hover:border-gold/20"
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
  return (
    <section id="services" className="py-20 px-6 sm:px-12 lg:px-16 border-t border-[#222222]/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-14 text-left" data-aos="fade-up">
          <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">Offerings</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal mt-1">My Services</h2>
          <div className="w-12 h-1 bg-gold mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
