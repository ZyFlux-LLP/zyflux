import Link from 'next/link'
import type { Metadata } from 'next'
import ProjectsClient from './ProjectsClient'

export const metadata: Metadata = {
  title: 'Projects — Zyflux',
  description:
    'Selected client projects by Zyflux LLP — fintech, media, hospitality, health-tech, and AI. Custom ERP, CRM, ecommerce, and mobile apps built and shipped.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects — Zyflux',
    description:
      'Selected client projects by Zyflux LLP — fintech, media, hospitality, health-tech, and AI. Custom ERP, CRM, ecommerce, and mobile apps built and shipped.',
    url: 'https://zyflux.com/projects',
  },
}

export default function ProjectsPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://zyflux.com/projects' },
            ],
          }),
        }}
      />
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow page-hero-eyebrow" style={{ marginBottom: 28 }}>Projects · 2023–2026</div>
          <h1>
            <span className="line"><span>Products we&apos;ve shipped,</span></span>
            <span className="line"><span>and the teams behind them.</span></span>
          </h1>
          <p className="page-hero-sub">Eight live products across travel, food delivery, hospitality, social, health-tech, and AI. From 6-week mobile apps to full-stack platforms — built and measured.</p>
        </div>
      </section>

      <section style={{ padding: 0 }}>
        <div className="container">
          <ProjectsClient />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-band reveal">
            <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: 24 }}>Under NDA</div>
            <h2>A lot of our best work never makes<br />it to a case study.</h2>
            <p>Happy to walk through private engagements on a call — including similar work in your industry.</p>
            <Link href="/contact" className="btn btn-primary magnetic">
              Book a walkthrough
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7 17L17 7M10 7h7v7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
