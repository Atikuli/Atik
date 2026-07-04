import { useState, useEffect } from 'react';
import { 
  Home, User, Briefcase, GraduationCap, Palette, Sparkles, Award, 
  Mail, Menu, X, Facebook, Linkedin, Github, Dribbble, Globe,
  BookOpen, HelpCircle, CreditCard
} from 'lucide-react';
import { personalInfo } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'resume', label: 'Resume', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'services', label: 'Services', icon: Palette },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'pricing', label: 'Pricing', icon: CreditCard },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'blog', label: 'Blog', icon: BookOpen },
    { id: 'testimonials', label: 'Reviews', icon: Sparkles },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Top Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-20 bg-[#FAF6EA]/90 backdrop-blur-md border-b border-[#222222]/10 px-6 flex items-center justify-between z-40">
        <div className="flex items-center gap-3">
          <motion.img 
            src="https://res.cloudinary.com/davtdct3r/image/upload/f_auto,q_auto/image-clean_mrkr6l" 
            alt="Atik Hamim Logo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="h-10 w-auto object-contain cursor-pointer"
          />
          <div>
            <h1 className="font-display font-bold text-[#222222] text-sm leading-tight">{personalInfo.displayName}</h1>
            <p className="text-xs text-muted-dark">Graphic Designer & IT</p>
          </div>
        </div>
        <button 
          onClick={() => setIsOpen(true)}
          className="w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-sm border border-[#222222]/5 text-[#222222] hover:text-gold transition-colors"
          aria-label="Open Menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-[#FAF6EA] border-r border-[#222222]/10 p-8 flex flex-col justify-between z-50 overflow-y-auto"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <motion.img 
                    src="https://res.cloudinary.com/davtdct3r/image/upload/f_auto,q_auto/image-clean_mrkr6l" 
                    alt="Atik Hamim Logo"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="h-12 w-auto object-contain cursor-pointer"
                  />
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white shadow-sm text-charcoal hover:text-gold"
                    aria-label="Close Menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Profile Avatar */}
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="relative w-24 h-24 mb-4">
                    <div className="absolute inset-0 rounded-full bg-gold/20 blur-md animate-pulse" />
                    <img 
                      src={imgError ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" : personalInfo.cvUrl} 
                      alt={personalInfo.name}
                      onError={() => setImgError(true)}
                      referrerPolicy="no-referrer"
                      className="relative w-full h-full rounded-full object-cover border-2 border-gold/40 shadow-inner"
                    />
                  </div>
                  <h2 className="font-display font-bold text-lg text-charcoal">{personalInfo.name}</h2>
                  <p className="text-xs text-muted-dark mt-1 font-medium bg-gold/10 px-3 py-1 rounded-full text-gold-700">Graphic Designer & IT Support</p>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-1.5">
                  {navItems.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                          isActive 
                            ? 'bg-gold text-charcoal shadow-sm' 
                            : 'text-muted-dark hover:bg-white/80 hover:text-charcoal'
                        }`}
                      >
                        <IconComponent className={`w-4 h-4 ${isActive ? 'text-charcoal' : 'text-muted-dark group-hover:text-charcoal'}`} />
                        {item.label}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Social Icons & Copyright */}
              <div className="mt-8 pt-6 border-t border-[#222222]/5">
                <div className="flex justify-center gap-4 mb-4">
                  <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-[#222222]/10 text-muted-dark hover:text-gold hover:border-gold transition-all" aria-label="Facebook">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-[#222222]/10 text-muted-dark hover:text-gold hover:border-gold transition-all" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-[#222222]/10 text-muted-dark hover:text-gold hover:border-gold transition-all" aria-label="GitHub">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-[#222222]/10 text-muted-dark hover:text-gold hover:border-gold transition-all" aria-label="Dribbble">
                    <Dribbble className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-[#222222]/10 text-muted-dark hover:text-gold hover:border-gold transition-all" aria-label="Behance">
                    <Globe className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-[10px] text-center text-muted-dark/80 font-mono">© 2026 {personalInfo.displayName}. Rajshahi</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:flex w-[260px] h-screen fixed top-0 left-0 bg-[#FAF6EA] border-r border-[#222222]/10 p-6 flex-col justify-between z-30">
        <div>
          {/* Logo Brand */}
          <div className="flex items-center gap-3 mb-10 group/logo">
            <motion.img 
              src="https://res.cloudinary.com/davtdct3r/image/upload/f_auto,q_auto/image-clean_mrkr6l" 
              alt="Atik Hamim Logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="h-[52px] w-auto object-contain cursor-pointer"
            />
            <div>
              <h1 className="font-display font-bold text-charcoal tracking-wider text-sm">{(personalInfo as any).displayName?.toUpperCase() || 'ATIK HAMIM'}</h1>
              <p className="text-[10px] uppercase font-mono tracking-widest text-gold font-semibold">Designer & IT</p>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="relative w-32 h-32 mb-4 group cursor-pointer">
              <div className="absolute inset-0 rounded-full bg-gold/25 blur-lg opacity-80 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gold/40 p-1 bg-white">
                <img 
                  src="https://res.cloudinary.com/davtdct3r/image/upload/f_auto,q_auto/IMG_20260124_210702_1_i7kzyi" 
                  alt={personalInfo.name}
                  onError={(e) => {
                    e.currentTarget.src = "https://res.cloudinary.com/davtdct3r/image/upload/f_auto,q_auto/IMG_20260124_210702_1_i7kzyi";
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <h2 className="font-display font-bold text-lg text-charcoal leading-tight">{personalInfo.name}</h2>
            <p className="text-[10px] text-muted-dark mt-2 font-semibold bg-gold/10 px-3 py-1 rounded-full text-charcoal/80 inline-block">
              Designer & IT Specialist
            </p>
          </div>

          {/* Sticky Navigation */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 outline-none select-none group"
                >
                  {/* Smooth Animated Sliding Indicator Pill with spring dynamics */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSidebarPill"
                      className="absolute inset-0 bg-gold rounded-xl shadow-md shadow-gold/15"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  <IconComponent className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 relative z-10 ${
                    isActive ? 'text-charcoal' : 'text-muted-dark group-hover:text-charcoal'
                  }`} />
                  
                  <span className={`tracking-wide relative z-10 transition-colors duration-300 ${
                    isActive ? 'text-charcoal font-bold' : 'text-muted-dark group-hover:text-charcoal'
                  }`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Social Icons & Footer */}
        <div className="border-t border-[#222222]/5 pt-6">
          <div className="flex justify-center gap-3.5 mb-4">
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-xl bg-white border border-[#222222]/10 text-muted-dark hover:text-gold hover:border-gold hover:scale-105 transition-all" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-xl bg-white border border-[#222222]/10 text-muted-dark hover:text-gold hover:border-gold hover:scale-105 transition-all" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-xl bg-white border border-[#222222]/10 text-muted-dark hover:text-gold hover:border-gold hover:scale-105 transition-all" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-xl bg-white border border-[#222222]/10 text-muted-dark hover:text-gold hover:border-gold hover:scale-105 transition-all" aria-label="Dribbble">
              <Dribbble className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-xl bg-white border border-[#222222]/10 text-muted-dark hover:text-gold hover:border-gold hover:scale-105 transition-all" aria-label="Behance">
              <Globe className="w-4 h-4" />
            </a>
          </div>
          <p className="text-[10px] text-center text-muted-dark font-mono">© 2026 {personalInfo.displayName}. Rajshahi</p>
        </div>
      </aside>
    </>
  );
}
