'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowRight, Download, MessageCircle, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Image Path
import mahfuzProfile from "../../(Frontend)/iamge/MahfuzAhmedOny.png";

const Banner = () => {
    const socialLinks = [
        { icon: <Github size={20} />, url: "https://github.com/mdmahfuzahmedony" },
        { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/mahfuzahmedony/" },
        { icon: <Twitter size={20} />, url: "https://x.com/MahfuzAhmedOny" }
    ];

    // আপনার সব অরিজিনাল টেক লোগো (CDN থেকে নেওয়া)
    const orbitSkills = [
        { img: "https://cdn.simpleicons.org/html5/E34F26", label: "HTML5" },
        { img: "https://cdn.simpleicons.org/css3/1572B6", label: "CSS3" },
        { img: "https://cdn.simpleicons.org/javascript/F7DF1E", label: "JavaScript" },
        { img: "https://cdn.simpleicons.org/react/61DAFB", label: "React.js" },
        { img: "https://cdn.simpleicons.org/nextdotjs/white", label: "Next.js" },
        { img: "https://cdn.simpleicons.org/framer/white", label: "Framer Motion" },
        { img: "https://cdn.simpleicons.org/firebase/FFCA28", label: "Firebase" },
        { img: "https://cdn.simpleicons.org/supabase/3ECF8E", label: "Supabase" },
        { img: "https://cdn.simpleicons.org/prisma/white", label: "Prisma" },
        { img: "https://cdn.simpleicons.org/docker/2496ED", label: "Docker" },
        { img: "https://cdn.simpleicons.org/socketdotio/white", label: "Socket.io" },
    ];

    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-[#020617] z-10 py-20 lg:py-0">
            
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L54 6L6 6L6 54L48 54L48 48L54 48Z' fill='none' stroke='%23444' stroke-width='1'/%3E%3C/svg%3E")` }}>
            </div>

            <div className="relative z-30 max-w-[1700px] mx-auto w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
                
                {/* --- LEFT SIDE: HEADING --- */}
                <div className="lg:col-span-5 flex flex-col space-y-10 text-center lg:text-left order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-7xl md:text-9xl lg:text-[8.5rem] font-black leading-[0.85] tracking-tighter text-white">
                            Hi, <br /> I am <br /> 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Mahfuz</span>
                        </h1>
                        <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
                            <span className="h-[2px] w-12 bg-cyan-500"></span>
                            <p className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] lg:text-xs">
                                Full Stack Developer
                            </p>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                        <button className="group relative px-10 py-5 bg-white text-[#020617] font-black rounded-2xl overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                            <span className="relative z-10 flex items-center gap-4 uppercase tracking-[0.2em] text-sm font-bold">
                                Hire Me Now <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </span>
                            <motion.div 
                                animate={{ x: ['-100%', '200%'] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent -skew-x-12" 
                            />
                        </button>
                    </motion.div>
                </div>

                {/* --- MIDDLE: CENTERED IMAGE & ORIGINAL TECH LOGOS --- */}
                <div className="lg:col-span-3 relative flex items-center justify-center h-[450px] lg:h-[650px] order-1 lg:order-2">
                    
                    {/* Orbit Ring */}
                    <div className="absolute w-[300px] h-[300px] lg:w-[480px] lg:h-[480px] border border-dashed border-slate-800 rounded-full animate-[spin_60s_linear_infinite]" />
                    
                    {/* CENTERED PROFILE IMAGE */}
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="relative z-20 w-[180px] h-[180px] lg:w-[280px] lg:h-[280px] rounded-full overflow-hidden border-4 border-slate-800 shadow-[0_0_50px_rgba(34,211,238,0.2)] bg-[#0f172a]"
                    >
                        <Image
                            src={mahfuzProfile}
                            alt="Mahfuz Ahmed"
                            className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-500"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 via-transparent to-transparent" />
                    </motion.div>

                    {/* Orbiting Original Logos */}
                    {orbitSkills.map((skill, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 45,
                                repeat: Infinity,
                                ease: "linear",
                                delay: i * (45 / orbitSkills.length)
                            }}
                            style={{ width: '100%', height: '100%', position: 'absolute' }}
                        >
                            <motion.div 
                                className="absolute top-0 left-1/2 -translate-x-1/2 group"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="p-2.5 bg-[#0f172a]/95 backdrop-blur-2xl border border-slate-700/50 rounded-xl hover:border-cyan-500 hover:scale-125 transition-all shadow-2xl flex items-center justify-center">
                                    <img src={skill.img} alt={skill.label} className="w-6 h-6 object-contain" />
                                    {/* Tooltip */}
                                    <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-[9px] font-black text-cyan-400 opacity-0 group-hover:opacity-100 transition-all uppercase tracking-widest bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700 whitespace-nowrap z-50">
                                        {skill.label}
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* --- RIGHT SIDE: BIO --- */}
                <div className="lg:col-span-4 flex flex-col items-center lg:items-end order-3">
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative p-10 lg:p-12 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-3xl border border-white/5 shadow-2xl max-w-sm"
                    >
                        <div className="absolute -top-6 -right-6 w-14 h-14 bg-cyan-500 rounded-2xl flex items-center justify-center text-[#020617] shadow-lg">
                            <Zap size={24} fill="currentColor" />
                        </div>
                        
                        <span className="text-cyan-500 font-black uppercase text-[10px] tracking-[0.4em]">Expertise</span>
                        <h3 className="text-3xl font-black text-white mt-4 leading-tight">
                            Building Scalable <br /> MERN Solutions.
                        </h3>
                        <p className="text-slate-400 mt-6 leading-relaxed text-base font-medium">
                            Developing high-performance digital tools with <span className="text-white">Next.js, Prisma, and Docker.</span> 
                        </p>

                        <div className="mt-10 pt-8 border-t border-white/5">
                             <a
                                href="/Mahfuz_Ahmed.pdf" download={"Mahfuz_Ahmed.pdf"}
                                className="flex items-center gap-3 text-white font-bold text-[10px] uppercase tracking-[0.3em] hover:text-cyan-400 transition-colors"
                            >
                                Get My CV <Download size={16} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="absolute bottom-10 w-full max-w-[1700px] left-1/2 -translate-x-1/2 px-12 flex flex-col md:flex-row justify-between items-center gap-8 z-40">
                <div className="flex items-center gap-5">
                    {socialLinks.map((social, i) => (
                        <motion.a
                            key={i}
                            href={social.url}
                            target="_blank"
                            whileHover={{ y: -5, color: '#22d3ee' }}
                            className="text-slate-500 transition-all p-3 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/50"
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>

                <Link href="/#contact">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-4 bg-white/5 p-1.5 pr-8 rounded-full border border-white/10 shadow-lg cursor-pointer"
                    >
                        <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-[#020617] relative shadow-md">
                            <MessageCircle size={22} />
                            <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#020617] animate-pulse" />
                        </div>
                        <span className="font-black text-white uppercase tracking-widest text-[10px]">Let's Connect</span>
                    </motion.div>
                </Link>
            </div>
        </section>
    );
};

export default Banner;