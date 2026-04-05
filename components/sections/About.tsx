'use client';
import React from 'react';
import { PoemAnimation } from '@/components/ui/3d-animation';
import { motion } from 'framer-motion';

const poemHTML = `
  <p>In the world of <span>security</span>, every packet tells a story — a handshake refused, a port quietly listening, a payload <span>concealed</span> in plain sight. Rayan moves through these layers with an <span>analytical</span> eye trained at AP Hogeschool Antwerpen, where curiosity meets method. He has learned to <span>adapt</span> — behind a bar under Friday pressure, on a retail floor navigating a dozen conversations at once, inside a lab <span>mapping</span> vulnerabilities before they speak. Multilingual by nature: Dutch, English, Arabic, French. <span>Resilient</span> by experience. Every role, every shift, every challenge has built someone who can read a room as fluently as he reads a <span>network trace</span>. This is not a CV. This is a <span>mindset</span>.</p>
`;

export default function About() {
  return (
    <section id="about" className="relative bg-[#0f0f0f] py-8">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 pb-8 flex items-center gap-4"
      >
        <span className="section-label">About</span>
        <div className="flex-1 h-px bg-[#2a2a2a]" />
        <span className="section-label">01</span>
      </motion.div>

      {/* 3D Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <PoemAnimation
          poemHTML={poemHTML}
          backgroundImageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1400&q=80"
          boyImageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80"
        />
      </motion.div>

      {/* Quick stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { value: '4', label: 'Languages spoken' },
          { value: '3+', label: 'Years in hospitality' },
          { value: '2026', label: 'Expected graduation' },
          { value: 'Mon–Wed', label: 'Available for work' },
        ].map((stat) => (
          <div key={stat.label} className="border-l border-[#2a2a2a] pl-4">
            <div className="text-3xl font-black tracking-tight text-[#f5f5f5]">{stat.value}</div>
            <div className="text-xs text-[#888] mt-1 section-label">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
