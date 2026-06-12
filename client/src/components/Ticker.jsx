const ITEMS = [
  { icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />, label: 'React' },
  { icon: <><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></>, label: 'Flask' },
  { icon: <><ellipse cx="12" cy="12" rx="10" ry="4"/><path d="M2 12c0 2.21 4.477 4 10 4s10-1.79 10-4"/><path d="M2 8v8c0 2.21 4.477 4 10 4s10-1.79 10-4V8"/></>, label: 'PostgreSQL' },
  { icon: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>, label: 'TypeScript' },
  { icon: <><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>, label: 'Node.js' },
  { icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />, label: 'Docker' },
  { icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77" />, label: 'GitHub Actions' },
  { icon: <><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></>, label: 'M-Pesa Daraja', badge: 'API' },
  { icon: <><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></>, label: 'Paystack' },
  { icon: <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>, label: 'WhatsApp API' },
  { icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />, label: 'Tailwind CSS' },
  { icon: <><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></>, label: 'Python' },
  { icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />, label: 'Redis' },
  { icon: <rect x="2" y="3" width="20" height="14" rx="2" />, label: 'Linux VPS' },
  { icon: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />, label: 'Backblaze B2' },
]

function TickerItem({ icon, label, badge }) {
  return (
    <div
      className="inline-flex items-center gap-2 px-5 py-1.5 text-[12px] font-light whitespace-nowrap"
      style={{ color: 'var(--text-muted)', borderRight: '1px solid var(--border)' }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6, flexShrink: 0 }}>
        {icon}
      </svg>
      {label}
      {badge && <span className="text-[10px] ml-0.5" style={{ color: 'var(--orange)' }}>{badge}</span>}
    </div>
  )
}

function TickerRow({ reverse }) {
  return (
    <div className="flex overflow-hidden py-3.5" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className={`flex gap-0 whitespace-nowrap ${reverse ? 'animate-ticker-rev' : 'animate-ticker'}`}>
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <TickerItem key={i} {...item} />
        ))}
      </div>
    </div>
  )
}

export default function Ticker() {
  return (
    <div
      className="overflow-hidden"
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg2)',
      }}
    >
      <div className="px-5 md:px-14 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
        <span className="text-[10px] tracking-[0.14em] uppercase" style={{ color: 'var(--text-dim)' }}>
          Technology stack
        </span>
      </div>
      <TickerRow />
      <TickerRow reverse />
    </div>
  )
}
