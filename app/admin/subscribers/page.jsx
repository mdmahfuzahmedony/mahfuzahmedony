'use client';
import React from 'react';
import { Trash2, Mail } from 'lucide-react';

const AdminSubscribers = () => {
  const subs = [
    { id: 1, email: "john@example.com", date: "Oct 10, 2023" },
    { id: 2, email: "sarah@design.com", date: "Oct 15, 2023" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-black text-white">Blog <span className="text-cyan-400">Subscribers.</span></h2>
        <p className="text-slate-500 text-sm mt-1">Total {subs.length} people subscribed to your newsletter.</p>
      </div>

      <div className="bg-[#0a0f1d] border border-white/5 rounded-[2.5rem] overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="text-slate-500 text-[10px] uppercase tracking-[0.2em] border-b border-white/5">
              <th className="px-8 py-6 font-black">Email Address</th>
              <th className="px-8 py-6 font-black">Subscribed Date</th>
              <th className="px-8 py-6 font-black text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {subs.map((sub) => (
              <tr key={sub.id} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-8 py-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400"><Mail size={14}/></div>
                  <span className="text-sm font-bold text-white">{sub.email}</span>
                </td>
                <td className="px-8 py-6 text-xs text-slate-400">{sub.date}</td>
                <td className="px-8 py-6 text-right">
                  <button className="p-2 bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-500 rounded-lg transition-all"><Trash2 size={16}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminSubscribers;