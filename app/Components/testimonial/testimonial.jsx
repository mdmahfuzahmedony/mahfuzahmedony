'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Senior Software Engineer",
    company: "Tech Solutions",
    content: "Mahfuz is an exceptional developer. His ability to transform complex requirements into seamless, high-performance web applications is truly impressive.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Product Manager",
    company: "Creative Studio",
    content: "Working with Mahfuz was a great experience. He is very detail-oriented and his understanding of MERN stack is top-notch. Highly recommended!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    id: 3,
    name: "Robert Fox",
    role: "CEO",
    company: "Startup Hub",
    content: "The way he integrates modern UI/UX principles with solid backend logic is what makes his work stand out. He delivered the project ahead of time.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert"
  }
];

const Testimonial = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="testimonials" className="relative w-full py-24 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      
      {/* BACKGROUND TEXT - আপনার অন্যান্য সেকশনের স্টাইল অনুযায়ী */}
      <div className="absolute top-20 left-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none">
        <h2 className="text-[10vw] font-black uppercase">VOICES</h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        
        {/* HEADING AREA */}
        <div className="mb-16 text-center lg:text-left">
           <span className="text-orange-500 font-black uppercase text-xs tracking-[0.4em]">Client Feedback</span>
           <h2 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white mt-4">
            Testi<span className="text-blue-600 dark:text-cyan-400">monials.</span>
           </h2>
        </div>

        {/* TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-8 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem] hover:border-blue-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 shadow-xl"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-8 w-12 h-12 bg-blue-600 dark:bg-cyan-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                 <Quote className="text-white dark:text-black" size={24} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-orange-500 text-orange-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8 italic">
                {/* "{item.content}" */}
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 border-t border-slate-200 dark:border-white/10 pt-6">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-blue-500/20">
                   <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                   <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.name}</h4>
                   <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                     {item.role} @ <span className="text-blue-600 dark:text-cyan-400">{item.company}</span>
                   </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;