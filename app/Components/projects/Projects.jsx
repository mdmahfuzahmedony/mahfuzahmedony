'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, Loader2, Sparkles, Code2, ArrowUpRight } from 'lucide-react';

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

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="relative w-full py-32 bg-[#020617] transition-colors duration-500 overflow-hidden">

      {/* 1. DYNAMIC GRID BACKGROUND (ব্যানার ও অন্য সেকশনের সাথে মিল রেখে) */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L54 6L6 6L6 54L48 54L48 48L54 48Z' fill='none' stroke='%23444' stroke-width='1'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-0 relative z-10">

        {/* --- SECTION HEADER (Education/About ফন্ট স্টাইলে) --- */}
        <div className="mb-20 text-center lg:text-left">
           <div className="flex items-center gap-3 justify-center lg:justify-start mb-4">
             <Sparkles size={18} className="text-orange-500" />
             <span className="text-orange-500 font-black uppercase text-xs tracking-[0.5em]">Selected Works</span>
           </div>
           <h2 className="text-6xl lg:text-[5.5rem] font-black text-white tracking-tighter leading-[0.95]">
            My <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Creations.</span>
           </h2>
        </div>

        {/* --- CATEGORY FILTERS --- */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3.5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-cyan-500 border-cyan-500 text-[#020617] shadow-[0_0_30px_rgba(34,211,238,0.2)]'
                  : 'bg-white/5 border-white/10 text-slate-500 hover:border-cyan-500 hover:text-cyan-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* LOADING STATE */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-6">
            <Loader2 className="animate-spin text-cyan-500" size={56} />
            <p className="text-slate-500 font-black uppercase tracking-[0.4em] text-[10px]">Loading Portfolio Assets...</p>
          </div>
        ) : (
          /* --- PROJECT GRID --- */
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, i) => (
                  <motion.div
                    key={project._id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group relative bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-cyan-500/30 transition-all duration-500 flex flex-col h-full shadow-2xl backdrop-blur-3xl"
                  >
                    {/* Project Image Box */}
                    <div className="relative h-60 w-full overflow-hidden">
                      <img
                        src={project.projectImage}
                        alt={project.projectName}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                      />
                      <div className="absolute top-5 left-5">
                        <span className="bg-[#020617]/80 backdrop-blur-xl text-cyan-400 text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-xl border border-white/10 shadow-xl">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-black text-white mb-4 tracking-tighter group-hover:text-cyan-400 transition-colors">
                        {project.projectName}
                      </h3>

                      <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium italic">
                        {project.description}
                      </p>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-2 mb-10">
                        {project.techStack?.slice(0, 3).map((tech, index) => (
                          <span key={index} className="text-[9px] font-black text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 uppercase tracking-widest">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Card Footer Links */}
                      <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                        <div className="flex gap-4">
                          <a href={project.liveLink} target="_blank" rel="noreferrer" 
                             className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-[#020617] transition-all shadow-md group/link">
                            <ExternalLink size={20} className="group-hover/link:rotate-12" />
                          </a>
                          <a href={project.githubClient} target="_blank" rel="noreferrer" 
                             className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white hover:text-[#020617] transition-all shadow-md group/link">
                            <Github size={20} />
                          </a>
                        </div>

                        {/* View Details Link Style synced with Education */}
                        <Link href={`/projects/${project._id}`} 
                           className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500 hover:text-white transition-all group/btn">
                          Explore <ArrowUpRight size={14} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    {/* Bottom Gradient Accent */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-24 text-center border border-white/5 rounded-[3rem] bg-white/[0.01] backdrop-blur-xl">
                  <p className="text-slate-500 font-black uppercase tracking-[0.3em] text-xs">No project discoveries yet.</p>
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