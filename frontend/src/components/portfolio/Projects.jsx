export default function Projects() {
  const projects = [
    {
      name: "PREPMATE",
      role: "AI Interview Platform",
      description: "An AI-powered interview platform generating dynamic technical interviews using Gemini. Features semantic question deduplication with Pinecone and a mastery-based spaced-repetition workflow to seamlessly target and improve weak concepts.",
      tags: ["Spring Boot", "React", "Pinecone", "Gemini", "PostgreSQL", "Docker"],
      github: "https://github.com/maheshthammappa/prepmate",
      live: "https://mahesh-prepmate.onrender.com/",
      image: "/images/prepmate.png"
    },
    {
      name: "MEMORA",
      role: "RAG Memory Journal",
      description: "A personal memory platform utilizing RAG and pgvector for natural language search across past experiences. Includes AI-generated weekly reflections and a tamper-resistant chronological journal locking mechanism.",
      tags: ["React", "Spring Boot", "pgvector", "JWT", "Docker/CI/CD"],
      github: "https://github.com/maheshthammappa/memora",
      live: "https://mahesh-memora.onrender.com/",
      image: "/images/memora.png"
    },
    {
      name: "WeatherNow",
      role: "Real-time Tracker",
      description: "A responsive weather application providing real-time meteorological data and temperature forecasts via a public API. Features a clean, intuitive interface built with modern web technologies.",
      tags: ["React", "Weather API", "CSS"],
      github: "https://github.com/maheshthammappa/weathernow",
      live: "https://maheshthammappa.github.io/weathernow/",
      image: "/images/weathernow.jpg"
    },
    {
      name: "Developer Portfolio",
      role: "Full-Stack Application",
      description: "A premium personal portfolio with a hidden, authenticated admin dashboard for managing technical notes. Built with a modular React architecture, scroll-spy navigation, and a secure Node backend.",
      tags: ["React", "Tailwind CSS", "Node.js"],
      github: "https://github.com/maheshthammappa/portfolio",
      live: "https://maheshthammappa.me/",
      image: "/images/portfolio.png"
    }
  ];

  return (
    <section id="projects" className="min-h-screen w-full flex items-center justify-center py-20 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">Selected Work</h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">AI-powered systems and backend architectures I've built.</p>
        </div>
        
        <div className="flex flex-col gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group flex flex-col md:flex-row bg-white rounded-3xl border border-slate-200 shadow-lg shadow-slate-200/40 overflow-hidden hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-200/50 transition-all duration-300">
              
              {project.image && (
                <div className="md:w-2/5 shrink-0 bg-slate-900 border-b md:border-b-0 md:border-r border-slate-200 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                  />
                </div>
              )}
              
              <div className={`p-6 md:p-10 flex flex-col justify-between ${project.image ? 'md:w-3/5' : 'w-full'}`}>
                <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{project.name}</h3>
                    <p className="text-indigo-500 font-medium text-sm mt-1">{project.role}</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 -ml-3 sm:-ml-0 rounded-lg text-slate-600 font-medium text-sm hover:bg-slate-50 hover:text-indigo-600 transition-all" title="View Source">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      GitHub Repo
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-600 font-medium text-sm hover:bg-slate-50 hover:text-indigo-600 transition-all" title="Live Demo">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-50 text-slate-700 text-xs font-semibold rounded-md tracking-wide border border-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
