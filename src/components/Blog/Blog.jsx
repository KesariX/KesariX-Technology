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
      
      if (document.querySelector('.bl-compiling-card')) {
        gsap.fromTo('.bl-compiling-card',
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 1.0, ease: 'power3.out', delay: 0.5 }
        )
      } else {
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
      }
      setTimeout(() => ScrollTrigger.refresh(), 500)
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="bl-page" ref={pageRef}>
      <SEO 
        title="AI & Tech Insights Blog — Web Development, AI Automation, Software Engineering"
        description="Read expert insights on AI development, LLM engineering, React & Next.js, workflow automation, SaaS architecture, and enterprise software from the KesariX Technology team. Updated weekly."
        keywords="AI Development Blog, Tech Insights, Web Development Blog India, Software Engineering Blog, LLM Engineering, React Development Tips, Next.js Blog, AI Automation Insights, SaaS Development Blog, Technology Blog India, AI Trends 2025, Digital Transformation Blog"
        canonicalUrl="/blog"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
        ]}
        faqs={[
          { question: 'What topics does the KesariX Technology blog cover?', answer: 'The KesariX blog covers AI development, LLM engineering, RAG systems, React and Next.js development, workflow automation, SaaS architecture, mobile app development, enterprise software, and digital transformation trends — written by our engineering team.' },
          { question: 'How often is new content published on the KesariX blog?', answer: 'We publish new technical articles and industry insights weekly, covering the latest developments in AI, software engineering, and enterprise automation.' },
        ]}
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

      {/* ── BLOG GRID OR COMPILING STATE ── */}
      {BLOG_POSTS.length > 0 ? (
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
            {filtered.map(post => (
              <a className="bl-card" key={post.id} href={`/blog/${post.slug || post.id}`} target="_blank" rel="noopener noreferrer">
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
            ))}
          </div>
        </section>
      ) : (
        <section className="bl-compiling-section">
          <div className="bl-compiling-card bl-fade-up">
            <div className="bl-compiling-glow"></div>
            <h3 className="bl-compiling-sub">Compiling Insights</h3>
            <h2 className="bl-compiling-title">The KesariX Engineering Blog</h2>
            <p className="bl-compiling-text">
              From deep dives into AI integrations to frontend performance breakdowns, we are preparing high-quality, technical content. Check back soon as we launch our bi-weekly updates on how we build scalable digital products.
            </p>
            <div className="bl-compiling-ctas">
              <a href="/service/product-engineering" className="bl-compiling-btn bl-compiling-btn--primary">
                View Our Services
              </a>
              <a href="/" className="bl-compiling-btn bl-compiling-btn--secondary">
                Return Home
              </a>
            </div>
          </div>
        </section>
      )}

    </div>
  )
}
