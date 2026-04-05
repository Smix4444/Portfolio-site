'use client';
import React from 'react';
import { motion } from 'framer-motion';

const jobs = [
  {
    role: 'Kelner',
    company: 'J&M',
    location: 'Antwerpen',
    period: 'Nov 2024 – Present',
    description: 'Fast-paced service in a high-volume venue. Built stress-resistance through constant multitasking and friendly performance under pressure.',
    skills: ['Stress-resistant', 'Teamwork', 'Customer-first'],
  },
  {
    role: 'Verkoper',
    company: 'Kwantum',
    location: 'Antwerpen',
    period: 'Sep 2024 – Present',
    description: 'Customer advice on home furnishings, POS system operation, and maintaining store organisation across departments.',
    skills: ['Communication', 'POS Systems', 'Organisation'],
  },
  {
    role: 'Kelner',
    company: 'Mise en Place',
    location: 'Antwerpen',
    period: 'Nov 2023 – Mar 2024',
    description: 'Catering across diverse event formats — from corporate dinners to large galas. Developed adaptability and composure in unfamiliar settings.',
    skills: ['Adaptability', 'Event Service', 'Flexibility'],
  },
  {
    role: 'Serveerder',
    company: 'Fish A Go Go',
    location: 'Antwerpen',
    period: 'Dec 2022 – Jun 2023',
    description: 'Order handling, maintaining cleanliness, and ensuring a smooth guest experience in a busy restaurant environment.',
    skills: ['Efficiency', 'Cleanliness', 'Guest Relations'],
  },
];

export default function WorkExperience() {
  return (
    <section id="experience" className="relative bg-[#0f0f0f] py-24 border-t border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">Experience</span>
          <div className="flex-1 h-px bg-[#2a2a2a]" />
          <span className="section-label">03</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-black tracking-[-0.03em] text-[#f5f5f5] mb-16 leading-tight max-w-2xl"
        >
          Built through
          <br />
          <span className="text-[#888]">real pressure.</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{ originY: 0 }}
            className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-gradient-to-b from-[#ffaa40]/50 via-[#2a2a2a] to-[#2a2a2a]"
          />

          <div className="space-y-16">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-12"
              >
                {/* Date column */}
                <div className="md:w-[200px] md:text-right flex-shrink-0 pt-1">
                  <span className="font-mono text-[#555] text-xs tracking-widest">{job.period}</span>
                </div>

                {/* Dot on timeline */}
                <div className="absolute left-[-5px] md:left-[196px] top-[6px] w-[9px] h-[9px] rounded-full bg-[#0f0f0f] border-2 border-[#555] group-hover:border-[#ffaa40] transition-colors" />

                {/* Content */}
                <div className="md:pl-12 flex-1 group">
                  <div className="flex flex-wrap items-baseline gap-2 mb-2">
                    <h3 className="text-xl font-bold text-[#f5f5f5] tracking-tight">{job.role}</h3>
                    <span className="text-[#888] text-sm">@ {job.company}</span>
                    <span className="text-[#555] text-xs font-mono">· {job.location}</span>
                  </div>
                  <p className="text-[#888] text-sm leading-relaxed mb-4 max-w-lg">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 border border-[#2a2a2a] text-[#888] text-xs font-mono rounded-full hover:border-[#555] hover:text-[#f5f5f5] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
