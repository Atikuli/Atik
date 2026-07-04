import { pricingPackages } from '../data';
import { motion } from 'motion/react';
import { Check, Flame, CreditCard, Laptop, ShieldCheck, Sparkles } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 sm:px-12 lg:px-16 border-t border-[#222222]/5 bg-white/10 relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-charcoal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-14 text-left" data-aos="fade-up">
          <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">Investments</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal mt-1">Pricing Packages</h2>
          <div className="w-12 h-1 bg-gold mt-4 rounded-full" />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPackages.map((pkg, idx) => {
            const isPopular = pkg.isPopular;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`flex flex-col justify-between rounded-[2.5rem] p-8 sm:p-10 border relative transition-all duration-300 ${
                  isPopular
                    ? 'bg-charcoal text-[#FAF6EA] border-charcoal shadow-xl scale-100 md:scale-[1.03] z-10'
                    : 'bg-white text-charcoal border-charcoal/5 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular Tag Indicator */}
                {isPopular && (
                  <span className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gold text-charcoal font-mono text-[9px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Flame className="w-3 h-3 text-charcoal fill-charcoal animate-pulse" /> Popular Setup
                  </span>
                )}

                <div className="space-y-6 text-left">
                  {/* Category Indicator */}
                  <span className={`inline-block text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-md ${
                    isPopular
                      ? 'bg-gold/20 text-gold border border-gold/10'
                      : 'bg-[#FAF6EA] text-charcoal border border-charcoal/10'
                  }`}>
                    {pkg.category === 'design' ? 'Creative Layouts' : pkg.category === 'it' ? 'IT Operations' : 'Elite Hybrid Partner'}
                  </span>

                  <div>
                    <h3 className="font-display font-bold text-xl leading-tight">{pkg.name}</h3>
                    <p className={`text-xs mt-2 font-sans font-light leading-relaxed ${isPopular ? 'text-white/70' : 'text-muted-dark'}`}>
                      {pkg.description}
                    </p>
                  </div>

                  {/* Pricing Frame */}
                  <div className="py-4 border-y border-current/10 flex items-baseline gap-1">
                    <span className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight">{pkg.price}</span>
                    <span className={`text-[10px] font-mono uppercase font-bold tracking-widest ${isPopular ? 'text-white/60' : 'text-muted-dark'}`}>
                      / {pkg.billing === 'Quarterly Retainer' ? 'Quarter' : pkg.billing === 'Per Setup' ? 'Setup' : 'Project'}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 pt-2">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <span className={`w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-0.5 ${
                          isPopular ? 'bg-gold/15 text-gold' : 'bg-gold/10 text-gold'
                        }`}>
                          <Check className="w-3.5 h-3.5 font-bold" />
                        </span>
                        <span className={`text-xs leading-normal font-sans font-light ${isPopular ? 'text-white/80' : 'text-charcoal/80'}`}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA button */}
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`w-full mt-8 py-4 px-6 rounded-2xl font-bold text-sm transition-all text-center cursor-pointer ${
                    isPopular
                      ? 'bg-gold hover:bg-white text-charcoal hover:shadow-lg'
                      : 'bg-charcoal hover:bg-gold text-white hover:text-charcoal'
                  }`}
                >
                  {pkg.buttonText}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Info Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-[10px] text-muted-dark font-mono uppercase tracking-widest">
            🛡️ Customizable configurations, SLA amendments, and alternative project sizes are available upon consultation.
          </p>
        </div>

      </div>
    </section>
  );
}
