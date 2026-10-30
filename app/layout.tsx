import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Lora } from 'next/font/google'
import './globals.css'
import { LangProvider } from '@/lib/i18n'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const sans = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

const quote = Lora({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-quote',
  display: 'swap',
})

const siteUrl = 'https://brandtalk.asia'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'BrandTalk — Cố vấn thương hiệu và thương mại xã hội',
    template: '%s — BrandTalk',
  },
  description:
    'Phan Như Quỳnh đồng hành cùng người sáng lập và ban điều hành doanh nghiệp Việt về chiến lược thương hiệu, video ngắn và livestream trên thương mại xã hội. TikTok Shop Partner, Shopee Enabler.',
  keywords: [
    'BrandTalk',
    'Phan Như Quỳnh',
    'thương mại xã hội',
    'TikTok Shop Partner',
    'Shopee Enabler',
    'livestream',
    'video ngắn',
    'OCOP',
    'thương hiệu Việt',
  ],
  openGraph: {
    type: 'website',
    siteName: 'BrandTalk',
    title: 'BrandTalk — Hiểu từ gốc để tăng trưởng bền vững',
    description:
      'Đồng hành cùng người sáng lập và ban điều hành doanh nghiệp Việt trên thương mại xã hội.',
    locale: 'vi_VN',
    alternateLocale: ['en_US'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${sans.variable} ${quote.variable}`}>
      <body className="min-h-screen bg-indigo-deep antialiased">
        <LangProvider>
          <Navigation />
          <main id="main">{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  )
}
