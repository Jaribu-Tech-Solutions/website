const MEMBERS = [
  {
    initials: 'IB',
    name: 'Isaac Bakari Juma',
    roles: ['Backend', 'Systems', 'Full-stack'],
    bio: 'Backend engineer and systems architect. Has built and shipped payment systems, marketplaces, and automation tools used by real businesses. If it touches money or data, he\'s the one building it.',
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/BakariJuma1' },
      { label: 'LinkedIn ↗', href: 'https://linkedin.com/in/bakari-juma1' },
    ],
  },
  {
    initials: 'MJ',
    name: 'Mati Joseph',
    roles: ['Product', 'Frontend', 'Full-stack'],
    bio: "Drives product decisions and frontend execution. Thinks in user flows and database schemas at the same time. Strong opinion: most software fails because nobody stopped to ask why it needs to exist. Asks that question before writing a single line.",
    links: [
      { label: 'GitHub ↗', href: '#' },
      { label: 'LinkedIn ↗', href: '#' },
    ],
  },
]

export default function Team() {
  return (
    <section
      id="team"
      className="py-28"
      style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-[1160px] mx-auto px-14 md:px-5">
        <div className="flex items-center gap-2.5 mb-3.5">
          <span className="inline-block w-[18px] h-px" style={{ background: 'var(--text-dim)' }} />
          <span className="text-[11px] tracking-[0.14em] uppercase" style={{ color: 'var(--text-dim)' }}>06 · Who we are</span>
        </div>
        <h2 className="font-display font-bold tracking-tight leading-[1.1] mb-4" style={{ fontSize: 'clamp(32px, 3.8vw, 52px)' }}>
          Small team.<br />Serious output.
        </h2>
        <p className="text-[15px] max-w-[480px] leading-[1.7] font-light" style={{ color: 'var(--text-muted)' }}>
          When you reach out, one of us picks up. You talk directly to the people building your product, start to finish.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
          {MEMBERS.map(m => (
            <div
              key={m.name}
              className="relative rounded-[14px] p-8 overflow-hidden transition-all duration-300"
              style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-warm)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div className="team-card-glow" />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-display text-[14px] font-bold mb-4"
                style={{ background: 'var(--orange-glow)', border: '1px solid var(--border-warm)', color: 'var(--orange)' }}
              >
                {m.initials}
              </div>
              <div className="font-display font-semibold text-[18px] tracking-tight mb-2">{m.name}</div>
              <div className="flex flex-wrap gap-1.5 mb-3.5">
                {m.roles.map(r => (
                  <span
                    key={r}
                    className="text-[10px] px-2 py-1 rounded tracking-[0.04em]"
                    style={{ background: 'var(--orange-glow)', color: 'var(--orange)', border: '1px solid var(--border-warm)' }}
                  >
                    {r}
                  </span>
                ))}
              </div>
              <p className="text-[13px] leading-[1.75] mb-5 font-light" style={{ color: 'var(--text-muted)' }}>{m.bio}</p>
              <div className="flex gap-2">
                {m.links.map(l => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-[11px] no-underline px-3 py-1.5 rounded transition-all duration-200"
                    style={{ color: 'var(--text-dim)', border: '1px solid var(--border)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-dim)'; e.currentTarget.style.borderColor = 'var(--border)' }}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
