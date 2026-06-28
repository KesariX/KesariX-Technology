import { useParams } from 'react-router-dom'
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { BLOG_POSTS } from '../../data/blogPosts'
import './BlogPost.css'
import SEO from '../SEO/SEO'

export default function BlogPost() {
  const { id } = useParams()
  const ref = useRef(null)

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
      <section className="bp-hero" style={{ backgroundImage: `url(${post.image})` }}>
        <div className="bp-hero__overlay" />
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

      {/* ── CONTENT ── */}
      <div className="bp-layout">
        <article className="bp-content">
          <p className="bp-excerpt">{post.excerpt}</p>
          <div className="bp-divider" />
          {post.content.split('\n\n').map((para, i) => (
            <p key={i} className="bp-para">{para}</p>
          ))}

          {/* Share / CTA block */}
          <div className="bp-footer-block">
            <div className="bp-tags">
              <span className="bp-tag">{post.category}</span>
              <span className="bp-tag">KesariX Insights</span>
              <span className="bp-tag">Technology</span>
            </div>
            <div className="bp-footer-cta">
              <p>Want to discuss how this applies to your business?</p>
              <a href="/contact" className="bp-cta-btn">Book a Free Call ↗</a>
            </div>
          </div>
        </article>

        {/* ── SIDEBAR ── */}
        <aside className="bp-sidebar">
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
            <a href="/contact" className="bp-sidebar-cta">Get a Free Quote ↗</a>
            <a href="/pricing" className="bp-sidebar-secondary">View Pricing</a>
          </div>
        </aside>
      </div>

      {/* ── RELATED POSTS ── */}
      {related.length > 0 && (
        <section className="bp-related">
          <div className="bp-related__inner">
            <h2 className="bp-related__title">More from {post.category}</h2>
            <div className="bp-related__grid">
              {related.map(r => (
                <a href={`/blog/${r.id}`} key={r.id} className="bp-related-card">
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
