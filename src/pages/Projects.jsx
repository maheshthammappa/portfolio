const projects = [
  {
    title: "Weather App",
    description:
      "Real-time weather updates using OpenWeather API.",
    tech: "React, API Integration",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects and skills.",
    tech: "React, TailwindCSS",
  },
];

const Projects = () => {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-8 text-center mt-10">
        Projects
      </h1>

      <div className=" ">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-slate-900 p-6 rounded-xl border border-slate-800 mt-5 mx-100"
          >
            <h2 className="text-xl font-semibold mb-3 text-white">
              {project.title}
            </h2>

            <p className="text-slate-400 mb-4">
              {project.description}
            </p>

            <span className="text-cyan-400">
              {project.tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;