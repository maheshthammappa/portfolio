export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center py-20 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center md:text-left">About Me</h2>
          <div className="text-base md:text-lg text-slate-600 leading-relaxed text-center md:text-left space-y-4">
            <p>
              I am an MCA student focused on Java backend development. I thrive on building secure, scalable Spring Boot applications and integrating modern AI capabilities like vector search and RAG pipelines into traditional systems.
            </p>
            <p>
              My engineering philosophy centers around robust architecture. Whether it's designing REST APIs, implementing JWT authentication, or managing PostgreSQL databases, I believe in writing clean, efficient, and self-documenting code.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5-9-5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10v7a7 7 0 0014 0v-7" /></svg>
              Education
            </h3>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-slate-200 before:absolute before:w-3 before:h-3 before:bg-indigo-500 before:rounded-full before:-left-[7px] before:top-2">
                <h4 className="font-bold text-slate-900 text-lg leading-tight">Master of Computer Applications</h4>
                <p className="text-indigo-600 font-medium text-sm mt-1">University Post Graduate College (Osmania University), Secunderabad, Hyderabad</p>
                <p className="text-slate-500 text-sm mt-1">2024 – 2026</p>
              </div>

              <div className="relative pl-6 border-l-2 border-slate-200 before:absolute before:w-3 before:h-3 before:bg-indigo-400 before:rounded-full before:-left-[7px] before:top-2">
                <h4 className="font-bold text-slate-900 text-lg leading-tight">Bachelor of Science</h4>
                <p className="text-slate-600 text-sm mt-1">(Mathematics, Statistics & Computer Science)</p>
                <p className="text-indigo-600 font-medium text-sm mt-1">Nizam College, Hyderabad</p>
                <p className="text-slate-500 text-sm flex items-center gap-2 mt-1">2020 – 2023 <span className="w-1 h-1 rounded-full bg-slate-300"></span> CGPA: 8.14</p>
              </div>

              <div className="relative pl-6 border-l-2 border-slate-200 before:absolute before:w-3 before:h-3 before:bg-indigo-300 before:rounded-full before:-left-[7px] before:top-2">
                <h4 className="font-bold text-slate-900 text-lg leading-tight">Intermediate</h4>
                <p className="text-slate-600 text-sm mt-1">(Mathematics, Physics, Chemistry)</p>
                <p className="text-indigo-600 font-medium text-sm mt-1">TSWREI Society, Shaikpet, Hyderabad</p>
                <p className="text-slate-500 text-sm flex items-center gap-2 mt-1">2018 – 2020 <span className="w-1 h-1 rounded-full bg-slate-300"></span> 97%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
