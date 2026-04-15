'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // স্ক্রল হ্যান্ডলার
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Education', href: '/#education' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 md:px-10 py-4 ${
        isScrolled ? 'pt-4' : 'pt-6'
      }`}>
        <div className={`max-w-[1600px] mx-auto flex items-center justify-between px-6 py-3 rounded-2xl lg:rounded-3xl border transition-all duration-500 ${
          isScrolled 
          ? 'bg-white/80 dark:bg-[#020617]/80 backdrop-blur-2xl border-slate-200 dark:border-white/10 shadow-2xl' 
          : 'bg-transparent border-transparent'
        }`}>
          
          {/* --- LOGO --- */}
          <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white flex items-center">
            MAHFUZ<span className="text-orange-500 dark:text-cyan-400">.</span>
          </Link>

          {/* --- DESKTOP NAV LINKS --- */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex gap-8 font-black text-[10px] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- RESUME ACTION --- */}
          <div className="flex items-center gap-4">
            <a 
              href="/Full_Stack_Developer.pdf" download
              className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all active:scale-95 shadow-lg shadow-orange-500/20 items-center gap-2"
            >
              Resume <Download size={14} />
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-900 dark:text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-white dark:bg-[#020617] lg:hidden flex flex-col justify-center items-center px-10"
          >
             {/* Background Grid for Mobile Menu */}
             <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L54 6L6 6L6 54L48 54L48 48L54 48Z' fill='none' stroke='%23444' stroke-width='1'/%3E%3C/svg%3E")` }}>
             </div>

             <ul className="flex flex-col gap-8 text-center relative z-10">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter hover:text-orange-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
             </ul>

             <div className="mt-20 w-full flex flex-col gap-4 relative z-10">
                <a href="/Mahfuz_Ahmed.pdf" download className="w-full bg-orange-500 text-white py-6 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3">
                   Download Resume <Download size={18} />
                </a>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;