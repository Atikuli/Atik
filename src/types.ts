export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  fallbackImage: string;
  description: string;
  client: string;
  date: string;
  tools: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamically map Lucide icons
  tags: string[];
  category?: 'design' | 'technical';
}

export interface Skill {
  name: string;
  percentage: number;
  category: 'design' | 'technical' | 'tools';
  iconName?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  avatar: string;
  rating: number;
  review: string;
}

export interface Client {
  id: string;
  name: string;
  logoUrl: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface TimelineItem {
  id: string;
  roleOrDegree: string;
  companyOrInstitution: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  authority: string;
  date: string;
  credentialId?: string;
  logoUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
}
