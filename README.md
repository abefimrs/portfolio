# Md. Sanaullah Asif - Portfolio Website

A modern, responsive one-page portfolio website built with Next.js, showcasing fintech engineering expertise and automation solutions.

![Portfolio Preview](public/portfolio/hero-bg.png)

## 🌟 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern UI** - Clean, professional design with smooth animations
- **Fast Loading** - Optimized images and static export for quick load times
- **SEO Ready** - Semantic HTML structure
- **Contact Integration** - Direct email links for easy communication

## 📋 Sections

1. **Hero** - Name, title, and call-to-action buttons
2. **About** - Professional background and expertise
3. **Skills** - Payment Systems, Automation, Backend Development
4. **Projects** - Featured work with descriptions and links
5. **Contact** - Email and collaboration information
6. **Footer** - Copyright and branding

## 🚀 Deploy to GitHub Pages

### Step 1: Create a GitHub Account
If you don't have one, sign up at [github.com](https://github.com)

### Step 2: Create a New Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `portfolio` (or your preferred name)
3. Make it **Public**
4. **Don't** initialize with README (we'll push our own)
5. Click "Create repository"

### Step 3: Initialize Git Locally

Open terminal in your project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial portfolio commit"
```

### Step 4: Connect to GitHub

Replace `YOUR_USERNAME` with your GitHub username:

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under "Source", select **GitHub Actions**
5. The site will be built and deployed automatically

### Step 6: Create GitHub Actions Workflow

Create the file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Bun
        uses: oven-sh/setup-bun@v1

      - name: Install dependencies
        run: bun install

      - name: Build
        run: bun run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './out'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 7: Access Your Website

After the workflow completes, your site will be live at:
```
https://YOUR_USERNAME.github.io/portfolio/
```

---

## 💻 Local Development

### Prerequisites
- [Bun](https://bun.sh) installed

### Run Locally

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# The static files will be in the 'out' folder
```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── portfolio/          # Portfolio images
│       ├── hero-bg.png
│       ├── profile-avatar.png
│       ├── ai-automation.png
│       └── education-management.png
├── src/
│   └── app/
│       └── page.tsx        # Main portfolio page
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
├── next.config.ts
├── package.json
└── README.md
```

---

## 🎨 Customization

### Change Colors
Edit the Tailwind classes in `src/app/page.tsx`:
- Primary: `teal-500`, `teal-400`
- Secondary: `slate-900`, `slate-800`
- Accent: `purple-500`

### Update Content
Edit the text content directly in `src/app/page.tsx`

### Change Images
Replace images in `public/portfolio/` folder

---

## 📧 Contact

**Md. Sanaullah Asif**
- Email: me.sanaullah.asif@gmail.com
- Available for Remote Work

---

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Deployed on [GitHub Pages](https://pages.github.com)
