import React, { useState } from 'react';
import { ABOUT_PARAGRAPHS } from '@/data';
import { Terminal, Cpu, HardDrive, ShieldAlert, Sparkles, BookOpen, Code, Layers } from 'lucide-react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<'terminal' | 'skills' | 'credentials'>('terminal');

  const skillsData = [
    { category: 'Langages de Code', items: ['Python', 'C++', 'JavaScript', 'TypeScript', 'SQL'] },
    { category: 'Intelligence Artificielle', items: ['Gemini API', 'Claude AI', 'ChatGPT API', 'Outils No-Code & Agents'] },
    { category: 'Édition & Création', items: ['CapCut Pro', 'Adobe After Effects', 'Adobe Photoshop', 'Sound Design'] },
    { category: 'Business & Automation', items: ['YouTube Automation', 'SEO Poussé', 'E-commerce', 'Dolapo ECOM LLC'] },
  ];

  const credentialData = [
    { label: 'Diplôme', value: 'Diplôme de Technicien (DT)' },
    { label: 'Scolarité', value: 'Baccalauréat Scientifique & Technologique' },
    { label: 'Entreprise Offshore', value: 'Dolapo ECOM LLC (Fondateur)' },
    { label: 'Projets Majeurs', value: 'Technova Learning, Dukaio' },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-neutral-950 relative overflow-hidden border-b border-neutral-900"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-none bg-brand-emerald/10 border border-brand-emerald/20 mb-4">
            <span className="w-1.5 h-1.5 bg-brand-emerald animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-brand-emerald uppercase">// PARCOURS &amp; PHILOSOPHIE</span>
          </div>
          <h2
            id="about-heading"
            className="text-4xl sm:text-6xl font-black uppercase italic tracking-tighter text-white"
          >
            L'Alliance de la Technique &amp; du Business
          </h2>
        </div>

        {/* Dual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Hacker Terminal */}
          <div id="about-interactive-terminal-col" className="lg:col-span-5">
            <div className="w-full rounded-none bg-[#09090c] border border-neutral-800 overflow-hidden flex flex-col h-[400px]">
              
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-zinc-950/80 border-b border-neutral-850 flex items-center justify-between">
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 bg-red-500/80 rounded-none" />
                  <span className="w-2.5 h-2.5 bg-yellow-500/80 rounded-none" />
                  <span className="w-2.5 h-2.5 bg-green-500/80 rounded-none" />
                </div>
                <div className="flex items-center space-x-1 text-zinc-500 font-mono text-[10px]">
                  <Terminal className="w-3 h-3 text-brand-emerald" />
                  <span>isidore@dolapo-offshore:~</span>
                </div>
                <div className="w-8" />
              </div>

              {/* Terminal Navigation Tabs */}
              <div className="grid grid-cols-3 border-b border-neutral-850 bg-[#0a0a0e] text-[10px] font-mono">
                <button
                  id="terminal-tab-logs"
                  onClick={() => setActiveTab('terminal')}
                  className={`py-2.5 text-center transition-colors border-r border-neutral-850 flex items-center justify-center space-x-1.5 cursor-pointer rounded-none ${
                    activeTab === 'terminal' ? 'bg-zinc-900 text-brand-emerald font-bold' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Boot_Logs.sh</span>
                </button>
                <button
                  id="terminal-tab-skills"
                  onClick={() => setActiveTab('skills')}
                  className={`py-2.5 text-center transition-colors border-r border-neutral-850 flex items-center justify-center space-x-1.5 cursor-pointer rounded-none ${
                    activeTab === 'skills' ? 'bg-zinc-900 text-brand-cyan font-bold' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>Tech_Stack.env</span>
                </button>
                <button
                  id="terminal-tab-credentials"
                  onClick={() => setActiveTab('credentials')}
                  className={`py-2.5 text-center transition-colors flex items-center justify-center space-x-1.5 cursor-pointer rounded-none ${
                    activeTab === 'credentials' ? 'bg-zinc-900 text-purple-400 font-bold' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Bio_Creds.log</span>
                </button>
              </div>

              {/* Terminal Shell Window */}
              <div className="flex-1 p-6 font-mono text-[11px] sm:text-xs overflow-y-auto bg-black text-zinc-300 space-y-4">
                
                {activeTab === 'terminal' && (
                  <div id="terminal-content-logs" className="space-y-2">
                    <p className="text-zinc-500"># Initialising Agonan Isidore Abraham VM...</p>
                    <p className="text-brand-emerald flex items-center gap-1">
                      <span>✓</span> [SYSTEM] Technical background identified: C++, Python, Arduino
                    </p>
                    <p className="text-brand-cyan flex items-center gap-1">
                      <span>✓</span> [SYSTEM] Baccalauréat &amp; Diplôme de Technicien loaded
                    </p>
                    <p className="text-purple-400 flex items-center gap-1">
                      <span>✓</span> [BUSINESS] Dolapo ECOM LLC offshore structure created
                    </p>
                    <p className="text-zinc-300 flex items-center gap-1">
                      <span>✓</span> [SAAS] Technova Learning (E-Learning Engine) — ACTIVE
                    </p>
                    <p className="text-zinc-300 flex items-center gap-1">
                      <span>✓</span> [SAAS] Dukaio (Monetization Engine) — ACTIVE
                    </p>
                    <p className="text-amber-400 flex items-center gap-1">
                      <span>✓</span> [MARKETING] YouTube/Facebook automation frameworks operational
                    </p>
                    <p className="text-zinc-500 mt-4">&gt; scale_mindset = true</p>
                    <div className="h-4 w-1 bg-brand-emerald animate-pulse inline-block" />
                  </div>
                )}

                {activeTab === 'skills' && (
                  <div id="terminal-content-skills" className="space-y-4">
                    {skillsData.map((category, idx) => (
                      <div key={idx}>
                        <p className="text-brand-cyan font-bold">{category.category} :</p>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {category.items.map((item, idy) => (
                            <span key={idy} className="bg-white/5 border border-white/5 px-1.5 py-0.5 rounded-none text-zinc-300">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'credentials' && (
                  <div id="terminal-content-credentials" className="space-y-3">
                    {credentialData.map((cred, idx) => (
                      <div key={idx} className="border-b border-neutral-850 pb-2">
                        <span className="text-zinc-500 uppercase text-[10px] block">{cred.label}</span>
                        <span className="text-white font-semibold">{cred.value}</span>
                      </div>
                    ))}
                    <div className="pt-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-none bg-brand-emerald animate-ping" />
                      <span className="text-brand-emerald text-[10px]">Prêt pour de nouveaux partenariats mondiaux</span>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

          {/* Right Column: Persuasive Copwriting Text (3 paragraphs) */}
          <div id="about-copy-col" className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-emerald" />
              AGONAN ISIDORE ABRAHAM
            </h3>

            {ABOUT_PARAGRAPHS.map((paragraph, idx) => (
              <p
                key={idx}
                id={`about-paragraph-${idx}`}
                className="text-neutral-300 font-sans font-light text-sm sm:text-base leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {/* Quick Summary Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-neutral-850 pt-6 mt-6">
              <div className="flex items-center space-x-3">
                <span className="w-5 h-5 rounded-none bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-none bg-brand-emerald" />
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Vision Commerciale Globale
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-5 h-5 rounded-none bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-none bg-brand-cyan" />
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Processus 100% Optimisés par l'IA
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
