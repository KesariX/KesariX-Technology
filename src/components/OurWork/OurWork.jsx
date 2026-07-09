import { useRef, useLayoutEffect, useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './OurWork.css'
import SEO from '../SEO/SEO'

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
    image: '/our work/ai_voice_bot_automation.png',
    link: '/contact',
    ctaText: 'Inquire Now ↗',
  },
  {
    id: 2,
    category: 'Web Development',
    title: 'Shiv Krishna Engineering',
    desc: 'Designed and developed a modern, high-performance website. The new design is clean, user-friendly, and has significantly enhanced their online presence and credibility in the industry.',
    metrics: [
      { value: '100%', label: 'Responsive' },
      { value: 'A+', label: 'Performance' },
    ],
    previewUrl: 'https://shiv-krishna-engineering.vercel.app/',
    link: 'https://shiv-krishna-engineering.vercel.app/',
    ctaText: 'Visit Website ↗',
  },
  {
    id: 3,
    category: 'Web Development',
    title: 'Neha Engineering Works',
    desc: 'Created a professional website to showcase their engineering capabilities. Delivered a beautiful, highly responsive platform with outstanding performance and exceptional ongoing support.',
    metrics: [
      { value: '100%', label: 'Responsive' },
      { value: 'A+', label: 'Performance' },
    ],
    previewUrl: 'https://neha-engineering-works.vercel.app/',
    link: 'https://neha-engineering-works.vercel.app/',
    ctaText: 'Visit Website ↗',
  },
  {
    id: 4,
    category: 'Internal Product',
    title: 'Aegis CRM',
    desc: 'Forked and fully rebranded Twenty CRM (AGPL-3.0) into Aegis — a self-hosted, white-labelled CRM platform. Replaced all branding, implemented a custom KesariX color theme, built a branded landing page, and configured a Docker Compose production deployment pipeline for client deployment.',
    metrics: [
      { value: '100%', label: 'Self-Hosted' },
      { value: 'White-Label', label: 'Custom Brand' },
    ],
    previewUrl: 'https://aegis.kesarixtechnology.com/',
    link: 'https://aegis.kesarixtechnology.com/',
    ctaText: 'Visit Live ↗',
  },
]

const FILTERS = [
  'All Projects',
  'AI Automation',
  'Web Development',
  'Internal Product',
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
      <SEO 
        title="Our Work & Portfolio | KesariX"
        description="Explore our portfolio of AI automation, enterprise web development, and digital transformation projects delivered globally."
        keywords="Web Development Portfolio, AI Development Portfolio, Software Company Portfolio, Best Web Development Company, Custom Software Development"
        canonicalUrl="/work"
      />

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
            Selected Works
          </span>
          <h1 className="ow-hero-title">
            We Let The <br />
            <em className="ow-italic">Work Speak.</em>
          </h1>
          <p className="ow-hero-desc">
            We build real-world AI systems and high-performance websites — from voice automation to conversion-focused platforms.
          </p>
          <div className="ow-hero-ctas">
            <a href="/contact" className="ow-cta ow-cta--primary">Start a Project ↗</a>
            <a href="https://projects.kesarixtechnology.com/" target="_blank" rel="noopener noreferrer" className="ow-cta ow-cta--secondary">View All Work ↗</a>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="ow-section ow-cases ow-dark" id="portfolio">
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
            Every project below is a production system shipped to real clients — measured by tangible business outcomes.
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
                  {project.previewUrl ? (
                    <iframe
                      src={project.previewUrl}
                      title={project.title}
                      className="ow-card__img"
                      style={{ border: 'none', pointerEvents: 'none', width: '100%', height: '100%' }}
                      loading="lazy"
                      scrolling="no"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="ow-card__img"
                      loading="lazy"
                    />
                  )}
                  <div className="ow-card__overlay"></div>
                  <span className="ow-card__tag">{project.category}</span>
                  <a href={project.link} target={project.previewUrl ? "_blank" : "_self"} rel={project.previewUrl ? "noopener noreferrer" : ""} className="ow-card__cta">
                    {project.ctaText || 'View Project ↗'}
                  </a>
                  {project.previewUrl && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} aria-label={`Visit ${project.title}`}></a>
                  )}
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
              <div className="ow-empty__glow"></div>
              <p className="ow-empty__text">No projects in this category yet — more coming soon.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  )
}
