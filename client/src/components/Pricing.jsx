const pricingPlans = [
  {
    title: 'STARTER KIT',
    price: 'KES 15,000 setup',
    subtitle: 'then KES 3,500/month hosting + support',
    bullets: ['M-Pesa STK push integration', 'Automated payment receipts', 'Basic admin panel', 'Single user account', 'Customer-facing portal', 'Reporting + analytics', 'Multi-user team access'],
    cta: 'Get started',
    featured: false,
  },
  {
    title: 'FULL SUITE',
    price: 'KES 35,000 setup',
    subtitle: 'then KES 6,000/month hosting + support',
    bullets: ['Everything in Starter', 'Customer-facing portal or app', 'Payment reminders + follow-ups', 'Reporting + revenue analytics', 'Multi-user access with roles', 'Priority support, fast response', 'Custom integrations or AI'],
    cta: 'Get started →',
    featured: true,
  },
  {
    title: 'CUSTOM BUILD',
    price: 'From KES 60K setup',
    subtitle: 'Monthly retainer agreed based on requirements',
    bullets: ['Everything in Full Suite', 'Custom integrations (ERP, CRM, API)', 'AI features and automation', 'Multi-platform (web + mobile)', 'Dedicated support + SLA', 'Source code ownership', 'Scoped to your requirements'],
    cta: 'Talk to us',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="sec-label"><span>05 · Pricing</span></div>
        <h2 className="section-h2">Transparent pricing.<br />No surprises.</h2>
        <p className="section-p">A one-time build fee plus a monthly retainer for hosting and support. You always know what you're paying and why.</p>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div key={plan.title} className={plan.featured ? 'pricing-card featured' : 'pricing-card'}>
              <div className="pricing-title">{plan.title}</div>
              <div className="pricing-price">{plan.price}</div>
              <div className="pricing-subtitle">{plan.subtitle}</div>
              <ul className="pricing-list">
                {plan.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <a href="#contact" className="pricing-cta">{plan.cta}</a>
            </div>
          ))}
        </div>

        <p className="pricing-note">All prices in KES · 50% deposit before build starts · Balance on delivery · Third-party costs (hosting, M-Pesa, APIs) billed separately</p>
      </div>
    </section>
  );
}
