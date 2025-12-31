'use client';
import React from 'react';
import { Pencil, Trash2, Eye, Plus } from 'lucide-react';
import Swal from 'sweetalert2';
import axios from 'axios';

const AdminBlogs = () => {
  const blogs = [
    { id: "658934...", title: "Mastering MERN Stack", category: "Development", date: "Oct 12, 2023", status: "Published" },
    // আরও ডাটা...
  ];

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      background: '#0a0f1d',
      color: '#fff',
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#334155',
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        popup: 'rounded-[2rem] border border-white/10'
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // সার্ভারে ডিলিট রিকোয়েস্ট পাঠানো
          const response = await axios.delete(`http://localhost:2001/blogs/${id}`);
          if (response.data.deletedCount > 0) {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your article has been deleted.',
              icon: 'success',
              background: '#0a0f1d',
              color: '#fff',
              confirmButtonColor: '#22d3ee'
            });
            // এখানে আপনি স্টেট আপডেট করে টেবিল থেকে ডাটা সরিয়ে দিতে পারেন
          }
        } catch (error) {
          Swal.fire('Error!', 'Failed to delete.', 'error');
        }
      }
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center px-4">
        <h2 className="text-3xl font-black text-white">My <span className="text-cyan-400">Blogs.</span></h2>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-2xl font-black text-[10px] tracking-widest uppercase shadow-lg"><Plus className="inline mr-2" size={16}/> Add Blog</button>
      </div>

      <div className="bg-[#0a0f1d] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
        <table className="w-full text-left">
          <thead>
            <tr className="text-slate-500 text-[10px] uppercase tracking-widest border-b border-white/5">
              <th className="px-8 py-6">Title</th>
              <th className="px-8 py-6">Status</th>
              <th className="px-8 py-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {blogs.map((blog) => (
              <tr key={blog.id} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-8 py-6 text-sm font-bold text-white">{blog.title}</td>
                <td className="px-8 py-6">
                  <span className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-green-500/10 text-green-500">{blog.status}</span>
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="flex justify-end gap-3">
                    <button className="p-2 bg-white/5 hover:bg-cyan-400/20 text-slate-400 hover:text-cyan-400 rounded-lg transition-all"><Eye size={16}/></button>
                    <button className="p-2 bg-white/5 hover:bg-blue-500/20 text-slate-400 hover:text-blue-500 rounded-lg transition-all"><Pencil size={16}/></button>
                    <button 
                      onClick={() => handleDelete(blog.id)} 
                      className="p-2 bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-500 rounded-lg transition-all"
                    >
                      <Trash2 size={16}/>
                    </button>
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

export default AdminBlogs;