# Portfolio Visual Preview & Component Guide

## 📸 Visual Layout Overview

```
┌─────────────────────────────────────────────────────────────────┐
│ &lt; /web &gt;               Projects  About  Contact              │  ← Fixed Navbar
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│                      ↓ SCROLL                                   │
│                                                                   │
│                    🎯  → BUILDING                               │
│                                                                   │
│        "Backend Systems Engineer"                              │
│                                                                   │
│   I design distributed systems that scale.                    │
│   Currently exploring AI infrastructure.                      │
│                                                                   │
│        [View My Work →]  [Get In Touch]                        │
│                                                                   │
│                     ↓ scroll                                     │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤  ← Hero Section
│ FEATURED PROJECTS                                               │
├─────────────────────────────────────────────────────────────────┤
│ A selection of systems I've engineered...                      │
│                                                                   │
│  ┌──────────────────────┐  ┌──────────────────────┐            │
│  │ ⚡ Atlas Pricing    │  │ ⚙️ RuleX            │            │
│  │ Engine              │  │                      │            │
│  │                      │  │ STABLE               │            │
│  │ ACTIVE               │  │                      │            │
│  │                      │  │ Declarative rule     │            │
│  │ Real-time pricing    │  │ engine...            │            │
│  │ handling 10M+/day    │  │                      │            │
│  │                      │  │ Go  TypeScript...    │            │
│  │ Go  PostgreSQL...    │  │                      │            │
│  │                      │  │ GitHub →  Demo →     │            │
│  │ GitHub → Demo →     │  └──────────────────────┘            │
│  └──────────────────────┘                                       │
│                                                                   │
│  ┌──────────────────────┐  ┌──────────────────────┐            │
│  │ 🧠 Signal AI         │  │ ☁️ CloudSync        │            │
│  │                      │  │                      │            │
│  │ LEARNING             │  │ EXPERIMENTAL         │            │
│  │                      │  │                      │            │
│  │ Exploration into     │  │ Zero-downtime...     │            │
│  │ vector databases     │  │                      │            │
│  │                      │  │ Rust PostgreSQL...   │            │
│  │ Python  LangChain    │  │                      │            │
│  │                      │  │ GitHub →             │            │
│  │ GitHub →             │  └──────────────────────┘            │
│  └──────────────────────┘                                       │
│                                                                   │
│                  View all projects →                           │
├─────────────────────────────────────────────────────────────────┤  ← Projects Section
│ ABOUT ME                                                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│ I'm a backend engineer focused on building systems that       │
│ scale. Over the past 7+ years, I've shipped production        │
│ infrastructure...                                               │
│                                                                   │
│ My work spans real-time data pipelines, event-driven          │
│ architectures...                                                │
│                                                                   │
│ Currently, I'm exploring AI infrastructure patterns...         │
│                                                                   │
│  7+              100M+            5+               ∞           │
│  Years Building  Requests/Year    Languages        To Learn    │
│                                                                   │
│ Core Focus Areas:                                              │
│ [Backend Architecture] [Distributed Systems] [Go]             │
│ [TypeScript] [Python] [PostgreSQL] [Kubernetes]               │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤  ← About Section
│ LET'S BUILD                                                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│ Whether you're exploring backend infrastructure or want       │
│ to chat about distributed systems—let's connect.              │
│                                                                   │
│               hello@example.com                                │
│                                                                   │
│          GitHub →     LinkedIn →     Twitter →                │
│                                                                   │
│          Currently available for consulting & full-time        │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤  ← Contact Section
│ © 2025. Engineered with intention.                             │
└─────────────────────────────────────────────────────────────────┘  ← Footer
```

---

## 🎨 Color & Style Reference

### Navbar (Fixed, Top)
```
Background:  #0B0B0C with blur effect (opacity 80%)
Border:      #262629
Text:        #FFFFFF
Hover:       #4F46E5
Padding:     16px vertical, 24px horizontal
```

