# 🚀 Portfolio Setup: Complete Startup Guide

Welcome! Your minimalist engineering portfolio is ready to customize. Follow this guide to get it running and personalized in minutes.

---

## 📋 What You Have

A complete, production-ready **static site portfolio** with:

✅ **5 Core Components**
- Hero section (eye-catching intro)
- Projects showcase (4 feature projects)
- About section (bio + skills)
- Contact section (email + socials)
- Sticky navbar + footer

✅ **Built With**
- Astro 6.1 (static site generator)
- Tailwind CSS (styling)
- Zero client-side JavaScript (fast!)
- Dark theme (modern, reads well)

✅ **Performance**
- Lighthouse 95+
- Page loads < 1s
- Mobile responsive
- Full dark mode

---

## ⚡ Quick Start (3 Steps)

### Step 1: Install Dependencies
```bash
cd showcase
npm install
```

This sets up Astro, Tailwind, and all build tools.

### Step 2: Start Development Server
```bash
npm run dev
```

Open browser → **http://localhost:3000**

You'll see the portfolio with example content.

### Step 3: Start Customizing!
Edit files in `src/components/` to add your info.

---

## ✏️ Customization Quick Map

| Content | File | What to Change |
|---------|------|---|
| **Name/Title** | `src/components/Hero.astro` | h1, p tags |
| **Projects** | `src/components/Projects.astro` | projects array |
| **Bio** | `src/components/About.astro` | p tags, skills array |
| **Email/Socials** | `src/components/Contact.astro` | href links |
| **Colors** | `tailwind.config.cjs` | color values |
| **Site Title** | `src/layouts/Layout.astro` | title meta |
| **Navbar Branding** | `src/layouts/Layout.astro` | branding text |

---

## 🎨 Customization in Detail

### 1. Update Hero Section (5 min)

**File**: `src/components/Hero.astro`

```astro
<!-- Change heading -->
<h1>Backend
  <span class="text-accent">Systems Engineer</span>
</h1>

<!-- Change subheading -->
<p>I design distributed systems that scale.
   Currently exploring AI infrastructure...</p>

<!-- Change status badge -->
<span class="...">→ BUILDING</span>

<!-- Change CTA button links -->
<a href="#projects">View My Work →</a>
<a href="#contact">Get In Touch</a>
```

**Update these:**
- Main h1 text (name/role)
- Subheading (what you do)
- Status badge (BUILDING, ACTIVE, etc.)
- Button labels and destinations

### 2. Update Projects (10 min)

**File**: `src/components/Projects.astro`

Find the `projects` array and update:

```javascript
const projects = [
  {
    name: 'Your Project Name',              // ← Change
    status: 'ACTIVE',                       // ← ACTIVE|STABLE|LEARNING|EXPERIMENTAL
    description: 'What the project does...',// ← 1-2 lines
    techStack: ['Go', 'PostgreSQL', 'K8s'], // ← Technologies used
    github: 'https://github.com/you/repo',  // ← Your GitHub link
    demo: 'https://demo.example.com',       // ← Optional: live demo
    icon: '⚡',                              // ← Optional: emoji
  },
  // Add more projects...
];
```

**Status meanings:**
- `ACTIVE`: Currently building/maintaining
- `STABLE`: Production-ready, completed
- `LEARNING`: Side project, exploring
- `EXPERIMENTAL`: Early stage, proof of concept

**Tech stack:** Keep it honest and realistic.

**Icons:** Pick emojis that represent each project:
- ⚡ for fast/performance
- ⚙️ for infrastructure
- 🧠 for AI
- ☁️ for cloud
- 🔒 for security

### 3. Update About Section (10 min)

**File**: `src/components/About.astro`

```astro
<!-- Update bio paragraphs -->
<p class="text-text-secondary text-lg leading-relaxed">
  I'm a backend engineer focused on building systems that scale...
</p>

<!-- Update stats -->
<div class="text-2xl font-black text-accent">7+</div>
<div class="text-sm text-text-secondary">Years Building</div>

<!-- Update skills -->
{['Backend Architecture', 'Go', 'Kubernetes', ...].map(skill => ...)}
```

