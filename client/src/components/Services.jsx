export default function Services() {
  const services = [
    { title: 'Web Design', description: 'Modern landing pages and product experiences that convert.' },
    { title: 'Custom Development', description: 'Frontend and backend solutions built to scale with your business.' },
    { title: 'Brand Strategy', description: 'Clear messaging, visual systems, and digital growth planning.' },
  ];

  return (
    <section id="services" className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white">Services</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          Placeholder descriptions show the kinds of services we offer to startups and businesses.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
