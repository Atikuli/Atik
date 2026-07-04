export interface TranslationDictionary {
  [key: string]: {
    en: string;
    bn: string;
  };
}

export const uiTranslations: TranslationDictionary = {
  // Navigation Labels
  'nav.home': { en: 'Home', bn: 'হোম' },
  'nav.about': { en: 'About', bn: 'আমার সম্পর্কে' },
  'nav.expertise': { en: 'Core Expertise', bn: 'মূল দক্ষতা' },
  'nav.resume': { en: 'Education', bn: 'শিক্ষা' },
  'nav.training': { en: 'Professional Training', bn: 'পেশাদার প্রশিক্ষণ' },
  'nav.certifications': { en: 'Certifications', bn: 'সার্টিফিকেশন' },
  'nav.skills': { en: 'Skills', bn: 'দক্ষতা সমূহ' },
  'nav.services': { en: 'Services', bn: 'সেবা সমূহ' },
  'nav.portfolio': { en: 'Portfolio', bn: 'পোর্টফোলিও' },
  'nav.achievements': { en: 'Achievements', bn: 'অর্জন সমূহ' },
  'nav.testimonials': { en: 'Testimonials', bn: 'ক্লায়েন্ট মতামত' },
  'nav.contact': { en: 'Contact', bn: 'যোগাযোগ' },

  // General Titles & Common UI Buttons
  'general.designer_it': { en: 'Graphic Designer & IT Specialist', bn: 'গ্রাফিক ডিজাইনার এবং আইটি বিশেষজ্ঞ' },
  'general.certification_authority': { en: 'NSDA Level-3 Certified', bn: 'এনএসডিএ লেভেল-৩ সার্টিফাইড' },
  'general.view_portfolio': { en: 'View Portfolio', bn: 'পোর্টফোলিও দেখুন' },
  'general.contact_me': { en: 'Contact Me', bn: 'যোগাযোগ করুন' },
  'general.download_cv': { en: 'Download CV', bn: 'সিভি ডাউনলোড' },
  'general.explore_work': { en: 'Explore Work', bn: 'কাজ অন্বেষণ করুন' },
  'general.all': { en: 'All', bn: 'সব' },
  'general.read_more': { en: 'Read More', bn: 'আরো পড়ুন' },
  'general.show_less': { en: 'Show Less', bn: 'সংক্ষিপ্ত করুন' },
  'general.submit': { en: 'Submit Message', bn: 'বার্তা পাঠান' },
  'general.sending': { en: 'Sending...', bn: 'পাঠানো হচ্ছে...' },

  // Sections Main Headings
  'heading.about_sub': { en: 'Biography', bn: 'জীবনী' },
  'heading.about_title': { en: 'About Me', bn: 'আমার পরিচয়' },
  'heading.expertise_sub': { en: 'Core Strength', bn: 'মূল শক্তি' },
  'heading.expertise_title': { en: 'Core Expertise', bn: 'মূল দক্ষতা ও কর্মক্ষমতা' },
  'heading.education_sub': { en: 'Academic Journey', bn: 'শিক্ষাগত যাত্রা' },
  'heading.education_title': { en: 'Education & Journey', bn: 'শিক্ষা এবং যাত্রা' },
  'heading.training_sub': { en: 'Skill Mastery', bn: 'দক্ষতা অর্জন' },
  'heading.training_title': { en: 'Professional Training', bn: 'পেশাগত প্রশিক্ষণ' },
  'heading.cert_sub': { en: 'Verified Badges', bn: 'যাচাইকৃত ব্যাজ' },
  'heading.cert_title': { en: 'Certifications', bn: 'সার্টিফিকেশন সমূহ' },
  'heading.skills_sub': { en: 'Technical Matrix', bn: 'প্রযুক্তিগত শক্তি' },
  'heading.skills_title': { en: 'Professional Skills', bn: 'পেশাদার দক্ষতা' },
  'heading.services_sub': { en: 'What I Offer', bn: 'আমি যা অফার করি' },
  'heading.services_title': { en: 'My Services', bn: 'আমার সেবাসমূহ' },
  'heading.portfolio_sub': { en: 'Recent Masterpieces', bn: 'সাম্প্রতিক কাজ' },
  'heading.portfolio_title': { en: 'Featured Portfolio', bn: 'নির্বাচিত পোর্টফোলিও' },
  'heading.achievements_sub': { en: 'Milestones', bn: 'মাইলফলক' },
  'heading.achievements_title': { en: 'Achievements & Awards', bn: 'অর্জন ও পুরস্কার' },
  'heading.faq_sub': { en: 'Common Inquiries', bn: 'সাধারণ জিজ্ঞাসা' },
  'heading.faq_title': { en: 'Frequently Asked Questions', bn: 'প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী' },
  'heading.test_sub': { en: 'Endorsements', bn: 'সুপারিশ সমূহ' },
  'heading.test_title': { en: 'Client Reviews', bn: 'ক্লায়েন্টদের মতামত' },
  'heading.contact_sub': { en: 'Contact Hub', bn: 'যোগাযোগ কেন্দ্র' },
  'heading.contact_title': { en: 'Smart Contact Hub', bn: 'স্মার্ট যোগাযোগ কেন্দ্র' },

  // Contact Form Inputs
  'contact.name_label': { en: 'Full Name *', bn: 'পূর্ণ নাম *' },
  'contact.email_label': { en: 'Email *', bn: 'ইমেইল *' },
  'contact.phone_label': { en: 'Phone Number *', bn: 'ফোন নম্বর *' },
  'contact.subject_label': { en: 'Subject *', bn: 'বিষয় *' },
  'contact.message_label': { en: 'Message *', bn: 'বার্তা *' },
  'contact.preferred_method': { en: 'Preferred Contact Method', bn: 'পছন্দসই যোগাযোগের মাধ্যম' },
  'contact.submit_btn': { en: 'Send Message', bn: 'বার্তা প্রেরণ করুন' },
  'contact.quick_cards': { en: 'Quick Contact Cards', bn: 'দ্রুত যোগাযোগ কার্ড' },
  'contact.social_portal': { en: 'Social Media Portal', bn: 'সোশ্যাল মিডিয়া পোর্টাল' },

  // About Section Meta info
  'about.birth': { en: 'Birthday', bn: 'জন্মদিন' },
  'about.edu': { en: 'Education', bn: 'শিক্ষা' },
  'about.email': { en: 'Email', bn: 'ইমেইল' },
  'about.phone': { en: 'Phone', bn: 'ফোন' },
  'about.address': { en: 'Address', bn: 'ঠিকানা' },
  'about.nationality': { en: 'Nationality', bn: 'জাতীয়তা' },
  'about.bangladeshi': { en: 'Bangladeshi', bn: 'বাংলাদেশী' },
  'about.languages': { en: 'Languages', bn: 'ভাষাসমূহ' },
  'about.lang_details': { en: 'Bangla (Native), English (Professional)', bn: 'বাংলা (মাতৃভাষা), ইংরেজি (পেশাদার)' },
  'about.exp': { en: 'Experience', bn: 'অভিজ্ঞতা' },
  'about.exp_details': { en: 'Graphic Designer & IT Support Specialist', bn: 'গ্রাফিক ডিজাইনার ও আইটি সাপোর্ট বিশেষজ্ঞ' },
  'about.avail': { en: 'Availability', bn: 'উপলব্ধতা' },
  'about.avail_details': { en: 'Available for Freelance Work', bn: 'ফ্রিল্যান্স কাজের জন্য উপলব্ধ' },

  // Hero Section
  'hero.hello': { en: 'Hello, I am', bn: 'হ্যালো, আমি' },
  'hero.tagline': { en: 'Design Creative. Solve Problems. Build Trust.', bn: 'ক্রিয়েটিভ ডিজাইন। সমস্যার সমাধান। ভরসা অর্জন।' },
  'hero.cta_portfolio': { en: 'Explore My Work', bn: 'আমার কাজ দেখুন' },
  'hero.cta_contact': { en: 'Let\'s Discuss', bn: 'চলুন আলোচনা করি' },

  // CTAs
  'cta.title': { en: 'Have a Project in Mind?', bn: 'আপনার মনে কি কোনো প্রজেক্ট আছে?' },
  'cta.sub': { en: 'Let\'s collaborate to bring your graphic design ideas to life or secure your IT support pipeline.', bn: 'আপনার গ্রাফিক ডিজাইন ধারণাগুলোকে জীবন্ত করতে বা আইটি সমর্থন সুরক্ষিত করতে একসাথে কাজ করি।' },
  'cta.btn': { en: 'Get In Touch Now', bn: 'এখনই যোগাযোগ করুন' },
};

