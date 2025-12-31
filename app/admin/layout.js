'use client';
import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, FileText, Users, Mail, FolderOpen, LogOut, Home } from 'lucide-react';

const AdminLayout = ({ children }) => {
  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20}/>, path: '/admin' },
    { name: 'My Blogs', icon: <FileText size={20}/>, path: '/admin/blogs' },
    { name: 'Subscribers', icon: <Users size={20}/>, path: '/admin/subscribers' },
    { name: 'Messages', icon: <Mail size={20}/>, path: '/admin/messages' },
    { name: 'Projects', icon: <FolderOpen size={20}/>, path: '/admin/projects' },
  ];

  return (
    <div className="flex min-h-screen bg-[#020617] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0a0f1d] border-r border-white/5 p-6 flex flex-col fixed h-full">
        <div className="mb-10 px-4">
          <h1 className="text-2xl font-black tracking-tighter">MAHFUZ<span className="text-cyan-400">.</span></h1>
          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">Admin Panel</p>
        </div>

        <nav className="flex-grow space-y-2">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.path}
              className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-400 hover:bg-cyan-400/10 hover:text-cyan-400 transition-all font-bold text-sm"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="pt-6 border-t border-white/5 space-y-2">
            <Link href="/" className="flex items-center gap-4 px-4 py-3 text-slate-400 hover:text-white text-sm font-bold">
                <Home size={20}/> View Site
            </Link>
            <button className="w-full flex items-center gap-4 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-xl text-sm font-bold transition-all">
                <LogOut size={20}/> Logout
            </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow ml-64 p-10">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;