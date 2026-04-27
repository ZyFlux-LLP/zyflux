import Link from 'next/link'
import ZyfluxLogo from './ZyfluxLogo'

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
            <p className="footer-tag">H-3/1001 Valley Shilp CHS<br />Kharghar, Sector 36<br />Navi Mumbai, Maharashtra 410210</p>
          </div>
          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li><Link href="/#services">ERP Systems</Link></li>
              <li><Link href="/#services">CRM Platforms</Link></li>
              <li><Link href="/#services">Web Platforms</Link></li>
              <li><Link href="/#services">Mobile Apps</Link></li>
              <li><Link href="/#services">AI &amp; Agents</Link></li>
              <li><Link href="/#services">Digital Marketing</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:team@zyflux.com">team@zyflux.com</a></li>
              <li><a href="tel:+917021309381">+91 70213 09381</a></li>
              <li><a href="https://linkedin.com/company/zyflux" target="_blank" rel="noopener noreferrer">LinkedIn<ExtArrow /></a></li>
              <li><a href="https://twitter.com/zyflux_com" target="_blank" rel="noopener noreferrer">Twitter / X<ExtArrow /></a></li>
              <li><a href="https://github.com/ZyFlux-LLP" target="_blank" rel="noopener noreferrer">GitHub<ExtArrow /></a></li>
              <li><a href="https://instagram.com/zyflux_com" target="_blank" rel="noopener noreferrer">Instagram<ExtArrow /></a></li>
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
