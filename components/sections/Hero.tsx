'use client';
import React from 'react';
import { WebGLShader } from '@/components/ui/web-gl-shader';
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* WebGL — scoped to hero with absolute, NOT fixed */}
      <div className="absolute inset-0 z-0">
        <WebGLShader />
      </div>

      {/* Bottom gradient fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0f0f0f] to-transparent z-[1]" />

      {/* Content overlay */}
      <div className="relative z-10 w-full">
        <div className="border border-[#27272a]/50 p-2 w-full mx-auto max-w-3xl">
          <main className="relative border border-[#27272a]/50 py-12 md:py-16 overflow-hidden backdrop-blur-sm bg-black/10">
            {/* Mono label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/40 text-center text-xs md:text-sm tracking-[0.2em] uppercase font-mono mb-6"
            >
              Mohamed Rayan Benchekroun
            </motion.p>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 text-white text-center text-5xl sm:text-7xl font-extrabold tracking-tighter md:text-[clamp(2rem,8vw,7rem)]"
            >
              Cybersecurity
              <br />
              <span className="text-white/50">&amp; Analytics</span>
            </motion.h1>

            {/* Sub-line */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/60 px-6 text-center text-xs md:text-sm lg:text-base"
            >
              3rd-Year Student · AP Hogeschool Antwerpen · Available Mon–Wed
            </motion.p>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="my-8 flex items-center justify-center gap-1.5"
            >
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <p className="text-xs text-green-500 font-mono">Available for New Projects</p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="#projects">
                <LiquidButton className="text-white border rounded-full" size={'xl'}>
                  View Projects
                </LiquidButton>
              </a>
              <a href="#contact">
                <LiquidButton className="text-white border rounded-full" size={'xl'}>
                  Contact Me
                </LiquidButton>
              </a>
            </motion.div>
          </main>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