### Hero Section (Full viewport height)
```
Background:  #0B0B0C
Badge:       white text, #4F46E5 background with border
H1:          #FFFFFF, 5rem (80px) bold
H2:          #A1A1A6, 1.125rem (18px)
CTA Primary: #4F46E5 bg, white text, hover glow
CTA Secondary: border #A1A1A6, text #A1A1A6, hover → accent
Scroll hint: #A1A1A6, small font, pulsing animation
```

### Project Cards
```
Grid:        2 columns (desktop), 1 column (mobile)
Gap:         24px-32px
Card:        border #262629, hover → border #4F46E5/50
Title:       #FFFFFF, 1.5rem bold, hover → accent color
Status:      small font, color-coded:
  - ACTIVE: #22C55E background, #22C55E border
  - STABLE: #3B82F6 background, #3B82F6 border
  - LEARNING: #FBBF24 background, #FBBF24 border
  - EXPERIMENTAL: #A855F7 background, #A855F7 border
Description: #A1A1A6, 1rem
Tech stack:  gray background, smaller font, gray text
Links:       #A1A1A6 text, hover → accent with underline
Hover state: Slight elevation, border glow, bg slight brightening
Animation:   Staggered slide-up (100ms delay per card)
```

### About Section
```
Grid (stats): 2-4 columns depending on screen size
Stat number:  #4F46E5, 2rem bold
Stat label:   #A1A1A6, small
Skills:       Border #262629, text #A1A1A6, hover → accent/30
Text:         #FFFFFF heading, #A1A1A6 body
Line height:  1.75 for readability
```

### Contact Section
```
Heading:     #FFFFFF, 4rem
Subtext:     #A1A1A6, 1.125rem
Email link:  #4F46E5, mono font, hover underline animation
Social:      #A1A1A6 text, hover → accent, flex row
Status:      White text, green indicator dot (#22C55E)
```

### Footer
```
Background:  #0B0B0C
Border:      #262629 (top only)
Text:        #A1A1A6, small
Padding:     48px vertical, 24px horizontal
```

---

## 🎬 Animation Timeline

### Page Load
```
0ms   ↓
100ms fade-in navbar
150ms fade-in hero section
200ms slide-up heading
250ms Hero appears fully

1000ms (auto-scroll enabled)
      ↓ Navbar stays fixed
2000ms fade-in first project card
2100ms fade-in second project card
2200ms fade-in third project card
2300ms fade-in fourth project card

3000ms+ (on scroll)
      scroll-trigger animations for remaining sections
```

### Hover States
```
Link hover:        color: #4F46E5 (250ms)
Button hover:      bg: #4539D3 (250ms) + shadow glow
Project card hover: 
  - border: #4F46E5/50 (350ms)
  - shadow: accent glow (350ms)
  - background: slight brightening (350ms)
  - top accent line: slide in from left (350ms)
```

### Scroll Indicator
```
Element: small "↓ scroll" text in hero
Animation: pulse-subtle (2s infinite)
Effect: opacity oscillates 1.0 → 0.7 → 1.0
Purpose: Draws attention to scroll, then fades
```

---

## 🔤 Typography Samples

### Display (H1)
```
SIZE:     5rem (80px)
WEIGHT:   Black (900)
SPACE:    -0.02em letter-spacing
EXAMPLE:  "Backend Systems Engineer"
ACCENT:   <span style="color: #4F46E5">word</span>
```

### Large (H2)
```
SIZE:     4rem (64px)
WEIGHT:   Black (900)
EXAMPLE:  "Featured Projects"
USE:      Section headers
```

### Medium (H3)
```
SIZE:     1.5rem (24px)
WEIGHT:   Bold (700)
EXAMPLE:  "Atlas Pricing Engine"
USE:      Project names, subsection titles
```

### Body
```
SIZE:     1rem (16px)
WEIGHT:   Normal (400)
HEIGHT:   1.75 (1.75x line-height)
EXAMPLE:  "I'm a backend engineer focused on building..."
USE:      Main content text
```

