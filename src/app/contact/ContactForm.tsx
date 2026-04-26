'use client'

import { useState } from 'react'

type Group = 'type' | 'budget'

export default function ContactForm() {
  const [typeChip, setTypeChip] = useState('')
  const [budgetChip, setBudgetChip] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const selectChip = (group: Group, val: string) => {
    if (group === 'type') setTypeChip(val)
    else setBudgetChip(val)
  }

  const projectTypes = ['Web platform', 'Mobile app', 'AI / agents', 'Cloud / infra', 'Design system', 'Not sure yet']
  const budgets = ['< $25k', '$25–75k', '$75–200k', '$200k+', 'Retainer']

  if (submitted) {
    return (
      <div className="success show">
        <div className="tick">✓</div>
        <h3>Brief received.</h3>
        <p>You&apos;ll hear back within one business day — usually within 2 hours IST.</p>
      </div>
    )
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-head">
        <div className="eyebrow" style={{ marginBottom: 20 }}>New project brief</div>
        <h2>Start a conversation.</h2>
        <p>Six quick questions. Roughly four minutes.</p>
      </div>

      <div>
        <label style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--ink-dim)', marginBottom: 12, display: 'block' }}>
          01 · What kind of project?
        </label>
        <div className="chip-group">
          {projectTypes.map((t) => (
            <button
              key={t}
              type="button"
              className={`chip${typeChip === t ? ' active' : ''}`}
              onClick={() => selectChip('type', t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="field-grid">
        <div className="field">
          <label htmlFor="name">02 · Your name</label>
          <input id="name" type="text" placeholder="Full name" required />
        </div>
        <div className="field">
          <label htmlFor="email">03 · Work email</label>
          <input id="email" type="email" placeholder="you@company.com" required />
        </div>
        <div className="field">
          <label htmlFor="company">04 · Company</label>
          <input id="company" type="text" placeholder="Company or product name" />
        </div>
        <div className="field select-wrap">
          <label htmlFor="role">05 · Your role</label>
          <select id="role">
            <option>Founder / CEO</option>
            <option>Head of Product</option>
            <option>Engineering Lead</option>
            <option>Design Lead</option>
            <option>Operator / Other</option>
          </select>
        </div>
      </div>

      <div className="field full" style={{ marginBottom: 6 }}>
        <label htmlFor="brief">06 · The brief</label>
        <textarea id="brief" placeholder="What are you trying to ship? What's the deadline? What's in the way?" />
      </div>

      <div>
        <label style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--ink-dim)', margin: '24px 0 12px', display: 'block' }}>
          Budget range
        </label>
        <div className="chip-group budget-chips">
          {budgets.map((b) => (
            <button
              key={b}
              type="button"
              className={`chip${budgetChip === b ? ' active' : ''}`}
              onClick={() => selectChip('budget', b)}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <div className="form-actions">
        <span className="fine">Encrypted in transit · We never share briefs.</span>
        <button type="submit" className="submit">
          Send brief
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M7 17L17 7M10 7h7v7" />
          </svg>
        </button>
      </div>
    </form>
  )
}
