import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import FAQSection from './FAQSection'

function SocialArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7" /><path d="M10 7h7v7" />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Contact — Zyflux',
  description:
    'Contact Zyflux LLP — a product engineering studio in Navi Mumbai. Reach us at team@zyflux.com or call +91 70213 09381. Typical projects start within two weeks.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact — Zyflux',
    description:
      'Contact Zyflux LLP — a product engineering studio in Navi Mumbai. Reach us at team@zyflux.com or call +91 70213 09381. Typical projects start within two weeks.',
    url: 'https://zyflux.com/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zyflux.com' },
              { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://zyflux.com/contact' },
            ],
          }),
        }}
      />
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow page-hero-eyebrow" style={{ marginBottom: 28 }}>Contact</div>
          <h1>
            <span className="line"><span>Tell us about the product.</span></span>
            <span className="line"><span>We&apos;ll send back a plan.</span></span>
          </h1>
          <p className="page-hero-sub">We reply to every serious inquiry within one business day. Typical engagements start within two weeks of first call.</p>
        </div>
      </section>

      <section style={{ padding: 0 }}>
        <div className="container">
          <div className="contact-grid">
            <div className="reveal">
              <ContactForm />
            </div>
            <aside className="contact-info reveal">
              <div className="info-block">
                <h4>Email</h4>
                <div className="big"><a href="mailto:team@zyflux.com">team@zyflux.com</a></div>
                <div className="sub">New projects, press, hiring.</div>
              </div>
              <div className="info-block">
                <h4>Already a client?</h4>
                <div className="big"><a href="mailto:dev@zyflux.com">dev@zyflux.com</a></div>
                <div className="sub">24/7 for production issues.</div>
              </div>
              <div className="info-block">
                <h4>Response time</h4>
                <div className="big" style={{ fontSize: 18 }}>&lt; 2 hours</div>
                <div className="sub">Business days, IST.</div>
              </div>
              <div className="info-block">
                <h4>Phone</h4>
                <div className="big" style={{ fontSize: 17, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <a href="tel:+917021309381">+91 70213 09381</a>
                  <a href="https://wa.me/917021309381" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>WhatsApp <SocialArrow /></a>
                </div>
              </div>
              <div className="info-block">
                <h4>Socials</h4>
                <div className="big" style={{ fontSize: 17, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <a href="https://linkedin.com/company/zyflux" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>LinkedIn <SocialArrow /></a>
                  <a href="https://github.com/ZyFlux-LLP" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>GitHub <SocialArrow /></a>
                  <a href="https://twitter.com/zyflux_com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>Twitter <SocialArrow /></a>
                  <a href="https://instagram.com/zyflux_com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>Instagram <SocialArrow /></a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal" style={{ marginBottom: 36 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 22 }}>Studio</div>
              <h2>Based in Navi Mumbai,<br />working globally.</h2>
            </div>
            <p>We operate on IST business hours and take on clients across India, Europe, and the US.</p>
          </div>
          <div className="locations reveal">
            <div className="loc">
              <div className="city">Navi Mumbai</div>
              <div className="tz">IST · UTC+5:30</div>
              <div className="addr">H-3/1001 Valley Shilp CHS<br />Kharghar, Sector 36<br />Navi Mumbai, Maharashtra 410210<br />India</div>
            </div>
            <div className="loc-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5956853954785!2d73.06854427521031!3d19.08150615179964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c18139101f95%3A0x2bdb68cf0702d4cb!2sZyflux%20LLP!5e0!3m2!1sen!2sin!4v1777237897976!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zyflux LLP office location"
              />
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  )
}