// Translates dynamic data arrays on-the-fly based on current language
export const translateText = (text: string, currentLang: 'en' | 'bn'): string => {
  if (!text) return '';
  
  // Custom smart dictionaries for dynamic translating of key database paragraphs
  const dynamicDictionary: Record<string, { en: string; bn: string }> = {
    "My name is Md. Atikul Islam Hamim. I am a passionate Graphic Designer and NSDA Certified IT Support Specialist from Rajshahi, Bangladesh.": {
      en: "My name is Md. Atikul Islam Hamim. I am a passionate Graphic Designer and NSDA Certified IT Support Specialist from Rajshahi, Bangladesh.",
      bn: "আমার নাম মো: আতিকুল ইসলাম হামিম। আমি একজন ডেডিকেটেড গ্রাফিক ডিজাইনার এবং এনএসডিএ সার্টিফাইড আইটি সাপোর্ট স্পেশালিস্ট, রাজশাহী, বাংলাদেশ থেকে।"
    },
    "Currently, I am studying in the Second Year (Honours) in the Department of Islamic Studies at Government Bangla College, Dhaka. I completed my SSC from Rajshahi Court Academy and HSC from Metropolitan College. To build practical professional skills, I successfully completed two NSDA Level-3 professional training programs from Aerodesk Learning Institute.": {
      en: "Currently, I am studying in the Second Year (Honours) in the Department of Islamic Studies at Government Bangla College, Dhaka. I completed my SSC from Rajshahi Court Academy and HSC from Metropolitan College. To build practical professional skills, I successfully completed two NSDA Level-3 professional training programs from Aerodesk Learning Institute.",
      bn: "বর্তমানে আমি ঢাকার সরকারি বাঙলা কলেজের ইসলামিক স্টাডিজ বিভাগে ২য় বর্ষে (সম্মান) অধ্যয়নরত আছি। আমি রাজশাহী কোর্ট একাডেমি থেকে এসএসসি এবং মেট্রোপলিটন কলেজ থেকে এইচএসসি সম্পন্ন করেছি। ব্যবহারিক পেশাগত দক্ষতা অর্জনের জন্য, আমি এরোডেস্ক লার্নিং ইনস্টিটিউট থেকে দুটি এনএসডিএ লেভেল-৩ পেশাদার প্রশিক্ষণ প্রোগ্রাম সফলভাবে সম্পন্ন করেছি।"
    },
    "My expertise includes Graphic Design for Freelancing, Brand Identity Design, Print Design, Social Media Design, and Professional IT Support Services including hardware, software, networking, Windows installation, troubleshooting, and technical support. I am passionate about solving technical problems and creating modern visual designs that help businesses grow.": {
      en: "My expertise includes Graphic Design for Freelancing, Brand Identity Design, Print Design, Social Media Design, and Professional IT Support Services including hardware, software, networking, Windows installation, troubleshooting, and technical support. I am passionate about solving technical problems and creating modern visual designs that help businesses grow.",
      bn: "আমার দক্ষতার মধ্যে রয়েছে ফ্রিল্যান্সিংয়ের জন্য গ্রাফিক ডিজাইন, ব্র্যান্ড আইডেন্টিটি ডিজাইন, প্রিন্ট ডিজাইন, সোশ্যাল মিডিয়া ডিজাইন এবং হার্ডওয়্যার, সফটওয়্যার, নেটওয়ার্কিং, উইন্ডোজ ইনস্টলেশন, ট্রাবলশুটিং এবং টেকনিক্যাল সাপোর্ট সহ পেশাদার আইটি সাপোর্ট সেবা সমূহ। আমি প্রযুক্তিগত সমস্যা সমাধান এবং আধুনিক ভিজ্যুয়াল ডিজাইন তৈরি করতে ভালোবাসী যা ব্যবসা বৃদ্ধিতে সাহায্য করে।"
    },
    // Core Expertise Items
    "Brand & Identity Design": { en: "Brand & Identity Design", bn: "ব্র্যান্ড ও আইডেন্টিটি ডিজাইন" },
    "Creating bespoke visual assets, vector logos, style guidelines, typography scales, and high-quality commercial flyers designed to build an elite corporate identity.": {
      en: "Creating bespoke visual assets, vector logos, style guidelines, typography scales, and high-quality commercial flyers designed to build an elite corporate identity.",
      bn: "অভিজাত কর্পোরেট পরিচয় তৈরির জন্য বেসপোক ভিজ্যুয়াল অ্যাসেট, ভেক্টর লোগো, স্টাইল নির্দেশিকা, টাইপোগ্রাফি স্কেল এবং উচ্চমানের ব্যবসায়িক ফ্লায়ার তৈরি করা।"
    },
    "Comprehensive IT Support Services": { en: "Comprehensive IT Support Services", bn: "ব্যাপক আইটি সাপোর্ট সেবা সমূহ" },
    "Professional computer diagnostics, Windows configuration, hardware restoration, remote technical troubleshooting, virus elimination, and network optimizations.": {
      en: "Professional computer diagnostics, Windows configuration, hardware restoration, remote technical troubleshooting, virus elimination, and network optimizations.",
      bn: "পেশাদার কম্পিউটার ডায়াগনস্টিকস, উইন্ডোজ কনফিগারেশন, হার্ডওয়্যার রিস্টোরেশন, রিমোট টেকনিক্যাল ট্রাবলশুটিং, ভাইরাস নিষ্ক্রিয়করণ এবং নেটওয়ার্ক অপ্টিমাইজেশন।"
    }
  };

  const match = dynamicDictionary[text];
  if (match) {
    return match[currentLang];
  }

  // Automatic translation fallbacks for common standard phrases
  if (currentLang === 'bn') {
    // If the string itself contains a direct word, do a quick replace dictionary
    if (text.includes("Logo Design")) return "লোগো ডিজাইন";
    if (text.includes("Brand Identity")) return "ব্র্যান্ড আইডেন্টিটি";
    if (text.includes("Business Card")) return "বিজনেস কার্ড ডিজাইন";
    if (text.includes("Flyer Design")) return "ফ্লায়ার ডিজাইন";
    if (text.includes("Brochure Design")) return "ব্রোশিওর ডিজাইন";
    if (text.includes("Banner Design")) return "ব্যানার ডিজাইন";
    if (text.includes("Social Media")) return "সোশ্যাল মিডিয়া ডিজাইন";
    if (text.includes("Print Design")) return "প্রিন্ট ডিজাইন";
    if (text.includes("Packaging Design")) return "প্যাকেজিং ডিজাইন";
    if (text.includes("Computer Troubleshooting")) return "কম্পিউটার ট্রাবলশুটিং";
    if (text.includes("Operating System")) return "অপারেটিং সিস্টেম";
    if (text.includes("Windows Installation")) return "উইন্ডোজ ইনস্টলেশন";
    if (text.includes("Hardware Diagnostics")) return "হার্ডওয়্যার ডায়াগনস্টিকস";
    if (text.includes("Software & App Installation")) return "সফটওয়্যার ও অ্যাপ ইনস্টলেশন";
    if (text.includes("Network Configuration")) return "নেটওয়ার্ক কনফিগারেশন";
    if (text.includes("Virus & Malware Clean")) return "ভাইরাস ও ম্যালওয়্যার ক্লিন";
    if (text.includes("Data Backup")) return "ডাটা ব্যাকআপ ও রিকভারি";
    if (text.includes("Remote IT Support")) return "রিমোট আইটি সাপোর্ট";
    if (text === "Graphic Design") return "গ্রাফিক ডিজাইন";
    if (text === "IT Support") return "আইটি সাপোর্ট";
    if (text === "Branding") return "ব্র্যান্ডিং";
    if (text === "Marketing") return "মার্কেটিং";
    if (text === "Hardware") return "হার্ডওয়্যার";
    if (text === "Software") return "সফটওয়্যার";
  }

  return text;
};
