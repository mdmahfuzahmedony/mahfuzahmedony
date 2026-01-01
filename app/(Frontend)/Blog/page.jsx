'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import BlogSidebar from '../../Components/Blog/BlogSidebar'; 
import BlogCard from '../../Components/Blog/BlogCard';       

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 
  const [currentPage, setCurrentPage] = useState(1);
  
  // ফিল্টার স্টেট
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // সার্ভার থেকে ডাটা আনা
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://localhost:2001/blogs');
        setBlogs(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // ডাইনামিক ফিল্টারিং লজিক (Category + Search একসাথে কাজ করবে)
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // সাইডবারের জন্য ডাইনামিক ক্যাটাগরি লিস্ট (ডাটাবেস অনুযায়ী কাউন্ট দেখাবে)
  const categoryCounts = blogs.reduce((acc, blog) => {
    acc[blog.category] = (acc[blog.category] || 0) + 1;
    return acc;
  }, {});

  const categoriesForSidebar = [
    { name: 'All', count: blogs.length },
    ...Object.keys(categoryCounts).map(cat => ({
      name: cat,
      count: categoryCounts[cat]
    }))
  ];

  return (
    <main className="min-h-screen bg-[#020617] pt-32 pb-24 relative overflow-hidden text-white">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[20vw] font-black uppercase leading-none">BLOG</h2>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-orange-500 font-black uppercase text-xs tracking-[0.4em] block mb-4"
          >
            Insights & News
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-black"
          >
            My <span className="text-cyan-400">Journal.</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT SIDE: SIDEBAR */}
          <div className="lg:col-span-3">
             <BlogSidebar 
                categories={categoriesForSidebar} // ডাইনামিক কাউন্ট পাঠালাম
                onCategoryChange={setSelectedCategory} 
                onSearch={setSearchQuery} 
             />
          </div>

          {/* RIGHT SIDE: BLOG CARDS */}
          <div className="lg:col-span-9">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <Loader2 className="animate-spin text-cyan-400" size={48} />
                <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Syncing with Server...</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <AnimatePresence mode="popLayout">
                    {filteredBlogs.length > 0 ? (
                      filteredBlogs.map((post) => (
                        <motion.div
                          key={post._id}
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                        >
                          <BlogCard post={post} />
                        </motion.div>
                      ))
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="col-span-full py-20 text-center border border-white/5 rounded-[3rem] bg-white/[0.02]"
                      >
                        <h3 className="text-slate-500 text-xl font-bold italic tracking-wide">
                          No articles found in "{selectedCategory}" {searchQuery && `matching "${searchQuery}"`}
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* PAGINATION */}
                {filteredBlogs.length > 0 && (
                  <div className="mt-20 flex items-center justify-center gap-4">
                    <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition-all">
                      <ChevronLeft size={20} />
                    </button>
                    <button className="w-12 h-12 rounded-2xl bg-cyan-400 text-black font-black text-xs">01</button>
                    <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition-all">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;