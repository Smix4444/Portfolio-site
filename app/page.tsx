import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import WorkExperience from '@/components/sections/WorkExperience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WorkExperience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
