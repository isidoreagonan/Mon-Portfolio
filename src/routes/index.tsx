import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import VisionSection from "@/components/portfolio/VisionSection";
import SocialProof from "@/components/portfolio/SocialProof";
import ServicesSection from "@/components/portfolio/ServicesSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import Footer from "@/components/portfolio/Footer";
import InteractiveAudit from "@/components/portfolio/InteractiveAudit";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AGONAN ISIDORE ABRAHAM — IA, Automatisation & Business Digital" },
      {
        name: "description",
        content:
          "Portfolio d'AGONAN ISIDORE ABRAHAM. IA, automatisation, SaaS et vidéos UGC qui convertissent.",
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
        <VisionSection />
        <SocialProof />
        <ServicesSection />
        <ProjectsSection />
        
        <InteractiveAudit />
      </main>
      <Footer />
    </div>
  );
}
