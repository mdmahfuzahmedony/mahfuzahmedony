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
    <div className="space-y-6 text-white max-w-7xl mx-auto px-4 py-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black tracking-tight">Manage <span className="text-cyan-400">Projects.</span></h2>
          <p className="text-slate-500 text-[10px] mt-1 uppercase font-bold tracking-[0.2em]">Total: {projects.length} Works</p>
        </div>
        <Link href="/admin/projects/add-project">
            <button className="flex items-center gap-2 bg-cyan-400 text-black px-6 py-3 rounded-xl font-black uppercase text-[11px] tracking-widest hover:bg-white transition-all shadow-lg active:scale-95">
            <Plus size={16}/> New Project
            </button>
        </Link>
      </div>

      {/* Table Section */}
      <div className="bg-[#0a0f1d] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
        {isLoading ? (
          <div className="p-20 flex justify-center"><Loader2 className="animate-spin text-cyan-400" size={40}/></div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-slate-500 text-[10px] uppercase tracking-[0.15em] border-b border-white/5 bg-white/[0.01]">
                  <th className="px-8 py-5 font-bold">Project Name</th>
                  <th className="px-8 py-5 font-bold">Category</th>
                  <th className="px-8 py-5 font-bold">Links</th>
                  <th className="px-8 py-5 text-right font-bold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {projects.map((proj) => (
                  <tr key={proj._id} className="hover:bg-white/[0.03] transition-colors group">
                    <td className="px-8 py-4 font-semibold text-sm text-slate-200">
                      {proj.name}
                    </td>
                    <td className="px-8 py-4">
                      <span className="text-[10px] text-orange-400 font-bold uppercase tracking-wider bg-orange-500/10 px-2 py-1 rounded-md">
                        {proj.category}
                      </span>
                    </td>
                    <td className="px-8 py-4">
                      <a 
                        href={proj.liveLink} 
                        target="_blank" 
                        className="text-slate-400 hover:text-cyan-400 flex items-center gap-1.5 text-[11px] font-bold uppercase transition-all"
                      >
                        Live <ExternalLink size={13}/>
                      </a>
                    </td>
                    <td className="px-8 py-4">
                      <div className="flex justify-end gap-2">
                        <Link href={`/admin/projects/update/${proj._id}`}>
                          <button className="p-2.5 bg-white/5 hover:bg-blue-500/20 text-blue-400 rounded-lg transition-all border border-white/5" title="Edit">
                            <Pencil size={15}/>
                          </button>
                        </Link>
                        <button 
                          onClick={() => handleDelete(proj._id)} 
                          className="p-2.5 bg-white/5 hover:bg-red-500/20 text-red-500 rounded-lg transition-all border border-white/5" 
                          title="Delete"
                        >
                          <Trash2 size={15}/>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {projects.length === 0 && (
              <div className="p-10 text-center text-slate-500 text-sm italic">No projects found. Add your first project!</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProjects;