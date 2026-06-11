export default function HowWeWork() {
  const steps = [
    { title: 'Discover', detail: 'We learn your product, audience, and goals before creating a plan.' },
    { title: 'Design', detail: 'We shape interfaces, interactions, and visual identity with clarity.' },
    { title: 'Launch', detail: 'We ship a polished product and support its growth after release.' },
  ];

  return (
    <section id="how-we-work" className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white">How We Work</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          A simple process for turning ideas into production-ready digital products.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-lg font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-slate-300">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
