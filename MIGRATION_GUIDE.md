# Migration Guide: GitHub Pages → Cloudflare Workers

## ✅ Setup Complete!

I've converted your portfolio to Cloudflare Workers. Here's what was done:

### Files Created:
- `cloudflare.config.ts` - Worker configuration (name, compatibility date, observability)
- `wrangler.config.ts` - Points static asset serving at `./public`
- `package.json` - Project dependencies
- `public/` - Static files directory (all your HTML, CSS, images)

The site is served as static assets only; there is no custom worker script.

---

## 🚀 Deploy Your Worker

### Step 1: Set Cloudflare API Token
```bash
# Create an API token at: https://dash.cloudflare.com/profile/api-tokens
# Then set it as environment variable:
export CLOUDFLARE_API_TOKEN="your-token-here"
```

### Step 2: Deploy to Cloudflare
```bash
cd ~/projects/portfolio-site

# Install dependencies
npm install

# Deploy your worker
npm run deploy
```

This will create your worker at: `https://portfolio-site.workers.dev`

---

## 🔗 Configure Custom Domain

Since you've already updated nameservers to Cloudflare:

1. **In Cloudflare Dashboard:**
   - Go to DNS → Add Record
   - Add an `A` record:
     ```
     Type: A
     Name: @
     Content: 162.158.77.12  # (This will be shown after deploy)
     Proxy: Proxied (orange cloud)
     ```

2. **Or use CNAME (if using Workers Subdomain):**
   - Go to DNS → Add Record
   - Type: `CNAME`
   - Name: `@`
   - Content: `portfolio-site.workers.dev`
   - Proxy: Proxied

3. **In Workers Dashboard:**
   - Go to "Domains" tab
   - Add custom domain `masonethan.com`
   - Click "Save"

---

## 📋 What Changed

### Before (GitHub Pages):
- Hosted on GitHub's servers
- Static file serving only
- CDN via GitHub Pages

### After (Cloudflare Workers):
- Hosted on Cloudflare's edge network
- Better performance and caching
- Full Cloudflare security features

---

## 🎯 Worker Features

Cloudflare's static asset serving handles:
- ✅ Static file serving (HTML, CSS, JS, images)
- ✅ Root path → index.html
- ✅ Proper MIME types for all file types
- ✅ Cloudflare caching

---

## 🔄 Updating Your Site

After deploying:
```bash
# Edit files in ~/projects/portfolio-site/public
# Then deploy:
npm run deploy
```

Changes will be live immediately!

---

## 📊 Performance

Cloudflare Workers benefit from:
- 300+ edge locations worldwide
- Automatic SSL/TLS
- DDoS protection
- Fast global CDN

---

## 🆘 Troubleshooting

### Worker doesn't deploy:
- Check API token has `Workers & Pages: Edit` permission
- Verify `CLOUDFLARE_API_TOKEN` is set

### Images not loading:
- Check file paths in HTML are correct
- Files should be in `public/images/`

### Custom domain not working:
- Wait for DNS propagation (up to 24 hours)
- Verify CNAME record points to worker subdomain

---

## 🎉 You're Done!

Your portfolio is now live on Cloudflare Workers! 🚀

Check your site at: `https://portfolio-site.workers.dev`
