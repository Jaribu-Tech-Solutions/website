export default function TechStack() {
  const stack = [
    'React',
    'Tailwind CSS',
    'Vite',
    'Node.js',
    'Figma',
    'TypeScript',
  ];

  return (
    <section id="tech-stack" className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white">Tech Stack</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          The tools we use to deliver polished apps, fast performance, and smooth user experiences.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-base text-slate-100">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
