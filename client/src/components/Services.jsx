const serviceGroups = [
  {
    label: 'Web & App Development',
    cards: [
      {
        title: 'Business & Corporate Sites',
        description: 'Professional websites that build trust and drive enquiries.',
        bullets: [
          'Homepage + services layout',
          'About page + credibility sections',
          'Contact page with maps',
        ],
        timeline: '1–2 weeks',
      },
      {
        title: 'E-commerce & Online Stores',
        description: 'Sell online with payments built in — M-Pesa, card, and more.',
        bullets: [
          'Product catalog + categories',
          'Stock & order management',
          'M-Pesa, Paystack, PayPal checkout',
        ],
        timeline: '2–3 weeks',
      },
      {
        title: 'Real Estate & Property Listings',
        description: 'Property listing sites that make searching and enquiries easy.',
        bullets: [
          'Property listings + categories',
          'Search filters (location, price)',
          'Galleries + featured listings',
        ],
        timeline: '2–3 weeks',
      },
      {
        title: 'School & Education Platforms',
        description: 'Student portals, fee payment systems, and admin dashboards.',
        bullets: [
          'Student + parent portals',
          'Online fee payment (M-Pesa)',
          'Timetables + announcements',
        ],
        timeline: '3–4 weeks',
      },
    ],
  },
  {
    label: 'Industry Solutions',
    cards: [
      {
        title: 'Clinic & Healthcare',
        description: 'Appointment booking, patient records, and billing systems.',
        bullets: [
          'Online appointment booking',
          'Patient record management',
          'M-Pesa, card + automated receipts',
        ],
        timeline: '3–4 weeks',
      },
      {
        title: 'Tour, Travel & Safari',
        description: 'Package listings, booking forms, and payment confirmation.',
        bullets: [
          'Tour packages + itineraries',
          'Booking + enquiry forms',
          'Gallery + customer reviews',
        ],
        timeline: '2–3 weeks',
      },
      {
        title: 'Restaurant & Hotel',
        description: 'Menus, reservations, and room booking with payment.',
        bullets: [
          'Digital menu + ordering',
          'Table / room reservations',
          'Online payment integration',
        ],
        timeline: '2–3 weeks',
      },
      {
        title: 'NGO & Non-profit',
        description: 'Donation portals, volunteer management, and impact reporting.',
        bullets: [
          'Donation + M-Pesa giving',
          'Programme pages + reports',
          'Volunteer sign-up system',
        ],
        timeline: '2–3 weeks',
      },
    ],
  },
  {
    label: 'Automation & Custom Systems',
    cards: [
      {
        title: 'Workflow Automation',
        description: 'Automated invoicing, payment reminders, report generation, and notifications. Stop doing manually what a system can handle.',
        bullets: [
          'Automated M-Pesa invoicing',
          'SMS + email notifications',
          'Scheduled reports',
        ],
        timeline: '1–2 weeks',
      },
      {
        title: 'Custom Admin Systems',
        description: 'Internal dashboards, inventory management, CRM, and data pipelines built exactly for how your team operates.',
        bullets: [
          'Role-based access control',
          'Inventory + stock tracking',
          'Analytics + reporting',
        ],
        timeline: '2–4 weeks',
      },
      {
        title: 'MVPs in 2 Weeks',
        description: 'You have an idea and need something real fast. We scope tight and ship a working product in two weeks — not a prototype that needs months more work.',
        bullets: [
          'Scoped discovery call',
          'Core feature build only',
          'Deployed and usable',
        ],
        timeline: '2 weeks',
      },
    ],
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="services-header">
          <div className="sec-label"><span>01 · Services</span></div>
          <h2 className="section-h2">Everything a growing business<br />needs to go digital.</h2>
          <p className="section-p">From a simple business website to full workflow automation — we scope it, build it, and keep it running.</p>
        </div>

        {serviceGroups.map((group) => (
          <div key={group.label} className="services-category">
            <div className="services-category-label">{group.label}</div>
            <div className="svc-grid">
              {group.cards.map((card) => (
                <div key={card.title} className="svc-card">
                  <div className="svc-icon" />
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                  <ul className="svc-checklist">
                    {card.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="svc-footer">
                    <span className="svc-time">{card.timeline}</span>
                    <a href="#contact" className="svc-start">Start →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
