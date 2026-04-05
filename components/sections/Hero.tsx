'use client';
import React from 'react';
import { WebGLShader } from '@/components/ui/web-gl-shader';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* WebGL background — full hero */}
      <div className="absolute inset-0 z-0">
        <WebGLShader />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0f0f0f] to-transparent z-[1]" />

      {/* Content — no box, just clean floating text */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Small mono label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-white/30 text-[10px] md:text-xs tracking-[0.35em] uppercase font-mono mb-8"
        >
          Mohamed Rayan Benchekroun
        </motion.p>

        {/* Main headline — big, bold, clean */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[-0.05em] leading-[0.85] mb-8"
        >
          <span className="text-white">Crafted</span>
          <br />
          <span className="text-white/40">over the years.</span>
        </motion.h1>

        {/* Subtle tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-white/40 text-sm md:text-base font-light max-w-md mx-auto mb-10 leading-relaxed"
        >
          Cybersecurity student, multilingual problem-solver,
          <br className="hidden sm:block" />
          and builder of things that matter.
        </motion.p>

        {/* Status + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          {/* Available badge */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-green-500/80 text-xs font-mono">Available Mon–Wed</span>
          </div>

          <span className="hidden sm:block text-white/10">|</span>

          {/* Navigation links styled as minimal text buttons */}
          <div className="flex items-center gap-4">
            <a
              href="#projects"
              className="text-white/50 hover:text-white text-xs font-mono uppercase tracking-widest transition-colors"
            >
              Projects ↓
            </a>
            <a
              href="#contact"
              className="text-white/50 hover:text-white text-xs font-mono uppercase tracking-widest transition-colors"
            >
              Contact ↓
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className="text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
