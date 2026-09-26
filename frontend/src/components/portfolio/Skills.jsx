export default function Skills() {
  const allSkills = [
    "Java", "OOP", "Collections","Exception Handling", "Multithreading", "Generics", "Java 8 features",
    "HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS",
    "Spring Boot", "Spring MVC", "REST APIs", "Spring Data JPA", "Hibernate", "Spring Security","JWT Authentication",
    "SQL","MySQL","PostgreSQL","pgvector",  
    "Git", "GitHub", "Github Actions","Docker",
    "Maven", 
  ];

  // Split into two rows for visual variety
  const half = Math.ceil(allSkills.length / 2);
  const row1 = allSkills.slice(0, half);
  const row2 = allSkills.slice(half);

  // Duplicate arrays to create the seamless infinite scroll effect
  const marquee1 = [...row1, ...row1];
  const marquee2 = [...row2, ...row2];

  return (
    <section id="skills" className="min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-white border-y border-slate-100 py-20">
      <div className="w-full max-w-6xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">Technical Arsenal</h2>
        <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">The ecosystem I use to engineer robust, scalable software.</p>
      </div>
      
      {/* Container for the marquees */}
      <div className="relative w-full flex flex-col gap-8 my-10">
        
        {/* Row 1 - Moves Left */}
        <div className="flex w-max animate-marquee pause-on-hover gap-4 md:gap-6">
          {marquee1.map((skill, idx) => (
            <span 
              key={idx} 
              className="px-6 py-3 md:px-8 md:py-4 bg-slate-50 border border-slate-200 text-slate-800 rounded-full font-bold text-base md:text-xl shadow-sm whitespace-nowrap hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50 hover:shadow-lg hover:shadow-indigo-100/60 hover:-translate-y-1 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Row 2 - Moves Right (Reverse) */}
        <div className="flex w-max animate-marquee-reverse pause-on-hover gap-4 md:gap-6 ml-[-20%]">
          {marquee2.map((skill, idx) => (
            <span 
              key={idx} 
              className="px-6 py-3 md:px-8 md:py-4 bg-indigo-600 text-white border border-indigo-500 rounded-full font-bold text-base md:text-xl shadow-md whitespace-nowrap hover:bg-indigo-500 hover:-translate-y-1 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
