import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Facebook, Linkedin, Github, Dribbble, Globe, AlertCircle, X } from 'lucide-react';
import { personalInfo } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import GoogleMap from './GoogleMap';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; subject?: string; message?: string }>({});
  const [touched, setTouched] = useState<{ name?: boolean; email?: boolean; subject?: boolean; message?: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Toast helper to display highly stylized notices
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

  // Comprehensive custom validation suite
  const validateForm = (data: typeof formData) => {
    const newErrors: typeof errors = {};
    
    // Name validation
    if (!data.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (data.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters long';
    } else if (!/^[a-zA-Z\s.-]+$/.test(data.name)) {
      newErrors.name = 'Name can only contain letters, spaces, dots, or dashes';
    }

    // Email validation
    if (!data.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!data.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (data.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters long';
    }

    // Message validation
    if (!data.message.trim()) {
      newErrors.message = 'Message text is required';
    } else if (data.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    return newErrors;
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    const updatedData = { ...formData, [field]: value };
    setFormData(updatedData);
    if (touched[field]) {
      const fieldErrors = validateForm(updatedData);
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
    }
  };

  const handleBlur = (field: keyof typeof formData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validateForm(formData);
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate everything on submission
    const allTouched = { name: true, email: true, subject: true, message: true };
    setTouched(allTouched);
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      addToast('Please resolve the errors highlighted in the form.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate highly optimized local form submission with realistic networking delay
      await new Promise((resolve) => setTimeout(resolve, 1200));

      addToast('Your message was successfully received!', 'success');
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTouched({});
      setErrors({});
    } catch (err: any) {
      console.error('Form processing error:', err);
      addToast('Failed to deliver message. Please retry shortly.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    { title: 'Call Me Directly', value: personalInfo.phone, link: `tel:${personalInfo.phone}`, icon: Phone },
    { title: 'Send An Email', value: personalInfo.email, link: `mailto:${personalInfo.email}`, icon: Mail },
    { title: 'Office Location', value: personalInfo.address, icon: MapPin },
  ];

  return (
    <section id="contact" className="py-20 px-6 sm:px-12 lg:px-16 border-t border-[#222222]/5 relative">
      
      {/* Toast Notification Container with high-end overlay stack */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.2 } }}
              className={`p-4 rounded-2xl shadow-xl flex items-start gap-3 border pointer-events-auto backdrop-blur-md ${
                toast.type === 'error'
                  ? 'bg-rose-50/95 border-rose-200 text-rose-950'
                  : toast.type === 'info'
                  ? 'bg-blue-50/95 border-blue-200 text-blue-950'
                  : 'bg-emerald-50/95 border-emerald-200 text-emerald-950'
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
                <p className="text-xs font-semibold uppercase tracking-wider font-mono opacity-80">
                  {toast.type === 'error' ? 'Validation Error' : 'System Alert'}
                </p>
                <p className="text-sm font-sans mt-0.5 font-light leading-relaxed">{toast.message}</p>
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-charcoal/40 hover:text-charcoal transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-14 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal mt-1">Get In Touch</h2>
          <div className="w-12 h-1 bg-gold mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Form Container */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[2.5rem] border border-charcoal/5 shadow-sm relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left"
                  noValidate
                >
                  <div className="space-y-1">
                    <h3 className="text-xl font-display font-bold text-charcoal">Send {personalInfo.displayName} a Message</h3>
                    <p className="text-xs text-muted-dark leading-relaxed">
                      Have an exciting design project or a network that needs secure maintenance? Complete the form below and I'll reply within 24 hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono uppercase font-semibold text-charcoal tracking-wider flex justify-between">
                        <span>Your Name *</span>
                        {errors.name && touched.name && <span className="text-rose-600 font-mono text-[10px] lowercase font-normal">(!) {errors.name}</span>}
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        placeholder={`e.g. ${personalInfo.displayName}`}
                        className={`w-full bg-[#FAF6EA] border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 font-sans text-charcoal transition-colors ${
                          errors.name && touched.name
                            ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-400'
                            : 'border-charcoal/10 focus:border-gold focus:ring-gold'
                        }`}
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono uppercase font-semibold text-charcoal tracking-wider flex justify-between">
                        <span>Your Email *</span>
                        {errors.email && touched.email && <span className="text-rose-600 font-mono text-[10px] lowercase font-normal">(!) {errors.email}</span>}
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        placeholder="e.g. client@brand.com"
                        className={`w-full bg-[#FAF6EA] border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 font-sans text-charcoal transition-colors ${
                          errors.email && touched.email
                            ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-400'
                            : 'border-charcoal/10 focus:border-gold focus:ring-gold'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-mono uppercase font-semibold text-charcoal tracking-wider flex justify-between">
                      <span>Subject *</span>
                      {errors.subject && touched.subject && <span className="text-rose-600 font-mono text-[10px] lowercase font-normal">(!) {errors.subject}</span>}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      onBlur={() => handleBlur('subject')}
                      placeholder="e.g. Brand Refresh Campaign"
                      className={`w-full bg-[#FAF6EA] border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 font-sans text-charcoal transition-colors ${
                        errors.subject && touched.subject
                          ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-400'
                          : 'border-charcoal/10 focus:border-gold focus:ring-gold'
                      }`}
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono uppercase font-semibold text-charcoal tracking-wider flex justify-between">
                      <span>Message *</span>
                      {errors.message && touched.message && <span className="text-rose-600 font-mono text-[10px] lowercase font-normal">(!) {errors.message}</span>}
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      placeholder="Describe your design and technical requirements..."
                      className={`w-full bg-[#FAF6EA] border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 font-sans text-charcoal resize-none transition-colors ${
                        errors.message && touched.message
                          ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-400'
                          : 'border-charcoal/10 focus:border-gold focus:ring-gold'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 py-3.5 bg-charcoal hover:bg-gold text-[#FAF6EA] hover:text-charcoal rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-gold/15 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#FAF6EA] border-t-transparent rounded-full animate-spin" />
                        Delivering...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
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
                  className="py-16 text-center space-y-4 flex flex-col items-center justify-center h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/15 text-gold flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-charcoal">Message Sent Successfully!</h3>
                  <p className="text-sm text-muted-dark max-w-sm leading-relaxed font-sans font-light">
                    Thank you for reaching out. {personalInfo.name} has received your message and will review your requirements promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-charcoal hover:text-gold uppercase tracking-wider font-mono border-b border-charcoal hover:border-gold transition-colors pt-4 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Right Side: Location Info, Map & Connect */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Cards Info List */}
            <div className="space-y-4">
              {contactCards.map((card, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 border border-charcoal/5 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <card.icon className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase text-muted-dark tracking-wider">{card.title}</h4>
                    {card.link ? (
                      <a href={card.link} className="font-display font-semibold text-sm text-charcoal hover:text-gold transition-colors block mt-1">
                        {card.value}
                      </a>
                    ) : (
                      <span className="font-display font-semibold text-sm text-charcoal block mt-1">{card.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map Embedded Component */}
            <div className="h-64 relative bg-white rounded-[2rem]">
              <GoogleMap />
            </div>

            {/* Social Media Links */}
            <div className="bg-[#FAF6EA] border border-charcoal/10 rounded-2xl p-5 text-center flex flex-col items-center space-y-3">
              <span className="text-[10px] font-mono text-muted-dark uppercase tracking-widest font-semibold">Join Me Online</span>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-[#222222]/10 text-muted-dark hover:text-gold hover:border-gold hover:scale-105 transition-all animate-none" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-[#222222]/10 text-muted-dark hover:text-gold hover:border-gold hover:scale-105 transition-all animate-none" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-[#222222]/10 text-muted-dark hover:text-gold hover:border-gold hover:scale-105 transition-all animate-none" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-[#222222]/10 text-muted-dark hover:text-gold hover:border-gold hover:scale-105 transition-all animate-none" aria-label="Dribbble">
                  <Dribbble className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-[#222222]/10 text-muted-dark hover:text-gold hover:border-gold hover:scale-105 transition-all animate-none" aria-label="Behance">
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
