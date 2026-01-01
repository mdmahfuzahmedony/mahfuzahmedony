'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[64px] max-w-[1500px] mx-auto"></div>;

  return (
    <nav className="navbar max-w-[1600px] mx-auto bg-white dark:bg-[#0a0f1d] backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl px-5 sticky top-5 z-50 shadow-md transition-all duration-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-slate-900 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white dark:bg-[#111827] text-slate-900 dark:text-white rounded-box z-[1] mt-3 w-52 p-2 shadow-xl border border-slate-200 dark:border-white/10">
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#projects">Projects</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
            <li><Link href="/Blog">Blog</Link></li>
          </ul>
        </div>
        
        <Link href="/" className="text-xl font-black tracking-tighter text-slate-900 dark:text-white px-2">
          MAHFUZ<span className="text-blue-500 dark:text-cyan-400">.</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-8 font-bold text-[11px] uppercase tracking-widest text-slate-800 dark:text-slate-400">
          <li className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"><Link href="/#about">About</Link></li>
          <li className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"><Link href="/#projects">Projects</Link></li>
          <li className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"><Link href="/#contact">Contact</Link></li>
          <li className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"><Link href="/Blog">Blog</Link></li>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-yellow-400 border border-slate-200 dark:border-white/10 hover:scale-105 transition-all"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <a 
          href="https://drive.google.com/file/d/1Wl2vn2k4oEV7IxkNj7UV78lfs0IbZGZX/view?usp=sharing" 
          className="bg-orange-500 dark:bg-orange-500 hover:bg-orange-300 dark:hover:bg-orange-400 text-white px-6 py-2.5 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all active:scale-95 shadow-lg"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;