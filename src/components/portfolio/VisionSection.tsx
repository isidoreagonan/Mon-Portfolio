import React from 'react';
import { Globe, Cpu, Heart, ArrowRight, Zap, Sparkles, CheckCircle2 } from 'lucide-react';

export default function VisionSection() {
  const platforms = [
    { name: 'Google SEO', active: true },
    { name: 'TikTok Viral', active: true },
    { name: 'YouTube Automation', active: true },
    { name: 'Facebook & Insta', active: true },
    { name: 'ChatGPT / LLMs', active: true },
    { name: 'LinkedIn B2B', active: true },
  ];

  return (
    <section
      id="vision-methode"
      className="py-24 sm:py-32 bg-[#030303] text-zinc-100 relative overflow-hidden border-b border-neutral-900"
    >
      {/* Dynamic ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-emerald/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading Area */}
        <div className="max-w-4xl mx-auto text-center mb-20 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/25 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="w-2 h-2 rounded-full bg-brand-emerald animate-ping" />
            <span className="text-xs font-mono tracking-[0.25em] text-brand-emerald font-bold uppercase">
              // VISION &amp; MÉTHODOLOGIE
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.05] mb-6">
            Être visible{' '}
            <span className="text-brand-emerald font-serif italic font-normal underline decoration-brand-emerald/40 decoration-wavy underline-offset-8">
              partout
            </span>{' '}
            où l'attention existe.
          </h2>

          <p className="text-lg sm:text-xl text-neutral-400 font-sans font-light max-w-2xl mx-auto leading-relaxed">
            Le SEO classique est mort. <span className="text-white font-medium">L'attention est la nouvelle monnaie.</span>{' '}
            Voici comment je combine IA, automatisation et ingénierie de contenu pour bâtir une visibilité omnicanale moderne.
          </p>
        </div>

        {/* 3 Pillars Architectural Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: CONCEPT CENTRAL */}
          <div className="group relative bg-neutral-900/30 hover:bg-neutral-900/75 border border-neutral-850 hover:border-brand-emerald/50 p-8 sm:p-10 rounded-3xl transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] flex flex-col justify-between overflow-hidden">
            {/* Top accent gradient border */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-emerald via-cyan-400 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Subtle background icon watermark */}
            <Globe className="absolute -bottom-8 -right-8 w-44 h-44 text-white/[0.02] group-hover:text-brand-emerald/[0.06] transition-all duration-500 transform group-hover:scale-110 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono tracking-widest text-brand-emerald font-bold uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                  CONCEPT CENTRAL
                </span>
                <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center text-brand-emerald group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-white mb-4 group-hover:text-brand-emerald transition-colors">
                Search Everywhere Optimization
              </h3>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
                Être trouvé sur <span className="text-white font-medium">toutes les plateformes</span> où votre audience cherche, consomme du contenu et prend des décisions — pas seulement sur Google.
              </p>
            </div>

            {/* Interactive Platform Grid Widget */}
            <div className="pt-6 border-t border-neutral-850 group-hover:border-neutral-800 transition-colors relative z-10">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-3">
                // Écosystème de visibilité activé :
              </span>
              <div className="flex flex-wrap gap-2">
                {platforms.map((plat, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 border border-neutral-800 text-xs font-mono text-zinc-300 group-hover:border-brand-emerald/40 group-hover:bg-brand-emerald/10 group-hover:text-brand-emerald transition-all duration-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald flex-shrink-0" />
                    {plat.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: MÉTHODE D'INGÉNIERIE */}
          <div className="group relative bg-neutral-900/30 hover:bg-neutral-900/75 border border-neutral-850 hover:border-brand-emerald/50 p-8 sm:p-10 rounded-3xl transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] flex flex-col justify-between overflow-hidden">
            {/* Top accent gradient border */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-brand-emerald to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Subtle background icon watermark */}
            <Cpu className="absolute -bottom-8 -right-8 w-44 h-44 text-white/[0.02] group-hover:text-purple-400/[0.06] transition-all duration-500 transform group-hover:scale-110 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono tracking-widest text-purple-400 group-hover:text-brand-emerald font-bold uppercase transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-brand-emerald transition-colors" />
                  MÉTHODE D'INGÉNIERIE
                </span>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 group-hover:border-brand-emerald/30 group-hover:bg-brand-emerald/10 flex items-center justify-center text-purple-400 group-hover:text-brand-emerald group-hover:scale-110 transition-all duration-300">
                  <Cpu className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-white mb-4 group-hover:text-brand-emerald transition-colors">
                IA + Automatisation + Contenu
              </h3>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
                Créer rapidement avec les meilleurs LLMs, automatiser les flux répétitifs via des pipelines intelligents, et développer une audience qui dure. <span className="text-white font-medium">Des systèmes autonomes, pas de la chance.</span>
              </p>
            </div>

            {/* Interactive Workflow Sequence Widget */}
            <div className="pt-6 border-t border-neutral-850 group-hover:border-neutral-800 transition-colors relative z-10">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-3">
                // Architecture du système :
              </span>
              <div className="space-y-2 font-mono text-xs text-zinc-300">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-neutral-800 group-hover:border-brand-emerald/30 transition-colors">
                  <span className="flex items-center gap-2 text-zinc-200">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400 group-hover:text-brand-emerald transition-colors" />
                    1. Génération &amp; Scripts IA
                  </span>
                  <span className="text-[10px] text-brand-emerald bg-brand-emerald/10 px-2 py-0.5 rounded font-bold">10x Vitesse</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-neutral-800 group-hover:border-brand-emerald/30 transition-colors">
                  <span className="flex items-center gap-2 text-zinc-200">
                    <Zap className="w-3.5 h-3.5 text-brand-emerald animate-pulse" />
                    2. Pipelines &amp; Automatisations
                  </span>
                  <span className="text-[10px] text-brand-emerald bg-brand-emerald/10 px-2 py-0.5 rounded font-bold">24/7 Autonome</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: MISSION & IMPACT */}
          <div className="group relative bg-neutral-900/30 hover:bg-neutral-900/75 border border-neutral-850 hover:border-brand-emerald/50 p-8 sm:p-10 rounded-3xl transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] flex flex-col justify-between overflow-hidden">
            {/* Top accent gradient border */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-brand-emerald to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Subtle background icon watermark */}
            <Heart className="absolute -bottom-8 -right-8 w-44 h-44 text-white/[0.02] group-hover:text-amber-400/[0.06] transition-all duration-500 transform group-hover:scale-110 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono tracking-widest text-amber-400 group-hover:text-brand-emerald font-bold uppercase transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:bg-brand-emerald transition-colors" />
                  MISSION &amp; IMPACT
                </span>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:border-brand-emerald/30 group-hover:bg-brand-emerald/10 flex items-center justify-center text-amber-400 group-hover:text-brand-emerald group-hover:scale-110 transition-all duration-300">
                  <Heart className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-white mb-4 group-hover:text-brand-emerald transition-colors">
                Aider les jeunes à créer leur libération
              </h3>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
                Beaucoup trop de jeunes utilisent Internet uniquement pour consommer passivement. <span className="text-white font-medium">Mon objectif fondamental :</span> leur apprendre à faire du digital un levier concret de création, d'indépendance et de revenu.
              </p>
            </div>

            {/* Interactive Transformation Impact Bar */}
            <div className="pt-6 border-t border-neutral-850 group-hover:border-neutral-800 transition-colors relative z-10">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-3">
                // Transformation de l'état d'esprit :
              </span>
              <div className="p-3 rounded-xl bg-black/50 border border-neutral-800/80 group-hover:border-brand-emerald/40 transition-all">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-zinc-500 line-through">Consommateur Passif</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-emerald flex-shrink-0" />
                  <span className="text-brand-emerald font-bold">Créateur Souverain</span>
                </div>
                {/* Visual Progress Line */}
                <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-neutral-600 via-brand-emerald to-emerald-400 w-full transition-all duration-700" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
