import { Metadata } from 'next'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'
import { getPageSEO } from '@/lib/seo'
import { containerVariants, itemVariants } from '@/lib/animations'

export const metadata: Metadata = getPageSEO('contact')

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Let's Talk"
        subheadline="Ready to elevate your brand? We'd love to hear from you."
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=1000&fit=crop"
        variant="dark"
      />

      {/* Contact Section */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-heading-lg font-bold text-navy-900 mb-8">
              Contact Info
            </h3>

            <div className="space-y-8">
              {/* Email */}
              <div>
                <h4 className="text-heading-sm font-semibold text-navy-900 mb-2">
                  Email
                </h4>
                <a
                  href="mailto:contact@brandtalk.asia"
                  className="text-body-base text-gold-600 hover:text-gold-700 font-medium"
                >
                  contact@brandtalk.asia
                </a>
                <p className="text-body-sm text-gray-600 mt-2">
                  We respond within 48 hours.
                </p>
              </div>

              {/* Response Time */}
              <div>
                <h4 className="text-heading-sm font-semibold text-navy-900 mb-2">
                  Response Time
                </h4>
                <p className="text-body-base text-gray-700">
                  Monday - Friday, 09:00 - 18:00 (Ho Chi Minh time)
                </p>
              </div>

              {/* Location */}
              <div>
                <h4 className="text-heading-sm font-semibold text-navy-900 mb-2">
                  Location
                </h4>
                <p className="text-body-base text-gray-700">
                  Ho Chi Minh City, Vietnam
                </p>
              </div>

              {/* Social */}
              <div>
                <h4 className="text-heading-sm font-semibold text-navy-900 mb-4">
                  Connect
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/company/brandtalk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gold-600 text-navy-900 flex items-center justify-center hover:bg-gold-700 transition-colors font-bold"
                  >
                    in
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-heading-sm font-semibold text-navy-900 mb-4">
                  Explore
                </h4>
                <div className="space-y-2">
                  <Link
                    href="/services"
                    className="text-navy-900 hover:text-gold-600 font-medium block transition-colors"
                  >
                    View Services →
                  </Link>
                  <Link
                    href="/work"
                    className="text-navy-900 hover:text-gold-600 font-medium block transition-colors"
                  >
                    View Case Studies →
                  </Link>
                  <Link
                    href="/ideas"
                    className="text-navy-900 hover:text-gold-600 font-medium block transition-colors"
                  >
                    Read Our Insights →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-heading-lg font-bold text-navy-900 mb-8">
              Send us a Message
            </h3>
            <ContactForm />
          </motion.div>
        </motion.div>
      </Section>

      {/* Calendar Section */}
      <Section variant="light">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-display-md font-bold text-navy-900 mb-4">
            Or Schedule Directly
          </h2>
          <p className="text-heading-md text-gray-700 mb-8">
            Prefer to book a time that works for you? Schedule a 30-minute discovery call.
          </p>

          {/* Calendar Embed Placeholder */}
          <div className="bg-white rounded-lg border-2 border-navy-100 p-12 text-center">
            <p className="text-body-lg text-gray-600 mb-4">
              Calendar embed will appear here (Cal.com or Calendly)
            </p>
            <p className="text-body-sm text-gray-500">
              In production, connect to Cal.com or Calendly for instant booking
            </p>
          </div>
        </motion.div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-display-md font-bold text-navy-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              {
                q: 'What is the typical engagement duration?',
                a: 'Most engagements range from 3 to 12 months, depending on your brand stage and goals. We discuss timing during the discovery call.',
              },
              {
                q: 'How is pricing structured?',
                a: 'Pricing is custom based on scope, complexity, and deliverables. We believe in transparent, value-based pricing. We discuss investment during the discovery call.',
              },
              {
                q: 'Do you work with non-Vietnamese brands?',
                a: 'While our expertise is in Vietnamese heritage brands and the Vietnamese e-commerce market, we can advise any brand elevating their heritage story. Contact us to discuss.',
              },
              {
                q: 'What is your availability for calls?',
                a: 'We are available Monday-Friday, 09:00-18:00 Ho Chi Minh time. We can arrange calls outside these times for special circumstances.',
              },
              {
                q: 'Do you offer ongoing support after the engagement?',
                a: 'Yes. Many clients continue with quarterly check-ins or advisory sessions after their main engagement concludes. This is customizable.',
              },
            ].map((faq, idx) => (
              <motion.details
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-lg p-6 border border-navy-100 hover:border-gold-600 transition-colors group cursor-pointer"
              >
                <summary className="font-semibold text-navy-900 flex items-center justify-between">
                  {faq.q}
                  <span className="text-gold-600 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-body-base text-gray-700 mt-4">{faq.a}</p>
              </motion.details>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* Final CTA */}
      <Section variant="dark">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-display-md font-bold text-white mb-4">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-heading-md text-gray-200 mb-8">
            Whether you have questions or you're ready to get started, reach out today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:contact@brandtalk.asia" className="button button-gold">
              Send Email
            </a>
            <Link href="/" className="button button-secondary text-white border-white hover:bg-white/10">
              Back Home
            </Link>
          </div>
        </motion.div>
      </Section>
    </>
  )
}
