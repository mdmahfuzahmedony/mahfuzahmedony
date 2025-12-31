'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Lock } from 'lucide-react';

const BlogDetail = ({ params }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  // // ১. চেক করা ইউজার আগে সাবস্ক্রাইব করেছে কি না (LocalStorage থেকে)
  // useEffect(() => {
  //   const savedEmail = localStorage.getItem('mahfuz_blog_subscriber');
  //   if (savedEmail) {
  //     setIsSubscribed(true);
  //   }
  // }, []);

  // ২. সাবস্ক্রাইব হ্যান্ডলার
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.includes('@')) {
      localStorage.setItem('mahfuz_blog_subscriber', email);
      setIsSubscribed(true);
      alert("Successfully Subscribed! Enjoy the article.");
    }
  };

  return (
    <main className="min-h-screen bg-[#020617] pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Blog Header */}
        <div className="mb-12">
          <span className="text-orange-500 font-black uppercase text-xs tracking-[0.4em] mb-4 block">Development</span>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-8">
            How to build a high-performance MERN application
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm font-bold uppercase tracking-widest border-y border-white/5 py-6">
             <div className="flex items-center gap-2"><User size={16} className="text-cyan-400"/> By Mahfuz</div>
             <div className="flex items-center gap-2"><Calendar size={16} className="text-cyan-400"/> Jan 12, 2024</div>
             <div className="flex items-center gap-2"><Clock size={16} className="text-cyan-400"/> 8 Min Read</div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="w-full h-[400px] rounded-[3rem] overflow-hidden mb-12 border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="blog-detail"
          />
        </div>

        {/* Blog Content Section */}
        <div className="relative">
          {/* যদি সাবস্ক্রাইব করা না থাকে তবে কন্টেন্ট ঝাপসা থাকবে */}
          <div className={`prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-6 text-lg transition-all duration-700 ${!isSubscribed ? 'blur-md select-none pointer-events-none' : 'blur-0'}`}>
            <p>
              In today s fast-paced digital world, performance is everything. A slow application can cost you users and revenue. 
              The MERN (MongoDB, Express, React, Node.js) stack provides a powerful foundation for building robust applications, 
              but it requires careful optimization to truly shine.
            </p>
            <p>
              First, lets talk about backend optimization. Using Redis for caching frequently accessed data can significantly 
              reduce your database load. Moreover, indexing your MongoDB collections is a must-have for any large-scale app.
            </p>
            <h3>1. Optimizing React Performance</h3>
            <p>
              On the frontend, Reacts virtual DOM is fast, but you can make it even faster by using techniques like code splitting 
              and lazy loading. Memoization with useMemo and useCallback also plays a key role in preventing unnecessary re-renders.
            </p>
            {/* আরও অনেক টেক্সট এখানে থাকবে... */}
          </div>

          {/* Subscription Gate (Overlay) */}
          {!isSubscribed && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-transparent pt-20">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-lg bg-[#0a0f1d] border border-cyan-400/30 rounded-[3rem] p-10 text-center shadow-[0_0_50px_rgba(34,211,238,0.1)]"
              >
                <div className="w-16 h-16 bg-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lock className="text-black" size={30} />
                </div>
                <h2 className="text-2xl font-black text-white mb-4">Want to read the full article?</h2>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  Join my exclusive newsletter to unlock this article and get free tips on MERN stack development every week.
                </p>
                
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input 
                      type="email" 
                      placeholder="Enter your email to unlock" 
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-12 text-white focus:outline-none focus:border-cyan-400 transition-all"
                    />
                  </div>
                  <button className="w-full bg-cyan-400 text-black font-black uppercase tracking-widest py-4 rounded-2xl hover:bg-white transition-all duration-300">
                    Unlock Now
                  </button>
                </form>
                <p className="mt-6 text-[10px] text-slate-500 uppercase tracking-widest">No Spam, only quality content.</p>
              </motion.div>
            </div>
          )}
        </div>

      </div>
    </main>
  );
};

export default BlogDetail;