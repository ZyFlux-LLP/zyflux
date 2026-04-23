'use client'

import { useState } from 'react'

type Category = 'all' | 'web' | 'mobile' | 'health' | 'other'

const projects: {
  id: number; cat: Category; size: 'full' | 'lg' | 'md' | 'sm';
  meta: string; client: string; thumb: string;
  title: string; desc: string; tags: string[];
  stats: { n: string; l: string }[] | null;
  url?: string;
}[] = [
  {
    id: 1, cat: 'other' as Category, size: 'full',
    meta: '01 · Fintech · Backend · Live', client: 'MissCallPay (Minkville)',
    thumb: 't-misscall',
    title: 'MissCallPay — cashless payment backend for rural India',
    desc: 'Full backend for a fintech platform enabling digital payments via a simple missed call — no smartphone or internet required. Powered by data-packet technology over voice channels to reach unbanked and rural populations across India. Winner of MahaStartupWeek 2019 Award for Inclusive Fintech.',
    tags: ['Backend', 'Fintech', 'APIs', 'Data Packets', 'Payments', 'Node.js'],
    stats: [{ n: '0G', l: 'Internet needed' }, { n: '2019', l: 'MahaStartup Award' }, { n: '100%', l: 'Feature phone support' }],
    url: 'https://ind.misscallpay.com/',
  },
  {
    id: 2, cat: 'web' as Category, size: 'lg',
    meta: '02 · Media & Publishing · Live', client: 'Dainik Nirnayak',
    thumb: 't-dainik',
    title: 'Dainik Nirnayak CMS — newspaper production platform',
    desc: 'Digitized the entire newspaper production and advertisement billing workflow with a custom web-based application. Centralized editorial uploads, real-time approval flows, PDF generation, client billing, and GST-based invoicing into a single dashboard.',
    tags: ['Web App', 'CMS', 'Editorial Workflow', 'PDF Generation', 'GST Invoicing', 'Dashboard'],
    stats: null,
    url: 'https://nirnayaknews.com/',
  },
  {
    id: 3, cat: 'web' as Category, size: 'md',
    meta: '03 · Interior Design · Live', client: 'Zara James Studio',
    thumb: 't-interior',
    title: 'Zara James Studio — luxury interior design portfolio',
    desc: 'Bespoke portfolio website for a Mumbai-based luxury residential interior design firm. Image-first case study layout, dark-mode toggle, and refined typography showcasing projects across India and international locations.',
    tags: ['Next.js', 'Portfolio', 'Dark Mode', 'Image Optimisation', 'Responsive'],
    stats: null,
    url: 'https://www.zarajamesstudio.com/',
  },
  {
    id: 4, cat: 'web' as Category, size: 'md',
    meta: '04 · Sports & Sailing · Live', client: 'Mumbai Meridians',
    thumb: 't-sailing',
    title: 'Mumbai Meridians — ISL sailing franchise website',
    desc: 'Multi-page website for India\'s ISL 2026 sailing franchise. Live event countdown, team roster, junior academy enrollment for ages 6–18, training programmes across multiple boat classes, and media gallery.',
    tags: ['Next.js', 'Sports', 'Event Countdown', 'Responsive', 'WebP'],
    stats: null,
    url: 'https://www.mumbaimeridians.com/',
  },
  {
    id: 5, cat: 'web' as Category, size: 'sm',
    meta: '05 · Construction & Steel · Live', client: 'Metal Barns India',
    thumb: 't-steel',
    title: 'Metal Barns India — pre-engineered steel buildings',
    desc: 'Corporate website for an ISO 9001:2015 certified pre-engineered steel building company. Serves clients including Mercedes-Benz, L&T, Siemens, and DRDO with full EPC solutions across industrial and commercial construction.',
    tags: ['Next.js', 'Corporate', 'Construction', 'Responsive', 'Web Design'],
    stats: null,
    url: 'https://metal-barns.vercel.app/',
  },
  {
    id: 6, cat: 'web' as Category, size: 'lg',
    meta: '06 · Travel & Tourism · Live', client: 'Prasthanam Holidays',
    thumb: 't-travel',
    title: 'Prasthanam Holidays — full-stack tour platform',
    desc: 'Comprehensive tour agency website with advanced booking systems, customer management, and personalised travel experiences. Built with a modern stack including payment integration and CMS-driven package listings.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'SEO'],
    stats: [{ n: '300%', l: 'Booking increase' }, { n: '+250%', l: 'User engagement' }, { n: '12.5%', l: 'Conversion rate' }],
  },
  {
    id: 7, cat: 'mobile' as Category, size: 'md',
    meta: '07 · Social & Dating · Live', client: 'Consulting Wizz',
    thumb: 't-dating',
    title: 'SparksFly — dating app with AI matching',
    desc: 'Modern dating application with advanced matching algorithms, real-time messaging, and an intuitive UX designed for meaningful connections. Delivered in 6 weeks.',
    tags: ['Flutter', 'Firebase', 'TensorFlow', 'Real-time Chat'],
    stats: [{ n: '85%', l: 'User retention' }, { n: '10K+', l: 'Active users' }, { n: '68%', l: 'Match success' }],
  },
  {
    id: 8, cat: 'health' as Category, size: 'md',
    meta: '08 · Healthcare & AI · Prototype', client: 'Zyflux Labs',
    thumb: 't-access',
    title: 'Smart Accessibility Device — AI navigation for the visually impaired',
    desc: 'AI-powered navigation assistance device integrating computer vision and edge inference on Raspberry Pi for enhanced mobility of visually impaired users. 94% obstacle detection accuracy.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Raspberry Pi'],
    stats: [{ n: '94%', l: 'Accuracy rate' }, { n: '96%', l: 'User satisfaction' }, { n: '12h', l: 'Battery life' }],
  },
  {
    id: 9, cat: 'mobile' as Category, size: 'sm',
    meta: '09 · Premium Dating · Live', client: 'Consulting Wizz',
    thumb: 't-privacy',
    title: 'Illuzn — privacy-first dating platform',
    desc: 'Sophisticated dating platform emphasising safety with identity verification, secure chat, in-app reporting, and multi-layer moderation. 150% user growth post-launch.',
    tags: ['React Native', 'GraphQL', 'PostgreSQL', 'Redis'],
    stats: null,
  },
  {
    id: 10, cat: 'web' as Category, size: 'sm',
    meta: '10 · Media Sharing · Live', client: 'YouShare',
    thumb: 't-social',
    title: 'YouShare — social media web app',
    desc: 'Dynamic platform for discovering, saving, and sharing visual content with personalised boards. 3K+ daily users, 8.2 min average session time.',
    tags: ['ReactJS', 'Tailwind CSS', 'Sanity', 'JavaScript'],
    stats: null,
  },
  {
    id: 11, cat: 'other' as Category, size: 'sm',
    meta: '11 · Developer Tool · Live', client: 'Zyflux Labs',
    thumb: 't-compress',
    title: 'Image Compressor — cross-platform optimisation tool',
    desc: 'Cross-platform image compressor preserving quality while cutting file size by up to 72%. 5K+ installs, 4.8/5 feedback rating from designers and developers.',
    tags: ['Python', 'Kivy', 'Tkinter', 'Swift'],
    stats: null,
  },
  {
    id: 12, cat: 'mobile' as Category, size: 'md',
    meta: '12 · Food Delivery · Live', client: 'Namma Pondy',
    thumb: 't-food',
    title: 'Namma Pondy — hyperlocal food delivery',
    desc: 'Local food delivery app connecting Pondicherry users with home chefs and restaurants via geo-location and live order tracking. Three-role architecture: customer, vendor, delivery.',
    tags: ['Flutter', 'FlutterFlow', 'Firebase', 'Geo-location'],
    stats: [{ n: '30K+', l: 'Orders delivered' }, { n: '120+', l: 'Vendors' }, { n: '4.7/5', l: 'App rating' }],
  },
  {
    id: 13, cat: 'mobile' as Category, size: 'md',
    meta: '13 · Hospitality · Live', client: 'Metoospace',
    thumb: 't-hotel',
    title: 'Metoospace — hotel booking platform',
    desc: 'Seamless hotel booking app with real-time room availability, map-based UI, secure payment, and admin dashboards. 40K+ bookings across 300+ hotel partners.',
    tags: ['Flutter', 'FlutterFlow', 'Firebase', 'Payments'],
    stats: [{ n: '40K+', l: 'Bookings' }, { n: '300+', l: 'Hotel partners' }, { n: '2.5min', l: 'Avg booking time' }],
  },
]

