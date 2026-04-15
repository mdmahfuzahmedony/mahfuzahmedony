'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Facebook, Heart } from 'lucide-react';
import  Link  from 'next/link';

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/mdmahfuzahmedony" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/mahfuzahmedony/" },
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/mahfuzahmedony" },
  ];

  return (
    <footer className="relative py-20 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      
      {/* ১. টপ ডিভাইডার লাইন (খুবই চিকন এবং সিম্পল) */}
      <div className="max-w-[1200px] mx-auto px-6 mb-16">
        <div className="h-[1px] w-full bg-slate-200 dark:bg-white/10" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 text-center">
        
        {/* ২. লোগো ও ব্র্যান্ডিং */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">
            MAHFUZ<span className="text-blue-600 dark:text-cyan-400">.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium max-w-md mx-auto leading-relaxed">
            Building digital products, brands, and experience. <br />
            Focusing on clean code and pixel perfect design.
          </p>
        </motion.div>

        {/* ৩. সোশ্যাল লিংকস (সিম্পল সার্কেল স্টাইল) */}
        <div className="flex justify-center gap-6 mt-10">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              whileHover={{ y: -5, scale: 1.1 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300 shadow-sm"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* ৪. কপিরাইট ও বটম ইনফো */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400 tracking-[0.4em]">
             © {new Date().getFullYear()} All Rights Reserved
          </div>

<div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-500 dark:text-slate-500 tracking-[0.2em]">
  Designed with <Heart size={12} className="text-red-500 fill-red-500" /> by 
  <Link
    href="https://mahfuzahmedony.vercel.app/" // এখানে আপনার পছন্দের লিঙ্কটি দিন
    target="_blank" 
    className="hover:text-red-500 transition-colors underline-offset-4 hover:underline"
  >
    Mahfuz
  </Link>
</div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;