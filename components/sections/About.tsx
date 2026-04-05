'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { NumberTicker } from '@/components/ui/number-ticker';
import { Marquee } from '@/components/ui/marquee';
import {
  Shield, Terminal, Wifi, Server, Lock, Eye,
  Globe, Database, Code, MonitorSmartphone, Container, GitBranch
} from 'lucide-react';

const stats = [
  { value: 4, label: 'Languages spoken', suffix: '' },
  { value: 3, label: 'Years in hospitality', suffix: '+' },
  { value: 2026, label: 'Expected graduation', suffix: '' },
];

const techStack = [
  { icon: Shield, name: 'Wireshark' },
  { icon: Terminal, name: 'Kali Linux' },
  { icon: Eye, name: 'Nmap' },
  { icon: Lock, name: 'Metasploit' },
  { icon: Server, name: 'Linux' },
  { icon: Wifi, name: 'Networking' },
  { icon: Code, name: 'Python' },
  { icon: Terminal, name: 'Bash' },
  { icon: Globe, name: 'Next.js' },
  { icon: MonitorSmartphone, name: 'React' },
  { icon: Database, name: 'SQL' },
  { icon: Container, name: 'Docker' },
  { icon: GitBranch, name: 'Git' },
  { icon: Server, name: 'Windows Server' },
];

export default function About() {
  return (
    <section id="about" className="relative bg-[#0f0f0f] py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">About</span>
          <div className="flex-1 h-px bg-[#2a2a2a]" />
          <span className="section-label">01</span>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 mb-20">
          {/* Bio — 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#f5f5f5] mb-8 leading-[1.1]">
              Analytical mind,
              <br />
              <span className="text-[#888]">adaptive approach.</span>
            </h2>
            <div className="space-y-4 text-[#888] text-sm md:text-base leading-relaxed">
              <p>
                In the world of security, every packet tells a story — a handshake refused, a port quietly listening,
                a payload concealed in plain sight. I move through these layers with an analytical eye trained at
                AP Hogeschool Antwerpen, where curiosity meets method.
              </p>
              <p>
                I&apos;ve learned to adapt — behind a bar under Friday pressure, on a retail floor navigating a dozen
                conversations at once, inside a lab mapping vulnerabilities before they speak.
              </p>
              <p>
                Multilingual by nature: <span className="text-[#f5f5f5] font-medium">Dutch, English, Arabic, French.</span> Resilient
                by experience. Every role, every shift, every challenge has built someone who can read a room as
                fluently as he reads a network trace.
              </p>
            </div>
          </motion.div>

          {/* Stats — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-2 flex flex-col justify-center"
          >
            <div className="space-y-8">
              {stats.map((stat, i) => (
                <div key={stat.label} className="border-l-2 border-[#2a2a2a] pl-5 hover:border-[#ffaa40] transition-colors">
                  <div className="text-4xl font-black tracking-tight text-[#f5f5f5]">
                    <NumberTicker value={stat.value} delay={0.3 + i * 0.2} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-[#888] mt-1 font-mono uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
              {/* Availability */}
              <div className="border-l-2 border-green-500/30 pl-5">
                <div className="text-xl font-bold tracking-tight text-[#f5f5f5]">Mon–Wed</div>
                <div className="text-xs text-[#888] mt-1 font-mono uppercase tracking-widest">Available for work</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs text-[#555] font-mono uppercase tracking-widest mb-4 text-center">Tools & Technologies</p>
          <div className="relative">
            <Marquee pauseOnHover className="[--duration:30s]">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 mx-4 px-4 py-2 border border-[#2a2a2a] rounded-full hover:border-[#444] hover:bg-[#1a1a1a] transition-all"
                >
                  <tech.icon size={14} className="text-[#888]" />
                  <span className="text-xs text-[#f5f5f5] font-medium whitespace-nowrap">{tech.name}</span>
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0f0f0f]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0f0f0f]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
