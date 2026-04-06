# Personal Portfolio Website – Setup & Customization Guide

A minimalist, modern portfolio website built with **Astro** and **Tailwind CSS**, featuring a strong engineering identity. Designed for clarity, performance, and memorable visual presence.

## ✨ Features

- **Minimalist Design**: Clean, spacious layout with brutal simplicity
- **Dark Theme**: Almost-black background (#0B0B0C) with high-contrast typography
- **Engineering Aesthetic**: Status badges, system-like labels, and terminal-inspired elements
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Performance Optimized**: Minimal JavaScript, optimized for fast loading
- **Smooth Animations**: Subtle fade-ins, slide-ups, and hover effects
- **Sticky Navigation**: Fixed navbar with smooth scrolling between sections

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.astro          # Hero section with main CTA
│   ├── Projects.astro      # Featured projects grid
│   ├── ProjectCard.astro   # Individual project card component
│   ├── About.astro         # About section with skills
│   └── Contact.astro       # Contact and social links
├── layouts/
│   └── Layout.astro        # Global layout with navbar and footer
├── pages/
│   └── index.astro         # Main portfolio page
├── styles/
│   └── global.css          # Global styles and animations
└── assets/                 # Static assets
```

## 🎨 Design System

### Colors
```javascript
'dark-bg': '#0B0B0C'        // Almost black background
'accent': '#4F46E5'          // Primary indigo accent
'accent-hover': '#4539D3'    // Darker indigo on hover
'text-primary': '#FFFFFF'    // White text
'text-secondary': '#A1A1A6'  // Light gray text
'border': '#262629'          // Dark border color
```

### Typography
- **Font**: Inter (Google Fonts)
- **Hierarchy**: H1 (5-7xl bold), H2 (4xl bold), H3 (2xl bold), body (base/lg)
- **Spacing**: Generous padding (32px-48px sections)

### Animations
- **fade-in**: 0.6s ease-in-out
- **slide-up**: 0.6s ease-out with 10px translate
- **pulse-subtle**: 2s infinite (opacity flicker)
- **glow**: 2s infinite box-shadow expansion

## 🚀 Getting Started

### Prerequisites
- Node.js 22.12.0 or higher
- npm or yarn

### Installation & Running

```bash
# 1. Navigate to project
cd showcase

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build static site
npm run build

# Preview production build
npm run preview
```

## 📝 Customization Guide

### 1. Update Hero Section

File: [src/components/Hero.astro](src/components/Hero.astro)

```astro
<!-- Change the main heading -->
<h1>Backend
  <span class="text-accent">Systems Engineer</span>
</h1>

<!-- Update subheading -->
<p>I design distributed systems that scale...</p>
```

**Key fields to update:**
- Heading (main title)
- Subheading
- CTA button text and links
- Status badge (BUILDING, ACTIVE, etc.)
- Hero icon emoji

### 2. Update Projects Section

File: [src/components/Projects.astro](src/components/Projects.astro)

Modify the `projects` array:

```javascript
const projects = [
  {
    name: 'Your Project Name',
    status: 'ACTIVE',              // ACTIVE | STABLE | LEARNING | EXPERIMENTAL
    description: 'Brief 1-2 line description of the project.',
    techStack: ['Go', 'PostgreSQL', 'Redis', 'Kubernetes'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://project-demo.com',  // Optional
    icon: '⚡',                        // Optional emoji
  },
  // Add more projects...
];
```

**Status Colors:**
- `ACTIVE`: Green (#22C55E)
- `STABLE`: Blue (#3B82F6)
- `LEARNING`: Yellow (#FBBF24)
- `EXPERIMENTAL`: Purple (#A855F7)

### 3. Update About Section

File: [src/components/About.astro](src/components/About.astro)

```astro
<!-- Update biography -->
<p class="text-text-secondary text-lg leading-relaxed">
  I'm a backend engineer focused on building systems that scale...
</p>

<!-- Update stats -->
<div class="text-2xl font-black text-accent">7+</div>
<div class="text-sm text-text-secondary">Years Building</div>

<!-- Update skills -->
['Backend Architecture', 'Distributed Systems', 'Go', 'Kubernetes', ...]
```

### 4. Update Contact Section

File: [src/components/Contact.astro](src/components/Contact.astro)

```astro
<!-- Update email -->
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>

<!-- Update social links -->
<a href="https://github.com/yourusername">GitHub →</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn →</a>
<a href="https://twitter.com/yourhandle">Twitter →</a>
```

### 5. Update Navigation & Footer

File: [src/layouts/Layout.astro](src/layouts/Layout.astro)

```astro
<!-- Navbar branding -->
<a href="#home" class="text-lg font-bold">
  &lt; /web &gt;  <!-- Change this -->
</a>

<!-- Footer text -->
<p class="text-text-secondary text-sm text-center">
  © 2025. Engineered with intention.  <!-- Update year/text -->
</p>
```

### 6. Customize Colors (Theme)

File: [tailwind.config.cjs](tailwind.config.cjs)

```javascript
extend: {
  colors: {
    'dark-bg': '#0B0B0C',      // Change background
    'accent': '#4F46E5',        // Change primary color
    'accent-hover': '#4539D3',  // Change hover color
    'text-primary': '#FFFFFF',  // Change text
    'text-secondary': '#A1A1A6',// Change secondary text
    'border': '#262629',        // Change borders
  },
}
```

**Alternative color palettes:**
- **Warm (Amber)**: accent `#D97706` hover `#B45309`
- **Green**: accent `#22C55E` hover `#16A34A`
- **Blue**: accent `#0EA5E9` hover `#0284C7`
- **Red**: accent `#EF4444` hover `#DC2626`

### 7. Site Metadata

File: [astro.config.mjs](astro.config.mjs)

```javascript
export default defineConfig({
  site: 'https://your-domain.com',  // Your actual domain
});
```

File: [src/layouts/Layout.astro](src/layouts/Layout.astro)

```astro
<title>Backend Engineer | Portfolio</title>
<meta name="description" content="Backend engineer, distributed systems, and AI" />
```

## 📱 Responsive Behavior

The site is fully responsive with these breakpoints:

| Breakpoint | Size     | Layout          |
|-----------|----------|-----------------|
| Mobile    | < 640px  | Single column   |
| Tablet    | 640-1024 | 2-column grid   |
| Desktop   | 1024px+  | Full featured   |

## 🌐 Deployment Options

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Connect your GitHub repo to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Deploy to GitHub Pages

Update `astro.config.mjs`:
```javascript
site: 'https://yourusername.github.io'
```

Then push to `main` branch and enable GitHub Pages in repo settings.

## 💡 Tips & Tweaks

### Adjust Animation Timing

Edit [src/styles/global.css](src/styles/global.css):

```css
@keyframes slideUp {
  0% { opacity: 0; transform: translateY(10px); }  /* Change 10px */
  100% { opacity: 1; transform: translateY(0); }
}
```

### Add Custom Fonts

In [tailwind.config.cjs](tailwind.config.cjs):

```javascript
fontFamily: {
  'sans': ['Custom Font', 'system-ui', 'sans-serif'],
}
```

### Add More Sections

Create a new component in `src/components/YourSection.astro` and import it in [src/pages/index.astro](src/pages/index.astro):

```astro
import YourSection from '../components/YourSection.astro';

<Layout title="...">
  <Hero />
  <YourSection />
  <Projects />
  ...
</Layout>
```

### Optimize Images

Replace static images with Astro's Image component:

```astro
import { Image } from 'astro:assets';

<Image src={heroImage} alt="Description" />
```

## 🛠️ Tech Stack

- **Framework**: [Astro 6.1](https://astro.build/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Font**: [Inter](https://rsms.me/inter/)
- **Build**: [Vite](https://vitejs.dev/)

## ✅ Pre-Launch Checklist

- [ ] Update all personal information
- [ ] Replace project links (GitHub, demos)
- [ ] Update social media links
- [ ] Change email address
- [ ] Update site domain in `astro.config.mjs`
- [ ] Test on mobile devices
- [ ] Test smooth scrolling
- [ ] Test all links work
- [ ] Check spelling and grammar
- [ ] Build and preview: `npm run build && npm run preview`
- [ ] Deploy to hosting

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Web Vitals](https://web.dev/vitals/)
- [Accessible Design](https://www.a11y-101.com/)

---

**Ready to launch?** Your portfolio is production-ready. Customize the content, add your projects, and deploy! 🚀
