'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import BlogCard from './BlogCard'; // আপনার সঠিক পাথ অনুযায়ী ইম্পোর্ট করুন

// ডামি ডাটা (আপনি পরে API বা CMS থেকে আনতে পারবেন)
const latestPosts = [
  {
    id: 1,
    title: "How to Optimize Your MERN Stack App for SEO",
    category: "SEO & Performance",
    date: "Jan 12, 2024",
    readTime: "7 min read",
    description: "Learn the essential techniques to make your React applications search engine friendly and lightning fast.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Understanding Node.js Event Loop Like a Pro",
    category: "Backend",
    date: "Feb 05, 2024",
    readTime: "10 min read",
    description: "Deep dive into the inner workings of Node.js to write more efficient and non-blocking backend code.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Tailwind CSS Best Practices for Scalable UI",
    category: "Frontend",
    date: "Mar 18, 2024",
    readTime: "5 min read",
    description: "Keep your CSS clean and maintainable while building complex user interfaces with Tailwind CSS utilities.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop"
  }
];

const LatestBlog = () => {
  return (
    <section id="latest-blog" className="relative w-full py-4 bg-[#020617] overflow-hidden">
      
      {/* Background Big Text (আপনার ডিজাইন অনুযায়ী) */}
      <div className="absolute top-20 right-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <h2 className="text-[15vw] font-black uppercase text-white leading-none">
          JOURNAL
        </h2>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-4  relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-orange-500 font-black uppercase text-xs tracking-[0.4em] block mb-4"
            >
              My Latest Insights
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-black text-white"
            >
              Recent <span className="text-cyan-400">Blogs.</span>
            </motion.h2>
          </div>

          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="group flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-full text-white font-bold text-xs uppercase tracking-widest hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            Explore All Posts
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>

        {/* Blog Grid (মাত্র ৩টি কার্ড দেখাবে) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestBlog;