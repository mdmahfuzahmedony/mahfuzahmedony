'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, sending, success

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  const handleSend = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 2000);
  };

  // If not mounted, show a blank space with the right background color
  if (!mounted) return <section className="py-20 bg-white dark:bg-[#020617]"></section>;

  return (
    <section id="contact" className="relative w-full py-24 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden z-20">
      
      {/* BACKGROUND TEXT */}
      <div className="absolute top-20 right-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none">
        <h2 className="text-[12vw] font-black uppercase">CONTACT</h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        
        <div className="mb-16 text-center lg:text-left">
           <span className="text-orange-500 font-black uppercase text-xs tracking-[0.4em]">Get In Touch</span>
           <h2 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white mt-4">
            Lets <span className="text-blue-600 dark:text-cyan-400">Talk.</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: INFO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem] shadow-xl">
               <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8">Contact Info</h3>
               
               <div className="space-y-8">
                  {[
                    { icon: <Mail className="text-blue-500" />, label: "Email", value: "hello@mahfuz.com" },
                    { icon: <Phone className="text-cyan-500" />, label: "Phone", value: "+880 1234 5678" },
                    { icon: <MapPin className="text-orange-500" />, label: "Location", value: "Dhaka, Bangladesh" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-5">
                       <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-md">
                          {item.icon}
                       </div>
                       <div>
                          <p className="text-[10px] font-black uppercase text-slate-400">{item.label}</p>
                          <p className="text-lg font-bold text-slate-900 dark:text-white">{item.value}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* STATUS CARD */}
            <div className="p-6 bg-slate-900 dark:bg-white rounded-[2rem] flex items-center gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
                <p className="text-white dark:text-black font-bold text-sm uppercase tracking-widest">Available for Hire</p>
            </div>
          </motion.div>

          {/* RIGHT: FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSend} className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[3rem] p-8 lg:p-12 space-y-6 shadow-2xl">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    required
                    type="text" 
                    placeholder="Name"
                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 outline-none focus:ring-2 ring-blue-500 dark:text-white"
                  />
                  <input 
                    required
                    type="email" 
                    placeholder="Email"
                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 outline-none focus:ring-2 ring-blue-500 dark:text-white"
                  />
               </div>
               <textarea 
                 required
                 rows="4"
                 placeholder="Your Message"
                 className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl px-6 py-4 outline-none focus:ring-2 ring-blue-500 dark:text-white resize-none"
               ></textarea>

               <button 
                 type="submit"
                 className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all
                   ${status === 'success' ? 'bg-green-500 text-white' : 'bg-blue-600 dark:bg-cyan-500 text-white dark:text-black'}
                 `}
               >
                 {status === 'idle' && <>Send Message <Send size={18} /></>}
                 {status === 'sending' && "Sending..."}
                 {status === 'success' && <><CheckCircle size={18}/> Sent Successfully</>}
               </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;