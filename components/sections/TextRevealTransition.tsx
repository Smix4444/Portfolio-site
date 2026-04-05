'use client';
import React from 'react';
import { TextReveal } from '@/components/ui/text-reveal';

export default function TextRevealTransition() {
  return (
    <section className="relative bg-[#0f0f0f] py-32 md:py-48 px-6">
      <div className="max-w-4xl mx-auto">
        <TextReveal>
          In cybersecurity, every packet tells a story — a handshake refused, a port quietly listening, a payload concealed in plain sight. This is my story.
        </TextReveal>
      </div>
    </section>
  );
}
