import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Footer from './components/Footer';
import AOS from 'aos';
import { MouseSpotlight } from './components/AnimatedElements';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import { ScrollProgressBar, BackToTop } from './components/ScrollFeatures';
import AIAssistant from './components/AIAssistant';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('portfolio-session-loaded');
    }
    return true;
  });

  // Initialize AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  // Unified scroll tracker to automatically highlight sidebar items as user scrolls
  useEffect(() => {
    const sectionIds = [
      'home', 'about', 'resume', 'training', 'certifications', 'achievements', 'skills', 'services', 
      'portfolio', 'faq', 'testimonials', 'contact'
    ];
    
    const observers = sectionIds.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          // Triggers active change when section occupies the active view space
          rootMargin: '-25% 0px -35% 0px',
          threshold: 0.1,
        }
      );

      observer.observe(element);
      return { element, observer };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.element);
      });
    };
  }, []);

  return (
    <>
      {/* Premium Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div className="min-h-screen bg-cream dark:bg-[#121212] text-charcoal dark:text-cream font-sans relative antialiasedSelection select-none selection:bg-gold selection:text-charcoal selection:font-bold transition-colors duration-300">
        {/* Scroll Progress Bar */}
        <ScrollProgressBar />

        {/* Premium Custom Cursor */}
        <CustomCursor />

        {/* Interactive Mouse Tracking Spotlight */}
        <MouseSpotlight />

        {/* Fixed Sticky Sidebar / Mobile Navigation Header */}
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Main Right Scrolling Container (offset by left sidebar width exactly 260px on large displays) */}
        <main className="lg:pl-[260px] min-h-screen flex flex-col justify-between">
          
          {/* Scroll Content Block */}
          <Home />

          {/* Global layout Footer */}
          <Footer />
          
        </main>

        {/* Back to Top Floating Button */}
        <BackToTop />

        {/* Floating AI Assistant Widget */}
        <AIAssistant />
      </div>
    </>
  );
}

