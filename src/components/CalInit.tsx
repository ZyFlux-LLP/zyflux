'use client'

import { useEffect } from 'react'

const NAMESPACE = '30min'

declare global {
  interface Window { Cal?: any }
}

export default function CalInit() {
  useEffect(() => {
    if (window.Cal) return
    ;(function (C: any, A: string, L: string) {
      const p = (a: any, ar: any) => a.q.push(ar)
      C.Cal = C.Cal || function () {
        const cal = C.Cal, ar = arguments as any
        if (!cal.loaded) {
          cal.ns = {}; cal.q = cal.q || []
          C.document.head.appendChild(C.document.createElement('script')).src = A
          cal.loaded = true
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments) }
          const ns = ar[1]; api.q = []
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
    window.Cal.ns[NAMESPACE]('ui', {
      hideEventTypeDetails: false,
      layout: 'month_view',
    })
  }, [])
  return null
}
