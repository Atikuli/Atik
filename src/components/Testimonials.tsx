import { useState } from 'react';
import { testimonials } from '../data';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import SafeImage from './SafeImage';

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

export default function Testimonials() {
  const [swiper, setSwiper] = useState<any>(null);

  return (
    <section id="testimonials" className="py-20 px-6 sm:px-12 lg:px-16 border-t border-[#222222]/5 relative overflow-hidden">
      
      {/* 3D Ambient Blur Background Glows */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-14 text-left" data-aos="fade-up">
          <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">Endorsements</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal mt-1">Client Reviews</h2>
          <div className="w-12 h-1 bg-gold mt-4 rounded-full" />
        </div>

        {/* Swiper Slider Wrapper */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Quote Watermark Icon */}
          <div className="absolute -top-10 -left-6 text-gold/10 pointer-events-none z-0">
            <Quote className="w-28 h-28 transform -scale-x-100" />
          </div>

          {/* SwiperJS Instance */}
          <div className="relative z-10">
            <Swiper
              onSwiper={setSwiper}
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              pagination={{
                clickable: true,
                el: '#testimonials-pagination',
                bulletClass: 'custom-bullet',
                bulletActiveClass: 'custom-bullet-active',
              }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              className="w-full"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="py-4">
                  <motion.div
                    className="animate-float-y glass-card rounded-[2.5rem] p-8 sm:p-12 shadow-[0_25px_50px_-12px_rgba(244,178,35,0.18)] border border-white/80 w-full relative z-10 transition-shadow duration-300 hover:shadow-[0_30px_60px_-10px_rgba(244,178,35,0.25)]"
                    id={`testimonial-slide-${testimonial.id}`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                      
                      {/* Left Column: Avatar & Rating */}
                      <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                        
                        {/* Circle Avatar */}
                        <div className="relative w-20 h-20">
                          <div className="absolute inset-0 rounded-full bg-gold/25 blur-md animate-pulse" />
                          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gold/40 p-0.5 bg-white">
                            <SafeImage 
                              src={testimonial.avatar} 
                              fallbackSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
                              alt={testimonial.name}
                              category="branding"
                              className="w-full h-full rounded-full object-cover"
                            />
                          </div>
                        </div>

                        {/* Meta labels */}
                        <div>
                          <h3 className="font-display font-bold text-base text-charcoal leading-tight">
                            {testimonial.name}
                          </h3>
                          <p className="text-xs text-muted-dark mt-1 font-mono font-medium">
                            {testimonial.role}, <span className="text-charcoal/80 font-semibold">{testimonial.company}</span>
                          </p>
                        </div>

                        {/* Star Rating Panel */}
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                          ))}
                        </div>

                      </div>

                      {/* Right Column: Narrative Review Statement */}
                      <div className="md:col-span-8 text-left space-y-4">
                        <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold bg-gold/10 px-3 py-1 rounded-full">
                          Verified Client Testimonial
                        </span>
                        <p className="text-base sm:text-lg text-charcoal font-sans font-light italic leading-relaxed">
                          "{testimonial.review}"
                        </p>
                      </div>

                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Interactive Control Toggles */}
          <div className="flex justify-between items-center mt-8 px-4 relative z-20">
            {/* Custom Styled Pagination Dots */}
            <div id="testimonials-pagination" className="flex justify-start items-center" />

            {/* Nav Arrows */}
            <div className="flex gap-3">
              <button
                onClick={() => swiper?.slidePrev()}
                className="w-11 h-11 rounded-xl bg-white/80 backdrop-blur-md border border-charcoal/5 shadow-sm hover:shadow-lg hover:border-gold hover:text-gold text-charcoal flex items-center justify-center transition-all duration-300"
                aria-label="Previous Review"
                id="testimonial-nav-prev"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => swiper?.slideNext()}
                className="w-11 h-11 rounded-xl bg-white/80 backdrop-blur-md border border-charcoal/5 shadow-sm hover:shadow-lg hover:border-gold hover:text-gold text-charcoal flex items-center justify-center transition-all duration-300"
                aria-label="Next Review"
                id="testimonial-nav-next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
