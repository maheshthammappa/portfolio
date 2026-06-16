import { useState } from "react";

const docs = [
  {
    title: "Spring Boot Setup in VS Code",
    content: `
1) Check whether the java, VS Code installed or not

2) Go to VS Code, Install the extensions
   I) Java package
   II) Spring Boot package

3) Open command palette (Ctrl + Shift + P),
   search spring initializer maven

4) Select version latest without snapshot,
   select language,
   group id (me.maheshthammappa),
   artifact id (project name),
   input package name (config),
   select jar,
   select java version (prefer 21 lts),
   add dependencies
   (spring web and lombok used for annotations)
`
  },

  {
    title: "React Setup in VS Code",
    content: `
1) Create a project folder

2) In terminal
    npm create vite@latest
    and click yes

3) Select
    project name : .
    framework : react
    variant : javascript
    install and start : yes

4) There you can open
    http://localhost:5173
`
  }
];

const Docs = () => {
  const [selected, setSelected] = useState(docs[0]);

  return (
    <div className="flex min-h-[80vh]">
      <aside className="w-72 border-r border-slate-800 p-4">
        <h2 className="text-2xl font-bold mb-6">
          Documentation
        </h2>

        {docs.map((doc) => (
          <button
            key={doc.title}
            onClick={() => setSelected(doc)}
            className="block w-full text-left p-3 rounded-lg hover:bg-slate-800 hover:text-white mb-2"
          >
            {doc.title}
          </button>
        ))}
      </aside>

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">
          {selected.title}
        </h1>

        <pre className="whitespace-pre-wrap text-black leading-8">
          {selected.content}
        </pre>
      </main>
    </div>
  );
};

export default Docs;