const STEPS = [
  {
    num: '01',
    badge: 'Step one',
    title: 'We talk',
    body: "You tell us what you need. We ask the right questions and give you a straight answer on what it'll cost and how long it takes. If we're a fit, we start. No discovery sprints, no proposals that take a week.",
  },
  {
    num: '02',
    badge: 'Step two',
    title: 'We build',
    body: "You see working software - not Figma frames. We check in when there's something to show, ask questions when we're stuck, and handle scope changes like adults when they come up.",
  },
  {
    num: '03',
    badge: 'Step three',
    title: 'You own it',
    body: 'Delivery, handoff, documentation. You get the code and the deployment. We offer a monthly retainer for hosting and support. Our reputation is the only thing we have, so we protect it.',
  },
]

export default function Process() {
  return (
    <section
      id="process"
      className="py-16 md:py-28"
      style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-[1160px] mx-auto px-5 md:px-14">
        <div className="flex items-center gap-2.5 mb-3.5">
          <span className="inline-block w-[18px] h-px" style={{ background: 'var(--text-dim)' }} />
          <span className="text-[11px] tracking-[0.14em] uppercase" style={{ color: 'var(--text-dim)' }}>02 · How we work</span>
        </div>
        <h2 className="font-display font-bold tracking-tight leading-[1.1] mb-4" style={{ fontSize: 'clamp(32px, 3.8vw, 52px)' }}>
          No theatrics.<br />Just how it goes.
        </h2>
        <p className="text-[15px] max-w-[480px] leading-[1.7] font-light" style={{ color: 'var(--text-muted)' }}>
          Three steps. You know what's happening at every stage. No surprises, no disappearing acts.
        </p>

        <div className="process-steps grid grid-cols-1 md:grid-cols-3 gap-0 mt-16">
          {STEPS.map(step => (
            <div key={step.num} className="pr-8 relative z-10 mb-9 md:mb-0">
              <div className="flex items-center gap-3.5 mb-6">
                <div
                  className="w-[46px] h-[46px] rounded-full flex items-center justify-center font-display font-semibold text-[12px] flex-shrink-0"
                  style={{ border: '1px solid var(--border-warm)', background: 'var(--bg)', color: 'var(--orange)' }}
                >
                  {step.num}
                </div>
                <span className="text-[10px] tracking-[0.1em] uppercase" style={{ color: 'var(--orange)' }}>{step.badge}</span>
              </div>
              <h3 className="font-display font-semibold text-[20px] tracking-tight mb-2.5">{step.title}</h3>
              <p className="text-[13px] leading-[1.75] font-light" style={{ color: 'var(--text-muted)' }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
