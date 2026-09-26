import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SectionLink = ({ to, children, location, activeSection }) => {
  const isHome = location.pathname === '/';
  const isActive = isHome && activeSection === to;
  
  const linkClasses = `group relative hidden md:block px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600'
  }`;

  const underline = (
    <span 
      className={`absolute inset-x-3 bottom-0 h-[2px] bg-indigo-600 transition-transform duration-300 ease-out ${
        isActive 
          ? 'origin-left scale-x-100' 
          : 'origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100'
      }`} 
    />
  );

  if (isHome) {
    return (
      <a href={`#${to}`} className={linkClasses}>
        {children}
        {underline}
      </a>
    );
  }
  
  return (
    <Link to={`/#${to}`} className={linkClasses}>
      {children}
      {underline}
    </Link>
  );
};

export default function Navbar() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = ['about', 'certifications', 'skills', 'projects', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Scalable threshold: triggers when the section enters the top 75% of the screen
          if (rect.top <= window.innerHeight * 0.75) {
            current = section;
          }
        }
      }
      
      // Edge case fix: If scrolled to the absolute bottom of the page, forcefully activate the last section
      // Math.ceil and -10px buffer ensures it fires even with fractional pixel differences
      if (Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 10) {
        current = sections[sections.length - 1];
      }
      
      // Clear active state if we scrolled back to the very top
      if (window.scrollY < 100) {
        current = '';
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  if (isAdmin) return null;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm shadow-slate-200/50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/admin" className="text-xl font-extrabold text-slate-900 tracking-tight hover:text-indigo-600 transition-colors">
          <span className="text-indigo-600">@</span>maheshthammappa<span className="text-indigo-600">.</span>me 
        </Link>
        
        <div className="flex items-center space-x-1 sm:space-x-2">
          <SectionLink to="about" location={location} activeSection={activeSection}>About</SectionLink>
          <SectionLink to="certifications" location={location} activeSection={activeSection}>Certifications</SectionLink>
          <SectionLink to="skills" location={location} activeSection={activeSection}>Skills</SectionLink>
          <SectionLink to="projects" location={location} activeSection={activeSection}>Projects</SectionLink>
          <SectionLink to="contact" location={location} activeSection={activeSection}>Contact</SectionLink>
          
          <Link 
            to="/notes" 
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${location.pathname.startsWith('/notes') ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
          >
            Notes
          </Link>
        </div>
      </div>
    </nav>
  );
}
