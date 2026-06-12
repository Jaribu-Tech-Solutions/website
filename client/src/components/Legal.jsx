function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="font-display font-bold text-[20px] tracking-tight mb-4" style={{ color: 'var(--text)' }}>{title}</h2>
      <div className="flex flex-col gap-3 text-[14px] leading-[1.8] font-light" style={{ color: 'var(--text-muted)' }}>
        {children}
      </div>
    </div>
  )
}

function Sub({ title, children }) {
  return (
    <div className="mt-1">
      <span className="font-medium" style={{ color: 'var(--text)' }}>{title} </span>
      {children}
    </div>
  )
}

const EFFECTIVE = 'June 2026'

export default function Legal() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {/* Nav bar — minimal */}
      <div
        className="sticky top-0 z-50 flex items-center justify-between px-5 md:px-14"
        style={{ height: '64px', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}
      >
        <a href="/" className="font-display font-extrabold text-[15px] tracking-tight no-underline" style={{ color: 'var(--text)' }}>
          Jaribu Tech <span style={{ color: 'var(--orange)' }}>Solutions</span>
        </a>
        <a
          href="/"
          className="btn-ghost-white text-[12px] no-underline px-4 py-2 rounded-lg"
        >
          ← Back to site
        </a>
      </div>

      <div className="max-w-[760px] mx-auto px-5 md:px-8 py-14 md:py-20">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="inline-block w-5 h-[2px]" style={{ background: 'var(--text-muted)' }} />
            <span className="text-[11px] tracking-[0.14em] uppercase font-semibold" style={{ color: 'var(--text-muted)' }}>Legal</span>
          </div>
          <h1 className="font-display font-extrabold tracking-tight leading-[1.1] mb-4" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--text)' }}>
            Privacy Policy &amp;<br />Terms of Service
          </h1>
          <p className="text-[13px]" style={{ color: 'var(--text-dim)' }}>
            Effective date: {EFFECTIVE} · Jaribu Tech Solutions · Nairobi, Kenya ·{' '}
            <a href="mailto:hello@jaributechsolutions.co.ke" className="no-underline" style={{ color: 'var(--orange)' }}>
              hello@jaributechsolutions.co.ke
            </a>
          </p>
        </div>

        {/* Divider */}
        <div className="h-px mb-14" style={{ background: 'var(--border)' }} />

        {/* ── PRIVACY POLICY ── */}
        <div className="mb-14">
          <div
            className="inline-block text-[10px] tracking-[0.12em] uppercase px-3 py-1 rounded mb-6"
            style={{ background: 'var(--orange-glow)', border: '1px solid var(--border-warm)', color: 'var(--orange)' }}
          >
            Privacy Policy
          </div>

          <Section title="1. Who we are">
            <p>
              Jaribu Tech Solutions ("we", "us", "our") is a software development business based in Nairobi, Kenya.
              We build custom web applications, payment integrations, and workflow automation systems.
              This privacy policy explains what personal data we collect, why we collect it, and how we handle it
              in line with Kenya's <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Data Protection Act, 2019</strong>.
            </p>
          </Section>

          <Section title="2. Data we collect">
            <p>We only collect data you voluntarily provide through our contact form:</p>
            <ul className="list-none flex flex-col gap-1.5 mt-1">
              {[
                ['Full name', 'to address you properly in our reply'],
                ['Email address', 'to respond to your enquiry'],
                ['Phone number (optional)', 'so we can follow up via call or WhatsApp if you provide it'],
                ['Budget range (optional)', 'to give you a relevant scoped response'],
                ['Project description', 'to understand what you need help building'],
              ].map(([field, why]) => (
                <li key={field} className="flex items-start gap-2">
                  <span style={{ color: 'var(--orange)', flexShrink: 0 }}>→</span>
                  <span><strong style={{ color: 'var(--text)', fontWeight: 500 }}>{field}</strong> — {why}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2">We do not collect payment data, passwords, government IDs, or sensitive personal data.</p>
          </Section>

          <Section title="3. How we use your data">
            <p>Your data is used only to:</p>
            <ul className="list-none flex flex-col gap-1 mt-1">
              {['Respond to your project enquiry', 'Provide a quote, scope estimate, or timeline', 'Follow up if you indicated a preferred contact method'].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: 'var(--orange)', flexShrink: 0 }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2">We do not use your data for marketing, profiling, or automated decision-making. We will never sell, rent, or share your data with third parties for commercial purposes.</p>
          </Section>

          <Section title="4. How your data is stored">
            <p>
              Form submissions are processed through <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Web3Forms</strong> (web3forms.com),
              a third-party form API, and delivered directly to our email inbox.
              We do not store form submissions in any database or server we operate.
              Your data lives in our email inbox and is subject to our email provider's security standards.
            </p>
            <p>
              Our website is hosted on <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Vercel</strong> (vercel.com),
              which may collect anonymous usage analytics (page views, performance metrics).
              Vercel's privacy policy governs that data. We also use Vercel Speed Insights and Analytics
              for site performance monitoring — no personally identifiable information is collected through these tools.
            </p>
          </Section>

          <Section title="5. How long we keep your data">
            <p>
              We retain enquiry emails for up to <strong style={{ color: 'var(--text)', fontWeight: 500 }}>12 months</strong>.
              If we engage in a paid project together, project-related communications may be retained for up to 3 years
              for business record purposes.
              You can request deletion at any time (see section 7).
            </p>
          </Section>

          <Section title="6. Your rights under the Kenya Data Protection Act, 2019">
            <p>You have the right to:</p>
            <ul className="list-none flex flex-col gap-1 mt-1">
              {[
                'Access the personal data we hold about you',
                'Request correction of inaccurate data',
                'Request deletion of your data',
                'Object to how we process your data',
                'Lodge a complaint with the Office of the Data Protection Commissioner (ODPC) of Kenya',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: 'var(--orange)', flexShrink: 0 }}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="7. Contact for data requests">
            <p>
              To exercise any of the above rights, email us at{' '}
              <a href="mailto:hello@jaributechsolutions.co.ke" className="no-underline font-medium" style={{ color: 'var(--orange)' }}>
                hello@jaributechsolutions.co.ke
              </a>{' '}
              with the subject line <em>"Data Request"</em>. We will respond within 21 days.
            </p>
          </Section>
        </div>

        {/* Divider */}
        <div className="h-px mb-14" style={{ background: 'var(--border)' }} />

        {/* ── TERMS OF SERVICE ── */}
        <div>
          <div
            className="inline-block text-[10px] tracking-[0.12em] uppercase px-3 py-1 rounded mb-6"
            style={{ background: 'var(--orange-glow)', border: '1px solid var(--border-warm)', color: 'var(--orange)' }}
          >
            Terms of Service
          </div>

          <Section title="1. Agreement">
            <p>
              By engaging Jaribu Tech Solutions to build software for you, you agree to these terms.
              They apply to all projects, whether quoted verbally, by email, or through our contact form.
              A signed proposal or payment of the deposit constitutes acceptance.
            </p>
          </Section>

          <Section title="2. Scope of work">
            <p>
              All projects are scoped before work begins. The scope is defined in our written proposal or
              project brief and covers features, deliverables, and estimated timelines.
            </p>
            <Sub title="Changes to scope:">
              Any feature not in the agreed scope is a change request and will be quoted separately.
              Requests that significantly expand scope may require a new proposal and revised timeline.
            </Sub>
            <Sub title="Your responsibilities:">
              You are responsible for providing timely feedback, content (text, images, brand assets), and
              access to third-party accounts (e.g. M-Pesa Daraja, hosting) as needed.
              Delays caused by missing client input may push delivery timelines.
            </Sub>
          </Section>

          <Section title="3. Payment terms">
            <p>
              <strong style={{ color: 'var(--text)', fontWeight: 500 }}>50% deposit</strong> is required before
              development begins. The remaining <strong style={{ color: 'var(--text)', fontWeight: 500 }}>50% is due on delivery</strong>{' '}
              before the project is handed over or deployed to production.
            </p>
            <Sub title="Third-party costs:">
              Costs for hosting, domain registration, M-Pesa API fees, SMS gateways, payment processor fees,
              and any other third-party services are not included in our build fee and are billed separately or
              set up directly under your account.
            </Sub>
            <Sub title="Late payment:">
              Projects on hold due to unpaid balances for more than 14 days may be paused until payment is received.
            </Sub>
          </Section>

          <Section title="4. Delivery and handover">
            <p>
              Delivery timelines are estimates based on agreed scope and your responsiveness.
              On final payment, we hand over the deployed project and, where applicable, source code access.
            </p>
            <Sub title="Post-launch support:">
              All projects include a <strong style={{ color: 'var(--text)', fontWeight: 500 }}>14-day bug-fix period</strong> after
              delivery at no extra charge. Bugs are issues where the delivered software does not behave as specified.
              New features or design changes during this period are out of scope.
            </Sub>
          </Section>

          <Section title="5. Intellectual property">
            <p>
              On receipt of full payment, you own the final deliverable — the code written specifically for your project.
              We retain the right to showcase the project in our portfolio unless you request confidentiality in writing before the project begins.
            </p>
            <Sub title="Third-party tools:">
              Open-source libraries, frameworks, and third-party APIs used in your project remain subject to
              their own licenses. Ownership of those components is governed by those licenses, not these terms.
            </Sub>
          </Section>

          <Section title="6. Limitation of liability">
            <p>
              We are not liable for losses arising from third-party service failures (e.g. M-Pesa downtime,
              hosting outages, payment processor errors), your failure to provide timely input,
              or use of the delivered software in ways outside the agreed scope.
              Our total liability in any dispute is limited to the amount you paid us for that project.
            </p>
          </Section>

          <Section title="7. Termination">
            <p>
              Either party may terminate a project engagement by giving written notice by email.
              Work completed up to the date of termination is billable. The deposit is non-refundable
              once development has started.
            </p>
          </Section>

          <Section title="8. Governing law">
            <p>
              These terms are governed by the laws of Kenya. Any dispute that cannot be resolved
              by mutual agreement will be submitted to the jurisdiction of the courts of Kenya.
            </p>
          </Section>
        </div>

        {/* Footer */}
        <div className="mt-14 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="text-[12px]" style={{ color: 'var(--text-dim)' }}>
            © 2026 Jaribu Tech Solutions · Nairobi, Kenya
          </div>
          <a
            href="mailto:hello@jaributechsolutions.co.ke"
            className="text-[12px] no-underline"
            style={{ color: 'var(--orange)' }}
          >
            hello@jaributechsolutions.co.ke
          </a>
        </div>
      </div>
    </div>
  )
}
