export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <canvas id="hero-canvas" width="300" height="150" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <div className="eyebrow-dot" />
            <span className="eyebrow-text">Nairobi, Kenya · Est. 2024</span>
          </div>
          <h1>
            We digitise and automate<br />
            <span className="kenya">Kenyan</span> businesses.
          </h1>
          <p className="hero-sub">
            Custom web apps, payment integrations, and workflow automation. We take your business from manual to digital — fast, without the agency fluff.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Get a quote <span className="arr">→</span>
            </a>
            <a href="#portfolio" className="btn-outline">
              See our work
            </a>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="h-stat">
          <div className="num">2</div>
          <div className="lbl">Developers</div>
        </div>
        <div className="h-stat">
          <div className="num">&lt;4h</div>
          <div className="lbl">Reply time</div>
        </div>
        <div className="h-stat">
          <div className="num">2w</div>
          <div className="lbl">MVP delivery</div>
        </div>
      </div>
    </section>
  );
}
