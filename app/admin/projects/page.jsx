'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pencil, Trash2, ExternalLink, Plus, Loader2 } from 'lucide-react';
import Link from 'next/link';
import Swal from 'sweetalert2';

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const res = await axios.get('http://localhost:2001/projects');
      setProjects(res.data);
      setIsLoading(false);
    } catch (err) { console.error(err); setIsLoading(false); }
  };

  useEffect(() => { fetchProjects(); }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Delete Project?',
      text: "This will remove the project from your portfolio.",
      icon: 'warning',
      showCancelButton: true,
      background: '#0a0f1d', color: '#fff', confirmButtonColor: '#ef4444'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:2001/projects/${id}`);
        setProjects(projects.filter(p => p._id !== id));
        Swal.fire('Deleted!', 'Project has been removed.', 'success');
      }
    });
  };

  return (
    <div className="space-y-8 text-white">
      <div className="flex justify-between items-center px-4">
        <div>
          <h2 className="text-3xl font-black">Manage <span className="text-cyan-400">Projects.</span></h2>
          <p className="text-slate-500 text-sm mt-1 uppercase font-bold tracking-widest text-[10px]">Total: {projects.length} Works</p>
        </div>
        <Link href="/admin/projects/add-project">
            <button className="flex items-center gap-2 bg-cyan-400 text-black px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all shadow-xl">
            <Plus size={18}/> New Project
            </button>
        </Link>
      </div>

      <div className="bg-[#0a0f1d] border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
        {isLoading ? (
          <div className="p-24 flex justify-center"><Loader2 className="animate-spin text-cyan-400" size={40}/></div>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-500 text-[10px] uppercase tracking-[0.2em] border-b border-white/5">
                <th className="px-10 py-7 font-black">Project Name</th>
                <th className="px-10 py-7 font-black">Category</th>
                <th className="px-10 py-7 font-black">Links</th>
                <th className="px-10 py-7 text-right font-black">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 py-4">
              {projects.map((proj) => (
                <tr key={proj._id} className="hover:bg-white/[0.02] transition-colors group py-2">
                  <td className="px-10 py-7 font-bold text-sm">{proj.name}</td>
                  <td className="px-10 py-7 text-[10px] text-orange-500 font-black uppercase tracking-widest">{proj.category}</td>
                  <td className="px-10 py-7">
                    <a href={proj.liveLink} target="_blank" className="text-slate-500 hover:text-cyan-400 flex items-center gap-1 text-[10px] font-bold uppercase">Live <ExternalLink size={12}/></a>
                  </td>
                  <td className="px-10 py-7 text-right">
                    <div className="flex justify-end gap-3">
                      <Link href={`/admin/projects/update/${proj._id}`}>
                        <button className="p-3 bg-white/5 hover:bg-blue-500/20 text-blue-400 rounded-xl transition-all"><Pencil size={16}/></button>
                      </Link>
                      <button onClick={() => handleDelete(proj._id)} className="p-3 bg-white/5 hover:bg-red-500/20 text-red-500 rounded-xl transition-all"><Trash2 size={16}/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminProjects;