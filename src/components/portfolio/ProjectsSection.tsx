import React, { useState } from 'react';
import { PROJECTS } from '@/data';
import { Project } from '@/types';
import { ExternalLink, Tag, Sparkles, Code, Play, X, Eye, FileText, Check, Cpu } from 'lucide-react';

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'saas' | 'ugc' | 'automation'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeTab === 'all') return true;
    return proj.category === activeTab;
  });

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'saas': return 'SaaS Platform';
      case 'ugc': return 'Vidéo UGC';
      case 'automation': return 'Automatisation';
      default: return 'Tech Projets';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'saas': return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
      case 'ugc': return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      case 'automation': return 'text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20';
      default: return 'text-zinc-400 bg-zinc-500/10 border-zinc-500/20';
    }
  };

  return (
    <section
      id="projets"
      className="py-24 bg-gradient-to-b from-[#08080a] to-[#030303] relative overflow-hidden"
    >
      {/* Background glow light */}
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] rounded-full bg-brand-emerald/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-none bg-brand-emerald/10 border border-brand-emerald/20 mb-4">
              <span className="w-1.5 h-1.5 bg-brand-cyan animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-brand-emerald uppercase">// RÉALISATIONS</span>
            </div>
            <h2
              id="projects-heading"
              className="text-4xl sm:text-6xl font-black uppercase italic tracking-tighter text-white"
            >
              Mes Réalisations &amp; Projets
            </h2>
            <p className="text-neutral-400 font-sans font-light mt-4 max-w-xl">
              Un aperçu de mes écosystèmes SaaS fonctionnels, de mes créations UGC virales et de mes systèmes d'automatisation clés en main.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div id="projects-tabs" className="flex flex-wrap gap-1 bg-neutral-900 p-1 rounded-none border border-neutral-800 self-start">
            {[
              { id: 'all', label: 'Tous' },
              { id: 'saas', label: 'Plateformes SaaS' },
              { id: 'ugc', label: 'UGC & Médias' },
              { id: 'automation', label: 'Automatisation' },
            ].map((tab) => (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-none text-[10px] font-mono transition-all uppercase tracking-widest cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-brand-emerald text-black font-black shadow-none'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group bg-neutral-900/40 rounded-none overflow-hidden border border-neutral-850 hover:border-brand-emerald/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Custom Mockup Preview */}
              <div
                className="relative h-64 w-full flex items-center justify-center overflow-hidden border-b border-neutral-850 group-hover:opacity-95 transition-opacity"
                style={{ background: project.placeholderColor }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent z-10" />

                {/* Real screenshot when provided */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                {/* SaaS Laptop-style layout */}
                {!project.image && project.category === 'saas' && (
                  <div className="w-[85%] h-[80%] rounded-none bg-zinc-950 border border-neutral-800 p-2.5 flex flex-col shadow-2xl relative translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                    {/* Browser top-bar */}
                    <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-white/5">
                      <div className="flex space-x-1.5">
                        <span className="w-2 h-2 rounded-none bg-red-550" />
                        <span className="w-2 h-2 rounded-none bg-yellow-550" />
                        <span className="w-2 h-2 rounded-none bg-green-550" />
                      </div>
                      <div className="w-1/2 h-4 rounded-none bg-white/5 text-[8px] flex items-center justify-center font-mono text-zinc-500 truncate">
                        https://{project.id === 'technova' ? 'technova-learning.com' : 'ducatilio.com'}
                      </div>
                      <div className="w-4" />
                    </div>
                    {/* Browser inner mockup content */}
                    <div className="flex-1 bg-zinc-900 rounded-none p-2 flex flex-col justify-between overflow-hidden relative">
                      <div className="flex justify-between items-center border-b border-white/5 pb-1">
                        <span className="text-[10px] font-display font-bold text-white uppercase">{project.title}</span>
                        <span className="text-[8px] text-brand-cyan bg-brand-cyan/10 px-1 rounded-none">PRO</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 my-1 flex-1">
                        <div className="bg-white/5 rounded-none p-1 flex flex-col justify-between">
                          <span className="text-[6px] text-zinc-500 uppercase">Users</span>
                          <span className="text-[10px] font-bold font-mono text-brand-emerald">1.2k</span>
                        </div>
                        <div className="bg-white/5 rounded-none p-1 flex flex-col justify-between">
                          <span className="text-[6px] text-zinc-500 uppercase">SaaS MRR</span>
                          <span className="text-[10px] font-bold font-mono text-brand-cyan">€4,500</span>
                        </div>
                        <div className="bg-white/5 rounded-none p-1 flex flex-col justify-between">
                          <span className="text-[6px] text-zinc-500 uppercase">Conversion</span>
                          <span className="text-[10px] font-bold font-mono text-purple-400">8.4%</span>
                        </div>
                      </div>
                      <div className="h-6 w-full rounded-none bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center">
                        <span className="text-[8px] text-brand-emerald font-bold font-mono uppercase tracking-widest">SYSTEM ONLINE</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* UGC Mobile Phone mockup */}
                {project.category === 'ugc' && (
                  <div className="w-[120px] h-[90%] rounded-none bg-zinc-950 border border-neutral-800 p-2 flex flex-col shadow-2xl relative translate-y-6 group-hover:translate-y-4 transition-transform duration-500 overflow-hidden">
                    {/* Phone lens notch */}
                    <div className="w-12 h-3 bg-black rounded-none mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                      <span className="w-1 h-1 bg-blue-900" />
                    </div>
                    {/* Video Player */}
                    <div className="flex-1 rounded-none bg-zinc-900 border border-white/5 overflow-hidden relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                      
                      {/* Abstract video simulation layout */}
                      <div className="absolute inset-x-2 bottom-2 z-20 flex flex-col text-left">
                        <span className="text-[8px] font-bold text-white">@isidore_ugc</span>
                        <span className="text-[6px] text-zinc-300 font-light truncate">Faire un hook d'enfer avec CapCut</span>
                        <div className="flex items-center space-x-1 mt-1">
                          <span className="text-[6px] text-brand-emerald bg-brand-emerald/10 px-1 rounded-none">Conversion</span>
                          <span className="text-[5px] text-zinc-400">Viral Hook</span>
                        </div>
                      </div>

                      {/* Video interaction UI (likes, comments, shares simulated) */}
                      <div className="absolute right-1 top-10 z-20 flex flex-col space-y-2 text-right">
                        <div className="flex flex-col items-center">
                          <span className="w-3.5 h-3.5 rounded-none bg-white/10 flex items-center justify-center text-[5px] text-red-500">❤️</span>
                          <span className="text-[5px] text-white">45k</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="w-3.5 h-3.5 rounded-none bg-white/10 flex items-center justify-center text-[5px]">💬</span>
                          <span className="text-[5px] text-white">820</span>
                        </div>
                      </div>

                      <div className="w-8 h-8 rounded-none bg-brand-emerald/20 border border-brand-emerald flex items-center justify-center z-15 group-hover:scale-110 transition-transform">
                        <Play className="w-3.5 h-3.5 text-brand-emerald fill-brand-emerald" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Automation layout */}
                {!project.image && project.category === 'automation' && (
                  <div className="w-[85%] h-[80%] rounded-none bg-zinc-950 border border-zinc-800 p-3.5 flex flex-col shadow-2xl relative translate-y-4 group-hover:translate-y-2 transition-transform duration-500 font-mono text-[9px]">
                    <div className="flex items-center space-x-1.5 text-zinc-500 border-b border-white/5 pb-1.5 mb-2">
                      <Cpu className="w-3.5 h-3.5 text-brand-emerald" />
                      <span className="text-zinc-400">YT_AUTO_BOT_PROCESSOR.py</span>
                    </div>
                    <div className="flex-1 space-y-1.5 overflow-hidden text-zinc-400">
                      <div className="text-zinc-600">&gt; initialising niche database...</div>
                      <div className="text-brand-cyan">&gt; API connection status: 200 OK</div>
                      <div className="text-brand-emerald">&gt; [MODEL] AI script text generated: "Le secret de l'offshore..."</div>
                      <div className="text-zinc-400">&gt; [CAPCUT] rendering video compilation automatically...</div>
                      <div className="text-purple-400 animate-pulse">&gt; UPLOADING TO SCHEDULER: 100% complete</div>
                    </div>
                  </div>
                )}

                {/* Badge Category overlay */}
                <span className={`absolute top-4 left-4 z-20 px-2.5 py-1 rounded-none text-[10px] font-black uppercase tracking-widest border ${getCategoryColor(project.category)}`}>
                  {getCategoryLabel(project.category)}
                </span>

                {/* Impact metric badge overlay */}
                {project.metrics && (
                  <span className="absolute bottom-4 right-4 z-20 px-3 py-1 rounded-none text-xs font-mono font-bold bg-zinc-950/95 text-white border border-neutral-800 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-brand-emerald" /> {project.metrics}
                  </span>
                )}
              </div>

              {/* Card Body Info */}
              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3
                    id={`project-title-${project.id}`}
                    className="text-2xl font-display font-bold text-white mb-2.5 tracking-tight group-hover:text-brand-emerald transition-colors"
                  >
                    {project.title}
                  </h3>
                  
                  <p className="text-neutral-400 font-sans font-light text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="flex items-center gap-1 px-2.5 py-1 rounded-none bg-white/5 border border-white/5 text-[10px] text-zinc-400 font-mono uppercase tracking-wider">
                        <Tag className="w-2.5 h-2.5 text-zinc-500" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <button
                  id={`project-action-details-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3.5 rounded-none text-center text-xs font-mono uppercase tracking-widest bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-850 hover:border-brand-emerald/50 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-zinc-400 group-hover:text-brand-emerald" />
                  <span>En savoir plus &amp; Démo</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Immersive Details Modal */}
      {selectedProject && (
        <div id="project-detail-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <div
            id="modal-backdrop"
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
          />

          {/* Modal Content */}
          <div
            id="modal-card"
            className="relative w-full max-w-2xl rounded-none bg-neutral-950 border border-brand-emerald/40 p-6 md:p-10 shadow-2xl shadow-black max-h-[90vh] overflow-y-auto z-10"
          >
            {/* Close button */}
            <button
              id="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-none text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header info */}
            <div className="mb-8">
              <span className={`inline-block px-3 py-1 rounded-none text-xs font-mono font-bold border mb-4 ${getCategoryColor(selectedProject.category)}`}>
                {getCategoryLabel(selectedProject.category)}
              </span>
              <h3 className="text-3xl font-display font-extrabold text-white tracking-tight">
                {selectedProject.title}
              </h3>
              {selectedProject.metrics && (
                <p className="text-brand-emerald font-mono text-sm font-semibold mt-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-brand-emerald" /> Impact : {selectedProject.metrics}
                </p>
              )}
            </div>

            {/* Structured description */}
            <div className="space-y-6 text-zinc-300 font-sans font-light text-sm md:text-base leading-relaxed">
              <div>
                <h4 className="text-xs uppercase font-mono font-bold text-zinc-500 tracking-wider mb-2">PROJET &amp; VISION :</h4>
                <p>{selectedProject.longDescription || selectedProject.description}</p>
              </div>

              {/* Bullet points features list */}
              {selectedProject.features && (
                <div>
                  <h4 className="text-xs uppercase font-mono font-bold text-zinc-500 tracking-wider mb-3">FONCTIONNALITÉS &amp; SPÉCIFICATIONS :</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-brand-emerald mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies / Software list */}
              {selectedProject.softwareUsed && (
                <div>
                  <h4 className="text-xs uppercase font-mono font-bold text-zinc-500 tracking-wider mb-2">LOGICIELS &amp; OUTILS MAÎTRISÉS :</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.softwareUsed.map((sw, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-none bg-brand-emerald/10 text-brand-emerald text-xs font-mono border border-brand-emerald/20">
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Video or Live placeholder note */}
            <div className="mt-8 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-zinc-500 font-mono">
                * Lien de démonstration complet modifiable ultérieurement.
              </span>
              <a
                id="modal-cta-whatsapp"
                href="https://wa.me/2290157385885?text=Bonjour%20Isidore,%20j'aimerais%20en%20savoir%20plus%20sur%20votre%20projet%20"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-none font-mono text-xs uppercase tracking-widest bg-brand-emerald text-black hover:bg-emerald-400 transition-colors flex items-center gap-2"
              >
                <span>Demander une démo live</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
