export default function Pricing() {
  const plans = [
    { name: 'Starter', price: '$950', features: ['Landing page', 'Responsive design', 'Basic analytics'] },
    { name: 'Growth', price: '$2,400', features: ['Custom site', 'CMS integration', 'Conversion tracking'] },
    { name: 'Enterprise', price: 'Custom', features: ['Full-stack app', 'API integrations', 'Ongoing support'] },
  ];

  return (
    <section id="pricing" className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white">Pricing</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          Placeholder pricing gives a sense of how packages could be organized for clients.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-4 text-4xl font-bold text-white">{plan.price}</p>
              <ul className="mt-6 space-y-3 text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
