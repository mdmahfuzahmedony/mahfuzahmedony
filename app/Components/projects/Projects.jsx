'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, Loader2 } from 'lucide-react';

// ১. ক্যাটাগরি লিস্ট (আপনার ডাটাবেসের ক্যাটাগরির সাথে মিল থাকতে হবে)
const categories = ["All", "Web Development", "App Development", "UI/UX Design"];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get('https://mdmahfuzahmedony-server.vercel.app/projects');
        setProjects(res.data);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // ২. ফিল্টারিং লজিক (এখানেই মেইন কাজ হচ্ছে)
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="relative w-full py-32 bg-[#020617] overflow-hidden">

      {/* Background Decor Text */}
      <div className="absolute top-10 left-10 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[12vw] font-black uppercase text-white leading-none">WORKS</h2>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-4 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-orange-500 font-black uppercase text-xs tracking-[0.4em] mb-4 block"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-black text-white"
          >
            My <span className="text-cyan-400">Creations.</span>
          </motion.h2>
        </div>

        {/* ৩. ক্যাটাগরি ফিল্টার বাটনসমূহ */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all duration-300 border ${activeCategory === cat
                  ? 'bg-cyan-400 border-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:border-cyan-400 hover:text-cyan-400'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* LOADING STATE */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="animate-spin text-cyan-400" size={48} />
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Fetching Projects...</p>
          </div>
        ) : (
          /* ৪. প্রজেক্ট গ্রিড (filteredProjects ম্যাপ করা হচ্ছে) */
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <motion.div
                    key={project._id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group relative bg-[#0a0f1d] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-cyan-400/30 transition-all duration-500 flex flex-col h-full"
                  >
                    {/* Project Image */}
                    <div className="relative h-64 w-full overflow-hidden">
                      <img
                        src={project.projectImage}
                        alt={project.projectName}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="bg-black/50 backdrop-blur-md text-cyan-400 text-[9px] font-black uppercase tracking-wider px-4 py-2 rounded-xl border border-white/10">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {project.projectName}
                      </h3>

                      <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack?.slice(0, 4).map((tech, index) => (
                          <span key={index} className="text-[9px] font-bold text-slate-300 bg-white/5 px-3 py-1 rounded-lg border border-white/5 uppercase tracking-tighter">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Footer Links */}
                      <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                        <div className="flex gap-4">
                          <a href={project.liveLink} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-400 hover:text-black transition-all">
                            <ExternalLink size={18} />
                          </a>
                          <a href={project.githubClient} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-all">
                            <Github size={18} />
                          </a>
                        </div>

                        {/* View More Button */}
                        <Link href={`/projects/${project._id}`} className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-cyan-400 flex items-center gap-2 transition-colors group/btn">
                          Details <Layers size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center border border-white/5 rounded-[3rem] bg-white/[0.02]">
                  <p className="text-slate-500 font-bold italic">No projects found in this category.</p>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;