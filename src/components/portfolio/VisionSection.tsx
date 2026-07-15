import React, { useRef, useState } from 'react';
import { Globe, Cpu, Zap, CheckCircle2, ChevronLeft, ChevronRight, Target, Layers } from 'lucide-react';

export default function VisionSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const platforms = [
    { name: 'Google SEO', active: true },
    { name: 'TikTok Viral', active: true },
    { name: 'YouTube & Shorts', active: true },
    { name: 'Instagram & Reels', active: true },
    { name: 'ChatGPT / IA Search', active: true },
    { name: 'LinkedIn & FB', active: true },
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.85;
      const newScroll = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: newScroll, behavior: 'smooth' });
    }
  };

  const handleScrollEvent = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.8));
      setActiveSlide(Math.min(Math.max(index, 0), 2));
    }
  };

  return (
    <section
      id="vision-methode"
      className="py-20 sm:py-28 bg-[#030303] text-zinc-100 relative overflow-hidden border-b border-neutral-900"
    >
      {/* Dynamic ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-brand-emerald/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-12 relative z-10">
        
        {/* Section Heading Area */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/25 mb-5 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-ping" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-brand-emerald font-bold uppercase">
              // STRATÉGIE D'ATTENTION
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.08] mb-5">
            Être visible{' '}
            <span className="text-brand-emerald font-serif italic font-normal underline decoration-brand-emerald/40 decoration-wavy underline-offset-8">
              partout
            </span>{' '}
            où l'attention existe.
          </h2>

          <p className="text-sm sm:text-lg text-neutral-400 font-sans font-light max-w-2xl mx-auto leading-relaxed">
            Le SEO classique sur Google ne suffit plus. <span className="text-white font-medium">L'attention omnicanale est la reine du digital.</span>{' '}
            Voici les 3 piliers stratégiques de mon écosystème pour dominer les réseaux et les moteurs d'IA.
          </p>
        </div>

        {/* Mobile Navigation Header & Controls for Menu Défilant */}
        <div className="flex items-center justify-between sm:hidden mb-4 px-1">
          <span className="text-xs font-mono text-brand-emerald tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
            FAITES DÉFILER LES PILIERS ({activeSlide + 1}/3)
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-zinc-300 hover:text-brand-emerald hover:border-brand-emerald/50 transition-colors active:scale-95"
              aria-label="Pilier précédent"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-zinc-300 hover:text-brand-emerald hover:border-brand-emerald/50 transition-colors active:scale-95"
              aria-label="Pilier suivant"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Strategic Pillars Grid / Horizontal Marquee Slider on Mobile (`menu défilant`) */}
        <div
          ref={scrollRef}
          onScroll={handleScrollEvent}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:grid sm:grid-cols-3 sm:gap-6 lg:gap-8 items-stretch pb-6 sm:pb-0 scrollbar-none -mx-5 px-5 sm:mx-0 sm:px-0"
        >
          
          {/* Card 1: SEARCH EVERYWHERE OPTIMIZATION */}
          <div className="group relative bg-neutral-900/40 hover:bg-neutral-900/80 border border-neutral-850 hover:border-brand-emerald/50 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] flex flex-col justify-between overflow-hidden w-[85vw] sm:w-auto shrink-0 snap-center">
            {/* Top accent gradient border */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-emerald via-cyan-400 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            
            <Globe className="absolute -bottom-6 -right-6 w-36 h-36 sm:w-44 sm:h-44 text-white/[0.02] group-hover:text-brand-emerald/[0.06] transition-all duration-500 transform group-hover:scale-110 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-mono tracking-widest text-brand-emerald font-bold uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                  PILIER 01 // VISIBILITÉS
                </span>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center text-brand-emerald group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-black tracking-tight text-white mb-3 group-hover:text-brand-emerald transition-colors">
                Search Everywhere Optimization
              </h3>

              <p className="text-neutral-400 text-xs sm:text-sm lg:text-base leading-relaxed mb-6">
                Le public ne cherche plus uniquement sur Google. Ils s'informent sur <span className="text-white font-medium">TikTok, YouTube, Instagram et ChatGPT</span>. Ma stratégie positionne votre marque en tête sur tous les canaux.
              </p>
            </div>

            {/* Interactive Multi-Platform Badge Grid */}
            <div className="pt-5 border-t border-neutral-850 group-hover:border-neutral-800 transition-colors relative z-10">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-2.5">
                // Omnicanalité synchronisée :
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {platforms.map((plat, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/40 border border-neutral-800 text-[11px] font-mono text-zinc-300 group-hover:border-brand-emerald/40 group-hover:bg-brand-emerald/10 group-hover:text-brand-emerald transition-all duration-300"
                  >
                    <CheckCircle2 className="w-3 h-3 text-brand-emerald flex-shrink-0" />
                    {plat.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: ARCHITECTURE DU CONTENU VIRAL */}
          <div className="group relative bg-neutral-900/40 hover:bg-neutral-900/80 border border-neutral-850 hover:border-brand-emerald/50 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] flex flex-col justify-between overflow-hidden w-[85vw] sm:w-auto shrink-0 snap-center">
            {/* Top accent gradient border */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-brand-emerald to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            
            <Layers className="absolute -bottom-6 -right-6 w-36 h-36 sm:w-44 sm:h-44 text-white/[0.02] group-hover:text-purple-400/[0.06] transition-all duration-500 transform group-hover:scale-110 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-mono tracking-widest text-purple-400 group-hover:text-brand-emerald font-bold uppercase transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-brand-emerald transition-colors" />
                  PILIER 02 // CONTENU
                </span>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 group-hover:border-brand-emerald/30 group-hover:bg-brand-emerald/10 flex items-center justify-center text-purple-400 group-hover:text-brand-emerald group-hover:scale-110 transition-all duration-300">
                  <Target className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-black tracking-tight text-white mb-3 group-hover:text-brand-emerald transition-colors">
                Ingénierie de l'Attention (UGC &amp; Hooks)
              </h3>

              <p className="text-neutral-400 text-xs sm:text-sm lg:text-base leading-relaxed mb-6">
                Une vidéo ne réussit jamais par hasard. Chaque seconde est pensée : <span className="text-white font-medium">accroche psychologique dans les 3 premières secondes</span>, rythme dynamique et appel à l'action irrésistible.
              </p>
            </div>

            {/* Interactive Structure Widget */}
            <div className="pt-5 border-t border-neutral-850 group-hover:border-neutral-800 transition-colors relative z-10">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-2.5">
                // Anatomie d'une vidéo à forte conversion :
              </span>
              <div className="space-y-1.5 font-mono text-xs text-zinc-300">
                <div className="flex items-center justify-between p-2 rounded-md bg-black/40 border border-neutral-800 group-hover:border-brand-emerald/30 transition-colors">
                  <span className="text-zinc-200 font-semibold">⚡ Hook (0-3s)</span>
                  <span className="text-[10px] text-brand-emerald bg-brand-emerald/10 px-1.5 py-0.5 rounded font-bold">Arrêt du Scroll</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-md bg-black/40 border border-neutral-800 group-hover:border-brand-emerald/30 transition-colors">
                  <span className="text-zinc-200 font-semibold">🎯 Rétention &amp; Valeur</span>
                  <span className="text-[10px] text-brand-emerald bg-brand-emerald/10 px-1.5 py-0.5 rounded font-bold">Engagement Maximal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: SYSTÈMES AUTONOMES IA */}
          <div className="group relative bg-neutral-900/40 hover:bg-neutral-900/80 border border-neutral-850 hover:border-brand-emerald/50 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] flex flex-col justify-between overflow-hidden w-[85vw] sm:w-auto shrink-0 snap-center">
            {/* Top accent gradient border */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-brand-emerald to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            
            <Cpu className="absolute -bottom-6 -right-6 w-36 h-36 sm:w-44 sm:h-44 text-white/[0.02] group-hover:text-amber-400/[0.06] transition-all duration-500 transform group-hover:scale-110 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-mono tracking-widest text-amber-400 group-hover:text-brand-emerald font-bold uppercase transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:bg-brand-emerald transition-colors" />
                  PILIER 03 // SYSTÈMES
                </span>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:border-brand-emerald/30 group-hover:bg-brand-emerald/10 flex items-center justify-center text-amber-400 group-hover:text-brand-emerald group-hover:scale-110 transition-all duration-300">
                  <Zap className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-black tracking-tight text-white mb-3 group-hover:text-brand-emerald transition-colors">
                Systèmes Autonomes (SaaS &amp; IA)
              </h3>

              <p className="text-neutral-400 text-xs sm:text-sm lg:text-base leading-relaxed mb-6">
                Créer de l'attention ne suffit pas, il faut la convertir et la gérer en continu sans s'épuiser. <span className="text-white font-medium">Je développe des pipelines IA et des plateformes SaaS</span> qui travaillent 24/7 pour votre business.
              </p>
            </div>

            {/* Interactive Pipeline Widget */}
            <div className="pt-5 border-t border-neutral-850 group-hover:border-neutral-800 transition-colors relative z-10">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-2.5">
                // Pipeline de croissance continue :
              </span>
              <div className="p-2.5 rounded-xl bg-black/50 border border-neutral-800/80 group-hover:border-brand-emerald/40 transition-all flex items-center justify-between text-[11px] font-mono">
                <span className="text-zinc-400">Audience captée</span>
                <span className="text-brand-emerald animate-pulse">━━➔</span>
                <span className="text-brand-emerald font-bold">Conversion 24/7</span>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile Carousel Swipe Indicators */}
        <div className="flex items-center justify-center gap-2 mt-4 sm:hidden">
          {[0, 1, 2].map((idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeSlide === idx ? 'w-6 bg-brand-emerald' : 'w-1.5 bg-neutral-800'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
