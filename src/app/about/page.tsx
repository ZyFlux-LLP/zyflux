import type { Metadata } from 'next'
import CalButton from '@/components/CalButton'

export const metadata: Metadata = {
  title: 'About — Zyflux',
  description:
    'Zyflux LLP is a product engineering studio founded in 2023, based in Navi Mumbai. We design and build custom ERP, CRM, ecommerce platforms, and mobile apps for product-led teams.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About — Zyflux',
    description:
      'Zyflux LLP is a product engineering studio founded in 2023, based in Navi Mumbai. We design and build custom ERP, CRM, ecommerce platforms, and mobile apps for product-led teams.',
    url: 'https://zyflux.com/about',
  },
}

const team = [
  { initials: 'AG', name: 'Arpit Gupta', role: 'Co-founder · Partner', color: 'p-a' },
  { initials: 'VS', name: 'Vatsal Sharma', role: 'Co-founder · Partner', color: 'p-b' },
  { initials: 'AC', name: 'Aditya Chauhan', role: 'Co-founder · Partner', color: 'p-c' },
]


export default function AboutPage() {
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
              { '@type': 'ListItem', position: 2, name: 'About', item: 'https://zyflux.com/about' },
            ],
          }),
        }}
      />
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow page-hero-eyebrow" style={{ marginBottom: 28 }}>About Zyflux LLP</div>
          <h1>
            <span className="line"><span>A small studio,</span></span>
            <span className="line"><span>building serious software since 2023.</span></span>
          </h1>
          <p className="page-hero-sub">Three co-founders, one studio — based in Navi Mumbai, working with clients across India, Europe, and the US. We pick a few engagements at a time and give them everything we have.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="about-intro reveal">
            <div><h2>Flow, not fragments.</h2></div>
            <div>
              <p>Zyflux started as three engineers frustrated by how agencies handed off work in pieces — a Figma here, a repo there, stitched together by a project manager. We wanted to be the team that stayed in one flow, from the first whiteboard to the thousandth production release.</p>
              <p>Today that idea is a studio. We structure every engagement as a single embedded pod: product, design, engineering, and ops — with a single weekly cadence, a single Slack channel, and a single set of metrics the whole team is held to.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow" style={{ marginBottom: 22 }}>How we work</div>
              <h2>Three values<br />we actually argue about.</h2>
            </div>
            <p>We wrote these after debating which ones we&apos;d be willing to turn down work over. These three made the cut.</p>
          </div>
          <div className="values reveal-stagger">
            <div className="value"><div className="value-n">/ 01</div><h3>Ship something real every week.</h3><p>Slide decks and Figma boards age out. Shipped code compounds. Every week of a Zyflux engagement ends with something running in production — even if it&apos;s tiny.</p></div>
            <div className="value"><div className="value-n">/ 02</div><h3>One team, one number.</h3><p>Design and engineering share the same success metric — usually a north-star product number. No handoffs, no &quot;that&apos;s a design bug, not an eng bug.&quot; Just one team pointed at the same outcome.</p></div>
            <div className="value"><div className="value-n">/ 03</div><h3>Write it down.</h3><p>Every decision gets a paragraph in the doc. Every trade-off is named. Future-you, future-us, and future-your-new-hire will thank the people who wrote stuff down.</p></div>
          </div>
        </div>
      </section>

      <section id="team" style={{ borderTop: '1px solid var(--line-soft)' }}>
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow" style={{ marginBottom: 22 }}>Team</div>
              <h2>Three partners,<br />one shared vision.</h2>
            </div>
            <p>Every engagement is led directly by a founding partner — no account managers, no hand-offs.</p>
          </div>
          <div className="team reveal-stagger">
            {team.map((m) => (
              <div key={m.initials} className="teammate">
                <div className={`teammate-portrait ${m.color}`} data-initials={m.initials} />
                <div className="teammate-body">
                  <h4>{m.name}</h4>
                  <div className="role">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quote">
        <div className="container">
          <blockquote>&ldquo;They showed up as a team, not a vendor — and we still can&apos;t imagine shipping v2 without them.&rdquo;</blockquote>
          <cite>— Head of Product, Ledger Corp</cite>
        </div>
      </section>



      <section>
        <div className="container">
          <div className="cta-band reveal">
            <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: 24 }}>Talk to the team</div>
            <h2>Want to see how we actually work?<br />Hop on a call.</h2>
            <p>30 minutes, no deck. We&apos;ll walk through a live engagement dashboard and answer anything.</p>
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
