import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import './styles/Blog.css'

const featured = {
  title: "Architecting Multi-Agent Swarms for Production Workflows",
  excerpt: "The era of single-prompt LLMs is over. Welcome to deterministic reasoning frameworks, constrained outputs, and programmatic multi-agent orchestration — the new standard for enterprise AI.",
  category: "AI Engineering",
  date: "Apr 22, 2026",
  author: "Ronak Parmar",
  image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop"
}

const articles = [
  {
    title: "The Future of Enterprise AI: Beyond the Hype",
    excerpt: "Why the next wave of billion-dollar companies won't be built on thin wrappers, but on deep integration of AI into proprietary operational data.",
    category: "Strategy",
    date: "Apr 22, 2026",
    author: "Sarthak Singh",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Why Deterministic AI is Winning the Enterprise Market",
    excerpt: "Enterprises don't want chatbots that hallucinate. They want mathematical certainty. Here is how we enforce strict constraints on language models.",
    category: "Strategy",
    date: "Apr 20, 2026",
    author: "Sarthak Singh",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Design Systems for High-Density AI Interfaces",
    excerpt: "Building user interfaces for complex AI agents requires a new approach to UX. We explore density, state indication, and trust markers.",
    category: "Web Dev",
    date: "Apr 21, 2026",
    author: "Harsh Prajapati",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "RAG is Dead. Long Live Hybrid Semantic Reasoning.",
    excerpt: "Basic vector search is no longer enough for accurate context retrieval. Exploring multi-hop reasoning, graph databases, and re-ranking pipelines.",
    category: "AI Engineering",
    date: "Apr 21, 2026",
    author: "Ronak Parmar",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "The True ROI of Automating Operational Bottlenecks",
    excerpt: "A financial deep dive into how automating a single core process can dramatically shift your bottom line and operating margins.",
    category: "Strategy",
    date: "Apr 22, 2026",
    author: "Govind Mishra",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Navigating the 2026 AI Compliance Landscape",
    excerpt: "From the EU AI Act to local data protection laws, here is everything your legal and marketing teams need to know before deploying AI.",
    category: "Cybersecurity",
    date: "Apr 21, 2026",
    author: "Prince Yadav",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Positioning Complex AI Products for Enterprise Buyers",
    excerpt: "You can't sell technical architecture to a business buyer. How to translate complex MLOps into clear, undeniable business value.",
    category: "Strategy",
    date: "Apr 22, 2026",
    author: "Jay Padhiyar",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Scaling Product Vision in a Rapidly Evolving AI Landscape",
    excerpt: "When the foundational models change every week, how do you maintain a stable long-term roadmap? Our CEO's framework for resilient product strategy.",
    category: "Strategy",
    date: "Apr 18, 2026",
    author: "Sarthak Singh",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Optimizing Inference Latency in Custom LLM Deployments",
    excerpt: "Techniques for quantization, KV cache optimization, and vLLM deployment that cut our inference latency by over 60%.",
    category: "Infrastructure",
    date: "Apr 19, 2026",
    author: "Ronak Parmar",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Moving to React 19: Performance Gains for Enterprise Dashboards",
    excerpt: "Evaluating the new React compiler and concurrent features. Is it worth the upgrade risk for mission-critical web platforms?",
    category: "Web Dev",
    date: "Apr 19, 2026",
    author: "Harsh Prajapati",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "FinOps for Cloud AI: Keeping Inference Costs Predictable",
    excerpt: "GPU compute is expensive. Here is how CFOs can work with engineering teams to monitor, forecast, and optimize cloud expenditure.",
    category: "Infrastructure",
    date: "Apr 18, 2026",
    author: "Govind Mishra",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Growth Hacking in B2B Tech: When to Use AI Outreach",
    excerpt: "AI-generated outreach is everywhere. How to cut through the noise with highly personalized, account-based marketing strategies.",
    category: "Strategy",
    date: "Apr 19, 2026",
    author: "Prince Yadav",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Marketing Automation vs Human Touch: Finding the Balance",
    excerpt: "Automate the logistics, personalize the relationship. A guide to setting up automated funnels that still feel distinctly human.",
    category: "Strategy",
    date: "Apr 20, 2026",
    author: "Jay Padhiyar",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Building Defensible Moats with Proprietary Data",
    excerpt: "Code can be copied. Algorithms will be open-sourced. The only true moat remaining is high-quality, proprietary domain data.",
    category: "Strategy",
    date: "Apr 15, 2026",
    author: "Sarthak Singh",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "From Jupyter Notebooks to Kubernetes: Real-world MLOps",
    excerpt: "The painful reality of deploying models to production. A step-by-step guide to setting up reliable CI/CD pipelines for machine learning.",
    category: "AI Engineering",
    date: "Apr 16, 2026",
    author: "Ronak Parmar",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Micro-interactions that Build Trust in Autonomous Agents",
    excerpt: "When an AI is 'thinking' for 30 seconds, how do you prevent user abandonment? Building skeleton states and terminal-like streaming logs.",
    category: "Web Dev",
    date: "Apr 16, 2026",
    author: "Harsh Prajapati",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Evaluating SaaS vs Custom Build: A CFO's Perspective",
    excerpt: "When does it make sense to pay $50k/year for a SaaS versus investing $150k in a custom-built solution you own forever?",
    category: "Strategy",
    date: "Apr 16, 2026",
    author: "Govind Mishra",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Data Privacy in the Era of LLMs: A Legal Checklist",
    excerpt: "Before you connect your company's database to an LLM, run through this comprehensive checklist to ensure you aren't leaking IP.",
    category: "Cybersecurity",
    date: "Apr 15, 2026",
    author: "Prince Yadav",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Brand Moats: Why Technical Excellence Isn't Enough",
    excerpt: "Great code doesn't sell itself. How to build a brand identity that commands premium pricing in a crowded tech ecosystem.",
    category: "Strategy",
    date: "Apr 17, 2026",
    author: "Jay Padhiyar",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Zero-Trust Security in the Age of AI Co-Pilots",
    excerpt: "How to safely deploy autonomous, code-writing agents inside your enterprise without risking internal network traversal or data exfiltration.",
    category: "Cybersecurity",
    date: "Apr 15, 2026",
    author: "Ronak Parmar",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
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
      <SEO
        title="Blog — AI & Software Engineering Insights | KesariX Technology"
        description="Read the KesariX Technology blog for insights on AI, machine learning, software architecture, and digital transformation. Practical guides from our engineering team."
        path="/company/blog"
      />
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
