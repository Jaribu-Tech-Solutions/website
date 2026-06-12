import { useState } from 'react'

const FAQS = [
  {
    q: 'How long does a project take?',
    a: 'It depends on scope. A business website takes 1–2 weeks. A full web app with M-Pesa, an admin panel, and a customer portal takes 2–3 weeks. Complex custom builds are scoped individually — we give you a timeline before we start. The clock only starts once we have your deposit and your brief is clear.',
  },
  {
    q: 'Can you integrate M-Pesa into my system?',
    a: 'Yes — M-Pesa integration is one of our core specialties. We work with the Daraja API and can build STK Push (pay-bill prompts), C2B (customer to business), B2C (bulk payouts), and automated payment receipts. We have live payment systems already running in production, so this is not new territory for us.',
  },
  {
    q: 'What do I need to have ready before we start?',
    a: 'You need a clear idea of what you want built and who will use it. Beyond that: your logo and brand colours if you have them, your domain name if you already own one, and access to any third-party accounts we\'ll need to connect (e.g. your M-Pesa Daraja API credentials, your hosting login). If you don\'t have these yet, we can help you set them up — that\'s billed separately.',
  },
  {
    q: 'Who owns the code when the project is done?',
    a: 'You do — on receipt of full payment, the code belongs to you. You can take it anywhere, hand it to another developer, or build on it yourself. We retain the right to mention the project in our portfolio unless you ask us not to before we start.',
  },
  {
    q: 'What happens if I need changes after you deliver?',
    a: 'All projects include a 14-day bug-fix period after delivery at no extra cost. A bug is anything that doesn\'t work as we agreed it should. New features, design changes, or additions to what was originally scoped are separate — we quote those as new work. After the 14 days, ongoing changes are covered under a monthly support retainer or quoted per task.',
  },
  {
    q: 'Do you build mobile apps?',
    a: 'We build web apps that are fully responsive and work well on any phone — most of our clients don\'t need anything beyond that. If you specifically need a native Android or iOS app (something that lives on the App Store or Play Store), that falls under Custom Build pricing and we scope it based on your requirements.',
  },
  {
    q: 'How does payment work?',
    a: 'We take a 50% deposit before development starts and the remaining 50% on delivery, before the project goes live. Payments can be made via M-Pesa or bank transfer. The deposit is non-refundable once we\'ve started building. Hosting, domain, and third-party API costs are not included in the build fee — those are billed separately or set up directly under your account so you always have full control.',
  },
  {
    q: 'We\'re a small business — is this for us?',
    a: 'Yes. Most of our clients are small and growing Kenyan businesses that are ready to stop doing things manually. You don\'t need a big IT budget or a technical background. Our Starter plan exists specifically for businesses taking their first step into having a proper digital system. If you\'re unsure whether what you need falls within our services, just reach out — we\'ll give you a straight answer.',
  },
]

function Item({ q, a, open, onToggle }) {
  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-200"
      style={{ border: `1px solid ${open ? 'var(--border-warm)' : 'var(--border)'}`, background: open ? 'var(--bg2)' : 'var(--bg)' }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
        style={{ background: 'transparent', border: 'none' }}
      >
        <span className="font-medium text-[14px] leading-snug" style={{ color: 'var(--text)' }}>{q}</span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ background: open ? 'var(--orange-glow)' : 'var(--bg3)', border: `1px solid ${open ? 'var(--border-warm)' : 'var(--border)'}` }}
        >
          <svg
            width="10" height="10" viewBox="0 0 10 10" fill="none"
            stroke={open ? 'var(--orange)' : 'var(--text-dim)'} strokeWidth="2" strokeLinecap="round"
            style={{ transition: 'transform 0.2s', transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
          >
            <line x1="5" y1="1" x2="5" y2="9" />
            <line x1="1" y1="5" x2="9" y2="5" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6">
          <div className="h-px mb-4" style={{ background: 'var(--border)' }} />
          <p className="text-[13px] leading-[1.8] font-light" style={{ color: 'var(--text-muted)' }}>{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-16 md:py-28">
      <div className="max-w-[1160px] mx-auto px-5 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">

          {/* Left — label + heading + CTA */}
          <div data-reveal className="lg:sticky lg:top-28">
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="inline-block w-5 h-[2px]" style={{ background: 'var(--text-muted)' }} />
              <span className="text-[11px] tracking-[0.14em] uppercase font-semibold" style={{ color: 'var(--text-muted)' }}>06 · FAQ</span>
            </div>
            <h2 className="font-display font-extrabold tracking-tight leading-[1.1] mb-4" style={{ fontSize: 'clamp(32px, 3.8vw, 52px)' }}>
              Questions<br />we get asked.
            </h2>
            <p className="text-[15px] max-w-[340px] leading-[1.7] font-light mb-8" style={{ color: 'var(--text-muted)' }}>
              Straight answers to the things people ask before they decide to work with us.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-medium no-underline transition-all duration-200"
              style={{ background: 'var(--orange-glow)', border: '1px solid var(--border-warm)', color: 'var(--orange)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(232,93,26,0.15)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--orange-glow)'}
            >
              Still have a question? Ask us →
            </a>
          </div>

          {/* Right — accordion */}
          <div data-reveal data-delay="1" className="flex flex-col gap-2.5">
            {FAQS.map((item, i) => (
              <Item
                key={item.q}
                q={item.q}
                a={item.a}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
