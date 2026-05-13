# KesariX Technology — Website

Awwwards-tier agency website for **KesariX Technology**, built with React 19 + Vite. Features a WebGL fluid-noise hero shader, GSAP scroll animations, Lenis smooth scroll, and a full multi-page structure covering services, portfolio, blog, careers, and contact.

---

## Tech Stack

| Layer | Library / Tool |
|---|---|
| Framework | React 19 + Vite 8 |
| Routing | React Router v7 |
| Animations | GSAP 3 + ScrollTrigger |
| Smooth scroll | Lenis 1.3 (GSAP ticker bridge) |
| 3D / WebGL | Three.js (hero fluid noise shader) |
| Motion | Framer Motion (installed, available) |
| Styling | Per-component CSS files |
| Linting | ESLint + Oxc |

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Page Routes

| Route | Component | Description |
|---|---|---|
| `/` | `PageContent` | Homepage — full landing page |
| `/work` | `OurWork` | Portfolio / case studies |
| `/about` | `AboutKesariX` | Company story, team, mission |
| `/careers` | `Careers` | Open roles |
| `/blog` | `Blog` | 20 articles with category filter |
| `/contact` | `ContactPage` | Full contact form + info panel |
| `/service/neural-architecture` | `NeuralArchitecture` | AI & ML service detail |
| `/service/product-engineering` | `ProductEngineering` | Web / mobile dev service detail |
| `/service/cloud-backbone` | `CloudBackbone` | Cloud infra service detail |
| `/service/agentic-systems` | `AgenticSystems` | AI agents service detail |
| `/service/workflow-engines` | `WorkflowEngines` | Process automation service detail |

---

## Component Map

```
src/
├── context/
│   └── ShaderContext.jsx       # React context holding Three.js shader API ref
├── hooks/
│   ├── useLenis.js             # Lenis smooth scroll + GSAP ticker + velocity → shader
│   └── useHeroShader.js        # Three.js fluid noise WebGL shader (full GLSL)
└── components/
    ├── Curtain/                # Page load curtain wipe (0→100 count + GSAP timeline)
    ├── Cursor/                 # Custom RAF cursor (disabled — toggle in App.jsx)
    ├── Nav/                    # Fixed nav, Services + Company dropdowns
    ├── Hero/                   # WebGL canvas + 3D word-reveal headline + bottom bar
    ├── TrustedBy/              # Client logos strip
    ├── Marquee/                # Infinite scrolling marquee
    ├── Manifesto/              # Quote word-rise animation + counter stats
    ├── Capabilities/           # Service rows with full-bleed saffron hover sweep
    ├── WorkReel/               # Sticky 380vh pin, 4 project slides cross-fade on scroll
    ├── Process/                # 6-step process on saffron background
    ├── Stats/                  # Animated count-up stats grid
    ├── Testimonials/           # 5-card testimonial grid with featured slot
    ├── Team/                   # Team member cards
    ├── TechStack/              # Technology logos / stack
    ├── BottomMarquee/          # Bottom infinite marquee strip
    ├── Contact/                # CTA section + footer
    ├── TweaksPanel/            # Dev shader palette / intensity controls (postMessage)
    ├── OurWork/                # /work page
    ├── AboutKesariX/           # /about page
    ├── Careers/                # /careers page
    ├── Blog/                   # /blog page — 20 posts, category filter
    ├── ContactPage/            # /contact page — form + info panel
    ├── CaseStudies/            # (component ready, no route yet)
    └── Services/
        ├── NeuralArchitecture.jsx
        ├── ProductEngineering.jsx
        ├── CloudBackbone.jsx
        ├── AgenticSystems.jsx
        └── WorkflowEngines.jsx
```

---

## Design System

### Color Tokens (`src/index.css`)

| Token | Usage |
|---|---|
| `--bone` | Light foreground text |
| `--ink` | Primary dark background |
| `--ink-2` | Secondary dark background |
| `--ink-deep` | Deepest background (contact/footer) |
| `--saffron` | Brand accent — orange |
| `--saffron-2` | Lighter saffron variant |

### Fonts

| Token | Typeface | Role |
|---|---|---|
| `--f-sans` | Space Grotesk | Primary UI text |
| `--f-serif` | Instrument Serif | Display / italic headlines |
| `--f-mono` | JetBrains Mono | Code / stats / labels |

---

## Contact Info (Live in Codebase)

| Field | Value |
|---|---|
| Email | info@kesarixtechnology.com |
| Phone | +91 92747 39361 |
| Location | Surat, India |

