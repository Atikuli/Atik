import { useState, FormEvent, MouseEvent } from 'react';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, Facebook, Linkedin, Github, 
  Instagram, MessageCircle, Clock, ShieldCheck, AlertCircle, X, Sparkles, 
  PhoneCall, Clipboard, MessageSquare, ExternalLink
} from 'lucide-react';
import { personalInfo, socialLinks } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import GoogleMap from './GoogleMap';
import emailjs from '@emailjs/browser';

// Map icons dynamically
const iconMap: Record<string, any> = {
  Facebook,
  Instagram,
  MessageCircle,
  Send,
  Linkedin,
  Github,
  Behance: (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 13.555c0-.214-.01-.42-.03-.615h-4.364c.02.433.155.776.402 1.026.248.25.6.375 1.053.375.402 0 .717-.107.94-.32s.374-.537.45-.968h1.493c-.092.83-.434 1.482-1.026 1.957s-1.353.712-2.28.712c-1.127 0-2.022-.366-2.684-1.1s-.993-1.745-.993-3.053c0-1.32.336-2.378 1.008-3.17s1.583-1.19 2.735-1.19c1.11 0 1.97.354 2.583 1.06s.918 1.688.918 2.946v1.127h-6.22zm-1.46-2.58c-.015-.413-.134-.736-.356-.97s-.522-.35-.9-.35c-.39 0-.693.118-.91.35s-.35.57-.4 1.01h2.566zM10.155 12.04c.553.132.996.38 1.33.74s.5 1.107.5 1.905c0 .762-.16 1.393-.48 1.892s-.758.872-1.314 1.117S9.04 18 8.084 18H3V6h4.843c1.01 0 1.83.205 2.457.61s.94.975.94 1.71c0 .546-.144.997-.432 1.352s-.72.616-1.293.782v.07a2.03 2.03 0 011.59 1.516zm-5.46-4.323v2.8h2.64c.48 0 .864-.103 1.152-.3s.432-.51.432-.937c0-.41-.144-.722-.432-.94s-.682-.323-1.182-.323H4.695zm0 8.563h3.04c.54 0 .964-.117 1.275-.35s.466-.583.466-1.048c0-.422-.153-.746-.46-1.01s-.754-.373-1.343-.373H4.695v2.78zM19.102 7c.725 0 1.25.18 1.574.53s.486.855.486 1.52h-4.12c0-.66.162-1.164.485-1.514s.85-.536 1.575-.536z" />
    </svg>
  )
};

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
}

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    subject: '', 
    message: '',
    preferredMethod: 'Email' // Email, WhatsApp, Telegram, SMS
  });

  const [errors, setErrors] = useState<{ 
    name?: string; 
    email?: string; 
    phone?: string; 
    subject?: string; 
    message?: string;
  }>({});

  const [touched, setTouched] = useState<{ 
    name?: boolean; 
    email?: boolean; 
    phone?: boolean; 
    subject?: boolean; 
    message?: boolean;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  // Toast System Helper
  const addToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Touch Ripple Animation effect
  const handleRipple = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 1000);
  };

  // Form Field Validation Engine
  const validateField = (field: string, value: string) => {
    let error = '';
    const val = value.trim();

    if (field === 'name') {
      if (!val) error = 'Full name is required';
      else if (val.length < 3) error = 'Name must be at least 3 characters';
    } else if (field === 'email') {
      if (!val) error = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) error = 'Enter a valid email address';
    } else if (field === 'phone') {
      if (!val) error = 'Phone number is required';
      else if (!/^\+?[0-9\s\-()]{7,20}$/.test(val)) error = 'Enter a valid phone number';
    } else if (field === 'subject') {
      if (!val) error = 'Subject is required';
      else if (val.length < 3) error = 'Subject must be at least 3 characters';
    } else if (field === 'message') {
      if (!val) error = 'Message is required';
      else if (val.length < 10) error = 'Message must be at least 10 characters';
    }

    return error;
  };

  type FormFieldName = 'name' | 'email' | 'phone' | 'subject' | 'message';

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    const updatedData = { ...formData, [field]: value };
    setFormData(updatedData);
    
    if (field !== 'preferredMethod') {
      const formField = field as FormFieldName;
      if (touched[formField]) {
        const error = validateField(formField, value);
        setErrors((prev) => ({ ...prev, [formField]: error || undefined }));
      }
    }
  };

  const handleBlur = (field: FormFieldName) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error || undefined }));
  };

  // Handle Form Submission with Custom Multi-Protocol Router
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched & run validation
    const fields: FormFieldName[] = ['name', 'email', 'phone', 'subject', 'message'];
    const newTouched = { name: true, email: true, phone: true, subject: true, message: true };
    setTouched(newTouched);

    const newErrors: Record<string, string> = {};
    let hasError = false;

    fields.forEach((f) => {
      const err = validateField(f, formData[f]);
      if (err) {
        newErrors[f] = err;
        hasError = true;
      }
    });

    setErrors(newErrors);

    if (hasError) {
      addToast('Please correct validation errors first.', 'error');
      return;
    }

    setIsSubmitting(true);

    const preparedMessage = `Hello Atik Hamim,

My Name: ${formData.name}
My Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}

I visited your portfolio and would like to discuss a project with you.`;

    try {
      if (formData.preferredMethod === 'Email') {
        // Send email via EmailJS (fully client-side integration)
        // Check standard template variables
        const serviceId = (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID || 'service_default';
        const templateId = (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID || 'template_default';
        const publicKey = (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY;

        if (publicKey) {
          await emailjs.send(
            serviceId,
            templateId,
            {
              from_name: formData.name,
              reply_to: formData.email,
              phone: formData.phone,
              subject: formData.subject,
              message: formData.message,
              to_email: 'mdatikulislamhamim68@gmail.com'
            },
            publicKey
          );
          addToast('Message sent to mdatikulislamhamim68@gmail.com via EmailJS!', 'success');
        } else {
          // Elegant simulated local fallback as specified
          console.warn('EmailJS public key unavailable. Running simulated transmission...');
          await new Promise((resolve) => setTimeout(resolve, 1500));
          addToast('Message sent to mdatikulislamhamim68@gmail.com (Simulated)!', 'success');
        }
        setSubmitted(true);
      } 
      else if (formData.preferredMethod === 'WhatsApp') {
        // WhatsApp Protocol redirection
        const waUrl = `https://wa.me/8801518679771?text=${encodeURIComponent(preparedMessage)}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
        addToast('Redirecting to WhatsApp...', 'success');
        setSubmitted(true);
      } 
      else if (formData.preferredMethod === 'Telegram') {
        // Copy the message to clipboard first as instructed
        await navigator.clipboard.writeText(preparedMessage);
        addToast('Message copied successfully.', 'success');
        
        // Open Telegram link
        const tgUrl = `https://t.me/Nahidhasan6996`;
        setTimeout(() => {
          window.open(tgUrl, '_blank', 'noopener,noreferrer');
        }, 500);
        setSubmitted(true);
      } 
      else if (formData.preferredMethod === 'SMS') {
        // SMS redirect filling arguments
        const smsUrl = `sms:+8801518679771?body=${encodeURIComponent(preparedMessage)}`;
        window.open(smsUrl, '_self');
        addToast('Opening native SMS text app...', 'success');
        setSubmitted(true);
      }
    } catch (err: any) {
      console.error('Submission failed:', err);
      addToast('Transmission failed. Please check connection and try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Quick Dispatch Click handlers
  const handleQuickAction = (action: 'email' | 'whatsapp' | 'telegram' | 'call') => {
    if (action === 'email') {
      window.open('mailto:mdatikulislamhamim68@gmail.com?subject=Project%20Discussion', '_self');
      addToast('Opening mail client...', 'success');
    } else if (action === 'whatsapp') {
      window.open('https://wa.me/8801518679771', '_blank', 'noopener,noreferrer');
      addToast('Opening WhatsApp chat...', 'success');
    } else if (action === 'telegram') {
      window.open('https://t.me/Nahidhasan6996', '_blank', 'noopener,noreferrer');
      addToast('Opening Telegram DM...', 'success');
    } else if (action === 'call') {
      window.open('tel:+8801316839703', '_self');
      addToast('Initiating dialer...', 'success');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 lg:px-16 border-t border-[#222222]/5 relative overflow-hidden bg-gradient-to-b from-transparent to-[#FAF6EA]/30">
      
      {/* Toast Notifications Canvas */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 35, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              className={`p-4 rounded-2xl shadow-2xl flex items-start gap-3 border pointer-events-auto backdrop-blur-md ${
                toast.type === 'error'
                  ? 'bg-rose-50/95 border-rose-200 text-rose-950 shadow-rose-900/5'
                  : 'bg-emerald-50/95 border-emerald-200 text-emerald-950 shadow-emerald-900/5'
              }`}
            >
              <div className="shrink-0 mt-0.5">
                {toast.type === 'error' ? (
                  <AlertCircle className="w-5 h-5 text-rose-600" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                )}
              </div>
              <div className="flex-1 text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider font-mono opacity-70">
                  {toast.type === 'error' ? 'Validation Alert' : 'Success'}
                </p>
                <p className="text-xs sm:text-sm font-sans mt-0.5 font-light leading-relaxed">{toast.message}</p>
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-charcoal/30 hover:text-charcoal transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold bg-gold/10 px-3.5 py-1.5 rounded-full">Contact Hub</span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-charcoal dark:text-cream mt-3 tracking-tight">Smart Contact Hub</h2>
          <div className="w-12 h-1 bg-gold mx-auto mt-5 rounded-full" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT SIDE: Professional Profile Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#FAF6EA] dark:bg-[#1a1a1a] border border-charcoal/5 dark:border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-xl shadow-charcoal/5 relative overflow-hidden"
          >
            {/* Ambient Background Graphic */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-8">
              {/* Profile Card block */}
              <div className="flex items-center gap-5">
                <div className="relative shrink-0">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-gold p-1 bg-white dark:bg-[#121212] shadow-md">
                    <img 
                      src="https://res.cloudinary.com/davtdct3r/image/upload/v1783175593/IMG_20260612_183706_762.jpg_trr22g.jpg" 
                      alt="Md. Atikul Islam Hamim" 
                      className="w-full h-full object-cover rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="absolute -bottom-1.5 -right-1.5 bg-emerald-500 border-2 border-white dark:border-[#1a1a1a] rounded-full px-2 py-0.5 text-[8px] font-bold text-white flex items-center gap-0.5 shadow-sm font-mono uppercase">
                    Live
                  </span>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-display font-bold text-charcoal dark:text-cream leading-tight">Md. Atikul Islam Hamim</h3>
                  <p className="text-xs text-muted-dark/90 dark:text-gray-300 font-medium mt-1">Graphic Designer & IT Support Specialist</p>
                  
                  <div className="mt-2 inline-flex items-center gap-1 text-[9px] font-mono font-bold uppercase text-gold bg-gold/10 px-2.5 py-0.5 rounded-md">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    NSDA Certified
                  </div>
                </div>
              </div>

              {/* Verified metadata items list */}
              <div className="space-y-4 pt-6 border-t border-charcoal/5 dark:border-white/5 text-left text-xs">
                
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#121212] border border-charcoal/5 dark:border-white/5 flex items-center justify-center text-gold shadow-sm shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-mono text-muted-dark dark:text-gray-400 tracking-wider font-semibold block">Location</span>
                    <p className="text-sm text-charcoal dark:text-cream font-medium mt-0.5">Court Rayapara, Rajshahi, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 cursor-pointer group" onClick={() => {
                  navigator.clipboard.writeText('mdatikulislamhamim68@gmail.com');
                  addToast('Email copied to clipboard!', 'success');
                }}>
                  <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#121212] border border-charcoal/5 dark:border-white/5 flex items-center justify-center text-gold shadow-sm shrink-0 group-hover:border-gold/30 transition-colors">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <span className="text-[9px] uppercase font-mono text-muted-dark dark:text-gray-400 tracking-wider font-semibold block">Email</span>
                    <p className="text-sm text-charcoal dark:text-cream font-medium mt-0.5 break-all group-hover:text-gold transition-colors">mdatikulislamhamim68@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 cursor-pointer group" onClick={() => {
                  navigator.clipboard.writeText('+8801316839703');
                  addToast('Phone number copied!', 'success');
                }}>
                  <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#121212] border border-charcoal/5 dark:border-white/5 flex items-center justify-center text-gold shadow-sm shrink-0 group-hover:border-gold/30 transition-colors">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-mono text-muted-dark dark:text-gray-400 tracking-wider font-semibold block">Phone</span>
                    <p className="text-sm text-charcoal dark:text-cream font-medium mt-0.5 group-hover:text-gold transition-colors">+8801316839703</p>
                  </div>
                </div>

              </div>

              {/* Availability metrics block */}
              <div className="bg-white dark:bg-[#121212] border border-charcoal/5 dark:border-white/5 rounded-2xl p-5 text-left space-y-3.5 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase text-charcoal dark:text-cream tracking-wider">Available for Freelance</span>
                </div>
                
                <div className="flex items-start gap-3 pt-3 border-t border-charcoal/5 dark:border-white/5">
                  <Clock className="w-4.5 h-4.5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] uppercase font-mono text-muted-dark dark:text-gray-400 tracking-wider block">Working Hours</span>
                    <p className="text-xs text-charcoal dark:text-cream font-medium mt-0.5 leading-relaxed">
                      Saturday - Thursday<br />
                      <span className="font-mono text-gold font-bold">9 AM - 8 PM</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Embedded maps widget layout */}
            <div className="h-44 relative rounded-2xl overflow-hidden mt-6 border border-charcoal/5 dark:border-white/5 shadow-inner">
              <GoogleMap />
            </div>

          </motion.div>

          {/* RIGHT SIDE: Beautiful Contact Form & Interactivity Router */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white/50 dark:bg-[#1a1a1a]/50 backdrop-blur-md border border-white/80 dark:border-white/5 shadow-xl shadow-charcoal/5 p-8 sm:p-10 rounded-[2.5rem] flex flex-col justify-between relative"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4 text-left"
                  noValidate
                >
                  <div className="space-y-1">
                    <h3 className="text-xl font-display font-extrabold text-charcoal dark:text-cream flex items-center gap-2">
                      Send Me a Message <Sparkles className="w-4 h-4 text-gold fill-gold/15" />
                    </h3>
                    <p className="text-xs text-muted-dark dark:text-gray-400 font-light leading-relaxed">
                      Send a secure message directly. Select your preferred channel below for automatic workflow configuration.
                    </p>
                  </div>

                  {/* Input row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-[10px] font-mono uppercase font-bold text-charcoal dark:text-cream tracking-wider flex justify-between">
                        <span>Full Name *</span>
                        {errors.name && touched.name && <span className="text-rose-600 font-mono text-[9px] font-normal lowercase">(!) {errors.name}</span>}
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        placeholder="e.g. John Doe"
                        className={`w-full bg-[#FAF6EA]/40 dark:bg-black/30 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 font-sans text-charcoal dark:text-cream transition-all ${
                          errors.name && touched.name
                            ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-400'
                            : 'border-charcoal/10 dark:border-white/10 focus:border-gold/50 focus:ring-gold/50 focus:bg-white dark:focus:bg-[#121212]'
                        }`}
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-[10px] font-mono uppercase font-bold text-charcoal dark:text-cream tracking-wider flex justify-between">
                        <span>Email *</span>
                        {errors.email && touched.email && <span className="text-rose-600 font-mono text-[9px] font-normal lowercase">(!) {errors.email}</span>}
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        placeholder="e.g. john@example.com"
                        className={`w-full bg-[#FAF6EA]/40 dark:bg-black/30 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 font-sans text-charcoal dark:text-cream transition-all ${
                          errors.email && touched.email
                            ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-400'
                            : 'border-charcoal/10 dark:border-white/10 focus:border-gold/50 focus:ring-gold/50 focus:bg-white dark:focus:bg-[#121212]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Input row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div className="space-y-1">
                      <label htmlFor="phone" className="text-[10px] font-mono uppercase font-bold text-charcoal dark:text-cream tracking-wider flex justify-between">
                        <span>Phone Number *</span>
                        {errors.phone && touched.phone && <span className="text-rose-600 font-mono text-[9px] font-normal lowercase">(!) {errors.phone}</span>}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        placeholder="e.g. +8801316839703"
                        className={`w-full bg-[#FAF6EA]/40 dark:bg-black/30 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 font-sans text-charcoal dark:text-cream transition-all ${
                          errors.phone && touched.phone
                            ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-400'
                            : 'border-charcoal/10 dark:border-white/10 focus:border-gold/50 focus:ring-gold/50 focus:bg-white dark:focus:bg-[#121212]'
                        }`}
                      />
                    </div>

                    {/* Preferred Contact Method dropdown */}
                    <div className="space-y-1">
                      <label htmlFor="preferredMethod" className="text-[10px] font-mono uppercase font-bold text-charcoal dark:text-cream tracking-wider">
                        Preferred Contact Method
                      </label>
                      <select
                        id="preferredMethod"
                        value={formData.preferredMethod}
                        onChange={(e) => handleInputChange('preferredMethod', e.target.value)}
                        className="w-full bg-[#FAF6EA]/40 dark:bg-black/30 border border-charcoal/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 focus:bg-white dark:focus:bg-[#121212] font-sans text-charcoal dark:text-cream transition-all cursor-pointer"
                      >
                        <option value="Email" className="dark:bg-[#1a1a1a] dark:text-cream">Email (EmailJS Direct)</option>
                        <option value="WhatsApp" className="dark:bg-[#1a1a1a] dark:text-cream">WhatsApp Message</option>
                        <option value="Telegram" className="dark:bg-[#1a1a1a] dark:text-cream">Telegram DM</option>
                        <option value="SMS" className="dark:bg-[#1a1a1a] dark:text-cream">SMS Text Message</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label htmlFor="subject" className="text-[10px] font-mono uppercase font-bold text-charcoal dark:text-cream tracking-wider flex justify-between">
                      <span>Subject *</span>
                      {errors.subject && touched.subject && <span className="text-rose-600 font-mono text-[9px] font-normal lowercase">(!) {errors.subject}</span>}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      onBlur={() => handleBlur('subject')}
                      placeholder="e.g. Graphic Logo Project"
                      className={`w-full bg-[#FAF6EA]/40 dark:bg-black/30 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 font-sans text-charcoal dark:text-cream transition-all ${
                        errors.subject && touched.subject
                          ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-400'
                          : 'border-charcoal/10 dark:border-white/10 focus:border-gold/50 focus:ring-gold/50 focus:bg-white dark:focus:bg-[#121212]'
                      }`}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label htmlFor="message" className="text-[10px] font-mono uppercase font-bold text-charcoal dark:text-cream tracking-wider flex justify-between">
                      <span>Message *</span>
                      {errors.message && touched.message && <span className="text-rose-600 font-mono text-[9px] font-normal lowercase">(!) {errors.message}</span>}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      placeholder="Let's build something... Please detail your graphics design or computer diagnostics needs."
                      className={`w-full bg-[#FAF6EA]/40 dark:bg-black/30 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 font-sans text-charcoal dark:text-cream resize-none transition-all ${
                        errors.message && touched.message
                          ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-400'
                          : 'border-charcoal/10 dark:border-white/10 focus:border-gold/50 focus:ring-gold/50 focus:bg-white dark:focus:bg-[#121212]'
                      }`}
                    />
                  </div>

                  {/* Action dispatch button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-charcoal hover:bg-gold text-[#FAF6EA] hover:text-charcoal rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-gold/15 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4.5 h-4.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send via {formData.preferredMethod}
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-5 flex flex-col items-center justify-center h-full text-left"
                >
                  <motion.div 
                    initial={{ scale: 0.5, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center shadow-lg"
                  >
                    <CheckCircle2 className="w-9 h-9" />
                  </motion.div>
                   <h3 className="text-2xl font-display font-bold text-charcoal dark:text-cream text-center">Transmission Complete!</h3>
                  <p className="text-sm text-muted-dark dark:text-gray-300 max-w-sm leading-relaxed font-sans font-light text-center">
                    Your contact protocol has executed successfully. Md. Atikul Islam Hamim will review your inquiry and connect via your preferred communication method.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-charcoal dark:text-cream hover:text-gold dark:hover:text-gold uppercase tracking-wider font-mono border-b border-charcoal dark:border-cream hover:border-gold transition-colors pt-4 cursor-pointer mx-auto"
                  >
                    Establish Another Channel
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

        {/* QUICK CONTACT BUTTONS SECTION */}
        <div className="mt-16 text-center space-y-5">
          <span className="text-[10px] font-mono text-muted-dark dark:text-gray-400 uppercase tracking-widest font-semibold block">Quick Contact Cards</span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {/* Email Me */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={(e) => { handleRipple(e); handleQuickAction('email'); }}
              className="relative overflow-hidden bg-white/40 dark:bg-[#1a1a1a]/40 backdrop-blur-md border border-charcoal/5 dark:border-white/5 hover:border-gold/40 hover:shadow-[0_15px_30px_rgba(212,175,55,0.08)] p-5 rounded-2xl cursor-pointer transition-all duration-300 text-center flex flex-col items-center space-y-2 group"
            >
              {/* Visual ripple effect overlay */}
              {ripples.map((rip) => (
                <span
                  key={rip.id}
                  className="absolute bg-gold/15 rounded-full pointer-events-none animate-ping"
                  style={{
                    left: rip.x - 32,
                    top: rip.y - 32,
                    width: '64px',
                    height: '64px'
                  }}
                />
              ))}
              
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#121212] border border-charcoal/5 dark:border-white/5 flex items-center justify-center text-gold shadow-sm group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-sm font-display font-bold text-charcoal dark:text-cream">Email Me</span>
              <span className="text-[10px] text-muted-dark dark:text-gray-400 font-mono">mdatikulislam...</span>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={(e) => { handleRipple(e); handleQuickAction('whatsapp'); }}
              className="relative overflow-hidden bg-white/40 dark:bg-[#1a1a1a]/40 backdrop-blur-md border border-charcoal/5 dark:border-white/5 hover:border-gold/40 hover:shadow-[0_15px_30px_rgba(212,175,55,0.08)] p-5 rounded-2xl cursor-pointer transition-all duration-300 text-center flex flex-col items-center space-y-2 group"
            >
              {/* Visual ripple effect overlay */}
              {ripples.map((rip) => (
                <span
                  key={rip.id}
                  className="absolute bg-emerald-500/10 rounded-full pointer-events-none animate-ping"
                  style={{
                    left: rip.x - 32,
                    top: rip.y - 32,
                    width: '64px',
                    height: '64px'
                  }}
                />
              ))}

              <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#121212] border border-charcoal/5 dark:border-white/5 flex items-center justify-center text-emerald-500 shadow-sm group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all">
                <MessageCircle className="w-5 h-5 fill-emerald-50" />
              </div>
              <span className="text-sm font-display font-bold text-charcoal dark:text-cream">WhatsApp</span>
              <span className="text-[10px] text-muted-dark dark:text-gray-400 font-mono">+8801518...</span>
            </motion.div>

            {/* Telegram */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={(e) => { handleRipple(e); handleQuickAction('telegram'); }}
              className="relative overflow-hidden bg-white/40 dark:bg-[#1a1a1a]/40 backdrop-blur-md border border-charcoal/5 dark:border-white/5 hover:border-gold/40 hover:shadow-[0_15px_30px_rgba(212,175,55,0.08)] p-5 rounded-2xl cursor-pointer transition-all duration-300 text-center flex flex-col items-center space-y-2 group"
            >
              {/* Visual ripple effect overlay */}
              {ripples.map((rip) => (
                <span
                  key={rip.id}
                  className="absolute bg-blue-400/10 rounded-full pointer-events-none animate-ping"
                  style={{
                    left: rip.x - 32,
                    top: rip.y - 32,
                    width: '64px',
                    height: '64px'
                  }}
                />
              ))}

              <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#121212] border border-charcoal/5 dark:border-white/5 flex items-center justify-center text-blue-400 shadow-sm group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.2)] transition-all">
                <Send className="w-5 h-5 fill-blue-50" />
              </div>
              <span className="text-sm font-display font-bold text-charcoal dark:text-cream">Telegram</span>
              <span className="text-[10px] text-muted-dark dark:text-gray-400 font-mono">@Nahidhasan6996</span>
            </motion.div>

            {/* Call Me */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={(e) => { handleRipple(e); handleQuickAction('call'); }}
              className="relative overflow-hidden bg-white/40 dark:bg-[#1a1a1a]/40 backdrop-blur-md border border-charcoal/5 dark:border-white/5 hover:border-gold/40 hover:shadow-[0_15px_30px_rgba(212,175,55,0.08)] p-5 rounded-2xl cursor-pointer transition-all duration-300 text-center flex flex-col items-center space-y-2 group"
            >
              {/* Visual ripple effect overlay */}
              {ripples.map((rip) => (
                <span
                  key={rip.id}
                  className="absolute bg-amber-500/10 rounded-full pointer-events-none animate-ping"
                  style={{
                    left: rip.x - 32,
                    top: rip.y - 32,
                    width: '64px',
                    height: '64px'
                  }}
                />
              ))}

              <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#121212] border border-charcoal/5 dark:border-white/5 flex items-center justify-center text-amber-500 shadow-sm group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all">
                <PhoneCall className="w-5 h-5" />
              </div>
              <span className="text-sm font-display font-bold text-charcoal dark:text-cream">Call Me</span>
              <span className="text-[10px] text-muted-dark dark:text-gray-400 font-mono">+8801316839703</span>
            </motion.div>
          </div>
        </div>

        {/* SOCIAL MEDIA SECTION */}
        <div className="mt-16 pt-10 border-t border-charcoal/5 dark:border-white/5 text-center space-y-5">
          <span className="text-[10px] font-mono text-muted-dark dark:text-gray-400 uppercase tracking-widest font-bold block">Social Media Portal</span>
          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((link) => {
              const LinkIcon = iconMap[link.iconName] || Mail;
              return (
                <div key={link.id} className="relative group">
                  {/* Premium Custom Tooltip */}
                  <span className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-charcoal text-white text-[9px] font-mono px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md z-30 whitespace-nowrap border border-white/10">
                    {link.name === 'Behance' || link.name === 'LinkedIn' || link.name === 'GitHub' && link.url === '#' ? `${link.name} (Coming Soon)` : `Visit ${link.name}`}
                  </span>
                  
                  {/* Visual Premium Social Icon Button with Hover & Glow effects */}
                  <motion.a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.15, 
                      y: -3,
                      boxShadow: '0 0 20px rgba(212,175,55,0.3)',
                      borderColor: 'rgba(212,175,55,0.5)'
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-white dark:bg-[#1a1a1a] border border-charcoal/10 dark:border-white/10 text-muted-dark dark:text-gray-400 hover:text-gold hover:border-gold transition-colors shadow-sm"
                  >
                    <LinkIcon className="w-5 h-5" />
                  </motion.a>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
