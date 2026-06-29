'use client';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-brand-name">HL<span>DR</span></div>
          <p className="footer-tagline">
            A celebration of flavour, craft, and the art of hospitality. 
            Open Tuesday through Sunday, from 7 PM.
          </p>
          <div style={{ marginTop: 28, display: 'flex', gap: 16 }}>
            {['Instagram', 'Twitter', 'Facebook'].map(s => (
              <a key={s} href="#" style={{ fontSize: 11, letterSpacing: '0.1em', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="footer-col-title">Navigation</div>
          <ul className="footer-links">
            {['Our Story', 'Menu', 'Gallery', 'Reserve a Table', 'Private Dining'].map(l => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Contact</div>
          <ul className="footer-links">
            <li><a href="#">+91 98000 00000</a></li>
            <li><a href="#">hello@hldr.in</a></li>
            <li><a href="#" style={{ lineHeight: 1.7 }}>12, Heritage Lane,<br />Colaba, Mumbai 400001</a></li>
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Hours</div>
          <ul className="footer-links">
            <li><a href="#">Mon: Closed</a></li>
            <li><a href="#">Tue – Thu: 7PM – 11PM</a></li>
            <li><a href="#">Fri – Sat: 7PM – 12AM</a></li>
            <li><a href="#">Sun: 7PM – 10:30PM</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 HLDR. All rights reserved.</span>
        <span style={{ display: 'flex', gap: 24 }}>
          <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms</a>
        </span>
      </div>
    </footer>
  );
}
