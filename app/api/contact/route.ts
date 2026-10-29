import { NextRequest, NextResponse } from 'next/server'

/**
 * Contact form API endpoint - Configured with Resend
 *
 * Email Configuration:
 * - Recipient: quynhphan.mar@gmail.com
 * - Service: Resend (https://resend.com)
 * - Setup: Add RESEND_API_KEY to .env.local
 *
 * To get your API key:
 * 1. Go to https://resend.com
 * 2. Create account and get API key
 * 3. Add to .env.local: RESEND_API_KEY=your_key_here
 * 4. npm install resend
 */

import { Resend } from 'resend'

const RECIPIENT_EMAIL = 'quynhphan.mar@gmail.com'

// Resend only accepts a custom domain once it is verified. Until brandtalk.asia
// is verified, the shared sandbox sender is used.
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

// Created only when a key is present, so a missing key never breaks the build
// or crashes the route at import time.
function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY
  if (!key) return null
  return new Resend(key)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { fullName, email, company, industry, serviceInterest, message } = body

    if (!fullName || !email || !company || !serviceInterest || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Log submission (for development)
    console.log('Form submission received:', {
      fullName,
      email,
      company,
      industry,
      serviceInterest,
      message,
      scheduleCall: body.scheduleCall || false,
      timestamp: new Date().toISOString(),
    })

    const resend = getResend()

    if (resend) {
      // The notification to BrandTalk matters most, so it is sent first and
      // independently of the submitter's confirmation.
      try {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: RECIPIENT_EMAIL,
          replyTo: email,
          subject: `New inquiry: ${fullName} (${company})`,
          html: generateInquiryEmail(
            fullName,
            email,
            company,
            industry,
            serviceInterest,
            message,
            body.scheduleCall
          ),
        })
      } catch (notifyError) {
        console.error('Inquiry notification failed:', notifyError)
      }

      // Until brandtalk.asia is verified in Resend, this confirmation may be
      // rejected for recipients other than the account owner. A failure here
      // must not affect the submitter's response.
      try {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: email,
          subject: 'Thank you for contacting BrandTalk',
          html: generateConfirmationEmail(fullName, message),
        })
      } catch (confirmError) {
        console.error('Confirmation email failed:', confirmError)
      }
    } else {
      console.warn(
        'RESEND_API_KEY not set. Submission logged but no email sent.'
      )
    }

    return NextResponse.json(
      {
        message:
          'Thank you for your message! We will respond within 48 hours at quynhphan.mar@gmail.com',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process your message. Please try again.' },
      { status: 500 }
    )
  }
}

/**
 * Email template for confirmation to submitter
 */
function generateConfirmationEmail(
  fullName: string,
  message: string
): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { border-bottom: 2px solid #c9a961; padding-bottom: 20px; margin-bottom: 20px; }
          .logo { color: #1a1a1a; font-size: 24px; font-weight: bold; }
          .content { color: #333; line-height: 1.6; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #999; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">BrandTalk</div>
            <p style="margin: 5px 0; color: #999;">More value, more sustainable</p>
          </div>

          <div class="content">
            <h1>Thank you, ${fullName}!</h1>

            <p>We received your message and appreciate you reaching out to BrandTalk.</p>

            <p>Our team will review your inquiry and get back to you within <strong>48 hours</strong>.</p>

            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />

            <h3>Your Message:</h3>
            <blockquote style="border-left: 3px solid #c9a961; padding-left: 15px; color: #666;">
              ${message.replace(/\n/g, '<br>')}
            </blockquote>

            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />

            <p>If you have any urgent questions, feel free to reply to this email.</p>
          </div>

          <div class="footer">
            <p>BrandTalk Agency</p>
            <p>Elevating Vietnamese heritage brands through cultural wisdom + digital innovation</p>
            <p>www.brandtalk.asia</p>
          </div>
        </div>
      </body>
    </html>
  `
}

/**
 * Email template for inquiry notification to BrandTalk
 */
function generateInquiryEmail(
  fullName: string,
  email: string,
  company: string,
  industry: string | undefined,
  serviceInterest: string,
  message: string,
  scheduleCall: boolean
): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .info-box { background: #f8f6f3; padding: 15px; border-radius: 5px; margin: 15px 0; }
          .info-box p { margin: 8px 0; }
          .label { font-weight: bold; color: #1a1a1a; }
          .value { color: #666; }
          .cta { background: #c9a961; color: white; padding: 10px 15px; border-radius: 3px; display: inline-block; margin-top: 15px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>🎯 New Inquiry from ${fullName}</h2>

          <div class="info-box">
            <p><span class="label">Name:</span> <span class="value">${fullName}</span></p>
            <p><span class="label">Email:</span> <span class="value"><a href="mailto:${email}">${email}</a></span></p>
            <p><span class="label">Company:</span> <span class="value">${company}</span></p>
            ${industry ? `<p><span class="label">Industry:</span> <span class="value">${industry}</span></p>` : ''}
            <p><span class="label">Service Interest:</span> <span class="value">${serviceInterest}</span></p>
            <p><span class="label">Schedule Call:</span> <span class="value">${scheduleCall ? '✅ Yes' : '❌ No'}</span></p>
          </div>

          <h3>Message:</h3>
          <blockquote style="border-left: 3px solid #c9a961; padding-left: 15px; color: #666;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>

          <p style="margin-top: 30px;">
            <a href="mailto:${email}" class="cta">Reply to ${fullName}</a>
          </p>

          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="color: #999; font-size: 12px;">Received: ${new Date().toLocaleString()}</p>
        </div>
      </body>
    </html>
  `
}
