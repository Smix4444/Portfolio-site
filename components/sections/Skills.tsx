'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, RefreshCw, MessageCircle } from 'lucide-react';

const languages = [
  { name: 'Dutch', level: 'Native', pct: 100 },
  { name: 'Arabic', level: 'Native', pct: 100 },
  { name: 'English', level: 'C2 — Perfect', pct: 97 },
  { name: 'French', level: 'B1 — Good basis', pct: 55 },
];

const softSkills = [
  { icon: Zap, label: 'Stress-resistant', desc: 'Proven under high-volume service environments' },
  { icon: Users, label: 'Team player', desc: 'Cross-functional collaboration across hospitality roles' },
  { icon: RefreshCw, label: 'Adaptable', desc: 'Thrives across corporate events, retail, and restaurant settings' },
  { icon: MessageCircle, label: 'Customer-oriented', desc: 'Guest-first mindset built over 3+ years of direct service' },
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#0f0f0f] py-24 border-t border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">Skills</span>
          <div className="flex-1 h-px bg-[#2a2a2a]" />
          <span className="section-label">03</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Languages */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-black tracking-tight text-[#f5f5f5] mb-8"
            >
              Languages
            </motion.h2>
            <div className="space-y-6">
              {languages.map((lang, i) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-[#f5f5f5] font-semibold text-sm tracking-wide">{lang.name}</span>
                    <span className="text-[#888] text-xs mono">{lang.level}</span>
                  </div>
                  <div className="h-px bg-[#2a2a2a] overflow-hidden rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                      className="h-full bg-[#f5f5f5]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft skills */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-black tracking-tight text-[#f5f5f5] mb-8"
            >
              Soft Skills
            </motion.h2>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="border border-[#2a2a2a] p-4 rounded-sm hover:border-[#444] hover:bg-[#1a1a1a] transition-all group"
                >
                  <skill.icon
                    size={16}
                    className="text-[#888] mb-3 group-hover:text-[#f5f5f5] transition-colors"
                  />
                  <div className="text-sm font-semibold text-[#f5f5f5] mb-1">{skill.label}</div>
                  <div className="text-xs text-[#888] leading-relaxed">{skill.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
