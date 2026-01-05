'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  User, Code2, Rocket, Laptop, CheckCircle2,
  Coffee, Camera, Gamepad2, Database, ShieldCheck, Terminal
} from 'lucide-react';

const About = () => {
  // আপনার স্কিলগুলো এখানে আপডেট করা হয়েছে
  const skills = [
    {
      name: 'Frontend',
      tech: 'React.js, Next.js, Tailwind CSS, Redux, Framer Motion',
      icon: <Laptop className="text-blue-400" />
    },
    {
      name: 'Backend',
      tech: 'Node.js, Express.js, JWT, Rest API, Socket.io',
      icon: <Terminal className="text-green-400" />
    },
    {
      name: 'Database & Auth',
      tech: 'MongoDB, Mongoose, Firebase, PostgreSQL',
      icon: <Database className="text-orange-400" />
    },
  ];

  return (
    <section id="about" className="relative max-w-[1600px] mx-auto py-32 bg-white dark:bg-[#020617] transition-colors duration-500 z-20 overflow-hidden">

      {/* Background Decorative Text */}
      <div className="absolute top-10 left-10 opacity-[0.03] dark:opacity-[0.08] pointer-events-none select-none">
        <h2 className="text-[12vw] font-black uppercase tracking-tighter">ABOUT ME</h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* LEFT COLUMN: Stats & Personality */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md shadow-2xl">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                <User className="text-blue-600 dark:text-cyan-400" /> Profile & Vibe
              </h3>
              <div className="mt-8 space-y-6">
                <div className="flex justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                  <span className="text-slate-500 font-bold uppercase text-xs tracking-widest">Experience</span>
                  <span className="text-2xl font-black text-blue-600 dark:text-cyan-400">2+ Years</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                  <span className="text-slate-500 font-bold uppercase text-xs tracking-widest">Passions</span>
                  <div className="flex gap-3 text-slate-400">
                    <Coffee size={20} title="Coffee Lover" />
                    <Camera size={20} title="Photography" />
                    <Gamepad2 size={20} title="Gaming" />
                  </div>
                </div>
                <p className="text-sm text-slate-500 italic leading-relaxed">
                  "When I'm not coding, I'm likely exploring new tech trends, capturing moments through my lens, or enjoying a competitive gaming session."
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-8 bg-blue-600 dark:bg-cyan-500 rounded-[2rem] text-white dark:text-black shadow-2xl">
              <CheckCircle2 size={40} className="shrink-0" />
              <p className="font-black text-lg leading-tight">MERN Stack Expert building high-performance apps.</p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Bio & Detailed Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="space-y-6">
              <span className="text-orange-500 font-black uppercase text-xs tracking-[0.4em]">My Story</span>
              <h2 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1]">
                Solving problems <br />
                with <span className="text-blue-600 dark:text-cyan-400">Innovation.</span>
              </h2>

              <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl">
                <p>
                  Hello! I am <span className="font-bold text-slate-900 dark:text-white underline decoration-cyan-500">Mahfuz Ahmed</span>.
                  My journey into programming started with a simple curiosity, which soon turned into a passion for building full-stack applications using the **MERN Stack**.
                </p>
                <p>
                  I enjoy the process of turning complex problems into simple, elegant, and scalable code. My focus is always on performance and user experience.
                </p>
              </div>
            </div>

            {/* স্কিল গ্রিড */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, i) => (
                <div key={i} className="p-8 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-[2rem] hover:border-cyan-500/50 transition-all group">
                  <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h4 className="font-black text-xl text-slate-900 dark:text-white uppercase tracking-tighter">{skill.name}</h4>
                  <p className="text-slate-500 text-sm mt-2 font-medium">{skill.tech}</p>
                </div>
              ))}

              {/* Special Tech-Driven Card */}
              <motion.div
                animate={{ boxShadow: ["0px 0px 0px rgba(34,211,238,0)", "0px 0px 30px rgba(34,211,238,0.3)", "0px 0px 0px rgba(34,211,238,0)"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="p-8 bg-blue-600 dark:bg-cyan-500 rounded-[2rem] flex flex-col items-center justify-center text-center text-white dark:text-black shadow-xl"
              >
                <ShieldCheck size={32} className="mb-2" />
                <h4 className="font-black text-2xl uppercase italic">Tech Driven</h4>
                <p className="text-[10px] uppercase font-black tracking-[0.3em] opacity-80 mt-2">Continuous Learning</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;