'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, Mail, Loader2, Users } from 'lucide-react';
import Swal from 'sweetalert2';

const AdminSubscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // ১. সার্ভার থেকে সাবস্ক্রাইবার লোড করা
  const fetchSubscribers = async () => {
    try {
      const res = await axios.get('http://localhost:2001/subscribers');
      setSubscribers(res.data);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching subscribers:", err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  // ২. ডিলিট হ্যান্ডলার
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Remove Subscriber?',
      text: "This email will be removed from your list.",
      icon: 'warning',
      showCancelButton: true,
      background: '#0a0f1d',
      color: '#fff',
      confirmButtonColor: '#ef4444',
      confirmButtonText: 'Yes, remove it!',
      customClass: { popup: 'rounded-[2rem] border border-white/5 shadow-2xl' }
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(`http://localhost:2001/subscribers/${id}`);
          if (res.data.deletedCount > 0) {
            // স্টেট থেকে সরিয়ে ফেলা
            setSubscribers(subscribers.filter(sub => sub._id !== id));
            Swal.fire({
              title: 'Removed!',
              icon: 'success',
              background: '#0a0f1d',
              color: '#fff'
            });
          }
        } catch (error) {
          Swal.fire('Error!', 'Failed to remove subscriber.', 'error');
        }
      }
    });
  };

  return (
    <div className="space-y-8 text-white">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black italic">Newsletter <span className="text-cyan-400">Subscribers.</span></h2>
          <p className="text-slate-500 text-sm mt-2 font-bold uppercase tracking-widest flex items-center gap-2">
            <Users size={14} className="text-orange-500"/> Total: {subscribers.length} Emails
          </p>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-[#0a0f1d] border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl relative">
        {isLoading ? (
          <div className="p-24 flex flex-col items-center justify-center gap-4">
            <Loader2 className="animate-spin text-cyan-400" size={40} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Syncing Data...</span>
          </div>
        ) : subscribers.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-slate-500 text-[10px] uppercase font-black tracking-[0.3em] border-b border-white/5 bg-white/[0.01]">
                  <th className="px-10 py-8">Subscriber Email</th>
                  <th className="px-10 py-8 text-center">Join Date</th>
                  <th className="px-10 py-8 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-medium">
                {subscribers.map((sub) => (
                  <tr key={sub._id} className="hover:bg-white/[0.02] transition-all group">
                    <td className="px-10 py-7">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                          <Mail size={16} />
                        </div>
                        <span className="text-sm font-bold tracking-wide">{sub.email}</span>
                      </div>
                    </td>
                    <td className="px-10 py-7 text-xs text-slate-500 text-center font-bold">
                      {sub.subscribedAt ? new Date(sub.subscribedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Unknown'}
                    </td>
                    <td className="px-10 py-7 text-right">
                      <button 
                        onClick={() => handleDelete(sub._id)}
                        className="p-3 bg-white/5 hover:bg-red-500/20 text-slate-500 hover:text-red-500 rounded-2xl transition-all"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-24 text-center">
             <Mail size={48} className="mx-auto mb-4 text-slate-800" />
             <p className="text-slate-500 font-bold italic">No subscribers yet...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSubscribers;