'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until mounted to avoid hydration mismatch
  // useEffect(() => setMounted(true), []);

  // Dynamic glow color based on theme
  const glowColor = theme === 'dark' 
    ? "0px 0px 30px rgba(34, 211, 238, 0.4)" // Cyan glow for dark mode
    : "0px 0px 30px rgba(59, 130, 246, 0.2)"; // Soft blue glow for light mode

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }} 
      animate={{ 
        y: [0, -10, 0], 
        opacity: 1,
        boxShadow: [
          "0px 0px 0px rgba(0,0,0,0)", 
          glowColor, 
          "0px 0px 0px rgba(0,0,0,0)"
        ]
      }}
      transition={{ 
        opacity: { duration: 0.8 },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }}
      // Tailwind classes for Light (bg-white) and Dark (dark:bg-slate-900)
      className="navbar max-w-[1400px] mx-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl px-5 sticky top-5 z-50 transition-colors duration-300"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-slate-900 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg border border-slate-200 dark:border-slate-700">
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#projects">Projects</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
            <li><Link href="/Blog">Blog</Link></li>
          </ul>
        </div>
        
        <Link href="/" className="btn btn-ghost text-xl font-bold tracking-tighter text-slate-900 dark:text-white">
          MAHFUZ<span className="text-blue-500 dark:text-cyan-400">.</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-slate-600 dark:text-slate-300">
          <li className="hover:text-blue-500 dark:hover:text-cyan-400 transition-colors"><Link href="/#about">About</Link></li>
          <li className="hover:text-blue-500 dark:hover:text-cyan-400 transition-colors"><Link href="/#projects">Projects</Link></li>
          <li className="hover:text-blue-500 dark:hover:text-cyan-400 transition-colors"><Link href="/#contact">Contact</Link></li>
          <li className="hover:text-blue-500 dark:hover:text-cyan-400 transition-colors"><Link href="/Blog">Blog</Link></li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {/* Theme Toggle Button */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-yellow-400 hover:ring-2 ring-blue-400 transition-all"
        >
          {mounted && (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
        </button>

        <motion.a 
          href="/resume.pdf" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn bg-blue-600 dark:bg-cyan-500 hover:bg-blue-700 dark:hover:bg-cyan-400 text-white dark:text-slate-950 border-none rounded-xl font-bold btn-sm md:btn-md"
        >
          Resume
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Navbar;