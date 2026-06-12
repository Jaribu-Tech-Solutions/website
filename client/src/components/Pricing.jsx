function CheckIcon({ on }) {
  return (
    <div
      className="w-[14px] h-[14px] rounded-full flex items-center justify-center flex-shrink-0 mt-[1px]"
      style={{
        border: `1px solid ${on ? 'var(--border-warm)' : 'var(--border)'}`,
        background: on ? 'var(--orange-glow)' : 'transparent',
      }}
    >
      {on ? (
        <svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="2,5 4,7 8,3" />
        </svg>
      ) : (
        <svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke="var(--text-dim)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="3" x2="7" y2="7" /><line x1="7" y1="3" x2="3" y2="7" />
        </svg>
      )}
    </div>
  )
}

const PLANS = [
  {
    tier: 'Starter Kit',
    amount: 'KES 15,000',
    amountSuffix: 'setup',
    monthly: 'then KES 3,500/month hosting + support',
    badge: null,
    featured: false,
    features: [
      [true, 'M-Pesa STK push integration'],
      [true, 'Automated payment receipts'],
      [true, 'Basic admin panel'],
      [true, 'Single user account'],
      [false, 'Customer-facing portal'],
      [false, 'Reporting + analytics'],
      [false, 'Multi-user team access'],
    ],
    cta: 'Get started',
    ctaStyle: 'ghost',
  },
  {
    tier: 'Full Suite',
    amount: 'KES 35,000',
    amountSuffix: 'setup',
    monthly: 'then KES 6,000/month hosting + support',
    badge: 'Most popular',
    featured: true,
    features: [
      [true, 'Everything in Starter'],
      [true, 'Customer-facing portal or app'],
      [true, 'Payment reminders + follow-ups'],
      [true, 'Reporting + revenue analytics'],
      [true, 'Multi-user access with roles'],
      [true, 'Priority support, fast response'],
      [false, 'Custom integrations or AI'],
    ],
    cta: 'Get started →',
    ctaStyle: 'primary',
  },
  {
    tier: 'Custom Build',
    amount: 'From KES 60K',
    amountSuffix: 'setup',
    monthly: 'Monthly retainer agreed based on requirements',
    monthlyBold: true,
    badge: null,
    featured: false,
    features: [
      [true, 'Everything in Full Suite'],
      [true, 'Custom integrations (ERP, CRM, API)'],
      [true, 'AI features and automation'],
      [true, 'Multi-platform (web + mobile)'],
      [true, 'Dedicated support + SLA'],
      [true, 'Source code ownership'],
      [true, 'Scoped to your requirements'],
    ],
    cta: 'Talk to us',
    ctaStyle: 'ghost',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-28">
      <div className="max-w-[1160px] mx-auto px-5 md:px-14">
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="inline-block w-[18px] h-px" style={{ background: 'var(--text-dim)' }} />
            <span className="text-[11px] tracking-[0.14em] uppercase" style={{ color: 'var(--text-dim)' }}>05 · Pricing</span>
          </div>
          <h2 className="font-display font-bold tracking-tight leading-[1.1] mb-4" style={{ fontSize: 'clamp(32px, 3.8vw, 52px)' }}>
            Transparent pricing.<br />No surprises.
          </h2>
          <p className="text-[15px] max-w-[480px] leading-[1.7] font-light" style={{ color: 'var(--text-muted)' }}>
            A one-time build fee plus a monthly retainer for hosting and support. You always know what you're paying and why.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden"
          style={{ border: '1px solid var(--border)', background: 'var(--border)', gap: '1px' }}
        >
          {PLANS.map(plan => (
            <div
              key={plan.tier}
              className={`relative px-8 py-9 ${plan.featured ? 'price-card-featured' : ''} ${plan.featured ? 'order-first md:order-none' : ''}`}
              style={{ background: plan.featured ? 'var(--bg3)' : 'var(--bg)' }}
            >
              {plan.badge && (
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.08em] uppercase px-3.5 py-0.5 rounded-b-lg text-white font-medium whitespace-nowrap"
                  style={{ background: 'var(--orange)' }}
                >
                  {plan.badge}
                </div>
              )}

              <div
                className="text-[11px] tracking-[0.12em] uppercase mb-3.5"
                style={{ color: plan.featured ? 'var(--orange)' : 'var(--text-dim)' }}
              >
                {plan.tier}
              </div>
              <div className="font-display font-bold text-[32px] tracking-tight mb-1">
                {plan.amount}{' '}
                <span className="text-[13px] font-normal font-body" style={{ color: 'var(--text-muted)' }}>{plan.amountSuffix}</span>
              </div>
              <div className="text-[12px] mb-6 font-light" style={{ color: 'var(--text-muted)' }}>
                {plan.monthlyBold
                  ? <><strong style={{ color: 'var(--text)', fontWeight: 500 }}>{plan.monthly.split(' based')[0]}</strong>{' based' + plan.monthly.split(' based')[1]}</>
                  : plan.monthly
                }
              </div>

              <div className="h-px mb-5" style={{ background: 'var(--border)' }} />

              <div className="flex flex-col gap-2.5 mb-7">
                {plan.features.map(([on, label]) => (
                  <div key={label} className="flex items-start gap-2.5">
                    <CheckIcon on={on} />
                    <span className="text-[12px] font-light leading-snug" style={{ color: on ? 'var(--text-muted)' : 'var(--text-dim)' }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="block w-full py-[11px] rounded-lg text-[13px] font-medium text-center no-underline transition-all duration-200"
                style={plan.ctaStyle === 'primary'
                  ? { background: 'var(--orange)', border: 'none', color: '#fff' }
                  : { background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-muted)' }
                }
                onMouseEnter={e => {
                  if (plan.ctaStyle === 'primary') { e.currentTarget.style.background = 'var(--orange-dim)' }
                  else { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'var(--text)' }
                }}
                onMouseLeave={e => {
                  if (plan.ctaStyle === 'primary') { e.currentTarget.style.background = 'var(--orange)' }
                  else { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center mt-5 text-[12px]" style={{ color: 'var(--text-dim)' }}>
          All prices in KES · 50% deposit before build starts · Balance on delivery · Third-party costs (hosting, M-Pesa, APIs) billed separately
        </p>
      </div>
    </section>
  )
}
