'use client'

import { useState } from 'react'

type Group = 'type' | 'budget'

const roles = ['Founder / CEO', 'Head of Product', 'Engineering Lead', 'Design Lead', 'Operator / Other']

export default function ContactForm() {
  const [typeChip, setTypeChip] = useState('')
  const [budgetChip, setBudgetChip] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [role, setRole] = useState(roles[0])
  const [roleOpen, setRoleOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const fd = new FormData(e.currentTarget)
    const body = {
      name:        fd.get('name') as string,
      email:       fd.get('email') as string,
      company:     fd.get('company') as string,
      role,
      projectType: typeChip,
      budget:      budgetChip,
      brief:       fd.get('brief') as string,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!res.ok) throw new Error('submission_failed')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Email us directly at team@zyflux.com')
    } finally {
      setLoading(false)
    }
  }

  const selectChip = (group: Group, val: string) => {
    if (group === 'type') setTypeChip(val)
    else setBudgetChip(val)
  }

  const projectTypes = ['ERP Systems', 'CRM Platforms', 'Web Platforms', 'Mobile Apps', 'AI & Agents', 'Digital Marketing']
  const budgets = ['$1–5k', '$5–10k', '$10–50k', '$50k+', 'Custom pricing']

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
          <input id="name" name="name" type="text" placeholder="Full name" required />
        </div>
        <div className="field">
          <label htmlFor="email">03 · Work email</label>
          <input id="email" name="email" type="email" placeholder="you@company.com" required />
        </div>
        <div className="field">
          <label htmlFor="company">04 · Company</label>
          <input id="company" name="company" type="text" placeholder="Company or product name" />
        </div>
        <div className="field select-wrap">
          <label>05 · Your role</label>
          <button
            type="button"
            className="custom-select-trigger"
            onClick={() => setRoleOpen((o) => !o)}
            aria-haspopup="listbox"
            aria-expanded={roleOpen}
          >
            {role}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.2s', transform: roleOpen ? 'rotate(180deg)' : 'none' }}><path d="M6 9l6 6 6-6"/></svg>
          </button>
          {roleOpen && (
            <ul className="custom-select-menu" role="listbox">
              {roles.map((r) => (
                <li
                  key={r}
                  role="option"
                  aria-selected={role === r}
                  className={role === r ? 'active' : ''}
                  onClick={() => { setRole(r); setRoleOpen(false) }}
                >
                  {r}
                </li>
              ))}
            </ul>
          )}
          <input type="hidden" name="role" value={role} />
        </div>
      </div>

      <div className="field full" style={{ marginBottom: 6 }}>
        <label htmlFor="brief">06 · The brief</label>
        <textarea id="brief" name="brief" placeholder="What are you trying to ship? What's the deadline? What's in the way?" />
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

      {error && (
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'oklch(0.65 0.18 25)', marginTop: 8 }}>
          {error}
        </p>
      )}

      <div className="form-actions">
        <span className="fine">Encrypted in transit · We never share briefs.</span>
        <button type="submit" className="submit" disabled={loading}>
          {loading ? 'Sending…' : 'Send brief'}
          {!loading && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M7 17L17 7M10 7h7v7" />
            </svg>
          )}
        </button>
      </div>
    </form>
  )
}
