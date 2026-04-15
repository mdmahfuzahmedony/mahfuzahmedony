'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Loader2, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ["All", "Web Development", "App Development", "UI/UX Design"];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4; // ৪টির বেশি হলে পরের পেজে যাবে

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get('https://mdmahfuzahmedony-server.vercel.app/projects');
        setProjects(res.data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  useEffect(() => { setCurrentPage(1); }, [activeCategory]);

  return (
    <section id="projects" className="relative w-full py-20 lg:py-32 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L54 6L6 6L6 54L48 54L48 48L54 48Z' fill='none' stroke='%23444' stroke-width='1'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
        
        {/* Header */}
        <div className="mb-12 lg:mb-20 text-center lg:text-left">
           <div className="flex items-center gap-3 justify-center lg:justify-start mb-4">
             <Sparkles size={18} className="text-orange-500" />
             <span className="text-orange-500 font-black uppercase text-[10px] md:text-xs tracking-[0.5em]">Selected Works</span>
           </div>
           <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-slate-900 dark:text-white tracking-tighter leading-[1.1] md:leading-[0.95]">
            My <span className="md:hidden"> </span> <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Creations.</span>
           </h2>
        </div>

        {/* Filters - Mobile Scrollable */}
        <div className="flex overflow-x-auto md:flex-wrap items-center gap-3 mb-12 pb-4 md:pb-0 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-3 rounded-xl lg:rounded-2xl font-black uppercase text-[9px] lg:text-[10px] tracking-widest transition-all border ${
                activeCategory === cat
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        {isLoading ? (
          <div className="flex flex-col items-center py-24">
            <Loader2 className="animate-spin text-blue-500" size={40} />
            <p className="text-slate-400 font-black uppercase tracking-widest text-[10px] mt-4">Loading Assets...</p>
          </div>
        ) : (
          <>
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <AnimatePresence mode='popLayout'>
                {currentProjects.map((project, i) => (
                  <motion.div
                    key={project._id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="group relative bg-slate-50/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden flex flex-col transition-all hover:border-blue-500/40 shadow-sm hover:shadow-2xl"
                  >
                    {/* BIG IMAGE BOX */}
                    <div className="relative aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden">
                      <img
                        src={project.projectImage}
                        alt={project.projectName}
                        className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="bg-white/90 dark:bg-[#020617]/80 backdrop-blur-md text-blue-600 dark:text-cyan-400 text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* CONTENT BELOW */}
                    <div className="p-8 lg:p-12 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tighter group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                          {project.projectName}
                        </h3>
                        <div className="flex gap-3">
                          <a href={project.liveLink} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                            <ExternalLink size={22} />
                          </a>
                          <a href={project.githubClient} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <Github size={22} />
                          </a>
                        </div>
                      </div>

                      <p className="text-slate-500 dark:text-slate-400 text-sm lg:text-base leading-relaxed mb-8 font-medium">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200 dark:border-white/10">
                        {project.techStack?.map((tech, index) => (
                          <span key={index} className="text-[9px] font-black text-slate-400 dark:text-slate-300 bg-slate-200/50 dark:bg-white/5 px-3 py-1 rounded-lg uppercase">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-20">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => prev - 1)}
                  className="w-12 h-12 rounded-2xl border border-slate-200 dark:border-white/10 disabled:opacity-30 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`w-12 h-12 rounded-2xl font-black text-xs transition-all ${
                        currentPage === index + 1
                          ? 'bg-blue-600 text-white'
                          : 'border border-slate-200 dark:border-white/10 text-slate-400 hover:border-blue-500'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => prev - 1)}
                  className="w-12 h-12 rounded-2xl border border-slate-200 dark:border-white/10 disabled:opacity-30 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Projects;