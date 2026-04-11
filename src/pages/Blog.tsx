import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen } from 'lucide-react'
import './styles/Blog.css'

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const articles = [
    {
      title: "Why 'Prompt Engineering' is Dead (And What Replaced It)",
      desc: "The era of guessing magic words for LLMs is over. Welcome to deterministic reasoning frameworks, constrained outputs, and programmatic prompt compilation.",
      category: "AI Engineering",
      date: "Oct 24, 2024",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
      author: "Arjun Mehta"
    },
    {
      title: "Migrating from Vercel to Custom Bare-Metal K8s",
      desc: "A technical deep-dive into how we cut hosting costs by 85% for a massive e-commerce client while simultaneously improving response times across the globe.",
      category: "Infrastructure",
      date: "Oct 12, 2024",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
      author: "Priya Sharma"
    },
    {
      title: "Stop Building Wrappers. Start Building Engines.",
      desc: "An architectural guide on moving away from thin API wrappers to building defensible, data-rich AI systems that actually solve deep enterprise problems.",
      category: "Strategy",
      date: "Sep 28, 2024",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
      author: "Vikram Patil"
    },
    {
      title: "Zero-Trust Security in the Age of Co-Pilots",
      desc: "How to safely deploy code-writing AI inside your enterprise without risking IP leaks, including VPC configurations and local model routing.",
      category: "Cybersecurity",
      date: "Sep 15, 2024",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
      author: "Neha Singh"
    },
    {
      title: "The Reality of RAG: Why Your Vector Search Sucks",
      desc: "Semantic search alone isn't enough. Exploring hybrid search, metadata filtering, and re-ranking pipelines to achieve 99% accuracy in retrieval.",
      category: "AI Engineering",
      date: "Aug 30, 2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
      author: "Arjun Mehta"
    },
    {
      title: "Next.js 15: Is It Worth The Upgrade Risk?",
      desc: "Reviewing the new caching model, turbopack performance, and server actions stability across our internal projects.",
      category: "Web Development",
      date: "Aug 14, 2024",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
      author: "Priya Sharma"
    }
  ]

  return (
    <div className="blog-page">
      
      {/* ── HERO ──────────────── */}
      <section className="blog-hero">
        <div className="section-container relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-[var(--surface-soft)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-primary)] mb-8 shadow-sm">
             <BookOpen size={32} />
          </div>
          
          <h1 className="section-title mb-6" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: '1.1' }}>
            The KesariX <br/>
            <span className="gradient-text">Engineering Blog.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[var(--text-mid)] mb-10 leading-relaxed font-medium">
            Architectural patterns, deployment post-mortems, and uncensored opinions on the state of modern enterprise technology.
          </p>
        </div>
      </section>

      {/* ── GRID ──────────────── */}
      <section className="bg-[var(--surface-soft)] overflow-hidden">
        <div className="section-container blog-grid">
          
          {articles.map((article, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
              className="blog-card"
            >
              <div className="blog-image-wrap">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">{article.category}</span>
                  <span className="blog-date">{article.date}</span>
                </div>
                <h3 className="blog-title">{article.title}</h3>
                <p className="blog-desc">{article.desc}</p>
                <div className="blog-author">
                  <div className="blog-avatar">
                     <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${article.author}`} alt={article.author} />
                  </div>
                  <span className="text-sm font-bold">{article.author}</span>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ── CTA ──────────────── */}
      <section className="py-24 bg-white text-center border-t border-[var(--border)]">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4 font-['Outfit'] shadow-sm">Subscribe to the Architecture Email</h2>
          <p className="mb-8 text-[var(--text-mid)]">One incredibly dense technical post per month. No spam.</p>
          <div className="max-w-md mx-auto flex gap-4">
             <input type="email" placeholder="senior.eng@company.com" className="flex-1 px-4 py-3 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--accent-primary)] bg-[var(--surface-soft)]" />
             <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
      
    </div>
  )
}
