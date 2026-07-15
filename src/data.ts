import { Project, ServiceCard, AuditQuestion } from './types';

export const SERVICES: ServiceCard[] = [
  {
    id: 'young-beginners',
    title: 'Jeunes & Débutants',
    targetAudience: 'Pour ceux qui veulent lancer leur carrière digitale',
    description: 'Bâtissez des fondations solides et apprenez à transformer les technologies de pointe en sources de revenus tangibles dès aujourd\'hui.',
    features: [
      'Apprentissage accéléré des bases du digital',
      'Maîtrise des outils d\'Intelligence Artificielle',
      'Création de contenu viral & techniques d\'attention',
      'Développement de compétences recherchées sur le marché'
    ],
    buttonText: 'Commencer mon parcours',
    buttonLink: '#contact',
    accentColor: 'cyan'
  },
  {
    id: 'creators',
    title: 'Créateurs de Contenu',
    targetAudience: 'Pour les influenceurs et créateurs ambitieux',
    description: 'Automatisez vos flux de travail, optimisez votre référencement et dominez l\'écosystème social grâce à des technologies intelligentes.',
    features: [
      'YouTube & Facebook Automation (Faceless channels)',
      'Stratégie de contenu multi-plateformes (TikTok/Shorts)',
      'Optimisation SEO avancée pour maximiser la portée',
      'Systèmes de monétisation & tunnels de conversion automatisés'
    ],
    buttonText: 'Travailler ensemble',
    buttonLink: '#contact',
    isRecommended: true,
    accentColor: 'emerald'
  },
  {
    id: 'brands-enterprises',
    title: 'Entreprises & Marques',
    targetAudience: 'Pour les marques prêtes à scaler leur croissance',
    description: 'Intégrez l\'IA au cœur de vos processus de communication et imposez une image de marque forte, mémorable et omni-présente.',
    features: [
      'Visibilité digitale multi-plateformes intensive',
      'Intégration d\'outils IA personnalisés dans vos équipes',
      'Production de vidéos UGC (User Generated Content) à haute conversion',
      'Consulting stratégique & automatisation des processus internes'
    ],
    buttonText: 'Discuter du projet',
    buttonLink: '#contact',
    accentColor: 'purple'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'technova',
    title: 'Technova Learning',
    category: 'saas',
    description: 'Une plateforme d\'e-learning moderne conçue pour révolutionner l\'apprentissage des compétences digitales avec des systèmes de monétisation intégrés.',
    longDescription: 'Technova Learning est un système complet de gestion de l\'apprentissage (LMS) orienté vers le futur. Il intègre des tunnels de conversion intelligents, des processus d\'onboarding automatisés et des récompenses par gamification pour maximiser le taux de rétention des élèves.',
    tags: ['React', 'SaaS', 'E-Learning', 'Stripe API', 'Automation'],
    metrics: '+45% engagement étudiant',
    mediaType: 'interactive',
    placeholderColor: 'rgba(6, 182, 212, 0.15)',
    image: '/images/technova.png',
    features: ['Accès sécurisé et cours en streaming', 'Examens dynamiques assistés par IA', 'Tableau de bord financier pour les formateurs', 'Relances emails automatiques intégrées']
  },
  {
    id: 'dukaio',
    title: 'Dukaio',
    category: 'saas',
    description: 'Système automatisé de monétisation et de gestion de flux financiers pour créateurs de contenu et plateformes digitales.',
    longDescription: 'Dukaio élimine la friction financière pour les créateurs de contenu. Ce SaaS permet de générer des liens de paiement automatisés, de segmenter les donateurs/clients, et d\'automatiser la facturation internationale et la comptabilité multi-devises en arrière-plan.',
    tags: ['NextJS', 'Fintech', 'Micro-SaaS', 'Webhooks', 'Dashboard'],
    metrics: '+30% de revenus récurrents captés',
    mediaType: 'interactive',
    placeholderColor: 'rgba(16, 185, 129, 0.15)',
    image: '/images/dukaio.png',
    features: ['Intégration de passerelles de paiement tierces', 'Facturation automatisée par email', 'Statistiques de conversion en temps réel', 'Interface utilisateur optimisée pour mobile']
  },
  {
    id: 'ugc-viral',
    title: 'UGC & Création de Contenu Viral',
    category: 'ugc',
    description: 'Conception de vidéos à forte rétention et d\'accroches psychologiques qui boostent les ventes de produits physiques et digitaux.',
    longDescription: 'Création de vidéos UGC (User Generated Content) taillées sur mesure pour TikTok Ads, Reels et Shorts. Maîtrise avancée des codes de l\'attention rapide, de l\'écriture de scripts persuasifs et de l\'utilisation stratégique du sound design.',
    tags: ['UGC', 'TikTok Ads', 'Facebook Ads', 'Marketing Psychologique'],
    metrics: 'Plus de 2.5M+ vues cumulées',
    mediaType: 'video',
    placeholderColor: 'rgba(147, 51, 234, 0.15)',
    softwareUsed: ['CapCut Pro', 'Adobe After Effects', 'Adobe Photoshop'],
    features: ['Rédaction de scripts d\'accroches (Hooks)', 'Montage dynamique à forte rétention', 'Color grading et sound design captivant', 'A/B testing de miniatures et de formats publicitaires']
  },
  {
    id: 'youtube-automation',
    title: 'YouTube & Facebook Automation',
    category: 'automation',
    description: 'Lancement et gestion de chaînes d\'automatisation générant de l\'attention et des revenus publicitaires en pilote automatique.',
    longDescription: 'Mise en place d\'usines de création de contenu : de l\'analyse de niches rentables via des algorithmes propriétaires au scriptage par IA, jusqu\'au doublage et au montage externalisé de vidéos hautement virales.',
    tags: ['YouTube Automation', 'SEO Vidéo', 'IA Générative', 'Passive Income'],
    metrics: 'Revenus publicitaires réguliers',
    mediaType: 'image',
    placeholderColor: 'rgba(236, 72, 153, 0.15)',
    image: '/images/youtube-automation.png',
    features: ['Recherche de niches sous-exploitées par IA', 'Automatisation du flux de production vidéo', 'SEO YouTube poussé (Titres, tags, descriptions)', 'Stratégie de republication automatisée sur Facebook Watch']
  }
];