### Small
```
SIZE:     0.875rem (14px)
WEIGHT:   Normal (400)
USE:      Secondary text, captions, metadata
EXAMPLE:  "Go  PostgreSQL  Redis  gRPC  Kubernetes"
```

### Monospace (Tech/Status)
```
SIZE:     0.875rem
FAMILY:   'Courier New', monospace
EXAMPLE:  "→ BUILDING" or "GitHub →"
USE:      Status badges, links, code references
```

---

## 📐 Spacing Reference

### Vertical Spacing
```
Hero Section:        Full viewport (min-height: 100vh)
Section padding:     80px vertical (32px mobile)
Between elements:    24px-32px
Card gaps:           24px-32px
Line height:         1.75 for body, 1.2 for headings
```

### Horizontal Spacing
```
Max width:           1440px (max-w-6xl)
Container padding:   24px (sm), 32px (lg)
Grid gap:            24px-32px
Card padding:        24px (sm), 32px (lg)
```

### Focus/Padding
```
Buttons:             12px vertical × 24px horizontal
Status badge:        8px vertical × 12px horizontal
Tech pills:          8px vertical × 12px horizontal
Section heading:     Margin-bottom: 48px
```

---

## 🎯 Responsive Breakpoints

### Mobile (< 640px)
- Single column layout
- Navbar text hidden (logo only)
- H1: 2.5rem → 3rem
- Padding: 16-24px
- Projects: 1 column

### Tablet (640px - 1024px)
- H1: 4rem
- Projects: 2 columns
- Navbar: Full text visible
- Padding: 24-32px

### Desktop (1024px+)
- H1: 5-7rem
- Projects: 2-4 columns
- Full spacing
- Padding: 32-48px
- Optimal reading width

---

## ♿ Accessibility Checklist

✅ **Implemented**
- Semantic HTML structure (`<section>`, `<nav>`, `<main>`)
- High contrast ratios (WCAG AA+)
- Keyboard navigation (scroll links)
- Focus states on buttons/links
- Alt text structure ready
- Descriptive link text (no "click here")
- Skip navigation possible (anchor links)

**To Add** (Optional)
- Form labels if adding contact form
- ARIA labels for complex components
- Video captions if adding video content

---

## 🔗 Link States

```
Unvisited:     #A1A1A6
Hover:         #4F46E5
Active:        #4539D3 (darker)
Focus (kbd):   border-bottom 2px solid #4F46E5

External link indicator: " →" after text
Email link:    href="mailto:email@domain.com"
Social links:  target="_blank" rel="noopener noreferrer"
```

---

## 📊 Component Props Reference

### ProjectCard Props
```typescript
interface ProjectCardProps {
  name: string                          // "Atlas Pricing Engine"
  status: Status                        // ACTIVE | STABLE | LEARNING | EXPERIMENTAL
  description: string                   // "Real-time pricing engine..."
  techStack: Array<string>              // ["Go", "PostgreSQL", "Redis"]
  github?: string                       // URL to GitHub repo
  demo?: string                         // URL to live demo
  icon?: string                         // Emoji "⚡"
}
```

### Hero Props (implicit from Astro)
```typescript
No props - uses hardcoded content in component
Edit directly in Hero.astro to change text
```

### Layout Props
```typescript
interface LayoutProps {
  title?: string                        // Page title
  description?: string                  // Meta description
}

Default title: "Portfolio"
Default description: "Backend engineer, distributed systems, and AI"
```

---

## 📱 Mobile Optimization Notes

1. **Navbar**: Logo only, hidden text
2. **Hero**: Larger touch targets (56px min)
3. **Projects**: Single column, full width
4. **Links**: 48px minimum tap target
5. **Font sizes**: Minimum 16px (prevents zoom)
6. **Spacing**: Increased for finger-friendly interactions

---

This visual guide helps you understand the exact styling, spacing, and behavior of each component. Use it as reference when customizing!
