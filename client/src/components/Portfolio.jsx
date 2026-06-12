const PROJECTS = [
  {
    preview: (
      <img
        src="/radamjaribu-builders.png"
        alt="Radamjaribu Builders website screenshot"
        className="w-full h-full object-cover object-top rounded"
        style={{ maxHeight: '190px' }}
      />
    ),
    cat: 'Construction · Real Estate',
    name: 'Radamjaribu Builders',
    desc: 'Full business website for a Nairobi-based construction firm. Services showcase, project gallery with real site photos, quote request flow, and a client-facing dashboard. All built to win trust before the first call.',
    stack: ['Business Website', 'Project Gallery', 'Quote Flow', 'Client Dashboard'],
    link: 'https://www.radamjaribubuilders.co.ke/',
  },
  {
    preview: (
      <img
        src="/barajubeats.png"
        alt="Barajubeats beat marketplace screenshot"
        className="w-full h-full object-cover object-top rounded"
        style={{ maxHeight: '190px' }}
      />
    ),
    cat: 'E-commerce · Music',
    name: 'Barajubeats',
    desc: 'A beat-selling marketplace for music producers and artists. Producers upload and license beats, artists browse and buy instantly. Secure file delivery on purchase, automated licensing, real revenue flowing through the platform.',
    stack: ['Web App', 'Paystack + PayPal', 'Secure File Delivery'],
    link: 'https://barajubeats.com',
  },
  {
    preview: (
      <img
        src="/pesalens.png"
        alt="PesaLens M-Pesa statement analyser screenshot"
        className="w-full h-full object-cover object-top rounded"
        style={{ maxHeight: '190px' }}
      />
    ),
    cat: 'Fintech · AI Analytics',
    name: 'PesaLens',
    desc: 'Upload your M-Pesa statement and get instant AI-powered insights: spending breakdowns, visual charts, and plain English advice. No account needed, fully private, works on any device.',
    stack: ['Web App', 'AI Analysis', 'PDF Processing', 'M-Pesa Statements'],
    link: 'https://pesalens-rust.vercel.app/',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-28">
      <div className="max-w-[1160px] mx-auto px-5 md:px-14">
        <div data-reveal>
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="inline-block w-5 h-[2px]" style={{ background: 'var(--text-muted)' }} />
            <span className="text-[11px] tracking-[0.14em] uppercase font-semibold" style={{ color: 'var(--text-muted)' }}>03 · Our work</span>
          </div>
          <h2 className="font-display font-extrabold tracking-tight leading-[1.1] mb-4" style={{ fontSize: 'clamp(32px, 3.8vw, 52px)' }}>
            Built and shipped.
          </h2>
          <p className="text-[15px] max-w-[480px] leading-[1.7] font-light" style={{ color: 'var(--text-muted)' }}>
            Production systems with real users and real transactions. Not mock-ups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {PROJECTS.map((p, i) => (
            <div
              key={p.name}
              data-reveal data-delay={String(i + 1)}
              className="rounded-[14px] overflow-hidden transition-all duration-300"
              style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-warm)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div
                className="h-[200px] flex items-center justify-center p-5 overflow-hidden"
                style={{ background: 'var(--bg3)', borderBottom: '1px solid var(--border)' }}
              >
                {p.preview}
              </div>
              <div className="p-6">
                <div className="text-[10px] tracking-[0.1em] uppercase mb-1.5" style={{ color: 'var(--orange)' }}>{p.cat}</div>
                <div className="font-display font-semibold text-[17px] tracking-tight mb-2">{p.name}</div>
                <p className="text-[13px] leading-[1.7] mb-3.5 font-light" style={{ color: 'var(--text-muted)' }}>{p.desc}</p>
                <div className="flex flex-wrap items-center gap-1.5 py-2.5 mb-4" style={{ borderTop: '1px solid var(--border)' }}>
                  <span className="text-[10px] tracking-[0.08em] uppercase mr-1" style={{ color: 'var(--text-dim)' }}>Built with</span>
                  {p.stack.map((item, i) => (
                    <span key={item}>
                      <span className="text-[12px] font-light" style={{ color: 'var(--text-muted)' }}>{item}</span>
                      {i < p.stack.length - 1 && <span className="text-[10px] ml-1.5" style={{ color: 'var(--text-dim)' }}>·</span>}
                    </span>
                  ))}
                </div>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-[12px] font-medium no-underline inline-flex items-center gap-1" style={{ color: 'var(--orange)' }}>
                  View live project ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4" data-reveal>
          <div
            className="rounded-[14px] p-6 flex items-center gap-4"
            style={{ background: 'var(--bg2)', border: '1px dashed var(--border)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-dim)', flexShrink: 0 }}>
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
            </svg>
            <div>
              <span className="text-[14px] font-medium block mb-1" style={{ color: 'var(--text-muted)' }}>More projects shipping soon</span>
              <p className="text-[12px] font-light" style={{ color: 'var(--text-dim)' }}>
                We're adding work to this section as we go.{' '}
                <a href="#contact" className="no-underline" style={{ color: 'var(--orange)' }}>Reach out to see more.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
