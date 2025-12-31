'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import Link from 'next/link'; // Next.js এর Link ইম্পোর্ট করলাম

const BlogCard = ({ post }) => {
  // ব্লগের লিঙ্ক তৈরি করা (post.slug ব্যবহার করে)
  const blogLink = `/Blog/${post?.slug || post?.id}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-[#0a0f1d] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-cyan-400/30 transition-all duration-500 shadow-2xl flex flex-col h-full"
    >
      {/* ১. ইমেজ সেকশন (ইমেজ এ ক্লিক করলেও লিঙ্কে যাবে) */}
      <Link href={blogLink} className="relative h-60 w-full overflow-hidden block">
        <img 
          src={post?.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"} 
          alt={post?.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-5 left-5">
          <span className="bg-orange-500 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
            {post?.category || "Development"}
          </span>
        </div>
      </Link>

      {/* ২. কন্টেন্ট সেকশন */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-5 mb-4 text-slate-500 text-[11px] font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-cyan-400" />
            {post?.date || "Oct 24, 2023"}
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-cyan-400" />
            {post?.readTime || "5 min read"}
          </div>
        </div>

        {/* টাইটেল এ লিঙ্ক */}
        <Link href={blogLink}>
          <h3 className="text-xl lg:text-2xl font-black text-white mb-4 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
            {post?.title}
          </h3>
        </Link>

        <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
          {post?.description}
        </p>

        {/* ৩. নিচের অ্যাকশন সেকশন (এখানেই Link অ্যাড করা হলো) */}
        <Link 
          href={blogLink} 
          className="mt-auto flex items-center justify-between pt-6 border-t border-white/5 group/link"
        >
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/50 group-hover/link:text-white transition-colors">
            Read Full Article
          </span>
          <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center group-hover/link:bg-cyan-400 group-hover/link:text-black transition-all duration-300 transform group-hover/link:rotate-45">
            <ArrowUpRight size={20} />
          </div>
        </Link>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 border-[2px] border-transparent group-hover:border-cyan-400/20 rounded-[2.5rem] pointer-events-none transition-all duration-500"></div>
    </motion.div>
  );
};

export default BlogCard;