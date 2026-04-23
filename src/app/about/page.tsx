import type { Metadata } from 'next'
import CalButton from '@/components/CalButton'

export const metadata: Metadata = {
  title: 'About — Zyflux',
  description: 'A small studio, building serious software since 2023. Fourteen engineers, designers, and product operators.',
}

const team = [
  { initials: 'AR', name: 'Aarav R.', role: 'Co-founder · Engineering', color: 'p-a' },
  { initials: 'KN', name: 'Kavya N.', role: 'Co-founder · Product', color: 'p-b' },
  { initials: 'SD', name: 'Sid D.', role: 'Co-founder · Design', color: 'p-c' },
  { initials: 'MI', name: 'Meher I.', role: 'Staff Engineer', color: 'p-d' },
  { initials: 'RT', name: 'Rohan T.', role: 'Cloud & Platform', color: 'p-e' },
  { initials: 'NV', name: 'Nadia V.', role: 'Design Systems', color: 'p-f' },
  { initials: 'JP', name: 'Joel P.', role: 'Mobile Lead', color: 'p-g' },
  { initials: 'IS', name: 'Ira S.', role: 'AI Engineering', color: 'p-h' },
]

const timeline = [
  { year: '2023', title: 'Founded', desc: 'Three co-founders, one office in Bengaluru, two paying clients in month one.', stat: 'Team 3 · Projects 04 · ARR ~ ₹1.2Cr' },
  { year: '2024', title: 'First platform engagements', desc: 'Moved from one-off builds to multi-quarter platform work. Added the design systems and mobile practice.', stat: 'Team 8 · Projects 16 · ARR ~ ₹3.8Cr' },
  { year: '2025', title: 'AI practice + EU presence', desc: 'Spun up the AI & agents practice. Opened a small operations hub in Berlin to serve EU clients in-timezone.', stat: 'Team 12 · Projects 29 · ARR ~ ₹7.4Cr' },
  { year: '2026', title: 'Where we are now', desc: 'Fourteen people, 24 active engagements, and a waitlist we\'re trying hard to keep short.', stat: 'Team 14 · Projects 60+ · ARR — steady' },
]

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow page-hero-eyebrow" style={{ marginBottom: 28 }}>About Zyflux LLP</div>
          <h1>
            <span className="line"><span>A small studio,</span></span>
            <span className="line"><span>building serious software since 2023.</span></span>
          </h1>
          <p className="page-hero-sub">Fourteen engineers, designers, and product operators — distributed across Bengaluru, Pune, and Berlin. We pick a few engagements at a time and give them the whole team.</p>
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
              <h2>Fourteen people,<br />no junior/senior split.</h2>
            </div>
            <p>Everyone here has shipped products end-to-end. Titles are descriptive, not hierarchical.</p>
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
          <div className="section-head reveal">
            <div>
              <div className="eyebrow" style={{ marginBottom: 22 }}>Timeline</div>
              <h2>Three years,<br />one steady curve.</h2>
            </div>
            <p>No acquisitions, no pivots. A small studio growing carefully, one engagement at a time.</p>
          </div>
          <div className="timeline reveal-stagger">
            {timeline.map((t) => (
              <div key={t.year} className="timeline-item">
                <div className="timeline-row">
                  <div className="timeline-year">{t.year}</div>
                  <div><h3>{t.title}</h3><p>{t.desc}</p></div>
                  <div><p style={{ color: 'var(--ink-dim)', fontSize: 14 }}>{t.stat}</p></div>
                </div>
              </div>
            ))}
          </div>
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