export const AUDIT_QUESTIONS: AuditQuestion[] = [
  {
    id: 'profile',
    text: 'Quel est votre profil ou votre objectif principal ?',
    options: [
      { value: 'beginner', label: 'Jeune / Débutant', description: 'Je veux apprendre les compétences clés et commencer à générer mes premiers revenus sur Internet.' },
      { value: 'creator', label: 'Créateur de contenu', description: 'Je veux automatiser ma production, scaler mon audience et maximiser ma monétisation (YouTube/TikTok).' },
      { value: 'business', label: 'Entrepreneur / Entreprise', description: 'Je veux intégrer l\'IA, déléguer/automatiser des tâches et accroître ma visibilité digitale.' }
    ]
  },
  {
    id: 'painpoint',
    text: 'Quel est votre plus grand défi actuel ?',
    options: [
      { value: 'skills', label: 'Manque de compétences techniques/IA', description: 'Je ne sais pas quels outils utiliser ni comment les exploiter efficacement.' },
      { value: 'time', label: 'Manque de temps ou surcharge de travail', description: 'La création de contenu et les tâches répétitives me prennent tout mon temps.' },
      { value: 'visibility', label: 'Manque de visibilité et de conversion', description: 'Mes offres ou mes contenus n\'atteignent pas assez de personnes ou ne vendent pas.' }
    ]
  }
];

export const ABOUT_PARAGRAPHS = [
  "Mon parcours a commencé par une passion dévorante pour la technique pure. Très jeune, je passais des nuits entières à écrire du code en C++ et Python, et à assembler des microcontrôleurs Arduino pour concevoir des prototypes électroniques. Cette soif de comprendre le fonctionnement intime des machines m'a naturellement mené à l'obtention de mon Baccalauréat et de mon Diplôme de Technicien (DT) l'année dernière. C'est cette solide rigueur d'ingénieur qui constitue aujourd'hui la fondation inébranlable de toutes mes créations.",
  "Cependant, j'ai rapidement réalisé une vérité fondamentale : la puissance technologique n'atteint son plein potentiel que lorsqu'elle est connectée au business digital. Internet a ouvert les portes d'un terrain de jeu sans limites. J'ai alors fondé ma propre société offshore, Dolapo ECOM LLC, marquant mon entrée officielle dans l'entrepreneuriat mondial. J'ai converti mon expertise technique en leviers de conversion commerciale : maîtrise absolue des IA génératives, développement d'architectures SaaS d'envergure (comme Technova Learning et Dukaio), et création de tunnels de vente ultra-optimisés.",
  "Aujourd'hui, je me situe exactement à la convergence de l'ingénierie logicielle, du marketing de l'attention et de la psychologie de vente. Qu'il s'agisse de concevoir des systèmes d'automatisation YouTube et Facebook de pointe, d'éditer des vidéos UGC à fort pouvoir d'achat, ou d'implémenter des architectures d'IA pour optimiser les processus d'affaires, mon approche reste chirurgicale. Mon but ultime : éliminer le superflu par l'automatisation, capturer l'attention des audiences cibles, et démultiplier de manière exponentielle la croissance de vos projets."
];
