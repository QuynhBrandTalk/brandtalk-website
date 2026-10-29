// Case Study type
export interface CaseStudy {
  id: string
  slug: string
  title: string
  client: string
  industry: string
  description: string
  challenge: string
  approach: string
  solution: string
  results: string[]
  metrics?: {
    label: string
    value: string
  }[]
  heroImage: string
  services: string[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  createdAt: string
}

// Blog Article type
export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: {
    name: string
    role: string
    image?: string
  }
  image: string
  publishedAt: string
  readTime: number
}

// Service type
export interface Service {
  id: string
  slug: string
  title: string
  description: string
  shortDescription: string
  icon?: string
  keyServices: string[]
  benefits: string[]
  image: string
}

// Navigation item type
export interface NavItem {
  label: string
  href: string
}

// Contact Form type
export interface ContactFormData {
  fullName: string
  email: string
  company: string
  industry: string
  serviceInterest: string
  message: string
  scheduleCall?: boolean
}

// SEO Metadata type
export interface SEOMetadata {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
}
