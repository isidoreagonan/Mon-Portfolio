import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as Award, S as BookOpen, T as ArrowLeft, _ as Cpu, a as Sparkles, b as Check, c as RefreshCw, g as ExternalLink, h as FileText, i as Tag, l as Play, m as Flame, n as X, o as Smartphone, r as TrendingUp, v as CircleQuestionMark, w as ArrowRight, x as Bot, y as CircleCheckBig } from "../_libs/lucide-react.mjs";
import { n as Navbar, t as ContactSection } from "./ContactSection-Bz7ZuAV1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CYhrUYZY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HeroSection() {
	const handleScrollTo = (id) => {
		const element = document.getElementById(id);
		if (element) {
			const offset = 80;
			const bodyRect = document.body.getBoundingClientRect().top;
			const offsetPosition = element.getBoundingClientRect().top - bodyRect - offset;
			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth"
			});
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "accueil",
		className: "relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-emerald/5 blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-brand-cyan/5 blur-[100px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid-pattern pointer-events-none opacity-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center space-x-2 px-4 py-1.5 rounded-none bg-brand-emerald/10 border border-brand-emerald/20 mb-8 animate-pulse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-brand-emerald" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-mono font-medium tracking-widest text-brand-emerald uppercase",
							children: "// DOLAPO ECOM LLC // SYSTEM_INIT_2026"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid lg:grid-cols-12 gap-10 lg:gap-12 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-7 min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									id: "hero-title",
									className: "font-black leading-[1] tracking-tighter uppercase italic mb-6 text-[2.25rem] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-white break-words",
										children: "AGONAN ISIDORE ABRAHAM"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block mt-3 text-brand-emerald text-[1.5rem] sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl",
										children: "IA, Automatisation & Business Digital"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									id: "hero-subtitle",
									className: "text-base sm:text-lg text-neutral-400 font-sans font-light leading-relaxed mb-10 max-w-2xl",
									children: "Je connecte l'ingénierie technique (code, algorithmes) au marketing d'impact. Je crée des systèmes autonomes, des vidéos UGC virales et des SaaS qui captent l'attention et multiplient vos revenus."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										id: "hero-cta-projects",
										onClick: () => handleScrollTo("projets"),
										className: "px-8 py-4 rounded-none font-mono text-xs uppercase tracking-widest text-black bg-brand-emerald hover:bg-emerald-400 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] transition-all duration-300 text-center flex items-center justify-center space-x-3 group cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Découvrir mes projets" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4 text-black group-hover:translate-x-1.5 transition-transform" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										id: "hero-cta-contact",
										onClick: () => handleScrollTo("contact"),
										className: "px-8 py-4 rounded-none font-mono text-xs uppercase tracking-widest text-brand-emerald bg-transparent border border-brand-emerald/50 hover:bg-brand-emerald/10 transition-all text-center flex items-center justify-center space-x-2 cursor-pointer",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Travailler ensemble" })
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-5 relative flex justify-center lg:justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative w-64 sm:w-80 lg:w-full lg:max-w-sm group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-2 border border-brand-emerald/30 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-2 border border-brand-cyan/20 -translate-x-4 -translate-y-4 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-brand-emerald/20 blur-3xl scale-90 opacity-60" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative overflow-hidden bg-neutral-900 border border-neutral-800",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: "/images/isidore.png",
												alt: "Agonan Isidore Abraham — Fondateur Dolapo ECOM LLC",
												className: "w-full h-auto object-cover transition-all duration-700 hover:scale-105",
												loading: "eager"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute top-3 left-3 px-2 py-1 bg-black/70 backdrop-blur-sm border border-brand-emerald/40",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-[10px] uppercase tracking-widest text-brand-emerald",
													children: "// FOUNDER_01"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute bottom-3 right-3 px-2 py-1 bg-brand-emerald text-black",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-[10px] uppercase tracking-widest font-bold",
													children: "● LIVE"
												})
											})
										]
									})
								]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-neutral-800 pt-12 mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-zinc-500 font-mono text-xs uppercase tracking-widest mb-6",
							children: "// LES CHIFFRES DE L'IMPACT :"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 md:grid-cols-4 gap-4",
							children: [
								{
									value: "2.5M+",
									label: "Vues UGC",
									desc: "Contenu viral & hooks",
									icon: TrendingUp,
									color: "text-brand-emerald"
								},
								{
									value: "2 SaaS",
									label: "Plateformes",
									desc: "Technova & Dukaio",
									icon: Cpu,
									color: "text-brand-cyan"
								},
								{
									value: "LLC",
									label: "Dolapo ECOM",
									desc: "Structure offshore",
									icon: Award,
									color: "text-purple-400"
								},
								{
									value: "100%",
									label: "Automatisation",
									desc: "Processus & SEO",
									icon: Bot,
									color: "text-amber-400"
								}
							].map((stat, i) => {
								const IconComp = stat.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5 rounded-none bg-neutral-900/40 border border-neutral-800 hover:border-brand-emerald/50 transition-all group",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center space-x-3 mb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `p-2 rounded-none bg-white/5 ${stat.color} group-hover:scale-110 transition-transform`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComp, { className: "w-4 h-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[10px] text-zinc-500 uppercase tracking-widest",
												children: stat.label
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-2xl sm:text-3xl font-display font-black text-white tracking-tight uppercase italic",
											children: stat.value
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-zinc-400 mt-1 font-light leading-none",
											children: stat.desc
										})
									]
								}, i);
							})
						})]
					})
				]
			})
		]
	});
}
var SERVICES = [
	{
		id: "young-beginners",
		title: "Jeunes & Débutants",
		targetAudience: "Pour ceux qui veulent lancer leur carrière digitale",
		description: "Bâtissez des fondations solides et apprenez à transformer les technologies de pointe en sources de revenus tangibles dès aujourd'hui.",
		features: [
			"Apprentissage accéléré des bases du digital",
			"Maîtrise des outils d'Intelligence Artificielle",
			"Création de contenu viral & techniques d'attention",
			"Développement de compétences recherchées sur le marché"
		],
		buttonText: "Commencer mon parcours",
		buttonLink: "#contact",
		accentColor: "cyan"
	},
	{
		id: "creators",
		title: "Créateurs de Contenu",
		targetAudience: "Pour les influenceurs et créateurs ambitieux",
		description: "Automatisez vos flux de travail, optimisez votre référencement et dominez l'écosystème social grâce à des technologies intelligentes.",
		features: [
			"YouTube & Facebook Automation (Faceless channels)",
			"Stratégie de contenu multi-plateformes (TikTok/Shorts)",
			"Optimisation SEO avancée pour maximiser la portée",
			"Systèmes de monétisation & tunnels de conversion automatisés"
		],
		buttonText: "Travailler ensemble",
		buttonLink: "#contact",
		isRecommended: true,
		accentColor: "emerald"
	},
	{
		id: "brands-enterprises",
		title: "Entreprises & Marques",
		targetAudience: "Pour les marques prêtes à scaler leur croissance",
		description: "Intégrez l'IA au cœur de vos processus de communication et imposez une image de marque forte, mémorable et omni-présente.",
		features: [
			"Visibilité digitale multi-plateformes intensive",
			"Intégration d'outils IA personnalisés dans vos équipes",
			"Production de vidéos UGC (User Generated Content) à haute conversion",
			"Consulting stratégique & automatisation des processus internes"
		],
		buttonText: "Discuter du projet",
		buttonLink: "#contact",
		accentColor: "purple"
	}
];
var PROJECTS = [
	{
		id: "technova",
		title: "Technova Learning",
		category: "saas",
		description: "Une plateforme d'e-learning moderne conçue pour révolutionner l'apprentissage des compétences digitales avec des systèmes de monétisation intégrés.",
		longDescription: "Technova Learning est un système complet de gestion de l'apprentissage (LMS) orienté vers le futur. Il intègre des tunnels de conversion intelligents, des processus d'onboarding automatisés et des récompenses par gamification pour maximiser le taux de rétention des élèves.",
		tags: [
			"React",
			"SaaS",
			"E-Learning",
			"Stripe API",
			"Automation"
		],
		metrics: "+45% engagement étudiant",
		mediaType: "interactive",
		placeholderColor: "rgba(6, 182, 212, 0.15)",
		image: "/images/technova.png",
		features: [
			"Accès sécurisé et cours en streaming",
			"Examens dynamiques assistés par IA",
			"Tableau de bord financier pour les formateurs",
			"Relances emails automatiques intégrées"
		]
	},
	{
		id: "dukaio",
		title: "Dukaio",
		category: "saas",
		description: "Système automatisé de monétisation et de gestion de flux financiers pour créateurs de contenu et plateformes digitales.",
		longDescription: "Dukaio élimine la friction financière pour les créateurs de contenu. Ce SaaS permet de générer des liens de paiement automatisés, de segmenter les donateurs/clients, et d'automatiser la facturation internationale et la comptabilité multi-devises en arrière-plan.",
		tags: [
			"NextJS",
			"Fintech",
			"Micro-SaaS",
			"Webhooks",
			"Dashboard"
		],
		metrics: "+30% de revenus récurrents captés",
		mediaType: "interactive",
		placeholderColor: "rgba(16, 185, 129, 0.15)",
		image: "/images/dukaio.png",
		features: [
			"Intégration de passerelles de paiement tierces",
			"Facturation automatisée par email",
			"Statistiques de conversion en temps réel",
			"Interface utilisateur optimisée pour mobile"
		]
	},
	{
		id: "ugc-viral",
		title: "UGC & Création de Contenu Viral",
		category: "ugc",
		description: "Conception de vidéos à forte rétention et d'accroches psychologiques qui boostent les ventes de produits physiques et digitaux.",
		longDescription: "Création de vidéos UGC (User Generated Content) taillées sur mesure pour TikTok Ads, Reels et Shorts. Maîtrise avancée des codes de l'attention rapide, de l'écriture de scripts persuasifs et de l'utilisation stratégique du sound design.",
		tags: [
			"UGC",
			"TikTok Ads",
			"Facebook Ads",
			"Marketing Psychologique"
		],
		metrics: "Plus de 2.5M+ vues cumulées",
		mediaType: "video",
		placeholderColor: "rgba(147, 51, 234, 0.15)",
		softwareUsed: [
			"CapCut Pro",
			"Adobe After Effects",
			"Adobe Photoshop"
		],
		features: [
			"Rédaction de scripts d'accroches (Hooks)",
			"Montage dynamique à forte rétention",
			"Color grading et sound design captivant",
			"A/B testing de miniatures et de formats publicitaires"
		]
	},
	{
		id: "youtube-automation",
		title: "YouTube & Facebook Automation",
		category: "automation",
		description: "Lancement et gestion de chaînes d'automatisation générant de l'attention et des revenus publicitaires en pilote automatique.",
		longDescription: "Mise en place d'usines de création de contenu : de l'analyse de niches rentables via des algorithmes propriétaires au scriptage par IA, jusqu'au doublage et au montage externalisé de vidéos hautement virales.",
		tags: [
			"YouTube Automation",
			"SEO Vidéo",
			"IA Générative",
			"Passive Income"
		],
		metrics: "Revenus publicitaires réguliers",
		mediaType: "image",
		placeholderColor: "rgba(236, 72, 153, 0.15)",
		image: "/images/youtube-automation.png",
		features: [
			"Recherche de niches sous-exploitées par IA",
			"Automatisation du flux de production vidéo",
			"SEO YouTube poussé (Titres, tags, descriptions)",
			"Stratégie de republication automatisée sur Facebook Watch"
		]
	}
];
var AUDIT_QUESTIONS = [{
	id: "profile",
	text: "Quel est votre profil ou votre objectif principal ?",
	options: [
		{
			value: "beginner",
			label: "Jeune / Débutant",
			description: "Je veux apprendre les compétences clés et commencer à générer mes premiers revenus sur Internet."
		},
		{
			value: "creator",
			label: "Créateur de contenu",
			description: "Je veux automatiser ma production, scaler mon audience et maximiser ma monétisation (YouTube/TikTok)."
		},
		{
			value: "business",
			label: "Entrepreneur / Entreprise",
			description: "Je veux intégrer l'IA, déléguer/automatiser des tâches et accroître ma visibilité digitale."
		}
	]
}, {
	id: "painpoint",
	text: "Quel est votre plus grand défi actuel ?",
	options: [
		{
			value: "skills",
			label: "Manque de compétences techniques/IA",
			description: "Je ne sais pas quels outils utiliser ni comment les exploiter efficacement."
		},
		{
			value: "time",
			label: "Manque de temps ou surcharge de travail",
			description: "La création de contenu et les tâches répétitives me prennent tout mon temps."
		},
		{
			value: "visibility",
			label: "Manque de visibilité et de conversion",
			description: "Mes offres ou mes contenus n'atteignent pas assez de personnes ou ne vendent pas."
		}
	]
}];
function ServicesSection() {
	const getIcon = (id, colorClass) => {
		switch (id) {
			case "young-beginners": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: `w-6 h-6 ${colorClass}` });
			case "creators": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: `w-6 h-6 ${colorClass} animate-bounce` });
			case "brands-enterprises": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: `w-6 h-6 ${colorClass}` });
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: `w-6 h-6 ${colorClass}` });
		}
	};
	const getAccentColors = (color) => {
		switch (color) {
			case "cyan": return {
				border: "border-neutral-800 hover:border-brand-cyan/50",
				badgeBg: "bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20",
				btnBg: "bg-transparent text-brand-cyan hover:bg-brand-cyan hover:text-black border-brand-cyan/30 hover:border-brand-cyan",
				text: "text-brand-cyan",
				shadow: ""
			};
			case "emerald": return {
				border: "border-brand-emerald/50 hover:border-brand-emerald",
				badgeBg: "bg-brand-emerald/20 text-brand-emerald border-brand-emerald/30",
				btnBg: "bg-brand-emerald text-black hover:bg-emerald-400 border-transparent",
				text: "text-brand-emerald",
				shadow: "shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]"
			};
			case "purple": return {
				border: "border-neutral-800 hover:border-purple-400/50",
				badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
				btnBg: "bg-transparent text-purple-400 hover:bg-purple-500 hover:text-black border-purple-500/30 hover:border-purple-500",
				text: "text-purple-400",
				shadow: ""
			};
			default: return {
				border: "border-neutral-800 hover:border-neutral-700",
				badgeBg: "bg-white/5 text-white border-white/10",
				btnBg: "bg-white text-black hover:bg-zinc-100 border-transparent",
				text: "text-white",
				shadow: ""
			};
		}
	};
	const handleScrollToContact = (e) => {
		e.preventDefault();
		const element = document.getElementById("contact");
		if (element) {
			const offset = 80;
			const bodyRect = document.body.getBoundingClientRect().top;
			const offsetPosition = element.getBoundingClientRect().top - bodyRect - offset;
			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth"
			});
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services",
		className: "py-24 bg-neutral-950 relative overflow-hidden border-b border-neutral-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-brand-emerald/5 blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid-pattern pointer-events-none opacity-5" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto px-6 md:px-12 relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-3xl mx-auto mb-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center space-x-1.5 px-3 py-1 rounded-none bg-brand-emerald/10 border border-brand-emerald/20 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 bg-brand-emerald animate-ping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-mono tracking-widest text-brand-emerald uppercase",
								children: "// SERVICES & SOLUTIONS"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "services-heading",
							className: "text-4xl sm:text-6xl font-black uppercase italic tracking-tighter text-white mb-4",
							children: "Pour qui est-ce que je travaille ?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-neutral-400 font-sans font-light max-w-xl mx-auto",
							children: "Des parcours clés en main et des stratégies sur mesure pensés pour maximiser l'impact, automatiser les systèmes et décupler la croissance."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: "services-grid",
					className: "grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch",
					children: SERVICES.map((service) => {
						const colors = getAccentColors(service.accentColor);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							id: `service-card-${service.id}`,
							className: `flex flex-col justify-between rounded-none p-8 md:p-10 transition-all duration-300 relative overflow-hidden group bg-neutral-900/40 border ${colors.border} ${colors.shadow}`,
							children: [
								service.isRecommended && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-12 -right-12 w-28 h-28 bg-brand-emerald/10 blur-2xl rounded-none" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-start mb-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-3.5 rounded-none bg-white/5 border border-white/5 group-hover:bg-brand-emerald/10 transition-colors",
											children: getIcon(service.id, colors.text)
										}), service.isRecommended && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "px-3.5 py-1 rounded-none text-[10px] font-black uppercase tracking-wider bg-brand-emerald text-black flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "w-3.5 h-3.5 fill-black" }), " RECOMMANDÉ"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										id: `service-title-${service.id}`,
										className: "text-2xl font-display font-bold text-white mb-2 tracking-tight group-hover:text-brand-emerald transition-colors",
										children: service.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-mono text-zinc-500 mb-5 uppercase tracking-wider",
										children: service.targetAudience
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-neutral-400 font-sans font-light text-sm leading-relaxed mb-8",
										children: service.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "border-t border-neutral-850 pt-6 mb-8",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "space-y-4",
											children: service.features.map((feature, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start space-x-3 text-sm text-zinc-300",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-1 flex-shrink-0 w-4 h-4 rounded-none bg-white/5 border border-white/10 flex items-center justify-center",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: `w-2.5 h-2.5 ${colors.text}` })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-light",
													children: feature
												})]
											}, idx))
										})
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									id: `service-cta-${service.id}`,
									href: service.buttonLink,
									onClick: handleScrollToContact,
									className: `w-full py-4 px-6 rounded-none text-center text-xs font-mono uppercase tracking-widest border transition-all duration-300 flex items-center justify-center space-x-2 ${colors.btnBg}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: service.buttonText })
								})
							]
						}, service.id);
					})
				})]
			})
		]
	});
}
function ProjectsSection() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("all");
	const [selectedProject, setSelectedProject] = (0, import_react.useState)(null);
	const filteredProjects = PROJECTS.filter((proj) => {
		if (activeTab === "all") return true;
		return proj.category === activeTab;
	});
	const getCategoryLabel = (category) => {
		switch (category) {
			case "saas": return "SaaS Platform";
			case "ugc": return "Vidéo UGC";
			case "automation": return "Automatisation";
			default: return "Tech Projets";
		}
	};
	const getCategoryColor = (category) => {
		switch (category) {
			case "saas": return "text-cyan-400 bg-cyan-500/10 border-cyan-500/20";
			case "ugc": return "text-purple-400 bg-purple-500/10 border-purple-500/20";
			case "automation": return "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20";
			default: return "text-zinc-400 bg-zinc-500/10 border-zinc-500/20";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "projets",
		className: "py-24 bg-gradient-to-b from-[#08080a] to-[#030303] relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-1/4 right-0 w-[450px] h-[450px] rounded-full bg-brand-emerald/5 blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto px-6 md:px-12 relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center space-x-1.5 px-3 py-1 rounded-none bg-brand-emerald/10 border border-brand-emerald/20 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 bg-brand-cyan animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-mono tracking-widest text-brand-emerald uppercase",
								children: "// RÉALISATIONS"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "projects-heading",
							className: "text-4xl sm:text-6xl font-black uppercase italic tracking-tighter text-white",
							children: "Mes Réalisations & Projets"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-neutral-400 font-sans font-light mt-4 max-w-xl",
							children: "Un aperçu de mes écosystèmes SaaS fonctionnels, de mes créations UGC virales et de mes systèmes d'automatisation clés en main."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "projects-tabs",
						className: "flex flex-wrap gap-1 bg-neutral-900 p-1 rounded-none border border-neutral-800 self-start",
						children: [
							{
								id: "all",
								label: "Tous"
							},
							{
								id: "saas",
								label: "Plateformes SaaS"
							},
							{
								id: "ugc",
								label: "UGC & Médias"
							},
							{
								id: "automation",
								label: "Automatisation"
							}
						].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							id: `tab-btn-${tab.id}`,
							onClick: () => setActiveTab(tab.id),
							className: `px-4 py-2 rounded-none text-[10px] font-mono transition-all uppercase tracking-widest cursor-pointer ${activeTab === tab.id ? "bg-brand-emerald text-black font-black shadow-none" : "text-zinc-400 hover:text-white hover:bg-white/5"}`,
							children: tab.label
						}, tab.id))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: "projects-grid",
					className: "grid grid-cols-1 md:grid-cols-2 gap-6",
					children: filteredProjects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: `project-card-${project.id}`,
						className: "group bg-neutral-900/40 rounded-none overflow-hidden border border-neutral-850 hover:border-brand-emerald/50 transition-all duration-300 flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-64 w-full flex items-center justify-center overflow-hidden border-b border-neutral-850 group-hover:opacity-95 transition-opacity",
							style: { background: project.placeholderColor },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent z-10" }),
								project.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: project.image,
									alt: project.title,
									className: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								}),
								!project.image && project.category === "saas" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-[85%] h-[80%] rounded-none bg-zinc-950 border border-neutral-800 p-2.5 flex flex-col shadow-2xl relative translate-y-4 group-hover:translate-y-2 transition-transform duration-500",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-2 pb-1.5 border-b border-white/5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex space-x-1.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-none bg-red-550" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-none bg-yellow-550" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-none bg-green-550" })
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "w-1/2 h-4 rounded-none bg-white/5 text-[8px] flex items-center justify-center font-mono text-zinc-500 truncate",
												children: ["https://", project.id === "technova" ? "technova-learning.com" : "ducatilio.com"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-4" })
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 bg-zinc-900 rounded-none p-2 flex flex-col justify-between overflow-hidden relative",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between items-center border-b border-white/5 pb-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] font-display font-bold text-white uppercase",
													children: project.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[8px] text-brand-cyan bg-brand-cyan/10 px-1 rounded-none",
													children: "PRO"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-3 gap-1.5 my-1 flex-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "bg-white/5 rounded-none p-1 flex flex-col justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[6px] text-zinc-500 uppercase",
															children: "Users"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] font-bold font-mono text-brand-emerald",
															children: "1.2k"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "bg-white/5 rounded-none p-1 flex flex-col justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[6px] text-zinc-500 uppercase",
															children: "SaaS MRR"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] font-bold font-mono text-brand-cyan",
															children: "€4,500"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "bg-white/5 rounded-none p-1 flex flex-col justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[6px] text-zinc-500 uppercase",
															children: "Conversion"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] font-bold font-mono text-purple-400",
															children: "8.4%"
														})]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-6 w-full rounded-none bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[8px] text-brand-emerald font-bold font-mono uppercase tracking-widest",
													children: "SYSTEM ONLINE"
												})
											})
										]
									})]
								}),
								project.category === "ugc" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-[120px] h-[90%] rounded-none bg-zinc-950 border border-neutral-800 p-2 flex flex-col shadow-2xl relative translate-y-6 group-hover:translate-y-4 transition-transform duration-500 overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-12 h-3 bg-black rounded-none mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1 h-1 bg-blue-900" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 rounded-none bg-zinc-900 border border-white/5 overflow-hidden relative flex items-center justify-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "absolute inset-x-2 bottom-2 z-20 flex flex-col text-left",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[8px] font-bold text-white",
														children: "@isidore_ugc"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[6px] text-zinc-300 font-light truncate",
														children: "Faire un hook d'enfer avec CapCut"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center space-x-1 mt-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[6px] text-brand-emerald bg-brand-emerald/10 px-1 rounded-none",
															children: "Conversion"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[5px] text-zinc-400",
															children: "Viral Hook"
														})]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "absolute right-1 top-10 z-20 flex flex-col space-y-2 text-right",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-col items-center",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "w-3.5 h-3.5 rounded-none bg-white/10 flex items-center justify-center text-[5px] text-red-500",
														children: "❤️"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[5px] text-white",
														children: "45k"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-col items-center",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "w-3.5 h-3.5 rounded-none bg-white/10 flex items-center justify-center text-[5px]",
														children: "💬"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[5px] text-white",
														children: "820"
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-8 h-8 rounded-none bg-brand-emerald/20 border border-brand-emerald flex items-center justify-center z-15 group-hover:scale-110 transition-transform",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-3.5 h-3.5 text-brand-emerald fill-brand-emerald" })
											})
										]
									})]
								}),
								!project.image && project.category === "automation" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-[85%] h-[80%] rounded-none bg-zinc-950 border border-zinc-800 p-3.5 flex flex-col shadow-2xl relative translate-y-4 group-hover:translate-y-2 transition-transform duration-500 font-mono text-[9px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center space-x-1.5 text-zinc-500 border-b border-white/5 pb-1.5 mb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "w-3.5 h-3.5 text-brand-emerald" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-zinc-400",
											children: "YT_AUTO_BOT_PROCESSOR.py"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 space-y-1.5 overflow-hidden text-zinc-400",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-zinc-600",
												children: "> initialising niche database..."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-brand-cyan",
												children: "> API connection status: 200 OK"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-brand-emerald",
												children: "> [MODEL] AI script text generated: \"Le secret de l'offshore...\""
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-zinc-400",
												children: "> [CAPCUT] rendering video compilation automatically..."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-purple-400 animate-pulse",
												children: "> UPLOADING TO SCHEDULER: 100% complete"
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `absolute top-4 left-4 z-20 px-2.5 py-1 rounded-none text-[10px] font-black uppercase tracking-widest border ${getCategoryColor(project.category)}`,
									children: getCategoryLabel(project.category)
								}),
								project.metrics && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "absolute bottom-4 right-4 z-20 px-3 py-1 rounded-none text-xs font-mono font-bold bg-zinc-950/95 text-white border border-neutral-800 flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3 text-brand-emerald" }),
										" ",
										project.metrics
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 flex flex-col justify-between flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									id: `project-title-${project.id}`,
									className: "text-2xl font-display font-bold text-white mb-2.5 tracking-tight group-hover:text-brand-emerald transition-colors",
									children: project.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-neutral-400 font-sans font-light text-sm leading-relaxed mb-6",
									children: project.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2 mb-6",
									children: project.tags.map((tag, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1 px-2.5 py-1 rounded-none bg-white/5 border border-white/5 text-[10px] text-zinc-400 font-mono uppercase tracking-wider",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "w-2.5 h-2.5 text-zinc-500" }),
											" ",
											tag
										]
									}, i))
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								id: `project-action-details-${project.id}`,
								onClick: () => setSelectedProject(project),
								className: "w-full py-3.5 rounded-none text-center text-xs font-mono uppercase tracking-widest bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-850 hover:border-brand-emerald/50 transition-all flex items-center justify-center gap-2 group cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-4 h-4 text-zinc-400 group-hover:text-brand-emerald" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "En savoir plus & Démo" })]
							})]
						})]
					}, project.id))
				})]
			}),
			selectedProject && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "project-detail-modal",
				className: "fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: "modal-backdrop",
					onClick: () => setSelectedProject(null),
					className: "fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					id: "modal-card",
					className: "relative w-full max-w-2xl rounded-none bg-neutral-950 border border-brand-emerald/40 p-6 md:p-10 shadow-2xl shadow-black max-h-[90vh] overflow-y-auto z-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							id: "modal-close-btn",
							onClick: () => setSelectedProject(null),
							className: "absolute top-6 right-6 p-2 rounded-none text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-6 h-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `inline-block px-3 py-1 rounded-none text-xs font-mono font-bold border mb-4 ${getCategoryColor(selectedProject.category)}`,
									children: getCategoryLabel(selectedProject.category)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-3xl font-display font-extrabold text-white tracking-tight",
									children: selectedProject.title
								}),
								selectedProject.metrics && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-brand-emerald font-mono text-sm font-semibold mt-1 flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-brand-emerald" }),
										" Impact : ",
										selectedProject.metrics
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6 text-zinc-300 font-sans font-light text-sm md:text-base leading-relaxed",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs uppercase font-mono font-bold text-zinc-500 tracking-wider mb-2",
									children: "PROJET & VISION :"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: selectedProject.longDescription || selectedProject.description })] }),
								selectedProject.features && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs uppercase font-mono font-bold text-zinc-500 tracking-wider mb-3",
									children: "FONCTIONNALITÉS & SPÉCIFICATIONS :"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "grid grid-cols-1 md:grid-cols-2 gap-3",
									children: selectedProject.features.map((feat, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start space-x-2 text-sm text-zinc-300",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-brand-emerald mt-0.5 flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feat })]
									}, idx))
								})] }),
								selectedProject.softwareUsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs uppercase font-mono font-bold text-zinc-500 tracking-wider mb-2",
									children: "LOGICIELS & OUTILS MAÎTRISÉS :"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: selectedProject.softwareUsed.map((sw, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-3 py-1 rounded-none bg-brand-emerald/10 text-brand-emerald text-xs font-mono border border-brand-emerald/20",
										children: sw
									}, idx))
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-zinc-500 font-mono",
								children: "* Lien de démonstration complet modifiable ultérieurement."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								id: "modal-cta-whatsapp",
								href: "https://wa.me/2290157385885?text=Bonjour%20Isidore,%20j'aimerais%20en%20savoir%20plus%20sur%20votre%20projet%20",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "px-6 py-3 rounded-none font-mono text-xs uppercase tracking-widest bg-brand-emerald text-black hover:bg-emerald-400 transition-colors flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Demander une démo live" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-4 h-4" })]
							})]
						})
					]
				})]
			})
		]
	});
}
function InteractiveAudit() {
	const [currentStep, setCurrentStep] = (0, import_react.useState)(0);
	const [selections, setSelections] = (0, import_react.useState)({});
	const [isGenerating, setIsGenerating] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	const handleSelectOption = (questionId, optionValue) => {
		const updatedSelections = {
			...selections,
			[questionId]: optionValue
		};
		setSelections(updatedSelections);
	};
	const handleNextStep = () => {
		const currentQuestion = AUDIT_QUESTIONS[currentStep];
		if (!selections[currentQuestion.id]) return;
		if (currentStep < AUDIT_QUESTIONS.length - 1) setCurrentStep(currentStep + 1);
		else generateStrategy(selections);
	};
	const handlePrevStep = () => {
		if (currentStep > 0) setCurrentStep(currentStep - 1);
	};
	const generateStrategy = (finalSelections) => {
		setIsGenerating(true);
		setTimeout(() => {
			const profile = finalSelections["profile"] || "beginner";
			const painpoint = finalSelections["painpoint"] || "skills";
			let title = "";
			let strategy = "";
			let actions = [];
			let tools = [];
			let timeframe = "";
			if (profile === "beginner") {
				timeframe = "30 jours";
				if (painpoint === "skills") {
					title = "Plan d'Infiltration IA & Compétences Clés";
					strategy = "Votre priorité absolue est d'acquérir rapidement les bases des invites (prompt engineering) et de comprendre l'écosystème IA pour devenir indispensable sur le marché freelance ou l'offshore.";
					actions = [
						"Suivre un cursus accéléré d'automatisation sur Technova Learning.",
						"Maîtriser les bases du Prompt Engineering avec ChatGPT & Claude.",
						"Concevoir vos 3 premiers micro-services à forte valeur ajoutée."
					];
					tools = [
						"ChatGPT",
						"Claude AI",
						"v0.dev",
						"Technova Learning"
					];
				} else if (painpoint === "time") {
					title = "Stratégie de Libération Temporelle & Focus";
					strategy = "Vous vous dispersez dans trop de micro-tâches sans structure. Vous devez automatiser vos flux de recherche et d'organisation pour doubler votre productivité.";
					actions = [
						"Mettre en place un second cerveau digital pour stocker vos idées par IA.",
						"Utiliser des modèles d'IA pour générer vos résumés et scripts en 1 clic.",
						"Bloquer 2 heures d'apprentissage ininterrompues par jour."
					];
					tools = [
						"Notion AI",
						"Make.com",
						"ChatGPT Desktop"
					];
				} else {
					title = "Plan d'Attaque UGC & Monétisation Rapide";
					strategy = "La clé réside dans la conversion. Vous devez maîtriser l'art de capter l'attention pour convertir des vues en commissions d'affiliation ou en ventes.";
					actions = [
						"Analyser les hooks (accroches) des vidéos TikTok à plus d'un million de vues.",
						"Créer vos 5 premières vidéos UGC persuasives à l'aide de CapCut Pro.",
						"Lancer un système de monétisation automatique par micro-SaaS."
					];
					tools = [
						"CapCut Pro",
						"TikTok Creative Center",
						"Dukaio"
					];
				}
			} else if (profile === "creator") {
				timeframe = "45 jours";
				if (painpoint === "skills") {
					title = "Modernisation Technique de Production Automatisée";
					strategy = "Votre flux de travail actuel est trop manuel. Vous devez intégrer l'IA pour déléguer l'écriture de scripts, le montage brut et le SEO vidéo.";
					actions = [
						"Déployer des agents d'IA spécialisés dans l'écriture de scripts à haute rétention.",
						"Automatiser le doublage et la traduction de vos vidéos dans 3 langues.",
						"Configurer un système d'analyse automatique des statistiques de vos concurrents."
					];
					tools = [
						"CapCut Pro",
						"ElevenLabs",
						"ChatGPT API",
						"VidIQ Pro"
					];
				} else if (painpoint === "time") {
					title = "Système d'Automatisation Faceless Youtube & Facebook";
					strategy = "Le secret réside dans le levier algorithmique. Vous devez créer une usine de contenu automatisée qui tourne en tâche de fond sans intervention constante.";
					actions = [
						"Configurer un webhook automatique reliant vos scripts Google Docs à After Effects.",
						"Automatiser la planification et la publication de vidéos Shorts/Reels multi-plateformes.",
						"Mettre en place des modèles de vignettes (miniatures) à taux de clic élevé."
					];
					tools = [
						"Make.com",
						"Adobe Premiere / After Effects",
						"Buffer / Later",
						"Photoshop"
					];
				} else {
					title = "Optimisation du Taux de Conversion & Monétisation";
					strategy = "Vos millions de vues ne sont pas assez rentabilisés. Vous devez implémenter des produits d'info-prenariat ou des abonnements via Dukaio.";
					actions = [
						"Créer une offre de formation ou une communauté exclusive hébergée sur Technova.",
						"Intégrer Dukaio pour capter des paiements de dons et d'abonnements en pilote automatique.",
						"Écrire des séquences de vente d'emails persuasives déclenchées par l'IA."
					];
					tools = [
						"Dukaio",
						"Technova Learning",
						"Stripe",
						"MailerLite AI"
					];
				}
			} else {
				timeframe = "60 jours";
				if (painpoint === "skills") {
					title = "Transformation IA & Onboarding Corporate";
					strategy = "Votre équipe doit être formée aux outils IA génératifs pour réduire de 40% les temps de rédaction, de création graphique et d'analyse de données.";
					actions = [
						"Mettre en place des ateliers d'initiation aux outils IA (Photoshop, Copilot).",
						"Développer des bases de connaissances internes alimentées par IA pour vos clients.",
						"Créer des processus standards (SOPs) d'utilisation de l'IA dans l'entreprise."
					];
					tools = [
						"ChatGPT Enterprise",
						"Adobe Firefly",
						"Microsoft Copilot"
					];
				} else if (painpoint === "time") {
					title = "Automatisation Opérationnelle & Flux de Communication";
					strategy = "Votre entreprise perd des dizaines d'heures dans la saisie de données et la communication manuelle. Intégrons des systèmes de workflows intelligents.";
					actions = [
						"Créer un tunnel d'onboarding client 100% automatisé (Facture -> Contrat -> Slack).",
						"Automatiser la génération de rapports de performance mensuels par script.",
						"Implémenter un robot de tri intelligent des emails entrants par IA."
					];
					tools = [
						"Make.com",
						"Zapier Enterprise",
						"ActiveCampaign",
						"Slack Integrations"
					];
				} else {
					title = "Plan de Domination Visuelle UGC & Omniprésence Digitale";
					strategy = "Pour démultiplier votre chiffre d'affaires, votre marque doit occuper l'espace sur TikTok, Shorts et Instagram avec des vidéos UGC authentiques et persuasives.";
					actions = [
						"Produire une campagne de 15 vidéos UGC par mois axées sur la preuve sociale.",
						"Optimiser la structure SEO de votre site web pour acquérir du trafic passif.",
						"Intégrer l'IA pour recycler un seul contenu de blog en 10 capsules vidéo virales."
					];
					tools = [
						"CapCut Pro",
						"TikTok Ads Manager",
						"SEO Surfer AI",
						"After Effects"
					];
				}
			}
			setResult({
				title,
				strategy,
				actions,
				tools,
				timeframe
			});
			setIsGenerating(false);
		}, 1500);
	};
	const resetAudit = () => {
		setSelections({});
		setCurrentStep(0);
		setResult(null);
	};
	const getWhatsAppLink = () => {
		if (!result) return "";
		const message = `Bonjour Isidore ! Je viens de générer ma stratégie personnalisée sur ton portfolio :
