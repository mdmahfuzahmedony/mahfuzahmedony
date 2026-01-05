'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, Loader2, Plus, X } from 'lucide-react';
import Link from 'next/link';
import Swal from 'sweetalert2';

const AddProject = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // ১০টি পয়েন্ট অনুযায়ী স্টেট ম্যানেজমেন্ট
  const [formData, setFormData] = useState({
    projectName: '',
    projectImage: '',
    category: 'Web Development',
    description: '',
    techStack: '', // কমা দিয়ে সেপারেট করা হবে (যেমন: React, Node.js)
    liveLink: '',
    githubClient: '',
    challenges: '',
    futurePlans: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Tech Stack কে স্ট্রিং থেকে অ্যারেতে রূপান্তর করা
    const formattedData = {
      ...formData,
      techStack: formData.techStack.split(',').map(item => item.trim())
    };

    try {
      const res = await axios.post('https://mdmahfuzahmedony-server.vercel.app/projects', formattedData);

      if (res.status === 200 || res.status === 201) {
        Swal.fire({
          title: 'Success!',
          text: 'Project added successfully',
          icon: 'success',
          background: '#0a0f1d',
          color: '#fff',
          confirmButtonColor: '#22d3ee'
        });
        router.push('/admin/projects'); // প্রোজেক্ট লিস্টে ফিরে যাবে
      }
    } catch (err) {
      console.error(err);
      Swal.fire('Error', 'Something went wrong!', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl font-black">Add New <span className="text-cyan-400">Project.</span></h2>
          <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mt-2">Create a new masterpiece</p>
        </div>
        <Link href="/admin/projects" className="flex items-center gap-2 text-slate-400 hover:text-white transition-all text-xs font-bold uppercase tracking-widest">
          <ArrowLeft size={16} /> Back
        </Link>
      </div>

      {/* Form Container */}
      <form onSubmit={handleSubmit} className="space-y-8 bg-[#0a0f1d] p-8 lg:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl">

        {/* Grid for Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Project Name */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-black tracking-widest text-slate-500 ml-2">Project Name</label>
            <input
              required name="projectName" value={formData.projectName} onChange={handleChange}
              type="text" placeholder="e.g. Urban Stay"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400/50 transition-all"
            />
          </div>

          {/* Project Image URL */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-black tracking-widest text-slate-500 ml-2">Image URL</label>
            <input
              required name="projectImage" value={formData.projectImage} onChange={handleChange}
              type="text" placeholder="https://i.ibb.co/..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400/50 transition-all"
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-black tracking-widest text-slate-500 ml-2">Category</label>
            <select
              name="category" value={formData.category} onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400/50 transition-all appearance-none cursor-pointer"
            >
              <option className="bg-[#0a0f1d]" value="Web Development">Web Development</option>
              <option className="bg-[#0a0f1d]" value="App Development">App Development</option>
              <option className="bg-[#0a0f1d]" value="UI/UX Design">UI/UX Design</option>
            </select>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-black tracking-widest text-slate-500 ml-2">Tech Stack (comma separated)</label>
            <input
              required name="techStack" value={formData.techStack} onChange={handleChange}
              type="text" placeholder="React, Node, MongoDB"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400/50 transition-all"
            />
          </div>

          {/* Live Link */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-black tracking-widest text-slate-500 ml-2">Live Demo URL</label>
            <input
              required name="liveLink" value={formData.liveLink} onChange={handleChange}
              type="text" placeholder="https://..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400/50 transition-all"
            />
          </div>

          {/* GitHub Client */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-black tracking-widest text-slate-500 ml-2">GitHub Client URL</label>
            <input
              required name="githubClient" value={formData.githubClient} onChange={handleChange}
              type="text" placeholder="https://github.com/..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400/50 transition-all"
            />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-black tracking-widest text-slate-500 ml-2">Brief Description</label>
          <textarea
            required name="description" value={formData.description} onChange={handleChange}
            rows="3" placeholder="Tell something about the project..."
            className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 outline-none focus:border-cyan-400/50 transition-all resize-none"
          ></textarea>
        </div>

        {/* Challenges */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-black tracking-widest text-slate-500 ml-2">Challenges Faced</label>
          <textarea
            required name="challenges" value={formData.challenges} onChange={handleChange}
            rows="3" placeholder="What problems did you solve?"
            className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 outline-none focus:border-cyan-400/50 transition-all resize-none"
          ></textarea>
        </div>

        {/* Future Plans */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-black tracking-widest text-slate-500 ml-2">Potential Improvements</label>
          <textarea
            required name="futurePlans" value={formData.futurePlans} onChange={handleChange}
            rows="3" placeholder="What's next for this project?"
            className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 outline-none focus:border-cyan-400/50 transition-all resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            disabled={isLoading}
            type="submit"
            className="w-full bg-cyan-400 hover:bg-white text-black font-black uppercase py-5 rounded-2xl transition-all shadow-xl active:scale-[0.98] flex items-center justify-center gap-3"
          >
            {isLoading ? (
              <> <Loader2 className="animate-spin" /> Saving... </>
            ) : (
              <> <Save size={20} /> Save Project </>
            )}
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddProject;