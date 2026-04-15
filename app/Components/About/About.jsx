'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  User, Laptop, CheckCircle2,
  Coffee, Camera, Gamepad2, Database, Terminal,
  Server, BrainCircuit, Target, Sparkles
} from 'lucide-react';

const About = () => {
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

  return (
    <section id="about" className="relative w-full py-32 bg-white dark:bg-[#020617] transition-colors duration-500 z-20 overflow-hidden">
      
      {/* 1. DYNAMIC GRID BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L54 6L6 6L6 54L48 54L48 48L54 48Z' fill='none' stroke='%23444' stroke-width='1'/%3E%3C/svg%3E")` }}>
      </div>

      {/* --- MAIN CONTAINER: Max-width 1600px, Padding-0 for LG screens --- */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-0 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">

          {/* --- LEFT COLUMN: Profile Stats & Vibes (5/12 cols) --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-10"
          >
            {/* Profile Info Card */}
            <div className="bg-slate-50/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[3rem] p-8 lg:p-12 backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg">
                    <User size={24} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Profile Vibe</h3>
              </div>
              
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-6 border-b border-slate-200 dark:border-white/10 pb-8">
                  <div>
                    <span className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.3em]">Experience</span>
                    <p className="text-3xl font-black text-slate-900 dark:text-white mt-1">2+ Years</p>
                  </div>
                  <div>
                    <span className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.3em]">Success Rate</span>
                    <p className="text-3xl font-black text-blue-600 dark:text-cyan-400 mt-1">100%</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <span className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.3em]">Interests</span>
                  <div className="flex gap-4">
                    {[
                        {icon: <Coffee />, color: "text-orange-500"},
                        {icon: <Camera />, color: "text-blue-500"},
                        {icon: <Gamepad2 />, color: "text-purple-500"}
                    ].map((item, idx) => (
                        <div key={idx} className="p-4 bg-white dark:bg-white/5 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5 transition-transform hover:-translate-y-1 cursor-default">
                           <span className={item.color}>{item.icon}</span>
                        </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-slate-100 dark:bg-black/20 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800">
                    <p className="text-base text-slate-600 dark:text-slate-400 italic leading-relaxed">
                        "Clean code is not just a standard, it's a philosophy of creating better digital experiences for everyone."
                    </p>
                </div>
              </div>
            </div>

            {/* Banner-style Highlight Card */}
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="p-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-[3rem] text-white dark:text-[#020617] shadow-xl relative overflow-hidden"
            >
              <div className="flex items-center gap-6">
                <CheckCircle2 size={42} className="shrink-0 opacity-80" />
                <div>
                    <p className="font-black text-2xl uppercase leading-none">MERN Engineer</p>
                    <p className="text-xs mt-2 font-bold opacity-90 tracking-widest uppercase">Expert in scalable architectures</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* --- RIGHT COLUMN: Bio & Future Roadmap (7/12 cols) --- */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Main Bio Text */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <Sparkles size={18} className="text-orange-500" />
                <span className="text-orange-500 font-black uppercase text-xs tracking-[0.5em]">My Journey</span>
              </div>
              <h2 className="text-6xl lg:text-[5.5rem] font-black text-slate-900 dark:text-white leading-[0.95] tracking-tighter">
                Solving with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Innovation.</span>
              </h2>

              <div className="space-y-6 text-slate-600 dark:text-slate-400 text-xl leading-relaxed max-w-2xl font-medium">
                <p>
                  I'm <span className="text-slate-900 dark:text-white font-black underline decoration-cyan-500 decoration-2 underline-offset-8">Mahfuz Ahmed</span>. What started as fascination has evolved into a passion for engineering full-stack ecosystems.
                </p>
                <p>
                  Specializing in the <span className="font-bold text-slate-900 dark:text-white">MERN Stack</span>, I focus on performance and clean architecture. I'm constantly pushing the boundaries of web development.
                </p>
              </div>
            </motion.div>

            {/* Skills & Future Roadmap Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {skills.map((skill, i) => (
                <motion.div 
                  key={i} 
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="p-8 bg-slate-50/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[2.5rem] hover:border-cyan-500 transition-all group shadow-sm hover:shadow-2xl"
                >
                  <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="font-black text-xl text-slate-900 dark:text-white uppercase tracking-tighter">{skill.name}</h4>
                  <p className="text-blue-600 dark:text-cyan-400 text-[10px] mt-2 font-black uppercase tracking-[0.2em]">{skill.tech}</p>
                  <p className="text-slate-500 text-base mt-4 leading-relaxed font-medium">{skill.desc}</p>
                </motion.div>
              ))}

              {/* FUTURE VISION / AI ROADMAP CARD */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-8 bg-[#0f172a] dark:bg-cyan-500 rounded-[2.5rem] flex flex-col justify-center text-white dark:text-[#020617] shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-4 right-4 opacity-30 group-hover:rotate-45 transition-transform duration-500">
                    <Target size={28} />
                </div>
                
                <BrainCircuit size={42} className="mb-4" />
                <h4 className="font-black text-2xl uppercase italic leading-none">Future Goal <br /><span className="text-lg opacity-80">AI Mastery</span></h4>
                <p className="text-[10px] uppercase font-black tracking-[0.3em] mt-6 opacity-80 leading-relaxed">
                    Roadmap: Deepening expertise in Python, Large Language Models (LLMs), and AI-integrated systems.
                </p>
                <div className="mt-8 flex items-center gap-3">
                    <div className="h-2 w-2 bg-current rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest">Next Frontier: Machine Learning</span>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;