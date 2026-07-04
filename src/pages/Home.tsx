import Hero from '../components/Hero';
import About from '../components/About';
import CoreExpertise from '../components/CoreExpertise';
import ResumeTimeline from '../components/ResumeTimeline';
import Certifications from '../components/Certifications';
import WhyHireMe from '../components/WhyHireMe';
import Achievements from '../components/Achievements';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import ProjectCaseStudies from '../components/ProjectCaseStudies';
import Stats from '../components/Stats';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="flex-1 w-full max-w-7xl mx-auto">
      {/* Hero Landing */}
      <Hero />

      {/* Biography and Professional Grid */}
      <About />

      {/* Core Expertise Section */}
      <CoreExpertise />

      {/* Experience and Education Timelines, Awards, Certifications */}
      <ResumeTimeline />

      {/* Premium Certifications Section */}
      <Certifications />

      {/* Why Hire Me Section */}
      <WhyHireMe />

      {/* Achievements Section */}
      <Achievements />

      {/* Skill Matrix and Counters */}
      <Skills />

      {/* Service Grid with Gradient borders */}
      <Services />

      {/* Dynamic Portfolio and Lightbox */}
      <Portfolio />

      {/* Project Case Studies - Deep Dive Analysis */}
      <ProjectCaseStudies />

      {/* Counters block */}
      <Stats />

      {/* Frequently Asked Questions accordion */}
      <FAQ />

      {/* Testimonial slider of glass cards */}
      <Testimonials />

      {/* Premium Call to Action */}
      <CallToAction />

      {/* Interactive Contact and map */}
      <Contact />
    </div>
  );
}
