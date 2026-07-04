import { useState, useEffect } from 'react';
import { 
  ArrowUp, Facebook, Linkedin, Github, Globe, 
  Instagram, MessageCircle, Send, Mail, Phone, MapPin, Sparkles, ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo, socialLinks, portfolioConfig } from '../data';
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

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const { language, theme, t } = useApp();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Education' },
    { id: 'training', label: 'Professional Training' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="py-16 px-6 sm:px-12 lg:px-16 border-t border-[#222222]/5 dark:border-white/5 bg-white/40 dark:bg-[#121212]/40 backdrop-blur-md relative overflow-hidden text-left">
      {/* Absolute visual ornaments */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        {/* Main Grid structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand Info (5 cols on lg) */}
          <div className="space-y-6 lg:col-span-5">
            <div className="flex items-center gap-3">
              <img 
                src="https://res.cloudinary.com/davtdct3r/image/upload/f_auto,q_auto/image-clean_mrkr6l" 
                alt="Atik Hamim Logo" 
                className="h-14 w-auto object-contain bg-white/85 p-1 rounded-xl shadow-md border border-gold/40"
              />
              <div>
                <h3 className="text-xl font-display font-extrabold text-charcoal dark:text-cream leading-none tracking-wide">
                  {personalInfo.displayName}
                </h3>
                <div className="flex flex-col gap-0.5 mt-1">
                  <span className="text-[11px] font-mono font-bold text-gold uppercase tracking-wider">
                    Graphic Designer
                  </span>
                  <span className="text-[10px] font-mono text-muted-dark dark:text-gray-400">
                    IT Support Specialist
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-charcoal/80 dark:text-gray-400 leading-relaxed max-w-sm">
              {language === 'bn'
                ? "আমি এনএসডিএ লেভেল-৩ সার্টিফাইড গ্রাফিক ডিজাইনার এবং আইটি সাপোর্ট স্পেশালিস্ট। যেকোনো ধরনের ক্রিয়েটিভ ডিজাইন ও কারিগরি সহায়তার জন্য আমি সর্বদা প্রস্তুত।"
                : "NSDA Level-3 Certified Graphic Designer and IT Support Specialist. Offering elite bespoke graphic layouts and secure software troubleshooting systems globally."}
            </p>

            <div className="flex gap-2.5">
              {socialLinks.map((link) => {
                const LinkIcon = iconMap[link.iconName] || Globe;
                return (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-9 h-9 flex items-center justify-center rounded-xl bg-white dark:bg-[#1a1a1a] border border-charcoal/10 dark:border-white/10 text-muted-dark dark:text-gray-400 hover:text-gold hover:border-gold hover:shadow-lg transition-all cursor-pointer"
                    aria-label={link.name}
                  >
                    <LinkIcon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Navigation Links (3 cols on lg) */}
          <div className="space-y-4 lg:col-span-3">
            <h4 className="text-sm font-display font-bold text-charcoal dark:text-cream uppercase tracking-widest border-b border-charcoal/10 dark:border-white/10 pb-2">
              {language === 'bn' ? 'কুইক লিংক' : 'Quick Links'}
            </h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
              {footerLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-muted-dark dark:text-gray-400 hover:text-gold transition-colors text-left cursor-pointer font-medium hover:underline flex items-center gap-1"
                  >
                    <Sparkles className="w-2.5 h-2.5 text-gold shrink-0 opacity-0 hover:opacity-100 transition-opacity" />
                    {t('nav.' + item.id)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact details (4 cols on lg) */}
          <div className="space-y-4 lg:col-span-4">
            <h4 className="text-sm font-display font-bold text-charcoal dark:text-cream uppercase tracking-widest border-b border-charcoal/10 dark:border-white/10 pb-2">
              {language === 'bn' ? 'যোগাযোগ' : 'Get In Touch'}
            </h4>
            <div className="space-y-3.5 text-xs">
              
              {/* Email link */}
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 p-2 rounded-xl hover:bg-gold/10 dark:hover:bg-gold/10 transition-all text-muted-dark dark:text-gray-400 hover:text-gold group"
              >
                <div className="w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase font-mono block text-gray-500">Email Address</span>
                  <span className="font-semibold truncate block">{personalInfo.email}</span>
                </div>
              </a>

              {/* Phone link */}
              <a 
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 p-2 rounded-xl hover:bg-gold/10 dark:hover:bg-gold/10 transition-all text-muted-dark dark:text-gray-400 hover:text-gold group"
              >
                <div className="w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono block text-gray-500">Phone & WhatsApp</span>
                  <span className="font-semibold block">{personalInfo.phone}</span>
                </div>
              </a>

              {/* Location display */}
              <div className="flex items-center gap-3 p-2 rounded-xl text-muted-dark dark:text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono block text-gray-500">Location</span>
                  <span className="font-semibold block">{personalInfo.address}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-charcoal/10 dark:bg-white/10" />

        {/* Bottom copyright details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center text-xs text-muted-dark dark:text-gray-500">
          <p className="font-sans font-light">
            © 2026 <span className="font-bold text-charcoal dark:text-cream">Md. Atikul Islam Hamim</span>. {language === 'bn' ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All rights reserved.'}
          </p>
          <p className="font-mono text-[10px] tracking-wide flex items-center gap-1">
            Designed & Developed by <span className="text-gold font-bold hover:underline cursor-pointer flex items-center gap-0.5">Atik Hamim <ExternalLink className="w-2.5 h-2.5" /></span>
          </p>
        </div>

      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ scale: 0, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 15 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 w-12 h-12 rounded-full bg-charcoal dark:bg-cream hover:bg-gold dark:hover:bg-gold text-white dark:text-charcoal hover:text-charcoal flex items-center justify-center transition-all shadow-xl hover:shadow-gold/25 cursor-pointer border border-white/10 dark:border-black/10"
            aria-label="Back To Top"
          >
            <ArrowUp className="w-5 h-5 animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
