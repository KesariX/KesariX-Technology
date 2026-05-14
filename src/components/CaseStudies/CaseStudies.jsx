import { useRef, useLayoutEffect, useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './CaseStudies.css'

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

const FILTERS = ['All Projects', 'AI Automation', 'Web Development', 'E-Commerce', 'Enterprise Automation', 'Infrastructure']

export default function CaseStudies() {
  const sectionRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('All Projects')
  const isFirstRender = useRef(true)

  const filtered = activeFilter === 'All Projects'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter)

  const handleFilter = (filter) => {
    if (filter === activeFilter) return
    gsap.to('.cs-card', {
      autoAlpha: 0,
      y: 24,
      duration: 0.22,
      stagger: 0.04,
      ease: 'power2.in',
      onComplete: () => setActiveFilter(filter),
    })
  }

  // Animate cards in whenever filter state (and thus filtered list) changes
  useEffect(() => {
    if (isFirstRender.current) { isFirstRender.current = false; return }
    gsap.fromTo('.cs-card',
      { autoAlpha: 0, y: 32 },
      { autoAlpha: 1, y: 0, duration: 0.55, ease: 'power3.out', stagger: 0.1 }
    )
  }, [activeFilter])

  // Initial scroll-triggered animations (run once)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Eyebrow + heading lines
      gsap.fromTo('.cs-heading-line',
        { autoAlpha: 0, y: 70 },
        {
          autoAlpha: 1, y: 0, duration: 1.4, ease: 'expo.out', stagger: 0.13,
          scrollTrigger: { trigger: '.cs-header', start: 'top 80%' },
        }
      )
      gsap.fromTo(['.cs-label', '.cs-header-desc'],
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1, y: 0, duration: 1, ease: 'expo.out', stagger: 0.12,
          scrollTrigger: { trigger: '.cs-header', start: 'top 82%' },
        }
      )
      // Filters
      gsap.fromTo('.cs-filter-btn',
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.07,
          scrollTrigger: { trigger: '.cs-filters', start: 'top 88%' },
        }
      )
      // Cards
      gsap.fromTo('.cs-card',
        { autoAlpha: 0, y: 60 },
        {
          autoAlpha: 1, y: 0, duration: 1.1, ease: 'power3.out', stagger: 0.18,
          scrollTrigger: { trigger: '.cs-grid', start: 'top 82%' },
        }
      )

      setTimeout(() => ScrollTrigger.refresh(), 500)
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="cs-section" id="case-studies" ref={sectionRef}>
      {/* BG texture */}
      <div className="cs-bg-dots" aria-hidden="true"></div>
      <div className="cs-bg-glow" aria-hidden="true"></div>

      {/* ── Header ── */}
      <div className="cs-header">
        <span className="cs-label">
          <span className="cs-label-dot"></span>
          Case Studies
        </span>
        <h2 className="cs-heading">
          <span className="cs-heading-line">We Let The</span>
          <span className="cs-heading-line">
            Work <em className="cs-italic">Speak.</em>
          </span>
        </h2>
        <p className="cs-header-desc">
          We build real-world AI systems and high-performance websites — from voice automation to conversion-focused platforms.
        </p>
      </div>

      {/* ── Filters ── */}
      <div className="cs-filters" role="group" aria-label="Project filters">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`cs-filter-btn${activeFilter === f ? ' cs-filter-btn--active' : ''}`}
            onClick={() => handleFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ── Grid ── */}
      <div className="cs-grid">
        {filtered.length > 0 ? filtered.map(project => (
          <article className="cs-card" key={project.id}>
            <div className="cs-card__visual">
              <img
                src={project.image}
                alt={project.title}
                className="cs-card__img"
                loading="lazy"
              />
              <div className="cs-card__overlay"></div>
              <span className="cs-card__tag">{project.category}</span>
              <a href="/#contact" className="cs-card__cta">View Case Study ↗</a>
            </div>
            <div className="cs-card__body">
              <h3 className="cs-card__title">{project.title}</h3>
              <p className="cs-card__desc">{project.desc}</p>
              <div className="cs-card__metrics">
                {project.metrics.map(m => (
                  <div className="cs-metric" key={m.label}>
                    <span className="cs-metric__value">{m.value}</span>
                    <span className="cs-metric__label">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        )) : (
          <div className="cs-empty">
            <span className="cs-empty__icon">◎</span>
            <p>No case studies in this category yet. More coming soon.</p>
          </div>
        )}
      </div>
    </section>
  )
}
