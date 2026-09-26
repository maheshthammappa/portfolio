export default function Contact() {
  return (
    <section id="contact" className="min-h-screen w-full flex items-center justify-center py-20 overflow-hidden relative">
      <div className="w-full max-w-5xl mx-auto px-6">
        <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">Let's build something together.</h2>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed font-light">
            I'm always open to discussing new Java backend projects, AI integrations, or opportunities to be a part of your next big system.
          </p>
          
          <div className="flex flex-row flex-wrap justify-center gap-4">
            <a href="https://github.com/maheshthammappa" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-indigo-500/25" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            
            <a href="https://linkedin.com/in/maheshthammappa" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-indigo-500/25" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            
            <a href="https://x.com/maheshthammappa" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-indigo-500/25" aria-label="X (Twitter)">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
            </a>
            <a href="https://www.facebook.com/maheshthammappa/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-indigo-500/25" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="mailto:maheshthammappa@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-indigo-500/25" aria-label="Email">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
          </div>
        </div>
      </div>
      </div>

      <footer className="absolute bottom-0 w-full py-6 text-center border-t border-slate-200/50">
        <p className="text-slate-500 font-medium text-sm">© {new Date().getFullYear()} Mahesh Thammappa. Built with React & Tailwind CSS.</p>
      </footer>
    </section>
  );
}
