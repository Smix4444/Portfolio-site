'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { DotPattern } from '@/components/ui/dot-pattern';
import { GraduationCap, BookOpen, Shield, Terminal } from 'lucide-react';

const coursework = [
  { icon: Shield, name: 'Network Security', desc: 'Firewalls, IDS/IPS, traffic analysis, and secure network architecture design' },
  { icon: Terminal, name: 'Ethical Hacking', desc: 'Penetration testing methodology, vulnerability assessment, and exploit development' },
  { icon: BookOpen, name: 'System Administration', desc: 'Linux/Windows server management, Active Directory, and infrastructure hardening' },
  { icon: GraduationCap, name: 'Digital Forensics', desc: 'Evidence collection, incident response procedures, and malware analysis fundamentals' },
];

export default function Education() {
  return (
    <section id="education" className="relative bg-[#0a0a0a] py-24 overflow-hidden">
      <DotPattern className="opacity-30" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">Education</span>
          <div className="flex-1 h-px bg-[#2a2a2a]" />
          <span className="section-label">02</span>
        </motion.div>

        {/* Degree card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-16 border border-[#2a2a2a] rounded-lg p-8 md:p-12 bg-[#111]/60 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#f5f5f5] mb-2">
                AP Hogeschool Antwerpen
              </h2>
              <p className="text-[#888] text-lg">
                Bachelor in Applied Computer Science — <span className="text-[#f5f5f5] font-semibold">Cybersecurity</span>
              </p>
            </div>
            <div className="flex-shrink-0 text-right">
              <div className="text-sm font-mono text-[#555]">Expected graduation</div>
              <div className="text-2xl font-black text-[#f5f5f5]">2026</div>
            </div>
          </div>

          <p className="text-[#888] text-sm leading-relaxed max-w-2xl">
            Three-year programme combining theoretical foundations in network security with hands-on lab work in
            vulnerability assessment, ethical hacking, and system administration. Strong emphasis on real-world
            scenarios and industry-standard tooling.
          </p>

          {/* Decorative accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#9c40ff]/10 to-transparent rounded-bl-3xl pointer-events-none" />
        </motion.div>

        {/* Coursework grid */}
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-bold text-[#f5f5f5] mb-8 tracking-tight"
        >
          Key Coursework
        </motion.h3>

        <div className="grid sm:grid-cols-2 gap-4">
          {coursework.map((course, i) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-[#2a2a2a] rounded-lg p-5 hover:border-[#444] hover:bg-[#1a1a1a]/50 transition-all group"
            >
              <course.icon
                size={18}
                className="text-[#555] mb-3 group-hover:text-[#ffaa40] transition-colors"
              />
              <div className="text-sm font-semibold text-[#f5f5f5] mb-1">{course.name}</div>
              <div className="text-xs text-[#888] leading-relaxed">{course.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
