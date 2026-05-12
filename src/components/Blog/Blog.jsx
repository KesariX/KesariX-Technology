import { useRef, useLayoutEffect, useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Blog.css'

gsap.registerPlugin(ScrollTrigger)

const POSTS = [
  { id: 1, title: "The Future of Enterprise AI: Beyond the Hype", excerpt: "Why the next wave of billion-dollar companies won't be built on thin wrappers, but on deep integration of AI into proprietary operational data.", category: "Strategy", date: "Apr 22, 2026", author: "Sarthak Singh", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Why Deterministic AI is Winning the Enterprise Market", excerpt: "Enterprises don't want chatbots that hallucinate. They want mathematical certainty. Here is how we enforce strict constraints on language models.", category: "Strategy", date: "Apr 20, 2026", author: "Sarthak Singh", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Design Systems for High-Density AI Interfaces", excerpt: "Building user interfaces for complex AI agents requires a new approach to UX. We explore density, state indication, and trust markers.", category: "Web Dev", date: "Apr 21, 2026", author: "Harsh Prajapati", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "RAG is Dead. Long Live Hybrid Semantic Reasoning.", excerpt: "Basic vector search is no longer enough for accurate context retrieval. Exploring multi-hop reasoning, graph databases, and re-ranking pipelines.", category: "AI Engineering", date: "Apr 21, 2026", author: "Ronak Parmar", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "The True ROI of Automating Operational Bottlenecks", excerpt: "A financial deep dive into how automating a single core process can dramatically shift your bottom line and operating margins.", category: "Strategy", date: "Apr 22, 2026", author: "Govind Mishra", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
  { id: 6, title: "Navigating the 2026 AI Compliance Landscape", excerpt: "From the EU AI Act to local data protection laws, here is everything your legal and marketing teams need to know before deploying AI.", category: "Cybersecurity", date: "Apr 21, 2026", author: "Prince Yadav", image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800" },
  { id: 7, title: "Positioning Complex AI Products for Enterprise Buyers", excerpt: "You can't sell technical architecture to a business buyer. How to translate complex MLOps into clear, undeniable business value.", category: "Strategy", date: "Apr 22, 2026", author: "Jay Padhiyar", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" },
  { id: 8, title: "Scaling Product Vision in a Rapidly Evolving AI Landscape", excerpt: "When the foundational models change every week, how do you maintain a stable long-term roadmap? Our CEO's framework for resilient product strategy.", category: "Strategy", date: "Apr 18, 2026", author: "Sarthak Singh", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
  { id: 9, title: "Optimizing Inference Latency in Custom LLM Deployments", excerpt: "Techniques for quantization, KV cache optimization, and vLLM deployment that cut our inference latency by over 60%.", category: "Infrastructure", date: "Apr 19, 2026", author: "Ronak Parmar", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800" },
  { id: 10, title: "Moving to React 19: Performance Gains for Enterprise Dashboards", excerpt: "Evaluating the new React compiler and concurrent features. Is it worth the upgrade risk for mission-critical web platforms?", category: "Web Dev", date: "Apr 19, 2026", author: "Harsh Prajapati", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800" },
  { id: 11, title: "FinOps for Cloud AI: Keeping Inference Costs Predictable", excerpt: "GPU compute is expensive. Here is how CFOs can work with engineering teams to monitor, forecast, and optimize cloud expenditure.", category: "Infrastructure", date: "Apr 18, 2026", author: "Govind Mishra", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" },
  { id: 12, title: "Growth Hacking in B2B Tech: When to Use AI Outreach", excerpt: "AI-generated outreach is everywhere. How to cut through the noise with highly personalized, account-based marketing strategies.", category: "Strategy", date: "Apr 19, 2026", author: "Prince Yadav", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800" },
  { id: 13, title: "Marketing Automation vs Human Touch: Finding the Balance", excerpt: "Automate the logistics, personalize the relationship. A guide to setting up automated funnels that still feel distinctly human.", category: "Strategy", date: "Apr 20, 2026", author: "Jay Padhiyar", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800" },
  { id: 14, title: "Building Defensible Moats with Proprietary Data", excerpt: "Code can be copied. Algorithms will be open-sourced. The only true moat remaining is high-quality, proprietary domain data.", category: "Strategy", date: "Apr 15, 2026", author: "Sarthak Singh", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800" },
  { id: 15, title: "From Jupyter Notebooks to Kubernetes: Real-world MLOps", excerpt: "The painful reality of deploying models to production. A step-by-step guide to setting up reliable CI/CD pipelines for machine learning.", category: "AI Engineering", date: "Apr 16, 2026", author: "Ronak Parmar", image: "https://images.unsplash.com/photo-1678324483786-9dc5512217f2?auto=format&fit=crop&q=80&w=800" },
  { id: 16, title: "Micro-interactions that Build Trust in Autonomous Agents", excerpt: "When an AI is 'thinking' for 30 seconds, how do you prevent user abandonment? Building skeleton states and terminal-like streaming logs.", category: "Web Dev", date: "Apr 16, 2026", author: "Harsh Prajapati", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800" },
  { id: 17, title: "Evaluating SaaS vs Custom Build: A CFO's Perspective", excerpt: "When does it make sense to pay $50k/year for a SaaS versus investing $150k in a custom-built solution you own forever?", category: "Strategy", date: "Apr 16, 2026", author: "Govind Mishra", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800" },
  { id: 18, title: "Data Privacy in the Era of LLMs: A Legal Checklist", excerpt: "Before you connect your company's database to an LLM, run through this comprehensive checklist to ensure you aren't leaking IP.", category: "Cybersecurity", date: "Apr 15, 2026", author: "Prince Yadav", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
  { id: 19, title: "Brand Moats: Why Technical Excellence Isn't Enough", excerpt: "Great code doesn't sell itself. How to build a brand identity that commands premium pricing in a crowded tech ecosystem.", category: "Strategy", date: "Apr 17, 2026", author: "Jay Padhiyar", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" },
  { id: 20, title: "Zero-Trust Security in the Age of AI Co-Pilots", excerpt: "How to safely deploy autonomous, code-writing agents inside your enterprise without risking internal network traversal or data exfiltration.", category: "Cybersecurity", date: "Apr 15, 2026", author: "Ronak Parmar", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" },
]

const CATEGORIES = ['All', 'Strategy', 'Web Dev', 'AI Engineering', 'Infrastructure', 'Cybersecurity']

export default function Blog() {
  const pageRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const isFirstRender = useRef(true)

  const filtered =
    activeCategory === 'All'
      ? POSTS
      : POSTS.filter(p => p.category === activeCategory)

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

  // Animate cards in after each filter change
  useEffect(() => {
    if (isFirstRender.current) { isFirstRender.current = false; return }
    gsap.fromTo(
      '.bl-card',
      { autoAlpha: 0, y: 36 },
      { autoAlpha: 1, y: 0, duration: 0.55, ease: 'power3.out', stagger: 0.08 }
    )
  }, [activeCategory])

  // Initial scroll/load animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title lines stagger up
      gsap.fromTo('.bl-hero-title-line',
        { autoAlpha: 0, y: 70 },
        { autoAlpha: 1, y: 0, duration: 1.3, ease: 'expo.out', stagger: 0.13, delay: 0.1 }
      )
      gsap.fromTo('.bl-hero-desc',
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 1.0, ease: 'expo.out', delay: 0.4 }
      )

      // Filter pills on scroll
      gsap.fromTo('.bl-filter-btn',
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1, y: 0, duration: 0.65, ease: 'power3.out', stagger: 0.07,
          scrollTrigger: { trigger: '.bl-filters', start: 'top 88%' },
        }
      )

      // Grid cards on scroll
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

        {/* Category filters */}
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

        {/* Grid */}
        <div className="bl-grid">
          {filtered.length > 0 ? (
            filtered.map(post => (
              <article className="bl-card" key={post.id}>
                <div className="bl-card__image-wrap">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="bl-card__img"
                    loading="lazy"
                  />
                  <span className="bl-card__category-tag">{post.category}</span>
                </div>
                <div className="bl-card__body">
                  <h2 className="bl-card__title">{post.title}</h2>
                  <p className="bl-card__excerpt">{post.excerpt}</p>
                  <footer className="bl-card__footer">
                    <span className="bl-card__author">{post.author}</span>
                    <time className="bl-card__date" dateTime={post.date}>{post.date}</time>
                  </footer>
                </div>
              </article>
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
