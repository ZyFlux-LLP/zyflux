# SEO Audit — Zyflux (zyflux.com)

**Site type:** B2B product engineering studio  
**Stack:** Next.js App Router, TypeScript  
**Pages:** Homepage, About, Projects, Contact (4 total)  
**Audit date:** 2026-04-27

---

## Executive Summary

The site has solid content and strong copywriting but is missing most of the technical SEO foundations. There is **no sitemap, no robots.txt, no Open Graph metadata, no structured data, no canonical configuration**, and the entire projects portfolio is rendered client-side with no individual URLs. None of these are hard to fix — they just haven't been set up yet.

**Top 5 priorities:**
1. Add `sitemap.ts` and `robots.ts`
2. Configure `metadataBase` + Open Graph on all pages
3. Add Organization/LocalBusiness JSON-LD schema
4. Fix broken footer anchor links (`#careers`, `#press`)
5. Make project content server-renderable (or at minimum ensure Google can index it)

---

## Technical SEO Findings

### 1. No sitemap.xml
- **Impact:** High
- **Evidence:** No `sitemap.ts` in `src/app/`, no `sitemap.xml` in `/public/`
- **Fix:** Create `src/app/sitemap.ts`:

```ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://zyflux.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://zyflux.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://zyflux.com/projects', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://zyflux.com/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
  ]
}
```
- **Priority:** Critical

### 2. No robots.txt
- **Impact:** Medium
- **Evidence:** No `robots.ts` in `src/app/`, no `robots.txt` in `/public/`
- **Fix:** Create `src/app/robots.ts`:

```ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://zyflux.com/sitemap.xml',
  }
}
```
- **Priority:** Critical

### 3. `metadataBase` not set — OG URLs unresolvable
- **Impact:** High
- **Evidence:** `src/app/layout.tsx` has no `metadataBase` in the `metadata` export. Next.js cannot generate absolute URLs for OG images, canonical tags, or social cards without it.
- **Fix:** Add to `layout.tsx` metadata:

```ts
export const metadata: Metadata = {
  metadataBase: new URL('https://zyflux.com'),
  // ... rest
}
```
- **Priority:** Critical

### 4. No canonical URL configuration
- **Impact:** Medium
- **Evidence:** No `alternates.canonical` in any page's metadata object. If the site is accessible at both `www.` and non-`www.`, or over both HTTP/HTTPS, Google may index duplicates.
- **Fix:** Once `metadataBase` is set, add to each page:

```ts
alternates: { canonical: '/' }  // or '/about', '/projects', '/contact'
```
- **Priority:** High

### 5. No Open Graph or Twitter card metadata
- **Impact:** High
- **Evidence:** No `openGraph` or `twitter` keys in any page's metadata. Social shares will render with no image, incorrect title formatting, and no description card.
- **Fix (root layout, applies globally):**

```ts
openGraph: {
  type: 'website',
  siteName: 'Zyflux',
  locale: 'en_US',
},
twitter: {
  card: 'summary_large_image',
  site: '@zyflux',
},
```

Then override `openGraph.title` and `openGraph.description` on each page.
- **Priority:** High

---

## On-Page SEO Findings

### 6. Homepage has no unique `<meta description>`
- **Impact:** High
- **Evidence:** `src/app/page.tsx` sets its own title but no description — it inherits the root layout description. The root description is decent but the homepage should have an explicit, keyword-rich description targeting searches like "product engineering studio India" or "custom ERP development".
- **Fix:**

```ts
description: 'Zyflux is a product engineering studio in Bengaluru, Pune, and Berlin — building custom ERP, CRM, ecommerce platforms, Flutter apps, and running digital marketing for startups and enterprises.',
```
- **Priority:** High

### 7. Contact page description is placeholder-thin
- **Impact:** Medium
- **Evidence:** `src/app/contact/page.tsx` description: `'Tell us about the product. We\'ll send back a plan.'` — 43 characters, no keywords, no location, no service context.
- **Fix:**

```ts
description: 'Contact Zyflux — a product engineering studio in Bengaluru, Pune, and Berlin. Reach us at hello@zyflux.com or schedule a call. Typical projects start within two weeks.',
```
- **Priority:** Medium

### 8. About page description missing location and services
- **Impact:** Medium
- **Evidence:** `'A small studio, building serious software since 2023. Fourteen engineers, designers, and product operators.'` — accurate but has no keywords that anyone searches for.
- **Fix:**

```ts
description: 'Zyflux LLP is a product engineering studio founded in 2023, based in Bengaluru, Pune, and Berlin. We design and build ERP, CRM, ecommerce, and mobile apps for product-led teams.',
```
- **Priority:** Medium

### 9. Projects page: all content is client-side rendered
- **Impact:** High
- **Evidence:** `ProjectsClient.tsx` is a `'use client'` component containing all 13 project descriptions. The static HTML Google first receives only has the page-hero section. The filter UI hides projects via a CSS `.hidden` class — Google may not see filtered projects. There are also no individual project URLs.
- **Fix (minimal):** Move the static `projects` array to the server component (`page.tsx`) and render the full list as SSR HTML. Keep filter interactivity client-side by passing the projects as props.
- **Fix (ideal):** Create individual project pages at `/projects/[slug]` so each case study can be indexed and linked to independently.
- **Priority:** High

