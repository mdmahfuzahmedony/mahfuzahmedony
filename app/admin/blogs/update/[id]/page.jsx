'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { Save, ArrowLeft, Loader2, Image as ImageIcon, Type, LayoutGrid, FileText } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const UpdateBlog = () => {
  const { id } = useParams(); // ইউআরএল থেকে আইডি নিলাম
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  
  const [blogData, setBlogData] = useState({
    title: '',
    category: '',
    image: '',
    description: '',
    status: 'Published'
  });

  // ১. ব্লগের বর্তমান ডাটা সার্ভার থেকে লোড করা
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`https://mdmahfuzahmedony-server.vercel.app/blogs/${id}`);
        setBlogData(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog:", err);
        Swal.fire('Error!', 'Could not load blog data.', 'error');
        setLoading(false);
      }
    };
    if (id) fetchBlog();
  }, [id]);

  // ২. ইনপুট পরিবর্তন হ্যান্ডেল করা
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  // ৩. আপডেট সাবমিট হ্যান্ডলার
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      setIsUpdating(true);
      const res = await axios.put(`https://mdmahfuzahmedony-server.vercel.app/blogs/${id}`, blogData);
      
      if (res.data.modifiedCount > 0 || res.data.matchedCount > 0) {
        Swal.fire({
          title: 'Successfully Updated!',
          text: 'The blog post has been modified.',
          icon: 'success',
          background: '#0a0f1d',
          color: '#fff',
          confirmButtonColor: '#22d3ee',
          customClass: {
            popup: 'rounded-[2rem] border border-cyan-400/20 shadow-2xl',
            confirmButton: 'rounded-xl font-black px-8 py-3 text-black'
          }
        });
        router.push('/admin/blogs'); // আপডেট শেষে লিস্ট পেজে ফিরে যাওয়া
      }
    } catch (err) {
      Swal.fire('Error!', 'Something went wrong while updating.', 'error');
    } finally {
      setIsUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center gap-4">
        <Loader2 className="animate-spin text-cyan-400" size={50} />
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Loading Blog Content...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] py-16 px-6 lg:px-12 text-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Header with Back Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-orange-500 font-black uppercase text-[10px] tracking-[0.4em] mb-3 block">Editor Mode</span>
            <h2 className="text-4xl lg:text-6xl font-black italic">Update <span className="text-cyan-400">Post.</span></h2>
          </div>
          <Link href="/admin/blogs" className="flex items-center gap-2 text-slate-500 hover:text-white transition-all font-black uppercase text-[10px] tracking-widest bg-white/5 px-6 py-3 rounded-xl border border-white/5">
            <ArrowLeft size={16}/> Back to Dashboard
          </Link>
        </div>

        {/* Update Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0a0f1d] border border-white/5 rounded-[3rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

          <form onSubmit={handleUpdate} className="space-y-8 relative z-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Title Input */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-[10px] uppercase font-black text-slate-500 ml-2 tracking-widest">
                  <Type size={14} className="text-cyan-400"/> Blog Title
                </label>
                <input 
                  name="title"
                  type="text" 
                  required
                  value={blogData.title} 
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:border-cyan-400 outline-none transition-all placeholder:text-slate-700 font-bold" 
                  placeholder="Enter a catchy title"
                />
              </div>

              {/* Category Input */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-[10px] uppercase font-black text-slate-500 ml-2 tracking-widest">
                  <LayoutGrid size={14} className="text-cyan-400"/> Category
                </label>
                <input 
                  name="category"
                  type="text" 
                  required
                  value={blogData.category} 
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:border-cyan-400 outline-none transition-all font-bold" 
                  placeholder="e.g. Development, UI/UX"
                />
              </div>
            </div>

            {/* Image URL Input */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-[10px] uppercase font-black text-slate-500 ml-2 tracking-widest">
                <ImageIcon size={14} className="text-cyan-400"/> Featured Image URL
              </label>
              <input 
                name="image"
                type="text" 
                required
                value={blogData.image} 
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:border-cyan-400 outline-none transition-all font-bold text-slate-400" 
                placeholder="https://images.unsplash.com/..."
              />
              {blogData.image && (
                <div className="mt-4 w-full h-32 rounded-2xl overflow-hidden border border-white/5 opacity-50">
                   <img src={blogData.image} alt="preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            {/* Content/Description Textarea */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-[10px] uppercase font-black text-slate-500 ml-2 tracking-widest">
                <FileText size={14} className="text-cyan-400"/> Blog Content
              </label>
              <textarea 
                name="description"
                rows="8"
                required
                value={blogData.description} 
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-[2rem] p-6 text-sm focus:border-cyan-400 outline-none transition-all resize-none leading-relaxed font-medium" 
                placeholder="Share your thoughts..."
              ></textarea>
            </div>

            {/* Status Select & Submit Button */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/5">
               <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-2xl border border-white/5">
                  <span className="text-[10px] uppercase font-black text-slate-500 tracking-tighter">Status</span>
                  <select 
                    name="status" 
                    value={blogData.status} 
                    onChange={handleChange} 
                    className="bg-transparent text-cyan-400 font-black uppercase text-[10px] tracking-widest outline-none cursor-pointer"
                  >
                    <option value="Published" className="bg-[#0a0f1d] text-cyan-400">Published</option>
                    <option value="Draft" className="bg-[#0a0f1d] text-orange-500">Draft</option>
                  </select>
               </div>
               
               <button 
                type="submit" 
                disabled={isUpdating}
                className="w-full md:w-auto flex items-center justify-center gap-3 bg-cyan-400 text-black px-12 py-5 rounded-[1.5rem] font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-cyan-400/10"
               >
                 {isUpdating ? <Loader2 className="animate-spin" size={20}/> : <Save size={20}/>}
                 {isUpdating ? "Updating..." : "Save Changes"}
               </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default UpdateBlog;