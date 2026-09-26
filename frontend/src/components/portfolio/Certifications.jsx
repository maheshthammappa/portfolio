export default function Certifications() {
  return (
    <section id="certifications" className="min-h-screen w-full flex items-center justify-center py-20 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">Certifications</h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">Continuous learning and professional milestones.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <a href="/certifications/hackerrank-sql.pdf" target="_blank" rel="noopener noreferrer" className="block bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-purple-300 hover:shadow-lg hover:shadow-slate-200/80 hover:-translate-y-1 transition-all group cursor-pointer" title="View Certificate">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-slate-900 group-hover:text-purple-600 transition-colors">SQL (Intermediate)</h4>
                <p className="text-slate-500 text-sm mt-0.5">HackerRank</p>
              </div>
              <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-semibold rounded-full whitespace-nowrap ml-3">Aug 2026</span>
            </div>
          </a>
          <a href="/certifications/tcs-yuva-ai.pdf" target="_blank" rel="noopener noreferrer" className="block bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-purple-300 hover:shadow-lg hover:shadow-slate-200/80 hover:-translate-y-1 transition-all group cursor-pointer" title="View Certificate">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-slate-900 group-hover:text-purple-600 transition-colors">YUVA AI For All</h4>
                <p className="text-slate-500 text-sm mt-0.5">TCS iON & IndiaAI</p>
              </div>
              <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-semibold rounded-full whitespace-nowrap ml-3">Mar 2026</span>
            </div>
          </a>
          <a href="/certifications/hackerrank-rest-api.pdf" target="_blank" rel="noopener noreferrer" className="block bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-purple-300 hover:shadow-lg hover:shadow-slate-200/80 hover:-translate-y-1 transition-all group cursor-pointer" title="View Certificate">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-slate-900 group-hover:text-purple-600 transition-colors">Rest API (Intermediate)</h4>
                <p className="text-slate-500 text-sm mt-0.5">HackerRank</p>
              </div>
              <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-semibold rounded-full whitespace-nowrap ml-3">Aug 2026</span>
            </div>
          </a>
          <a href="/certifications/hackerrank-problem-solving.pdf" target="_blank" rel="noopener noreferrer" className="block bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-purple-300 hover:shadow-lg hover:shadow-slate-200/80 hover:-translate-y-1 transition-all group cursor-pointer" title="View Certificate">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-slate-900 group-hover:text-purple-600 transition-colors">Problem Solving (Basic)</h4>
                <p className="text-slate-500 text-sm mt-0.5">HackerRank</p>
              </div>
              <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-semibold rounded-full whitespace-nowrap ml-3">Mar 2026</span>
            </div>
          </a>
          <a href="/certifications/infosys-agile.pdf" target="_blank" rel="noopener noreferrer" className="block bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-lg hover:shadow-slate-200/80 hover:-translate-y-1 transition-all group cursor-pointer" title="View Certificate">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Software Engineering and Agile software development</h4>
                <p className="text-slate-500 text-sm mt-0.5">Infosys Springboard</p>
              </div>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full whitespace-nowrap ml-3">Mar 2026</span>
            </div>
          </a>
          <a href="/certifications/infosys-nosql.pdf" target="_blank" rel="noopener noreferrer" className="block bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-lg hover:shadow-slate-200/80 hover:-translate-y-1 transition-all group cursor-pointer" title="View Certificate">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Introduction to NoSQL databases</h4>
                <p className="text-slate-500 text-sm mt-0.5">Infosys Springboard</p>
              </div>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full whitespace-nowrap ml-3">Mar 2026</span>
            </div>
          </a>
          <a href="/certifications/infosys-python.pdf" target="_blank" rel="noopener noreferrer" className="block bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-lg hover:shadow-slate-200/80 hover:-translate-y-1 transition-all group cursor-pointer" title="View Certificate">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Basics of Python</h4>
                <p className="text-slate-500 text-sm mt-0.5">Infosys Springboard</p>
              </div>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full whitespace-nowrap ml-3">Mar 2026</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
