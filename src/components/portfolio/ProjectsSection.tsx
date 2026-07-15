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
      case 'saas': return 'Plateforme SaaS';
      case 'ugc': return 'Vidéo UGC';
      case 'automation': return 'YouTube & Automatisation';
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
              { id: 'automation', label: 'YouTube & Automatisation' },
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
              className="group bg-neutral-900/40 rounded-none border border-neutral-850 hover:border-brand-emerald/50 hover:bg-neutral-900/70 transition-all duration-300 p-8 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle top accent gradient line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-emerald/0 to-transparent group-hover:via-brand-emerald transition-all duration-500" />

              <div>
                {/* Header: Category Badge + Metrics Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <span className={`px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest border ${getCategoryColor(project.category)}`}>
                    {getCategoryLabel(project.category)}
                  </span>

                  {project.metrics && (
                    <span className="px-3 py-1 text-xs font-mono font-semibold bg-zinc-950 text-white border border-neutral-800 flex items-center gap-1.5 shadow-sm group-hover:border-brand-emerald/30 transition-colors">
                      <Sparkles className="w-3.5 h-3.5 text-brand-emerald animate-pulse" /> {project.metrics}
                    </span>
                  )}
                </div>

                {/* Title & Role */}
                <div className="mb-4">
                  <h3
                    id={`project-title-${project.id}`}
                    className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight group-hover:text-brand-emerald transition-colors leading-snug"
                  >
                    {project.title}
                  </h3>
                  {project.role && (
                    <p className="text-brand-cyan font-mono text-xs mt-1.5 font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-brand-cyan inline-block rounded-full" />
                      <span>{project.role}</span>
                    </p>
                  )}
                </div>
                
                {/* Description */}
                <p className="text-neutral-300 font-sans font-light text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Features preview bullet points */}
                {project.features && project.features.length > 0 && (
                  <div className="mb-6 space-y-2 bg-neutral-950/50 p-4 border border-white/5">
                    {project.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-400 font-mono">
                        <Check className="w-3.5 h-3.5 text-brand-emerald mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="flex items-center gap-1 px-2.5 py-1 bg-white/5 border border-white/5 text-[10px] text-zinc-400 font-mono uppercase tracking-wider group-hover:border-white/10 transition-colors">
                      <Tag className="w-2.5 h-2.5 text-zinc-500" /> {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-neutral-850 flex flex-col sm:flex-row gap-3">
                <button
                  id={`project-action-details-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-3.5 px-4 text-center text-xs font-mono uppercase tracking-widest bg-neutral-900 border border-neutral-800 text-white hover:bg-brand-emerald hover:text-black hover:border-brand-emerald transition-all flex items-center justify-center gap-2 group/btn cursor-pointer font-bold"
                >
                  <FileText className="w-4 h-4 text-zinc-400 group-hover/btn:text-black transition-colors" />
                  <span>En savoir plus &amp; Démo</span>
                </button>

                {project.linkUrl && (
                  <a
                    id={`project-action-link-${project.id}`}
                    href={project.linkUrl}
                    target={project.linkUrl.startsWith('http') ? '_blank' : '_self'}
                    rel={project.linkUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="py-3.5 px-5 text-center text-xs font-mono uppercase tracking-widest bg-white/5 border border-white/10 text-brand-cyan hover:bg-brand-cyan hover:text-black hover:border-brand-cyan transition-all flex items-center justify-center gap-2 cursor-pointer font-bold"
                  >
                    <span>{project.linkText || 'Visiter le site'}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
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
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-block px-3 py-1 rounded-none text-xs font-mono font-bold border ${getCategoryColor(selectedProject.category)}`}>
                  {getCategoryLabel(selectedProject.category)}
                </span>
                {selectedProject.role && (
                  <span className="text-brand-cyan font-mono text-xs font-semibold px-2.5 py-1 bg-brand-cyan/10 border border-brand-cyan/20">
                    {selectedProject.role}
                  </span>
                )}
              </div>
              <h3 className="text-3xl font-display font-extrabold text-white tracking-tight">
                {selectedProject.title}
              </h3>
              {selectedProject.metrics && (
                <p className="text-brand-emerald font-mono text-sm font-semibold mt-2 flex items-center gap-1.5">
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

            {/* Action link or demo placeholder */}
            <div className="mt-8 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
              {selectedProject.linkUrl && selectedProject.linkUrl.startsWith('http') ? (
                <a
                  href={selectedProject.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 font-mono text-xs uppercase tracking-widest bg-white/10 text-brand-cyan border border-brand-cyan/30 hover:bg-brand-cyan hover:text-black transition-colors flex items-center gap-2 font-bold"
                >
                  <span>{selectedProject.linkText || 'Visiter le site en ligne'}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-xs text-zinc-500 font-mono">
                  * Projet consultable en direct ou sur demande d'accès.
                </span>
              )}
              <a
                id="modal-cta-whatsapp"
                href={`https://wa.me/2290157385885?text=Bonjour%20Isidore,%20j'aimerais%20en%20savoir%20plus%20sur%20${encodeURIComponent(selectedProject.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-none font-mono text-xs uppercase tracking-widest bg-brand-emerald text-black hover:bg-emerald-400 transition-colors flex items-center gap-2 font-bold"
              >
                <span>Discuter de ce projet</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
