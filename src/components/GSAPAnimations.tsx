'use client'

import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { runCountUp } from '@/lib/countUp'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function GSAPAnimations() {
  const pathname = usePathname()

  useGSAP(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill())

    const isHome = pathname === '/'

    if (isHome) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // H1 lines rise up
      const lines = gsap.utils.toArray<HTMLElement>('.hero h1 .line span')
      if (lines.length) {
        tl.fromTo(lines,
          { y: '110%' },
          { y: '0%', duration: 1.1, ease: 'power4.out', stagger: 0.13 },
          0.15
        )
      }

      // Hero side: slide up only — no opacity hide so LCP element is visible immediately
      const sideEls = gsap.utils.toArray<HTMLElement>('.hero-side > *')
      if (sideEls.length) {
        tl.fromTo(sideEls,
          { y: 22 },
          { y: 0, duration: 0.85, stagger: 0.12, ease: 'power3.out' },
          0.7
        )
      }

      // Metrics + trust — fade up after side content
      const heroReveal = gsap.utils.toArray<HTMLElement>('.hero .reveal')
      if (heroReveal.length) {
        tl.fromTo(heroReveal,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 0.8, stagger: 0.14,
            onComplete: () => {
              document.querySelectorAll<HTMLElement>('.hero [data-count]')
                .forEach(runCountUp)
            },
          },
          1.1
        )
      }

      // Scroll indicator
      tl.to('.hero-scroll', { opacity: 1, duration: 0.7 }, 1.5)
    }

    if (!isHome) {
      const pageLines = gsap.utils.toArray<HTMLElement>('.page-hero h1 .line span')
      const pageEyebrow = document.querySelector<HTMLElement>('.page-hero-eyebrow')
      const pageSub = document.querySelector<HTMLElement>('.page-hero-sub')

      const ptl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      if (pageEyebrow) {
        ptl.fromTo(pageEyebrow,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.1
        )
      }

      if (pageLines.length) {
        ptl.fromTo(pageLines,
          { y: '110%' },
          { y: '0%', duration: 1.1, stagger: 0.11 },
          0.25
        )
      }

      if (pageSub) {
        ptl.fromTo(pageSub,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          0.75
        )
      }
    }

    // ── Scroll reveals for sections OUTSIDE the hero ─────────────
    const revealEls = gsap.utils.toArray<HTMLElement>('.reveal').filter(
      (el) => !el.closest('.hero')
    )
    revealEls.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        }
      )
    })

    // ── Stagger groups outside hero ───────────────────────────────
    const staggerGroups = gsap.utils.toArray<HTMLElement>('.reveal-stagger').filter(
      (el) => !el.closest('.hero')
    )
    staggerGroups.forEach((group) => {
      const children = Array.from(group.children) as HTMLElement[]
      gsap.fromTo(children,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0,
          duration: 0.75, ease: 'power3.out', stagger: 0.09,
          scrollTrigger: { trigger: group, start: 'top 85%', once: true },
        }
      )
    })

  }, { dependencies: [pathname], revertOnUpdate: true })

  return null
}