**Keep bio:**
- Concise (3-4 paragraphs max)
- Focused on achievements
- Specific about domain (backend, AI, etc.)

**Update stats:**
- Years of experience
- Scale you've worked at
- Languages/skills count
- Whatever makes sense for you

### 4. Update Contact Section (5 min)

**File**: `src/components/Contact.astro`

```astro
<!-- Update email -->
<a href="mailto:your.name@example.com">
  your.name@example.com
</a>

<!-- Update social links -->
<a href="https://github.com/yourusername">GitHub →</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn →</a>
<a href="https://twitter.com/yourhandle">Twitter →</a>
```

**Make sure links are valid:**
- Email: `mailto:you@domain.com`
- GitHub: `https://github.com/username`
- LinkedIn: `https://linkedin.com/in/profile`
- Twitter: `https://twitter.com/handle`

### 5. Update Navigation & Branding (2 min)

**File**: `src/layouts/Layout.astro`

```astro
<!-- Navbar branding (top-left) -->
<a href="#home" class="text-lg font-bold">
  &lt; /web &gt;  <!-- Change this -->
</a>

<!-- Footer text -->
<p class="text-text-secondary text-sm text-center">
  © 2025. Engineered with intention.  <!-- Update -->
</p>
```

### 6. Customize Colors (Optional)

**File**: `tailwind.config.cjs`

```javascript
colors: {
  'accent': '#4F46E5',        // Change primary color
  'accent-hover': '#4539D3',  // Change hover color
  'dark-bg': '#0B0B0C',       // Change background
  'text-primary': '#FFFFFF',  // Change text color
  'text-secondary': '#A1A1A6',// Change secondary text
  'border': '#262629',        // Change border color
}
```

**Alternative color schemes:**
```
Warm (Orange):   #F97316 (accent), #EA580C (hover)
Green:          #22C55E (accent), #16A34A (hover)
Blue:           #0EA5E9 (accent), #0284C7 (hover)
Red:            #EF4444 (accent), #DC2626 (hover)
Purple:         #A855F7 (accent), #9333EA (hover)
```

---

## 🧪 Testing Before Deployment

### 1. Check Links Work
- [ ] All GitHub links work
- [ ] Email link opens mail client
- [ ] Social links open in new tab
- [ ] Navigation smooth scrolls

### 2. Test Responsiveness
- [ ] Open on mobile (iPhone, Android)
- [ ] Test tablet view
- [ ] Check desktop view
- [ ] No broken layouts

### 3. Verify Content
- [ ] No spelling errors
- [ ] Descriptions accurate
- [ ] Project tech correct
- [ ] Dates updated

### 4. Performance Check
```bash
npm run build
npm run preview
# Check Lighthouse in Chrome DevTools
```

Aim for 95+ score in all categories.

---

## 🚢 Deployment (Choose One)

### Option 1: Vercel (Recommended - Free, fastest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Vercel auto-builds and deploys
6. Your site is live!

**Custom domain:**
- In Vercel dashboard → Settings → Domains
- Add your domain
- Update DNS records (Vercel shows instructions)

### Option 2: Netlify (Also great, free)

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect GitHub
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy!

### Option 3: GitHub Pages (Free, simple)

1. Update `astro.config.mjs`:
   ```javascript
   site: 'https://yourusername.github.io'
   ```

2. Push to GitHub

3. Go to repo → Settings → Pages

4. Set source to `gh-pages` branch

5. Site will be at `https://yourusername.github.io`

### Option 4: Your Own Server

1. Build: `npm run build`
2. Upload `dist/` folder to server
3. Point domain to server
4. Done!

---

## 📊 What's in the Box

