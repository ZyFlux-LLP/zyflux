'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { runCountUp } from '@/lib/countUp'

export default function SharedInteractions() {
  const pathname = usePathname()
  const rafRef = useRef<number>(0)
  const mouseRef = useRef({ targetX: 0, targetY: 0, curX: 0, curY: 0 })

  // Count-up on scroll
  useEffect(() => {
    const countIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const el = e.target as HTMLElement
          runCountUp(el)
          countIO.unobserve(el)
        })
      },
      { threshold: 0.4 }
    )

    // Non-hero counters: fire on scroll intersection
    document.querySelectorAll<HTMLElement>('[data-count]').forEach((c) => {
      if (!c.closest('.hero')) countIO.observe(c)
    })

    // Hero counters: start count-up immediately rather than waiting for animationend.
    // With Lighthouse's 4x CPU throttle, useEffect runs at ~2500ms but animationend
    // fires at 1900ms (CSS) — the event is always missed, leaving the counter stuck at "0+".
    // Starting immediately ensures the final value is reached before the element fades in,
    // so LCP sees the completed "60+" on first paint instead of the last count-up frame.
    document.querySelectorAll<HTMLElement>('.hero [data-count]').forEach((el) => {
      const suffix = el.dataset.suffix || ''
      const decimals = parseInt(el.dataset.decimals || '0', 10)
      el.textContent = (decimals ? (0).toFixed(decimals) : '0') + suffix
      runCountUp(el)
    })

    return () => { countIO.disconnect() }
  }, [pathname])

  // Magnetic buttons — re-attach on every navigation (pointer devices only)
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = []
    document.querySelectorAll<HTMLElement>('.magnetic').forEach((el) => {
      const move = (e: MouseEvent) => {
        const r = el.getBoundingClientRect()
        const x = e.clientX - r.left - r.width / 2
        const y = e.clientY - r.top - r.height / 2
        el.style.transform = `translate(${x * 0.15}px, ${y * 0.25}px)`
      }
      const leave = () => { el.style.transform = '' }
      el.addEventListener('mousemove', move)
      el.addEventListener('mouseleave', leave)
      handlers.push({ el, move, leave })
    })
    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('mousemove', move)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [pathname])

  // Parallax — persistent RAF loop, only active on pointer devices with blobs
  useEffect(() => {
    const parallaxEls = document.querySelectorAll<HTMLElement>('[data-parallax]')
    if (!parallaxEls.length) return
    // No mousemove events on touch-only devices — skip the RAF loop entirely
    if (window.matchMedia('(hover: none)').matches) return

    const m = mouseRef.current
    const onMouseMove = (e: MouseEvent) => {
      m.targetX = (e.clientX / window.innerWidth - 0.5) * 40
      m.targetY = (e.clientY / window.innerHeight - 0.5) * 40
    }
    const tick = () => {
      m.curX += (m.targetX - m.curX) * 0.06
      m.curY += (m.targetY - m.curY) * 0.06
      parallaxEls.forEach((el) => {
        const k = parseFloat(el.dataset.parallax || '0.04')
        el.style.setProperty('--px', `${m.curX * k * 10}px`)
        el.style.setProperty('--py', `${m.curY * k * 10}px`)
        if (!el.classList.contains('hero-blob')) {
          el.style.transform = `translate(${m.curX * k * 10}px, ${m.curY * k * 10}px)`
        }
      })
      rafRef.current = requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', onMouseMove)
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [pathname])

  return null
}
