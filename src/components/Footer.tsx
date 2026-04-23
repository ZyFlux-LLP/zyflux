import Link from 'next/link'
import ZyfluxLogo from './ZyfluxLogo'
import CalButton from './CalButton'

function ExtArrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginLeft: 4 }}>
      <path d="M7 17L17 7" /><path d="M10 7h7v7" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <ZyfluxLogo size={32} />
              <span>Zyflux</span>
            </div>
            <p className="footer-tag">A product engineering studio building the digital backbone for ambitious teams.</p>
          </div>
          <div className="footer-col">
            <h4>Studio</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/about#careers">Careers</Link></li>
              <li><Link href="/about#press">Press</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/#services">ERP &amp; CRM</Link></li>
              <li><Link href="/#services">Ecommerce</Link></li>
              <li><Link href="/#services">Flutter apps</Link></li>
              <li><Link href="/#services">Digital marketing</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@zyflux.com">hello@zyflux.com</a></li>
              <li><CalButton>Schedule a meeting</CalButton></li>
              <li><a href="#">LinkedIn<ExtArrow /></a></li>
              <li><a href="#">GitHub<ExtArrow /></a></li>
            </ul>
          </div>
        </div>

        <div className="footer-word">Zyflux</div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Zyflux LLP · All rights reserved.</span>
          <span className="dot-live">Studio online · IST business hours</span>
        </div>
      </div>
    </footer>
  )
}
