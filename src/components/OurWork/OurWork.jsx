import { useRef, useLayoutEffect, useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './OurWork.css'

const PROJECTS = [
  {
    id: 1,
    category: 'AI Automation',
    title: 'AI Voice Bot Automation (Exotel)',
    desc: 'Built an AI-powered voice calling system using Exotel that can handle inbound/outbound calls, understand user intent, and respond in real-time using LLMs. Integrated WebSocket streaming, custom workflows, and automated call handling.',
    metrics: [
      { value: '500+', label: 'Calls / Day' },
      { value: '<1s', label: 'Response Time' },
    ],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 2,
    category: 'Web Development',
    title: 'Mechanical Services Website Platform',
    desc: 'Designed and developed a high-conversion website for a mechanical service provider. Includes service listings, lead capture, SEO optimization, and fast-loading UI for better customer acquisition.',
    metrics: [
      { value: '+3x', label: 'Lead Increase' },
      { value: '95+', label: 'Lighthouse Score' },
    ],
    image: 'https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 3,
    category: 'E-Commerce',
    title: 'Global E-Commerce Platform',
    desc: 'A completely custom headless commerce architecture using Next.js and Shopify Plus. Achieved perfect Lighthouse 100 scores across all metrics, resulting in a 310% organic traffic increase within 6 months.',
    metrics: [
      { value: '+310%', label: 'Organic Traffic' },
      { value: '380ms', label: 'Page Load' },
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200',
  },
]

const FILTERS = [
  'All Projects',
  'AI Automation',
  'Web Development',
  'E-Commerce',
  'Enterprise Automation',
  'Infrastructure',
]

export default function OurWork() {
  const pageRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('All Projects')
  const isFirstRender = useRef(true)

  const filtered =
    activeFilter === 'All Projects'
      ? PROJECTS
      : PROJECTS.filter(p => p.category === activeFilter)

  const handleFilter = filter => {
    if (filter === activeFilter) return
    gsap.to('.ow-card', {
      autoAlpha: 0,
      y: 24,
      duration: 0.22,
      stagger: 0.05,
      ease: 'power2.in',
      onComplete: () => setActiveFilter(filter),
    })
  }

  // Animate cards in after each filter change
  useEffect(() => {
    if (isFirstRender.current) { isFirstRender.current = false; return }
    gsap.fromTo(
      '.ow-card',
      { autoAlpha: 0, y: 36 },
      { autoAlpha: 1, y: 0, duration: 0.55, ease: 'power3.out', stagger: 0.12 }
    )
  }, [activeFilter])

  // Initial scroll/load animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo('.ow-hero-title',
        { autoAlpha: 0, y: 70 },
        { autoAlpha: 1, y: 0, duration: 1.3, ease: 'expo.out', delay: 0.1 }
      )
      gsap.fromTo('.ow-hero-desc, .ow-hero-ctas',
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 1, ease: 'expo.out', delay: 0.35, stagger: 0.15 }
      )

      // Section heading
      gsap.fromTo('.ow-heading-line',
        { autoAlpha: 0, y: 60 },
        {
          autoAlpha: 1, y: 0, duration: 1.3, ease: 'expo.out', stagger: 0.12,
          scrollTrigger: { trigger: '.ow-section-header', start: 'top 80%' },
        }
      )
      gsap.fromTo('.ow-section-desc',
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1, y: 0, duration: 1, ease: 'expo.out',
          scrollTrigger: { trigger: '.ow-section-header', start: 'top 78%' },
        }
      )

      // Filter pills
      gsap.fromTo('.ow-filter-btn',
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1, y: 0, duration: 0.65, ease: 'power3.out', stagger: 0.06,
          scrollTrigger: { trigger: '.ow-filters', start: 'top 88%' },
        }
      )

      // Cards
      gsap.fromTo('.ow-card',
        { autoAlpha: 0, y: 64 },
        {
          autoAlpha: 1, y: 0, duration: 1.1, ease: 'power3.out', stagger: 0.18,
          scrollTrigger: { trigger: '.ow-grid', start: 'top 82%' },
        }
      )

      setTimeout(() => ScrollTrigger.refresh(), 500)
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="ow-page" ref={pageRef}>

      {/* ── HERO ── */}
      <section className="ow-section ow-hero ow-dark">
        <div className="ow-hero__glow"></div>
        <div className="ow-hero__bg-grid"></div>
        <div className="ow-hero__inner">
          <div className="ow-hero__breadcrumb">
            <a href="/">Home</a>
            <span className="ow-hero__breadcrumb-sep">/</span>
            <span>Our Work</span>
          </div>
          <span className="ow-eyebrow">
            <span className="ow-eyebrow-dot"></span>
            Case Studies
          </span>
          <h1 className="ow-hero-title">
            We Let The <br />
            <em className="ow-italic">Work Speak.</em>
          </h1>
          <p className="ow-hero-desc">
            We build real-world AI systems and high-performance websites — from voice automation to conversion-focused platforms.
          </p>
          <div className="ow-hero-ctas">
            <a href="/#contact" className="ow-cta ow-cta--primary">Start a Project ↗</a>
            <a href="#case-studies" className="ow-cta ow-cta--secondary">View All Work ↓</a>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="ow-section ow-cases ow-dark" id="case-studies">
        <div className="ow-cases__bg-dots"></div>

        {/* Section header */}
        <div className="ow-section-header">
          <h2 className="ow-section-title">
            <span className="ow-heading-line">Real Projects,</span>
            <span className="ow-heading-line">
              Real <em className="ow-italic">Results.</em>
            </span>
          </h2>
          <p className="ow-section-desc">
            Every case study below is a production system shipped to real clients — measured by real outcomes.
          </p>
        </div>

        {/* Filters */}
        <div className="ow-filters" role="group" aria-label="Project category filters">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`ow-filter-btn${activeFilter === f ? ' ow-filter-btn--active' : ''}`}
              onClick={() => handleFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="ow-grid">
          {filtered.length > 0 ? (
            filtered.map(project => (
              <article className="ow-card" key={project.id}>
                <div className="ow-card__visual">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="ow-card__img"
                    loading="lazy"
                  />
                  <div className="ow-card__overlay"></div>
                  <span className="ow-card__tag">{project.category}</span>
                  <a href="/#contact" className="ow-card__cta">View Case Study ↗</a>
                </div>
                <div className="ow-card__body">
                  <h3 className="ow-card__title">{project.title}</h3>
                  <p className="ow-card__desc">{project.desc}</p>
                  <div className="ow-card__metrics">
                    {project.metrics.map(m => (
                      <div className="ow-metric" key={m.label}>
                        <span className="ow-metric__value">{m.value}</span>
                        <span className="ow-metric__label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="ow-empty">
              <span className="ow-empty__icon">◎</span>
              <p>No case studies in this category yet — more coming soon.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  )
}
