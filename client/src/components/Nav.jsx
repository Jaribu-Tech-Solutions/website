import { useState } from 'react'

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-5 md:px-14"
        style={{
          background: 'rgba(10,10,10,0.9)',
          backdropFilter: 'blur(24px)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <a href="#" className="font-display font-extrabold text-[15px] tracking-tight no-underline" style={{ color: 'var(--text)' }}>
          Jaribu Tech <span style={{ color: 'var(--orange)' }}>Solutions</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          <li><a href="#services" className="text-[13px] no-underline transition-colors duration-200 hover:text-white" style={{ color: 'var(--text-muted)' }}>Services</a></li>
          <li><a href="#portfolio" className="text-[13px] no-underline transition-colors duration-200 hover:text-white" style={{ color: 'var(--text-muted)' }}>Work</a></li>
          <li><a href="#pricing" className="text-[13px] no-underline transition-colors duration-200 hover:text-white" style={{ color: 'var(--text-muted)' }}>Pricing</a></li>
          <li><a href="#team" className="text-[13px] no-underline transition-colors duration-200 hover:text-white" style={{ color: 'var(--text-muted)' }}>Team</a></li>
          <li><a href="#contact" className="nav-cta text-[13px] no-underline">Talk to us →</a></li>
        </ul>

        {/* Mobile: hamburger only — no competing CTA */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileOpen(o => !o)}
            className="flex items-center justify-center w-9 h-9 rounded-md cursor-pointer"
            style={{ background: 'none', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Outside-click overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {mobileOpen && (
        <div
          className="fixed top-16 left-0 right-0 z-40 flex flex-col py-4 md:hidden"
          style={{ background: 'rgba(10,10,10,0.97)', borderBottom: '1px solid var(--border)' }}
        >
          {[['#services','Services'],['#portfolio','Work'],['#pricing','Pricing'],['#team','Team'],['#contact','Talk to us']].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="px-6 py-3 text-[14px] no-underline transition-colors hover:text-white"
              style={{ color: 'var(--text-muted)' }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
