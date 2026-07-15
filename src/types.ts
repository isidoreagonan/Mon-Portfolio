export interface Project {
  id: string;
  title: string;
  category: 'saas' | 'ugc' | 'automation';
  description: string;
  longDescription?: string;
  tags: string[];
  metrics?: string;
  linkText?: string;
  linkUrl?: string;
  mediaType: 'image' | 'video' | 'interactive';
  image?: string;
  placeholderColor: string;
  features?: string[];
  softwareUsed?: string[];
}

export interface ServiceCard {
  id: string;
  title: string;
  targetAudience: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  isRecommended?: boolean;
  accentColor: 'emerald' | 'cyan' | 'purple';
}

export interface AuditQuestion {
  id: string;
  text: string;
  options: {
    value: string;
    label: string;
    description: string;
  }[];
}

export interface AuditResult {
  title: string;
  strategy: string;
  actions: string[];
  tools: string[];
  timeframe: string;
}
