# GrowthLab Quiz Template

A customizable quiz application template that can be sold to clients. Users can manage questions through Sanity CMS and capture leads through MailerLite integration.

## Features

- ✅ React + TypeScript frontend
- ✅ Sanity CMS for question management
- ✅ MailerLite integration for lead capture
- ✅ Netlify Functions for serverless backend
- ✅ Jotai for state management
- ✅ Tailwind CSS for styling
- ✅ Quiz branching logic
- ✅ Form validation with Joi

## Setup Instructions

### 1. Environment Variables

Create a `.env` file in the root directory:

```env
# Sanity (already configured)
SANITY_PROJECT_ID=08fgj36d
SANITY_DATASET=production

# MailerLite (configure for each client)
MAILERLITE_API_KEY=your_mailerlite_api_key
MAILERLITE_GROUP_ID=your_mailerlite_group_id
```

### 2. Sanity Studio Setup

1. Navigate to the `studio` directory
2. Install dependencies: `npm install`
3. Start the studio: `npm run dev`
4. Create questions with proper branching logic

### 3. Main Application

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Build for production: `npm run build`

### 4. Deployment

Deploy to Netlify with the included `netlify.toml` configuration.

## Sanity Schema

### Quiz Question Structure

```typescript
{
  order: number,           // Display order
  shortId: string,         // Human-readable ID (Q1, Q2, etc.)
  question: string,        // The question text
  options: [
    {
      text: string,        // Option text
      next: Reference      // Next question or lead capture
    }
  ]
}
```

### Lead Capture

Simple document with title and description for the email capture screen.

## Client Customization

For each client, update:

1. **MailerLite Configuration**:
   - API Key in environment variables
   - Group ID for lead segmentation

2. **Branding**:
   - Logo in `src/assets/`
   - Colors in Tailwind configuration
   - Text content in Sanity

3. **Questions**:
   - Create questions in Sanity Studio
   - Set up branching logic
   - Configure lead capture flow

## API Endpoints

- `/.netlify/functions/sendLead` - Handles lead submission to MailerLite

## Development

```bash
# Install dependencies
npm install
cd studio && npm install

# Start development servers
npm run dev          # Main app
cd studio && npm run dev  # Sanity studio

# Run tests
npm run test:ui

# Build for production
npm run build
```

## Troubleshooting

1. **Questions not loading**: Check Sanity project ID and dataset configuration
2. **Lead capture failing**: Verify MailerLite API key and group ID
3. **Build errors**: Ensure all dependencies are installed and environment variables are set
