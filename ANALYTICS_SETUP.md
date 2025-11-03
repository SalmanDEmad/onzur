# Analytics Setup Guide

## 🎯 Overview
Your website now has Google Analytics 4 and Microsoft Clarity tracking integrated. Both are **completely FREE** and provide powerful insights about your visitors.

---

## 📊 Google Analytics 4 Setup (10 minutes)

### Step 1: Create Google Account
1. Go to [analytics.google.com](https://analytics.google.com)
2. Sign in with your Google account (or create one)

### Step 2: Create Property
1. Click **"Start measuring"** or **"+ Create Property"**
2. Enter property details:
   - **Property name**: Onzur Media Studio
   - **Time zone**: (GMT+03:00) Kuwait, Riyadh (Qatar)
   - **Currency**: Qatari Riyal (QAR)
3. Click **"Next"**

### Step 3: Business Information
1. Select your industry: **Marketing & Advertising**
2. Select business size: Choose appropriate option
3. Select how you'll use Analytics: Check relevant boxes
4. Click **"Create"**
5. Accept Terms of Service

### Step 4: Set Up Data Stream
1. Select platform: **"Web"**
2. Enter website details:
   - **Website URL**: https://onzur.com
   - **Stream name**: Onzur Website
3. Click **"Create stream"**

### Step 5: Get Measurement ID
1. After creating the stream, you'll see your **Measurement ID** at the top
2. It looks like: `G-XXXXXXXXXX` (starts with G-)
3. **Copy this ID**

### Step 6: Add to Your Website
1. Open your project in VS Code
2. Create a file called `.env.local` in the root folder (same level as package.json)
3. Add this line:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   Replace `G-XXXXXXXXXX` with your actual Measurement ID
4. Save the file
5. Restart your dev server (stop and run `npm run dev` again)

### Step 7: Verify It's Working
1. Visit your website at localhost:3000
2. Go back to Google Analytics
3. Click **"Reports"** → **"Realtime"**
4. You should see yourself as an active user! 🎉

---

## 🔍 Microsoft Clarity Setup (5 minutes)

### Step 1: Create Account
1. Go to [clarity.microsoft.com](https://clarity.microsoft.com)
2. Click **"Sign up"** (free)
3. Sign in with Microsoft account, Google, or Facebook

### Step 2: Create Project
1. Click **"+ New Project"**
2. Enter project details:
   - **Name**: Onzur Media Studio
   - **Website URL**: https://onzur.com
   - Select **"I don't have a website yet"** if not live
3. Click **"Add new project"**

### Step 3: Get Project ID
1. After creating the project, click on **"Setup"** → **"Install tracking code"**
2. Look for a code snippet that contains your Project ID
3. It looks like: `clarity("init", "abc123def4")`
4. **Copy the alphanumeric ID** (e.g., `abc123def4`)

### Step 4: Add to Your Website
1. Open `.env.local` file in your project
2. Add this line:
   ```
   NEXT_PUBLIC_CLARITY_PROJECT_ID=abc123def4
   ```
   Replace `abc123def4` with your actual Project ID
3. Save the file
4. Restart your dev server

### Step 5: Verify It's Working
1. Visit your website at localhost:3000
2. Go back to Microsoft Clarity dashboard
3. Click on your project
4. You should see a green checkmark saying "Clarity is installed" 🎉

---

## 🎬 What Each Tool Does

### Google Analytics 4
- **Visitor numbers**: How many people visit your site
- **Traffic sources**: Where visitors come from (Google, social media, direct, etc.)
- **Popular pages**: Which pages get the most views
- **Demographics**: Age, gender, location of visitors
- **Conversions**: Track form submissions, clicks, etc.
- **Real-time data**: See who's on your site right now

### Microsoft Clarity
- **Heatmaps**: See where people click and scroll
- **Session recordings**: Watch how people use your site (like a movie)
- **Rage clicks**: See where users get frustrated
- **Dead clicks**: Find broken buttons
- **User behavior**: Understand how people navigate

---

## 🔒 Privacy & Security

### Your Environment Variables Are Protected
- `.env.local` is in `.gitignore` - it won't be pushed to GitHub
- Your IDs are safe and private
- These IDs are meant to be public (NEXT_PUBLIC_) but still good practice

### GDPR Compliance
Both tools are GDPR compliant when used correctly:
- **GA4**: Automatically anonymizes IP addresses
- **Clarity**: No personally identifiable information is collected

**Recommended**: Add a cookie consent banner (future task) to be fully compliant.

---

## 🚀 Quick Start Checklist

- [ ] Create Google Analytics 4 account
- [ ] Get GA4 Measurement ID (G-XXXXXXXXXX)
- [ ] Create Microsoft Clarity account
- [ ] Get Clarity Project ID
- [ ] Create `.env.local` file
- [ ] Add both IDs to `.env.local`
- [ ] Restart dev server (`npm run dev`)
- [ ] Verify both tools show green checkmarks
- [ ] Celebrate! 🎉

---

## 📝 Example .env.local File

```env
# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-ABC123XYZ9

# Microsoft Clarity
NEXT_PUBLIC_CLARITY_PROJECT_ID=abc123def4
```

---

## 🆘 Troubleshooting

### Analytics Not Showing Up?
1. **Wait 24-48 hours** - GA4 can take time to process data
2. **Check Realtime reports** - These update instantly
3. **Verify IDs are correct** - Double-check for typos
4. **Restart dev server** - Changes to .env.local need a restart
5. **Clear browser cache** - Hard refresh (Ctrl+Shift+R)

### Clarity Not Recording?
1. **Check project status** - Should show "Active"
2. **Wait 2-3 minutes** - First recordings take time
3. **Disable ad blockers** - They can block tracking
4. **Try incognito mode** - Rules out extension issues

---

## 📞 Need Help?

If you get stuck:
1. Google Analytics help: [support.google.com/analytics](https://support.google.com/analytics)
2. Clarity help: [docs.microsoft.com/clarity](https://docs.microsoft.com/clarity)
3. Check the console for errors (F12 → Console tab)

---

## 🎓 Next Steps (Optional)

Once both tools are running:
1. **Set up goals** in GA4 (track form submissions)
2. **Create custom events** (track button clicks)
3. **Set up alerts** (get notified of traffic spikes)
4. **Configure filters** (exclude your own visits)
5. **Link to Google Search Console** (see search performance)

**Estimated time to full analytics mastery**: 2-3 hours of exploration

Good luck! 🚀