• Profil : ${selections["profile"] === "beginner" ? "Jeune / Débutant" : selections["profile"] === "creator" ? "Créateur de contenu" : "Entreprise / Marque"}
• Défi : ${selections["painpoint"] === "skills" ? "Manque de compétences IA" : selections["painpoint"] === "time" ? "Manque de temps" : "Manque de visibilité"}
• Plan recommandé : ${result.title}
• Temps estimé : ${result.timeframe}

J'aimerais en discuter avec toi pour la mettre en œuvre !`;
		return `https://wa.me/2290157385885?text=${encodeURIComponent(message)}`;
	};
	const currentQuestion = AUDIT_QUESTIONS[currentStep];
	const currentSelectedValue = currentQuestion ? selections[currentQuestion.id] : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "audit",
		className: "py-24 bg-neutral-950 relative overflow-hidden border-b border-neutral-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-cyan/5 blur-[140px] rounded-full pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid-pattern pointer-events-none opacity-5" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-4xl mx-auto px-6 md:px-12 relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center space-x-1.5 px-3 py-1 rounded-none bg-brand-emerald/10 border border-brand-emerald/20 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 bg-brand-cyan" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-mono tracking-widest text-brand-emerald uppercase",
								children: "// AUDIT INTERACTIF"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "audit-heading",
							className: "text-4xl sm:text-6xl font-black uppercase italic tracking-tighter text-white",
							children: "Bâtissez votre Stratégie de Croissance"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-neutral-400 font-sans font-light mt-4 max-w-xl mx-auto",
							children: "Sélectionnez vos objectifs et vos blocages actuels pour obtenir un plan d'action d'automatisation sur mesure en quelques secondes."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					id: "audit-widget-card",
					className: "rounded-none bg-[#09090c] border border-neutral-800 p-8 md:p-12 shadow-none relative overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-0 left-0 w-full h-1 bg-white/5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full bg-brand-emerald rounded-none transition-all duration-500",
								style: { width: `${(currentStep + (result ? 1 : 0)) / (AUDIT_QUESTIONS.length + 1) * 100}%` }
							})
						}),
						!result && !isGenerating && currentQuestion && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							id: "audit-questions-flow",
							className: "space-y-8 animate-fadeIn",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center text-xs font-mono text-zinc-500 uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center space-x-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"Étape ",
											currentStep + 1,
											" de ",
											AUDIT_QUESTIONS.length
										] }), currentStep > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: handlePrevStep,
											className: "inline-flex items-center space-x-1.5 text-zinc-400 hover:text-white border border-white/10 px-2.5 py-1 rounded-none transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Étape Précédente" })]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-brand-cyan",
										children: "// Questions en cours..."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-display font-bold text-white tracking-tight leading-tight",
									children: currentQuestion.text
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-1 gap-4 mt-6",
									children: currentQuestion.options.map((opt) => {
										const isSelected = selections[currentQuestion.id] === opt.value;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											id: `audit-option-${opt.value}`,
											onClick: () => handleSelectOption(currentQuestion.id, opt.value),
											className: `w-full text-left p-5 rounded-none border transition-all duration-300 group flex items-start space-x-4 cursor-pointer ${isSelected ? "bg-brand-emerald/15 border-brand-emerald shadow-[0_0_20px_rgba(16,185,129,0.15)] text-white font-bold" : "bg-zinc-950 border-neutral-850 hover:border-brand-emerald/40 hover:bg-neutral-900 text-zinc-300"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `w-5 h-5 rounded-none border flex items-center justify-center mt-1 flex-shrink-0 transition-colors ${isSelected ? "border-brand-emerald bg-brand-emerald text-black shadow-[0_0_8px_rgba(16,185,129,0.4)]" : "border-white/20 group-hover:border-brand-emerald"}`,
												children: isSelected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 font-black text-black stroke-[3px]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2.5 h-2.5 rounded-none bg-brand-emerald opacity-0 group-hover:opacity-100 transition-opacity" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `font-display font-bold text-base block transition-colors ${isSelected ? "text-brand-emerald" : "text-white group-hover:text-brand-emerald"}`,
													children: opt.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-zinc-400 font-sans font-light text-xs sm:text-sm mt-1 block",
													children: opt.description
												})]
											})]
										}, opt.value);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between pt-6 border-t border-neutral-850 mt-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: currentStep > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: handlePrevStep,
										className: "px-5 py-2.5 rounded-none text-xs font-mono uppercase tracking-widest border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition-all flex items-center space-x-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Retour" })]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-mono text-zinc-600 uppercase",
										children: "Choisissez une option ci-dessus"
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center space-x-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: handleNextStep,
											disabled: !currentSelectedValue,
											className: `px-6 py-3 rounded-none text-xs font-mono uppercase tracking-widest flex items-center space-x-2 transition-all ${currentSelectedValue ? "bg-brand-emerald text-black hover:bg-brand-emerald/90 shadow-[0_0_15px_rgba(16,185,129,0.3)] cursor-pointer" : "bg-zinc-900 border border-neutral-800 text-zinc-600 cursor-not-allowed opacity-60"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currentStep < AUDIT_QUESTIONS.length - 1 ? "Étape Suivante" : "Générer ma stratégie" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5" })]
										})
									})]
								})
							]
						}),
						isGenerating && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							id: "audit-generating-loader",
							className: "py-16 flex flex-col items-center justify-center text-center space-y-6 animate-fadeIn",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "w-12 h-12 text-brand-emerald animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-display font-bold text-white tracking-tight",
									children: "Analyse de vos données d'affaires..."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-zinc-500 font-mono text-xs uppercase tracking-widest",
									children: "Déploiement d'algorithmes stratégiques & automatisation du plan"
								})]
							})]
						}),
						result && !isGenerating && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							id: "audit-results-panel",
							className: "space-y-8 animate-fadeIn",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-850 pb-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center space-x-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-2.5 py-1 rounded-none text-[10px] font-mono font-bold uppercase bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20",
											children: "STRATÉGIE RECOMMANDÉE"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs font-mono text-zinc-400",
											children: ["Profil: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-white font-semibold",
												children: selections["profile"] === "beginner" ? "Jeune / Débutant" : selections["profile"] === "creator" ? "Créateur de contenu" : "Entreprise"
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl sm:text-3xl font-display font-extrabold text-white mt-2.5 tracking-tight",
										children: result.title
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-white/5 border border-white/10 p-3 rounded-none text-center self-start sm:self-center font-mono",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-zinc-500 uppercase block",
											children: "Échéancier"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-base font-bold text-brand-cyan",
											children: result.timeframe
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-xs uppercase font-mono font-bold text-zinc-500 tracking-wider",
										children: "Ligne Directrice :"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-neutral-300 font-sans font-light text-sm sm:text-base leading-relaxed",
										children: result.strategy
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-xs uppercase font-mono font-bold text-zinc-500 tracking-wider",
										children: "Feuille de Route (Plan d'Action) :"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-1 gap-3",
										children: result.actions.map((act, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start space-x-3 text-sm text-zinc-300",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "w-5 h-5 text-brand-emerald mt-0.5 flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-light",
												children: act
											})]
										}, idx))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-xs uppercase font-mono font-bold text-zinc-500 tracking-wider",
										children: "Outils Clés à Déployer :"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: result.tools.map((t, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-3 py-1 rounded-none bg-zinc-900 border border-neutral-800 text-xs text-brand-cyan font-mono",
											children: t
										}, idx))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-neutral-850 pt-8 mt-6 flex flex-col sm:flex-row items-center justify-between gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										id: "audit-reset-btn",
										onClick: resetAudit,
										className: "text-xs font-mono text-brand-emerald hover:text-emerald-400 flex items-center gap-2 uppercase tracking-widest transition-colors cursor-pointer border border-brand-emerald/30 px-4 py-3 rounded-none bg-brand-emerald/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "w-3.5 h-3.5" }), " Recommencer / Modifier mes choix"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										id: "audit-cta-whatsapp",
										href: getWhatsAppLink(),
										target: "_blank",
										rel: "noopener noreferrer",
										className: "px-6 py-4 rounded-none font-mono text-xs uppercase tracking-widest bg-brand-emerald text-black hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 group w-full sm:w-auto font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "w-4 h-4 text-black animate-pulse" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Envoyer ma stratégie à Isidore" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" })
										]
									})]
								})
							]
						})
					]
				})]
			})
		]
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "app-root",
		className: "min-h-screen bg-[#030303] text-zinc-100 overflow-x-hidden selection:bg-brand-emerald selection:text-black",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-brand-emerald/5 to-transparent pointer-events-none z-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main-content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveAudit, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
		]
	});
}
//#endregion
export { HomePage as component };
