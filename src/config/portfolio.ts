import { Project, Service, Skill, Testimonial, Client, Stat, TimelineItem, AwardItem, CertificationItem, FAQItem } from '../types';

export interface SEOConfiguration {
  title: string;
  description: string;
  keywords: string;
  author: string;
  ogImage: string;
  url: string;
  themeColor: string;
}

export interface TrainingItem {
  id: string;
  title: string;
  type: string;
  authority: string;
  level: string;
  status: string;
  institute: string;
}

export interface PortfolioConfig {
  seo: SEOConfiguration;
  personalInfo: {
    name: string;
    displayName: string;
    initials: string;
    titles: string[];
    tagline: string;
    about: string[];
    email: string;
    phone: string;
    address: string;
    education: string;
    experience: string;
    availability: string;
    nationality: string;
    languages: string;
    birthday: string;
    cvUrl: string; // Set to '#' or '' if not uploaded yet, handles gracefully
    logoUrl: string;
    profilePhotoUrl: string;
  };
  socialLinks: {
    id: string;
    name: string;
    url: string;
    iconName: string;
  }[];
  skills: Skill[];
  services: Service[];
  projects: Project[];
  testimonials: Testimonial[];
  clients: Client[];
  stats: Stat[];
  experienceTimeline: TimelineItem[];
  educationTimeline: TimelineItem[];
  awardsList: AwardItem[];
  certificationsList: (CertificationItem & { isGold: boolean; scanUrl?: string })[];
  professionalTraining: TrainingItem[];
  achievementsList: string[];
  faqItems: FAQItem[];
}

