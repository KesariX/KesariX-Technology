import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import './styles/Blog.css'

const featured = {
  title: "Why 'Prompt Engineering' is Dead (And What Replaced It)",
  excerpt: "The era of guessing magic words for LLMs is over. Welcome to deterministic reasoning frameworks, constrained outputs, and programmatic prompt compilation — the new standard for enterprise AI.",
  category: "AI Engineering",
  date: "Oct 24, 2024",
  author: "Arjun Mehta",
  image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop"
}

const articles = [
  {
    title: "Migrating from Vercel to Custom Bare-Metal K8s",
    excerpt: "A technical deep-dive into how we cut hosting costs by 85% while simultaneously improving global response times.",
    category: "Infrastructure",
    date: "Oct 12, 2024",
    author: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Stop Building Wrappers. Start Building Engines.",
    excerpt: "An architectural guide on moving away from thin API wrappers to building defensible, data-rich AI systems.",
    category: "Strategy",
    date: "Sep 28, 2024",
    author: "Vikram Patil",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Zero-Trust Security in the Age of AI Co-Pilots",
    excerpt: "How to safely deploy code-writing AI inside your enterprise without risking IP leaks.",
    category: "Cybersecurity",
    date: "Sep 15, 2024",
    author: "Neha Singh",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "The Reality of RAG: Why Your Vector Search Sucks",
    excerpt: "Semantic search alone isn't enough. Exploring hybrid search, metadata filtering, and re-ranking pipelines.",
    category: "AI Engineering",
    date: "Aug 30, 2024",
    author: "Arjun Mehta",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Next.js 15: Is It Worth The Upgrade Risk?",
    excerpt: "Reviewing the new caching model, Turbopack performance, and server actions stability across our production projects.",
    category: "Web Dev",
    date: "Aug 14, 2024",
    author: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
  }
]

const categories = ['All', 'AI Engineering', 'Infrastructure', 'Strategy', 'Cybersecurity', 'Web Dev']

export default function Blog() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? articles
    : articles.filter(a => a.category === activeCategory)

  return (
    <div className="blog-page">
      {/* ── HERO ── */}
      <section className="blog-hero">
        <div className="blog-hero__inner">
          <div className="blog-hero__top">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="blog-hero__label">Engineering Blog</div>
              <h1 className="blog-hero__title">
                The KesariX<br /><em>Dispatch.</em>
              </h1>
            </motion.div>
            <motion.p
              className="blog-hero__desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Architectural patterns, deployment post-mortems, and uncensored opinions on modern enterprise technology.
            </motion.p>
          </div>

          <div className="blog-categories">
            {categories.map(cat => (
              <button
                key={cat}
                className={`blog-cat-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      <section className="blog-featured">
        <motion.div
          className="blog-featured__inner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="blog-featured__image">
            <img src={featured.image} alt={featured.title} />
            <span className="blog-featured__badge">Featured</span>
          </div>
          <div>
            <div className="blog-featured__category">{featured.category}</div>
            <h2 className="blog-featured__title">{featured.title}</h2>
            <p className="blog-featured__excerpt">{featured.excerpt}</p>
            <div className="blog-featured__meta">
              <div className="blog-featured__author-img">
                <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${featured.author}`} alt="" />
              </div>
              <div>
                <div className="blog-featured__author-name">{featured.author}</div>
                <div className="blog-featured__date">{featured.date}</div>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <button className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
                  Read More <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── ARTICLE GRID ── */}
      <section className="blog-grid-section">
        <h2>Latest Articles</h2>
        <div className="blog-grid">
          {filtered.map((a, i) => (
            <motion.div
              key={a.title}
              className="blog-card2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <div className="blog-card2__image">
                <img src={a.image} alt={a.title} />
              </div>
              <div className="blog-card2__body">
                <div className="blog-card2__cat">{a.category}</div>
                <h3 className="blog-card2__title">{a.title}</h3>
                <p className="blog-card2__excerpt">{a.excerpt}</p>
                <div className="blog-card2__footer">
                  <span>{a.author} · {a.date}</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SUBSCRIBE ── */}
      <div className="blog-subscribe">
        <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
          Stay <span className="gradient-text">Technically Sharp.</span>
        </h2>
        <p style={{ color: 'var(--text-mid)', fontSize: '1.0625rem' }}>
          One deeply technical post per month. No fluff, no spam.
        </p>
        <div className="blog-subscribe__form">
          <input type="email" className="blog-subscribe__input" placeholder="you@company.com" />
          <button className="btn-primary">Subscribe</button>
        </div>
      </div>
    </div>
  )
}
