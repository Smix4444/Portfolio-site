'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Link2, GitBranch } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Benchekrounrayan8@gmail.com',
    href: 'mailto:Benchekrounrayan8@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '0491 74 82 19',
    href: 'tel:+32491748219',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Deurne, Antwerpen',
    href: null,
  },
  {
    icon: Link2,
    label: 'Instagram',
    value: '@iig.rayan',
    href: 'https://www.instagram.com/iig.rayan',
  },
  {
    icon: GitBranch,
    label: 'GitHub',
    value: 'Smix4444',
    href: 'https://github.com/Smix4444',
  },
];

export default function Contact() {
  // Fire-and-forget analytics ping
  useEffect(() => {
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ referrer: document.referrer || 'direct' }),
    }).catch(() => {});
  }, []);

  return (
    <footer id="contact" className="relative bg-[#0f0f0f] py-24 border-t border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">Contact</span>
          <div className="flex-1 h-px bg-[#2a2a2a]" />
          <span className="section-label">06</span>
        </motion.div>

        {/* Big headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-8xl font-black tracking-[-0.04em] text-[#f5f5f5] mb-4 leading-[0.9]"
        >
          Let&apos;s
          <br />
          <span className="text-[#888]">connect.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#888] text-sm font-mono mb-16 max-w-md"
        >
          Available Mon–Wed for student roles. Open to cybersecurity, IT support, or customer-facing positions in Antwerp.
        </motion.p>

        {/* Contact list */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {contactLinks.map((link, i) => {
            const Inner = (
              <div className="group flex items-center gap-4 border border-[#2a2a2a] rounded-lg p-5 hover:border-[#444] hover:bg-[#1a1a1a]/50 transition-all cursor-pointer relative overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[#9c40ff]/5 to-transparent pointer-events-none" />
                
                <link.icon size={18} className="text-[#555] group-hover:text-[#f5f5f5] transition-colors flex-shrink-0 relative z-10" />
                <div className="relative z-10">
                  <div className="text-xs text-[#555] font-mono mb-0.5">{link.label}</div>
                  <div className="text-sm text-[#f5f5f5] font-medium">{link.value}</div>
                </div>
              </div>
            );

            return (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                {link.href ? (
                  <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    {Inner}
                  </a>
                ) : (
                  Inner
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Footer bar */}
        <div className="border-t border-[#2a2a2a] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <span className="text-[#555] text-xs font-mono">© 2026 Mohamed Rayan Benchekroun</span>
          <span className="text-[#555] text-xs font-mono">Deurne, Antwerpen · AP Hogeschool</span>
        </div>
      </div>
    </footer>
  );
}
