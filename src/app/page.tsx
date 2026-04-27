import Link from 'next/link'
import type { Metadata } from 'next'
import CalButton from '@/components/CalButton'

export const metadata: Metadata = {
  title: 'Zyflux — Engineering the flow of modern software',
  description:
    'Zyflux is a product engineering studio in Navi Mumbai — building custom ERP, CRM, ecommerce platforms, Flutter apps, and digital marketing for startups and enterprises.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Zyflux — Engineering the flow of modern software',
    description:
      'Zyflux is a product engineering studio in Navi Mumbai — building custom ERP, CRM, ecommerce platforms, Flutter apps, and digital marketing for startups and enterprises.',
    url: 'https://zyflux.com',
  },
}

function ArrowIcon() {
  return (
    <svg className="showcase-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7" /><path d="M10 7h7v7" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <polygon points="12,2 14.8,8.6 22,9.3 16.5,14.1 18.2,21.2 12,17.3 5.8,21.2 7.5,14.1 2,9.3 9.2,8.6" />
    </svg>
  )
}

function Stars() {
  return (
    <span className="stars">
      <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
    </span>
  )
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-mesh">
          <div className="hero-grid-bg" />
          <div className="hero-blob b1" data-parallax="0.04" />
          <div className="hero-blob b2" data-parallax="-0.03" />
          <div className="hero-blob b3" data-parallax="0.06" />
        </div>
        <div className="hero-orbit" data-parallax="-0.02">
          <div className="ring" />
          <div className="ring ring-2" />
          <div className="ring ring-3" />
          <div className="ring-glow" />
          <div className="core" />
          <div className="dot d1" />
          <div className="dot d2" />
          <div className="dot d3" />
        </div>
        <div className="container hero-inner">
          <div className="hero-grid-layout">
            <div>
              <h1>
                <span className="line"><span>Engineering</span></span>
                <span className="line">
                  <span>the <em style={{ fontStyle: 'normal' }} className="gradient-text">flow</em> of</span>
                </span>
                <span className="line"><span>modern software.</span></span>
              </h1>
            </div>
            <div className="hero-side">
              <p>We design, build, and ship digital products — ERP, CRM, ecommerce, apps, and digital marketing — for teams that care about craft and velocity.</p>
              <div className="hero-cta">
                <CalButton className="btn btn-primary magnetic">
                  Schedule a call
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7 17L17 7M10 7h7v7" /></svg>
                </CalButton>
                <Link href="/projects" className="btn btn-ghost">See our work</Link>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="metrics reveal">
            <div className="metric">
              <div className="n"><span data-count="60" data-suffix="+">60+</span></div>
              <div className="l">Products shipped</div>
            </div>
            <div className="metric">
              <div className="n"><span data-count="24">24</span></div>
              <div className="l">Active engagements</div>
            </div>
            <div className="metric">
              <div className="n">
                <span data-count="9">9</span>
                <span style={{ fontSize: '0.5em', color: 'var(--ink-dim)' }}>mo</span>
              </div>
              <div className="l">Avg. build time</div>
            </div>
            <div className="metric">
              <div className="n">
                <span data-count="4.9" data-decimals="1">4.9</span>
                <span style={{ fontSize: '0.5em', color: 'var(--ink-dim)' }}>/5</span>
              </div>
              <div className="l">Client rating</div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="trust reveal">
            <div className="trust-label">Rated by</div>
            <div className="trust-row">
              <a href="#" className="trust-item" aria-label="Trustpilot">
                <span className="logo">
                  <svg viewBox="0 0 24 24" fill="oklch(0.78 0.16 150)">
                    <polygon points="12,2 14.8,8.6 22,9.3 16.5,14.1 18.2,21.2 12,17.3 5.8,21.2 7.5,14.1 2,9.3 9.2,8.6" />
                  </svg>
                  Trustpilot
                </span>
                <span className="rating"><Stars /> 4.9 · 142</span>
              </a>
              <a href="#" className="trust-item" aria-label="Clutch">
                <span className="logo">
                  <svg viewBox="0 0 24 24" fill="none" stroke="oklch(0.78 0.14 220)" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.5" fill="oklch(0.78 0.14 220)" />
                  </svg>
                  Clutch
                </span>
                <span className="rating"><Stars /> 5.0 · 38</span>
              </a>
              <a href="#" className="trust-item" aria-label="Contra">
                <span className="logo">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 8a6 6 0 1 0 0 8" />
                  </svg>
                  Contra
                </span>
                <span className="rating">Top 1% studio</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-scroll"><span>Scroll</span><div className="bar" /></div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          {['ERP systems','CRM platforms','Ecommerce','Landing pages','Flutter apps','Meta & Google Ads','SEO','Social media',
            'ERP systems','CRM platforms','Ecommerce','Landing pages','Flutter apps','Meta & Google Ads','SEO','Social media'].map((item, i) => (
            <div key={i} className="marquee-item">{item}<span /></div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow" style={{ marginBottom: 22 }}>Services</div>
              <h2>What we do,<br />end to end.</h2>
            </div>
            <p>Zyflux operates as an extended engineering partner — one team across product strategy, design, and delivery. Pick a single lane or hand off the whole stack.</p>
          </div>

          <div className="services reveal-stagger">
            <article className="card service wide">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div className="glyph">
                    <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><path d="M17.5 14v7M14 17.5h7" /></svg>
                  </div>
                  <span className="service-num">01 / ERP</span>
                </div>
              </div>
              <div>
                <h3>ERP Systems</h3>
                <p>Custom enterprise resource platforms — inventory, finance, HR, procurement — unified into one operating surface tailored to your workflow.</p>
                <div className="service-tags"><span>Modular</span><span>Multi-tenant</span><span>Role-based access</span><span>Audit-ready</span></div>
              </div>
            </article>

            <article className="card service wide">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div className="glyph">
                    <svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><circle cx="17" cy="6" r="2" /><path d="M14 13c0-2 1.3-3 3-3s3 1 3 3" /></svg>
                  </div>
                  <span className="service-num">02 / CRM</span>
                </div>
              </div>
              <div>
                <h3>CRM Platforms</h3>
                <p>Sales pipelines, customer lifecycle, and support desks in one place. Built around how your team actually sells — not a rigid SaaS template.</p>
                <div className="service-tags"><span>Pipeline automation</span><span>Email sync</span><span>Analytics</span><span>Integrations</span></div>
              </div>
            </article>

            <article className="card service">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="glyph">
                  <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 8h18M7 12h6" /></svg>
                </div>
                <span className="service-num">03 / Web</span>
              </div>
              <div>
                <h3>Web Platforms</h3>
                <p>Production-grade web platforms — including ecommerce storefronts and high-conversion landing pages. Performance-budgeted, accessible, SEO-ready.</p>
                <div className="service-tags"><span>Next.js</span><span>React</span><span>TypeScript</span><span>Supabase</span><span>Shopify</span></div>
              </div>
            </article>

            <article className="card service">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="glyph">
                  <svg viewBox="0 0 24 24"><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" /></svg>
                </div>
                <span className="service-num">04 / Apps</span>
              </div>
              <div>
                <h3>Mobile Apps</h3>
                <p>iOS and Android apps shipped fast. We lean on Flutter and FlutterFlow for cross-platform builds without the native compromise.</p>
                <div className="service-tags"><span>Flutter</span><span>FlutterFlow</span><span>React Native</span><span>Swift</span><span>Kotlin</span><span>Firebase</span></div>
              </div>
            </article>

            <article className="card service">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="glyph">
                  <svg viewBox="0 0 24 24"><path d="M12 3v2M12 19v2M5 12H3M21 12h-2M6 6l1.4 1.4M16.6 16.6L18 18M6 18l1.4-1.4M16.6 7.4L18 6" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg>
                </div>
                <span className="service-num">05 / AI</span>
              </div>
              <div>
                <h3>AI &amp; Agents</h3>
                <p>LLM integration, RAG pipelines, and autonomous workflows embedded into your product surface.</p>
                <div className="service-tags"><span>RAG</span><span>Agents</span><span>OpenAI</span></div>
              </div>
            </article>

            <article className="card service full">
              <div className="service-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                  <div className="glyph">
                    <svg viewBox="0 0 24 24"><path d="M3 11l18-7v16l-18-7z" /><path d="M7 13v5a2 2 0 002 2h1a2 2 0 002-2v-3" /></svg>
                  </div>
                  <span className="service-num">06 / Growth</span>
                </div>
                <h3>Digital Marketing</h3>
                <p style={{ maxWidth: '52ch' }}>Full-funnel growth — performance ads, organic search, and social run as one team. Creative, media buying, community, and reporting under a single growth loop.</p>
                <div className="service-tags"><span>Meta Ads</span><span>Google Ads</span><span>SEO</span><span>Social media marketing</span><span>Social media management</span></div>
              </div>
              <div className="service-visual viz-flow">
                <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
                  <path d="M0,100 C80,40 160,160 240,100 S400,40 400,100" />
                  <path d="M0,130 C80,70 160,190 240,130 S400,70 400,130" style={{ opacity: 0.5 }} />
                  <path d="M0,70 C80,10 160,130 240,70 S400,10 400,70" style={{ opacity: 0.3 }} />
                </svg>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow" style={{ marginBottom: 22 }}>Process</div>
              <h2>How engagements<br />actually run.</h2>
            </div>
            <p>No drawn-out discovery. We move from first call to shipping code in weeks, not quarters, and stay embedded with your team the whole way.</p>
          </div>
          <div className="process-grid reveal-stagger">
            <div className="process-step">
              <div className="process-num">/ 01</div>
              <h3>Scope &amp; align</h3>
              <p>We map the problem space, constraints, and what &quot;done&quot; looks like. Fixed-price discovery sprint.</p>
            </div>
            <div className="process-step">
              <div className="process-num">/ 02</div>
              <h3>Design in code</h3>
              <p>Prototypes in the real runtime — no Figma-to-code translation debt. You click what you&apos;ll ship.</p>
            </div>
            <div className="process-step">
              <div className="process-num">/ 03</div>
              <h3>Build &amp; ship</h3>
              <p>Weekly production releases. You see progress in the product, not in a burndown chart.</p>
            </div>
            <div className="process-step">
              <div className="process-num">/ 04</div>
              <h3>Operate &amp; evolve</h3>
              <p>Long-term partnership: observability, iteration, on-call, and roadmap planning with your team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section>
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow" style={{ marginBottom: 22 }}>Selected work</div>
              <h2>Shipped,<br />in the wild.</h2>
            </div>
            <p>A sample of recent engagements across fintech, health, logistics, and internal tooling. <Link href="/projects" style={{ color: 'var(--ink)', textDecoration: 'underline', textUnderlineOffset: 4 }}>See all projects <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle' }}><path d="M7 17L17 7" /><path d="M10 7h7v7" /></svg></Link></p>
          </div>
          <div className="showcase-grid reveal-stagger">
            <a href="https://nirnayaknews.com/" target="_blank" rel="noopener noreferrer" className="showcase-card">
              <div className="showcase-thumb t-dainik" />
              <div className="showcase-body">
                <div className="showcase-meta"><span>Media & Publishing · 2024</span><ArrowIcon /></div>
                <h3>Dainik Nirnayak CMS — newspaper production platform</h3>
                <p>Digitized the entire newspaper production and ad billing workflow — editorial uploads, real-time approvals, PDF generation, and GST invoicing in one dashboard.</p>
              </div>
            </a>
            <a href="https://ind.misscallpay.com/" target="_blank" rel="noopener noreferrer" className="showcase-card">
              <div className="showcase-thumb t-misscall" />
              <div className="showcase-body">
                <div className="showcase-meta"><span>Fintech · 2019</span><ArrowIcon /></div>
                <h3>MissCallPay — cashless payment for rural India</h3>
                <p>Full payment backend enabling digital transactions via a simple missed call — no smartphone or internet needed. MahaStartupWeek 2019 award winner.</p>
              </div>
            </a>
            <a href="https://www.zarajamesstudio.com/" target="_blank" rel="noopener noreferrer" className="showcase-card">
              <div className="showcase-thumb t-interior" />
              <div className="showcase-body">
                <div className="showcase-meta"><span>Interior Design · 2024</span><ArrowIcon /></div>
                <h3>Zara James Studio — luxury interior design portfolio</h3>
                <p>Bespoke portfolio for a Mumbai-based luxury residential interior design firm. Image-first case study layout with refined typography and dark-mode toggle.</p>
              </div>
            </a>
            <a href="https://www.mumbaimeridians.com/" target="_blank" rel="noopener noreferrer" className="showcase-card">
              <div className="showcase-thumb t-sailing" />
              <div className="showcase-body">
                <div className="showcase-meta"><span>Sports & Sailing · 2025</span><ArrowIcon /></div>
                <h3>Mumbai Meridians — ISL sailing franchise</h3>
                <p>Multi-page website for India&apos;s ISL 2026 sailing franchise with live event countdown, junior academy enrollment, and team roster.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container">
          <div className="cta-band reveal">
            <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: 24 }}>Ready when you are</div>
            <h2>Have a product in mind?<br />Let&apos;s get into the flow.</h2>
            <p>Typical engagements start within two weeks. Tell us the shape of the problem — we&apos;ll send back a plan.</p>
            <CalButton className="btn btn-primary magnetic">
              Schedule a call
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7 17L17 7M10 7h7v7" /></svg>
            </CalButton>
          </div>
        </div>
      </section>
    </>
  )
}
