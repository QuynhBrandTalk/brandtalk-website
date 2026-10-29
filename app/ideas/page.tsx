import { Metadata } from 'next'
import { MotionDiv } from '@/components/Motion'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import { ARTICLES } from '@/lib/data'
import { getPageSEO } from '@/lib/seo'
import { formatDate } from '@/lib/utils'
import { itemVariants, containerVariants } from '@/lib/animations'

export const metadata: Metadata = getPageSEO('ideas')

export default function Ideas() {
  const featured = ARTICLES[0]
  const rest = ARTICLES.slice(1)

  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Ideas"
        subheadline="Insights on shoppertainment, heritage brand strategy, and Vietnamese e-commerce trends"
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=1000&fit=crop"
        variant="dark"
      />

      {/* Featured Article */}
      <Section variant="light">
        <Link href={`/ideas/${featured.slug}`} className="group">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-full overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-body-sm font-semibold">
                    {featured.category}
                  </span>
                  <span className="text-body-sm text-gray-500">
                    {formatDate(featured.publishedAt)}
                  </span>
                </div>

                <h2 className="text-display-md font-bold text-navy-900 mb-4 group-hover:text-gold-600 transition-colors">
                  {featured.title}
                </h2>

                <p className="text-body-lg text-gray-700 mb-6 line-clamp-3">
                  {featured.excerpt}
                </p>

                <div className="flex items-center gap-4">
                  <span className="text-body-sm font-medium text-navy-900">
                    {featured.readTime} min read
                  </span>
                  <span className="text-gold-600 font-semibold">
                    Read Article →
                  </span>
                </div>
              </div>
            </div>
          </MotionDiv>
        </Link>
      </Section>

      {/* More Articles */}
      <Section>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-heading-lg font-bold text-navy-900 mb-2">
            More Articles
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-gold-600 to-transparent" />
        </MotionDiv>

        <MotionDiv
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {rest.map((article) => (
            <Link
              key={article.id}
              href={`/ideas/${article.slug}`}
              className="group"
            >
              <MotionDiv
                variants={itemVariants}
                className="bg-white rounded-lg p-6 border border-navy-100 hover:border-gold-600 hover:shadow-lg transition-all flex gap-6"
              >
                {/* Thumbnail */}
                <div className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0 overflow-hidden rounded-lg bg-navy-200">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-navy-100 text-navy-700 px-3 py-1 rounded-full text-body-sm font-semibold">
                      {article.category}
                    </span>
                    <span className="text-body-sm text-gray-500">
                      {formatDate(article.publishedAt)}
                    </span>
                  </div>

                  <h3 className="text-heading-lg font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-body-base text-gray-700 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-body-sm">
                    <span className="text-navy-900 font-medium">
                      {article.readTime} min read
                    </span>
                    <span className="text-gold-600 font-semibold group-hover:translate-x-1 transition-transform">
                      Read →
                    </span>
                  </div>
                </div>
              </MotionDiv>
            </Link>
          ))}
        </MotionDiv>
      </Section>

      {/* Subscribe */}
      <Section variant="dark">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-display-md font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-heading-md text-gray-200 mb-8">
            Get monthly insights delivered to your inbox
          </p>

          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white border-b-2 border-gold-600 px-4 py-3 text-navy-900 placeholder-gray-400 focus:outline-none focus:border-navy-900"
              required
            />
            <button type="submit" className="button button-gold whitespace-nowrap">
              Subscribe
            </button>
          </form>

          <p className="text-body-sm text-gray-400 mt-4">
            No spam. One email per month. Unsubscribe anytime.
          </p>
        </MotionDiv>
      </Section>
    </>
  )
}
