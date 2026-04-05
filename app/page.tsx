import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import TextRevealTransition from '@/components/sections/TextRevealTransition';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import WorkExperience from '@/components/sections/WorkExperience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TextRevealTransition />
      <About />
      <Education />
      <WorkExperience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
