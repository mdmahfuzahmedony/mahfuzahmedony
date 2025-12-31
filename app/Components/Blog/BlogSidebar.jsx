'use client';
import React, { useState } from 'react';
import { Search, Hash, ChevronRight, Loader2 } from 'lucide-react';
import axios from 'axios';
import Swal from 'sweetalert2';

const BlogSidebar = ({ onCategoryChange, onSearch }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      setIsSubmitting(true);
      const response = await axios.post('http://localhost:2001/subscribe', { email });
      
      if (response.data.insertedId) {
        // Success Alert
        Swal.fire({
          title: 'Success!',
          text: 'Thank you for subscribing to my newsletter.',
          icon: 'success',
          background: '#0a0f1d',
          color: '#fff',
          confirmButtonColor: '#22d3ee',
          confirmButtonText: 'COOL',
          customClass: {
            popup: 'rounded-[2.5rem] border border-cyan-400/20 shadow-2xl',
            confirmButton: 'rounded-2xl font-black px-8 py-3 text-black'
          }
        });
        setEmail('');
      }
    } catch (error) {
      // Error Alert
      Swal.fire({
        title: 'Error!',
        text: error.response?.data?.message || 'Something went wrong.',
        icon: 'error',
        background: '#0a0f1d',
        color: '#fff',
        confirmButtonColor: '#ef4444',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <aside className="w-full space-y-10">
      {/* Search & Categories (আগের মতোই থাকবে) */}
      <div className="relative group">
        <input 
          type="text" 
          placeholder="Search articles..." 
          onChange={(e) => onSearch(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 pl-14 text-white focus:outline-none focus:border-cyan-400/50"
        />
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
      </div>

      {/* Newsletter Section with SweetAlert */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-500 rounded-[2rem] p-8 shadow-xl">
        <div className="relative z-10">
          <h4 className="text-black font-black text-xl mb-2">Join My Newsletter</h4>
          <p className="text-black/70 text-xs leading-relaxed mb-6 font-medium">Get the latest articles and coding tips.</p>
          
          <form onSubmit={handleSubscribe} className="space-y-3">
             <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address" 
              className="w-full bg-black/10 border border-black/10 rounded-xl py-3.5 px-4 text-sm text-black placeholder:text-black/50 focus:outline-none focus:bg-white/20 font-bold"
             />
             <button 
              disabled={isSubmitting}
              className="w-full bg-black text-white py-3.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-900 flex items-center justify-center gap-2"
             >
               {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : "Subscribe Now"}
             </button>
          </form>
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;