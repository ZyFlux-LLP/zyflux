import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ClientAnimations from '@/components/ClientAnimations'
import { SpeedInsights } from '@vercel/speed-insights/next'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
  preload: true,
})
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://zyflux.com'),
  title: {
    default: 'Zyflux — Engineering the flow of modern software',
    template: '%s — Zyflux',
  },
  description:
    'Zyflux is a product engineering studio in Navi Mumbai — building custom ERP, CRM, ecommerce platforms, Flutter apps, and digital marketing for startups and enterprises.',
  openGraph: {
    type: 'website',
    siteName: 'Zyflux',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@zyflux_com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="preconnect" href="https://app.cal.com" />
        <link rel="dns-prefetch" href="https://app.cal.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <ClientAnimations />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Zyflux LLP',
              url: 'https://zyflux.com',
              logo: 'https://zyflux.com/zyflux-logo.png',
              description:
                'Product engineering studio building custom ERP, CRM, ecommerce platforms, Flutter apps, and digital marketing.',
              foundingDate: '2023',
              email: 'team@zyflux.com',
              telephone: '+917021309381',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'H-3/1001 Valley Shilp CHS, Kharghar, Sector 36',
                addressLocality: 'Navi Mumbai',
                addressRegion: 'Maharashtra',
                postalCode: '410210',
                addressCountry: 'IN',
              },
              sameAs: [
                'https://linkedin.com/company/zyflux',
                'https://twitter.com/zyflux_com',
                'https://instagram.com/zyflux_com',
                'https://github.com/ZyFlux-LLP',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+917021309381',
                email: 'team@zyflux.com',
                contactType: 'sales',
                availableLanguage: 'English',
              },
            }).replace(/([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g, '$1\\u0040$2'),
          }}
        />
      </body>
    </html>
  )
}
