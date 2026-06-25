import { useRef, useLayoutEffect, useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { BLOG_POSTS, CATEGORIES } from '../../data/blogPosts'
import './Blog.css'
import SEO from '../SEO/SEO'

export default function Blog() {
  const pageRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const isFirstRender = useRef(true)

  const filtered =
    activeCategory === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter(p => p.category === activeCategory)

  const handleFilter = category => {
    if (category === activeCategory) return
    gsap.to('.bl-card', {
      autoAlpha: 0,
      y: 20,
      duration: 0.22,
      stagger: 0.04,
      ease: 'power2.in',
      onComplete: () => setActiveCategory(category),
    })
  }

  useEffect(() => {
    if (isFirstRender.current) { isFirstRender.current = false; return }
    gsap.fromTo(
      '.bl-card',
      { autoAlpha: 0, y: 36 },
      { autoAlpha: 1, y: 0, duration: 0.55, ease: 'power3.out', stagger: 0.08 }
    )
  }, [activeCategory])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.bl-hero-title-line',
        { autoAlpha: 0, y: 70 },
        { autoAlpha: 1, y: 0, duration: 1.3, ease: 'expo.out', stagger: 0.13, delay: 0.1 }
      )
      gsap.fromTo('.bl-hero-desc',
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 1.0, ease: 'expo.out', delay: 0.4 }
      )
      gsap.fromTo('.bl-filter-btn',
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1, y: 0, duration: 0.65, ease: 'power3.out', stagger: 0.07,
          scrollTrigger: { trigger: '.bl-filters', start: 'top 88%' },
        }
      )
      gsap.fromTo('.bl-card',
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1, y: 0, duration: 1.0, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: '.bl-grid', start: 'top 84%' },
        }
      )
      setTimeout(() => ScrollTrigger.refresh(), 500)
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="bl-page" ref={pageRef}>
      <SEO 
        title="Insights & Blog | Technology Trends"
        description="Read the latest insights on web development, AI automation, and enterprise software engineering from the KesariX Technology team."
        keywords="Web Development Blog, AI Insights, Software Engineering Blog, Technology Trends"
        canonicalUrl="/blog"
      />

      {/* ── HERO ── */}
      <section className="bl-hero">
        <div className="bl-hero__glow" aria-hidden="true" />
        <div className="bl-hero__bg-grid" aria-hidden="true" />
        <div className="bl-hero__inner">
          <nav className="bl-hero__breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="bl-hero__breadcrumb-sep" aria-hidden="true">/</span>
            <span>Insights</span>
          </nav>
          <span className="bl-eyebrow">
            <span className="bl-eyebrow-dot" aria-hidden="true" />
            Our Insights
          </span>
          <h1 className="bl-hero-title">
            <span className="bl-hero-title-line">Ideas Worth</span>
            <span className="bl-hero-title-line">
              <em className="bl-italic">Engineering.</em>
            </span>
          </h1>
          <p className="bl-hero-desc">
            Deep dives into AI engineering, product strategy, and the systems thinking behind
            everything we build at KesariX.
          </p>
        </div>
      </section>

      {/* ── BLOG GRID ── */}
      <section className="bl-grid-section">
        <div className="bl-filters" role="group" aria-label="Blog category filters">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`bl-filter-btn${activeCategory === cat ? ' bl-filter-btn--active' : ''}`}
              onClick={() => handleFilter(cat)}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="bl-grid">
          {filtered.length > 0 ? (
            filtered.map(post => (
              <a className="bl-card" key={post.id} href={`/blog/${post.id}`}>
                <div className="bl-card__image-wrap">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="bl-card__img"
                    loading="lazy"
                  />
                  <span className="bl-card__category-tag">{post.category}</span>
                  <div className="bl-card__img-overlay" aria-hidden="true" />
                </div>
                <div className="bl-card__body">
                  <h2 className="bl-card__title">{post.title}</h2>
                  <p className="bl-card__excerpt">{post.excerpt}</p>
                  <footer className="bl-card__footer">
                    <span className="bl-card__author">{post.author}</span>
                    <div className="bl-card__footer-right">
                      <time className="bl-card__date" dateTime={post.date}>{post.date}</time>
                      {post.readTime && <span className="bl-card__read">{post.readTime}</span>}
                    </div>
                  </footer>
                </div>
              </a>
            ))
          ) : (
            <div className="bl-empty">
              <span className="bl-empty__icon" aria-hidden="true">◎</span>
              <p>No articles in this category yet — more coming soon.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  )
}
