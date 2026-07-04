import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import ResumeTimeline from './components/ResumeTimeline';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import BlogPreview from './components/BlogPreview';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import { MouseSpotlight } from './components/AnimatedElements';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

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
      'home', 'about', 'resume', 'skills', 'services', 
      'portfolio', 'pricing', 'faq', 'blog', 'testimonials', 'contact'
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
    <div className="min-h-screen bg-[#FAF6EA] text-charcoal font-sans relative antialiasedSelection select-none selection:bg-gold selection:text-charcoal selection:font-bold">
      {/* Interactive Mouse Tracking Spotlight */}
      <MouseSpotlight />

      {/* Fixed Sticky Sidebar / Mobile Navigation Header */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Right Scrolling Container (offset by left sidebar width exactly 260px on large displays) */}
      <main className="lg:pl-[260px] min-h-screen flex flex-col justify-between">
        
        {/* Scroll Content Block */}
        <div className="flex-1 w-full max-w-7xl mx-auto">
          {/* Hero Landing */}
          <Hero />

          {/* Biography and Professional Grid */}
          <About />

          {/* Experience and Education Timelines, Awards, Certifications */}
          <ResumeTimeline />

          {/* Skill Matrix and Counters */}
          <Skills />

          {/* Service Grid with Gradient borders */}
          <Services />

          {/* Dynamic Portfolio and Lightbox */}
          <Portfolio />

          {/* Continuous scrolling client brands */}
          <Clients />

          {/* Counters block */}
          <Stats />

          {/* Pricing packages of design/IT setups */}
          <Pricing />

          {/* Frequently Asked Questions accordion */}
          <FAQ />

          {/* Insights logbook preview */}
          <BlogPreview />

          {/* Testimonial slider of glass cards */}
          <Testimonials />

          {/* Premium Call to Action */}
          <CallToAction />

          {/* Interactive Contact and map */}
          <Contact />
        </div>

        {/* Global layout Footer */}
        <Footer />
        
      </main>
    </div>
  );
}

