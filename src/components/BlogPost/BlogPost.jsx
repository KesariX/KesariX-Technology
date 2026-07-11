import { useParams } from 'react-router-dom'
import { useRef, useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import { BLOG_POSTS } from '../../data/blogPosts'
import './BlogPost.css'
import SEO from '../SEO/SEO'

function ReactRenderingDiagram({ title }) {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: 'vdom',
      num: '1',
      title: 'Virtual DOM',
      subtitle: 'In-Memory Blueprint',
      desc: 'A lightweight copy of the real DOM. Fast to update because it doesn\'t write to the screen.',
      color: '#00d8ff',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    },
    {
      id: 'diff',
      num: '2',
      title: 'Diffing Algorithm',
      subtitle: 'O(n) Comparison',
      desc: 'Compares the new Virtual DOM with the previous snapshot to pinpoint exactly what changed.',
      color: '#ff5a1f',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="12" x2="2" y2="12" />
          <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
          <line x1="6" y1="16" x2="6.01" y2="16" />
          <line x1="10" y1="16" x2="10.01" y2="16" />
        </svg>
      )
    },
    {
      id: 'recon',
      num: '3',
      title: 'Reconciliation',
      subtitle: 'Surgical Update',
      desc: 'Queues only the differences to be updated. Leaves the rest of the page completely untouched.',
      color: '#a855f7',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    },
    {
      id: 'dom',
      num: '4',
      title: 'Real DOM',
      subtitle: 'Browser Paint',
      desc: 'The browser renders only the minimal mutations, ensuring animations and interactions stay smooth.',
      color: '#10b981',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    }
  ];

  return (
    <div className="rrd-container">
      <h4 className="rrd-heading">{title}</h4>
      <div className="rrd-flow">
        {steps.map((step, idx) => (
          <div key={step.id} className="rrd-step-wrapper">
            <div 
              className={`rrd-card ${activeStep === step.id ? 'rrd-card--active' : ''}`}
              style={{ '--accent-color': step.color }}
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="rrd-card-glow" />
              <div className="rrd-card-header">
                <div className="rrd-card-num">0{step.num}</div>
                <div className="rrd-card-icon" style={{ color: step.color }}>{step.icon}</div>
              </div>
              <h5 className="rrd-card-title">{step.title}</h5>
              <div className="rrd-card-sub">{step.subtitle}</div>
              <p className="rrd-card-desc">{step.desc}</p>
            </div>
            
            {idx < steps.length - 1 && (
              <div className="rrd-arrow-container">
                <div className="rrd-arrow-line" style={{ '--arrow-color': steps[idx + 1].color }}>
                  <div className="rrd-arrow-pulse" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="rrd-hint">Hover on individual stages to examine React's optimization details.</div>
    </div>
  );
}

export default function BlogPost() {
  const { id } = useParams()
  const ref = useRef(null)
  const [isImgFullscreen, setIsImgFullscreen] = useState(false)

  const post = BLOG_POSTS.find(p => p.id === parseInt(id) || p.slug === id)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.bp-hero-content > *', { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 1.1, ease: 'expo.out', stagger: 0.1, delay: 0.1 })
    }, ref)
    return () => ctx.revert()
  }, [post])

  if (!post) {
    return (
      <div className="bp-not-found">
        <h2>Article not found</h2>
        <a href="/blog">← Back to Blog</a>
      </div>
    )
  }

  const related = BLOG_POSTS.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3)

  return (
    <div className="bp-page" ref={ref}>
      <SEO
        title={post.title}
        description={post.excerpt || post.summary || `${post.title} — Read the full article on the KesariX Technology blog.`}
        keywords={`${post.category}, ${post.tags ? post.tags.join(', ') : ''}, AI Blog, Tech Blog India, KesariX Technology Blog`}
        canonicalUrl={`/blog/${post.slug || post.id}`}
        type="article"
        ogImage={post.image}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug || post.id}` },
        ]}
        article={{
          title: post.title,
          description: post.excerpt || post.summary || post.title,
          publishedTime: post.isoDate || post.date || '2025-01-01',
          modifiedTime: post.isoDate || post.date || '2025-01-01',
          author: post.author || 'KesariX Technology',
          image: post.image,
        }}
      />

      {/* ── HERO ── */}
      <section className="bp-hero">
        <div className="bp-hero__inner">
          <div className="bp-hero-content">
            <nav className="bp-breadcrumb">
              <a href="/">Home</a><span>/</span>
              <a href="/blog">Blog</a><span>/</span>
              <span>{post.category}</span>
            </nav>
            <span className="bp-category-tag">{post.category}</span>
            <h1 className="bp-title">{post.title}</h1>
            <div className="bp-meta">
              <span className="bp-author">{post.author}</span>
              <span className="bp-sep">·</span>
              <time className="bp-date">{post.date}</time>
              <span className="bp-sep">·</span>
              <span className="bp-read">{post.readTime} read</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED IMAGE ── */}
      <div className="bp-featured-image-container">
        <div 
          className="bp-featured-image-wrap" 
          onClick={() => setIsImgFullscreen(true)}
          style={{ cursor: 'zoom-in' }}
          title="Click to view full screen"
        >
          <img src={post.image} alt={post.title} className="bp-featured-image" />
        </div>
      </div>

      {/* ── IMAGE FULLSCREEN MODAL ── */}
      {isImgFullscreen && (
        <div 
          className="bp-image-modal" 
          onClick={() => setIsImgFullscreen(false)}
          aria-label="Close full screen image"
        >
          <button className="bp-image-modal__close" onClick={() => setIsImgFullscreen(false)}>&times;</button>
          <img src={post.image} alt={post.title} className="bp-image-modal__img" />
        </div>
      )}

      {/* ── CONTENT ── */}
      <div className="bp-layout">
        <article className="bp-content">
          <p className="bp-excerpt">{post.excerpt}</p>
          <div className="bp-divider" />
          
          {Array.isArray(post.content) ? (
            post.content.map((item, i) => {
              if (item.type === 'paragraph') {
                return <p key={i} className="bp-para">{item.text}</p>
              }
              if (item.type === 'heading2') {
                return <h2 key={i} className="bp-heading2">{item.text}</h2>
              }
              if (item.type === 'heading3') {
                return <h3 key={i} className="bp-heading3">{item.text}</h3>
              }
              if (item.type === 'diagram') {
                if (item.name === 'react-rendering-process') {
                  return <ReactRenderingDiagram key={i} title={item.title} />
                }
              }
              return null
            })
          ) : (
            post.content.split('\n\n').map((para, i) => (
              <p key={i} className="bp-para">{para}</p>
            ))
          )}

          {/* Share / CTA block */}
          <div className="bp-footer-block">
            <div className="bp-tags">
              {post.tags ? post.tags.map(t => (
                <span className="bp-tag" key={t}>{t}</span>
              )) : (
                <>
                  <span className="bp-tag">{post.category}</span>
                  <span className="bp-tag">KesariX Insights</span>
                  <span className="bp-tag">Technology</span>
                </>
              )}
            </div>
            <div className="bp-footer-cta">
              <p>Want to discuss how this applies to your business?</p>
              <a href="/contact" className="bp-cta-btn">Book a Free Call ↗</a>
            </div>
          </div>
        </article>

        {/* ── AUTHOR & PROJECT INFO (Moved from sidebar) ── */}
        <div className="bp-end-grid">
          <div className="bp-sidebar-card">
            <div className="bp-sidebar-label">About the Author</div>
            <div className="bp-author-info">
              <div className="bp-author-avatar">{post.author.split(' ').map(n => n[0]).join('')}</div>
              <div>
                <div className="bp-author-name">{post.author}</div>
                <div className="bp-author-role">KesariX Technology</div>
              </div>
            </div>
          </div>

          <div className="bp-sidebar-card">
            <div className="bp-sidebar-label">Start a Project</div>
            <p className="bp-sidebar-desc">Ready to build something extraordinary?</p>
            <div className="bp-sidebar-actions">
              <a href="/contact" className="bp-sidebar-cta">Get a Free Quote ↗</a>
              <a href="/pricing" className="bp-sidebar-secondary">View Pricing</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── RELATED POSTS ── */}
      {related.length > 0 && (
        <section className="bp-related">
          <div className="bp-related__inner">
            <h2 className="bp-related__title">More from {post.category}</h2>
            <div className="bp-related__grid">
              {related.map(r => (
                <a href={`/blog/${r.slug || r.id}`} key={r.id} className="bp-related-card" target="_blank" rel="noopener noreferrer">
                  <div className="bp-related-card__img" style={{ backgroundImage: `url(${r.image})` }} />
                  <div className="bp-related-card__body">
                    <span className="bp-related-card__cat">{r.category}</span>
                    <h3 className="bp-related-card__title">{r.title}</h3>
                    <div className="bp-related-card__meta">{r.author} · {r.date}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="bp-back-wrap">
        <a href="/blog" className="bp-back">← Back to all articles</a>
      </div>
    </div>
  )
}
