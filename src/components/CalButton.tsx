'use client'

import type { ReactNode } from 'react'

const CAL_LINK = 'zyflux/30min'
const NAMESPACE = '30min'

declare global { interface Window { Cal?: any } }

// Singleton promise — concurrent clicks won't double-load the script
let ready: Promise<void> | null = null

function loadCal(): Promise<void> {
  if (ready) return ready
  ready = new Promise<void>((resolve) => {
    ;(function (C: any, A: string, L: string) {
      const p = (a: any, ar: any) => a.q.push(ar)
      C.Cal = C.Cal || function () {
        const cal = C.Cal, ar = arguments as any
        if (!cal.loaded) {
          cal.ns = {}
          cal.q = cal.q || []
          const s = C.document.createElement('script')
          s.src = A
          s.onload = () => resolve()
          C.document.head.appendChild(s)
          cal.loaded = true
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments) }
          const ns = ar[1]
          api.q = []
          if (typeof ns === 'string') {
            cal.ns[ns] = cal.ns[ns] || api
            p(cal.ns[ns], ar)
            p(cal, ['initNamespace', ns])
          } else p(cal, ar)
          return
        }
        p(cal, ar)
      }
    })(window, 'https://app.cal.com/embed/embed.js', 'init')
    window.Cal('init', NAMESPACE, { origin: 'https://cal.com' })
    window.Cal.ns[NAMESPACE]('ui', { hideEventTypeDetails: false, layout: 'month_view' })
  })
  return ready
}

interface CalButtonProps { className?: string; children: ReactNode }

export default function CalButton({ className, children }: CalButtonProps) {
  async function handleClick() {
    await loadCal()
    window.Cal.ns[NAMESPACE]('modal', { calLink: CAL_LINK, config: { layout: 'month_view' } })
  }

  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  )
}
