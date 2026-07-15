import React from 'react';
import { ArrowRight, Bot, Cpu, Sparkles, TrendingUp, Award } from 'lucide-react';

export default function HeroSection() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const stats = [
    { value: '2.5M+', label: 'Vues UGC', desc: 'Contenu viral & hooks', icon: TrendingUp, color: 'text-brand-emerald' },
    { value: '2 SaaS', label: 'Plateformes', desc: 'Technova & Dukaio', icon: Cpu, color: 'text-brand-cyan' },
    { value: 'LLC', label: 'Dolapo ECOM', desc: 'Structure offshore', icon: Award, color: 'text-purple-400' },
    { value: '100%', label: 'Automatisation', desc: 'Processus & SEO', icon: Bot, color: 'text-amber-400' },
  ];

  return (
    <section
      id="accueil"
      className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-emerald/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-brand-cyan/5 blur-[100px] pointer-events-none" />

      {/* Grid Pattern overlay - Geometric Balance style */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-none bg-brand-emerald/10 border border-brand-emerald/20 mb-8 animate-pulse">
          <Sparkles className="w-4 h-4 text-brand-emerald" />
          <span className="text-xs font-mono font-medium tracking-widest text-brand-emerald uppercase">
            // DOLAPO ECOM LLC // SYSTEM_INIT_2026
          </span>
        </div>

        {/* Hero Grid: Copy + Portrait */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 min-w-0">
            <h1
              id="hero-title"
              className="font-black leading-[1] tracking-tighter uppercase italic mb-6 text-[2.25rem] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
            >
              <span className="block text-white break-words">AGONAN ISIDORE ABRAHAM</span>
              <span className="block mt-3 text-brand-emerald text-[1.5rem] sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
                IA, Automatisation &amp; Business Digital
              </span>
            </h1>

            <p
              id="hero-subtitle"
              className="text-base sm:text-lg text-neutral-400 font-sans font-light leading-relaxed mb-10 max-w-2xl"
            >
              Je connecte l'ingénierie technique (code, algorithmes) au marketing d'impact.
              Je crée des systèmes autonomes, des vidéos UGC virales et des SaaS
              qui captent l'attention et multiplient vos revenus.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
              <button
                id="hero-cta-projects"
                onClick={() => handleScrollTo('projets')}
                className="px-8 py-4 rounded-none font-mono text-xs uppercase tracking-widest text-black bg-brand-emerald hover:bg-emerald-400 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] transition-all duration-300 text-center flex items-center justify-center space-x-3 group cursor-pointer"
              >
                <span>Découvrir mes projets</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                id="hero-cta-contact"
                onClick={() => handleScrollTo('contact')}
                className="px-8 py-4 rounded-none font-mono text-xs uppercase tracking-widest text-brand-emerald bg-transparent border border-brand-emerald/50 hover:bg-brand-emerald/10 transition-all text-center flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Travailler ensemble</span>
              </button>
            </div>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-80 lg:w-full lg:max-w-sm group">
              {/* Decorative frame */}
              <div className="absolute -inset-2 border border-brand-emerald/30 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
              <div className="absolute -inset-2 border border-brand-cyan/20 -translate-x-4 -translate-y-4 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />

              {/* Glow */}
              <div className="absolute inset-0 bg-brand-emerald/20 blur-3xl scale-90 opacity-60" />

              {/* Image container */}
              <div className="relative overflow-hidden bg-neutral-900 border border-neutral-800">
                <img
                  src="/images/isidore.png"
                  alt="Agonan Isidore Abraham — Fondateur Dolapo ECOM LLC"
                  className="w-full h-auto object-cover transition-all duration-700 hover:scale-105"
                  loading="eager"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
                {/* Corner tag */}
                <div className="absolute top-3 left-3 px-2 py-1 bg-black/70 backdrop-blur-sm border border-brand-emerald/40">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-brand-emerald">
                    // FOUNDER_01
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-brand-emerald text-black">
                  <span className="font-mono text-[10px] uppercase tracking-widest font-bold">
                    ● LIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-16" />

        {/* Stats Grid */}
        <div className="border-t border-neutral-800 pt-12 mt-4">
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-6">
            // LES CHIFFRES DE L'IMPACT :
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-none bg-neutral-900/40 border border-neutral-800 hover:border-brand-emerald/50 transition-all group"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-2 rounded-none bg-white/5 ${stat.color} group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                      {stat.label}
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight uppercase italic">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1 font-light leading-none">
                    {stat.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
