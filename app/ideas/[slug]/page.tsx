import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/Section'
import { ARTICLES } from '@/lib/data'
import { formatDate } from '@/lib/utils'
import { itemVariants, containerVariants } from '@/lib/animations'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = ARTICLES.find((a) => a.slug === params.slug)

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The article you are looking for does not exist.',
    }
  }

  return {
    title: `${article.title} | BrandTalk`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author.name],
    },
  }
}

export default function ArticleDetail({ params }: PageProps) {
  const article = ARTICLES.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3)
  const articleIndex = ARTICLES.findIndex((a) => a.slug === article.slug)
  const prevArticle = articleIndex > 0 ? ARTICLES[articleIndex - 1] : null
  const nextArticle =
    articleIndex < ARTICLES.length - 1 ? ARTICLES[articleIndex + 1] : null

  return (
    <>
      {/* Hero Image */}
      <div className="relative w-full h-96 md:h-[500px] overflow-hidden bg-navy-200">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      </div>

      {/* Article Header */}
      <Section className="relative -mt-24 md:-mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-4xl mx-auto relative z-10"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-navy-100 text-navy-700 px-3 py-1 rounded-full text-body-sm font-semibold">
              {article.category}
            </span>
            <span className="text-body-sm text-gray-500">
              {formatDate(article.publishedAt)}
            </span>
            <span className="text-body-sm text-gray-500">
              {article.readTime} min read
            </span>
          </div>

          <h1 className="text-display-md font-bold text-navy-900 mb-6">
            {article.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold-600 flex items-center justify-center text-white font-bold">
              {article.author.name[0]}
            </div>
            <div>
              <p className="font-semibold text-navy-900">{article.author.name}</p>
              <p className="text-body-sm text-gray-600">{article.author.role}</p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Article Content */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto prose prose-lg prose-headings:font-bold prose-headings:text-navy-900 prose-p:text-gray-700 prose-p:text-body-lg prose-a:text-gold-600 prose-a:hover:text-gold-700"
        >
          <div
            className="space-y-6"
            dangerouslySetInnerHTML={{
              __html: article.content
                .split('\n\n')
                .map((para) => {
                  if (para.startsWith('##')) {
                    return `<h2>${para.replace('##', '').trim()}</h2>`
                  } else if (para.startsWith('#')) {
                    return `<h3>${para.replace('#', '').trim()}</h3>`
                  } else if (para.startsWith('- ')) {
                    const items = para
                      .split('\n')
                      .filter((line) => line.startsWith('- '))
                      .map((item) => item.replace('- ', ''))
                    return `<ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul>`
                  } else {
                    return `<p>${para}</p>`
                  }
                })
                .join(''),
            }}
          />
        </motion.div>
      </Section>

      {/* Social Sharing & CTA */}
      <Section variant="light">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg p-8 max-w-3xl mx-auto border border-navy-100 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div>
            <p className="font-semibold text-navy-900 mb-2">Found this insightful?</p>
            <p className="text-gray-600">Share it with your network.</p>
          </div>
          <div className="flex gap-4">
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://brandtalk.asia/ideas/${article.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary text-sm"
            >
              Share on LinkedIn
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(article.excerpt)}`}
              className="button button-secondary text-sm"
            >
              Share via Email
            </a>
          </div>
        </motion.div>
      </Section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <Section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-md font-bold text-navy-900 mb-12 text-center"
          >
            More Insights
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {relatedArticles.map((relatedArticle) => (
              <Link
                key={relatedArticle.id}
                href={`/ideas/${relatedArticle.slug}`}
                className="group"
              >
                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-lg overflow-hidden border border-navy-100 hover:border-gold-600 hover:shadow-lg transition-all"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-navy-200">
                    <Image
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="bg-navy-100 text-navy-700 px-3 py-1 rounded-full text-body-sm font-semibold inline-block mb-3">
                      {relatedArticle.category}
                    </span>

                    <h3 className="text-heading-sm font-bold text-navy-900 mb-2 line-clamp-2 group-hover:text-gold-600 transition-colors">
                      {relatedArticle.title}
                    </h3>

                    <p className="text-body-sm text-gray-600 line-clamp-2 mb-4">
                      {relatedArticle.excerpt}
                    </p>

                    <p className="text-body-sm text-gray-500">
                      {relatedArticle.readTime} min read
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </Section>
      )}

      {/* CTA */}
      <Section variant="dark">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-display-md font-bold text-white mb-4">
            Ready to Discuss Your Brand Strategy?
          </h2>
          <p className="text-heading-md text-gray-200 mb-8">
            Let's talk about how these insights apply to your brand.
          </p>
          <Link href="/contact" className="button button-gold">
            Schedule a Discovery Call
          </Link>
        </motion.div>
      </Section>

      {/* Navigation */}
      <Section variant="light">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          {prevArticle ? (
            <Link
              href={`/ideas/${prevArticle.slug}`}
              className="text-navy-900 hover:text-gold-600 font-medium transition-colors"
            >
              ← {prevArticle.title}
            </Link>
          ) : (
            <div />
          )}
          <Link
            href="/ideas"
            className="text-navy-900 hover:text-gold-600 font-medium transition-colors"
          >
            ↑ Back to All
          </Link>
          {nextArticle ? (
            <Link
              href={`/ideas/${nextArticle.slug}`}
              className="text-navy-900 hover:text-gold-600 font-medium transition-colors"
            >
              {nextArticle.title} →
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Section>
    </>
  )
}
