"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pencil, Trash2, Eye, Plus, Loader2, X } from "lucide-react";
import Swal from "sweetalert2";
import Link from "next/link";

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingBlog, setEditingBlog] = useState(null); // এডিট করার জন্য স্টেট

  // ১. সার্ভার থেকে ব্লগ লোড করা
  const fetchBlogs = async () => {
    try {
      const res = await axios.get("https://mdmahfuzahmedony-server.vercel.app/blogs");
      setBlogs(res.data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // ২. ডিলিট হ্যান্ডলার (SweetAlert সহ)
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      background: "#0a0f1d",
      color: "#fff",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`https://mdmahfuzahmedony-server.vercel.app/blogs/${id}`);
        fetchBlogs(); // লিস্ট রিফ্রেশ
        Swal.fire("Deleted!", "Blog has been removed.", "success");
      }
    });
  };

  // ৩. আপডেট হ্যান্ডলার
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://mdmahfuzahmedony-server.vercel.app/blogs/${editingBlog._id}`,
        editingBlog
      );
      setEditingBlog(null);
      fetchBlogs();
      Swal.fire("Updated!", "Blog updated successfully.", "success");
    } catch (err) {
      Swal.fire("Error!", "Update failed.", "error");
    }
  };

  return (
    <div className="space-y-8 text-white">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-black">
          Manage <span className="text-cyan-400">Blogs.</span>
        </h2>
        <Link href="/admin/blogs/add-blog">
          <button className="bg-orange-500 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-white hover:text-orange-500 transition-all">
            <Plus size={18} /> Add New
          </button>
        </Link>
      </div>

      {/* ব্লগ টেবিল */}
      <div className="bg-[#0a0f1d] border border-white/5 rounded-[2.5rem] overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="text-slate-500 text-[10px] uppercase tracking-widest border-b border-white/5">
              <th className="px-8 py-6">Image & Title</th>
              <th className="px-8 py-6">Category</th>
              <th className="px-8 py-6">Date</th>
              <th className="px-8 py-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {blogs.map((blog) => (
              <tr
                key={blog._id}
                className="hover:bg-white/[0.02] transition-colors"
              >
                <td className="px-8 py-6 flex items-center gap-4">
                  <img
                    src={blog.image}
                    className="w-12 h-12 rounded-xl object-cover border border-white/10"
                    alt=""
                  />
                  <span className="font-bold text-sm max-w-[200px] truncate">
                    {blog.title}
                  </span>
                </td>
                <td className="px-8 py-6 text-xs text-cyan-400 font-bold">
                  {blog.category}
                </td>
                <td className="px-8 py-6 text-xs text-slate-500">
                  {blog.date}
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="flex justify-end gap-3">
                    <Link href={`/admin/blogs/update/${blog._id}`}>
                      <button className="p-2 bg-white/5 hover:bg-blue-500/20 text-blue-400 rounded-lg">
                        <Pencil size={16} />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="p-2 bg-white/5 hover:bg-red-500/20 text-red-400 rounded-lg"
                    >
                      <Trash2 size={16} />
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
