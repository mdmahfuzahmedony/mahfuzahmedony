'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FileText, Users, Mail, ArrowUpRight, Loader2 } from 'lucide-react';
import Link from 'next/link';

const DashboardHome = () => {
  const [data, setData] = useState({
    blogs: [],
    subscribers: [],
    messages: []
  });
  const [isLoading, setIsLoading] = useState(true);

  // ১. সার্ভার থেকে সব ডাটা একসাথে ফেচ করা
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        // তিনটি API কল একসাথে করা হচ্ছে পারফরম্যান্সের জন্য
        const [blogRes, subRes, msgRes] = await Promise.all([
          axios.get('http://localhost:2001/blogs'),
          axios.get('http://localhost:2001/subscribers'),
          axios.get('http://localhost:2001/messages')
        ]);

        setData({
          blogs: blogRes.data,
          subscribers: subRes.data,
          messages: msgRes.data
        });
        setIsLoading(false);
      } catch (err) {
        console.error("Dashboard Data Fetch Error:", err);
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // ২. স্ট্যাট কার্ডের ডাটা ডাইনামিক করা
  const stats = [
    { 
      label: 'Total Blogs', 
      value: data.blogs.length, 
      icon: <FileText className="text-blue-500"/>, 
      color: 'bg-blue-500/10' 
    },
    { 
      label: 'Subscribers', 
      value: data.subscribers.length, 
      icon: <Users className="text-cyan-400"/>, 
      color: 'bg-cyan-400/10' 
    },
    { 
      label: 'Messages', 
      value: data.messages.length, 
      icon: <Mail className="text-orange-500"/>, 
      color: 'bg-orange-500/10' 
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <Loader2 className="animate-spin text-cyan-400" size={48} />
        <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Loading Dashboard Stats...</p>
      </div>
    );
  }

  return (
    <div className="text-white">
      {/* Welcome Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-black italic">Welcome Back, <span className="text-cyan-400">Mahfuz!</span></h2>
        <p className="text-slate-500 mt-2 font-medium tracking-wide text-sm uppercase">Here's a quick overview of your portfolio.</p>
      </div>

      {/* Dynamic Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#0a0f1d] border border-white/5 p-8 rounded-[2.5rem] relative overflow-hidden group hover:border-cyan-400/20 transition-all shadow-2xl">
            <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center mb-6`}>
              {stat.icon}
            </div>
            <h3 className="text-slate-500 font-black uppercase text-[10px] tracking-[0.2em]">{stat.label}</h3>
            <p className="text-5xl font-black mt-3 text-white">
              {stat.value < 10 ? `0${stat.value}` : stat.value}
            </p>
            <ArrowUpRight className="absolute top-8 right-8 text-slate-800 group-hover:text-cyan-400 transition-colors" size={24}/>
          </div>
        ))}
      </div>

      {/* Recent Activity Table (Last 5 Blogs) */}
      <div className="mt-12 bg-[#0a0f1d] border border-white/5 rounded-[2.5rem] p-10 shadow-2xl">
        <div className="flex justify-between items-center mb-8 px-4">
            <h3 className="text-xl font-black italic">Recent <span className="text-cyan-400">Blogs.</span></h3>
            <Link href="/admin/blogs" className="text-[10px] font-black uppercase text-slate-500 hover:text-white transition-colors tracking-widest">View All</Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-500 text-[10px] uppercase tracking-[0.3em] border-b border-white/5">
                <th className="pb-6 font-black px-4">Blog Title</th>
                <th className="pb-6 font-black px-4">Category</th>
                <th className="pb-6 font-black px-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {data.blogs.slice(0, 5).map((blog) => (
                <tr key={blog._id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="py-6 px-4 font-bold text-sm text-slate-200">{blog.title}</td>
                  <td className="py-6 px-4">
                    <span className="text-[10px] text-cyan-400 font-black uppercase tracking-widest bg-cyan-400/5 px-3 py-1.5 rounded-lg border border-cyan-400/10">
                        {blog.category}
                    </span>
                  </td>
                  <td className="py-6 px-4">
                    <Link href={`/admin/blogs/update/${blog._id}`}>
                        <button className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">
                            Edit
                        </button>
                    </Link>
                  </td>
                </tr>
              ))}
              {data.blogs.length === 0 && (
                <tr>
                  <td colSpan="3" className="py-10 text-center text-slate-500 italic">No blogs posted yet...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;