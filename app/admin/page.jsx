'use client';
import React from 'react';
import { FileText, Users, Mail, ArrowUpRight } from 'lucide-react';

const DashboardHome = () => {
  const stats = [
    { label: 'Total Blogs', value: '24', icon: <FileText className="text-blue-500"/>, color: 'bg-blue-500/10' },
    { label: 'Subscribers', value: '1,240', icon: <Users className="text-cyan-400"/>, color: 'bg-cyan-400/10' },
    { label: 'Messages', value: '12', icon: <Mail className="text-orange-500"/>, color: 'bg-orange-500/10' },
  ];

  return (
    <div>
      <div className="mb-10">
        <h2 className="text-3xl font-black">Welcome Back, <span className="text-cyan-400">Mahfuz!</span></h2>
        <p className="text-slate-500 mt-2 font-medium">Here's what's happening with your portfolio today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#0a0f1d] border border-white/5 p-8 rounded-[2.5rem] relative overflow-hidden group">
            <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center mb-6`}>
              {stat.icon}
            </div>
            <h3 className="text-slate-400 font-bold uppercase text-xs tracking-widest">{stat.label}</h3>
            <p className="text-4xl font-black mt-2 text-white">{stat.value}</p>
            <ArrowUpRight className="absolute top-8 right-8 text-slate-700 group-hover:text-cyan-400 transition-colors" size={24}/>
          </div>
        ))}
      </div>

      {/* Recent Activity or Table */}
      <div className="mt-12 bg-[#0a0f1d] border border-white/5 rounded-[2.5rem] p-8">
        <h3 className="text-xl font-bold mb-6">Recent Blog Posts</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-500 text-xs uppercase tracking-[0.2em] border-b border-white/5">
                <th className="pb-4 font-black">Title</th>
                <th className="pb-4 font-black">Category</th>
                <th className="pb-4 font-black">Date</th>
                <th className="pb-4 font-black">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-white/5">
                <td className="py-4 font-bold">Mastering MERN Stack</td>
                <td className="py-4 text-cyan-400 font-bold">Development</td>
                <td className="py-4 text-slate-400">Oct 12, 2023</td>
                <td className="py-4"><button className="text-xs font-black uppercase tracking-widest text-white/50 hover:text-white">Edit</button></td>
              </tr>
              {/* আরও রো যোগ হবে */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;