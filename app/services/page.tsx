import { Metadata } from 'next'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'
import { SERVICES } from '@/lib/data'
import { getPageSEO } from '@/lib/seo'
import { itemVariants, containerVariants } from '@/lib/animations'

export const metadata: Metadata = getPageSEO('services')

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Our Services"
        subheadline="Tailored solutions for Vietnamese brand transformation at every stage of your journey"
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=1000&fit=crop"
        variant="dark"
      />

      {/* Services Grid */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {SERVICES.map((service, idx) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              keyServices={service.keyServices}
              benefits={service.benefits}
              href={`/services#${service.slug}`}
              index={idx}
            />
          ))}
        </motion.div>
      </Section>

      {/* Detailed Service Sections */}
      {SERVICES.map((service, idx) => (
        <Section
          key={service.id}
          id={service.slug}
          variant={idx % 2 === 0 ? 'light' : 'default'}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-display-md font-bold text-navy-900 mb-4">
                {service.title}
              </h2>
              <p className="text-heading-md text-gray-700">
                {service.description}
              </p>
            </motion.div>

            {/* Key Services */}
            <motion.div
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-heading-lg font-bold text-navy-900 mb-6">
                What's Included
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.keyServices.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    variants={itemVariants}
                    className="flex items-start gap-3 bg-white rounded-lg p-4 border border-navy-100"
                  >
                    <span className="text-gold-600 font-bold text-lg mt-1">
                      ✓
                    </span>
                    <span className="text-body-base text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-heading-lg font-bold text-navy-900 mb-6">
                Expected Outcomes
              </h3>
              <div className="space-y-3">
                {service.benefits.map((benefit, benefitIdx) => (
                  <motion.div
                    key={benefitIdx}
                    variants={itemVariants}
                    className="bg-gold-50 rounded-lg p-4 border-l-4 border-gold-600"
                  >
                    <p className="text-body-base text-navy-900 font-medium">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Section>
      ))}

      {/* Engagement Model */}
      <Section variant="dark">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-display-md font-bold text-white mb-6">
            Our Engagement Model
          </h2>
          <p className="text-heading-md text-gray-200 mb-8">
            We believe in flexibility and partnership. Every engagement is customized to your brand's stage, goals, and capacity.
          </p>

          <div className="bg-navy-800 rounded-lg p-8 text-left">
            <div className="space-y-4 text-gray-100">
              <div>
                <h4 className="text-heading-sm font-bold text-gold-400 mb-2">
                  Typical Engagement Duration
                </h4>
                <p className="text-body-base">3 to 12 months, with flexibility based on your needs</p>
              </div>
              <div>
                <h4 className="text-heading-sm font-bold text-gold-400 mb-2">
                  Pricing
                </h4>
                <p className="text-body-base">
                  Custom based on scope, complexity, and your brand stage. We discuss everything transparently.
                </p>
              </div>
              <div>
                <h4 className="text-heading-sm font-bold text-gold-400 mb-2">
                  Approach
                </h4>
                <p className="text-body-base">
                  Strategic partnership. We mentor alongside you, building capacity and transferring knowledge.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Comparison Table */}
      <Section className="overflow-x-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-display-md font-bold text-navy-900 mb-6 text-center">
            Quick Service Comparison
          </h2>
        </motion.div>

        <div className="overflow-x-auto rounded-lg border border-navy-100">
          <table className="w-full">
            <thead className="bg-navy-900 text-white">
              <tr>
                <th className="text-left px-6 py-4 font-semibold">Service</th>
                <th className="text-center px-6 py-4 font-semibold">Duration</th>
                <th className="text-center px-6 py-4 font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody>
              {SERVICES.map((service, idx) => (
                <tr
                  key={service.id}
                  className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="px-6 py-4 font-semibold text-navy-900">
                    {service.title}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700">
                    3-6 months
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700">
                    {service.title.includes('Shoppertainment')
                      ? 'Scaling sales'
                      : service.title.includes('Heritage')
                      ? 'Positioning'
                      : service.title.includes('Transformation')
                      ? 'Digital readiness'
                      : 'Strategic direction'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
            Ready to Transform Your Brand?
          </h2>
          <p className="text-heading-md text-gray-200 mb-8">
            Let's discuss which service is the right fit for your stage and goals.
          </p>
          <Link href="/contact" className="button button-gold">
            Schedule a Discovery Call
          </Link>
        </motion.div>
      </Section>
    </>
  )
}
