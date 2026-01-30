# Deployment Guide

Follow these steps to deploy your portfolio to Vercel or Netlify.

## 🚀 Quick Start - Vercel (Recommended)

### Step 1: Initialize Git Repository

Open your terminal in the Portfolio directory and run:

```bash
git init
git add .
git commit -m "Initial portfolio commit"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it `portfolio` (or any name you prefer)
4. **Don't** initialize with README (you already have one)
5. Click "Create repository"

### Step 3: Push to GitHub

GitHub will show you commands. Run these (replace `YOUR_USERNAME` with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account (it's free!)
3. Click "Add New..." → "Project"
4. Import your `portfolio` repository
5. Vercel will auto-detect:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"
7. Wait ~2 minutes and your portfolio will be live! 🎉

You'll get a URL like: `your-portfolio.vercel.app`

---

## 🌐 Alternative - Netlify

### Steps 1-3: Same as above (GitHub setup)

### Step 4: Deploy on Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"
7. Your site will be live in ~2 minutes!

You'll get a URL like: `random-name-123.netlify.app`

---

## ✨ Custom Domain (Optional)

Both platforms allow you to add a custom domain for free:
- **Vercel:** Go to Project Settings → Domains
- **Netlify:** Go to Site Settings → Domain Management

---

## 🔄 Updating Your Portfolio

After making changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel/Netlify will automatically rebuild and deploy your changes!

---

## 📝 Notes

- Both platforms are **completely free** for personal projects
- They provide **HTTPS** automatically
- **Automatic deployments** on every git push
- **Preview deployments** for pull requests
- No credit card required

---

## 🆘 Troubleshooting

**Build fails?**
- Make sure you've run `npm install` first
- Check that all dependencies are in `package.json`

**Site shows blank page?**
- Check browser console for errors
- Verify the build completed successfully
- Make sure `dist` folder contains `index.html`

**Need help?** Check the platform's documentation or support forums.

