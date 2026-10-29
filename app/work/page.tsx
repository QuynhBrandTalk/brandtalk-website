import { Metadata } from 'next'
import { MotionDiv } from '@/components/Motion'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import CaseStudyCard from '@/components/CaseStudyCard'
import Link from 'next/link'
import { CASE_STUDIES } from '@/lib/data'
import { getPageSEO } from '@/lib/seo'
import { containerVariants } from '@/lib/animations'

export const metadata: Metadata = getPageSEO('work')

export default function Work() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Our Work"
        subheadline="Case studies in brand elevation, e-commerce transformation, and cultural storytelling"
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=1000&fit=crop"
        variant="dark"
      />

      {/* Case Studies Grid */}
      <Section>
        <MotionDiv
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {CASE_STUDIES.map((study, idx) => (
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
        </MotionDiv>
      </Section>

      {/* Stats */}
      <Section variant="dark">
        <MotionDiv
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
        >
          {[
            { value: '3+', label: 'Case Studies' },
            { value: '280%', label: 'Avg. Growth' },
            { value: '15%', label: 'Avg. Conversion' },
          ].map((stat, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <p className="text-5xl font-bold text-gold-400 mb-2">
                {stat.value}
              </p>
              <p className="text-heading-md text-gray-300">{stat.label}</p>
            </MotionDiv>
          ))}
        </MotionDiv>
      </Section>

      {/* CTA */}
      <Section>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-navy rounded-lg p-12 text-white text-center"
        >
          <h2 className="text-display-md font-bold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-heading-md text-gray-200 mb-8">
            Let's discuss how we can help your brand achieve transformational growth.
          </p>
          <Link href="/contact" className="button button-gold">
            Start Your Journey
          </Link>
        </MotionDiv>
      </Section>
    </>
  )
}
