# BrandTalk Website - Deployment Guide

Complete guide for deploying the BrandTalk website to production.

---

## Pre-Deployment Checklist

- [ ] All content updated (copy, images, case studies, articles)
- [ ] Email service configured (Resend/SendGrid API keys)
- [ ] Analytics configured (if using)
- [ ] Calendar integration setup (Calendly/Cal.com)
- [ ] Domain registered (brandtalk.asia)
- [ ] DNS configured
- [ ] All environment variables set
- [ ] Local build tested: `npm run build` succeeds
- [ ] Lighthouse score checked: 85+

---

## Option 1: Vercel (Recommended)

Vercel is the creator of Next.js and provides seamless hosting with automatic deployments.

### Setup

1. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/brandtalk-website.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [https://vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Select your repository
   - Vercel auto-detects Next.js

3. **Configure Environment Variables**
   - In Vercel dashboard → Settings → Environment Variables
   - Add all variables from `.env.example`:
     ```
     NEXT_PUBLIC_SITE_URL
     NEXT_PUBLIC_CONTACT_EMAIL
     RESEND_API_KEY (or SendGrid/Mailgun key)
     NEXT_PUBLIC_PLAUSIBLE_DOMAIN (optional)
     NEXT_PUBLIC_GA_ID (optional)
     ```

4. **Configure Domain**
   - Dashboard → Settings → Domains
   - Add `brandtalk.asia`
   - Follow DNS configuration instructions
   - Typical records:
     ```
     A record: 76.76.19.165 → brandtalk.asia
     CNAME: www → cname.vercel-dns.com
     ```

5. **Deploy**
   - Click "Deploy"
   - Vercel builds and deploys automatically
   - Check deployment logs for errors

6. **Post-Deploy**
   - Test all forms and links
   - Check Core Web Vitals in Vercel Analytics
   - Monitor error tracking

### Auto-Deployment
Vercel automatically deploys on:
- Commits to `main` branch
- Pull request merges
- Manual redeploy in dashboard

### Rollback
- Dashboard → Deployments
- Click deployment to rollback
- Or redeploy previous commit

---

## Option 2: Netlify

### Setup

1. **Prepare for Netlify**
   ```bash
   # No special config needed; Netlify auto-detects Next.js
   npm run build
   ```

2. **Connect to Netlify**
   - Go to [https://netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub repository
   - Build settings auto-detected

3. **Configure Environment Variables**
   - Site Settings → Build & Deploy → Environment
   - Add all `.env.example` variables

4. **Configure Domain**
   - Site Settings → Domain Management
   - Add custom domain: `brandtalk.asia`
   - Update DNS records at registrar

5. **Deploy**
   - Netlify automatically builds and deploys
   - Check deployment logs

6. **Enable HTTPS**
   - Automatic via Let's Encrypt
   - Takes ~5 minutes

### Deploy Function (Optional)
For contact form, use Netlify Functions:

```typescript
// netlify/functions/contact.ts
import { Handler } from '@netlify/functions'

const handler: Handler = async (event) => {
  const body = JSON.parse(event.body || '{}')
  
  // Send email via Resend, SendGrid, etc.
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Received' }),
  }
}

export { handler }
```

---

## Option 3: AWS Amplify

### Setup

1. **Install Amplify CLI**
   ```bash
   npm i -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize Amplify**
   ```bash
   amplify init
   # Select Next.js as framework
   # Choose desired region
   ```

3. **Add Hosting**
   ```bash
   amplify add hosting
   # Choose "Continuous deployments"
   ```

4. **Configure Environment Variables**
   - AWS Amplify Console
   - App Settings → Environment variables
   - Add all `.env.example` variables

5. **Deploy**
   ```bash
   amplify publish
   ```

6. **Configure Domain**
   - Amplify Console → App Settings → Domain management
   - Add `brandtalk.asia`
   - Update DNS records

---

## Post-Deployment Tasks

### 1. Verify Site
- [ ] Visit https://brandtalk.asia
- [ ] Test navigation on desktop, tablet, mobile
- [ ] Test contact form
- [ ] Test all links and navigation

### 2. Set Up Analytics
**Option A: Plausible (Privacy-first)**
- Sign up: [https://plausible.io](https://plausible.io)
- Add site: brandtalk.asia
- Add tracking script (or use Next.js integration)

**Option B: Google Analytics**
- Create GA4 property
- Add tracking script to `_document.tsx`:
   ```typescript
   import { useEffect } from 'react'
   
   export default function Document() {
     useEffect(() => {
       window.dataLayer = window.dataLayer || []
       gtag('config', 'G-XXXXX')
     }, [])
     
     return (...)
   }
   ```

### 3. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Verify domain ownership
- [ ] Monitor indexing status
- [ ] Set up alerts for crawl errors

### 4. Email Configuration
**With Resend:**
```bash
npm install resend
```

Update `app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Send transactional emails
await resend.emails.send({
  from: 'noreply@brandtalk.asia',
  to: email,
  subject: 'Thank you for contacting BrandTalk',
  html: `<h1>Message received</h1>...`
})
```

**With SendGrid:**
```bash
npm install @sendgrid/mail
```

```typescript
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

await sgMail.send({
  to: email,
  from: 'noreply@brandtalk.asia',
  subject: 'Thank you for contacting BrandTalk',
  html: `...`
})
```

### 5. Set Up Monitoring
- [ ] Error tracking (Sentry, Rollbar, or platform-native)
- [ ] Performance monitoring
- [ ] Uptime monitoring (UptimeRobot, Pingdom)
- [ ] Alert notifications

---

## Performance Optimization

### Image Optimization
All images are already optimized via Next.js `<Image>` component.
- Automatic WebP/AVIF conversion
- Responsive image sizes
- Lazy loading

### Core Web Vitals
Monitor in:
- Vercel Analytics (dashboard)
- Google PageSpeed Insights
- Web Vitals Chrome Extension

Target scores:
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

### Caching Strategy
Vercel/Netlify automatically:
- Caches static assets (images, CSS, JS)
- Implements HTTP/2 Server Push
- Compresses responses (gzip/brotli)

---

## Monitoring & Maintenance

### Weekly
- [ ] Check Analytics
- [ ] Monitor error tracking
- [ ] Verify forms are working

### Monthly
- [ ] Update dependencies (security patches)
- [ ] Review Core Web Vitals
- [ ] Check Google Search Console
- [ ] Monitor uptime

### Quarterly
- [ ] Major dependency updates
- [ ] Content review and updates
- [ ] SEO performance review
- [ ] User experience review

---

## Troubleshooting

### Issue: Deployment fails
1. Check build logs in platform dashboard
2. Run locally: `npm run build`
3. Verify all environment variables are set
4. Check for TypeScript errors: `npm run type-check`

### Issue: Forms not working
1. Verify API endpoint is accessible
2. Check browser console for errors
3. Verify email service API key is valid
4. Test API directly: `curl -X POST https://brandtalk.asia/api/contact`

### Issue: Images not loading
1. Check image URLs are correct
2. Verify image paths in `next.config.js` remotePatterns
3. Check image dimensions and format
4. Use Next.js Image Inspector (dev mode)

### Issue: Slow performance
1. Check Core Web Vitals in dashboard
2. Optimize images (use WebP, reduce size)
3. Minimize third-party scripts
4. Enable caching headers

---

## Security

### HTTPS
- Automatic on all platforms (Vercel, Netlify, Amplify)
- HSTS headers enabled by default

### Headers
Add security headers in `next.config.js`:
```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ],
    },
  ]
}
```

### Content Security Policy
Consider adding CSP header for additional security.

---

## Rollback Plan

If something goes wrong:

1. **Vercel**: Dashboard → Deployments → Select previous deployment → Redeploy
2. **Netlify**: Site Settings → Deploys → Roll back to previous build
3. **Amplify**: AppSettings → Deployments → Select previous build
4. **Git**: Revert commit and push: `git revert <commit-hash> && git push`

---

## After Launch Checklist

- [ ] Monitor logs for errors
- [ ] Check user feedback
- [ ] Monitor analytics
- [ ] Update case studies and articles regularly
- [ ] Test email submissions
- [ ] Verify all CTAs working
- [ ] Check mobile responsiveness
- [ ] Review SEO performance after 2-4 weeks

---

## Support

For deployment issues:
1. Check platform-specific documentation
2. Review build logs in dashboard
3. Contact platform support
4. Check GitHub issues and discussions

---

**Happy launching! 🚀**
