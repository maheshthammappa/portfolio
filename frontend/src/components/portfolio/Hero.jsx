export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/50 via-slate-50 to-slate-50"></div>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-purple-200/40 blur-3xl"></div>
      <div className="absolute top-40 left-0 -ml-20 w-72 h-72 rounded-full bg-indigo-200/40 blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center -mt-12 md:-mt-20">
        
        <div className="mb-8 md:mb-10 flex justify-center px-4">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="w-25 h-25 md:w-30 md:h-30 hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-pointer drop-shadow-lg" title="Java Developer" />
        </div>

        <p className="text-indigo-400 font-semibold tracking-[0.3em] uppercase text-xs mb-4">Hello, World. I am</p>

        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-800 mb-8 flex items-center justify-center w-full">
          <span className="text-indigo-200 font-light mr-3 md:mr-5">{'{'}</span>
          <span className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 whitespace-nowrap">MAHESH THAMMAPPA</span>
          <span className="text-indigo-200 font-light ml-3 md:ml-5">{'}'}</span>
        </h1>
        
        <p className="text-md md:text-lg text-slate-600 max-w-2xl leading-relaxed mb-10">
          Java backend developer with hands-on experience building Spring Boot applications and AI-powered systems. Driven by a continuous learning mindset and a deep curiosity for how complex systems work under the hood. Skilled in developing REST APIs, integrating PostgreSQL databases and implementing vector search.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-900 text-white font-medium rounded-xl shadow-lg shadow-slate-200/50 hover:bg-slate-800 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            View Resume
          </a>
          <a href="#projects" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-900 text-white font-medium rounded-xl shadow-lg shadow-slate-200/50 hover:bg-slate-800 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            View Projects
          </a>
        </div>
        
      </div>
    </section>
  );
}
