import { Suspense } from 'react';
import Header from '@/components/sections/Header';
import NavBar from '@/components/shared/NavBar';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/shared/Footer';
import ThemeToggle from '@/components/shared/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ThemeToggle />
      <NavBar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
