import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const HS_TOKEN = process.env.HUBSPOT_API_KEY
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL ?? 'team@zyflux.com'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// ─── HubSpot ─────────────────────────────────────────────────────────────────
// Only scope needed: crm.objects.contacts.write

async function upsertContact(props: Record<string, string>): Promise<void> {
  if (!HS_TOKEN) return

  const res = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST',
    headers: { Authorization: `Bearer ${HS_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ properties: props }),
  })

  if (res.ok) return

  if (res.status === 409) {
    const err = await res.json()
    // Extract the existing contact ID and patch it with the latest data
    const match = (err.message as string | undefined)?.match(/Existing ID:\s*(\d+)/)
    const existingId = match?.[1]
    if (existingId) {
      const { email: _e, ...updateProps } = props
      void _e
      await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${existingId}`, {
        method: 'PATCH',
        headers: { Authorization: `Bearer ${HS_TOKEN}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ properties: { ...updateProps, hs_lead_status: 'NEW' } }),
      })
    }
    return
  }

  const text = await res.text()
  throw new Error(`HubSpot ${res.status}: ${text}`)
}

// ─── Email template ──────────────────────────────────────────────────────────

function row(label: string, value: string) {
  if (!value) return ''
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #1e1e1e;vertical-align:top;width:120px">
        <span style="font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#555;font-family:monospace">${label}</span>
      </td>
      <td style="padding:10px 0 10px 24px;border-bottom:1px solid #1e1e1e;color:#e0e0e0;font-size:14px;vertical-align:top;white-space:pre-wrap">${value}</td>
    </tr>`
}

function buildEmail(fields: {
  name: string; email: string; company: string; role: string;
  projectType: string; budget: string; brief: string;
}) {
  const { name, email, company, role, projectType, budget, brief } = fields
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>New project brief</title></head>
<body style="margin:0;padding:0;background:#080808;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,sans-serif">
  <div style="max-width:580px;margin:48px auto;background:#111;border:1px solid #1e1e1e;border-radius:12px;overflow:hidden">

    <div style="padding:32px 40px;border-bottom:1px solid #1e1e1e">
      <div style="font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#555;font-family:monospace;margin-bottom:10px">New project brief · Zyflux</div>
      <div style="font-size:22px;font-weight:500;color:#fff;letter-spacing:-0.02em">${name}</div>
      ${company ? `<div style="font-size:14px;color:#888;margin-top:4px">${company}</div>` : ''}
    </div>

    <div style="padding:32px 40px">
      <table style="width:100%;border-collapse:collapse">
        ${row('Email', email)}
        ${row('Role', role)}
        ${row('Project', projectType)}
        ${row('Budget', budget)}
        ${row('Brief', brief)}
      </table>
    </div>

    <div style="padding:20px 40px 32px">
      <a href="mailto:${email}" style="display:inline-block;padding:10px 20px;background:#fff;color:#000;font-size:13px;font-weight:500;border-radius:6px;text-decoration:none">Reply to ${name.split(' ')[0]}</a>
    </div>

  </div>
  <div style="text-align:center;padding:24px;font-size:11px;color:#333;font-family:monospace">zyflux.com</div>
</body>
</html>`
}

// ─── Route handler ───────────────────────────────────────────────────────────

export async function POST(req: Request) {
  let body: Record<string, string>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { name, email, company = '', role = '', projectType = '', budget = '', brief = '' } = body

  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
  }

  const [firstname, ...rest] = name.trim().split(' ')
  const lastname = rest.join(' ')

  const errors: string[] = []

  // 1. HubSpot contact upsert (crm.objects.contacts.write only)
  await upsertContact({
    email:          email.trim().toLowerCase(),
    firstname,
    lastname,
    company,
    jobtitle:       role,
    lifecyclestage: 'lead',
    hs_lead_status: 'NEW',
  }).catch((e: Error) => errors.push(`HubSpot: ${e.message}`))

  // 2. Email notification
  if (resend) {
    await resend.emails.send({
      from:    'Zyflux Leads <leads@zyflux.com>',
      to:      [NOTIFY_EMAIL],
      replyTo: email.trim(),
      subject: `New brief — ${name}${company ? ` · ${company}` : ''}`,
      html:    buildEmail({ name, email, company, role, projectType, budget, brief }),
    }).catch((e) => errors.push(`Email: ${(e as Error).message}`))
  }

  if (errors.length) console.error('[contact] partial failures:', errors)

  return NextResponse.json({ ok: true })
}
