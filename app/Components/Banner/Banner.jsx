'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowRight, Download, Zap, Sparkles } from 'lucide-react';
import Image from 'next/image';

// Image Path
import mahfuzProfile from "../../(Frontend)/iamge/MahfuzAhmedOny.png";

const Banner = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    const socialLinks = [
        { icon: <Github size={20} />, url: "https://github.com/mdmahfuzahmedony" },
        { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/mahfuzahmedony/" },
        { icon: <Twitter size={20} />, url: "https://x.com/MahfuzAhmedOny" }
    ];

    const orbitSkills = [
        { img: "https://cdn.simpleicons.org/html5/E34F26", label: "HTML5" },
        { img: "https://cdn.simpleicons.org/css3/1572B6", label: "CSS3" },
        { img: "https://cdn.simpleicons.org/javascript/F7DF1E", label: "JS" },
        { img: "https://cdn.simpleicons.org/react/61DAFB", label: "React" },
        { img: "https://cdn.simpleicons.org/nextdotjs/white", label: "Next" },
        { img: "https://cdn.simpleicons.org/framer/white", label: "Framer" },
        { img: "https://cdn.simpleicons.org/firebase/FFCA28", label: "Firebase" },
        { img: "https://cdn.simpleicons.org/supabase/3ECF8E", label: "Supabase" },
        { img: "https://cdn.simpleicons.org/prisma/white", label: "Prisma" },
        { img: "https://cdn.simpleicons.org/docker/2496ED", label: "Docker" },
    ];

    if (!mounted) return null;

    return (
        // এখানে pt-32 (Mobile) এবং lg:pt-48 (Laptop) যোগ করা হয়েছে যাতে ন্যাভবার থেকে নিচে নামে
        <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-[#020617] pt-32 pb-20 lg:pt-48 lg:pb-0">
            
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L54 6L6 6L6 54L48 54L48 48L54 48Z' fill='none' stroke='%23444' stroke-width='1'/%3E%3C/svg%3E")` }}>
            </div>

            <div className="relative z-10 max-w-[1700px] mx-auto w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-0">
                
                {/* --- LEFT SIDE: HEADING --- */}
                <div className="lg:col-span-5 flex flex-col space-y-8 lg:space-y-10 text-center lg:text-left order-2 lg:order-1">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                        <div className="flex items-center gap-3 justify-center lg:justify-start mb-6 lg:mb-8">
                            <Sparkles size={18} className="text-orange-500" />
                            <span className="text-orange-500 font-black uppercase text-[10px] tracking-[0.5em]">Selected Portfolio</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl lg:text-[8.5rem] font-black leading-[1] lg:leading-[0.85] tracking-tighter text-white">
                            Hi, <span className="md:hidden"> </span> <br className="hidden md:block" /> 
                            I am <span className="md:hidden"> </span> <br className="hidden md:block" /> 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Mahfuz</span>
                        </h1>
                        <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
                            <span className="h-[2px] w-12 bg-cyan-500 hidden lg:block"></span>
                            <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-[10px] lg:text-xs">
                                — Full Stack Developer
                            </p>
                        </div>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 lg:gap-8 pt-4">
                        <button className="group relative w-full sm:w-auto px-10 py-5 bg-white text-[#020617] font-black rounded-2xl transition-all hover:scale-105 shadow-xl">
                            <span className="relative z-10 flex items-center justify-center gap-4 uppercase tracking-[0.2em] text-sm">
                                Hire Me <ArrowRight size={18} />
                            </span>
                        </button>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social, i) => (
                                <a key={i} href={social.url} target="_blank" className="p-3 bg-white/5 rounded-xl border border-white/10 text-slate-400 hover:text-cyan-400 transition-colors">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- MIDDLE: IMAGE & ORBIT --- */}
                <div className="lg:col-span-3 relative flex items-center justify-center h-[320px] md:h-[450px] lg:h-[650px] order-1 lg:order-2">
                    
                    <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[480px] lg:h-[480px] border border-dashed border-slate-800 rounded-full animate-[spin_60s_linear_infinite]" />
                    
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="relative z-20 w-[150px] h-[150px] md:w-[220px] md:h-[220px] lg:w-[280px] lg:h-[280px] rounded-full overflow-hidden border-4 border-slate-800 bg-[#0f172a]"
                    >
                        <Image src={mahfuzProfile} alt="Mahfuz Ahmed" className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-500" priority />
                    </motion.div>

                    {orbitSkills.map((skill, i) => (
                        <div key={i} className="absolute inset-0 animate-[spin_45s_linear_infinite]" style={{ animationDelay: `-${i * (45/orbitSkills.length)}s` }}>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_45s_linear_infinite_reverse]" style={{ animationDelay: `-${i * (45/orbitSkills.length)}s` }}>
                                <div className="p-1.5 md:p-2.5 bg-[#0f172a] border border-slate-700 rounded-lg lg:rounded-xl shadow-xl">
                                    <img src={skill.img} alt={skill.label} className="w-4 h-4 md:w-6 md:h-6 object-contain" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>



                {/* --- RIGHT SIDE: BIO     --- */}


                <div className="lg:col-span-4 flex flex-col items-center lg:items-end order-3">
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}
                        className="relative p-8 lg:p-12 rounded-[2rem] lg:rounded-[2.5rem] bg-white/[0.03] backdrop-blur-3xl border border-white/5 shadow-2xl w-full max-w-sm"
                    >
                        <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-12 h-12 lg:w-14 lg:h-14 bg-cyan-500 rounded-xl lg:rounded-2xl flex items-center justify-center text-[#020617]">
                            <Zap size={24} fill="currentColor" />
                        </div>
                        
                        <span className="text-cyan-500 font-black uppercase text-[10px] tracking-[0.4em]">Expertise</span>
                        <h3 className="text-2xl lg:text-3xl font-black text-white mt-4 leading-tight">Building Scalable Solutions.</h3>
                        <p className="text-slate-400 mt-6 leading-relaxed text-sm lg:text-base font-medium">
                            Developing high-performance tools with <span className="text-white">Next.js, Prisma, and Cloud Architecture.</span> 
                        </p>

                        <div className="mt-8 pt-8 border-t border-white/5">
                             <a href="/Full_Stack_Developer.pdf" download className="flex items-center gap-3 text-white font-bold text-[10px] uppercase tracking-widest hover:text-cyan-400 transition-colors">
                                Download CV <Download size={16} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Banner;