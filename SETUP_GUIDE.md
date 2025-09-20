# Quiz App Setup Guide

This guide will help you set up your quiz app with your own Sanity CMS and CRM integration.

## 🚀 Quick Start

1. **Deploy to Netlify**: Connect your GitHub repo to Netlify
2. **Configure Environment Variables**: Add your Sanity and CRM credentials
3. **Set up Sanity CMS**: Create your quiz questions and branching logic
4. **Configure CRM**: Connect your email marketing tool

## 📋 Environment Variables

Add these environment variables in your Netlify dashboard:

### Required Variables:

```bash
VITE_SANITY_PROJECT_ID=your_sanity_project_id
VITE_SANITY_DATASET=production
VITE_MAILERLITE_API_KEY=your_mailerlite_api_key
VITE_MAILERLITE_GROUP_ID=your_group_id
```

### Optional Variables:

```bash
VITE_SANITY_API_VERSION=2023-09-20
VITE_CRM_TYPE=mailerlite
```

## 🎯 Sanity CMS Setup

### 1. Create a Sanity Project

- Go to [sanity.io](https://sanity.io)
- Create a new project
- Copy your Project ID to `VITE_SANITY_PROJECT_ID`

### 2. Configure CORS Origins

- Go to Project Settings → API
- Add your Netlify domain to CORS origins:
  - `https://your-app-name.netlify.app`
  - `http://localhost:5173` (for local development)

### 3. Import Schema

The quiz schema is already configured in `/studio/schemas/`. Deploy your Sanity Studio:

```bash
cd studio
npm install
npm run deploy
```

### 4. Create Quiz Questions

In your Sanity Studio:

1. Create quiz questions with branching logic
2. Set up lead capture redirects
3. Test the flow

## 📧 CRM Integration (MailerLite)

### 1. Get API Credentials

- Log into MailerLite
- Go to Integrations → Developer API
- Generate an API key
- Add to `VITE_MAILERLITE_API_KEY`

### 2. Get Group ID

- Create a subscriber group in MailerLite
- Copy the Group ID from the URL
- Add to `VITE_MAILERLITE_GROUP_ID`

## 🛠️ Development

### Local Development

1. Copy `env.example` to `.env.local`
2. Fill in your development credentials
3. Run `npm run dev`

### Production Deployment

1. Set environment variables in Netlify
2. Deploy from your main branch
3. Test the live quiz

## 🔧 Troubleshooting

### Quiz Shows Demo Questions

- Check your `VITE_SANITY_PROJECT_ID` is correct
- Verify CORS origins include your domain
- Ensure questions exist in Sanity

### CRM Integration Not Working

- Verify API keys are correct
- Check Netlify function logs
- Test with a simple email first

### CORS Errors

- Add your domain to Sanity CORS origins
- Include both `http://localhost:5173` and your production domain

## 📚 Customization

### Styling

- Modify `/src/index.css` for global styles
- Update component styles in `/src/components/`
- Customize colors in Tailwind config

### Questions & Logic

- Use Sanity Studio to manage questions
- Set up branching logic with "next" references
- Test thoroughly before going live

### CRM Integration

- Modify `/functions/sendLead.ts` for different CRMs
- Update environment variables accordingly
- Test lead capture functionality

## 🎉 Going Live

1. **Test Everything**: Run through the complete quiz flow
2. **Check Analytics**: Verify leads are being captured
3. **Monitor Performance**: Watch for any errors in Netlify logs
4. **Backup Data**: Export your Sanity content regularly

## 📞 Support

If you need help:

1. Check the console logs in your browser
2. Review Netlify function logs
3. Verify all environment variables are set
4. Test with demo questions first

---

**Note**: The app will automatically use demo questions if Sanity isn't configured, so your quiz will always work!
