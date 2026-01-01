'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, User, MessageSquare, Info } from 'lucide-react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Contact = () => {
  const [mounted, setMounted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // কন্টাক্ট ফর্ম হ্যান্ডলার
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    // ফর্ম থেকে ডাটা সংগ্রহ
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const contactData = {
      name,
      email,
      subject,
      message,
      createdAt: new Date()
    };

    try {
      setIsSending(true);
      
      // আপনার সার্ভারে ডাটা পাঠানো
      const res = await axios.post('http://localhost:2001/messages', contactData);
      
      if (res.data.insertedId) {
        // সফল হলে SweetAlert
        Swal.fire({
          title: 'Message Sent! 🚀',
          text: 'Thank you, Mahfuz will get back to you shortly.',
          icon: 'success',
          background: '#0a0f1d',
          color: '#fff',
          confirmButtonColor: '#22d3ee',
          customClass: {
            popup: 'rounded-[2.5rem] border border-cyan-400/20 shadow-2xl',
            confirmButton: 'rounded-2xl font-black px-8 py-3 text-black transition-all hover:scale-105'
          }
        });
        form.reset(); // ফর্ম খালি করা
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to send message. Please try again.',
        icon: 'error',
        background: '#0a0f1d',
        color: '#fff',
        confirmButtonColor: '#ef4444'
      });
    } finally {
      setIsSending(false);
    }
  };

  if (!mounted) return <div className="min-h-screen bg-[#020617]"></div>;

  return (
    <section id="contact" className="relative w-full py-20 bg-[#020617] transition-colors duration-500 overflow-hidden z-20">
      
      {/* BACKGROUND DECOR TEXT */}
      <div className="absolute top-20 right-10 opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <h2 className="text-[15vw] font-black uppercase text-white leading-none">CONNECT</h2>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-4  relative z-10">
        
        {/* SECTION HEADER */}
        <div className="mb-20 text-center lg:text-left">
           <motion.span 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="text-orange-500 font-black uppercase text-xs tracking-[0.4em] block mb-4"
           >
            Get In Touch
           </motion.span>
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-5xl lg:text-8xl font-black text-white"
           >
            Lets <span className="text-cyan-400 italic">Talk.</span>
           </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: CONTACT INFO CARDS */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] shadow-2xl backdrop-blur-sm relative overflow-hidden group">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all"></div>
               <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-3">
                 <Info className="text-orange-500" size={24}/> Contact Details
               </h3>
               
               <div className="space-y-10">
                  {[
                    { icon: <Mail className="text-blue-500" />, label: "Direct Email", value: "mdmahfuzahmedony@gmail.com" },
                    { icon: <Phone className="text-cyan-400" />, label: "Whatsapp/Phone", value: "+880 1309 834483" },
                    { icon: <MapPin className="text-orange-500" />, label: "Current Location", value: "Jessore, Bangladesh" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 group/item">
                       <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-[1.2rem] flex items-center justify-center shadow-lg group-hover/item:bg-cyan-400 group-hover/item:text-black transition-all duration-300">
                          {React.cloneElement(item.icon, { size: 24 })}
                       </div>
                       <div>
                          <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-1">{item.label}</p>
                          <p className="text-lg font-bold text-white group-hover/item:text-cyan-400 transition-colors">{item.value}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* STATUS BADGE */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] flex items-center justify-between shadow-xl"
            >
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-white rounded-full animate-ping shadow-[0_0_15px_#fff]" />
                  <p className="text-black font-black text-sm uppercase tracking-widest">Available for Hire</p>
                </div>
                <div className="bg-black/20 px-4 py-2 rounded-full text-[10px] font-black uppercase text-white tracking-widest border border-white/10">
                  Full Stack
                </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleContactSubmit} className="bg-white/5 border border-white/10 rounded-[4rem] p-10 lg:p-16 space-y-8 shadow-2xl backdrop-blur-sm">
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-500 ml-4 tracking-widest"><User size={14}/> Full Name</label>
                    <input 
                      name="name"
                      required
                      type="text" 
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-cyan-400 focus:ring-4 ring-cyan-400/5 text-white font-bold transition-all placeholder:text-slate-700"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-500 ml-4 tracking-widest"><Mail size={14}/> Email Address</label>
                    <input 
                      name="email"
                      required
                      type="email" 
                      placeholder="Email address"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-cyan-400 focus:ring-4 ring-cyan-400/5 text-white font-bold transition-all placeholder:text-slate-700"
                    />
                  </div>
               </div>

               <div className="space-y-3">
                 <label className="text-[10px] font-black uppercase text-slate-500 ml-4 tracking-widest">Subject</label>
                 <input 
                    name="subject"
                    required
                    type="text" 
                    placeholder="Inquiry about..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-cyan-400 focus:ring-4 ring-cyan-400/5 text-white font-bold transition-all placeholder:text-slate-700"
                 />
               </div>

               <div className="space-y-3">
                 <label className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-500 ml-4 tracking-widest"><MessageSquare size={14}/> Message</label>
                 <textarea 
                   name="message"
                   required
                   rows="5"
                   placeholder="How can I help you?"
                   className="w-full bg-white/5 border border-white/10 rounded-[2.5rem] px-6 py-6 outline-none focus:border-cyan-400 focus:ring-4 ring-cyan-400/5 text-white font-bold transition-all resize-none placeholder:text-slate-700 leading-relaxed"
                 ></textarea>
               </div>

               <button 
                 disabled={isSending}
                 type="submit"
                 className="group w-full bg-cyan-400 text-black py-6 rounded-3xl font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 transition-all duration-500 hover:bg-white hover:scale-[1.02] active:scale-95 shadow-xl shadow-cyan-400/20 disabled:opacity-50"
               >
                 {isSending ? (
                   <Loader2 className="animate-spin" size={20} />
                 ) : (
                   <>Send Message <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" /></>
                 )}
               </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;