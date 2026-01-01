'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Github, Twitter, Linkedin, Facebook, ArrowUp } from 'lucide-react';

const Footer = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect(() => setMounted(true), []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // The "Spread" color logic for social icons (matches Navbar)
  const glowEffect = theme === 'dark' 
    ? [
        "0px 0px 0px rgba(34, 211, 238, 0)", 
        "0px 0px 15px rgba(34, 211, 238, 0.6)", 
        "0px 0px 0px rgba(34, 211, 238, 0)"
      ]
    : [
        "0px 0px 0px rgba(59, 130, 246, 0)", 
        "0px 0px 15px rgba(59, 130, 246, 0.4)", 
        "0px 0px 0px rgba(59, 130, 246, 0)"
      ];

  const socialLinks = [
    { icon: <Github size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Facebook size={20} />, href: "#" },
  ];

  return (
    <footer className="relative mt-20">
      {/* 1. TOP BORDER SPREAD: Animated gradient line */}
      <motion.div 
        animate={{ 
          opacity: [0.2, 0.7, 0.2],
          width: ["70%", "100%", "70%"] 
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="h-[2px] mx-auto bg-gradient-to-r from-transparent via-blue-500 dark:via-cyan-400 to-transparent"
      />

      <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl text-slate-600 dark:text-slate-300 transition-colors duration-500">
        <div className="max-w-[1600px] mx-auto px-6  py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
            
            {/* LEFT: Logo Section */}
            <div>
              <Link href="/" className="text-3xl font-bold tracking-tighter text-slate-900 dark:text-white">
                MAHFUZ<span className="text-blue-500 dark:text-cyan-400">.</span>
              </Link>
              <p className="mt-3 text-sm opacity-70">
                Crafting modern web experiences with <br className="hidden md:block" /> focus on performance and design.
              </p>
            </div>

            {/* CENTER: Links */}
            <nav className="flex flex-wrap justify-center gap-8 font-semibold">
              <Link href="/#about" className="hover:text-blue-500 dark:hover:text-cyan-400 transition-colors">About</Link>
              <Link href="/#projects" className="hover:text-blue-500 dark:hover:text-cyan-400 transition-colors">Projects</Link>
              <Link href="/#contact" className="hover:text-blue-500 dark:hover:text-cyan-400 transition-colors">Contact</Link>
              <Link href="/Blog" className="hover:text-blue-500 dark:hover:text-cyan-400 transition-colors">Blog</Link>
            </nav>

            {/* RIGHT: Social Icons with "SPREAD" Animation */}
            <div className="flex justify-center md:justify-end gap-5">
              {mounted && socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  // Infinite Floating and Background Spread (Glow)
                  animate={{ 
                    y: [0, -5, 0],
                    boxShadow: glowEffect 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.2 // Staggered start for more "organic" feel
                  }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs tracking-widest opacity-50 uppercase">
              © {new Date().getFullYear()} MAHFUZ — Made with React & Next.js
            </p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-3 text-xs font-black tracking-widest text-blue-500 dark:text-cyan-400 uppercase group"
            >
              Back to top
              <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-600 dark:group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                <ArrowUp size={14} />
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;