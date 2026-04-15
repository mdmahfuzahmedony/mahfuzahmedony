'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  User, Laptop, CheckCircle2,
  Coffee, Camera, Gamepad2, Database, Terminal,
  Server, BrainCircuit, Target, Sparkles
} from 'lucide-react';

const About = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const skills = [
    {
      name: 'Frontend Mastery',
      tech: 'Next.js, React, TypeScript, Tailwind, Framer Motion',
      icon: <Laptop className="text-blue-500" />,
      desc: 'Crafting pixel-perfect, interactive and high-performance interfaces.'
    },
    {
      name: 'Backend Architecture',
      tech: 'Node.js, Express, Socket.io, JWT',
      icon: <Terminal className="text-green-500" />,
      desc: 'Building scalable server logic and real-time communication systems.'
    },
    {
      name: 'Cloud & Database',
      tech: 'MongoDB, PostgreSQL, Prisma, Firebase, Docker',
      icon: <Database className="text-orange-500" />,
      desc: 'Optimizing data structures and ensuring seamless deployment.'
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
    })
  };

  if (!mounted) return null;

  return (
    <section id="about" className="relative w-full py-20 lg:py-32 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      
      {/* 1. DYNAMIC GRID BACKGROUND (Sync with other sections) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L54 6L6 6L6 54L48 54L48 48L54 48Z' fill='none' stroke='%23444' stroke-width='1'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">

          {/* --- LEFT COLUMN: Profile Stats --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Profile Info Card */}
            <div className="bg-slate-50/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[2.5rem] lg:rounded-[3rem] p-6 lg:p-12 backdrop-blur-3xl shadow-sm overflow-hidden group">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-600 rounded-xl lg:rounded-2xl text-white shadow-lg">
                    <User size={20} />
                </div>
                <h3 className="text-xl lg:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Profile Vibe</h3>
              </div>
              
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-4 lg:gap-6 border-b border-slate-200 dark:border-white/10 pb-8">
                  <div>
                    <span className="text-slate-500 font-bold uppercase text-[9px] tracking-[0.2em]">Experience</span>
                    <p className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white mt-1">2+ Years</p>
                  </div>
                  <div>
                    <span className="text-slate-500 font-bold uppercase text-[9px] tracking-[0.2em]">Success Rate</span>
                    <p className="text-2xl lg:text-3xl font-black text-blue-600 dark:text-cyan-400 mt-1">100%</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <span className="text-slate-500 font-bold uppercase text-[9px] tracking-[0.2em]">Interests</span>
                  <div className="flex gap-3">
                    {[
                        {icon: <Coffee size={20} />, color: "text-orange-500"},
                        {icon: <Camera size={20} />, color: "text-blue-500"},
                        {icon: <Gamepad2 size={20} />, color: "text-purple-500"}
                    ].map((item, idx) => (
                        <div key={idx} className="p-3 lg:p-4 bg-white dark:bg-white/5 rounded-xl lg:rounded-2xl shadow-sm border border-slate-100 dark:border-white/5">
                           <span className={item.color}>{item.icon}</span>
                        </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 lg:p-6 bg-slate-100 dark:bg-black/20 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800">
                    <p className="text-sm lg:text-base text-slate-600 dark:text-slate-400 italic leading-relaxed">
                        "Clean code is not just a standard, it's a philosophy of creating better digital experiences."
                    </p>
                </div>
              </div>
            </div>

            {/* Banner-style Highlight Card */}
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="p-8 lg:p-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-[2.5rem] lg:rounded-[3rem] text-white dark:text-[#020617] shadow-xl relative overflow-hidden"
            >
              <div className="flex items-center gap-5 lg:gap-6">
                <CheckCircle2 size={32} className="shrink-0 opacity-80" />
                <div>
                    <p className="font-black text-xl lg:text-2xl uppercase leading-none">MERN Engineer</p>
                    <p className="text-[10px] mt-2 font-bold opacity-90 tracking-widest uppercase">Expert in scalable architectures</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* --- RIGHT COLUMN: Bio & Skills --- */}
          <div className="lg:col-span-7 space-y-10 lg:space-y-12">
            
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Sparkles size={18} className="text-orange-500" />
                <span className="text-orange-500 font-black uppercase text-[10px] tracking-[0.5em]">My Journey</span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-slate-900 dark:text-white leading-[1.1] lg:leading-[0.95] tracking-tighter text-center lg:text-left">
                Solving with <span className="md:hidden"> </span> 
                <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Innovation.</span>
              </h2>

              <div className="space-y-6 text-slate-600 dark:text-slate-400 text-base lg:text-xl leading-relaxed max-w-2xl font-medium text-center lg:text-left mx-auto lg:mx-0">
                <p>
                  I'm <span className="text-slate-900 dark:text-white font-black underline decoration-cyan-500 decoration-2 underline-offset-8">Mahfuz Ahmed</span>. What started as fascination has evolved into a passion for engineering full-stack ecosystems.
                </p>
                <p>
                  Specializing in the <span className="font-bold text-slate-900 dark:text-white">MERN Stack</span>, I focus on performance and clean architecture.
                </p>
              </div>
            </motion.div>

            {/* Skills Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {skills.map((skill, i) => (
                <motion.div 
                  key={i} custom={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="p-6 lg:p-8 bg-slate-50/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[2rem] lg:rounded-[2.5rem] hover:border-cyan-500 transition-all group"
                >
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white dark:bg-slate-900 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h4 className="font-black text-lg lg:text-xl text-slate-900 dark:text-white uppercase tracking-tighter">{skill.name}</h4>
                  <p className="text-blue-600 dark:text-cyan-400 text-[9px] mt-1.5 font-black uppercase tracking-widest">{skill.tech}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-4 leading-relaxed font-medium">{skill.desc}</p>
                </motion.div>
              ))}

              {/* FUTURE GOAL CARD */}
              <motion.div className="p-6 lg:p-8 bg-[#0f172a] dark:bg-cyan-500 rounded-[2rem] lg:rounded-[2.5rem] flex flex-col justify-center text-white dark:text-[#020617] relative overflow-hidden group">
               <BrainCircuit className="w-8 h-8 lg:w-11 lg:h-11 mb-4" />
                <h4 className="font-black text-xl lg:text-2xl uppercase leading-none">Future Goal <br /><span className="text-base lg:text-lg opacity-80">AI Mastery</span></h4>
                <p className="text-[9px] lg:text-[10px] uppercase font-black tracking-widest mt-6 opacity-80">
                    Mastering LLMs and AI-integrated systems.
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;