import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/Section'
import { CASE_STUDIES } from '@/lib/data'
import { itemVariants, containerVariants } from '@/lib/animations'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const study = CASE_STUDIES.find((s) => s.slug === params.slug)

  if (!study) {
    return {
      title: 'Case Study Not Found',
      description: 'The case study you are looking for does not exist.',
    }
  }

  return {
    title: `${study.title} | BrandTalk Case Study`,
    description: study.description,
    openGraph: {
      title: study.title,
      description: study.description,
      images: [{ url: study.heroImage }],
    },
  }
}

export default function CaseStudyDetail({ params }: PageProps) {
  const study = CASE_STUDIES.find((s) => s.slug === params.slug)

  if (!study) {
    notFound()
  }

  const relatedStudies = CASE_STUDIES.filter((s) => s.slug !== study.slug).slice(
    0,
    2
  )
  const studyIndex = CASE_STUDIES.findIndex((s) => s.slug === study.slug)
  const prevStudy = studyIndex > 0 ? CASE_STUDIES[studyIndex - 1] : null
  const nextStudy =
    studyIndex < CASE_STUDIES.length - 1 ? CASE_STUDIES[studyIndex + 1] : null

  return (
    <>
      {/* Hero Image */}
      <div className="relative w-full h-96 md:h-[500px] overflow-hidden bg-navy-200">
        <Image
          src={study.heroImage}
          alt={study.title}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      </div>

      {/* Hero Content */}
      <Section className="relative -mt-24 md:-mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-4xl mx-auto relative z-10"
        >
          <p className="text-gold-600 font-semibold text-body-sm mb-3">
            {study.client}
          </p>
          <h1 className="text-display-md font-bold text-navy-900 mb-4">
            {study.title}
          </h1>
          <p className="text-heading-md text-gray-700">{study.description}</p>
        </motion.div>
      </Section>

      {/* Content Sections */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Challenge */}
          <motion.div variants={itemVariants}>
            <h2 className="text-heading-lg font-bold text-navy-900 mb-4">
              The Challenge
            </h2>
            <p className="text-body-lg text-gray-700 whitespace-pre-wrap">
              {study.challenge}
            </p>
          </motion.div>

          {/* Approach */}
          <motion.div variants={itemVariants}>
            <h2 className="text-heading-lg font-bold text-navy-900 mb-4">
              Our Approach
            </h2>
            <p className="text-body-lg text-gray-700 whitespace-pre-wrap">
              {study.approach}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div variants={itemVariants}>
            <h2 className="text-heading-lg font-bold text-navy-900 mb-4">
              The Solution
            </h2>
            <p className="text-body-lg text-gray-700 whitespace-pre-wrap">
              {study.solution}
            </p>
          </motion.div>

          {/* Results */}
          <motion.div variants={itemVariants}>
            <h2 className="text-heading-lg font-bold text-navy-900 mb-6">
              Results & Outcomes
            </h2>
            {study.metrics && study.metrics.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-4xl font-bold text-gold-600 mb-2">
                      {metric.value}
                    </p>
                    <p className="text-body-sm text-gray-700">{metric.label}</p>
                  </div>
                ))}
              </div>
            )}
            <ul className="space-y-3">
              {study.results.map((result, idx) => (
                <li
                  key={idx}
                  className="text-body-base text-gray-700 flex items-start gap-3"
                >
                  <span className="text-gold-600 font-bold mt-1">✓</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Testimonial */}
          {study.testimonial && (
            <motion.div
              variants={itemVariants}
              className="bg-gold-50 rounded-lg p-8 border-l-4 border-gold-600"
            >
              <p className="text-heading-md text-navy-900 italic mb-4">
                "{study.testimonial.quote}"
              </p>
              <p className="font-semibold text-navy-900">
                {study.testimonial.author}
              </p>
              <p className="text-body-sm text-gray-600">
                {study.testimonial.role}
              </p>
            </motion.div>
          )}

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-heading-md font-bold text-navy-900 mb-4">
              Services Delivered
            </h3>
            <div className="flex flex-wrap gap-2">
              {study.services.map((service, idx) => (
                <span
                  key={idx}
                  className="bg-navy-100 text-navy-900 px-4 py-2 rounded-full text-body-sm font-medium"
                >
                  {service}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* CTA */}
      <Section variant="light">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-navy rounded-lg p-12 text-white text-center"
        >
          <h2 className="text-display-md font-bold mb-4">
            Ready for Your Own Success Story?
          </h2>
          <p className="text-heading-md text-gray-200 mb-8">
            Let's discuss how we can help your brand achieve similar results.
          </p>
          <Link href="/contact" className="button button-gold">
            Schedule a Discovery Call
          </Link>
        </motion.div>
      </Section>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <Section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-md font-bold text-navy-900 mb-12 text-center"
          >
            More Case Studies
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {relatedStudies.map((relatedStudy) => (
              <motion.div
                key={relatedStudy.id}
                variants={itemVariants}
                className="relative overflow-hidden rounded-lg bg-white h-64 cursor-pointer hover:shadow-xl transition-shadow"
              >
                <Link href={`/work/${relatedStudy.slug}`}>
                  <Image
                    src={relatedStudy.heroImage}
                    alt={relatedStudy.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                    <p className="text-gold-400 font-medium text-body-sm mb-2">
                      {relatedStudy.client}
                    </p>
                    <h3 className="text-heading-md font-bold">
                      {relatedStudy.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Section>
      )}

      {/* Navigation */}
      <Section variant="light">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          {prevStudy ? (
            <Link
              href={`/work/${prevStudy.slug}`}
              className="text-navy-900 hover:text-gold-600 font-medium transition-colors"
            >
              ← {prevStudy.title}
            </Link>
          ) : (
            <div />
          )}
          <Link
            href="/work"
            className="text-navy-900 hover:text-gold-600 font-medium transition-colors"
          >
            ↑ Back to All
          </Link>
          {nextStudy ? (
            <Link
              href={`/work/${nextStudy.slug}`}
              className="text-navy-900 hover:text-gold-600 font-medium transition-colors"
            >
              {nextStudy.title} →
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Section>
    </>
  )
}
