'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, Mail, User, Clock, Loader2 } from 'lucide-react';
import Swal from 'sweetalert2';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const res = await axios.get('https://mdmahfuzahmedony-server.vercel.app/messages');
      setMessages(res.data);
      setIsLoading(false);
    } catch (err) { console.error(err); setIsLoading(false); }
  };

  useEffect(() => { fetchMessages(); }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Delete Message?',
      text: "This message will be removed permanently.",
      icon: 'warning',
      showCancelButton: true,
      background: '#0a0f1d', color: '#fff', confirmButtonColor: '#ef4444'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`https://mdmahfuzahmedony-server.vercel.app/messages/${id}`);
        setMessages(messages.filter(m => m._id !== id));
        Swal.fire('Deleted!', 'Message removed.', 'success');
      }
    });
  };

  return (
    <div className="space-y-8 text-white">
      <h2 className="text-3xl font-black italic">Inbound <span className="text-cyan-400">Messages.</span></h2>

      <div className="bg-[#0a0f1d] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
        {isLoading ? (
          <div className="p-24 flex justify-center"><Loader2 className="animate-spin text-cyan-400" size={40} /></div>
        ) : messages.length > 0 ? (
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-500 text-[10px] uppercase font-black tracking-widest border-b border-white/5">
                <th className="px-8 py-6">Sender</th>
                <th className="px-8 py-6">Message Content</th>
                <th className="px-8 py-6">Time</th>
                <th className="px-8 py-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {messages.map((msg) => (
                <tr key={msg._id} className="hover:bg-white/[0.02] transition-all">
                  <td className="px-8 py-6">
                    <div className="font-bold text-white text-sm">{msg.name}</div>
                    <div className="text-xs text-slate-500">{msg.email}</div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-xs text-slate-400 leading-relaxed max-w-md italic">"{msg.message}"</p>
                  </td>
                  <td className="px-8 py-6 text-[10px] text-slate-500 font-black uppercase">
                    {new Date(msg.createdAt).toLocaleString()}
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button onClick={() => handleDelete(msg._id)} className="p-3 bg-white/5 hover:bg-red-500/20 text-red-500 rounded-xl transition-all"><Trash2 size={16}/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-24 text-center text-slate-500 italic font-bold">No messages yet...</div>
        )}
      </div>
    </div>
  );
};

export default AdminMessages;