import { useState } from 'react'

function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-2.5 mb-3.5">
      <span className="inline-block w-5 h-[2px]" style={{ background: 'var(--text-muted)' }} />
      <span className="text-[11px] tracking-[0.14em] uppercase font-semibold" style={{ color: 'var(--text-muted)' }}>{text}</span>
    </div>
  )
}

function SvcCard({ title, desc, items, time }) {
  return (
    <div className="svc-card rounded-xl p-6">
      <h4 className="font-display font-semibold text-[14px] tracking-tight leading-snug mb-2">{title}</h4>
      <p className="text-[12px] leading-[1.65] mb-4 font-light" style={{ color: 'var(--text-muted)' }}>{desc}</p>
      <ul className="flex flex-col gap-1.5 mb-4 list-none p-0">
        {items.map(item => (
          <li key={item} className="flex items-start gap-1.5 text-[13px] leading-snug" style={{ color: 'var(--text-dim)' }}>
            <span style={{ color: 'var(--orange)', flexShrink: 0, marginTop: '1px', fontSize: '10px' }}>✓</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between pt-3.5" style={{ borderTop: '1px solid var(--border)' }}>
        <span className="text-[10px] tracking-[0.04em]" style={{ color: 'var(--text-dim)' }}>{time}</span>
        <a href="#contact" className="flex items-center gap-1 text-[11px] font-medium no-underline svc-start-gap" style={{ color: 'var(--orange)' }}>Start →</a>
      </div>
    </div>
  )
}

const WEB_SERVICES = [
  { title: 'Business & Corporate Sites',     desc: 'Professional websites that build trust and drive enquiries.',       items: ['Homepage + services layout', 'About page + credibility sections', 'Contact page with maps'],          time: '1–2 weeks' },
  { title: 'E-commerce & Online Stores',     desc: 'Sell online with payments built in, M-Pesa, card, and more.',      items: ['Product catalog + categories', 'Stock & order management', 'M-Pesa, Paystack, PayPal checkout'],     time: '2–3 weeks' },
  { title: 'Real Estate & Property Listings',desc: 'Property listing sites that make searching and enquiries easy.',    items: ['Property listings + categories', 'Search filters (location, price)', 'Galleries + featured listings'], time: '2–3 weeks' },
  { title: 'School & Education Platforms',   desc: 'Student portals, fee payment systems, and admin dashboards.',       items: ['Student + parent portals', 'Online fee payment (M-Pesa)', 'Timetables + announcements'],              time: '2–3 weeks' },
]

const INDUSTRY_SERVICES = [
  { title: 'Clinic & Healthcare',  desc: 'Appointment booking, patient records, and billing systems.',    items: ['Online appointment booking', 'Patient record management', 'M-Pesa, card + automated receipts'], time: '2–3 weeks' },
  { title: 'Tour, Travel & Safari',desc: 'Package listings, booking forms, and payment confirmation.',    items: ['Tour packages + itineraries', 'Booking + enquiry forms', 'Gallery + customer reviews'],         time: '2–3 weeks' },
  { title: 'Restaurant & Hotel',   desc: 'Menus, reservations, and room booking with payment.',           items: ['Digital menu + ordering', 'Table / room reservations', 'Online payment integration'],            time: '2–3 weeks' },
  { title: 'NGO & Non-profit',     desc: 'Donation portals, volunteer management, and impact reporting.', items: ['Donation + M-Pesa giving', 'Programme pages + reports', 'Volunteer sign-up system'],             time: '2–3 weeks' },
]

const AUTO_SERVICES = [
  { title: 'Startup - Idea to Launch', desc: 'You have an idea. We take it from concept to a live, revenue-ready product. Strategy, design, build, and launch handled end to end.', items: ['Product discovery + scoping', 'Full-stack design and build', 'Payments, integrations, admin', 'Launch + post-launch support'], time: '4–10 weeks' },
  { title: 'Workflow Automation',      desc: 'Automated invoicing, payment reminders, report generation, and notifications. Stop doing manually what a system can handle.',          items: ['Automated M-Pesa invoicing', 'SMS + email notifications', 'Scheduled reports'],                                         time: '1–2 weeks' },
  { title: 'Custom Admin Systems',     desc: 'Internal dashboards, inventory management, CRM, and data pipelines built exactly for how your team operates.',                         items: ['Role-based access control', 'Inventory + stock tracking', 'Analytics + reporting'],                                       time: '2–4 weeks' },
  { title: 'MVPs in 2 Weeks',          desc: 'You have an idea and need something real fast. We scope tight and ship a working product in two weeks, not a prototype that needs months more work.', items: ['Scoped discovery call', 'Core feature build only', 'Deployed and usable'],                                time: '2 weeks' },
]

const TABS = [
  { key: 'web',        label: 'Web & App',  services: WEB_SERVICES,      cols: 4 },
  { key: 'industry',   label: 'Industry',   services: INDUSTRY_SERVICES,  cols: 4 },
  { key: 'automation', label: 'Automation', services: AUTO_SERVICES,      cols: 4 },
]

export default function Services() {
  const [active, setActive] = useState('web')
  const tab = TABS.find(t => t.key === active)

  return (
    <section id="services" className="py-16 md:py-28">
      <div className="max-w-[1160px] mx-auto px-5 md:px-14">
        <div className="mb-10" data-reveal>
          <SectionLabel text="01 · Services" />
          <h2 className="font-display font-extrabold tracking-tight leading-[1.1] mb-4" style={{ fontSize: 'clamp(32px, 3.8vw, 52px)' }}>
            Everything a growing business<br />needs to go digital.
          </h2>
          <p className="text-[15px] max-w-[480px] leading-[1.7] font-light" style={{ color: 'var(--text-muted)' }}>
            From a simple business website to full workflow automation - we scope it, build it, and keep it running.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex gap-2 mb-8 flex-wrap" data-reveal data-delay="1">
          {TABS.map(t => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`tab-btn ${active === t.key ? 'tab-btn-active' : ''} px-5 py-2 rounded-lg text-[13px] font-medium cursor-pointer`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Cards: key forces remount + tab-fade animation on switch */}
        <div
          key={active}
          className={`tab-fade grid gap-3 ${tab.cols === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}`}
        >
          {tab.services.map(s => <SvcCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  )
}
