export default function Navbar() {
  return (
    <nav className="nav">
      <a href="#" className="nav-logo">
        Jaribu Tech <span>Solutions</span>
      </a>

      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Work</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#contact" className="nav-cta">Talk to us →</a></li>
      </ul>

      <div className="nav-mobile-cta">
        <a href="#contact">Talk to us →</a>
        <button className="hamburger" aria-label="Menu">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
