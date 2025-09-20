# Deployment Options

This quiz app can be deployed on multiple platforms. Choose the option that best fits your needs:

## 🚀 Option 1: Netlify (Recommended for Most Clients)

### Why Netlify?

- ✅ **Zero configuration** - works out of the box
- ✅ **Free tier** available
- ✅ **Automatic deployments** from GitHub
- ✅ **Built-in forms** and serverless functions
- ✅ **Easy environment variables** management
- ✅ **Custom domains** included

### Setup Steps:

1. **Connect GitHub**: Link your repo to Netlify
2. **Auto-deploy**: Netlify builds automatically on push
3. **Set Environment Variables**: Add your Sanity and CRM credentials
4. **Custom Domain**: Optional custom domain setup

### Environment Variables in Netlify:

```bash
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_MAILERLITE_API_KEY=your_api_key
VITE_MAILERLITE_GROUP_ID=your_group_id
```

### Pricing:

- **Free**: 100GB bandwidth, 300 build minutes
- **Pro**: $19/month - unlimited builds, forms, functions

---

## 🌐 Option 2: Vercel (Alternative Platform)

### Why Vercel?

- ✅ **Excellent performance** - global CDN
- ✅ **Serverless functions** included
- ✅ **Preview deployments** for every branch
- ✅ **Analytics** built-in
- ✅ **Edge functions** for better performance

### Setup Steps:

1. **Import Project**: Connect GitHub repo to Vercel
2. **Framework Detection**: Automatically detects Vite
3. **Environment Variables**: Set up in dashboard
4. **Deploy**: Automatic deployment

### Environment Variables in Vercel:

```bash
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_MAILERLITE_API_KEY=your_api_key
VITE_MAILERLITE_GROUP_ID=your_group_id
```

### Pricing:

- **Free**: 100GB bandwidth, unlimited personal projects
- **Pro**: $20/month - team collaboration, analytics

---

## 🏢 Option 3: Traditional Hosting (VPS/Shared Hosting)

### Why Traditional Hosting?

- ✅ **Full control** over server environment
- ✅ **Existing infrastructure** - if you already have hosting
- ✅ **Custom server setup** - for advanced users
- ✅ **Cost-effective** for multiple projects

### Setup Steps:

1. **Build Project**: `npm run build`
2. **Upload Files**: Upload `dist/` folder to web server
3. **Configure Server**: Set up environment variables
4. **Domain Setup**: Point domain to hosting

### Requirements:

- Node.js server or static file hosting
- Environment variable configuration
- SSL certificate (recommended)

---

## 🎯 Recommendation Matrix

| Client Type        | Best Option | Why                                     |
| ------------------ | ----------- | --------------------------------------- |
| **Small Business** | Netlify     | Easy setup, free tier, great support    |
| **Agency**         | Vercel      | Better performance, preview deployments |
| **Enterprise**     | VPS/Custom  | Full control, existing infrastructure   |
| **Developer**      | Any         | Personal preference                     |

---

## 📋 Deployment Checklist

### Before Deployment:

- [ ] Environment variables configured
- [ ] Sanity CMS set up and tested
- [ ] CRM integration working
- [ ] Custom domain ready (optional)
- [ ] SSL certificate (automatic on Netlify/Vercel)

### After Deployment:

- [ ] Test quiz flow end-to-end
- [ ] Verify lead capture working
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Monitor performance

---

## 🔧 Troubleshooting

### Common Issues:

**Build Fails:**

- Check environment variables are set
- Verify Node.js version compatibility
- Check for TypeScript errors

**CORS Errors:**

- Add your domain to Sanity CORS origins
- Include both HTTP and HTTPS versions

**CRM Not Working:**

- Verify API keys are correct
- Check Netlify function logs
- Test API endpoints directly

---

## 💡 Pro Tips

1. **Use Preview Deployments**: Test changes before going live
2. **Monitor Performance**: Use built-in analytics
3. **Backup Regularly**: Export Sanity content
4. **Test Mobile**: Always test on mobile devices
5. **Document Changes**: Keep setup guides updated

---

**Recommendation**: Start with **Netlify** for simplicity, but offer **Vercel** as an alternative for clients who want better performance or are already using Vercel for other projects.
