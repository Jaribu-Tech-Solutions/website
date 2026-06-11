const tech = [
  'React',
  'Flask',
  'PostgreSQL',
  'TypeScript',
  'Node.js',
  'Docker',
  'GitHub Actions',
  'M-Pesa Daraja API',
  'Paystack',
  'WhatsApp API',
  'Tailwind CSS',
  'Python',
  'Redis',
  'Linux VPS',
  'Backblaze B2',
];

export default function TechStack() {
  return (
    <section className="section section-alt" id="tech-stack">
      <div className="container">
        <p className="sec-label"><span>Technology stack</span></p>
        <div className="stack-grid">
          {tech.map((item) => (
            <div key={item} className="stack-card">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
