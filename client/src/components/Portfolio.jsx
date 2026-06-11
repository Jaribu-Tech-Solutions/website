export default function Portfolio() {
  const projects = [
    { name: 'Product Launch', summary: 'A polished launch site for a new digital product.' },
    { name: 'Agency Website', summary: 'A modern portfolio site with clear calls to action.' },
    { name: 'Dashboard App', summary: 'An internal tool with a clean, data-driven UI.' },
  ];

  return (
    <section id="portfolio" className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white">Portfolio</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          Example work to show how we create thoughtful digital experiences across projects.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.name} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              <p className="mt-3 text-slate-300">{project.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
