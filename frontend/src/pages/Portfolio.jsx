import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Certifications from '../components/portfolio/Certifications';
import Skills from '../components/portfolio/Skills';
import Projects from '../components/portfolio/Projects';
import Contact from '../components/portfolio/Contact';
import Footer from '../components/portfolio/Footer';

export default function Portfolio() {
  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      
      <Hero />

        <About />
        <Certifications />
        <Skills />
        <Projects />
        <Contact />
      
    </div>
  );
}
