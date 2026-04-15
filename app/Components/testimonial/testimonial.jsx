'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Sparkles, UserCheck } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Tanvir Hasan",
    role: "Lead Developer",
    company: "DevOps BD",
    content: "Mahfuz is a brilliant engineer. He built our e-commerce platform using MERN stack and the performance is just outstanding. Highly professional and skilled.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tanvir"
  },
  {
    id: 2,
    name: "Farhana Yasmin",
    role: "CEO",
    company: "Creative Pulse",
    content: "Working with Mahfuz was a game-changer for our agency. His attention to detail in UI/UX and solid backend architecture is rare to find in Bangladesh.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Farhana"
  },
  {
    id: 3,
    name: "Mehedi Azad",
    role: "Product Owner",
    company: "TechNexus",
    content: "Fast delivery, clean code, and great communication. Mahfuz simplified our complex data management system with a robust Next.js solution. Excellent work!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mehedi"
  }
];

const Testimonial = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="testimonials" className="relative w-full py-32 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      
      {/* 1. DYNAMIC GRID BACKGROUND (ব্যানার ও অন্য সেকশনের সাথে মিল রেখে) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L54 6L6 6L6 54L48 54L48 48L54 48Z' fill='none' stroke='%23444' stroke-width='1'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-0 relative z-10">
        
        {/* --- SECTION HEADER (অন্যান্য সেকশনের ফন্ট স্টাইলে) --- */}
        <div className="mb-20 text-center lg:text-left">
           <div className="flex items-center gap-3 justify-center lg:justify-start mb-4">
             <Sparkles size={18} className="text-orange-500" />
             <span className="text-orange-500 font-black uppercase text-xs tracking-[0.5em]">Trust & Feedback</span>
           </div>
           <h2 className="text-6xl lg:text-[5.5rem] font-black text-slate-900 dark:text-white tracking-tighter leading-[0.95]">
            Client <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Voices.</span>
           </h2>
        </div>

        {/* --- TESTIMONIALS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative p-10 bg-slate-50/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[3rem] hover:border-blue-500/30 dark:hover:border-cyan-400/30 transition-all duration-300 shadow-sm hover:shadow-2xl backdrop-blur-3xl"
            >
              {/* Floating Quote Icon */}
              <div className="absolute -top-6 right-10 w-14 h-14 bg-blue-600 dark:bg-cyan-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:rotate-12 transition-transform">
                 <Quote className="text-white dark:text-[#020617]" size={26} />
              </div>

              {/* Stars Rating */}
              <div className="flex gap-1.5 mb-8">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-500 text-orange-500" />
                ))}
              </div>

              {/* Review Content */}
              <div className="mb-10 min-h-[120px]">
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium italic">
                  "{item.content}"
                </p>
              </div>

              {/* User Identity Info */}
              <div className="flex items-center gap-5 border-t border-slate-200 dark:border-white/10 pt-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-blue-500/10 shadow-lg group-hover:scale-105 transition-transform">
                   <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <div>
                   <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">{item.name}</h4>
                   <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1">
                     {item.role} @ <span className="text-blue-600 dark:text-cyan-400">{item.company}</span>
                   </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM CTA (Optional) --- */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-20 flex flex-col items-center gap-4 text-center"
        >
            <UserCheck className="text-slate-300 dark:text-slate-800" size={48} />
            <p className="text-slate-400 text-sm font-black uppercase tracking-[0.4em]">Success Driven By People</p>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonial;