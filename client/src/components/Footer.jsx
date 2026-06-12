export default function Footer() {
  return (
    <footer>
      <div className="py-14" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-[1160px] mx-auto px-5 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-10">
            {/* Brand */}
            <div>
              <a href="#" className="font-display font-extrabold text-[16px] tracking-tight no-underline block mb-3" style={{ color: 'var(--text)' }}>
                Jaribu Tech <span style={{ color: 'var(--orange)' }}>Solutions</span>
              </a>
              <p className="text-[13px] leading-[1.7] max-w-[220px] font-light mb-5" style={{ color: 'var(--text-muted)' }}>
                We build software that digitises and automates businesses. Custom web apps, payment integrations, and workflow systems - built to last.
              </p>
              <a href="mailto:hello@jaributechsolutions.co.ke" className="block text-[12px] mb-2 no-underline footer-link-hover transition-colors" style={{ color: 'var(--text-muted)' }}>
                hello@jaributechsolutions.co.ke
              </a>
              <a href="https://wa.me/254705493891" className="block text-[12px] no-underline footer-link-hover transition-colors" style={{ color: 'var(--text-muted)' }}>
                +254 705 493 891
              </a>
            </div>

            {/* Services */}
            <div>
              <h5 className="font-display font-semibold text-[13px] tracking-[0.02em] mb-4" style={{ color: 'var(--text)' }}>Services</h5>
              <ul className="list-none p-0 flex flex-col gap-2.5">
                {['Web Development','E-commerce','Payment Integrations','Workflow Automation','Custom Systems'].map(item => (
                  <li key={item}>
                    <a href="#services" className="text-[12px] no-underline font-light transition-colors footer-link-hover" style={{ color: 'var(--text-muted)' }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h5 className="font-display font-semibold text-[13px] tracking-[0.02em] mb-4" style={{ color: 'var(--text)' }}>Company</h5>
              <ul className="list-none p-0 flex flex-col gap-2.5">
                {[['#team','About us'],['#portfolio','Our work'],['#pricing','Pricing'],['#contact','Contact'],['#product','Replai']].map(([href, label]) => (
                  <li key={label}>
                    <a href={href} className="text-[12px] no-underline font-light transition-colors footer-link-hover" style={{ color: 'var(--text-muted)' }}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Find us */}
            <div>
              <h5 className="font-display font-semibold text-[13px] tracking-[0.02em] mb-4" style={{ color: 'var(--text)' }}>Find us</h5>
              <ul className="list-none p-0 flex flex-col gap-2.5">
                {[['https://github.com/BakariJuma1','GitHub'],['https://linkedin.com/in/bakari-juma1','LinkedIn'],['https://wa.me/254705493891','WhatsApp']].map(([href, label]) => (
                  <li key={label}>
                    <a href={href} className="text-[12px] no-underline font-light transition-colors footer-link-hover" style={{ color: 'var(--text-muted)' }}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 flex-wrap gap-3" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="text-[12px]" style={{ color: 'var(--text-dim)' }}>© 2024 Jaribu Tech Solutions</div>
            <div className="flex gap-5">
              <a href="#" className="text-[12px] no-underline transition-colors hover:text-white" style={{ color: 'var(--text-dim)' }}>Privacy Policy</a>
              <a href="#" className="text-[12px] no-underline transition-colors hover:text-white" style={{ color: 'var(--text-dim)' }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
