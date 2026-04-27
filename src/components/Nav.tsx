'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ZyfluxLogo from './ZyfluxLogo'
import CalButton from './CalButton'
import { useEffect, useRef, useState } from 'react'

export default function Nav() {
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      if (y > lastY.current && y > 200) setHidden(true)
      else setHidden(false)
      lastY.current = y
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav ref={navRef} className={`nav${hidden ? ' nav-hidden' : ''}`}>
      <Link href="/" className="nav-brand">
        <ZyfluxLogo size={24} />
        <span>Zyflux</span>
      </Link>
      <div className={`nav-links${open ? ' nav-open' : ''}`}>
        <Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link>
        <Link href="/projects" className={isActive('/projects') ? 'active' : ''}>Projects</Link>
        <Link href="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
        <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
        <CalButton className="nav-cta nav-cta-mobile">Schedule a call</CalButton>
      </div>
      <CalButton className="nav-cta">Schedule a call</CalButton>
      <button
        className="nav-burger"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen(o => !o)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {open
            ? <path d="M6 6l12 12M18 6l-12 12" />
            : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
    </nav>
  )
}
