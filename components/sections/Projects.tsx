'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Shield, Terminal, Globe, Server, Lock, Eye } from 'lucide-react';

const projects = [
  {
    id: 'traffic-analyzer',
    title: 'Network Traffic Analyzer',
    description: 'Python tool using Scapy and dpkt for real-time packet capture, protocol dissection, and anomaly detection. Exports PCAP reports with flagged suspicious payloads and DNS exfiltration attempts.',
    tags: ['Python', 'Scapy', 'Wireshark', 'PCAP'],
    icon: Shield,
    url: 'https://github.com/Smix4444',
    accent: 'from-blue-500/10',
  },
  {
    id: 'vuln-scanner',
    title: 'Vulnerability Scanner Dashboard',
    description: 'React dashboard aggregating Nmap and OpenVAS scan results via REST API. Implements CVSS scoring, tracks remediation status, and generates compliance-ready PDF reports.',
    tags: ['React', 'Python', 'Nmap', 'OpenVAS', 'CVSS'],
    icon: Terminal,
    url: 'https://github.com/Smix4444',
    accent: 'from-purple-500/10',
  },
  {
    id: 'homelab',
    title: 'Home Lab Infrastructure',
    description: 'Proxmox hypervisor running segmented VLANs — pfSense firewall with Suricata IDS, Wazuh SIEM for log aggregation, Active Directory domain, and Grafana monitoring stack.',
    tags: ['Proxmox', 'pfSense', 'Wazuh', 'Suricata', 'Docker'],
    icon: Server,
    url: 'https://github.com/Smix4444',
    accent: 'from-green-500/10',
  },
  {
    id: 'password-auditor',
    title: 'Password Strength Auditor',
    description: 'CLI tool analysing password hashes against common wordlists and rule-based mutations. Integrates with hashcat and John the Ripper for benchmarking enterprise password policies.',
    tags: ['Python', 'Hashcat', 'John the Ripper', 'Bash'],
    icon: Lock,
    url: 'https://github.com/Smix4444',
    accent: 'from-red-500/10',
  },
  {
    id: 'phishing-platform',
    title: 'Phishing Awareness Platform',
    description: 'Internal training tool simulating phishing campaigns for security awareness. Tracks click rates, credential submissions, and generates per-department risk scores.',
    tags: ['Next.js', 'PostgreSQL', 'Social Engineering', 'Email'],
    icon: Eye,
    url: 'https://github.com/Smix4444',
    accent: 'from-yellow-500/10',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'This site — Next.js 16 with WebGL shaders, Magic UI components, security-hardened headers (HSTS, CSP, X-Frame-Options), and automated Vercel CI/CD pipeline.',
    tags: ['Next.js', 'Three.js', 'Framer Motion', 'CSP'],
    icon: Globe,
    url: 'https://github.com/Smix4444/Portfolio-site',
    accent: 'from-orange-500/10',
  },
];

export default function Projects() {
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
          <span className="section-label">05</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-black tracking-[-0.03em] text-[#f5f5f5] mb-16 leading-tight max-w-2xl"
        >
          Built to
          <br />
          <span className="text-[#888]">learn & ship.</span>
        </motion.h2>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative border border-[#2a2a2a] rounded-lg p-6 hover:border-[#444] transition-all overflow-hidden"
            >
              {/* Background accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div className="relative">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <project.icon size={18} className="text-[#555] group-hover:text-[#ffaa40] transition-colors" />
                    <h3 className="text-[#f5f5f5] font-bold text-lg tracking-tight">{project.title}</h3>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-[#555] group-hover:text-[#f5f5f5] transition-colors flex-shrink-0 mt-1"
                  />
                </div>
                <p className="text-[#888] text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 border border-[#2a2a2a] text-[#555] text-xs font-mono rounded-full group-hover:border-[#333] group-hover:text-[#888] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* GitHub banner */}
        <motion.a
          href="https://github.com/Smix4444"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex items-center justify-between border border-[#2a2a2a] rounded-lg p-6 hover:border-[#444] hover:bg-[#1a1a1a]/30 transition-all group"
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
