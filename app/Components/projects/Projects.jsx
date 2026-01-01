'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, Loader2 } from 'lucide-react';

const categories = ["All", "Web Development", "App Development", "UI/UX Design"];

const Projects = () => {
  const [projects, setProjects] = useState([]); // ডাটাবেসের প্রজেক্টগুলো এখানে থাকবে
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  // ১. সার্ভার থেকে প্রজেক্ট ফেচ করা
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

  // ২. ফিল্টারিং লজিক
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="relative w-full py-4 bg-[#020617] overflow-hidden">
      
      {/* Background Decor Text */}
      <div className="absolute top-10 left-10 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[12vw] font-black uppercase text-white leading-none">WORKS</h2>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-4  relative z-10">
        
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

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all duration-300 border ${
                activeCategory === cat 
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
          /* PROJECTS GRID */
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <motion.div
                    key={project._id} // MongoDB ID ব্যবহার করলাম
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group relative bg-[#0a0f1d] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-cyan-400/30 transition-all duration-500"
                  >
                    {/* Image Section */}
                    <div className="relative h-72 w-full overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="bg-black/50 backdrop-blur-md text-cyan-400 text-[9px] font-black uppercase tracking-wider px-4 py-2 rounded-xl border border-white/10">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <h3 className="text-2xl font-black text-white mb-6 group-hover:text-cyan-400 transition-colors truncate">
                        {project.name}
                      </h3>
                      
                      <div className="flex items-center justify-between pt-6 border-t border-white/5">
                        <div className="flex gap-4">
                          <a href={project.liveLink} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-400 hover:text-black transition-all">
                            <ExternalLink size={18} />
                          </a>
                          <a href={project.githubLink} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-all">
                            <Github size={18} />
                          </a>
                        </div>
                        <button className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white flex items-center gap-2 transition-colors">
                           Details <Layers size={14} />
                        </button>
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

        {/* View All Button */}
        {!isLoading && projects.length > 6 && (
          <div className="mt-20 text-center">
              <button className="px-10 py-4 bg-transparent border-2 border-white/5 rounded-full text-white font-black uppercase text-xs tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500">
                  View All Works
              </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;