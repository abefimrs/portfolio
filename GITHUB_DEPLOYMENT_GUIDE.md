# 🚀 GitHub Upload Instructions

Follow these steps to host your portfolio on GitHub Pages:

---

## STEP 1: Create GitHub Account (if needed)

1. Go to https://github.com
2. Click "Sign Up" and create your account
3. Verify your email

---

## STEP 2: Create New Repository

1. Click the **+** icon (top right)
2. Select **"New repository"**
3. Fill in:
   - Repository name: `portfolio`
   - Description: `My personal portfolio website`
   - Make it **Public**
   - ❌ Don't check "Add a README file"
   - ❌ Don't add .gitignore
4. Click **"Create repository"**

---

## STEP 3: Download Your Portfolio Files

Download these files/folders from this project:
- `src/` folder
- `public/` folder
- `.github/` folder
- `package.json`
- `next.config.ts`
- `tsconfig.json`
- `tailwind.config.ts`
- `postcss.config.mjs`
- `.gitignore`
- `README.md`

Save them in a new folder called `portfolio` on your computer.

---

## STEP 4: Initialize Git and Push to GitHub

Open terminal/command prompt in your `portfolio` folder:

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial portfolio commit"

# Connect to your GitHub repository
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## STEP 5: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/portfolio`
2. Click **Settings** tab
3. In the left sidebar, click **Pages**
4. Under "Build and deployment" → "Source", select **GitHub Actions**
5. The deployment will start automatically!

---

## STEP 6: View Your Live Website

After 2-5 minutes, your portfolio will be live at:
```
https://YOUR_USERNAME.github.io/portfolio/
```

---

## ✅ What Happens Automatically

When you push code to GitHub:
1. GitHub Actions detects the push
2. It installs dependencies (bun install)
3. It builds the static site (bun run build)
4. It deploys to GitHub Pages

You can see the build progress in the **Actions** tab of your repository.

---

## 🔄 How to Update Your Portfolio

1. Make changes to your files
2. Run these commands:
```bash
git add .
git commit -m "Update portfolio"
git push
```
3. GitHub will automatically rebuild and deploy!

---

## 🆘 Troubleshooting

### Build Failed?
- Check the **Actions** tab for error details
- Make sure all files were uploaded correctly

### Page Not Loading?
- Wait 5 minutes for deployment
- Check if GitHub Pages is enabled in Settings → Pages
- Make sure the source is set to "GitHub Actions"

### Images Not Showing?
- Images should be in `public/portfolio/` folder
- Check image paths in code: `/portfolio/image-name.png`

---

## 📧 Need Help?

Contact: me.sanaullah.asif@gmail.com
