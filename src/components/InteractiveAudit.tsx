import React, { useState } from 'react';
import { AUDIT_QUESTIONS } from '../data';
import { Sparkles, Bot, ArrowRight, ArrowLeft, RefreshCw, Send, CheckCircle, Check, Smartphone } from 'lucide-react';
import { AuditResult } from '../types';

export default function InteractiveAudit() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);

  const handleSelectOption = (questionId: string, optionValue: string) => {
    const updatedSelections = { ...selections, [questionId]: optionValue };
    setSelections(updatedSelections);
    // Removed auto-advance. The user will explicitly click "Étape Suivante ->"
  };

  const handleNextStep = () => {
    const currentQuestion = AUDIT_QUESTIONS[currentStep];
    const selectedValue = selections[currentQuestion.id];
    if (!selectedValue) return;

    if (currentStep < AUDIT_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateStrategy(selections);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateStrategy = (finalSelections: Record<string, string>) => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const profile = finalSelections['profile'] || 'beginner';
      const painpoint = finalSelections['painpoint'] || 'skills';
      
      let title = '';
      let strategy = '';
      let actions: string[] = [];
      let tools: string[] = [];
      let timeframe = '';

      if (profile === 'beginner') {
        timeframe = '30 jours';
        if (painpoint === 'skills') {
          title = 'Plan d\'Infiltration IA & Compétences Clés';
          strategy = 'Votre priorité absolue est d\'acquérir rapidement les bases des invites (prompt engineering) et de comprendre l\'écosystème IA pour devenir indispensable sur le marché freelance ou l\'offshore.';
          actions = [
            'Suivre un cursus accéléré d\'automatisation sur Technova Learning.',
            'Maîtriser les bases du Prompt Engineering avec ChatGPT & Claude.',
            'Concevoir vos 3 premiers micro-services à forte valeur ajoutée.'
          ];
          tools = ['ChatGPT', 'Claude AI', 'v0.dev', 'Technova Learning'];
        } else if (painpoint === 'time') {
          title = 'Stratégie de Libération Temporelle & Focus';
          strategy = 'Vous vous dispersez dans trop de micro-tâches sans structure. Vous devez automatiser vos flux de recherche et d\'organisation pour doubler votre productivité.';
          actions = [
            'Mettre en place un second cerveau digital pour stocker vos idées par IA.',
            'Utiliser des modèles d\'IA pour générer vos résumés et scripts en 1 clic.',
            'Bloquer 2 heures d\'apprentissage ininterrompues par jour.'
          ];
          tools = ['Notion AI', 'Make.com', 'ChatGPT Desktop'];
        } else {
          title = 'Plan d\'Attaque UGC & Monétisation Rapide';
          strategy = 'La clé réside dans la conversion. Vous devez maîtriser l\'art de capter l\'attention pour convertir des vues en commissions d\'affiliation ou en ventes.';
          actions = [
            'Analyser les hooks (accroches) des vidéos TikTok à plus d\'un million de vues.',
            'Créer vos 5 premières vidéos UGC persuasives à l\'aide de CapCut Pro.',
            'Lancer un système de monétisation automatique par micro-SaaS.'
          ];
          tools = ['CapCut Pro', 'TikTok Creative Center', 'Dukaio'];
        }
      } else if (profile === 'creator') {
        timeframe = '45 jours';
        if (painpoint === 'skills') {
          title = 'Modernisation Technique de Production Automatisée';
          strategy = 'Votre flux de travail actuel est trop manuel. Vous devez intégrer l\'IA pour déléguer l\'écriture de scripts, le montage brut et le SEO vidéo.';
          actions = [
            'Déployer des agents d\'IA spécialisés dans l\'écriture de scripts à haute rétention.',
            'Automatiser le doublage et la traduction de vos vidéos dans 3 langues.',
            'Configurer un système d\'analyse automatique des statistiques de vos concurrents.'
          ];
          tools = ['CapCut Pro', 'ElevenLabs', 'ChatGPT API', 'VidIQ Pro'];
        } else if (painpoint === 'time') {
          title = 'Système d\'Automatisation Faceless Youtube & Facebook';
          strategy = 'Le secret réside dans le levier algorithmique. Vous devez créer une usine de contenu automatisée qui tourne en tâche de fond sans intervention constante.';
          actions = [
            'Configurer un webhook automatique reliant vos scripts Google Docs à After Effects.',
            'Automatiser la planification et la publication de vidéos Shorts/Reels multi-plateformes.',
            'Mettre en place des modèles de vignettes (miniatures) à taux de clic élevé.'
          ];
          tools = ['Make.com', 'Adobe Premiere / After Effects', 'Buffer / Later', 'Photoshop'];
        } else {
          title = 'Optimisation du Taux de Conversion & Monétisation';
          strategy = 'Vos millions de vues ne sont pas assez rentabilisés. Vous devez implémenter des produits d\'info-prenariat ou des abonnements via Dukaio.';
          actions = [
            'Créer une offre de formation ou une communauté exclusive hébergée sur Technova.',
            'Intégrer Dukaio pour capter des paiements de dons et d\'abonnements en pilote automatique.',
            'Écrire des séquences de vente d\'emails persuasives déclenchées par l\'IA.'
          ];
          tools = ['Dukaio', 'Technova Learning', 'Stripe', 'MailerLite AI'];
        }
      } else { // business / brand
        timeframe = '60 jours';
        if (painpoint === 'skills') {
          title = 'Transformation IA & Onboarding Corporate';
          strategy = 'Votre équipe doit être formée aux outils IA génératifs pour réduire de 40% les temps de rédaction, de création graphique et d\'analyse de données.';
          actions = [
            'Mettre en place des ateliers d\'initiation aux outils IA (Photoshop, Copilot).',
            'Développer des bases de connaissances internes alimentées par IA pour vos clients.',
            'Créer des processus standards (SOPs) d\'utilisation de l\'IA dans l\'entreprise.'
          ];
          tools = ['ChatGPT Enterprise', 'Adobe Firefly', 'Microsoft Copilot'];
        } else if (painpoint === 'time') {
          title = 'Automatisation Opérationnelle & Flux de Communication';
          strategy = 'Votre entreprise perd des dizaines d\'heures dans la saisie de données et la communication manuelle. Intégrons des systèmes de workflows intelligents.';
          actions = [
            'Créer un tunnel d\'onboarding client 100% automatisé (Facture -> Contrat -> Slack).',
            'Automatiser la génération de rapports de performance mensuels par script.',
            'Implémenter un robot de tri intelligent des emails entrants par IA.'
          ];
          tools = ['Make.com', 'Zapier Enterprise', 'ActiveCampaign', 'Slack Integrations'];
        } else {
          title = 'Plan de Domination Visuelle UGC & Omniprésence Digitale';
          strategy = 'Pour démultiplier votre chiffre d\'affaires, votre marque doit occuper l\'espace sur TikTok, Shorts et Instagram avec des vidéos UGC authentiques et persuasives.';
          actions = [
            'Produire une campagne de 15 vidéos UGC par mois axées sur la preuve sociale.',
            'Optimiser la structure SEO de votre site web pour acquérir du trafic passif.',
            'Intégrer l\'IA pour recycler un seul contenu de blog en 10 capsules vidéo virales.'
          ];
          tools = ['CapCut Pro', 'TikTok Ads Manager', 'SEO Surfer AI', 'After Effects'];
        }
      }

      setResult({ title, strategy, actions, tools, timeframe });
      setIsGenerating(false);
    }, 1500);
  };

  const resetAudit = () => {
    setSelections({});
    setCurrentStep(0);
    setResult(null);
  };

  const getWhatsAppLink = () => {
    if (!result) return '';
    const profileLabel = selections['profile'] === 'beginner' ? 'Jeune / Débutant' : selections['profile'] === 'creator' ? 'Créateur de contenu' : 'Entreprise / Marque';
    const challengeLabel = selections['painpoint'] === 'skills' ? 'Manque de compétences IA' : selections['painpoint'] === 'time' ? 'Manque de temps' : 'Manque de visibilité';
    
    const message = `Bonjour Isidore ! Je viens de générer ma stratégie personnalisée sur ton portfolio :
• Profil : ${profileLabel}
• Défi : ${challengeLabel}
• Plan recommandé : ${result.title}
• Temps estimé : ${result.timeframe}

J'aimerais en discuter avec toi pour la mettre en œuvre !`;
    
    return `https://wa.me/2290157385885?text=${encodeURIComponent(message)}`;
  };

  const currentQuestion = AUDIT_QUESTIONS[currentStep];
  const currentSelectedValue = currentQuestion ? selections[currentQuestion.id] : undefined;

  return (
    <section
      id="audit"
      className="py-24 bg-neutral-950 relative overflow-hidden border-b border-neutral-900"
    >
      {/* Background glow light strip */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-cyan/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-5" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-none bg-brand-emerald/10 border border-brand-emerald/20 mb-4">
            <span className="w-1.5 h-1.5 bg-brand-cyan" />
            <span className="text-xs font-mono tracking-widest text-brand-emerald uppercase">// AUDIT INTERACTIF</span>
          </div>
          <h2
            id="audit-heading"
            className="text-4xl sm:text-6xl font-black uppercase italic tracking-tighter text-white"
          >
            Bâtissez votre Stratégie de Croissance
          </h2>
          <p className="text-neutral-400 font-sans font-light mt-4 max-w-xl mx-auto">
            Sélectionnez vos objectifs et vos blocages actuels pour obtenir un plan d'action d'automatisation sur mesure en quelques secondes.
          </p>
        </div>

        {/* Strategy Widget Container */}
        <div
          id="audit-widget-card"
          className="rounded-none bg-[#09090c] border border-neutral-800 p-8 md:p-12 shadow-none relative overflow-hidden"
        >
          {/* Active progress bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
            <div
              className="h-full bg-brand-emerald rounded-none transition-all duration-500"
              style={{ width: `${((currentStep + (result ? 1 : 0)) / (AUDIT_QUESTIONS.length + 1)) * 100}%` }}
            />
          </div>

          {!result && !isGenerating && currentQuestion && (
            <div id="audit-questions-flow" className="space-y-8 animate-fadeIn">
              {/* Question Index Badge & Back button */}
              <div className="flex justify-between items-center text-xs font-mono text-zinc-500 uppercase">
                <div className="flex items-center space-x-4">
                  <span>Étape {currentStep + 1} de {AUDIT_QUESTIONS.length}</span>
                  {currentStep > 0 && (
                    <button
                      onClick={handlePrevStep}
                      className="inline-flex items-center space-x-1.5 text-zinc-400 hover:text-white border border-white/10 px-2.5 py-1 rounded-none transition-colors"
                    >
                      <ArrowLeft className="w-3 h-3" />
                      <span>Étape Précédente</span>
                    </button>
                  )}
                </div>
                <span className="text-brand-cyan">// Questions en cours...</span>
              </div>

              {/* Question Title */}
              <div>
                <h3 className="text-2xl font-display font-bold text-white tracking-tight leading-tight">
                  {currentQuestion.text}
                </h3>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 gap-4 mt-6">
                {currentQuestion.options.map((opt) => {
                  const isSelected = selections[currentQuestion.id] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      id={`audit-option-${opt.value}`}
                      onClick={() => handleSelectOption(currentQuestion.id, opt.value)}
                      className={`w-full text-left p-5 rounded-none border transition-all duration-300 group flex items-start space-x-4 cursor-pointer ${
                        isSelected
                          ? 'bg-brand-emerald/15 border-brand-emerald shadow-[0_0_20px_rgba(16,185,129,0.15)] text-white font-bold'
                          : 'bg-zinc-950 border-neutral-850 hover:border-brand-emerald/40 hover:bg-neutral-900 text-zinc-300'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-none border flex items-center justify-center mt-1 flex-shrink-0 transition-colors ${
                          isSelected
                            ? 'border-brand-emerald bg-brand-emerald text-black shadow-[0_0_8px_rgba(16,185,129,0.4)]'
                            : 'border-white/20 group-hover:border-brand-emerald'
                        }`}
                      >
                        {isSelected ? (
                          <Check className="w-3.5 h-3.5 font-black text-black stroke-[3px]" />
                        ) : (
                          <span className="w-2.5 h-2.5 rounded-none bg-brand-emerald opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </div>
                      <div className="flex-1">
                        <span
                          className={`font-display font-bold text-base block transition-colors ${
                            isSelected ? 'text-brand-emerald' : 'text-white group-hover:text-brand-emerald'
                          }`}
                        >
                          {opt.label}
                        </span>
                        <span className="text-zinc-400 font-sans font-light text-xs sm:text-sm mt-1 block">
                          {opt.description}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Navigation Toolbar */}
              <div className="flex items-center justify-between pt-6 border-t border-neutral-850 mt-8">
                <div>
                  {currentStep > 0 ? (
                    <button
                      onClick={handlePrevStep}
                      className="px-5 py-2.5 rounded-none text-xs font-mono uppercase tracking-widest border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition-all flex items-center space-x-2"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Retour</span>
                    </button>
                  ) : (
                    <span className="text-xs font-mono text-zinc-600 uppercase">Choisissez une option ci-dessus</span>
                  )}
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleNextStep}
                    disabled={!currentSelectedValue}
                    className={`px-6 py-3 rounded-none text-xs font-mono uppercase tracking-widest flex items-center space-x-2 transition-all ${
                      currentSelectedValue
                        ? 'bg-brand-emerald text-black hover:bg-brand-emerald/90 shadow-[0_0_15px_rgba(16,185,129,0.3)] cursor-pointer'
                        : 'bg-zinc-900 border border-neutral-800 text-zinc-600 cursor-not-allowed opacity-60'
                    }`}
                  >
                    <span>
                      {currentStep < AUDIT_QUESTIONS.length - 1 ? "Étape Suivante" : "Générer ma stratégie"}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Loading Animation state */}
          {isGenerating && (
            <div id="audit-generating-loader" className="py-16 flex flex-col items-center justify-center text-center space-y-6 animate-fadeIn">
              <RefreshCw className="w-12 h-12 text-brand-emerald animate-spin" />
              <div className="space-y-2">
                <h3 className="text-xl font-display font-bold text-white tracking-tight">Analyse de vos données d'affaires...</h3>
                <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                  Déploiement d'algorithmes stratégiques &amp; automatisation du plan
                </p>
              </div>
            </div>
          )}

          {/* Strategy Output Results */}
          {result && !isGenerating && (
            <div id="audit-results-panel" className="space-y-8 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-850 pb-6">
                <div>
                  <div className="flex items-center space-x-3">
                    <span className="px-2.5 py-1 rounded-none text-[10px] font-mono font-bold uppercase bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20">
                      STRATÉGIE RECOMMANDÉE
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      Profil: <span className="text-white font-semibold">{selections['profile'] === 'beginner' ? 'Jeune / Débutant' : selections['profile'] === 'creator' ? 'Créateur de contenu' : 'Entreprise'}</span>
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-2.5 tracking-tight">
                    {result.title}
                  </h3>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-none text-center self-start sm:self-center font-mono">
                  <span className="text-[10px] text-zinc-500 uppercase block">Échéancier</span>
                  <span className="text-base font-bold text-brand-cyan">{result.timeframe}</span>
                </div>
              </div>

              {/* Strategy Core Description */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase font-mono font-bold text-zinc-500 tracking-wider">Ligne Directrice :</h4>
                <p className="text-neutral-300 font-sans font-light text-sm sm:text-base leading-relaxed">
                  {result.strategy}
                </p>
              </div>

              {/* Actions list */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-mono font-bold text-zinc-500 tracking-wider">Feuille de Route (Plan d'Action) :</h4>
                <div className="grid grid-cols-1 gap-3">
                  {result.actions.map((act, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-sm text-zinc-300">
                      <CheckCircle className="w-5 h-5 text-brand-emerald mt-0.5 flex-shrink-0" />
                      <span className="font-light">{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Section */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase font-mono font-bold text-zinc-500 tracking-wider">Outils Clés à Déployer :</h4>
                <div className="flex flex-wrap gap-2">
                  {result.tools.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-none bg-zinc-900 border border-neutral-800 text-xs text-brand-cyan font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="border-t border-neutral-850 pt-8 mt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                <button
                  id="audit-reset-btn"
                  onClick={resetAudit}
                  className="text-xs font-mono text-brand-emerald hover:text-emerald-400 flex items-center gap-2 uppercase tracking-widest transition-colors cursor-pointer border border-brand-emerald/30 px-4 py-3 rounded-none bg-brand-emerald/5"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Recommencer / Modifier mes choix
                </button>

                <a
                  id="audit-cta-whatsapp"
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-none font-mono text-xs uppercase tracking-widest bg-brand-emerald text-black hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 group w-full sm:w-auto font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  <Smartphone className="w-4 h-4 text-black animate-pulse" />
                  <span>Envoyer ma stratégie à Isidore</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