```
📦 showcase/
├── 📄 package.json                    (Dependencies)
├── 🎨 tailwind.config.cjs             (Styles config)
├── ⚙️  astro.config.mjs               (Astro config)
├── 📘 README.md                       (Project info)
├── 📚 PORTFOLIO_SETUP.md              (Detailed guide)
├── 🎭 ARCHITECTURE.md                 (How it works)
├── 📸 VISUAL_PREVIEW.md               (Design system)
├── ✅ QUICK_START.txt                 (Checklist)
│
├── 📁 src/
│   ├── 📄 pages/
│   │   └── index.astro                (Main page)
│   │
│   ├── 🧩 components/
│   │   ├── Hero.astro                 (Intro section)
│   │   ├── Projects.astro             (Project grid)
│   │   ├── ProjectCard.astro          (Project card)
│   │   ├── About.astro                (Bio section)
│   │   └── Contact.astro              (Contact section)
│   │
│   ├── 🎨 layouts/
│   │   └── Layout.astro               (Global wrapper)
│   │
│   └── 🎨 styles/
│       └── global.css                 (Global styles)
│
├── 📁 public/                         (Static assets)
│
└── 📁 .vscode/                        (Editor settings)
```

---

## 🎓 Learning Path

**New to Astro?**
1. Read [Astro in 100 Seconds](https://www.youtube.com/watch?v=dsTXcSeAZq8)
2. Skim [Astro Docs](https://docs.astro.build/)
3. Customize this portfolio

**New to Tailwind?**
1. Explore [Tailwind Docs](https://tailwindcss.com/docs)
2. Play with colors in `tailwind.config.cjs`
3. Try modifying components

**Want to add features?**
- New section? Create component in `src/components/`
- New page? Create file in `src/pages/`
- New style? Edit `tailwind.config.cjs`

---

## ❓ Common Questions

### Q: Can I add a blog?
**A:** Yes! Create `src/pages/blog/[slug].astro` and add blog files.

### Q: Can I add a contact form?
**A:** Yes, integrate with Formspree or Netlify Forms.

### Q: Can I use my own domain?
**A:** Yes, buy domain, point DNS to your host, done.

### Q: How do I update projects after launch?
**A:** Edit `src/components/Projects.astro`, push to GitHub, auto-deploys.

### Q: Can I add dark/light theme toggle?
**A:** Yes, modify `tailwind.config.cjs` and add theme switcher.

### Q: How do I add Google Analytics?
**A:** Add script to `<head>` in `src/layouts/Layout.astro`.

---

## 📞 Getting Help

### If you get stuck:

1. **Check the docs:**
   - [Astro Docs](https://docs.astro.build/)
   - [Tailwind Docs](https://tailwindcss.com/docs/)
   - [ARCHITECTURE.md](ARCHITECTURE.md) (this project)

2. **Debug in development:**
   ```bash
   npm run dev
   open Chrome DevTools (F12)
   Check Console for errors
   ```

3. **Ask the community:**
   - [Astro Discord](https://astro.build/chat)
   - [Stack Overflow](https://stackoverflow.com/questions/tagged/astro)

---

## 🎯 Your Next Steps

1. ✅ **Done**: Understand what you have
2. **Now**: Run `npm install` and `npm run dev`
3. **Update**: Files in `src/components/`
4. **Test**: Check everything works
5. **Build**: `npm run build && npm run preview`
6. **Deploy**: Choose hosting option above
7. **Share**: Tell the world!

---

## 💡 Pro Tips

1. **Keep it updated**: Update projects quarterly
2. **Be honest**: Real work beats inflated claims
3. **Show scale**: "10M requests/day" > "big project"
4. **Tech as proof**: List actual tech used
5. **Status matters**: ACTIVE vs STABLE sends signals
6. **Links critical**: All GitHub links must work
7. **Mobile first**: Test on phone before deploy
8. **Performance**: Keep build size small

---

## 🎨 Final Customization Ideas

**To make it yours:**
- [ ] Change accent color to your favorite
- [ ] Update navbar branding logo/text
- [ ] Add your hero emoji/icon
- [ ] Write unique project descriptions
- [ ] Include links to your best work
- [ ] Update stats with your numbers
- [ ] Add your real email
- [ ] Link all social media

---

## 📈 After Deployment

**Track success:**
- Monitor traffic (Google Analytics)
- Check broken links monthly
- Update projects quarterly
- Gather feedback from peers
- A/B test CTA text
- Share on social media

---

**You're all set! Your portfolio is engineered for clarity, speed, and memorable impact.**

Now go customize it and make it yours. 🚀

Questions? Check `PORTFOLIO_SETUP.md` for detailed guide.
