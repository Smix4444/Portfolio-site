'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { DotPattern } from '@/components/ui/dot-pattern';
import {
  Users, Zap, RefreshCw, MessageCircle,
  Shield, Terminal, Wifi, Code, Server, Eye,
  Database, Lock, Container, MonitorSmartphone, Globe, GitBranch
} from 'lucide-react';

const languages = [
  { name: 'Dutch', level: 'Native', pct: 100 },
  { name: 'Arabic', level: 'Native', pct: 100 },
  { name: 'English', level: 'C2 — Perfect', pct: 97 },
  { name: 'French', level: 'B1 — Conversational', pct: 55 },
];

const technicalSkills = [
  { icon: Eye, name: 'Wireshark', category: 'Analysis' },
  { icon: Terminal, name: 'Nmap', category: 'Scanning' },
  { icon: Shield, name: 'Kali Linux', category: 'PenTest' },
  { icon: Lock, name: 'Metasploit', category: 'Exploit' },
  { icon: Server, name: 'Linux', category: 'OS' },
  { icon: MonitorSmartphone, name: 'Windows Server', category: 'OS' },
  { icon: Code, name: 'Python', category: 'Language' },
  { icon: Terminal, name: 'Bash', category: 'Scripting' },
  { icon: Wifi, name: 'TCP/IP', category: 'Networking' },
  { icon: Lock, name: 'Firewalls', category: 'Security' },
  { icon: Database, name: 'SQL', category: 'Database' },
  { icon: Container, name: 'Docker', category: 'DevOps' },
  { icon: GitBranch, name: 'Git', category: 'Version Control' },
  { icon: Globe, name: 'React / Next.js', category: 'Web Dev' },
  { icon: Server, name: 'Active Directory', category: 'Admin' },
  { icon: Shield, name: 'SIEM Tools', category: 'Monitoring' },
];

const softSkills = [
  { icon: Zap, label: 'Stress-resistant', desc: 'Proven under high-volume service environments' },
  { icon: Users, label: 'Team player', desc: 'Cross-functional collaboration across roles' },
  { icon: RefreshCw, label: 'Adaptable', desc: 'Thrives in corporate, retail, and restaurant settings' },
  { icon: MessageCircle, label: 'Customer-oriented', desc: 'Guest-first mindset built over 3+ years' },
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#0a0a0a] py-24 overflow-hidden">
      <DotPattern className="opacity-20" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">Skills</span>
          <div className="flex-1 h-px bg-[#2a2a2a]" />
          <span className="section-label">04</span>
        </motion.div>

        {/* Technical Skills */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-black tracking-tight text-[#f5f5f5] mb-10"
        >
          Technical Arsenal
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-20">
          {technicalSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group relative border border-[#2a2a2a] rounded-lg p-4 hover:border-[#444] hover:bg-[#1a1a1a]/50 transition-all cursor-default"
            >
              <skill.icon
                size={16}
                className="text-[#555] mb-2.5 group-hover:text-[#ffaa40] transition-colors"
              />
              <div className="text-sm font-semibold text-[#f5f5f5] mb-0.5">{skill.name}</div>
              <div className="text-[10px] text-[#555] font-mono uppercase tracking-wider">{skill.category}</div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-[#ffaa40]/5 to-[#9c40ff]/5" />
            </motion.div>
          ))}
        </div>

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
                    <span className="text-[#888] text-xs font-mono">{lang.level}</span>
                  </div>
                  <div className="h-[3px] bg-[#2a2a2a] overflow-hidden rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-[#f5f5f5] to-[#888]"
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
                  className="group border border-[#2a2a2a] p-4 rounded-lg hover:border-[#444] hover:bg-[#1a1a1a]/50 transition-all"
                >
                  <skill.icon
                    size={16}
                    className="text-[#888] mb-3 group-hover:text-[#9c40ff] transition-colors"
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
