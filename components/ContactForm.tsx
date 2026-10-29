'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ContactFormData } from '@/lib/types'
import { containerVariants, itemVariants } from '@/lib/animations'

// Validation schema
const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().min(2, 'Company name is required'),
  industry: z.string().min(1, 'Please select an industry'),
  serviceInterest: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  scheduleCall: z.boolean().optional(),
})

type FormData = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    try {
      // Simulate API call - replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log('Form submitted:', data)
      setSubmitted(true)
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.form
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Success Message */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800"
        >
          <p className="font-semibold">Thank you for reaching out!</p>
          <p className="text-sm mt-1">
            We'll get back to you within 48 hours.
          </p>
        </motion.div>
      )}

      {/* Full Name */}
      <motion.div variants={itemVariants}>
        <label htmlFor="fullName" className="block text-body-sm font-semibold text-navy-900 mb-2">
          Full Name *
        </label>
        <input
          id="fullName"
          type="text"
          {...register('fullName')}
          placeholder="Your name"
          className="w-full bg-white border-b-2 border-gold-600 rounded-none px-0 py-2 font-base text-navy-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-navy-900 focus:ring-0"
        />
        {errors.fullName && (
          <p className="text-red-600 text-body-sm mt-1">
            {errors.fullName.message}
          </p>
        )}
      </motion.div>

      {/* Email */}
      <motion.div variants={itemVariants}>
        <label htmlFor="email" className="block text-body-sm font-semibold text-navy-900 mb-2">
          Email *
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          placeholder="your@email.com"
          className="w-full bg-white border-b-2 border-gold-600 rounded-none px-0 py-2 font-base text-navy-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-navy-900 focus:ring-0"
        />
        {errors.email && (
          <p className="text-red-600 text-body-sm mt-1">{errors.email.message}</p>
        )}
      </motion.div>

      {/* Company */}
      <motion.div variants={itemVariants}>
        <label htmlFor="company" className="block text-body-sm font-semibold text-navy-900 mb-2">
          Company *
        </label>
        <input
          id="company"
          type="text"
          {...register('company')}
          placeholder="Your company"
          className="w-full bg-white border-b-2 border-gold-600 rounded-none px-0 py-2 font-base text-navy-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-navy-900 focus:ring-0"
        />
        {errors.company && (
          <p className="text-red-600 text-body-sm mt-1">
            {errors.company.message}
          </p>
        )}
      </motion.div>

      {/* Industry */}
      <motion.div variants={itemVariants}>
        <label htmlFor="industry" className="block text-body-sm font-semibold text-navy-900 mb-2">
          Industry *
        </label>
        <select
          id="industry"
          {...register('industry')}
          className="w-full bg-white border-b-2 border-gold-600 rounded-none px-0 py-2 font-base text-navy-900 transition-all duration-200 focus:outline-none focus:border-navy-900 focus:ring-0"
        >
          <option value="">Select an industry</option>
          <option value="food-beverage">Food & Beverage</option>
          <option value="fashion-textiles">Fashion & Textiles</option>
          <option value="home-lifestyle">Home & Lifestyle</option>
          <option value="technology">Technology</option>
          <option value="other">Other</option>
        </select>
        {errors.industry && (
          <p className="text-red-600 text-body-sm mt-1">
            {errors.industry.message}
          </p>
        )}
      </motion.div>

      {/* Service Interest */}
      <motion.div variants={itemVariants}>
        <label htmlFor="serviceInterest" className="block text-body-sm font-semibold text-navy-900 mb-2">
          Service Interest *
        </label>
        <select
          id="serviceInterest"
          {...register('serviceInterest')}
          className="w-full bg-white border-b-2 border-gold-600 rounded-none px-0 py-2 font-base text-navy-900 transition-all duration-200 focus:outline-none focus:border-navy-900 focus:ring-0"
        >
          <option value="">Select a service</option>
          <option value="ecommerce">E-Commerce & Shoppertainment</option>
          <option value="heritage">Heritage Brand Storytelling</option>
          <option value="transformation">SME Digital Transformation</option>
          <option value="mentorship">Founder Mentorship</option>
        </select>
        {errors.serviceInterest && (
          <p className="text-red-600 text-body-sm mt-1">
            {errors.serviceInterest.message}
          </p>
        )}
      </motion.div>

      {/* Message */}
      <motion.div variants={itemVariants}>
        <label htmlFor="message" className="block text-body-sm font-semibold text-navy-900 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          {...register('message')}
          placeholder="Tell us about your brand and goals..."
          rows={5}
          className="w-full bg-white border-b-2 border-gold-600 rounded-none px-0 py-2 font-base text-navy-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-navy-900 focus:ring-0 resize-none"
        />
        {errors.message && (
          <p className="text-red-600 text-body-sm mt-1">
            {errors.message.message}
          </p>
        )}
      </motion.div>

      {/* Schedule Call */}
      <motion.div variants={itemVariants} className="flex items-center gap-3">
        <input
          id="scheduleCall"
          type="checkbox"
          {...register('scheduleCall')}
          className="w-4 h-4 rounded border-gold-600 text-gold-600 focus:ring-gold-600 cursor-pointer"
        />
        <label htmlFor="scheduleCall" className="text-body-sm text-navy-900 cursor-pointer">
          Schedule a discovery call with our founder
        </label>
      </motion.div>

      {/* Submit Button */}
      <motion.div variants={itemVariants}>
        <button
          type="submit"
          disabled={isLoading}
          className="button button-gold w-full disabled:opacity-50 disabled:cursor-not-allowed text-lg"
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </motion.div>

      <motion.p variants={itemVariants} className="text-body-sm text-gray-500 text-center">
        We typically respond within 48 hours.
      </motion.p>
    </motion.form>
  )
}
