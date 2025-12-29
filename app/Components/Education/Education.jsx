'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, School, BadgeCheck, Code2 } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      type: 'Degree',
      title: 'Bachelor of Science in CSE',
      institution: 'University Name Here',
      duration: '2020 - 2024',
      description: 'Focused on Software Engineering, Data Structures, and Algorithms.',
      icon: <GraduationCap className="text-blue-500" />,
    },
    {
      type: 'Technical',
      title: 'Full Stack MERN Development',
      institution: 'Programming Hero / Online Bootcamp',
      duration: '2022 - 2023',
      description: 'Intensive training on MongoDB, Express, React, and Node.js.',
      icon: <Code2 className="text-cyan-500" />, // Note: Import Code2 if needed or use BookOpen
    },
  ];

  const certifications = [
    { title: 'Responsive Web Design', issued: 'FreeCodeCamp', icon: <BadgeCheck className="text-orange-500" /> },
    { title: 'JavaScript Algorithms', issued: 'Udemy', icon: <BadgeCheck className="text-orange-500" /> },
  ];

  return (
    <section id="education" className="relative w-full py-24 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      
      {/* 1. BACKGROUND DECORATION */}
      <div className="absolute bottom-10 right-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none">
        <h2 className="text-[12vw] font-black uppercase">LEARNING</h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="mb-16 text-center lg:text-left">
           <motion.span 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-orange-500 font-black uppercase text-xs tracking-[0.4em]"
           >
             Academic & Skills
           </motion.span>
           <motion.h2 
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mt-4"
           >
            My <span className="text-blue-600 dark:text-cyan-400">Education.</span>
           </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Timeline of Education */}
          <div className="lg:col-span-8 space-y-8">
            {educationData.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="group relative flex flex-col md:flex-row gap-6 p-8 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem] hover:bg-white dark:hover:bg-white/10 transition-all shadow-xl"
              >
                <div className="w-16 h-16 shrink-0 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {edu.icon || <School className="text-blue-500" />}
                </div>
                
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase rounded-full">
                      {edu.type}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400 text-xs font-bold">
                      <Calendar size={14} /> {edu.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                    {edu.title}
                  </h3>
                  <p className="text-blue-600 dark:text-cyan-400 font-bold">{edu.institution}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xl">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Certifications & Highlights */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-8 bg-slate-900 dark:bg-cyan-500 rounded-[2.5rem] text-white dark:text-black shadow-2xl relative overflow-hidden group"
            >
              {/* Spread Glow Animation on a card */}
              <motion.div 
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-white dark:bg-black"
              />
              
              <div className="relative z-10">
                <Award size={40} className="mb-4" />
                <h4 className="text-2xl font-black uppercase leading-none">Certifications</h4>
                <div className="mt-8 space-y-4">
                  {certifications.map((cert, i) => (
                    <div key={i} className="flex items-start gap-3 border-b border-white/10 dark:border-black/10 pb-3 last:border-0">
                      <BadgeCheck className="shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-bold text-sm leading-tight">{cert.title}</p>
                        <p className="text-[10px] opacity-70 uppercase font-black tracking-widest">{cert.issued}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Current Focus Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem] backdrop-blur-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Current Focus</span>
              </div>
              <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase">System Design</h4>
              <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                Currently deep-diving into Microservices and Scalable Architecture to improve my MERN projects.
              </p>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Education;