const filters: { label: string; value: Category }[] = [
  { label: 'All work', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Health & AI', value: 'health' },
  { label: 'Other', value: 'other' },
]

export default function ProjectsClient() {
  const [active, setActive] = useState<Category>('all')

  const visible = projects.filter((p) => active === 'all' || p.cat === active)

  return (
    <>
      <div className="filters">
        {filters.map((f) => (
          <button
            key={f.value}
            className={`filter${active === f.value ? ' active' : ''}`}
            onClick={() => setActive(f.value)}
          >
            {f.label}
          </button>
        ))}
        <span className="filter-count">{visible.length}&nbsp;/ 13 RESULTS</span>
      </div>

      <div className="project-grid">
        {projects.map((p) => (
          <article
            key={p.id}
            className={`project size-${p.size}${active !== 'all' && p.cat !== active ? ' hidden' : ''}`}
            data-cat={p.cat}
          >
            <div className={`p-thumb ${p.thumb}`} />
            <div className="p-body">
              <div className="p-meta"><span>{p.meta}</span><span>{p.client}</span></div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="p-tags">
                {p.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              {p.stats && (
                <div className="p-stats">
                  {p.stats.map((s) => (
                    <div key={s.l} className="s">
                      <div className="n">{s.n}</div>
                      <div className="l">{s.l}</div>
                    </div>
                  ))}
                </div>
              )}
              {p.url && (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="p-live-link">
                  View live →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