---

## Content Audit

### Already Built

| Section | Status | Component |
|---|---|---|
| Hero headline + CTA buttons | Live | `Hero/Hero.jsx` |
| Navigation (Services, Work, Company, Blog) | Live | `Nav/Nav.jsx` |
| Hero metrics (50+ projects, 98% retention) | Live | `Hero/Hero.jsx` |
| Services overview (5 service cards) | Live | `Capabilities/Capabilities.jsx` |
| 5 dedicated service detail pages | Live | `Services/*.jsx` |
| Portfolio / Work reel | Live | `WorkReel/WorkReel.jsx`, `OurWork/OurWork.jsx` |
| About Us page | Live | `AboutKesariX/AboutKesariX.jsx` |
| Contact form (Name, Email, Company, Type, Message) | Live | `ContactPage/ContactPage.jsx` |
| Email + phone + location in contact | Live | `Contact/Contact.jsx` |
| 5 real client testimonials with results | Live | `Testimonials/Testimonials.jsx` |
| Stats (50+ projects, 20+ AI systems, 98% satisfaction) | Live | `Stats/Stats.jsx` |
| TrustedBy client logos section | Live* | `TrustedBy/TrustedBy.jsx` |
| Team section | Live | `Team/Team.jsx` |
| Tech stack section | Live | `TechStack/TechStack.jsx` |
| 6-step Process section | Live | `Process/Process.jsx` |
| Blog (20 articles, category filter) | Live | `Blog/Blog.jsx` |
| Careers page | Live | `Careers/Careers.jsx` |
| Footer with Services + Company + Contact links | Live | `Contact/Contact.jsx` |
| Legal links in footer | Live* | footer in `Contact/Contact.jsx` |
| "Available for new projects" badge | Live | `Hero/Hero.jsx`, `ContactPage/ContactPage.jsx` |
| Response time promise (24h) | Live | `Contact/Contact.jsx`, `ContactPage/ContactPage.jsx` |

*Live but needs real content — see TODO list below.

### TODO — High Priority

- [ ] **TrustedBy logos** — Replace placeholder names ("Acme Corp", "GlobalTech", etc.) with real client SVG logos in `TrustedBy/TrustedBy.jsx`
- [ ] **Social media links** — Replace `href="#"` with real URLs for LinkedIn and Twitter/X in `ContactPage/ContactPage.jsx` and `Contact/Contact.jsx` footer
- [ ] **WhatsApp floating button** — Add a fixed WhatsApp chat button (e.g. `wa.me/+919274739361`) visible on all pages
- [ ] **Legal pages** — Create `/privacy`, `/terms`, `/cookies` routes and update footer `href="#"` links in `Contact/Contact.jsx`
- [ ] **SEO meta tags** — Add `<title>`, `<meta name="description">`, Open Graph tags to `index.html` (and per-page with React Helmet or Vite SSR)
- [ ] **Google Analytics (GA4)** — Install `gtag.js` script in `index.html`

### TODO — Medium Priority

- [ ] **Pricing page** — Add `/pricing` route with packages table
- [ ] **Cookie consent banner** — Required for international visitors and for GA4 compliance
- [ ] **Live chat widget** — Embed Tawk.to or Crisp (free tier)
- [ ] **Custom 404 page** — Add `<Route path="*" element={<NotFound />} />` in `App.jsx`
- [ ] **Sitemap.xml** — Generate and place in `/public/sitemap.xml`, submit to Google Search Console
- [ ] **Individual blog post pages** — Add `/blog/:slug` route; Blog cards currently have no href

### TODO — Low Priority

- [ ] **CaseStudies route** — Component exists at `CaseStudies/CaseStudies.jsx`; add `/case-studies` route to `App.jsx`
- [ ] **Google Map embed** — Add iframe map of Surat office to `ContactPage/ContactPage.jsx`
- [ ] **Video testimonials** — Upgrade text cards in `Testimonials/Testimonials.jsx` with embedded video

---

## Deployment Notes

- Uses **client-side routing** (React Router) — configure your host to redirect all routes to `index.html` (on Netlify: add `_redirects` file; on Vercel: automatic)
- Build output goes to `dist/`
- Custom domain: `kesarix.com` (use HTTPS — get free SSL via host or Cloudflare)
- Professional email: `info@kesarixtechnology.com` (configure via Google Workspace or Zoho Mail)
- Register on **Google Search Console** after deploying for SEO indexing
