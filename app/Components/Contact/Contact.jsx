'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, User, MessageSquare, Info, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const [mounted, setMounted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const contactData = {
      from_name: form.name.value,
      from_email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
      to_name: "Mahfuz Ahmed Ony",
    };

    try {
      setIsSending(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        contactData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      Swal.fire({
        title: "Message Sent! 🚀",
        text: "Thank you, I will get back to you shortly.",
        icon: "success",
        background: "#0a0f1d",
        color: "#fff",
        confirmButtonColor: "#22d3ee",
      });
      form.reset();
    } catch (err) {
      Swal.fire({ title: "Error!", text: "Failed to send message.", icon: "error" });
    } finally {
      setIsSending(false);
    }
  };

  if (!mounted) return null;

  return (
    <section id="contact" className="relative w-full py-20 lg:py-32 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      
      {/* 1. DYNAMIC GRID BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L54 6L6 6L6 54L48 54L48 48L54 48Z' fill='none' stroke='%23444' stroke-width='1'/%3E%3C/svg%3E")` }}>
      </div>

      {/* --- Standardized Container for 1600px Layout --- */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-0  lg:px-0  relative z-10">
        
        {/* SECTION HEADER */}
        <div className="mb-12 lg:mb-20 text-center lg:text-left">
           <div className="flex items-center gap-3 justify-center lg:justify-start mb-4">
             <Sparkles size={18} className="text-orange-500" />
             <span className="text-orange-500 font-black uppercase text-[10px] md:text-xs tracking-[0.5em]">Get In Touch</span>
           </div>
           <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-black text-slate-900 dark:text-white tracking-tighter leading-[1.1] md:leading-[0.95]">
            Let's 
            <span className="md:hidden"> </span> 
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
              Talk.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* LEFT: INFO CARDS (5 cols) */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5 space-y-6">
            <div className="p-8 lg:p-12 bg-slate-50/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-sm backdrop-blur-3xl">
               <h3 className="text-xl lg:text-2xl font-black text-slate-900 dark:text-white mb-10 flex items-center gap-3">
                 <Info className="text-orange-500" size={24}/> Contact Details
               </h3>
               
               <div className="space-y-10">
                  {[
                    { icon: <Mail className="text-blue-500" />, label: "Direct Email", value: "mahfuz8344ony@gmail.com" },
                    { icon: <Phone className="text-cyan-400" />, label: "Whatsapp/Phone", value: "+880 1309 834483" },
                    { icon: <MapPin className="text-orange-500" />, label: "Location", value: "Jessore, Bangladesh" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start md:items-center gap-5 lg:gap-6">
                       <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl lg:rounded-2xl flex items-center justify-center flex-shrink-0">
                          {React.cloneElement(item.icon, { size: 22 })}
                       </div>
                       <div className="overflow-hidden">
                          <p className="text-[9px] font-black uppercase text-slate-400 tracking-[0.3em] mb-1">{item.label}</p>
                          <p className="text-base md:text-xl font-bold text-slate-800 dark:text-white truncate">{item.value}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>

          {/* RIGHT: FORM (7 cols) */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7">
            <form onSubmit={handleContactSubmit} className="bg-slate-50/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[2.5rem] lg:rounded-[4rem] p-8 lg:p-16 space-y-8 shadow-sm backdrop-blur-3xl">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase text-slate-400 ml-4 tracking-widest">Full Name</label>
                    <input name="name" required type="text" placeholder="Your name" className="w-full bg-white dark:bg-white/5 border dark:border-white/10 rounded-2xl px-6 py-5 text-sm lg:text-base outline-none focus:border-blue-500 dark:text-white transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase text-slate-400 ml-4 tracking-widest">Email Address</label>
                    <input name="email" required type="email" placeholder="Email address" className="w-full bg-white dark:bg-white/5 border dark:border-white/10 rounded-2xl px-6 py-5 text-sm lg:text-base outline-none focus:border-blue-500 dark:text-white transition-all" />
                  </div>
               </div>
               
               <div className="space-y-2">
                 <label className="text-[9px] font-black uppercase text-slate-400 ml-4 tracking-widest">Subject</label>
                 <input name="subject" required type="text" placeholder="What is this about?" className="w-full bg-white dark:bg-white/5 border dark:border-white/10 rounded-2xl px-6 py-5 text-sm lg:text-base outline-none focus:border-blue-500 dark:text-white transition-all" />
               </div>

               <div className="space-y-2">
                 <label className="text-[9px] font-black uppercase text-slate-400 ml-4 tracking-widest">Message</label>
                 <textarea name="message" required rows="5" placeholder="Your message here..." className="w-full bg-white dark:bg-white/5 border dark:border-white/10 rounded-[2rem] px-6 py-6 text-sm lg:text-base outline-none focus:border-blue-500 dark:text-white resize-none"></textarea>
               </div>

               <button disabled={isSending} type="submit" className="w-full bg-slate-900 dark:bg-cyan-400 text-white dark:text-black py-6 lg:py-8 rounded-2xl lg:rounded-3xl font-black uppercase tracking-[0.4em] text-[10px] md:text-[11px] flex items-center justify-center gap-4 transition-all hover:scale-[1.01] active:scale-[0.98]">
                 {isSending ? <Loader2 className="animate-spin" size={20} /> : <>Send Message <Send size={18} /></>}
               </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;