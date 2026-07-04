import { useState } from 'react';
import { 
  Home, User, Briefcase, GraduationCap, Palette, Sparkles, Award, 
  Mail, Menu, X, Facebook, Linkedin, Github, Globe,
  BookOpen, Instagram, MessageCircle, Send,
  Trophy, ShieldCheck, Sun, Moon, Languages
} from 'lucide-react';
import { personalInfo, socialLinks } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';

const iconMap: Record<string, any> = {
  Facebook,
  Instagram,
  MessageCircle,
  Send,
  Linkedin,
  Github,
  Globe
};

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { theme, language, toggleTheme, setLanguage, t } = useApp();

  const navItems = [
    { id: 'home', icon: Home },
    { id: 'about', icon: User },
    { id: 'resume', icon: GraduationCap },
    { id: 'training', icon: BookOpen },
    { id: 'certifications', icon: ShieldCheck },
    { id: 'skills', icon: Award },
    { id: 'services', icon: Palette },
    { id: 'portfolio', icon: Briefcase },
    { id: 'achievements', icon: Trophy },
    { id: 'testimonials', icon: MessageCircle },
    { id: 'contact', icon: Mail },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Shared Selector Sub-Component to avoid code duplication and keep bundle small
  const ControlPanel = () => (
    <div className="flex flex-col gap-3 p-4 bg-white/40 dark:bg-black/25 backdrop-blur-md rounded-2xl border border-charcoal/5 dark:border-white/5 shadow-sm">
      {/* Theme Switcher */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-mono font-bold text-muted-dark dark:text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
          {theme === 'dark' ? <Moon className="w-3.5 h-3.5 text-gold" /> : <Sun className="w-3.5 h-3.5 text-gold" />}
          Mode: {theme === 'dark' ? 'Dark' : 'Light'}
        </span>
        <button
          onClick={toggleTheme}
          className="relative w-12 h-6 bg-charcoal/10 dark:bg-white/10 rounded-full cursor-pointer transition-colors focus-visible:ring-2 focus-visible:ring-gold outline-none"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className="absolute top-1 left-1 w-4 h-4 bg-gold rounded-full shadow-sm"
            style={{ x: theme === 'dark' ? 24 : 0 }}
          />
        </button>
      </div>

      <div className="h-px bg-charcoal/5 dark:bg-white/5" />

      {/* Language Switcher */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-mono font-bold text-muted-dark dark:text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
          <Languages className="w-3.5 h-3.5 text-gold" />
          Lang
        </span>
        <div className="flex gap-0.5 bg-charcoal/5 dark:bg-white/5 p-0.5 rounded-lg border border-charcoal/5 dark:border-white/5">
          <button
            onClick={() => setLanguage('en')}
            className={`px-2 py-1 text-[10px] font-bold font-mono rounded-md transition-all cursor-pointer ${
              language === 'en'
                ? 'bg-gold text-charcoal shadow-sm'
                : 'text-muted-dark dark:text-gray-400 hover:text-charcoal dark:hover:text-cream'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('bn')}
            className={`px-2 py-1 text-[10px] font-bold font-mono rounded-md transition-all cursor-pointer ${
              language === 'bn'
                ? 'bg-gold text-charcoal shadow-sm'
                : 'text-muted-dark dark:text-gray-400 hover:text-charcoal dark:hover:text-cream'
            }`}
          >
            বাং
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Top Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-20 bg-cream/90 dark:bg-[#121212]/90 backdrop-blur-md border-b border-charcoal/10 dark:border-white/10 px-6 flex items-center justify-between z-40">
        <div className="flex items-center gap-3">
          <motion.img 
            src="https://res.cloudinary.com/davtdct3r/image/upload/f_auto,q_auto/image-clean_mrkr6l" 
            alt="Atik Hamim Logo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="h-10 w-auto object-contain cursor-pointer"
          />
          <div className="text-left">
            <h1 className="font-display font-bold text-charcoal dark:text-cream text-sm leading-tight">{personalInfo.displayName}</h1>
            <p className="text-[10px] text-muted-dark dark:text-gray-400 font-medium tracking-wide">{t('general.designer_it')}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Quick Mobile Mode Toggle */}
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-[#1a1a1a] shadow-sm border border-charcoal/5 dark:border-white/5 text-charcoal dark:text-cream hover:text-gold transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-gold" />}
          </button>
          <button 
            onClick={() => setIsOpen(true)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-[#1a1a1a] shadow-sm border border-charcoal/5 dark:border-white/5 text-charcoal dark:text-cream hover:text-gold transition-colors cursor-pointer"
            aria-label="Open Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
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
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-cream dark:bg-[#121212] border-r border-charcoal/10 dark:border-white/10 p-8 flex flex-col justify-between z-50 overflow-y-auto"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <motion.img 
                    src="https://res.cloudinary.com/davtdct3r/image/upload/f_auto,q_auto/image-clean_mrkr6l" 
                    alt="Atik Hamim Logo"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="h-12 w-auto object-contain cursor-pointer"
                  />
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-[#1a1a1a] shadow-sm text-charcoal dark:text-cream hover:text-gold cursor-pointer"
                    aria-label="Close Menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Mobile Switches Control */}
                <div className="mb-6">
                  <ControlPanel />
                </div>

                {/* Profile Avatar */}
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative w-20 h-20 mb-3">
                    <div className="absolute inset-0 rounded-full bg-gold/20 blur-md animate-pulse" />
                    <img 
                      src={imgError ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" : "https://res.cloudinary.com/davtdct3r/image/upload/f_auto,q_auto/IMG_20260124_210702_1_i7kzyi"} 
                      alt={personalInfo.name}
                      onError={() => setImgError(true)}
                      referrerPolicy="no-referrer"
                      className="relative w-full h-full rounded-full object-cover border-2 border-gold/40 shadow-inner"
                    />
                  </div>
                  <h2 className="font-display font-bold text-base text-charcoal dark:text-cream">{personalInfo.name}</h2>
                  <p className="text-[10px] text-muted-dark dark:text-gray-400 mt-1 font-semibold bg-gold/10 px-2.5 py-0.5 rounded-full text-gold-700">
                    {t('general.designer_it')}
                  </p>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-1" role="navigation" aria-label="Mobile Navigation">
                  {navItems.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full flex items-center gap-3.5 px-4 py-2.5 rounded-xl font-medium text-sm transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                          isActive 
                            ? 'bg-gold text-charcoal shadow-sm' 
                            : 'text-muted-dark dark:text-gray-400 hover:bg-white/80 dark:hover:bg-[#1a1a1a]/80 hover:text-charcoal dark:hover:text-cream'
                        }`}
                      >
                        <IconComponent className={`w-4 h-4 ${isActive ? 'text-charcoal' : 'text-muted-dark dark:text-gray-400'}`} />
                        {t('nav.' + item.id)}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Social Icons & Copyright */}
              <div className="mt-6 pt-4 border-t border-charcoal/5 dark:border-white/5">
                <div className="flex flex-wrap justify-center gap-2 mb-3">
                  {socialLinks.map((link) => {
                    const LinkIcon = iconMap[link.iconName] || Globe;
                    return (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={link.name}
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-[#1a1a1a] border border-charcoal/10 dark:border-white/10 text-muted-dark dark:text-gray-400 hover:text-gold hover:border-gold hover:scale-105 transition-all"
                        aria-label={link.name}
                      >
                        <LinkIcon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
                <p className="text-[9px] text-center text-muted-dark/80 dark:text-gray-500 font-mono">© 2026 {personalInfo.displayName}. Rajshahi</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:flex w-[260px] h-screen fixed top-0 left-0 bg-cream dark:bg-[#121212] border-r border-charcoal/10 dark:border-white/10 p-5 flex-col justify-between z-30 select-none overflow-y-auto">
        <div>
          {/* Logo Brand */}
          <div className="flex items-center gap-2.5 mb-6 group/logo">
            <motion.img 
              src="https://res.cloudinary.com/davtdct3r/image/upload/f_auto,q_auto/image-clean_mrkr6l" 
              alt="Atik Hamim Logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="h-11 w-auto object-contain cursor-pointer"
            />
            <div className="text-left">
              <h1 className="font-display font-bold text-charcoal dark:text-cream tracking-wide text-xs">{(personalInfo as any).displayName?.toUpperCase() || 'ATIK HAMIM'}</h1>
              <p className="text-[9px] uppercase font-mono tracking-widest text-gold font-semibold">Designer & IT</p>
            </div>
          </div>

          {/* Controls Hook Block */}
          <div className="mb-6">
            <ControlPanel />
          </div>

          {/* Profile Photo */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="relative w-24 h-24 mb-3 group cursor-pointer">
              <div className="absolute inset-0 rounded-full bg-gold/25 blur-md opacity-80 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gold/40 p-0.5 bg-white dark:bg-[#1a1a1a]">
                <img 
                  src="https://res.cloudinary.com/davtdct3r/image/upload/f_auto,q_auto/IMG_20260124_210702_1_i7kzyi" 
                  alt={personalInfo.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <h2 className="font-display font-bold text-base text-charcoal dark:text-cream leading-tight">{personalInfo.name}</h2>
            <p className="text-[9px] text-muted-dark dark:text-gray-400 mt-1.5 font-semibold bg-gold/10 px-2.5 py-0.5 rounded-full text-charcoal/80 dark:text-cream/85 inline-block">
              {t('general.designer_it')}
            </p>
          </div>

          {/* Sticky Navigation */}
          <nav className="space-y-0.5" role="navigation" aria-label="Desktop Navigation">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative w-full flex items-center gap-3 px-3.5 py-2 rounded-xl font-medium text-xs transition-all duration-300 outline-none select-none group cursor-pointer focus-visible:ring-2 focus-visible:ring-gold"
                >
                  {/* Smooth Animated Sliding Indicator Pill with spring dynamics */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSidebarPill"
                      className="absolute inset-0 bg-gold rounded-xl shadow-md shadow-gold/15"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  <IconComponent className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110 relative z-10 ${
                    isActive ? 'text-charcoal font-bold' : 'text-muted-dark dark:text-gray-400 group-hover:text-charcoal dark:group-hover:text-cream'
                  }`} />
                  
                  <span className={`tracking-wide relative z-10 transition-colors duration-300 ${
                    isActive ? 'text-charcoal font-bold' : 'text-muted-dark dark:text-gray-400 group-hover:text-charcoal dark:group-hover:text-cream'
                  }`}>
                    {t('nav.' + item.id)}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Social Icons & Footer */}
        <div className="border-t border-charcoal/5 dark:border-white/5 pt-4">
          <div className="flex flex-wrap justify-center gap-1.5 mb-3">
            {socialLinks.map((link) => {
              const LinkIcon = iconMap[link.iconName] || Globe;
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  className="w-6.5 h-6.5 flex items-center justify-center rounded-lg bg-white dark:bg-[#1a1a1a] border border-charcoal/10 dark:border-white/10 text-muted-dark dark:text-gray-400 hover:text-gold hover:border-gold hover:scale-110 transition-all duration-300"
                  aria-label={link.name}
                >
                  <LinkIcon className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div>
          <p className="text-[9px] text-center text-muted-dark dark:text-gray-500 font-mono">© 2026 {personalInfo.displayName}. Rajshahi</p>
        </div>
      </aside>
    </>
  );
}
