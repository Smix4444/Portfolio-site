'use client';
import React from 'react';
import Image from 'next/image';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-[#0f0f0f]">
      {/* Subtle top gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-[#2a2a2a]" />

      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center gap-4">
            {/* Mono label */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-label"
            >
              Mohamed Rayan Benchekroun
            </motion.span>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[2.8rem] md:text-[5.5rem] font-black leading-[0.92] tracking-[-0.04em] text-[#f5f5f5] max-w-4xl"
            >
              Unleash the power of
              <br />
              <span className="text-white">Cybersecurity</span>
              <br />
              <span className="text-[#888]">&amp; Analytics</span>
            </motion.h1>

            {/* Sub-line */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#888] text-sm md:text-base font-normal tracking-wide"
            >
              3rd-Year Student · AP Hogeschool Antwerpen · Available Mon–Wed
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex gap-3 mt-2"
            >
              <a
                href="#projects"
                className="px-5 py-2.5 bg-[#f5f5f5] text-[#0f0f0f] text-sm font-semibold tracking-wide rounded-sm hover:bg-white transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 border border-[#2a2a2a] text-[#f5f5f5] text-sm font-semibold tracking-wide rounded-sm hover:border-[#555] hover:bg-[#1a1a1a] transition-colors"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80"
          alt="Dark server room with glowing network cables"
          width={1400}
          height={720}
          className="mx-auto rounded-2xl object-cover h-full w-full object-center"
          priority
          unoptimized
        />
      </ContainerScroll>
    </section>
  );
}