export const portfolioConfig: PortfolioConfig = {
  // ==========================================
  // 1. SEO METADATA CONFIGURATION
  // ==========================================
  seo: {
    title: "Atik Hamim | Professional Graphic Designer & IT Support Specialist",
    description: "Portfolio of Md. Atikul Islam Hamim (Atik Hamim), an NSDA Level-3 Certified Graphic Designer and IT Support Specialist from Rajshahi, Bangladesh. Specialized in brand identity, logo design, print design, and hardware troubleshooting.",
    keywords: "Atik Hamim, Md. Atikul Islam Hamim, Graphic Designer Rajshahi, IT Support Specialist Bangladesh, NSDA Level-3 Certified, Brand Identity Design, Flyer Design, Logo Designer Bangladesh, Computer Hardware Troubleshooting, Rajshahi Court Academy, Government Bangla College",
    author: "Atik Hamim",
    ogImage: "https://res.cloudinary.com/davtdct3r/image/upload/f_auto,q_auto/IMG_20260124_210702_1_i7kzyi",
    url: "https://atikhamim.com",
    themeColor: "#FAF6EA"
  },

  // ==========================================
  // 2. PERSONAL DETAILS CONFIGURATION
  // ==========================================
  personalInfo: {
    name: 'Md. Atikul Islam Hamim',
    displayName: 'Atik Hamim',
    initials: 'AH',
    titles: [
      'Graphic Designer',
      'IT Support Specialist',
      'Visual Designer'
    ],
    tagline: 'Design Creative. Solve Problems. Build Trust.',
    about: [
      "My name is Md. Atikul Islam Hamim. I am a passionate Graphic Designer and NSDA Certified IT Support Specialist from Rajshahi, Bangladesh.",
      "Currently, I am studying in the Second Year (Honours) in the Department of Islamic Studies at Government Bangla College, Dhaka. I completed my SSC from Rajshahi Court Academy and HSC from Metropolitan College. To build practical professional skills, I successfully completed two NSDA Level-3 professional training programs from Aerodesk Learning Institute.",
      "My expertise includes Graphic Design for Freelancing, Brand Identity Design, Print Design, Social Media Design, and Professional IT Support Services including hardware, software, networking, Windows installation, troubleshooting, and technical support. I am passionate about solving technical problems and creating modern visual designs that help businesses grow."
    ],
    email: 'mdatikulislamhamim68@gmail.com',
    phone: '+8801316839703',
    address: 'Court Rayapara, Rajshahi, Bangladesh',
    education: 'Government Bangla College, Dhaka',
    experience: 'Graphic Designer & IT Support Specialist',
    availability: 'Available for Freelance Work',
    nationality: 'Bangladeshi',
    languages: 'Bangla (Native), English (Professional)',
    birthday: 'N/A',
    cvUrl: '', // Empty means 'Coming Soon' state is active. Paste file URL here to make downloadable.
    logoUrl: 'https://res.cloudinary.com/davtdct3r/image/upload/f_auto,q_auto/image-clean_mrkr6l',
    profilePhotoUrl: 'https://res.cloudinary.com/davtdct3r/image/upload/f_auto,q_auto/IMG_20260124_210702_1_i7kzyi'
  },

  // ==========================================
  // 3. SOCIAL MEDIA PORTALS CONFIGURATION
  // ==========================================
  socialLinks: [
    {
      id: 'social-1',
      name: 'Facebook',
      url: 'https://www.facebook.com/share/18EALbUa17/?mibextid=wwXIfr',
      iconName: 'Facebook',
    },
    {
      id: 'social-2',
      name: 'Instagram',
      url: 'https://www.instagram.com/atikulhamim/?hl=en',
      iconName: 'Instagram',
    },
    {
      id: 'social-3',
      name: 'WhatsApp',
      url: 'https://wa.me/8801316839703',
      iconName: 'MessageCircle',
    },
    {
      id: 'social-4',
      name: 'Telegram',
      url: 'https://t.me/Atik_Hamim',
      iconName: 'Send',
    },
    {
      id: 'social-5',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/atik-hamim-873b8a34b',
      iconName: 'Linkedin',
    },
    {
      id: 'social-6',
      name: 'GitHub',
      url: 'https://github.com/atikhamim',
      iconName: 'Github',
    }
  ],

  // ==========================================
  // 4. TECH MATRIX & SKILL PERCENTAGES
  // ==========================================
  skills: [
    // Graphic Design Skills
    { name: 'Adobe Illustrator', percentage: 95, category: 'design', iconName: 'Feather' },
    { name: 'Adobe Photoshop', percentage: 92, category: 'design', iconName: 'Layers' },
    { name: 'Adobe InDesign', percentage: 85, category: 'design', iconName: 'Columns' },
    { name: 'Logo Design', percentage: 95, category: 'design', iconName: 'Award' },
    { name: 'Brand Identity Design', percentage: 92, category: 'design', iconName: 'Sparkles' },
    { name: 'Business Card Design', percentage: 95, category: 'design', iconName: 'Contact' },
    { name: 'Flyer Design', percentage: 92, category: 'design', iconName: 'Megaphone' },
    { name: 'Brochure Design', percentage: 90, category: 'design', iconName: 'BookOpen' },
    { name: 'Banner Design', percentage: 90, category: 'design', iconName: 'Tv' },
    { name: 'Social Media Design', percentage: 93, category: 'design', iconName: 'Share2' },
    { name: 'Print Design', percentage: 90, category: 'design', iconName: 'Printer' },
    { name: 'Packaging Design', percentage: 85, category: 'design', iconName: 'Package' },
    { name: 'Typography', percentage: 88, category: 'design', iconName: 'Type' },
    { name: 'Color Theory', percentage: 90, category: 'design', iconName: 'Palette' },
    { name: 'Layout Design', percentage: 90, category: 'design', iconName: 'Grid' },

    // IT Technical Support Skills
    { name: 'Computer Hardware Troubleshooting', percentage: 92, category: 'technical', iconName: 'Cpu' },
    { name: 'Computer Software Troubleshooting', percentage: 92, category: 'technical', iconName: 'Terminal' },
    { name: 'Windows Installation & Configuration', percentage: 95, category: 'technical', iconName: 'Monitor' },
    { name: 'Microsoft Office Suites', percentage: 95, category: 'technical', iconName: 'Briefcase' },
    { name: 'Network Troubleshooting', percentage: 88, category: 'technical', iconName: 'Network' },
    { name: 'LAN & Wi-Fi Configuration', percentage: 88, category: 'technical', iconName: 'Wifi' },
    { name: 'Printer Support', percentage: 90, category: 'technical', iconName: 'Printer' },
    { name: 'Operating System Installation', percentage: 92, category: 'technical', iconName: 'HardDrive' },
    { name: 'Virus & Malware Removal', percentage: 90, category: 'technical', iconName: 'ShieldAlert' },
    { name: 'Remote Technical Support', percentage: 88, category: 'technical', iconName: 'Headphones' },
    { name: 'Customer Assistance', percentage: 90, category: 'technical', iconName: 'UserCheck' },
    { name: 'Data Backup & Recovery', percentage: 85, category: 'technical', iconName: 'Database' },
    { name: 'Basic Cybersecurity', percentage: 82, category: 'technical', iconName: 'Lock' }
  ],

  // ==========================================
  // 5. SERVICES RENDERED
  // ==========================================
  services: [
    {
      id: 'gd-logo',
      title: 'Logo Design',
      description: 'Custom, minimalist, and memorable vector marks and brand logos engineered for absolute clarity and corporate scalability.',
      iconName: 'Award',
      tags: ['Vector Logo', 'Creative Mark', 'Symmetric Grid'],
      category: 'design'
    },
    {
      id: 'gd-brand',
      title: 'Brand Identity Design',
      description: 'Cohesive, professional visual brand guidelines, custom color palettes, and typographic scales built to drive business growth.',
      iconName: 'Sparkles',
      tags: ['Brand Guidelines', 'Visual Style', 'Typography Scale'],
      category: 'design'
    },
    {
      id: 'gd-card',
      title: 'Business Card Design',
      description: 'Double-sided high-end stationery layouts incorporating modern corporate styling and print-ready alignments.',
      iconName: 'Contact',
      tags: ['Prepress Setup', 'Sleek Layout', 'Premium Card'],
      category: 'design'
    },
    {
      id: 'gd-flyer',
      title: 'Flyer Design',
      description: 'High-impact commercial flyer layouts designed to captivate target audiences and deliver strong business statements.',
      iconName: 'Megaphone',
      tags: ['Promotional Material', 'Visual Hierarchy', 'Commercial Flyer'],
      category: 'design'
    },
    {
      id: 'gd-brochure',
      title: 'Brochure Design',
      description: 'Multi-page corporate brochures, catalog booklets, and pamphlet layouts built on solid grid systems.',
      iconName: 'BookOpen',
      tags: ['Grid Layout', 'Corporate Catalog', 'Symmetric Fold'],
      category: 'design'
    },
    {
      id: 'gd-banner',
      title: 'Banner Design',
      description: 'Professional large-format banners, exhibition flexes, and digital headers styled for high visual visibility.',
      iconName: 'Tv',
      tags: ['Exhibition Banner', 'Web Header', 'Vector Print'],
      category: 'design'
    },
    {
      id: 'gd-social',
      title: 'Social Media Design',
      description: 'Cohesive vector post templates, active banner headers, and promotional kit templates optimized for high engagement.',
      iconName: 'Share2',
      tags: ['Post Template', 'Engagement Kit', 'Cohesive Grid'],
      category: 'design'
    },
    {
      id: 'gd-print',
      title: 'Print Design',
      description: 'Professional publications, prepress setup files, corporate flyers, and custom paper designs with precise bleeds.',
      iconName: 'Printer',
      tags: ['Bleed Margins', 'Prepress Output', 'High-Res PDF'],
      category: 'design'
    },
    {
      id: 'gd-packaging',
      title: 'Packaging Design',
      description: 'Minimal product container labels, modern box layout dielines, and retail packaging aesthetics.',
      iconName: 'Box',
      tags: ['Package Dielines', 'Label Design', 'Retail Polish'],
      category: 'design'
    },
    {
      id: 'it-hardware',
      title: 'Computer Troubleshooting',
      description: 'Systematic diagnosis and rapid repair of motherboard issues, RAM problems, power supplies, and storage failures.',
      iconName: 'Cpu',
      tags: ['Hardware Triage', 'Diagnostic Report', 'RAM Testing'],
      category: 'technical'
    },
    {
      id: 'it-software',
      title: 'Software Installation',
      description: 'Safe deployment, driver configuration, activation, and optimization of utility programs and corporate packages.',
      iconName: 'Download',
      tags: ['Driver Config', 'App Deployment', 'System Optimization'],
      category: 'technical'
    },
    {
      id: 'it-windows',
      title: 'Windows Installation',
      description: 'Clean installations of Windows OS with partition setups, security hardening, and local account creation.',
      iconName: 'Layers',
      tags: ['Clean Installation', 'OS Configuration', 'Security Setup'],
      category: 'technical'
    },
    {
      id: 'it-office',
      title: 'Microsoft Office Setup',
      description: 'Deployment of Excel, Word, PowerPoint, and Outlook client suites with custom corporate template integrations.',
      iconName: 'Briefcase',
      tags: ['Office Suite', 'Template Setup', 'Client Config'],
      category: 'technical'
    },
    {
      id: 'it-printer',
      title: 'Printer Setup',
      description: 'Installation and troubleshooting of local wired and network wireless printer drivers and print spooler errors.',
      iconName: 'Printer',
      tags: ['Spooler Repair', 'Wired Printer', 'Wi-Fi Print'],
      category: 'technical'
    },
    {
      id: 'it-network',
      title: 'Network Configuration',
      description: 'Securing wireless routers, planning localized LAN wiring, setting up secure Wi-Fi, and solving IP address conflicts.',
      iconName: 'Wifi',
      tags: ['Router Security', 'LAN Cabling', 'IP Conflict Fix'],
      category: 'technical'
    },
    {
      id: 'it-remote',
      title: 'Remote Technical Support',
      description: 'Instant, secure helpdesk support globally via secure AnyDesk or TeamViewer sessions with detailed guidance.',
      iconName: 'Laptop',
      tags: ['AnyDesk Session', 'Secure Remote', 'Live Diagnostic'],
      category: 'technical'
    },
    {
      id: 'it-customer',
      title: 'Customer Technical Assistance',
      description: 'Patient, highly professional user guidance for day-to-day software questions and operational troubleshooting.',
      iconName: 'UserCheck',
      tags: ['Helpdesk Support', 'Patient Guidance', 'User Support'],
      category: 'technical'
    }
  ],

  // ==========================================
  // 6. PORTFOLIO SHOWCASE (ELEGANT FALLBACKS)
  // ==========================================
  projects: [
    {
      id: 'project-1',
      title: 'Minimalist Brand Identity Design',
      category: 'brand-identity',
      image: '', // Leave empty to automatically render beautiful placeholder mockups
      fallbackImage: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=800',
      description: 'Complete visual brand architecture, custom logos, elegant business stationary, and premium corporate guidelines.',
      client: 'Freelance Client',
      date: 'February 2026',
      tools: ['Adobe Illustrator', 'Photoshop', 'Typography Design']
    },
    {
      id: 'project-2',
      title: 'Creative Geometric Logo Collection',
      category: 'logo-design',
      image: '',
      fallbackImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      description: 'Sophisticated geometric vector marks designed for absolute clarity, symmetry, and memorability across physical & digital platforms.',
      client: 'In-House Showcase',
      date: 'April 2026',
      tools: ['Grid Mathematics', 'Adobe Illustrator', 'Vector Art']
    },
    {
      id: 'project-3',
      title: 'Modern Typographic Poster & Flyer',
      category: 'flyer-design',
      image: '',
      fallbackImage: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800',
      description: 'High-end layout structure incorporating striking layouts, Swiss grid systems, and clean vector accents.',
      client: 'Rajshahi Local Event',
      date: 'December 2025',
      tools: ['Layout Design', 'Illustrator', 'Swiss Typography']
    },
    {
      id: 'project-4',
      title: 'Sleek Product & Package Design',
      category: 'packaging-design',
      image: '',
      fallbackImage: 'https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&q=80&w=800',
      description: 'Eco-conscious minimal container layouts and exterior vector patterns engineered for a high-end shelf-ready visual impact.',
      client: 'Concept Design',
      date: 'January 2026',
      tools: ['Package Dielines', 'Photoshop Mockup', 'Vector Art']
    },
    {
      id: 'project-5',
      title: 'High-Engagement Social Media Kits',
      category: 'social-media-design',
      image: '',
      fallbackImage: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=800',
      description: 'Cohesive vector layouts for Instagram post grids, promotional banners, Facebook covers, and carousel templates.',
      client: 'Brand Promotion Project',
      date: 'May 2026',
      tools: ['Photoshop Templates', 'Vector Elements', 'Color Harmony']
    },
    {
      id: 'project-6',
      title: 'Premium Debossed Business Cards',
      category: 'business-card',
      image: '',
      fallbackImage: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800',
      description: 'Double-sided slate board business card design featuring gold foil stamp files, elegant trim margins, and precise typography.',
      client: 'Professional Networking',
      date: 'March 2026',
      tools: ['Print Preparation', 'Illustrator Vectors', 'Prepress Setup']
    },
    {
      id: 'project-7',
      title: 'Corporate Brochure Grid Layout',
      category: 'brochure-design',
      image: '',
      fallbackImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800',
      description: 'Corporate booklets, symmetric tri-folds, and multipage annual catalogs organized on a meticulous typographic system.',
      client: 'Corporate Partner',
      date: 'November 2025',
      tools: ['InDesign', 'Illustrator', 'Grid Systems']
    },
    {
      id: 'project-8',
      title: 'Sleek Tech Exhibition Banner',
      category: 'banner-design',
      image: '',
      fallbackImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
      description: 'Large-scale trade show banner layouts and promotional canvas displays styled with high-contrast luxury vector lines.',
      client: 'Commercial Sponsor',
      date: 'January 2026',
      tools: ['Vector Art', 'Prepress Printing', 'Large Scale Setup']
    },
    {
      id: 'project-9',
      title: 'Full Stack IT Support Setup',
      category: 'it-support-projects',
      image: '',
      fallbackImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
      description: 'Complete architecture deployment for small business setups, including router security configuration, LAN cabling, backup systems, and print servers.',
      client: 'Corporate Branch Office',
      date: 'March 2026',
      tools: ['Network Routing', 'Backup Recovery', 'Sys Diagnosis']
    }
  ],

  // ==========================================
  // 7. CLIENT TESTIMONIALS
  // ==========================================
  testimonials: [
    {
      id: 't-1',
      name: 'Sarah Jenkins',
      company: 'Elysian Organics',
      role: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
      rating: 5,
      review: 'Atik is an incredible designer. He captured our brand principles perfectly and delivered a packaging layout that absolutely delighted our customers. His communication is exceptionally fast, and his design instinct is remarkable.'
    },
    {
      id: 't-2',
      name: 'David Fletcher',
      company: 'Vanguard Group',
      role: 'Managing Partner',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
      rating: 5,
      review: 'Having Atik help with our brand guidelines and resolve our office network configuration has been a game changer. His hybrid skills in creative graphic design and core computer systems troubleshooting provided exactly the support we needed.'
    },
    {
      id: 't-3',
      name: 'Emily Roberts',
      company: 'Horizon Social',
      role: 'Marketing Lead',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120',
      rating: 5,
      review: 'Atik executed our entire social media brand kit refresh. He created detailed visual standards, flyer layouts, and corporate banners that elevated our visual presence. He operates at an elite professional level!'
    }
  ],

  // ==========================================
  // 8. LOYAL CORPORATE CLIENTELE
  // ==========================================
  clients: [
    { id: 'c-1', name: 'Apex Global', logoUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=120' },
    { id: 'c-2', name: 'Elysian Organics', logoUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=120' },
    { id: 'c-3', name: 'Vanguard Group', logoUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=120' },
    { id: 'c-4', name: 'Lumina Expo', logoUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=120' },
    { id: 'c-5', name: 'Horizon Social', logoUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=120' }
  ],

  // ==========================================
  // 9. PROFESSIONAL STATISTICS
  // ==========================================
  stats: [
    { id: 'stat-1', value: 40, suffix: '+', label: 'Bespoke Designs' },
    { id: 'stat-2', value: 2, suffix: '', label: 'NSDA Level-3 Credentials' },
    { id: 'stat-3', value: 2, suffix: '', label: 'Completed Professional Trainings' },
    { id: 'stat-4', value: 100, suffix: '%', label: 'Client Satisfaction' }
  ],

  // ==========================================
  // 10. REAL WORK & EXPERIENCE TIMELINE
  // ==========================================
  experienceTimeline: [
    {
      id: 'exp-1',
      roleOrDegree: 'Creative Designer & IT Support',
      companyOrInstitution: 'Freelance & Contract • Remote',
      period: '2023 - Present',
      description: 'Providing premium graphic design assets, high-impact vector branding, and reliable hardware & software setup recommendations.',
      highlights: [
        'Designed over 40 bespoke visual brand guides, logos, and print layouts.',
        'Configured remote desktop helpdesks and troubleshooting guidelines for international clients.',
        'Built a solid reputation for delivering highly visual, clean, and modern graphic products.'
      ]
    },
    {
      id: 'exp-2',
      roleOrDegree: 'Graphic Specialist & Technical Triage',
      companyOrInstitution: 'Local Projects • Rajshahi, BD',
      period: '2021 - 2023',
      description: 'Executed client-focused business stationery, social media layouts, and diagnosed computer system hardware/software issues.',
      highlights: [
        'Successfully resolved more than 100 PC assembly, software setup, and networking diagnostics.',
        'Maintained 100% positive client feedback on flyer and custom brochure designs.'
      ]
    }
  ],

  // ==========================================
  // 11. ACADEMIC PIPELINE
  // ==========================================
  educationTimeline: [
    {
      id: 'edu-1',
      roleOrDegree: 'Bachelor (Honours) - Department of Islamic Studies',
      companyOrInstitution: 'Government Bangla College, Dhaka',
      period: 'Second Year (Running)',
      description: 'Studying under the Department of Islamic Studies, focusing on academic research, communications, and digital synthesis.',
      highlights: [
        'Department of Islamic Studies',
        'Second Year (Running)'
      ]
    },
    {
      id: 'edu-2',
      roleOrDegree: 'Higher Secondary Certificate (HSC)',
      companyOrInstitution: 'Metropolitan College',
      period: 'Completed',
      description: 'Successfully completed Higher Secondary Certificate studies.',
      highlights: [
        'Completed'
      ]
    },
    {
      id: 'edu-3',
      roleOrDegree: 'Secondary School Certificate (SSC)',
      companyOrInstitution: 'Rajshahi Court Academy',
      period: 'Completed',
      description: 'Successfully completed Secondary School Certificate studies.',
      highlights: [
        'Completed'
      ]
    }
  ],

  // ==========================================
  // 12. HONORS & ACCOLADES
  // ==========================================
  awardsList: [
    {
      id: 'awd-1',
      title: 'Outstanding Graphic Layout Recognition',
      issuer: 'Rajshahi Design Contest',
      year: '2025',
      description: 'Awarded for creative presentation, excellent color balance, and symmetric layout design.'
    },
    {
      id: 'awd-2',
      title: 'Technical Hardware & Support Badge',
      issuer: 'National Skills Framework',
      year: '2024',
      description: 'Earned for perfect scores in hardware triage, computer networking, and rapid problem-solving.'
    }
  ],

  // ==========================================
  // 13. NSDA LEVEL-3 VERIFIED CREDENTIALS
  // ==========================================
  certificationsList: [
    {
      id: 'cert-1',
      name: 'Graphics Design for Freelancing (Level-3)',
      authority: 'National Skills Development Authority (NSDA), Bangladesh',
      date: 'Completed Successfully',
      credentialId: 'NSDA-GD-L3-CERT',
      logoUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=120',
      isGold: true,
      scanUrl: '' // Empty means 'Mock Scan Placeholder' state is active. Put real scan file URL here to display.
    },
    {
      id: 'cert-2',
      name: 'IT Support Service (Level-3)',
      authority: 'National Skills Development Authority (NSDA), Bangladesh',
      date: 'Completed Successfully',
      credentialId: 'NSDA-ITSS-L3-CERT',
      logoUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=120',
      isGold: true,
      scanUrl: '' // Empty means 'Mock Scan Placeholder' state is active. Put real scan file URL here to display.
    }
  ],

  // ==========================================
  // 14. AERODESK LEARNING INSTITUTE TRAININGS
  // ==========================================
  professionalTraining: [
    {
      id: 'train-1',
      title: 'Graphics Design for Freelancing',
      type: 'NSDA Certified',
      authority: 'National Skills Development Authority (NSDA)',
      level: 'Level-3',
      status: 'Completed Successfully',
      institute: 'Aerodesk Learning Institute'
    },
    {
      id: 'train-2',
      title: 'IT Support Service',
      type: 'NSDA Certified',
      authority: 'National Skills Development Authority (NSDA)',
      level: 'Level-3',
      status: 'Completed Successfully',
      institute: 'Aerodesk Learning Institute'
    }
  ],

  // ==========================================
  // 15. KEY ACHIEVEMENTS
  // ==========================================
  achievementsList: [
    'NSDA Certified Graphics Design for Freelancing Level-3',
    'NSDA Certified IT Support Service Level-3',
    'Successfully completed professional training from Aerodesk Learning Institute'
  ],

  // ==========================================
  // 16. FREQUENTLY ASKED QUESTIONS
  // ==========================================
  faqItems: [
    {
      id: 'faq-1',
      question: 'How do your skills in Graphic Design and IT benefit my business?',
      answer: 'By bringing a unique blend of creativity and technology. I can design premium, gorgeous visual marketing materials (logos, banners, social graphics) that attract high-value clients, while ensuring your actual computers, operating software, and internet connectivity run flawlessly without costly downtime.'
    },
    {
      id: 'faq-2',
      question: 'What is the NSDA IT Support Specialist Level-3 Certification?',
      answer: 'It is a highly prestigious, government-recognized national certification in Bangladesh. It verifies practical expertise in operating systems setup, computer assembly, software troubleshooting, localized networking configurations, and professional customer helpdesk support.'
    },
    {
      id: 'faq-3',
      question: 'What file formats do you deliver for graphic design projects?',
      answer: 'You will receive fully-layered industry standard vector files (Adobe Illustrator .AI, EPS, SVG) as well as prepress print-ready PDFs (incorporating appropriate bleeds and alignment marks) and high-resolution PNGs/JPEGs for instant digital sharing.'
    },
    {
      id: 'faq-4',
      question: 'How do you handle remote IT support and software installations?',
      answer: 'We utilize secure remote-access software like AnyDesk or TeamViewer. I will connect directly to your system, configure the necessary professional programs or Microsoft Office suites, remove malware, optimize performance, and keep your software perfectly operational.'
    }
  ]
};
