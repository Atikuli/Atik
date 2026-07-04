import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

// Load environment variables
dotenv.config();

// Define System Instructions for the Portfolio AI Assistant
const PORTFOLIO_AI_SYSTEM_INSTRUCTION = `
You are Atik Hamim's official Portfolio AI Assistant. Your sole job is to answer questions about Md. Atikul Islam Hamim (Atik Hamim) and his professional portfolio.
You must be polite, helpful, creative, and professional. You should support both English and Bangla languages based on the user's input language.

====================================================
ATIK HAMIM'S PORTFOLIO CONTEXT:
====================================================
- Full Name: Md. Atikul Islam Hamim
- Display Name: Atik Hamim
- Titles: Graphic Designer, IT Support Specialist, Visual Designer
- Core Tagline: "Design Creative. Solve Problems. Build Trust."
- Short Bio: An NSDA Level-3 Certified Graphic Designer and IT Support Specialist from Rajshahi, Bangladesh. He successfully completed two NSDA Level-3 professional training programs from Aerodesk Learning Institute.
- Current Education: Second Year (Honours), Department of Islamic Studies at Government Bangla College, Dhaka.
- Previous Education: SSC from Rajshahi Court Academy, HSC from Metropolitan College.
- Contact Details:
  * Email: mdatikulislamhamim68@gmail.com
  * Phone/WhatsApp: +8801316839703
  * Location: Court Rayapara, Rajshahi, Bangladesh
- Availability: Available for Freelance Work, Full-Time Hire, and Part-Time Support.
- Key Certifications (National Skills Development Authority - NSDA):
  * Graphics Design for Freelancing (NSDA Level-3 Certified) - Trained at Aerodesk Learning Institute
  * IT Support Service (NSDA Level-3 Certified) - Trained at Aerodesk Learning Institute
- Professional Training Programs (Aerodesk Learning Institute):
  * Graphics Design for Freelancing (Level-3)
  * IT Support Service (Level-3)
- Services Provided:
  * Logo Design & Visual Brand Guidelines
  * Business Card, Flyer, Brochure, and Poster Layouts
  * Packaging, Banner, and Social Media Graphics
  * Computer Hardware/Software Troubleshooting (motherboard, RAM, power, operating systems)
  * Clean Windows OS Installation & Core Software Deployments (Microsoft Office Suites, Drivers)
  * Wireless Router security, Wi-Fi setups, and Local LAN configuration
  * Helpdesk Customer Technical Assistance (Remote Support via AnyDesk or TeamViewer)
- Technical Skills Matrix:
  * Design Tools: Adobe Illustrator (95%), Adobe Photoshop (92%), Adobe InDesign (85%)
  * Visual Specialties: Logo Design (95%), Brand Identity (92%), Print Layouts (90%), Packaging (85%)
  * IT Systems: Computer Troubleshooting (92%), Windows Installation (95%), Office Suites (95%), Wi-Fi & LAN Configuration (88%), Malware Removal (90%), Helpdesk Remote Support (88%)
- Portfolio Projects:
  * Minimalist Brand Identity Design (complete visual architectures and stationary guides)
  * Creative Geometric Logo Collection (custom corporate brand marks)
  * Modern Typographic Poster & Flyer (Swiss grid layouts)
  * Sleek Product & Package Design (retail containers and box dielines)
  * High-Engagement Social Media Kits (posts templates, cover headers)
  * Premium Debossed Business Cards (foil stamping designs)
  * Corporate Brochure Grid Layout ( catalogs, catalogs folders)
  * Sleek Tech Exhibition Banner (large-scale commercial expo prints)
  * Full Stack IT Support Setup (router setup, cabling, print servers for small branch offices)
- Key Achievements:
  * NSDA Certified Graphics Design for Freelancing Level-3
  * NSDA Certified IT Support Service Level-3
  * Successfully completed dual professional training certifications from Aerodesk Learning Institute.

====================================================
STRICT COMPLIANCE INSTRUCTIONS:
====================================================
1. ANSWER ONLY QUESTIONS RELATED TO ATIK HAMIM AND HIS PORTFOLIO.
2. DO NOT ANSWER general knowledge queries, sports, weather, politics, math calculations, programming code generation, or any questions about other companies/individuals.
3. If the user asks an off-topic, unknown, or unrelated question, you MUST politely reply with this exact fallback message or a highly similar polite variant in the user's language:
   "I only answer questions related to Atik Hamim's professional portfolio. Please contact me directly at mdatikulislamhamim68@gmail.com or call +8801316839703 for further inquiries!"
   In Bangla: "আমি শুধুমাত্র আতিক হামিমের পেশাদার পোর্টফোলিও সম্পর্কিত প্রশ্নের উত্তর দিতে পারি। যেকোনো তথ্যের জন্য সরাসরি যোগাযোগ করুন: mdatikulislamhamim68@gmail.com অথবা কল করুন +8801316839703 নম্বরে!"
4. Never make up or invent any information that is not in the context. Never invent fake client names, fake projects, or fake certifications. Keep it completely aligned with the real data.
5. If the user asks "Who are you?", say you are Atik Hamim's portfolio assistant.
`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // 1. SECURE API ROUTE: Gemini Portfolio Assistant Chat Proxy
  app.post('/api/gemini/chat', async (req, res) => {
    try {
      const { message, history } = req.body;

      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message field is required and must be a string.' });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Fallback gracefully to a high-quality local fallback system when API Key is missing during preview/development
        console.warn('Warning: GEMINI_API_KEY is not configured. Running mock AI agent response.');
        return handleMockResponse(message, res);
      }

      // Initialize GoogleGenAI SDK correctly with the required headers for AI Studio
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      // Construct conversational messages
      const contents: any[] = [];
      
      // Load history if available
      if (Array.isArray(history)) {
        history.forEach((turn: any) => {
          if (turn.role && turn.text) {
            contents.push({
              role: turn.role === 'assistant' ? 'model' : 'user',
              parts: [{ text: turn.text }]
            });
          }
        });
      }

      // Add current message
      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      // Query Gemini model gemini-3.5-flash for high performance and low latency
      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: contents,
        config: {
          systemInstruction: PORTFOLIO_AI_SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      const responseText = response.text || 'Please contact me directly.';
      return res.json({ reply: responseText });

    } catch (error: any) {
      console.error('Error calling Gemini API:', error);
      return res.status(500).json({ 
        error: 'Technical assistance pipeline encountered an issue.',
        details: error.message || ''
      });
    }
  });

  // Local rule-based handler for when the API Key is not set or during static offline modes
  function handleMockResponse(message: string, res: any) {
    const text = message.toLowerCase();
    let reply = '';

    const isBangla = /[া-য়]/.test(message);

    if (text.includes('service') || text.includes('কাজ') || text.includes('সেবা') || text.includes('offer')) {
      reply = isBangla
        ? "আমি আতিক হামিম। আমি লোগো ডিজাইন, ব্র্যান্ড আইডেন্টিটি, ভিজিটিং কার্ড, ফ্লায়ার ডিজাইন এবং কম্পিউটার হার্ডওয়্যার/সফটওয়্যার ও নেটওয়ার্কিং সাপোর্ট প্রদান করি।"
        : "Atik Hamim provides premium Logo Design, Brand Identity, Business Cards, Flyer Design, and professional IT Troubleshooting (Windows Setup, hardware support, local Wi-Fi configuration).";
    } else if (text.includes('certif') || text.includes('সার্টিফিকেট') || text.includes('nsda')) {
      reply = isBangla
        ? "আতিক হামিম এনএসডিএ (NSDA) লেভেল-৩ সার্টিফাইড গ্রাফিক ডিজাইনার এবং আইটি সাপোর্ট স্পেশালিস্ট।"
        : "Atik Hamim is National Skills Development Authority (NSDA) Level-3 Certified in both Graphics Design for Freelancing and IT Support Service.";
    } else if (text.includes('contact') || text.includes('যোগাযোগ') || text.includes('phone') || text.includes('email') || text.includes('number')) {
      reply = isBangla
        ? "সরাসরি যোগাযোগ করুন: mdatikulislamhamim68@gmail.com অথবা ফোন করুন: +8801316839703 নম্বরে।"
        : "You can reach Atik directly at mdatikulislamhamim68@gmail.com or call/WhatsApp him at +8801316839703.";
    } else if (text.includes('hire') || text.includes('freelance') || text.includes('কাজ করাতে')) {
      reply = isBangla
        ? "আতিক ফ্রিল্যান্স কাজের জন্য উপলব্ধ! বিস্তারিত আলোচনার জন্য mdatikulislamhamim68@gmail.com অথবা +8801316839703 নম্বরে যোগাযোগ করুন।"
        : "Yes, Atik Hamim is fully available for freelance projects and technical support contracts. Reach him via email (mdatikulislamhamim68@gmail.com) or phone (+8801316839703)!";
    } else if (text.includes('who are you') || text.includes('কে') || text.includes('পরিচয়')) {
      reply = isBangla
        ? "আমি আতিক হামিমের পোর্টফোলিও এআই অ্যাসিস্ট্যান্ট। আতিকের কাজ, দক্ষতা, সার্টিফিকেশন বা সার্ভিস নিয়ে যেকোনো প্রশ্ন করতে পারেন!"
        : "I am Atik Hamim's official Portfolio AI Assistant. You can ask me anything about Atik's design work, technical IT support services, certifications, and academic background!";
    } else {
      reply = isBangla
        ? "আমি শুধুমাত্র আতিক হামিমের পেশাদার পোর্টফোলিও সম্পর্কিত প্রশ্নের উত্তর দিতে পারি। যেকোনো তথ্যের জন্য সরাসরি যোগাযোগ করুন: mdatikulislamhamim68@gmail.com অথবা কল করুন +8801316839703 নম্বরে!"
        : "I only answer questions related to Atik Hamim's professional portfolio. Please contact me directly at mdatikulislamhamim68@gmail.com or call +8801316839703 for further inquiries!";
    }

    return res.json({ reply });
  }

  // 2. VITE DEV SERVER / PRODUCTION SERVING
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