### 10. Hero metrics are initialized to `0+`/`0` for Google
- **Impact:** Low
- **Evidence:** `src/app/page.tsx` renders `<span data-count="60" data-suffix="+">0+</span>`. Google indexes the initial DOM — it sees "0+", "0", "0", "0" as the metric numbers.
- **Fix:** Initialize the spans with real values as text content. The count-up animation can still run from 0 on user scroll.
- **Priority:** Low

### 11. Broken footer links to removed sections
- **Impact:** Medium
- **Evidence:** `src/components/Footer.tsx` links to `/about#careers` and `/about#press`, but those sections were removed from `about/page.tsx` in a recent commit.
- **Fix:** Remove those footer links or replace them with a `/contact` link.
- **Priority:** Medium

### 12. Social links are all `href="#"` placeholders
- **Impact:** Medium
- **Evidence:** `contact/page.tsx` and `Footer.tsx` social links all point to `#`. Signals incompleteness to both users and search engines.
- **Fix:** Add real profile URLs or remove the links until ready.
- **Priority:** Medium

---

## Structured Data (Schema Markup)

### 13. No JSON-LD schema on any page
- **Impact:** High
- **Evidence:** No `<script type="application/ld+json">` anywhere in the codebase. Verified via source inspection.
- **What's missing:**
  - `Organization` schema on homepage (name, url, logo, sameAs, contactPoint)
  - `LocalBusiness` / `ProfessionalService` for three office locations
  - `WebSite` schema with sitelinks searchbox
  - `BreadcrumbList` on inner pages
- **Fix (add to root layout or homepage):**

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zyflux LLP",
    "url": "https://zyflux.com",
    "logo": "https://zyflux.com/zyflux-logo.png",
    "description": "Product engineering studio building ERP, CRM, ecommerce, apps, and digital marketing.",
    "foundingDate": "2023",
    "address": [
      { "@type": "PostalAddress", "addressLocality": "Bengaluru", "addressCountry": "IN" },
      { "@type": "PostalAddress", "addressLocality": "Pune", "addressCountry": "IN" },
      { "@type": "PostalAddress", "addressLocality": "Berlin", "addressCountry": "DE" }
    ],
    "contactPoint": { "@type": "ContactPoint", "email": "hello@zyflux.com", "contactType": "sales" }
  })}}
/>
```
- **Priority:** High

---

## Content Findings

### 14. No blog or educational content
- **Impact:** High (long-term)
- **Evidence:** The site has 4 pages and no content hub. Every target keyword requires content to rank.
- **Recommendation:** A 10-article blog targeting "custom ERP software India", "CRM for growing startups", "Flutter vs React Native 2026", etc. would build topical authority.
- **Priority:** Long-term (start now)

### 15. Services section has no dedicated landing pages
- **Impact:** High
- **Evidence:** All 6 services are on the homepage `#services` section only. No `/services/erp`, `/services/crm`, etc.
- **Opportunity:** Each page could target high-value keywords — "custom ERP development company India" (~1.2K/mo), "CRM development services" (~880/mo), "Flutter app development agency" (~720/mo).
- **Priority:** High

### 16. E-E-A-T signals are thin
- **Impact:** Medium
- **Evidence:**
  - Team members have no last names, bios, or LinkedIn links
  - Trustpilot/Clutch links go to `#` — no real review URLs
  - Case study thumbnails are CSS gradients, not real screenshots
  - No client logo wall
- **Recommendation:** Add real team LinkedIn links, embed actual Clutch/Trustpilot widgets, replace CSS thumbnails with WebP screenshots.
- **Priority:** Medium

---

## Prioritized Action Plan

### Immediate — do this week
1. Add `metadataBase` to root layout metadata
2. Create `src/app/sitemap.ts`
3. Create `src/app/robots.ts`
4. Fix broken footer links (`#careers`, `#press` → valid destinations or remove)
5. Replace `href="#"` social links with real URLs or remove them

### High-impact — within 2 weeks
6. Add Open Graph + Twitter card metadata to all pages
7. Add canonical `alternates` to all page metadata
8. Improve page descriptions for Contact and About (keyword-rich, 140–160 chars)
9. Add Organization JSON-LD schema to root layout
10. Move projects array to SSR so Google indexes all 13 without JS execution

### Medium-term — within 30 days
11. Initialize hero counter spans with real values (not `0+`)
12. Add BreadcrumbList schema to inner pages
13. Replace CSS thumbnail placeholders with real `<img>` WebP screenshots + alt text
14. Add favicon manifest and Apple touch icons

### Long-term — ongoing growth
15. Create service landing pages (`/services/erp`, `/services/crm`, etc.)
16. Start a blog targeting 8–10 high-intent keywords
17. Add real team bio pages with LinkedIn links
18. Embed actual Trustpilot/Clutch reviews with live URLs
