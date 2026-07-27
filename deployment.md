## 🚀 Deployment Guide

This website is automatically built and deployed using **Netlify**. Any updates pushed to the repository will automatically trigger a build and update the live site at [https://gophercon-india-2026.netlify.app/](https://gophercon-india-2026.netlify.app/).

---

### 📋 Prerequisites

Before setting up deployment, ensure you have:
- Access to the [sreebits91/gophercon-india](https://github.com/sreebits91/gophercon-india) GitHub repository with Admin or Maintainer permissions.
- A [Netlify](https://www.netlify.com/) account.

---

### ⚙️ Setting Up Deployment on Netlify (Initial Setup)

If you are setting up the site from scratch on Netlify:

1. **Log in to Netlify:**
   Go to [app.netlify.com](https://app.netlify.com/) and log in using your GitHub account.

2. **Import New Site:**
   - Click **"Add new site"** > **"Import an existing project"**.
   - Select **GitHub** as your Git provider and authorize Netlify.
   - Search for and select the repository: `sreebits91/gophercon-india`.

3. **Configure Build Settings:**
   - **Branch to deploy:** `main`
   - **Build command:** *(Leave blank for plain HTML/JS/CSS, or specify e.g., `npm run build` / `hugo` if using a framework)*
   - **Publish directory:** `.` *(or `build`, `dist`, `public` depending on your setup)*

4. **Deploy Site:**
   - Click **"Deploy gophercon-india"**.
   - Go to **Site Configuration** > **Domain management** and update the site name to `gophercon-india-2026` to generate `https://gophercon-india-2026.netlify.app/`.

---

### 🔄 Continuous Integration & Automated Builds

- **Production Builds:** Every push to the `main` branch automatically triggers a deployment to production.
- **Pull Request Previews:** Opening a Pull Request (PR) against `main` automatically creates a unique **Deploy Preview** URL so you can test changes before merging.

---

### 🛠️ Manual Deployment via Netlify CLI (Optional)

If you need to deploy directly from your local terminal without pushing to GitHub:

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
