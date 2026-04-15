'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BadgeCheck, Code2, ExternalLink, Sparkles, Target } from 'lucide-react';

const Education = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const educationData = [
    {
      type: 'Degree',
      title: 'Bachelor of Arts',
      institution: 'Jessore Government City College',
      duration: '2022 - 2027',
      description: 'Acquiring foundational knowledge while building analytical skills for modern engineering.',
      icon: <GraduationCap className="text-blue-500" />,
      certificateLink: null 
    },
    {
      type: 'Professional',
      title: 'Full Stack MERN Development',
      institution: 'Programming Hero',
      duration: '2025 - 2026',
      description: 'Intensive mastery of MongoDB, Express, React, Node, and Scalable Web Architecture.',
      icon: <Code2 className="text-cyan-500" />,
      certificateLink: '#' 
    },
  ];

  const certifications = [
    { title: 'Full Stack Web Development', issued: 'Programming Hero', link: '/Certificate.pdf' },
    { title: 'Responsive Web Design', issued: 'FreeCodeCamp', link: '#' },
    { title: 'JavaScript Algorithms', issued: 'Udemy', link: '#' },
  ];

  if (!mounted) return null;

  return (
    <section id="education" className="relative w-full py-20 lg:py-32 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      
      {/* 1. DYNAMIC GRID BACKGROUND (বাকি সেকশনের সাথে মিল রেখে) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L54 6L6 6L6 54L48 54L48 48L54 48Z' fill='none' stroke='%23444' stroke-width='1'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-16 lg:mb-24 text-center lg:text-left">
           <div className="flex items-center gap-3 justify-center lg:justify-start mb-4">
             <Sparkles size={18} className="text-orange-500" />
             <span className="text-orange-500 font-black uppercase text-[10px] md:text-xs tracking-[0.5em]">Academic & Expertise</span>
           </div>
           <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-slate-900 dark:text-white tracking-tighter leading-[1.1] md:leading-[0.95]">
            Learning 
            <span className="md:hidden"> </span> 
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Milestones.</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          
          {/* --- LEFT: PROGRESSIVE TIMELINE --- */}
          <div className="lg:col-span-8 relative">
            <div className="absolute left-8 top-4 bottom-4 w-[2px] bg-slate-200 dark:bg-white/5 hidden md:block" />
            
            <div className="space-y-12 lg:space-y-16">
              {educationData.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative flex flex-col md:flex-row gap-6 lg:gap-10 items-start"
                >
                  <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 shrink-0 bg-white dark:bg-[#0f172a] border-2 border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center shadow-xl group-hover:border-blue-500 transition-all">
                    {edu.icon}
                    <div className="absolute -right-1 -top-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white dark:border-[#020617] group-hover:animate-ping" />
                  </div>
                  
                  <div className="flex-1 p-6 lg:p-10 bg-slate-50/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[2rem] lg:rounded-[2.5rem] backdrop-blur-3xl shadow-sm hover:shadow-xl transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6 lg:mb-8">
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 bg-blue-600/10 text-blue-600 dark:text-blue-400 text-[9px] font-black uppercase rounded-full tracking-widest border border-blue-600/20">
                                {edu.type}
                            </span>
                            <span className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                                <Calendar size={12} className="text-blue-500" /> {edu.duration}
                            </span>
                        </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-2">
                      {edu.title}
                    </h3>
                    <p className="text-blue-600 dark:text-cyan-400 font-black text-base lg:text-lg mb-4">{edu.institution}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm lg:text-lg leading-relaxed font-medium">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- RIGHT: CERTIFICATIONS & FOCUS --- */}
          <div className="lg:col-span-4 space-y-8 lg:space-y-10">
            
            {/* Certification Sidebar */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-10 bg-slate-900 dark:bg-cyan-500 rounded-[2.5rem] lg:rounded-[3rem] text-white dark:text-[#020617] shadow-xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8 lg:mb-10">
                  <Award className="w-7 h-7 md:w-9 md:h-9" />
                    <h4 className="text-xl lg:text-2xl font-black uppercase tracking-tighter">Certifications</h4>
                </div>

                <div className="space-y-6">
                  {certifications.map((cert, i) => (
                    <div key={i} className="flex items-center justify-between gap-4 border-b border-white/10 dark:border-black/5 pb-4 last:border-0">
                      <div className="flex items-center gap-3">
                        <BadgeCheck size={18} className="text-orange-500" />
                        <div>
                          <p className="font-black text-xs lg:text-sm uppercase leading-none tracking-tight">{cert.title}</p>
                          <p className="text-[9px] mt-1.5 opacity-70 uppercase font-black tracking-widest">{cert.issued}</p>
                        </div>
                      </div>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
                          <ExternalLink size={14} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Target/Focus Card */}
            <motion.div className="p-8 lg:p-10 bg-slate-50/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[2.5rem] lg:rounded-[3rem] shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Active Learning</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Target size={24} className="text-blue-500" />
                <h4 className="text-lg lg:text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Advanced Systems</h4>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                Mastering <span className="text-slate-900 dark:text-white font-bold">Scalable Architecture</span> and performance optimization for MERN applications.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;