function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-2.5 mb-3.5">
      <span className="inline-block w-[18px] h-px" style={{ background: 'var(--text-dim)' }} />
      <span className="text-[11px] tracking-[0.14em] uppercase" style={{ color: 'var(--text-dim)' }}>{text}</span>
    </div>
  )
}

const ICON_ATTRS = {
  viewBox: '0 0 24 24', fill: 'none', stroke: 'var(--orange)',
  strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round',
}

const icons = {
  monitor: <svg {...ICON_ATTRS} width="16" height="16"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  cart:    <svg {...ICON_ATTRS} width="16" height="16"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
  home:    <svg {...ICON_ATTRS} width="16" height="16"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  users:   <svg {...ICON_ATTRS} width="16" height="16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  phone:   <svg {...ICON_ATTRS} width="16" height="16"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.27 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.75a16 16 0 0 0 6 6l1.06-.06a2 2 0 0 1 2.11.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  plane:   <svg {...ICON_ATTRS} width="16" height="16"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>,
  coffee:  <svg {...ICON_ATTRS} width="16" height="16"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
  briefcase:<svg {...ICON_ATTRS} width="16" height="16"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  clock:   <svg {...ICON_ATTRS} width="16" height="16"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  db:      <svg {...ICON_ATTRS} width="16" height="16"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  bolt:    <svg {...ICON_ATTRS} width="16" height="16"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/></svg>,
}

function SvcCard({ icon, title, desc, items, time }) {
  return (
    <div
      className="svc-card rounded-xl p-6"
      style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}
      onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg3)'; e.currentTarget.style.borderColor = 'var(--border-warm)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg2)'; e.currentTarget.style.borderColor = 'var(--border)' }}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
        style={{ background: 'var(--orange-glow)', border: '1px solid var(--border-warm)' }}
      >
        {icon}
      </div>
      <h4 className="font-display font-semibold text-[14px] tracking-tight leading-snug mb-2">{title}</h4>
      <p className="text-[12px] leading-[1.65] mb-4 font-light" style={{ color: 'var(--text-muted)' }}>{desc}</p>
      <ul className="flex flex-col gap-1.5 mb-4 list-none p-0">
        {items.map(item => (
          <li key={item} className="flex items-start gap-1.5 text-[11px] leading-snug" style={{ color: 'var(--text-dim)' }}>
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
  { icon: icons.monitor, title: 'Business & Corporate Sites', desc: 'Professional websites that build trust and drive enquiries.', items: ['Homepage + services layout','About page + credibility sections','Contact page with maps'], time: '1–2 weeks' },
  { icon: icons.cart,    title: 'E-commerce & Online Stores', desc: 'Sell online with payments built in - M-Pesa, card, and more.', items: ['Product catalog + categories','Stock & order management','M-Pesa, Paystack, PayPal checkout'], time: '2–3 weeks' },
  { icon: icons.home,    title: 'Real Estate & Property Listings', desc: 'Property listing sites that make searching and enquiries easy.', items: ['Property listings + categories','Search filters (location, price)','Galleries + featured listings'], time: '2–3 weeks' },
  { icon: icons.users,   title: 'School & Education Platforms', desc: 'Student portals, fee payment systems, and admin dashboards.', items: ['Student + parent portals','Online fee payment (M-Pesa)','Timetables + announcements'], time: '3–4 weeks' },
]

const INDUSTRY_SERVICES = [
  { icon: icons.phone,    title: 'Clinic & Healthcare', desc: 'Appointment booking, patient records, and billing systems.', items: ['Online appointment booking','Patient record management','M-Pesa, card + automated receipts'], time: '3–4 weeks' },
  { icon: icons.plane,    title: 'Tour, Travel & Safari', desc: 'Package listings, booking forms, and payment confirmation.', items: ['Tour packages + itineraries','Booking + enquiry forms','Gallery + customer reviews'], time: '2–3 weeks' },
  { icon: icons.coffee,   title: 'Restaurant & Hotel', desc: 'Menus, reservations, and room booking with payment.', items: ['Digital menu + ordering','Table / room reservations','Online payment integration'], time: '2–3 weeks' },
  { icon: icons.briefcase,title: 'NGO & Non-profit', desc: 'Donation portals, volunteer management, and impact reporting.', items: ['Donation + M-Pesa giving','Programme pages + reports','Volunteer sign-up system'], time: '2–3 weeks' },
]

const AUTO_SERVICES = [
  { icon: icons.clock, title: 'Workflow Automation', desc: 'Automated invoicing, payment reminders, report generation, and notifications. Stop doing manually what a system can handle.', items: ['Automated M-Pesa invoicing','SMS + email notifications','Scheduled reports'], time: '1–2 weeks' },
  { icon: icons.db,    title: 'Custom Admin Systems', desc: 'Internal dashboards, inventory management, CRM, and data pipelines built exactly for how your team operates.', items: ['Role-based access control','Inventory + stock tracking','Analytics + reporting'], time: '2–4 weeks' },
  { icon: icons.bolt,  title: 'MVPs in 2 Weeks', desc: "You have an idea and need something real fast. We scope tight and ship a working product in two weeks - not a prototype that needs months more work.", items: ['Scoped discovery call','Core feature build only','Deployed and usable'], time: '2 weeks' },
]

function Category({ label, services, cols = 4 }) {
  return (
    <div className="mb-14">
      <div className="text-[11px] tracking-[0.12em] uppercase mb-5 pb-3" style={{ color: 'var(--orange)', borderBottom: '1px solid var(--border)' }}>
        {label}
      </div>
      <div className={`grid gap-3 ${cols === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}`}>
        {services.map(s => <SvcCard key={s.title} {...s} />)}
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-28">
      <div className="max-w-[1160px] mx-auto px-14 md:px-5">
        <div className="mb-14">
          <SectionLabel text="01 · Services" />
          <h2 className="font-display font-bold tracking-tight leading-[1.1] mb-4" style={{ fontSize: 'clamp(32px, 3.8vw, 52px)' }}>
            Everything a growing business<br />needs to go digital.
          </h2>
          <p className="text-[15px] max-w-[480px] leading-[1.7] font-light" style={{ color: 'var(--text-muted)' }}>
            From a simple business website to full workflow automation - we scope it, build it, and keep it running.
          </p>
        </div>
        <Category label="Web & App Development" services={WEB_SERVICES} cols={4} />
        <Category label="Industry Solutions" services={INDUSTRY_SERVICES} cols={4} />
        <Category label="Automation & Custom Systems" services={AUTO_SERVICES} cols={3} />
      </div>
    </section>
  )
}
