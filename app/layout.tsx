import type { Metadata } from 'next'
import { Suspense } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { SITE_CONFIG, DEFAULT_SEO } from '@/lib/seo'
import './globals.css'

export const metadata: Metadata = {
  title: DEFAULT_SEO.title,
  description: DEFAULT_SEO.description,
  keywords: DEFAULT_SEO.keywords,
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    images: [
      {
        url: SITE_CONFIG.image,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    images: [SITE_CONFIG.image],
    creator: SITE_CONFIG.twitter,
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="canonical" href={SITE_CONFIG.url} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1a1a1a" />
      </head>
      <body className="bg-cream">
        <Navigation />
        <main className="min-h-screen">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </main>
        <Footer />
      </body>
    </html>
  )
}
