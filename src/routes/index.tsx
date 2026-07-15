import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import ServicesSection from "@/components/portfolio/ServicesSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";

import InteractiveAudit from "@/components/portfolio/InteractiveAudit";
import ContactSection from "@/components/portfolio/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AGONAN ISIDORE ABRAHAM — IA, Automatisation & Business Digital" },
      {
        name: "description",
        content:
          "Portfolio d'AGONAN ISIDORE ABRAHAM, fondateur de Dolapo ECOM LLC. IA, automatisation, SaaS et vidéos UGC qui convertissent.",
      },
      { property: "og:title", content: "AGONAN ISIDORE ABRAHAM — IA & Business Digital" },
      { property: "og:description", content: "IA, automatisation, SaaS et vidéos UGC qui convertissent." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div
      id="app-root"
      className="min-h-screen bg-[#030303] text-zinc-100 overflow-x-hidden selection:bg-brand-emerald selection:text-black"
    >
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-brand-emerald/5 to-transparent pointer-events-none z-0" />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        
        <InteractiveAudit />
      </main>
      <ContactSection />
    </div>
  );
}
