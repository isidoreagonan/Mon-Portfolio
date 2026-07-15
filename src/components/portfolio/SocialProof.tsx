import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  role: string;
  badge?: string;
}

const PARTNERS: Partner[] = [
  {
    name: 'Anijam AI',
    logo: '/images/partners/anijam-ai.webp',
    role: 'IA Générative & Production',
    badge: 'Partenaire IA'
  },
  {
    name: 'EDIMAKOR',
    logo: '/images/partners/edimakor.png',
    role: 'Édition Vidéo & Création Tech',
    badge: 'Video Tech'
  },
  {
    name: 'Flova AI',
    logo: '/images/partners/flova-ai.png',
    role: 'Automatisation & Flux Digitaux',
    badge: 'Automation'
  },
  {
    name: 'Thumbs AI',
    logo: '/images/partners/thumbs-ai.png',
    role: 'Optimisation Miniatures & SEO',
    badge: 'Analytics'
  }
];

export default function SocialProof() {
  return (
    <section
      id="partenaires"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#030303] via-[#070709] to-[#030303] border-y border-neutral-900/80 relative overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[250px] bg-brand-emerald/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 shadow-inner mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
            <span className="text-[11px] font-mono font-semibold tracking-[0.25em] text-zinc-400 uppercase">
              PREUVE SOCIALE &amp; COLLABORATIONS
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-white">
            Ils me font confiance pour catalyser leur croissance digitale
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light mt-3 max-w-xl">
            Des entreprises et plateformes d'IA de pointe qui collaborent et exploitent mes solutions d'automatisation et de contenu.
          </p>
        </div>

        {/* Sleek Horizontal Brand Pills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="group relative flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-neutral-900/40 hover:bg-neutral-900/90 border border-neutral-800/80 hover:border-brand-emerald/60 transition-all duration-500 shadow-lg hover:shadow-[0_0_35px_rgba(16,185,129,0.18)] cursor-pointer transform hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Subtle top-right ambient glow on hover */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-brand-emerald/10 rounded-full blur-xl group-hover:bg-brand-emerald/25 transition-all duration-500 pointer-events-none" />

              {/* Crisp 52x52 Logo Frame */}
              <div className="relative w-14 h-14 rounded-xl bg-zinc-950 border border-neutral-800 group-hover:border-brand-emerald/50 p-2.5 flex items-center justify-center flex-shrink-0 transition-all duration-500 shadow-inner overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain filter transition-all duration-500 group-hover:scale-110 opacity-75 group-hover:opacity-100"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
              </div>

              {/* Typography / Brand Info */}
              <div className="flex flex-col text-left flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span className="font-display font-extrabold text-lg text-zinc-200 group-hover:text-white transition-colors tracking-tight truncate">
                    {partner.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100 flex-shrink-0" />
                </div>

                <span className="text-xs font-mono text-zinc-500 group-hover:text-brand-emerald/90 transition-colors truncate">
                  {partner.role}
                </span>

                {/* Mini tag indicator */}
                {partner.badge && (
                  <div className="mt-2.5 inline-flex items-center gap-1 self-start px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] group-hover:border-brand-emerald/30 group-hover:bg-brand-emerald/10 transition-colors">
                    <ShieldCheck className="w-3 h-3 text-zinc-500 group-hover:text-brand-emerald transition-colors" />
                    <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-400 group-hover:text-brand-emerald font-semibold">
                      {partner.badge}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Subtle trust footer line */}
        <div className="mt-14 sm:mt-16 text-center">
          <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest flex items-center justify-center gap-2">
            <span>// Intégrations &amp; Écosystème Partenaires Vérifiés</span>
          </p>
        </div>

      </div>
    </section>
  );
}
