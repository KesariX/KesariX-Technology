# KesariX Technology — Enterprise AI & Digital Engineering Website

A world-class corporate website for KesariX Technology, an enterprise AI and digital engineering firm. Built with React, TypeScript, and Framer Motion for a premium, interactive user experience.

## 🚀 Tech Stack

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS Modules & Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Integration**: EmailJS

## 📖 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx           # Sticky navigation with animations
│   ├── Hero.tsx             # Hero section with headline animations
│   ├── Marquee.tsx          # Animated marquee strip
│   ├── Services.tsx         # Bento grid services section
│   ├── Projects.tsx         # Featured work gallery
│   ├── Process.tsx          # Timeline with SVG animations
│   ├── Stats.tsx            # Impact numbers with counters
│   ├── Testimonials.tsx     # Client testimonials
│   ├── Team.tsx             # Team members showcase
│   ├── TechStack.tsx        # Technology showcase
│   ├── CTA.tsx              # Call-to-action section
│   ├── Footer.tsx           # Footer with links
│   └── CustomCursor.tsx     # Custom cursor component
├── styles/
│   └── globals.css          # Global styles and animations
├── App.tsx                  # Main app component
└── main.tsx                 # Entry point
```

## 🎨 Design System

**Colors:**
- Primary: `#4F46E5` (Indigo)
- Secondary: `#06B6D4` (Cyan)
- Glow: `#818CF8` (Purple)
- Base: `#F8F9FF` (Light Blue)
- Dark: `#0F0F1A` (Near Black)

**Fonts:**
- Display: Clash Display
- Body: General Sans
- Accent: Satoshi
- Mono: JetBrains Mono

## ⚡ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎬 Animations

The site features sophisticated animations using:

- **GSAP**: Scroll-triggered animations, SplitText effects, marquee scrolling
- **Framer Motion**: Component-level animations, stagger effects, page transitions
- **anime.js**: Counter animations, particle effects, floating elements

## 📱 Responsive Design

Built mobile-first with full responsive support:
- Mobile: Complete adaptation for small screens
- Tablet: Optimized layouts and spacing
- Desktop: Full interactive features and animations

## 🌐 Sections

1. **Navigation** - Sticky header with animated nav items
2. **Hero** - Full-viewport hero with character reveal animations
3. **Marquee** - Infinite scrolling social proof strip
4. **Services** - Bento grid with hover effects
5. **Projects** - Horizontal scroll gallery with case studies
6. **Process** - Timeline with alternating layout and SVG drawing
7. **Stats** - Impact numbers with anime.js counters
8. **Testimonials** - Client reviews with featured quote
9. **Team** - Team members showcase with expertise tags
10. **Tech Stack** - Technology showcase with categorized marquees
11. **CTA** - High-impact call-to-action section
12. **Footer** - Comprehensive footer with links and newsletter

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server (auto-reload)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Customization

All design tokens are centralized in:
- `tailwind.config.js` - Colors, fonts, custom animations
- `src/styles/globals.css` - Global styles and CSS variables
- Component files - Individual section customizations

## 🚀 Performance

- Optimized for Core Web Vitals
- Lazy loading for images and components
- Code splitting with Vite
- Minified production builds

## 📝 Font Setup

Google Fonts are loaded in `index.html`. Make sure to:
1. Keep the font links in the `<head>` tag
2. Reference fonts in Tailwind config
3. Use font-clash, font-general, font-satoshi, font-mono classes in components

## 🤝 Contributing

This project follows modern React and TypeScript best practices. When adding new sections:

1. Create a new component in `src/components/`
2. Use TypeScript for type safety
3. Implement animations using Framer Motion or GSAP
4. Follow the established naming conventions
5. Test responsiveness across devices

## 📄 License

© 2025 NexCore Solutions. All rights reserved.

---

**Built with ❤️ for excellence.**
