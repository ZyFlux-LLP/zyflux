'use client'

import dynamic from 'next/dynamic'

const SharedInteractions = dynamic(() => import('./SharedInteractions'), { ssr: false })
const GSAPAnimations = dynamic(() => import('./GSAPAnimations'), { ssr: false })

export default function ClientAnimations() {
  return (
    <>
      <SharedInteractions />
      <GSAPAnimations />
    </>
  )
}
