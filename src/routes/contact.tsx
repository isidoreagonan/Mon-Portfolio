import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import { Youtube, Linkedin, Facebook } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Agonan Isidore Abraham" },
      {
        name: "description",
        content: "Contactez-moi pour discuter de votre projet digital, de l'IA ou de votre visibilité.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 selection:bg-brand-emerald selection:text-black font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center pt-32 pb-20 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-[0.03]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-emerald/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <div className="mb-10">
                <p className="text-brand-emerald font-mono text-xs uppercase tracking-widest font-bold mb-4">
                  Contact
                </p>
                <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
                  Construisons <br />
                  <span className="italic text-brand-emerald glow-text-emerald">ensemble.</span>
                </h1>
                <p className="text-zinc-400 text-sm md:text-base max-w-lg leading-relaxed">
                  Tu as un projet digital, une question sur l'IA ou tu veux développer ta visibilité ? Je réponds à tous les messages sérieux sous 24h.
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                    Ton prénom <span className="text-brand-emerald">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ex : Kofi"
                    className="w-full bg-[#0a0a0c] border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-emerald/50 focus:ring-1 focus:ring-brand-emerald/50 transition-colors text-white placeholder-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                    Ton email <span className="text-brand-emerald">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="ton@email.com"
                    className="w-full bg-[#0a0a0c] border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-emerald/50 focus:ring-1 focus:ring-brand-emerald/50 transition-colors text-white placeholder-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    placeholder="Ex : Développer ma visibilité digitale"
                    className="w-full bg-[#0a0a0c] border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-emerald/50 focus:ring-1 focus:ring-brand-emerald/50 transition-colors text-white placeholder-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                    Message <span className="text-brand-emerald">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Décris ton projet, tes objectifs, ce que tu cherches..."
                    className="w-full bg-[#0a0a0c] border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-emerald/50 focus:ring-1 focus:ring-brand-emerald/50 transition-colors text-white placeholder-zinc-600 resize-y"
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full bg-brand-emerald text-black font-mono text-sm uppercase tracking-widest font-bold py-4 rounded-md hover:bg-brand-emerald/90 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                >
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Right Column: Social Links */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <p className="text-brand-emerald font-mono text-xs uppercase tracking-widest font-bold mb-8">
                Retrouve-moi sur
              </p>
              
              <div className="space-y-4">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-md bg-[#0a0a0c] border border-white/5 hover:border-brand-emerald/30 transition-all group"
                >
                  <div className="w-10 h-10 bg-white/5 rounded-md flex items-center justify-center text-zinc-400 group-hover:text-brand-emerald transition-colors">
                    <Youtube className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">YouTube</h3>
                    <p className="text-zinc-500 text-xs mt-0.5">Vidéos sur l'IA et l'entrepreneuriat digital</p>
                  </div>
                </a>

                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-md bg-[#0a0a0c] border border-white/5 hover:border-brand-emerald/30 transition-all group"
                >
                  <div className="w-10 h-10 bg-white/5 rounded-md flex items-center justify-center text-zinc-400 group-hover:text-brand-emerald transition-colors">
                    <span className="font-bold font-mono">TK</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">TikTok</h3>
                    <p className="text-zinc-500 text-xs mt-0.5">Contenu court sur la visibilité et les outils IA</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-md bg-[#0a0a0c] border border-white/5 hover:border-brand-emerald/30 transition-all group"
                >
                  <div className="w-10 h-10 bg-white/5 rounded-md flex items-center justify-center text-zinc-400 group-hover:text-brand-emerald transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">LinkedIn</h3>
                    <p className="text-zinc-500 text-xs mt-0.5">Réflexions sur le digital et l'admin</p>
                  </div>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-md bg-[#0a0a0c] border border-white/5 hover:border-brand-emerald/30 transition-all group"
                >
                  <div className="w-10 h-10 bg-white/5 rounded-md flex items-center justify-center text-zinc-400 group-hover:text-brand-emerald transition-colors">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Facebook</h3>
                    <p className="text-zinc-500 text-xs mt-0.5">Communauté et contenus longs</p>
                  </div>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
