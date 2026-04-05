'use client';
import React from 'react';
import { WebGLShader } from '@/components/ui/web-gl-shader';
import { LiquidButton } from '@/components/ui/liquid-glass-button';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* WebGL animated background */}
      <WebGLShader />

      {/* Content overlay */}
      <div className="relative z-10 border border-[#27272a] p-2 w-full mx-auto max-w-3xl">
        <main className="relative border border-[#27272a] py-10 overflow-hidden">
          {/* Mono label */}
          <p className="text-white/40 text-center text-xs md:text-sm tracking-[0.2em] uppercase font-mono mb-4">
            Mohamed Rayan Benchekroun
          </p>

          {/* Main headline */}
          <h1 className="mb-3 text-white text-center text-5xl sm:text-7xl font-extrabold tracking-tighter md:text-[clamp(2rem,8vw,7rem)]">
            Cybersecurity
            <br />
            <span className="text-white/50">&amp; Analytics</span>
          </h1>

          {/* Sub-line */}
          <p className="text-white/60 px-6 text-center text-xs md:text-sm lg:text-lg">
            3rd-Year Student · AP Hogeschool Antwerpen · Available Mon–Wed
          </p>

          {/* Status badge */}
          <div className="my-8 flex items-center justify-center gap-1">
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <p className="text-xs text-green-500">Available for New Projects</p>
          </div>

          {/* CTA buttons */}
          <div className="flex justify-center gap-4">
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
          </div>
        </main>
      </div>
    </section>
  );
}
