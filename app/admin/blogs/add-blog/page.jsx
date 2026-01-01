'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { Send, ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';

const AddBlog = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [blogData, setBlogData] = useState({
    title: '',
    category: '',
    image: '',
    description: '',
    date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
    status: 'Published'
  });

  const handleChange = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const res = await axios.post('https://mdmahfuzahmedony-server.vercel.app/blogs', blogData);
      
      if (res.data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'New blog post added successfully.',
          icon: 'success',
          background: '#0a0f1d',
          color: '#fff',
          confirmButtonColor: '#22d3ee'
        });
        router.push('/admin/blogs');
      }
    } catch (err) {
      Swal.fire('Error!', 'Failed to add blog.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6 text-white">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-black italic">Add New <span className="text-cyan-400">Blog.</span></h2>
        <Link href="/admin/blogs" className="text-slate-500 hover:text-white flex items-center gap-2 text-xs font-black uppercase tracking-widest">
          <ArrowLeft size={16}/> Back
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="bg-[#0a0f1d] border border-white/5 rounded-[3rem] p-10 space-y-8 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-black text-slate-500 ml-2">Blog Title</label>
            <input name="title" required onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:border-cyan-400 outline-none" placeholder="Enter title..." />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-black text-slate-500 ml-2">Category</label>
            <input name="category" required onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:border-cyan-400 outline-none" placeholder="e.g. Development" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase font-black text-slate-500 ml-2">Featured Image URL</label>
          <input name="image" required onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:border-cyan-400 outline-none" placeholder="Paste image link..." />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase font-black text-slate-500 ml-2">Content</label>
          <textarea name="description" required rows="6" onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-[2rem] p-6 text-sm focus:border-cyan-400 outline-none resize-none" placeholder="Write your content here..."></textarea>
        </div>

        <button disabled={isSubmitting} type="submit" className="w-full bg-cyan-400 text-black py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2">
          {isSubmitting ? <Loader2 className="animate-spin" size={20}/> : <Send size={18}/>}
          {isSubmitting ? "Posting..." : "Post Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddBlog;