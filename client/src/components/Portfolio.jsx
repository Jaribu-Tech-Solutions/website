const projects = [
  {
    title: 'PHAMATIME — B2B Pharma Marketplace',
    label: 'B2B MARKETPLACE · HEALTHCARE',
    name: 'Phamatime',
    text: 'A B2B platform connecting pharma sales reps to healthcare organisations. Reps subscribe, manage their profiles, and get connected to verified clinics and hospitals. Payments handled automatically — no manual follow-up.',
    tags: ['Web App', 'M-Pesa + Paystack', 'Admin Dashboard'],
    linkLabel: 'View live project ↗',
  },
  {
    title: 'BARAJUBEATS — Beat Marketplace',
    label: 'E-COMMERCE · MUSIC',
    name: 'Barajubeats',
    text: 'A beat-selling marketplace for music producers and artists. Producers upload and license beats, artists browse and buy instantly. Secure file delivery on purchase, automated licensing, real revenue flowing through the platform.',
    tags: ['Web App', 'Paystack + PayPal', 'Secure File Delivery'],
    linkLabel: 'View live project ↗',
  },
];

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="sec-label"><span>03 · Our work</span></div>
        <h2 className="section-h2">Built and shipped.</h2>
        <p className="section-p">Production systems with real users and real transactions. Not mock-ups.</p>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.title} className="port-card">
              <div className="port-type">{project.label}</div>
              <h3>{project.title}</h3>
              <p className="port-name">{project.name}</p>
              <p className="port-copy">{project.text}</p>
              <div className="port-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a href="#" className="port-link">{project.linkLabel}</a>
            </div>
          ))}
        </div>

        <div className="portfolio-note">
          <p>More projects shipping soon</p>
          <p>We're adding work to this section as we go. Reach out to see more.</p>
        </div>
      </div>
    </section>
  );
}
