'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BadgeCheck, Code2, ExternalLink, Sparkles, Target } from 'lucide-react';

const Education = () => {
  // আপনার ডিগ্রি এবং কোর্স ডেটা
  const educationData = [
    {
      type: 'Degree',
      title: 'Bachelor of Arts',
      institution: 'Jessore Government City College',
      duration: '2022 - 2027',
      description: 'Acquiring foundational knowledge while building analytical skills for modern engineering.',
      icon: <GraduationCap className="text-blue-500" />,
      certificateLink: null // যদি থাকে লিঙ্ক দেবেন
    },
    {
      type: 'Professional',
      title: 'Full Stack MERN Development',
      institution: 'Programming Hero',
      duration: '2025 - 2026',
      description: 'Intensive mastery of MongoDB, Express, React, Node, and Scalable Web Architecture.',
      icon: <Code2 className="text-cyan-500" />,
      certificateLink: '/certificates/mern_certificate.pdf' // আপনার ফাইলের লিঙ্ক
    },
  ];

  const certifications = [
    { 
      title: 'Full Stack Web Development', 
      issued: 'Programming Hero', 
      link: '/certificates/mern_certificate.pdf' 
    },
    { 
      title: 'Responsive Web Design', 
      issued: 'FreeCodeCamp', 
      link: 'https://www.freecodecamp.org/certification/id' 
    },
    { 
      title: 'JavaScript Algorithms', 
      issued: 'Udemy', 
      link: '#' 
    },
  ];

  return (
    <section id="education" className="relative w-full py-32 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      
      {/* 1. DYNAMIC GRID BACKGROUND (ব্যানারের সাথে মিল রাখা হয়েছে) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L54 6L6 6L6 54L48 54L48 48L54 48Z' fill='none' stroke='%23444' stroke-width='1'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-0 relative z-10">
        
        {/* SECTION HEADER (ব্যানার এবং অ্যাবাউট ফন্ট স্টাইলে) */}
        <div className="mb-24 text-center lg:text-left">
           <div className="flex items-center gap-3 justify-center lg:justify-start mb-4">
             <Sparkles size={18} className="text-orange-500" />
             <span className="text-orange-500 font-black uppercase text-xs tracking-[0.5em]">Academic & Expertise</span>
           </div>
           <h2 className="text-6xl lg:text-[5.5rem] font-black text-slate-900 dark:text-white tracking-tighter leading-[0.95]">
            Learning <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Milestones.</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          
          {/* --- LEFT: PROGRESSIVE TIMELINE (8/12 cols) --- */}
          <div className="lg:col-span-8 relative">
            
            {/* Background Journey Line */}
            <div className="absolute left-8 top-4 bottom-4 w-[2px] bg-slate-200 dark:bg-white/5 hidden md:block" />
            
            <div className="space-y-16">
              {educationData.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="group relative flex flex-col md:flex-row gap-10 items-start"
                >
                  {/* Progress Node (Icon) */}
                  <div className="relative z-10 w-16 h-16 shrink-0 bg-white dark:bg-[#0f172a] border-2 border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center shadow-xl group-hover:border-blue-500 transition-all">
                    {edu.icon}
                    {/* এনিমেটেড পালস ডট */}
                    <div className="absolute -right-1 -top-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white dark:border-[#020617] group-hover:animate-ping" />
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-1 p-10 bg-slate-50/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[2.5rem] backdrop-blur-3xl shadow-sm hover:shadow-2xl transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                        <div className="flex items-center gap-4">
                            <span className="px-4 py-1.5 bg-blue-600/10 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase rounded-full tracking-widest border border-blue-600/20">
                                {edu.type}
                            </span>
                            <span className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-black uppercase tracking-widest">
                                <Calendar size={14} className="text-blue-500" /> {edu.duration}
                            </span>
                        </div>
                        
                        {edu.certificateLink && (
                            <motion.a 
                              whileHover={{ scale: 1.05 }}
                              href={edu.certificateLink} target="_blank" rel="noopener noreferrer" 
                              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-cyan-500 hover:text-cyan-400 border-b border-cyan-500/30 pb-1 transition-all"
                            >
                                View Certificate <ExternalLink size={12} />
                            </motion.a>
                        )}
                    </div>
                    
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-2">
                      {edu.title}
                    </h3>
                    <p className="text-blue-600 dark:text-cyan-400 font-black text-lg mb-6">{edu.institution}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- RIGHT: CERTIFICATIONS & FOCUS (4/12 cols) --- */}
          <div className="lg:col-span-4 space-y-10">
            
            {/* BOLD Certification Sidebar */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-slate-900 dark:bg-cyan-500 rounded-[3rem] text-white dark:text-[#020617] shadow-2xl relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                    <Award size={36} />
                    <h4 className="text-2xl font-black uppercase tracking-tighter">Certifications</h4>
                </div>

                <div className="space-y-6">
                  {certifications.map((cert, i) => (
                    <div key={i} className="flex items-center justify-between gap-4 border-b border-white/10 dark:border-black/5 pb-5 last:border-0 group/item">
                      <div className="flex items-center gap-4">
                        <div className="p-2.5 bg-white/10 dark:bg-black/10 rounded-xl group-hover/item:scale-110 transition-transform">
                          <BadgeCheck size={20} className="text-orange-500 dark:text-orange-600" />
                        </div>
                        <div>
                          <p className="font-black text-sm uppercase leading-none tracking-tight">{cert.title}</p>
                          <p className="text-[10px] mt-2 opacity-70 uppercase font-black tracking-[0.2em]">{cert.issued}</p>
                        </div>
                      </div>

                      <a href={cert.link} target="_blank" rel="noopener noreferrer" 
                         className="p-3 bg-white/10 dark:bg-black/10 rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-all">
                          <ExternalLink size={16} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Target/Focus Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-10 bg-slate-50/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[3rem] backdrop-blur-3xl shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Active Learning</span>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <Target size={28} className="text-blue-500" />
                <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Advanced Systems</h4>
              </div>
              
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-4 leading-relaxed font-medium">
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