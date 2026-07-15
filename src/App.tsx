import React from 'react';
import Navbar from './components/portfolio/Navbar';
import HeroSection from './components/portfolio/HeroSection';
import ServicesSection from './components/portfolio/ServicesSection';
import ProjectsSection from './components/portfolio/ProjectsSection';
import InteractiveAudit from './components/portfolio/InteractiveAudit';
import ContactSection from './components/portfolio/ContactSection';

export default function App() {
  return (
    <div id="app-root" className="min-h-screen bg-[#030303] text-zinc-100 overflow-x-hidden selection:bg-brand-emerald selection:text-black">
      {/* Immersive background decoration */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-brand-emerald/5 to-transparent pointer-events-none z-0" />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main id="main-content" className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <InteractiveAudit />
      </main>

      {/* Footer & Call To Action */}
      <ContactSection />
    </div>
  );
}
