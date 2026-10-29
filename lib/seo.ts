import { SEOMetadata } from './types'

export const SITE_CONFIG = {
  name: 'BrandTalk',
  description:
    'Strategic guidance for Vietnamese heritage brands entering the digital age. E-commerce strategy, storytelling, and mentorship.',
  url: 'https://brandtalk.asia',
  image: 'https://brandtalk.asia/og-image.jpg',
  twitter: '@brandtalkasia',
  author: 'Phan Như Quỳnh',
}

export const DEFAULT_SEO: SEOMetadata = {
  title: `${SITE_CONFIG.name} - Heritage Brand Strategy & E-Commerce Excellence`,
  description: SITE_CONFIG.description,
  keywords: [
    'Vietnamese brand strategy',
    'heritage brand elevation',
    'e-commerce strategy',
    'shoppertainment',
    'TikTok shop',
    'livestream commerce',
    'brand mentorship',
    'digital transformation',
  ],
}

export const SEO_METADATA: Record<string, SEOMetadata> = {
  home: {
    title: 'BrandTalk - Elevate Vietnamese Heritage Brands',
    description:
      'Strategic guidance for Vietnamese heritage brands. E-commerce transformation, storytelling, and founder mentorship.',
    keywords: [
      'Vietnamese brands',
      'heritage brands',
      'e-commerce strategy',
      'brand elevation',
    ],
  },
  about: {
    title: 'About BrandTalk - Our Mission & Values',
    description:
      'Learn about BrandTalk, founded by Phan Như Quỳnh. Our mission to elevate Vietnamese heritage brands through strategic guidance and mentorship.',
    keywords: [
      'BrandTalk founder',
      'brand strategy consultant',
      'Vietnamese heritage',
    ],
  },
  services: {
    title: 'Services - BrandTalk Brand Strategy & Advisory',
    description:
      'E-commerce strategy, heritage brand storytelling, digital transformation, and founder mentorship for Vietnamese SMEs.',
    keywords: [
      'brand strategy services',
      'e-commerce consulting',
      'brand mentorship',
      'digital transformation',
    ],
  },
  work: {
    title: 'Case Studies - BrandTalk Brand Transformation Projects',
    description:
      'See how we helped Vietnamese heritage brands achieve 300%+ growth through strategic e-commerce and storytelling.',
    keywords: ['case studies', 'brand transformation', 'e-commerce success'],
  },
  ideas: {
    title: 'Insights - BrandTalk Blog & Articles',
    description:
      'Articles on shoppertainment, heritage brand strategy, and Vietnamese e-commerce trends.',
    keywords: ['brand strategy blog', 'e-commerce insights', 'heritage brands'],
  },
  contact: {
    title: 'Contact BrandTalk - Schedule a Discovery Call',
    description:
      'Ready to elevate your brand? Contact BrandTalk for a free discovery call with our founder.',
    keywords: ['contact us', 'brand consulting', 'discovery call'],
  },
}

/**
 * Generates SEO metadata for a specific page
 */
export function getPageSEO(page: keyof typeof SEO_METADATA): SEOMetadata {
  return SEO_METADATA[page] || DEFAULT_SEO
}

/**
 * Generates JSON-LD schema for Organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.svg`,
    contact: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'contact@brandtalk.asia',
    },
    founder: {
      '@type': 'Person',
      name: 'Phan Như Quỳnh',
      description: 'Founder & Strategic Advisor',
    },
    sameAs: [
      'https://linkedin.com/company/brandtalk',
      'https://instagram.com/brandtalk',
    ],
  }
}

/**
 * Generates JSON-LD schema for a BlogPosting
 */
export function generateArticleSchema(
  title: string,
  description: string,
  image: string,
  publishedDate: string,
  author: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: image,
    datePublished: publishedDate,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/logo.svg`,
      },
    },
  }
}

/**
 * Generates JSON-LD schema for LocalBusiness
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    description: SITE_CONFIG.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '[Address]',
      addressLocality: 'Ho Chi Minh City',
      addressRegion: 'Ho Chi Minh',
      postalCode: '[Postal Code]',
      addressCountry: 'VN',
    },
    telephone: '[Phone Number]',
    url: SITE_CONFIG.url,
    email: 'contact@brandtalk.asia',
    priceRange: '$$',
    openingHours: 'Mo-Fr 09:00-18:00',
  }
}

/**
 * Generates sitemap entries
 */
export function generateSitemapEntry(
  path: string,
  changeFrequency: 'daily' | 'weekly' | 'monthly' = 'weekly',
  priority: number = 0.8
) {
  return {
    url: `${SITE_CONFIG.url}${path}`,
    lastmod: new Date().toISOString(),
    changefreq: changeFrequency,
    priority,
  }
}
