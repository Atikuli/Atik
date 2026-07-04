import React from 'react';
import { blogPosts } from '../data';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowUpRight, BookOpen } from 'lucide-react';

export default function BlogPreview() {
  return (
    <section id="blog" className="py-20 px-6 sm:px-12 lg:px-16 border-t border-[#222222]/5 bg-white/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-14 text-left" data-aos="fade-up">
          <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">Insights</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal mt-1">From My Logbook</h2>
          <div className="w-12 h-1 bg-gold mt-4 rounded-full" />
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-[2rem] border border-charcoal/5 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Cover Image Frame */}
                <div className="h-52 w-full overflow-hidden relative bg-[#FAF6EA]">
                  <div className="absolute inset-0 bg-charcoal/5 z-10 group-hover:bg-charcoal/0 transition-colors" />
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 z-20 bg-charcoal text-[#FAF6EA] text-[9px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
                    {post.category}
                  </span>
                </div>

                {/* Content Container */}
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Date & Read Time Row */}
                  <div className="flex items-center gap-4 text-[10px] font-mono uppercase text-muted-dark tracking-wider">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gold" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gold" /> {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-base sm:text-lg text-charcoal leading-snug group-hover:text-gold transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-muted-dark leading-relaxed font-sans font-light">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer Author and Button */}
              <div className="px-6 pb-6 pt-2 sm:px-7 sm:pb-7 flex items-center justify-between border-t border-charcoal/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-gold/30">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs font-semibold text-charcoal">{post.author.name}</span>
                </div>

                {/* Arrow up right */}
                <button 
                  onClick={() => alert(`"${post.title}" is a premium showcase article. The full reading platform integration is coming in future modules.`)}
                  className="w-8 h-8 rounded-full bg-[#FAF6EA] border border-charcoal/10 flex items-center justify-center text-charcoal group-hover:bg-gold group-hover:text-charcoal group-hover:border-gold transition-all duration-300"
                  aria-label="Read Post"
                >
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                </button>
              </div>

            </motion.article>
          ))}
        </div>

        {/* Footnote trigger button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => alert('The complete archive log will be made available shortly. Sign up via the contact form to receive design & tech writeups.')}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-charcoal hover:text-gold border-b border-charcoal hover:border-gold transition-colors pb-1 cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-gold" /> View All Articles
          </button>
        </div>

      </div>
    </section>
  );
}
