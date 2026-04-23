'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'How do engagements typically start?',
    a: 'A 30-minute intro call, then a fixed-price one-week discovery sprint where we align on scope, constraints, and success metrics. From there, most clients move into a 12-week build engagement.',
  },
  {
    q: "What's a typical team look like?",
    a: 'A pod of 3–5 people embedded with your team: one product lead, one designer, two to three engineers. No separate account manager — the pod lead is your primary contact.',
  },
  {
    q: 'Do you work with early-stage startups?',
    a: 'Yes — roughly a third of our work is with pre-Series-A startups. We offer a reduced-rate MVP engagement for well-funded early teams.',
  },
  {
    q: 'Can you join an existing codebase?',
    a: 'Absolutely. About half of our engagements are embedded work inside an existing repo. We do a one-week audit first and propose where to plug in.',
  },
  {
    q: 'What do you not do?',
    a: 'No pure creative branding, no printed collateral, no staff augmentation (we only ship as a full pod), and no unpaid pitch work.',
  },
]

export default function FAQSection() {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set([0]))

  const toggle = (i: number) => {
    setOpenSet(prev => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-grid">
          <div className="reveal">
            <div className="eyebrow" style={{ marginBottom: 22 }}>FAQ</div>
            <h2>Quick answers<br />before you write.</h2>
          </div>

          <div className="reveal-stagger">
            {faqs.map((item, i) => (
              <div key={i} className={`faq-item${openSet.has(i) ? ' open' : ''}`}>
                <button
                  className="faq-summary"
                  onClick={() => toggle(i)}
                  aria-expanded={openSet.has(i)}
                >
                  <span>{item.q}</span>
                  <span className="plus">+</span>
                </button>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
