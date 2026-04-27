'use client'

import dynamic from 'next/dynamic'

const SharedInteractions = dynamic(() => import('./SharedInteractions'), { ssr: false })
const ScrollReveal = dynamic(() => import('./ScrollReveal'), { ssr: false })
const CalInit = dynamic(() => import('./CalInit'), { ssr: false })

export default function ClientAnimations() {
  return (
    <>
      <SharedInteractions />
      <ScrollReveal />
      <CalInit />
    </>
  )
}
