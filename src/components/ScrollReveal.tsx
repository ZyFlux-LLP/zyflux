'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const cleanup: (() => void)[] = []

    // .reveal elements outside .hero
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>('.reveal')).filter(
      (el) => !el.closest('.hero')
    )
    const revealObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('in-view')
          obs.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0 }
    )
    revealEls.forEach((el) => revealObs.observe(el))
    cleanup.push(() => revealObs.disconnect())

    // .reveal-stagger groups outside .hero
    const staggerGroups = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal-stagger')
    ).filter((el) => !el.closest('.hero'))

    const staggerObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const group = entry.target as HTMLElement
          Array.from(group.children).forEach((child, i) => {
            (child as HTMLElement).style.animationDelay = `${i * 0.09}s`
          })
          group.classList.add('in-view')
          obs.unobserve(group)
        })
      },
      { rootMargin: '0px 0px -15% 0px', threshold: 0 }
    )
    staggerGroups.forEach((el) => staggerObs.observe(el))
    cleanup.push(() => staggerObs.disconnect())

    return () => cleanup.forEach((fn) => fn())
  }, [pathname])

  return null
}
