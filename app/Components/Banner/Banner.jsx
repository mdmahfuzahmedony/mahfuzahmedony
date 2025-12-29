'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowRight, Download, MessageCircle, Globe, Code2, Database, Layers, Cpu } from 'lucide-react';
import Image from 'next/image';

// Image Path
import mahfuzProfile from "../../(Frontend)/iamge/MahfuzAhmedOny.png";

const Banner = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500 z-10 pt-28 lg:pt-0">
      
      {/* 1. DYNAMIC GRID BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L54 6L6 6L6 54L48 54L48 48L54 48Z' fill='none' stroke='%23444' stroke-width='1'/%3E%3C/svg%3E")` }}>
      </div>

      {/* 2. BACKGROUND IMAGE - Fixed for Mobile */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative w-full h-full max-w-[1000px] flex items-end justify-center"
        >
          <Image 
            src={mahfuzProfile} 
            alt="Mahfuz Ahmed" 
            className="w-auto h-[60%] lg:h-[92%] object-contain grayscale brightness-90 dark:brightness-50 contrast-125 opacity-30 lg:opacity-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#020617] via-transparent to-transparent h-full" />
        </motion.div>
      </div>

      {/* 3. TECH NODES - Hidden on small mobile for better UI */}
      <div className="absolute inset-0 z-20 pointer-events-none hidden xl:block">
        {[
          { icon: <Database className="text-green-500" />, label: "MongoDB", pos: "top-[20%] left-[15%]" },
          { icon: <Code2 className="text-blue-400" />, label: "React.js", pos: "top-[25%] right-[15%]" },
        ].map((tech, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: i, ease: "easeInOut" }}
            className={`absolute ${tech.pos} p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-3`}
          >
            {tech.icon}
            <span className="text-xs font-black tracking-widest dark:text-white uppercase">{tech.label}</span>
          </motion.div>
        ))}
      </div>

      {/* 4. MAIN CONTENT CONTAINER - Fully Responsive Grid */}
      <div className="relative z-30 max-w-[1400px] w-full px-6 lg:px-10 flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 pb-20 lg:pb-0">
        
        {/* LEFT: HEADING - Fixed Font Sizes */}
        <div className="flex flex-col justify-center text-center lg:text-left space-y-6 lg:space-y-8">
          <motion.div 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
          >
             <h1 className="text-5xl md:text-7xl lg:text-[8.5rem] font-black leading-[1] lg:leading-[0.85] tracking-tighter text-slate-900 dark:text-white lg:mix-blend-difference">
                Hi, <br className="hidden lg:block" /> I am <span className="text-blue-600 dark:text-cyan-400">Mahfuz</span>
             </h1>
             <p className="mt-4 lg:mt-8 text-slate-500 dark:text-slate-400 font-black uppercase tracking-[0.3em] lg:tracking-[0.6em] text-xs lg:text-base border-blue-600 dark:border-cyan-400 lg:border-l-4 lg:pl-4 mx-auto lg:mx-0 w-fit">
                Full Stack Developer
             </p>
          </motion.div>

          <motion.div className="flex justify-center lg:justify-start">
            <button className="group relative px-8 lg:px-12 py-4 lg:py-5 bg-slate-900 dark:bg-white text-white dark:text-black font-black rounded-2xl overflow-hidden transition-all hover:scale-105 shadow-xl">
               <span className="relative z-10 flex items-center gap-3 text-sm lg:text-lg uppercase">Hire Me <ArrowRight size={20}/></span>
               <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>
        </div>

        {/* RIGHT: BIO CARD - Fixed Padding and Alignment */}
        <div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
           <motion.div 
             initial={{ y: 30, opacity: 0 }} 
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="max-w-md p-6 lg:p-10 rounded-[2rem] lg:rounded-[3rem] bg-slate-50/80 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-2xl relative"
           >
              <span className="text-orange-500 font-black uppercase text-[10px] lg:text-xs tracking-widest">Expertise</span>
              <h3 className="text-2xl lg:text-4xl font-black text-slate-900 dark:text-white mt-2 lg:mt-4 leading-tight">
                Developing Next-Gen <br className="hidden lg:block"/> MERN Solutions.
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mt-4 lg:mt-6 leading-relaxed text-sm lg:text-lg font-medium">
                Passionate about creating high-performance, interactive, and scalable web applications.
              </p>

              <a href="#" className="inline-flex items-center gap-3 mt-6 lg:mt-10 text-orange-500 font-black border-b-2 border-orange-500 pb-2 uppercase text-[10px] lg:text-xs tracking-widest">
                Download CV <Download size={16} />
              </a>
           </motion.div>
        </div>
      </div>

      {/* 5. BOTTOM BAR - Fixed for Mobile Stacking */}
      <div className="absolute bottom-6 lg:bottom-10 w-full max-w-[1400px] px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-10 z-40">
        
        {/* Socials */}
        <div className="flex items-center gap-6 lg:gap-8">
            {[<Github key="g" size={20}/>, <Linkedin key="l" size={20}/>, <Twitter key="t" size={20}/>].map((icon, i) => (
                <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -5, color: '#22d3ee' }}
                    className="text-slate-400 transition-all p-2 bg-slate-100 dark:bg-white/5 rounded-xl border border-transparent dark:border-white/10"
                >
                    {icon}
                </motion.a>
            ))}
            <div className="hidden sm:flex items-center gap-4 border-l border-slate-700 pl-6">
                <Globe size={16} className="text-cyan-500" />
                <span className="text-[10px] text-slate-500 font-black tracking-widest uppercase">MERN STACK</span>
            </div>
        </div>

        {/* Let's Chat */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 group cursor-pointer bg-white dark:bg-white/5 p-2 pr-5 rounded-full border border-slate-200 dark:border-white/10 shadow-lg"
        >
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-slate-900 dark:bg-cyan-500 rounded-full flex items-center justify-center text-white dark:text-black relative">
            <MessageCircle size={20} />
            <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-black animate-pulse" />
          </div>
          <span className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-[10px]">Lets Chat</span>
        </motion.div>
      </div>

    </section>
  );
};

export default Banner;