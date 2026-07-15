import React from 'react';

interface Partner {
  name: string;
  logo: string;
  role?: string;
}

const PARTNERS: Partner[] = [
  {
    name: 'Anijam AI',
    logo: '/images/partners/anijam-ai.webp',
    role: 'Intelligence Artificielle & Génération'
  },
  {
    name: 'EDIMAKOR',
    logo: '/images/partners/edimakor.png',
    role: 'Édition Vidéo IA & Outils Créateurs'
  },
  {
    name: 'Flova AI',
    logo: '/images/partners/flova-ai.png',
    role: 'Automatisation & Solutions Digitales'
  },
  {
    name: 'Thumbs AI',
    logo: '/images/partners/thumbs-ai.png',
    role: 'Optimisation & Miniatures YouTube'
  }
];

export default function SocialProof() {
  return (
    <section
      id="partenaires"
      className="py-12 bg-gradient-to-b from-[#030303] via-[#060608] to-[#030303] border-y border-neutral-900 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[150px] bg-brand-emerald/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section header with discreet lines */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-neutral-800" />
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
            <h2 className="text-xs sm:text-sm font-mono font-semibold tracking-[0.25em] text-zinc-400 uppercase text-center">
              ILS ME FONT CONFIANCE : COLLABORATIONS &amp; PARTENAIRES
            </h2>
          </div>
          <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-neutral-800" />
        </div>

        {/* Partners Grid (2 columns on mobile, 4 on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="group relative bg-neutral-900/30 hover:bg-neutral-900/70 border border-neutral-850 hover:border-brand-emerald/50 p-6 sm:p-8 flex flex-col items-center justify-center min-h-[110px] sm:min-h-[130px] transition-all duration-500 rounded-none overflow-hidden"
            >
              {/* Top accent glow line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-emerald to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Logo Container with opacity/grayscale transition */}
              <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 sm:max-h-12 w-auto object-contain opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-500 filter"
                  onError={(e) => {
                    // Fallback to stylized text if logo cannot load for any reason
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'block';
                    }
                  }}
                />
                
                {/* Fallback stylized text placeholder if image isn't loaded */}
                <span className="hidden font-display font-extrabold text-lg sm:text-xl text-zinc-500 group-hover:text-white transition-colors uppercase tracking-wider">
                  {partner.name}
                </span>

                {/* Subtle role note on hover */}
                <span className="text-[10px] font-mono text-brand-emerald/0 group-hover:text-brand-emerald/90 transition-all duration-500 tracking-wider text-center mt-2 absolute -bottom-2 group-hover:bottom-1 opacity-0 group-hover:opacity-100">
                  {partner.name}
                </span>
              </div>

              {/* Bottom right subtle index badge */}
              <span className="absolute bottom-1.5 right-2 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500 transition-colors">
                0{idx + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
