'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/projects')
      .then((r) => r.json())
      .then((data) => {
        setProjects(Array.isArray(data) ? data : []);
      })
      .catch(() => setProjects([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="relative bg-[#0f0f0f] py-24 border-t border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">Projects</span>
          <div className="flex-1 h-px bg-[#2a2a2a]" />
          <span className="section-label">04</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-black tracking-[-0.03em] text-[#f5f5f5] mb-16 leading-tight max-w-2xl"
        >
          Work in
          <br />
          <span className="text-[#888]">progress.</span>
        </motion.h2>

        {/* Projects grid */}
        {loading ? (
          <div className="grid md:grid-cols-2 gap-4">
            {[0, 1].map((i) => (
              <div key={i} className="border border-[#2a2a2a] rounded-sm p-6 animate-pulse">
                <div className="h-4 bg-[#2a2a2a] rounded w-3/4 mb-4" />
                <div className="h-3 bg-[#2a2a2a] rounded w-full mb-2" />
                <div className="h-3 bg-[#2a2a2a] rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : projects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border border-[#2a2a2a] rounded-sm p-6 hover:border-[#444] hover:bg-[#1a1a1a] transition-all group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-[#f5f5f5] font-bold text-lg tracking-tight">{project.title}</h3>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#555] hover:text-[#f5f5f5] transition-colors ml-4 flex-shrink-0"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                <p className="text-[#888] text-sm leading-relaxed mb-4">{project.description}</p>
                {project.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 border border-[#2a2a2a] text-[#555] text-xs mono rounded-sm group-hover:border-[#333] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border border-[#2a2a2a] rounded-sm p-10 text-center"
          >
            <p className="text-[#888] text-sm mb-4">Projects are being uploaded to Supabase.</p>
            <p className="text-[#555] text-xs mono mb-6">In the meantime, check the GitHub directly.</p>
            <a
              href="https://github.com/projects?query=is%3Aopen+creator%3A%40me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#2a2a2a] text-[#f5f5f5] text-sm hover:border-[#555] hover:bg-[#1a1a1a] transition-all rounded-sm"
            >
              <GitBranch size={14} />
              View on GitHub
            </a>
          </motion.div>
        )}

        {/* GitHub banner */}
        <motion.a
          href="https://github.com/projects?query=is%3Aopen+creator%3A%40me"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex items-center justify-between border border-[#2a2a2a] rounded-sm p-6 hover:border-[#444] hover:bg-[#1a1a1a] transition-all group"
        >
          <div>
            <div className="text-[#f5f5f5] font-bold text-lg mb-1">All repositories on GitHub</div>
            <div className="text-[#888] text-sm">Open-source work, coursework, and experiments</div>
          </div>
          <GitBranch size={24} className="text-[#555] group-hover:text-[#f5f5f5] transition-colors flex-shrink-0 ml-4" />
        </motion.a>
      </div>
    </section>
  );
}
