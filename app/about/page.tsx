import { Metadata } from 'next'
import { motion } from '@/components/Motion'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Link from 'next/link'
import { getPageSEO } from '@/lib/seo'
import { itemVariants, containerVariants } from '@/lib/animations'

export const metadata: Metadata = getPageSEO('about')

export default function About() {
  const values = [
    {
      title: 'Responsibility',
      vietnamese: 'Trách nhiệm',
      description:
        'We take ownership of our work and stand behind our recommendations. Your success is our responsibility.',
    },
    {
      title: 'Kindness',
      vietnamese: 'Tử tế',
      description:
        'We approach every relationship with genuine care and respect. Your brand story matters to us.',
    },
    {
      title: 'Learning & Sharing',
      vietnamese: 'Học tập và chia sẻ',
      description:
        'We believe in continuous growth and freely share insights with our community and partners.',
    },
    {
      title: 'Creativity',
      vietnamese: 'Sáng tạo',
      description:
        'Innovation drives impact. We challenge conventions to find breakthrough strategies for your brand.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Our Story"
        subheadline="Building BrandTalk to elevate Vietnamese heritage brands in the digital age"
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=1000&fit=crop"
        variant="dark"
      />

      {/* Story Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-display-md font-bold text-navy-900 mb-6">
              Our Journey
            </h2>
            <div className="space-y-4 text-body-lg text-gray-700">
              <p>
                BrandTalk was founded on a simple observation: Vietnamese heritage brands are disappearing—not because their products lack quality, but because they haven't learned to tell their stories to modern audiences.
              </p>
              <p>
                Over years of consulting with heritage brands, we discovered a pattern. The most successful weren't those chasing trends. They were brands that became more fully themselves—rooted in tradition but alive in the digital world.
              </p>
              <p>
                That insight led to BrandTalk. We're here to mentor heritage brands through transformation. Not by abandoning their roots, but by translating them into the language of modern commerce.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 bg-navy-200 rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
              alt="BrandTalk journey"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section variant="light">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg p-8 border-2 border-gold-600"
          >
            <h3 className="text-heading-lg font-bold text-navy-900 mb-4">
              Our Vision
            </h3>
            <p className="text-body-lg text-gray-700">
              Elevate Vietnamese heritage brands as global exemplars—brands that honor tradition while innovating for the future.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg p-8 border-2 border-terracotta-600"
          >
            <h3 className="text-heading-lg font-bold text-navy-900 mb-4">
              Our Mission
            </h3>
            <p className="text-body-lg text-gray-700">
              Mentor Vietnamese heritage brands and SMEs through strategic digital transformation, grounded in cultural authenticity and commercial viability.
            </p>
          </motion.div>
        </motion.div>
      </Section>

      {/* Core Values */}
      <Section>
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-md font-bold text-navy-900 mb-4 text-center"
          >
            Our Core Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-heading-md text-gray-700 text-center max-w-2xl mx-auto text-balance"
          >
            These principles guide every decision we make
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white rounded-lg p-8 border border-navy-100 hover:border-gold-600 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">✨</div>
                <div>
                  <h3 className="text-heading-md font-bold text-navy-900 mb-1">
                    {value.title}
                  </h3>
                  <p className="text-gold-600 text-body-sm font-medium mb-3">
                    {value.vietnamese}
                  </p>
                  <p className="text-body-base text-gray-700">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Founder Section */}
      <Section variant="dark">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 bg-gradient-to-br from-gold-600 to-terracotta-600 rounded-lg overflow-hidden order-2 md:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop"
              alt="Phan Như Quỳnh"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-display-md font-bold text-white mb-4">
              Phan Như Quỳnh
            </h2>
            <p className="text-heading-md text-gold-400 font-semibold mb-6">
              Founder & Strategic Advisor
            </p>

            <div className="space-y-4 text-body-lg text-gray-100 mb-8">
              <p>
                With over a decade of experience in brand strategy and digital transformation, Phan Như Quỳnh has guided dozens of heritage brands through successful digital transitions.
              </p>
              <p>
                Her philosophy: "Start with WHY." Every strategic decision should be rooted in purpose and cultural authenticity, not tactics or trends.
              </p>
              <p>
                She brings together mentorship, strategic guidance, and a deep understanding of Vietnamese market dynamics to help founders build brands that matter.
              </p>
            </div>

            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 font-semibold inline-flex items-center gap-2"
            >
              Connect on LinkedIn
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Why Heritage Brands Matter */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-display-md font-bold text-navy-900 mb-8 text-center">
            Why Vietnamese Heritage Brands Matter
          </h2>

          <div className="space-y-6 text-body-lg text-gray-700">
            <p>
              Vietnamese heritage runs deep. From silk weaving traditions spanning centuries to ceramic crafts passed down through generations, these brands embody more than products—they represent cultural resilience and artistry.
            </p>
            <p>
              Yet many heritage brands are struggling. They face competition from mass-produced goods and international brands that have mastered digital marketing. The irony: heritage brands have the most authentic stories to tell, but the least experience telling them digitally.
            </p>
            <p>
              We're here to change that. Heritage brands don't need to become like other brands. They need to become more fully themselves—embracing tradition while innovating for the future. That's where real, sustainable growth happens.
            </p>
          </div>
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
            Let's Work Together
          </h2>
          <p className="text-heading-md text-gray-200 mb-8">
            Interested in elevating your heritage brand?
          </p>
          <Link href="/contact" className="button button-gold">
            Schedule a Discovery Call
          </Link>
        </motion.div>
      </Section>
    </>
  )
}
