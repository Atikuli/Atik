import { Project, Service, Skill, Testimonial, Client, Stat, TimelineItem, AwardItem, CertificationItem, PricingPackage, FAQItem, BlogPost } from './types';

export const personalInfo = {
  name: 'Md. Atikul Islam Hamim',
  displayName: 'Atik Hamim',
  initials: 'AH',
  titles: [
    'Graphic Designer',
    'IT Support Specialist',
    'Visual Designer'
  ],
  tagline: 'Creating impactful visual identities and providing professional IT support solutions.',
  about: [
    "I am Md. Atikul Islam Hamim, a passionate Graphic Designer and IT Support Specialist from Rajshahi, Bangladesh. I am currently studying in the second year (Honours) in the Department of Islamic Studies at Government Bangla College, Dhaka.",
    "I completed my SSC from Rajshahi Court Academy and my HSC from Metropolitan College.",
    "Alongside my academic journey, I successfully completed the NSDA IT Support Specialist Level-3 certification, where I developed practical skills in computer hardware, software troubleshooting, networking, operating systems, Microsoft Office, customer support, and technical problem-solving.",
    "I also work as a graphic designer with experience in logo design, brand identity, social media design, flyer design, banner design, business cards, brochures, and other print and digital marketing materials.",
    "My goal is to combine creativity and technology to deliver high-quality digital solutions for businesses and individuals."
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
  cvUrl: '#', // Keep clickable
};

export const skills: Skill[] = [
  { name: 'Graphic Design', percentage: 95, category: 'design' },
  { name: 'Adobe Illustrator', percentage: 95, category: 'tools' },
  { name: 'Adobe Photoshop', percentage: 92, category: 'tools' },
  { name: 'Logo Design', percentage: 95, category: 'design' },
  { name: 'Brand Identity Design', percentage: 92, category: 'design' },
  { name: 'Social Media Design', percentage: 90, category: 'design' },
  { name: 'Print Design', percentage: 90, category: 'design' },
  { name: 'Flyer & Brochure Design', percentage: 90, category: 'design' },
  { name: 'Business Card Design', percentage: 95, category: 'design' },
  { name: 'IT Support', percentage: 90, category: 'technical' },
  { name: 'Computer Troubleshooting', percentage: 90, category: 'technical' },
  { name: 'Hardware & Software Installation', percentage: 88, category: 'technical' },
  { name: 'Networking Basics', percentage: 85, category: 'technical' },
  { name: 'Microsoft Office', percentage: 90, category: 'tools' },
  { name: 'Customer Support', percentage: 88, category: 'technical' },
];

export const services: Service[] = [
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Expert logo, brand identity, and social media designs. Delivering premium vector assets, flyers, business cards, and digital marketing materials.',
    iconName: 'Palette',
    tags: ['Logo Design', 'Brand Identity Design', 'Social Media Design', 'Business Card Design', 'Flyer Design', 'Banner Design', 'Brochure Design', 'Print Design']
  },
  {
    id: 'it-support',
    title: 'IT Support Solutions',
    description: 'Professional hardware & software troubleshooting, computer setup, networking basics, remote helpdesk assistance, and customer support.',
    iconName: 'Cpu',
    tags: ['Computer Troubleshooting', 'Software Installation', 'Technical Support', 'Remote Support', 'Hardware Triage', 'Microsoft Office']
  }
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Minimalist Brand Identity Design',
    category: 'branding',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=800',
    fallbackImage: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=800',
    description: 'Complete visual brand architecture, custom logos, elegant business stationary, and premium corporate guidelines.',
    client: 'Apex Global',
    date: 'February 2026',
    tools: ['Adobe Illustrator', 'Photoshop', 'Typography Design']
  },
  {
    id: 'project-2',
    title: 'Creative Geometric Logo Collection',
    category: 'logo',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    fallbackImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    description: 'Sophisticated geometric vector marks designed for absolute clarity, symmetry, and memorability across physical & digital platforms.',
    client: 'Vanguard Group',
    date: 'April 2026',
    tools: ['Grid Mathematics', 'Adobe Illustrator', 'Vector Art']
  },
  {
    id: 'project-3',
    title: 'Modern Typographic Poster & Flyer',
    category: 'flyer',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800',
    fallbackImage: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800',
    description: 'High-end layout structure incorporating striking layouts, Swiss grid systems, and clean vector accents.',
    client: 'Lumina Expo',
    date: 'December 2025',
    tools: ['Layout Design', 'Illustrator', 'Swiss Typography']
  },
  {
    id: 'project-4',
    title: 'Sleek Product & Package Design',
    category: 'packaging',
    image: 'https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&q=80&w=800',
    fallbackImage: 'https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&q=80&w=800',
    description: 'Eco-conscious minimal container layouts and exterior vector patterns engineered for a high-end shelf-ready visual impact.',
    client: 'Elysian Organics',
    date: 'January 2026',
    tools: ['Package Dielines', 'Photoshop Mockup', 'Vector Art']
  },
  {
    id: 'project-5',
    title: 'High-Engagement Social Media Kits',
    category: 'social-media',
    image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=800',
    fallbackImage: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=800',
    description: 'Cohesive vector layouts for Instagram post grids, promotional banners, Facebook covers, and carousel templates.',
    client: 'Horizon Social',
    date: 'May 2026',
    tools: ['Photoshop Templates', 'Vector Elements', 'Color Harmony']
  },
  {
    id: 'project-6',
    title: 'Premium Debossed Business Cards',
    category: 'print',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800',
    fallbackImage: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800',
    description: 'Double-sided slate board business card design featuring gold foil stamp files, elegant trim margins, and precise typography.',
    client: 'Stellar Tech',
    date: 'March 2026',
    tools: ['Print Preparation', 'Illustrator Vectors', 'Prepress Setup']
  }
];

