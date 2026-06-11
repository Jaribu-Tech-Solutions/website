export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="sec-label"><span>07 · Get in touch</span></div>
        <h2 className="section-h2">Have something<br />to build?</h2>
        <p className="section-p">Tell us what you need. We'll give you a straight answer on scope, cost, and timeline — no sales call required.</p>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-label">DIRECT LINE</div>
            <h4>Call or WhatsApp</h4>
            <a href="https://wa.me/254705493891">+254 705 493 891</a>
            <p>Call or drop a WhatsApp — we pick up.</p>
            <a href="https://wa.me/254705493891" className="contact-link">Chat on WhatsApp →</a>
          </div>
          <div className="contact-card">
            <div className="contact-label">EMAIL DIRECTLY</div>
            <h4>Send us a message</h4>
            <a href="mailto:hello@jaributechsolutions.co.ke">hello@jaributechsolutions.co.ke</a>
            <p>We reply within a few hours.</p>
            <a href="mailto:hello@jaributechsolutions.co.ke" className="contact-link">Send email →</a>
          </div>
          <div className="contact-card">
            <div className="contact-label">AVAILABILITY</div>
            <h4>Response time</h4>
            <p className="contact-large">Under 4 hours</p>
            <p>Mon – Sat, 8am – 9pm (GMT+3)</p>
          </div>
        </div>

        <div className="contact-form-card">
          <div className="contact-form-headline">Send us a brief</div>
          <p className="section-p">Fill in what you're building and we'll come back with an honest answer — scope, cost, and timeline.</p>
          <form className="brief-form">
            <label>
              YOUR NAME
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              EMAIL
              <input type="email" placeholder="Your email" />
            </label>
            <label>
              PHONE / WHATSAPP
              <input type="text" placeholder="Phone / WhatsApp" />
            </label>
            <label>
              PACKAGE INTEREST
              <select>
                <option>Not sure yet — help me decide</option>
                <option>Starter Kit — KES 15,000</option>
                <option>Full Suite — KES 35,000</option>
                <option>Custom Build — From KES 60,000</option>
              </select>
            </label>
            <label>
              WHAT ARE YOU BUILDING?
              <textarea rows="4" placeholder="Describe your project"></textarea>
            </label>
            <button type="button">Send brief →</button>
          </form>
        </div>
      </div>
    </section>
  );
}
