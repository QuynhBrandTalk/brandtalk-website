# Email Setup Guide for BrandTalk Website

## Overview

The contact form is configured to send emails via **Resend** (recommended), with fallback options for SendGrid or Mailgun.

**Email Recipient**: `quynhphan.mar@gmail.com`

---

## Quick Start: Resend Setup (5 minutes)

### Step 1: Create Resend Account
1. Go to https://resend.com
2. Click **Sign Up**
3. Enter email: `quynhphan.mar@gmail.com`
4. Verify email and set password

### Step 2: Get API Key
1. Log in to Resend dashboard
2. Go to **API Keys** (left sidebar)
3. Copy the API key (starts with `re_...`)

### Step 3: Add to Your Project
1. Create `.env.local` file in project root (if it doesn't exist)
2. Add this line:
   ```
   RESEND_API_KEY=re_your_actual_key_here
   ```
3. Replace `re_your_actual_key_here` with your actual API key from Step 2

### Step 4: Install Resend Package
```bash
npm install resend
```

### Step 5: Uncomment Email Code
1. Open `app/api/contact/route.ts`
2. Find lines with `// import { Resend } from 'resend'` (around line 18)
3. Uncomment this line:
   ```typescript
   import { Resend } from 'resend'
   const resend = new Resend(process.env.RESEND_API_KEY)
   ```
4. Uncomment the email sending blocks (search for `resend.emails.send`)

### Step 6: Test
1. Run development server: `npm run dev`
2. Go to http://localhost:3000/contact
3. Fill out and submit the form
4. Check `quynhphan.mar@gmail.com` for confirmation email
5. Check the same inbox for the inquiry notification email

---

## Email Configuration Details

### What Happens When Someone Submits the Form

**Two emails are sent:**

#### 1. Confirmation Email (to submitter)
- **To**: Person who filled out the form
- **From**: noreply@brandtalk.asia
- **Subject**: "Thank you for contacting BrandTalk"
- **Content**: Confirms receipt, repeats their message, provides response timeline

#### 2. Inquiry Notification (to you)
- **To**: quynhphan.mar@gmail.com
- **From**: noreply@brandtalk.asia
- **Subject**: "New inquiry: [Person Name] ([Company Name])"
- **Content**: 
  - All form fields (name, email, company, industry, service interest)
  - Full message
  - Whether they want to schedule a call
  - Timestamp
  - Direct reply link

---

## File Modified

```
app/api/contact/route.ts
```

**Changes**:
- Added Resend import (currently commented, ready to uncomment)
- Added email template functions: `generateConfirmationEmail()` and `generateInquiryEmail()`
- Configured recipient: `quynhphan.mar@gmail.com`
- Added proper error handling for email failures

---

## Email Templates

### Template 1: Confirmation Email
```html
- Branded header with BrandTalk logo
- Welcome message with recipient name
- Repeats their submitted message in a quote block
- Expected response timeline (48 hours)
- Footer with company info
- Modern, professional styling
```

### Template 2: Inquiry Email
```html
- New inquiry notification
- Organized info box with:
  - Submitter name
  - Email (clickable mailto: link)
  - Company
  - Industry
  - Service interest
  - Call scheduling preference
- Full message in quote block
- Timestamp
- Modern styling consistent with brand
```

---

## Troubleshooting

### "RESEND_API_KEY not set" warning
**Problem**: Emails aren't being sent
**Solution**:
1. Check that `.env.local` file exists in project root
2. Verify `RESEND_API_KEY=re_...` is in the file (with your actual key)
3. Restart dev server: `npm run dev`

### Emails not showing up
**Problem**: Form submits but no email arrives
**Solution**:
1. Check that the API key is correct (copy-paste from Resend dashboard again)
2. Check spam/junk folder
3. Verify Resend package is installed: `npm list resend`
4. Check browser console for errors: Open DevTools → Network tab → look for API errors

### Error: "Could not authenticate"
**Problem**: Resend rejects the API key
**Solution**:
1. Go to https://resend.com/api-keys
2. Generate a new API key
3. Replace the old key in `.env.local`
4. Restart dev server

### Styling looks broken in email
**The HTML includes inline CSS** - should render correctly in all email clients. If not:
1. Test in different email clients (Gmail, Outlook, Apple Mail)
2. Some email clients strip certain styles (that's normal)
3. Core content and structure always shows correctly

---

## Production Deployment

### Before Going Live

1. **Verify Email Domain** (optional but recommended)
   - Resend allows sending from `@brandtalk.asia` domain
   - Requires DNS verification
   - See: https://resend.com/docs/dashboard/domains

2. **Test in Production Environment**
   - Deploy to Vercel/Netlify with `.env` set correctly
   - Submit test form
   - Verify emails arrive

3. **Monitor Email Delivery**
   - Resend dashboard shows delivery status
   - Check bounce rates
   - Monitor for spam complaints

### Vercel Deployment
1. Push code to GitHub (with `.env.local` NOT committed)
2. Connect to Vercel project
3. Add environment variable in Vercel dashboard:
   - Name: `RESEND_API_KEY`
   - Value: Your API key
4. Deploy

### Netlify Deployment
1. Push code to GitHub
2. Connect to Netlify
3. Set environment variable in Netlify UI:
   - Name: `RESEND_API_KEY`
   - Value: Your API key
4. Deploy

---

## Alternative Email Services

### SendGrid
```
1. Go to https://sendgrid.com
2. Get API key
3. npm install @sendgrid/mail
4. Update route to use SendGrid instead of Resend
```

### Mailgun
```
1. Go to https://mailgun.com
2. Get API key
3. npm install mailgun.js
4. Update route to use Mailgun instead of Resend
```

*(Code examples available upon request)*

---

## Questions?

- **Resend Docs**: https://resend.com/docs
- **Contact Support**: https://resend.com/support
- **Email Templates Docs**: https://resend.com/docs/templates

---

**Status**: ✅ Email system ready to activate  
**Recipient**: quynhphan.mar@gmail.com  
**Next Step**: Get Resend API key and add to `.env.local`