export const testimonials: Testimonial[] = [
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
];

export const clients: Client[] = [
  { id: 'c-1', name: 'Apex Global', logoUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=120' },
  { id: 'c-2', name: 'Elysian Organics', logoUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=120' },
  { id: 'c-3', name: 'Vanguard Group', logoUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=120' },
  { id: 'c-4', name: 'Lumina Expo', logoUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=120' },
  { id: 'c-5', name: 'Horizon Social', logoUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=120' },
];

export const stats: Stat[] = [
  { id: 'stat-1', value: 120, suffix: '+', label: 'Completed Projects' },
  { id: 'stat-2', value: 85, suffix: '+', label: 'Happy Clients' },
  { id: 'stat-3', value: 3, suffix: '+', label: 'Years Experience' },
  { id: 'stat-4', value: 15, suffix: '+', label: 'Industry Recognitions' }
];

export const experienceTimeline: TimelineItem[] = [
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
];

export const educationTimeline: TimelineItem[] = [
  {
    id: 'edu-1',
    roleOrDegree: 'Bachelor (Honours) - Department of Islamic Studies',
    companyOrInstitution: 'Government Bangla College, Dhaka',
    period: 'Second Year (Running)',
    description: 'Pursuing honours studies, building valuable communication and analytical skills while actively practicing graphic design and computer support solutions.',
    highlights: [
      'Developing rigorous critical writing, research methodologies, and historical analyses.',
      'Maintaining active digital projects alongside college curricula.'
    ]
  },
  {
    id: 'edu-2',
    roleOrDegree: 'Higher Secondary Certificate (HSC)',
    companyOrInstitution: 'Metropolitan College',
    period: 'Completed',
    description: 'Completed higher secondary education, laying strong foundations in science and academic projects.',
    highlights: [
      'Engaged in college science clubs and local computer literacy seminars.'
    ]
  },
  {
    id: 'edu-3',
    roleOrDegree: 'Secondary School Certificate (SSC)',
    companyOrInstitution: 'Rajshahi Court Academy',
    period: 'Completed',
    description: 'Acquired core general education with excellent visual and mathematical foundations.',
    highlights: [
      'Recognized for academic focus and early interest in digital illustration tools.'
    ]
  }
];

export const awardsList: AwardItem[] = [
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
];

export const certificationsList: CertificationItem[] = [
  {
    id: 'cert-1',
    name: 'IT Support Specialist Level-3',
    authority: 'National Skills Development Authority (NSDA), Bangladesh',
    date: 'Completed Successfully',
    credentialId: 'NSDA-ITSS-L3-2024',
    logoUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=120'
  }
];

export const pricingPackages: PricingPackage[] = [
  {
    id: 'prc-1',
    name: 'Visual Brand Design',
    price: '$299',
    billing: 'Per Project',
    description: 'Perfect for local and global businesses needing a premium, memorable, and highly cohesive vector branding refresh.',
    features: [
      'Custom vector logo with 3 distinct layouts & revisions',
      'Cohesive brand color scheme and typography pairing sheet',
      'Premium business card layout with print files (PDF/AI)',
      '10 customized templates for high-impact social media posts',
      'All productionmaster vector files in high resolution'
    ],
    buttonText: 'Acquire Identity Kit',
    category: 'design'
  },
  {
    id: 'prc-2',
    name: 'Professional IT Triage',
    price: '$149',
    billing: 'Per System',
    description: 'Best for local offices or remote professionals needing clean, secure operating systems and hardware configurations.',
    features: [
      'Complete computer hardware & software health diagnostic',
      'Priscilla-clean OS installation & Microsoft Office configuration',
      'Local network configuration, secure router setup & Wi-Fi optimization',
      '14 days of dedicated remote helpdesk and backup setup support',
      'Hardware upgrade advice and custom PC building guide'
    ],
    buttonText: 'Deploy Secure IT',
    category: 'it',
    isPopular: true
  },
  {
    id: 'prc-3',
    name: 'Ongoing Support Retainer',
    price: '$449',
    billing: 'Monthly Retainer',
    description: 'Unbeatable hybrid contract. Combining creative branding revisions and continuous computer troubleshooting support.',
    features: [
      'Ongoing monthly graphic designs (flyers, social post kits, banners)',
      'Print-ready prepress inspections for your physical brochure runs',
      'Unlimited remote hardware & software diagnostic calls',
      'System backup synchronization & antivirus firewall management',
      'Priority 4-hour technical response on critical digital issues'
    ],
    buttonText: 'Retain Hybrid Expert',
    category: 'hybrid'
  }
];

export const faqItems: FAQItem[] = [
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
];

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'The Blueprint for Impactful Brand Logos',
    excerpt: 'Explore how simple symmetric shapes, clean geometric grids, and high-contrast color choices combine to produce timeless logos that build immediate brand equity.',
    category: 'Graphic Design',
    date: 'June 20, 2026',
    readTime: '4 min read',
    coverImage: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600',
    author: {
      name: 'Atik Hamim',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120'
    }
  },
  {
    id: 'post-2',
    title: 'Essential Computer Hardware Troubleshooting Guide',
    excerpt: 'A clean, systematic list of troubleshooting steps to diagnose system crashes, test RAM memory health, and handle driver configurations with zero stress.',
    category: 'IT Support',
    date: 'May 12, 2026',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=600',
    author: {
      name: 'Atik Hamim',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120'
    }
  },
  {
    id: 'post-3',
    title: 'Prepress Mastery: Preparing Business Cards for Perfect Prints',
    excerpt: 'Avoid expensive mistakes. Learn the exact vector layering techniques, rich black settings, and bleed guidelines that ensure crisp corporate prints.',
    category: 'Print Design',
    date: 'April 05, 2026',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=600',
    author: {
      name: 'Atik Hamim',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120'
    }
  }
];
