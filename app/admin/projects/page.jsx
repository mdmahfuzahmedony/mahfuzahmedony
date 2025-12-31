'use client';
import React from 'react';
import { Pencil, Trash2, ExternalLink, Plus } from 'lucide-react';

const AdminProjects = () => {
  const projects = [
    { id: 1, name: "E-Commerce Platform", category: "Full Stack", link: "project-url.com" },
    { id: 2, name: "AI Portfolio Website", category: "Frontend", link: "ai-site.com" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black text-white">Manage <span className="text-cyan-400">Projects.</span></h2>
          <p className="text-slate-500 text-sm mt-1">Add or update your portfolio projects.</p>
        </div>
        <button className="flex items-center gap-2 bg-cyan-400 text-black px-6 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all shadow-lg hover:bg-white">
          <Plus size={16}/> New Project
        </button>
      </div>

      <div className="bg-[#0a0f1d] border border-white/5 rounded-[2.5rem] overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="text-slate-500 text-[10px] uppercase tracking-[0.2em] border-b border-white/5">
              <th className="px-8 py-6 font-black">Project Name</th>
              <th className="px-8 py-6 font-black">Category</th>
              <th className="px-8 py-6 font-black">Live Link</th>
              <th className="px-8 py-6 font-black text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {projects.map((proj) => (
              <tr key={proj.id} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-8 py-6 text-sm font-bold text-white">{proj.name}</td>
                <td className="px-8 py-6 text-xs text-orange-500 font-bold uppercase tracking-wider">{proj.category}</td>
                <td className="px-8 py-6 text-xs text-slate-400 hover:underline cursor-pointer flex items-center gap-1">{proj.link} <ExternalLink size={12}/></td>
                <td className="px-8 py-6 text-right">
                   <div className="flex justify-end gap-3">
                      <button className="p-2 bg-white/5 hover:bg-blue-500/20 text-slate-400 hover:text-blue-500 rounded-lg transition-all"><Pencil size={16}/></button>
                      <button className="p-2 bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-500 rounded-lg transition-all"><Trash2 size={16}/></button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProjects;