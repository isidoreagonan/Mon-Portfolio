import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/mon-histoire")({
  head: () => ({
    meta: [
      { title: "Mon Histoire — Agonan Isidore Abraham" },
      {
        name: "description",
        content:
          "Du CAP national aux SaaS africains : l'histoire d'Agonan Isidore Abraham, fondateur de Dolapo ECOM LLC, entre technique, IA et business digital.",
      },
      { property: "og:title", content: "Mon Histoire — Agonan Isidore Abraham" },
      {
        property: "og:description",
        content:
          "Le parcours du technicien devenu entrepreneur : CAP 4ᵉ national, BAC F3, DT, puis Dolapo ECOM LLC, Technova & Dukaio.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MonHistoirePage,
});

const serif = { fontFamily: '"Fraunces", "Times New Roman", serif' };

type Chapter = {
  n: string;
  kicker: string;
  titleWhite: string;
  titleAccent: string;
  paragraphs: string[];
  quote: string;
  tags: string[];
};

const CHAPTERS: Chapter[] = [
  {
    n: "01",
    kicker: "L'ORIGINE — UN GAMIN QUI COMPRENAIT VITE",
    titleWhite: "16 sur 20 au CAP.",
    titleAccent: "4ᵉ du pays, sans forcer.",
    paragraphs: [
      "L'école n'était pas un combat pour moi — c'était un jeu de logique. Je n'ai jamais été le plus travailleur de ma classe, mais j'étais souvent celui qui comprenait avant les autres. Au CAP, je termine avec 16 de moyenne et 4ᵉ sur le plan national.",
      "Ce résultat n'était pas un accident. C'était le premier signe d'un fonctionnement qui m'a suivi partout : observer, décortiquer, aller à l'essentiel. Le reste du temps, je le passais à démonter des objets, à comprendre comment les choses marchaient vraiment.",
    ],
    quote:
      "« Je ne travaillais pas plus que les autres. Je faisais juste de mon mieux — et mon mieux allait chercher plus loin. »",
    tags: ["CAP", "16 / 20", "4ᵉ National"],
  },
  {
    n: "02",
    kicker: "LA FORMATION TECHNIQUE — BAC F3 & DT",
    titleWhite: "BAC F3, puis DT à 14.",
    titleAccent: "Toujours dans les 5 premiers.",
    paragraphs: [
      "J'ai choisi la série F3 : électronique, électrotechnique, la voie où l'on ne peut pas mentir à la réalité. Un circuit fonctionne ou il ne fonctionne pas. Ce cadre m'a forgé une discipline de fer : d'abord comprendre, ensuite construire.",
      "Le Diplôme de Technicien tombe à 14 de moyenne, et encore une fois parmi les 5 premiers de la promotion. Arduino, C++, Python, schémas, soudure — je ne me contentais plus des cours, j'expérimentais chez moi jusqu'à ce que les composants me parlent.",
    ],
    quote:
      "« La technique m'a appris à respecter le réel. Ce qui ne fonctionne pas, on ne le maquille pas — on le corrige. »",
    tags: ["BAC F3", "Diplôme de Technicien", "14 / 20", "Top 5"],
  },
  {
    n: "03",
    kicker: "LE DÉCLIC — INTERNET COMME NOUVEAU LABORATOIRE",
    titleWhite: "J'ai vu un monde",
    titleAccent: "plus grand que ma ville.",
    paragraphs: [
      "Un soir, en cherchant un tutoriel Arduino, je tombe sur des créateurs qui vivaient de leur savoir en ligne. Pas des célébrités — des inconnus, avec du contenu propre et un système derrière. Ce jour-là, quelque chose s'est déclenché.",
      "J'ai compris que mes compétences techniques n'étaient qu'un point de départ. Le vrai levier, c'était Internet : une salle de classe sans murs, un marché sans frontières, et surtout — un endroit où la méthode compte plus que le diplôme.",
    ],
    quote:
      "« J'avais un diplôme de technicien. Internet m'a donné un diplôme de bâtisseur. »",
    tags: ["Auto-formation", "Web", "Mindset produit"],
  },
  {
    n: "04",
    kicker: "LE CODE — DE L'ÉLECTRONIQUE AU LOGICIEL",
    titleWhite: "Python, JavaScript, SQL.",
    titleAccent: "Le clavier devient l'outil.",
    paragraphs: [
      "Je passe naturellement du fer à souder au terminal. Python d'abord, pour automatiser. JavaScript et TypeScript ensuite, pour construire des interfaces. SQL pour comprendre comment la donnée circule. Chaque langage n'était pas un but — c'était une brique de plus dans un système que j'imaginais déjà plus grand.",
      "Très vite, je ne code plus pour livrer un exercice. Je code pour créer des outils qui tournent tout seuls, des scripts qui produisent du contenu, des pipelines qui vendent pendant que je dors.",
    ],
    quote:
      "« J'ai arrêté de coder pour rendre un devoir. J'ai commencé à coder pour construire des actifs. »",
    tags: ["Python", "TypeScript", "SQL", "Automation"],
  },
  {
    n: "05",
    kicker: "L'IA — QUAND LA MACHINE DEVIENT UN ASSOCIÉ",
    titleWhite: "L'IA débarque.",
    titleAccent: "Je la mets au travail.",
    paragraphs: [
      "Quand Gemini, Claude et ChatGPT explosent, la plupart des gens s'amusent avec. Moi, je branche. Je construis des chaînes YouTube Automation, des systèmes de scripts, des pipelines de contenu Facebook, du SEO poussé — tout piloté par des modèles, monté sous CapCut Pro et After Effects.",
      "L'IA n'a pas remplacé ce que je faisais : elle a multiplié ce que je pouvais produire. Un homme, une équipe entière de contenu. C'est là que le business a vraiment décollé.",
    ],
    quote:
      "« L'IA ne m'a pas remplacé. Elle m'a démultiplié. »",
    tags: ["Gemini", "Claude", "YouTube Automation", "SEO"],
  },
  {
    n: "06",
    kicker: "LA STRUCTURE — DOLAPO ECOM LLC",
    titleWhite: "Une entreprise offshore",
    titleAccent: "pour porter les ambitions.",
    paragraphs: [
      "Pour tenir la vitesse à laquelle les projets sortaient, il me fallait une structure sérieuse. J'ai fondé Dolapo ECOM LLC — une entité offshore pensée pour l'e-commerce international, les SaaS et les partenariats globaux.",
      "Sous ce toit sont nés deux moteurs : Technova Learning, plateforme d'e-learning pour transmettre ce que j'ai appris, et Dukaio, système de monétisation pour transformer une audience en revenu prévisible.",
    ],
    quote:
      "« Je ne voulais pas un job. Je voulais une machine capable d'en créer plusieurs. »",
    tags: ["Dolapo ECOM LLC", "Technova Learning", "Dukaio", "SaaS"],
  },
  {
    n: "07",
    kicker: "AUJOURD'HUI — LA MISSION",
    titleWhite: "Construire la génération",
    titleAccent: "digitale africaine.",
    paragraphs: [
      "Aujourd'hui, je ne me définis plus par un métier — technicien, développeur, marketeur. Je me définis par ce que je construis : des systèmes digitaux qui vendent, apprennent et se répliquent.",
      "J'accompagne les créateurs, marques et entrepreneurs qui veulent arrêter de bricoler et commencer à industrialiser leur présence en ligne. Avec du code, de l'IA, du business — mais toujours avec méthode. Parce que la méthode, c'est ce qui m'a amené jusqu'ici.",
    ],
    quote:
      "« Mon diplôme, ce n'est pas ce que j'ai obtenu à l'école. C'est ce que j'ai construit après. »",
    tags: ["Entrepreneur", "Systèmes IA", "Growth", "Afrique Digitale"],
  },
];

const STATS = [
  { value: "16/20", label: "Moyenne CAP" },
  { value: "4ᵉ", label: "Rang national CAP" },
  { value: "BAC F3", label: "Série scientifique tech." },
  { value: "14/20", label: "Diplôme de Technicien" },
  { value: "Top 5", label: "Chaque promotion" },
];

function MonHistoirePage() {
  return (
    <div
      id="app-root"
      className="min-h-screen bg-[#030303] text-zinc-100 overflow-x-hidden selection:bg-brand-emerald selection:text-black"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-0 w-full h-[900px] bg-gradient-to-b from-brand-emerald/[0.07] via-transparent to-transparent pointer-events-none z-0" />
      {/* Grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[1400px] opacity-[0.06] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at 50% 20%, black 30%, transparent 75%)",
        }}
      />

      <Navbar />

      <main id="main-content" className="relative z-10 pt-32 sm:pt-40">
        {/* HERO */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 border border-brand-emerald/30 bg-brand-emerald/5 mb-8">
            <span className="w-1.5 h-1.5 bg-brand-emerald animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-brand-emerald uppercase">
              // L'histoire d'Agonan Isidore Abraham
            </span>
          </div>

          <h1
            style={serif}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.02] tracking-tight"
          >
            Le technicien
            <br />
            devenu <span className="text-white">bâtisseur</span>
            <br />
            <span style={serif} className="italic text-brand-emerald">
              de systèmes.
            </span>
          </h1>

          <p className="mt-8 max-w-xl mx-auto text-sm sm:text-base text-neutral-400 font-sans font-light leading-relaxed">
            Il avait le meilleur dossier de sa classe. Un avenir tout tracé dans
            la technique. Mais quelque chose lui disait que la vraie révolution
            ne se jouait pas dans les salles de cours — elle se jouait sur
            Internet.
          </p>
        </section>

        {/* STATS */}
        <section
          aria-label="Chiffres clés du parcours"
          className="max-w-5xl mx-auto px-6 md:px-12 mt-24 sm:mt-32 border-y border-neutral-900 py-10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 sm:gap-4 text-center">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2">
                <span
                  style={serif}
                  className="text-3xl sm:text-4xl font-bold text-brand-emerald"
                >
                  {s.value}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* CHAPTERS */}
        <section
          aria-label="Chapitres de l'histoire"
          className="max-w-4xl mx-auto px-6 md:px-12 mt-24 sm:mt-32 space-y-24 sm:space-y-32"
        >
          {CHAPTERS.map((c) => (
            <article
              key={c.n}
              className="grid grid-cols-[auto_1fr] gap-6 sm:gap-10"
            >
              {/* Chapter number */}
              <div className="flex flex-col items-center">
                <span
                  style={serif}
                  className="text-2xl sm:text-3xl italic text-neutral-700 font-bold"
                >
                  {c.n}
                </span>
                <div className="mt-3 w-px flex-1 bg-gradient-to-b from-brand-emerald/40 via-neutral-800 to-transparent" />
              </div>

              {/* Body */}
              <div className="pb-6">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-emerald/80 mb-4">
                  {c.kicker}
                </div>
                <h2
                  style={serif}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight"
                >
                  {c.titleWhite}
                  <br />
                  <span style={serif} className="italic text-brand-emerald">
                    {c.titleAccent}
                  </span>
                </h2>

                <div className="mt-6 space-y-4">
                  {c.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-neutral-300 font-sans font-light text-sm sm:text-base leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>

                <blockquote className="mt-8 border-l-2 border-brand-emerald bg-brand-emerald/[0.04] px-5 py-4">
                  <p
                    style={serif}
                    className="italic text-white text-base sm:text-lg leading-snug"
                  >
                    {c.quote}
                  </p>
                </blockquote>

                <div className="mt-6 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono uppercase tracking-wider text-brand-emerald/90 border border-brand-emerald/25 px-2 py-1 bg-brand-emerald/[0.03]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* OUTRO / CTA */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 mt-32 sm:mt-40 text-center">
          <h2
            style={serif}
            className="text-4xl sm:text-5xl font-bold text-white leading-[1.05] tracking-tight"
          >
            Cette histoire peut
            <br />
            <span style={serif} className="italic text-brand-emerald">
              inspirer la tienne.
            </span>
          </h2>
          <p className="mt-6 text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-xl mx-auto">
            Si un technicien parti d'un CAP a pu bâtir une structure offshore,
            deux SaaS et un système IA — avec de la méthode et de l'internet —
            toi aussi, tu peux.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-2 bg-brand-emerald text-black font-mono uppercase text-xs tracking-widest px-6 py-3 hover:bg-brand-emerald/90 transition-colors"
            >
              Travailler avec Isidore
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/"
              hash="services"
              className="inline-flex items-center gap-2 border border-neutral-700 text-neutral-200 font-mono uppercase text-xs tracking-widest px-6 py-3 hover:border-brand-emerald hover:text-brand-emerald transition-colors"
            >
              Voir les services
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
