import React from 'react';
import { SERVICES } from '../data';
import { Check, Flame, Award, BookOpen, Video, HelpCircle } from 'lucide-react';

export default function ServicesSection() {
  const getIcon = (id: string, colorClass: string) => {
    switch (id) {
      case 'young-beginners':
        return <BookOpen className={`w-6 h-6 ${colorClass}`} />;
      case 'creators':
        return <Flame className={`w-6 h-6 ${colorClass} animate-bounce`} />;
      case 'brands-enterprises':
        return <Award className={`w-6 h-6 ${colorClass}`} />;
      default:
        return <HelpCircle className={`w-6 h-6 ${colorClass}`} />;
    }
  };

  const getAccentColors = (color: string) => {
    switch (color) {
      case 'cyan':
        return {
          border: 'border-neutral-800 hover:border-brand-cyan/50',
          badgeBg: 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20',
          btnBg: 'bg-transparent text-brand-cyan hover:bg-brand-cyan hover:text-black border-brand-cyan/30 hover:border-brand-cyan',
          text: 'text-brand-cyan',
          shadow: ''
        };
      case 'emerald':
        return {
          border: 'border-brand-emerald/50 hover:border-brand-emerald',
          badgeBg: 'bg-brand-emerald/20 text-brand-emerald border-brand-emerald/30',
          btnBg: 'bg-brand-emerald text-black hover:bg-emerald-400 border-transparent',
          text: 'text-brand-emerald',
          shadow: 'shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]'
        };
      case 'purple':
        return {
          border: 'border-neutral-800 hover:border-purple-400/50',
          badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
          btnBg: 'bg-transparent text-purple-400 hover:bg-purple-500 hover:text-black border-purple-500/30 hover:border-purple-500',
          text: 'text-purple-400',
          shadow: ''
        };
      default:
        return {
          border: 'border-neutral-800 hover:border-neutral-700',
          badgeBg: 'bg-white/5 text-white border-white/10',
          btnBg: 'bg-white text-black hover:bg-zinc-100 border-transparent',
          text: 'text-white',
          shadow: ''
        };
    }
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
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

  return (
    <section
      id="services"
      className="py-24 bg-neutral-950 relative overflow-hidden border-b border-neutral-900"
    >
      {/* Abstract light strip */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-brand-emerald/5 blur-[120px] pointer-events-none" />

      {/* Grid background segment */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-5" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-none bg-brand-emerald/10 border border-brand-emerald/20 mb-4">
            <span className="w-1.5 h-1.5 bg-brand-emerald animate-ping" />
            <span className="text-xs font-mono tracking-widest text-brand-emerald uppercase">// SERVICES &amp; SOLUTIONS</span>
          </div>
          <h2
            id="services-heading"
            className="text-4xl sm:text-6xl font-black uppercase italic tracking-tighter text-white mb-4"
          >
            Pour qui est-ce que je travaille ?
          </h2>
          <p className="text-neutral-400 font-sans font-light max-w-xl mx-auto">
            Des parcours clés en main et des stratégies sur mesure pensés pour maximiser l'impact, automatiser les systèmes et décupler la croissance.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div id="services-grid" className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {SERVICES.map((service) => {
            const colors = getAccentColors(service.accentColor);
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`flex flex-col justify-between rounded-none p-8 md:p-10 transition-all duration-300 relative overflow-hidden group bg-neutral-900/40 border ${colors.border} ${colors.shadow}`}
              >
                {/* Background light indicator for recommended cards */}
                {service.isRecommended && (
                  <div className="absolute -top-12 -right-12 w-28 h-28 bg-brand-emerald/10 blur-2xl rounded-none" />
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3.5 rounded-none bg-white/5 border border-white/5 group-hover:bg-brand-emerald/10 transition-colors">
                      {getIcon(service.id, colors.text)}
                    </div>
                    {service.isRecommended && (
                      <span className="px-3.5 py-1 rounded-none text-[10px] font-black uppercase tracking-wider bg-brand-emerald text-black flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 fill-black" /> RECOMMANDÉ
                      </span>
                    )}
                  </div>

                  {/* Card Main Info */}
                  <h3
                    id={`service-title-${service.id}`}
                    className="text-2xl font-display font-bold text-white mb-2 tracking-tight group-hover:text-brand-emerald transition-colors"
                  >
                    {service.title}
                  </h3>
                  
                  <p className="text-xs font-mono text-zinc-500 mb-5 uppercase tracking-wider">
                    {service.targetAudience}
                  </p>

                  <p className="text-neutral-400 font-sans font-light text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <div className="border-t border-neutral-850 pt-6 mb-8">
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-sm text-zinc-300">
                          <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-none bg-white/5 border border-white/10 flex items-center justify-center">
                            <Check className={`w-2.5 h-2.5 ${colors.text}`} />
                          </span>
                          <span className="font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call to action button */}
                <a
                  id={`service-cta-${service.id}`}
                  href={service.buttonLink}
                  onClick={handleScrollToContact}
                  className={`w-full py-4 px-6 rounded-none text-center text-xs font-mono uppercase tracking-widest border transition-all duration-300 flex items-center justify-center space-x-2 ${colors.btnBg}`}
                >
                  <span>{service.buttonText}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
