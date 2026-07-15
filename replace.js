const fs = require('fs');
const path = require('path');

const replacements = [
  {
    file: 'src/routes/__root.tsx',
    replace: [
      [/fondateur de Dolapo ECOM LLC\. /g, '']
    ]
  },
  {
    file: 'src/routes/index.tsx',
    replace: [
      [/fondateur de Dolapo ECOM LLC\. /g, '']
    ]
  },
  {
    file: 'src/routes/mon-histoire.tsx',
    replace: [
      [/, fondateur de Dolapo ECOM LLC,/g, ','],
      [/Dolapo ECOM LLC, Technova & Dukaio/g, 'Technova & Dukaio'],
      [/LA STRUCTURE — DOLAPO ECOM LLC/g, 'L\\'ENTREPRENEURIAT'],
      [/Une entreprise offshore/g, 'Une vision globale'],
      [/J'ai fondé Dolapo ECOM LLC — une entité offshore pensée/g, 'J\\'ai fondé ma propre entreprise pensée'],
      [/"Dolapo ECOM LLC"/g, '"Entrepreneuriat"'],
      [/une structure offshore/g, 'une telle expertise']
    ]
  },
  {
    file: 'src/components/portfolio/Footer.tsx',
    replace: [
      [/Dolapo ECOM LLC — Société Offshore Enregistrée/g, 'Agonan Isidore Abraham'],
      [/Dolapo ECOM LLC\./g, 'Agonan Isidore Abraham.']
    ]
  },
  {
    file: 'src/components/portfolio/HeroSection.tsx',
    replace: [
      [/'LLC', label: 'Dolapo ECOM', desc: 'Structure offshore'/g, '\\'CEO\\', label: \\'Fondateur\\', desc: \\'SaaS & E-commerce\\''],
      [/DOLAPO ECOM LLC/g, 'AGONAN ISIDORE ABRAHAM'],
      [/ — Fondateur Dolapo ECOM LLC/g, '']
    ]
  },
  {
    file: 'src/components/portfolio/AboutSection.tsx',
    replace: [
      [/'Dolapo ECOM LLC'/g, '\\'Création SaaS\\''],
      [/'Entreprise Offshore', value: 'Dolapo ECOM LLC \(Fondateur\)'/g, '\\'Statut\\', value: \\'Entrepreneur (Fondateur)\\''],
      [/dolapo-offshore/g, 'admin'],
      [/Dolapo ECOM LLC offshore structure created/g, 'Global business structure created']
    ]
  },
  {
    file: 'src/components/portfolio/InteractiveAudit.tsx',
    replace: [
      [/ou l\\'offshore/g, 'ou à l\\'international']
    ]
  },
  {
    file: 'src/components/portfolio/ProjectsSection.tsx',
    replace: [
      [/Le secret de l\\'offshore/g, 'Le secret du business digital']
    ]
  }
];

replacements.forEach(({ file, replace }) => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    replace.forEach(([regex, replacement]) => {
      content = content.replace(regex, replacement);
    });
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
