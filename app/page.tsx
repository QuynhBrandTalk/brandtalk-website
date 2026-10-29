import { Metadata } from 'next'
import { motion } from '@/components/Motion'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import ServiceCard from '@/components/ServiceCard'
import CaseStudyCard from '@/components/CaseStudyCard'
import Link from 'next/link'
import { SERVICES, CASE_STUDIES } from '@/lib/data'
import { getPageSEO, generateOrganizationSchema } from '@/lib/seo'
import { itemVariants, containerVariants } from '@/lib/animations'

export const metadata: Metadata = getPageSEO('home')

export default function Home() {
  const featuredCaseStudies = CASE_STUDIES.slice(0, 2)

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema()),
        }}
      />

      {/* Hero Section */}
      <Hero
        headline="Elevate Your Vietnamese Brand"
        subheadline="Strategic guidance for heritage brands entering the digital age. From e-commerce strategy to founder mentorship."
        cta={{ label: "Start Your Journey", href: '/contact' }}
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=1000&fit=crop"
      />

      {/* Value Proposition */}
      <Section id="why-brandtalk">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-md font-bold text-navy-900 mb-6 text-center"
          >
            Why BrandTalk Exists
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-heading-md text-gray-700 text-center max-w-2xl mx-auto mb-12 text-balance"
          >
            Vietnamese e-commerce grows 25%+ annually. Heritage brands struggle with authenticity in digital spaces. We help you become more fully yourself—digitally.
          </motion.p>
        </div>

        {/* Three Column Insights */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {[
            {
              icon: '📈',
              title: 'The Opportunity',
              description:
                'Shoppertainment dominates. Direct-to-consumer models win. Heritage brands have the most authentic stories to tell.',
            },
            {
              icon: '🎯',
              title: 'The Challenge',
              description:
                'Scaling heritage requires strategy, not trends. Most brands chase features instead of building on their roots.',
            },
            {
              icon: '🌱',
              title: 'Our Approach',
              description:
                'Start with WHY. Elevate heritage through modern channels. Build sustainable, profitable brands that honor tradition.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white rounded-lg p-8 border border-navy-100 hover:border-gold-600 transition-colors"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-heading-sm font-bold text-navy-900 mb-3">
                {item.title}
              </h3>
              <p className="text-body-base text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Core Services */}
      <Section variant="light">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-md font-bold text-navy-900 mb-4 text-center"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-heading-md text-gray-700 text-center max-w-2xl mx-auto text-balance"
          >
            Tailored solutions for every stage of your brand transformation
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {SERVICES.map((service, idx) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              keyServices={service.keyServices}
              benefits={service.benefits}
              href={`/services`}
              index={idx}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services" className="button button-primary">
            Explore All Services
            <span className="ml-2">→</span>
          </Link>
        </motion.div>
      </Section>

      {/* Featured Case Study */}
      <Section id="featured-work">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-md font-bold text-navy-900 mb-6 text-center"
          >
            Featured Work
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {featuredCaseStudies.map((study, idx) => (
            <CaseStudyCard
              key={study.id}
              title={study.title}
              client={study.client}
              image={study.heroImage}
              slug={study.slug}
              results={study.results}
              index={idx}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/work" className="button button-secondary">
            View All Case Studies
            <span className="ml-2">→</span>
          </Link>
        </motion.div>
      </Section>

      {/* Founder's Voice */}
      <Section variant="dark">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-display-md font-bold mb-6 text-white">
              Start with WHY
            </h2>
            <div className="space-y-4 text-body-lg text-gray-100">
              <p>
                Every strategic decision should be rooted in purpose, not tactics. Vietnamese heritage brands carry something precious—cultural narratives that span generations. The digital age doesn't diminish that value. It amplifies it.
              </p>
              <p>
                We believe heritage brands deserve more than growth hacks. They deserve strategy that honors their roots while building sustainable, profitable futures. That's why I started BrandTalk.
              </p>
              <p>
                Let's elevate your brand together. More value, more sustainable.
              </p>
            </div>
            <div className="mt-8">
              <p className="text-heading-sm font-semibold text-gold-400">
                Phan Như Quỳnh
              </p>
              <p className="text-body-base text-gray-300">
                Founder & Strategic Advisor
              </p>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 text-body-sm font-medium mt-2 inline-block"
              >
                Connect on LinkedIn →
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 bg-gradient-to-br from-gold-600 to-terracotta-600 rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop"
              alt="Phan Như Quỳnh"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section variant="light">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-display-md font-bold text-navy-900 mb-4">
            Stay Ahead of Trends
          </h2>
          <p className="text-heading-md text-gray-700 mb-8 text-balance">
            Monthly insights on Vietnamese e-commerce, heritage brand strategy, and shoppertainment trends.
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

          <p className="text-body-sm text-gray-500 mt-4">
            No spam. One email per month. Unsubscribe anytime.
          </p>
        </motion.div>
      </Section>

      {/* Final CTA */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-navy rounded-lg p-12 text-white text-center"
        >
          <h2 className="text-display-md font-bold mb-4">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-heading-md text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss your brand's next chapter.
          </p>
          <Link href="/contact" className="button button-gold">
            Schedule a Discovery Call
          </Link>
        </motion.div>
      </Section>
    </>
  )
}
