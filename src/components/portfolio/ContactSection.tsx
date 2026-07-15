import React from 'react';
import { MessageCircle, Send, Youtube, Mail, Globe, Sparkles, ArrowRight, Phone } from 'lucide-react';

export default function ContactSection() {
  const socialLinks = [
    {
      name: 'WhatsApp',
      value: '+229 01 57 38 58 85',
      href: 'https://wa.me/2290157385885?text=Bonjour%20Isidore,%20j\'aimerais%20collaborer%20avec%20vous.',
      desc: 'Réponse instantanée sous quelques heures',
      icon: MessageCircle,
      color: 'hover:text-emerald-400 hover:border-emerald-500/30'
    },
    {
      name: 'Telegram Channel',
      value: '@isidore_automation',
      href: 'https://t.me/isidore_automation', // Placeholder standard pour Telegram
      desc: 'Canal d\'analyses technologiques et d\'astuces IA',
      icon: Send,
      color: 'hover:text-cyan-400 hover:border-cyan-500/30'
    },
    {
      name: 'Chaîne YouTube',
      value: 'Isidore ABRAHAM - Tech & Business',
      href: 'https://youtube.com', // Placeholder pour sa chaîne YouTube Automation
      desc: 'Vidéos d\'automatisation & décryptages business',
      icon: Youtube,
      color: 'hover:text-red-400 hover:border-red-500/30'
    }
  ];

  return (
    <footer
      id="contact"
      className="bg-neutral-950 border-t border-neutral-900 pt-24 pb-12 relative overflow-hidden"
    >
      {/* Background glow light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-emerald/5 blur-[120px] pointer-events-none" />

      {/* Grid background segment */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-5" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Call to action card */}
        <div
          id="contact-cta-banner"
          className="rounded-none p-8 md:p-14 bg-neutral-900 border border-neutral-800 text-center mb-20 relative overflow-hidden group shadow-none"
        >
          {/* Subtle abstract lines in background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100%_10px] pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10 space-y-6">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-none bg-brand-emerald/10 border border-brand-emerald/20 mx-auto">
              <Sparkles className="w-3.5 h-3.5 text-brand-emerald" />
              <span className="text-xs font-mono tracking-widest text-brand-emerald uppercase">// PROPULSEZ VOTRE PROJET</span>
            </div>
            
            <h3
              id="contact-banner-title"
              className="text-4xl sm:text-6xl font-black uppercase italic tracking-tighter text-white"
            >
              Prêt à scaler votre projet ?
            </h3>

            <p className="text-neutral-400 font-sans font-light text-sm sm:text-base leading-relaxed">
              Ne laissez pas vos concurrents automatiser avant vous. Que vous soyez créateur de contenu ou dirigeant de marque, créons ensemble vos futurs leviers de croissance.
            </p>

            <div className="pt-4">
              <a
                id="contact-banner-wa-btn"
                href="https://wa.me/2290157385885?text=Bonjour%20Isidore,%20je%20viens%20depuis%20ton%20portfolio%20et%20je%20souhaite%20lancer%20un%20projet%20avec%20toi."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4.5 rounded-none text-xs font-mono uppercase tracking-widest bg-brand-emerald text-black hover:bg-emerald-400 transition-all group"
              >
                <Phone className="w-4 h-4 fill-black" />
                <span>Discuter sur WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Channels Information Grid */}
        <div id="contact-channels-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {socialLinks.map((channel, idx) => {
            const IconComponent = channel.icon;
            return (
              <a
                key={idx}
                id={`contact-channel-card-${channel.name.toLowerCase().replace(' ', '-')}`}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 rounded-none bg-neutral-900/40 border border-neutral-850 flex flex-col justify-between h-48 transition-all duration-300 group ${channel.color}`}
              >
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-none bg-white/5 text-zinc-400 group-hover:text-inherit transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase group-hover:text-zinc-400 transition-colors">
                    // Rejoindre
                  </span>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-mono font-bold text-zinc-500 tracking-wider mb-1">
                    {channel.name}
                  </h4>
                  <div className="text-white font-display font-bold text-base sm:text-lg group-hover:text-brand-emerald transition-colors truncate">
                    {channel.value}
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 font-sans font-light truncate">
                    {channel.desc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Corporate footer info */}
        <div className="border-t border-neutral-900 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-500 font-mono">
          
          {/* Company structure and location */}
          <div className="flex items-center space-x-3">
            <Globe className="w-4 h-4 text-brand-emerald" />
            <span>Dolapo ECOM LLC — Société Offshore Enregistrée</span>
          </div>

          {/* Copyright details */}
          <div className="text-center md:text-right">
            <span>© 2026 Dolapo ECOM LLC. Tous droits réservés.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
