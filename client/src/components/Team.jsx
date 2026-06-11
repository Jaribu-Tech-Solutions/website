const members = [
  {
    initials: "IB",
    name: "Isaac Bakari Juma",
    role: "Backend Systems Full-stack",
    description:
      "Backend engineer and systems architect. Has built and shipped payment systems, marketplaces, and automation tools used by real businesses. If it touches money or data, he's the one building it.",
  },
  {
    initials: "MJ",
    name: "Mati Joseph",
    role: "Product Frontend Full-stack",
    description:
      "Drives product decisions and frontend execution. Thinks in user flows and database schemas at the same time. Strong opinion: most software fails because nobody stopped to ask why it needs to exist. Asks that question before writing a single line.",
  },
];

export default function Team() {
  return (
    <section className="section section-alt" id="team">
      <div className="container">
        <div className="sec-label">
          <span>06 · Who we are</span>
        </div>
        <h2 className="section-h2">
          Small team.
          <br />
          Serious output.
        </h2>
        <p className="section-p">
          When you reach out, one of us picks up. You talk directly to the
          people building your product, start to finish.
        </p>

        <div className="team-grid">
          {members.map((member) => (
            <div key={member.name} className="team-card">
              <div className="team-initials">{member.initials}</div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-copy">{member.description}</p>
              <div className="team-links">
                <a href="#">GitHub ↗</a>
                <a href="#">LinkedIn ↗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
