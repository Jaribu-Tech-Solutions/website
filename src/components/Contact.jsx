import { useState } from 'react'

const phoneIcon = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.27 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.75a16 16 0 0 0 6 6l1.06-.06a2 2 0 0 1 2.11.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)
const mailIcon = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)
const clockIcon = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
)

function ContactCard({ icon, type, title, value, sub, cta, ctaPrimary }) {
  return (
    <div
      className="rounded-[14px] p-7 transition-all duration-300"
      style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-warm)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      <div
        className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-4"
        style={{ background: 'var(--orange-glow)', border: '1px solid var(--border-warm)' }}
      >
        {icon}
      </div>
      <div className="text-[10px] tracking-[0.1em] uppercase mb-1" style={{ color: 'var(--orange)' }}>{type}</div>
      <h4 className="font-display font-semibold text-[16px] tracking-tight mb-3">{title}</h4>
      <div className="font-display font-medium text-[15px] mb-1">{value}</div>
      <div className="text-[12px] mb-4 font-light" style={{ color: 'var(--text-muted)' }}>{sub}</div>
      {cta && (
        <a
          href={cta.href}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-[12px] no-underline transition-all duration-200"
          style={ctaPrimary
            ? { background: 'var(--orange)', border: '1px solid var(--orange)', color: '#fff' }
            : { background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-muted)' }
          }
          onMouseEnter={e => {
            if (ctaPrimary) { e.currentTarget.style.background = 'var(--orange-dim)' }
            else { e.currentTarget.style.borderColor = 'var(--border-warm)'; e.currentTarget.style.color = 'var(--orange)' }
          }}
          onMouseLeave={e => {
            if (ctaPrimary) { e.currentTarget.style.background = 'var(--orange)' }
            else { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }
          }}
        >
          {cta.label}
        </a>
      )}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', package: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-28">
      <div className="max-w-[1160px] mx-auto px-14 md:px-5">
        <div className="flex items-center gap-2.5 mb-3.5">
          <span className="inline-block w-[18px] h-px" style={{ background: 'var(--text-dim)' }} />
          <span className="text-[11px] tracking-[0.14em] uppercase" style={{ color: 'var(--text-dim)' }}>07 · Get in touch</span>
        </div>
        <h2 className="font-display font-bold tracking-tight leading-[1.1] mb-4" style={{ fontSize: 'clamp(32px, 3.8vw, 52px)' }}>
          Have something<br />to build?
        </h2>
        <p className="text-[15px] max-w-[480px] leading-[1.7] font-light mb-12" style={{ color: 'var(--text-muted)' }}>
          Tell us what you need. We'll give you a straight answer on scope, cost, and timeline - no sales call required.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          <ContactCard
            icon={phoneIcon}
            type="Direct line"
            title="Call or WhatsApp"
            value="+254 705 493 891"
            sub="Call or drop a WhatsApp - we pick up."
            cta={{ href: 'https://wa.me/254705493891', label: 'Chat on WhatsApp →' }}
            ctaPrimary
          />
          <ContactCard
            icon={mailIcon}
            type="Email directly"
            title="Send us a message"
            value="hello@jaributechsolutions.co.ke"
            sub="We reply within a few hours."
            cta={{ href: 'mailto:hello@jaributechsolutions.co.ke', label: 'Send email →' }}
          />
          <ContactCard
            icon={clockIcon}
            type="Availability"
            title="Response time"
            value="Under 4 hours"
            sub={<><span className="inline-block w-[7px] h-[7px] rounded-full mr-1.5" style={{ background: '#3a9e5f' }} />Mon – Sat, 8am – 9pm (GMT+3)</>}
          />
        </div>

        {/* Form */}
        <div className="rounded-2xl p-10 md:p-6" style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
          <div className="mb-7">
            <h3 className="font-display font-semibold text-[22px] tracking-tight mb-1.5">Send us a brief</h3>
            <p className="text-[13px] font-light" style={{ color: 'var(--text-muted)' }}>
              Fill in what you're building and we'll come back with an honest answer - scope, cost, and timeline.
            </p>
          </div>

          {sent ? (
            <div className="py-10 text-center">
              <div className="text-[32px] mb-3">✅</div>
              <div className="font-display font-semibold text-[18px] mb-2">Brief received!</div>
              <p className="text-[14px] font-light" style={{ color: 'var(--text-muted)' }}>We'll reply within a few hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="flex flex-col gap-[7px]">
                  <label className="text-[10px] tracking-[0.1em] uppercase" style={{ color: 'var(--text-dim)' }}>Your name</label>
                  <input
                    type="text"
                    placeholder="Jane Wanjiku"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                    className="form-input px-3.5 py-[11px] rounded-lg text-[13px] font-light"
                    style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--text)' }}
                  />
                </div>
                <div className="flex flex-col gap-[7px]">
                  <label className="text-[10px] tracking-[0.1em] uppercase" style={{ color: 'var(--text-dim)' }}>Email</label>
                  <input
                    type="email"
                    placeholder="jane@company.co.ke"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    required
                    className="form-input px-3.5 py-[11px] rounded-lg text-[13px] font-light"
                    style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--text)' }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="flex flex-col gap-[7px]">
                  <label className="text-[10px] tracking-[0.1em] uppercase" style={{ color: 'var(--text-dim)' }}>Phone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="+254 7xx xxx xxx"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="form-input px-3.5 py-[11px] rounded-lg text-[13px] font-light"
                    style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--text)' }}
                  />
                </div>
                <div className="flex flex-col gap-[7px]">
                  <label className="text-[10px] tracking-[0.1em] uppercase" style={{ color: 'var(--text-dim)' }}>Package interest</label>
                  <select
                    value={form.package}
                    onChange={e => setForm(f => ({ ...f, package: e.target.value }))}
                    className="form-input px-3.5 py-[11px] rounded-lg text-[13px] font-light"
                    style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: form.package ? 'var(--text)' : 'var(--text-dim)' }}
                  >
                    <option value="" disabled>Not sure yet - help me decide</option>
                    <option>Starter Kit - KES 15,000</option>
                    <option>Full Suite - KES 35,000</option>
                    <option>Custom Build - From KES 60,000</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-[7px]">
                <label className="text-[10px] tracking-[0.1em] uppercase" style={{ color: 'var(--text-dim)' }}>What are you building?</label>
                <textarea
                  placeholder="Describe what you need - rough is fine. The more detail, the faster we can give you a real answer on scope and cost."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  required
                  rows={4}
                  className="form-input px-3.5 py-[11px] rounded-lg text-[13px] font-light resize-none"
                  style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--text)', minHeight: '100px' }}
                />
              </div>
              <div className="flex items-center justify-between pt-1 flex-wrap gap-4">
                <span className="text-[11px]" style={{ color: 'var(--text-dim)' }}>We reply fast - usually within a few hours. No spam, ever.</span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white cursor-pointer transition-all duration-200 font-body"
                  style={{ background: 'var(--orange)', border: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--orange-dim)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--orange)'}
                >
                  Send brief →
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
