# EmailJS Setup Guide for AI Boffins Contact Form

## Overview
Your contact form is now configured to use EmailJS to send emails directly to `info@aiboffins.co.uk`. Follow these steps to complete the setup.

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. **Important**: Use `info@aiboffins.co.uk` as the email address
6. Note down your **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Configure the template layout. You have two options for the template content:

### Option A: Premium HTML Layout (Recommended)
This delivers a beautiful, professional email matching the AI Boffins branding (dark blue header, organized contact details table, and styled message block).

1. Click on the **HTML** button or the **Source Code** (`<>`) icon in the EmailJS text editor.
2. Paste the following single variable as the entire content:
   ```html
   {{{html_message}}}
   ```
   *(Note: The triple braces `{{{ ... }}}` are required so EmailJS renders the raw HTML correctly rather than escaping the code).*

### Option B: Plain Text Layout
If you prefer standard plain text email delivery:
1. In the text editor, paste:
   ```
   From: {{from_name}} ({{from_email}})
   Company: {{company}}
   Phone: {{phone}}
   Service Interest: {{service}}

   Message:
   {{message}}

   ---
   This message was sent from the AI Boffins contact form.
   ```

### Template Settings:
- **Template Name**: `contact_form_template`
- **Subject**: `New Contact Form Submission from {{from_name}}`

4. Save the template and note down your **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `xxxxxxxxxxxxxxxx`)

## Step 5: Update Contact.js
Replace the placeholder values in `components/Contact.js`:

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your actual Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your actual Template ID  
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your actual Public Key
```

## Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Navigate to your contact form
3. Fill out and submit the form
4. Check that the email arrives at `info@aiboffins.co.uk`

## Troubleshooting
- **Emails not sending**: Check browser console for error messages
- **Template not found**: Verify Template ID is correct
- **Service not found**: Verify Service ID is correct
- **Authentication failed**: Verify Public Key is correct

## Free Tier Limits
- **200 emails per month** (free tier)
- **2 email templates**
- **1 email service**

## Security Note
The Public Key is safe to expose in frontend code. EmailJS handles security through their backend.

## Support
If you need help with EmailJS setup, their documentation is excellent: [EmailJS Docs](https://www.emailjs.com/docs/)

