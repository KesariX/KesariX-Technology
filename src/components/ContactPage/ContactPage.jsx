import { useRef, useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './ContactPage.css'

const PROJECT_TYPES = [
  '— Select project type —',
  'AI & Machine Learning',
  'Web / Mobile Development',
  'Cloud Infrastructure',
  'Workflow Automation',
  'Other',
]

const WHY_ITEMS = [
  'Free 30-min discovery call — no pitch, just listening.',
  'Response within 24 hours, guaranteed.',
  'Fixed-price commitments. No surprise invoices.',
  'Built to scale from day one, not retrofitted later.',
]

export default function ContactPage() {
  const pageRef = useRef(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [projectType, setProjectType] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `New Project Enquiry from ${name || 'Website Visitor'}`,
          name,
          email,
          company: company || 'Not provided',
          project_type: projectType || 'Not selected',
          message,
          from_name: 'KesariX Website',
        }),
      })

      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setName(''); setEmail(''); setCompany(''); setProjectType(''); setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance — title lines stagger up
      gsap.fromTo('.cp-hero-title-line',
        { autoAlpha: 0, y: 70 },
        { autoAlpha: 1, y: 0, duration: 1.3, ease: 'expo.out', stagger: 0.13, delay: 0.1 }
      )
      gsap.fromTo('.cp-hero-desc',
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 1.0, ease: 'expo.out', delay: 0.35 }
      )
      gsap.fromTo('.cp-hero__breadcrumb, .cp-eyebrow',
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 }
      )

      // Form and info panel fade up on scroll
      gsap.fromTo('.cp-form-col',
        { autoAlpha: 0, y: 48 },
        {
          autoAlpha: 1, y: 0, duration: 1.0, ease: 'power3.out',
          scrollTrigger: { trigger: '.cp-body', start: 'top 82%' },
        }
      )
      gsap.fromTo('.cp-info-col',
        { autoAlpha: 0, y: 48 },
        {
          autoAlpha: 1, y: 0, duration: 1.0, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: '.cp-body', start: 'top 82%' },
        }
      )

      setTimeout(() => ScrollTrigger.refresh(), 500)
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="cp-page" ref={pageRef}>

      {/* ── HERO ── */}
      <section className="cp-hero">
        <div className="cp-hero__glow" aria-hidden="true" />
        <div className="cp-hero__bg-grid" aria-hidden="true" />
        <div className="cp-hero__inner">

          <nav className="cp-hero__breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="cp-hero__breadcrumb-sep" aria-hidden="true">/</span>
            <span>Contact</span>
          </nav>

          <span className="cp-eyebrow">
            <span className="cp-eyebrow-dot" aria-hidden="true" />
            Get In Touch
          </span>

          <h1 className="cp-hero-title">
            <span className="cp-hero-title-line">Let's Build</span>
            <span className="cp-hero-title-line">
              <em className="cp-italic">Together.</em>
            </span>
          </h1>

          <p className="cp-hero-desc">
            Ready to transform your business with AI and high-performance engineering?
            We're a message away.
          </p>

        </div>
      </section>

      {/* ── CONTACT BODY ── */}
      <section className="cp-body">
        <div className="cp-body__inner">

          {/* LEFT — Contact Form */}
          <div className="cp-form-col">
            <h3 className="cp-form-title">Tell Us About Your Project</h3>

            <form className="cp-form" onSubmit={handleSubmit} noValidate>

              <div className="cp-field">
                <label className="cp-label" htmlFor="cp-name">Name</label>
                <input
                  id="cp-name"
                  className="cp-input"
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  autoComplete="name"
                />
              </div>

              <div className="cp-field">
                <label className="cp-label" htmlFor="cp-email">Email</label>
                <input
                  id="cp-email"
                  className="cp-input"
                  type="email"
                  placeholder="your@company.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>

              <div className="cp-field">
                <label className="cp-label" htmlFor="cp-company">Company</label>
                <input
                  id="cp-company"
                  className="cp-input"
                  type="text"
                  placeholder="Company name (optional)"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  autoComplete="organization"
                />
              </div>

              <div className="cp-field">
                <label className="cp-label" htmlFor="cp-project-type">Project Type</label>
                <div className="cp-select-wrap">
                  <select
                    id="cp-project-type"
                    className="cp-input cp-select"
                    value={projectType}
                    onChange={e => setProjectType(e.target.value)}
                  >
                    {PROJECT_TYPES.map(type => (
                      <option key={type} value={type === '— Select project type —' ? '' : type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <span className="cp-select-arrow" aria-hidden="true">↓</span>
                </div>
              </div>

              <div className="cp-field">
                <label className="cp-label" htmlFor="cp-message">Message</label>
                <textarea
                  id="cp-message"
                  className="cp-input cp-textarea"
                  rows={6}
                  placeholder="Describe your project, goals, and any relevant context..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </div>

              {status === 'success' ? (
                <div className="cp-success-msg">
                  <span className="cp-success-icon">✓</span>
                  <div>
                    <strong>Message sent!</strong>
                    <p>We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              ) : (
                <>
                  <button
                    type="submit"
                    className="cp-submit-btn"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending…' : 'Send Message ↗'}
                  </button>

                  {status === 'error' && (
                    <p className="cp-error-msg">
                      Something went wrong. Please email us directly at info@kesarixtechnology.com
                    </p>
                  )}

                  <p className="cp-form-note">
                    We respond within 24 hours &middot; Free discovery call included
                  </p>
                </>
              )}

            </form>
          </div>

          {/* RIGHT — Info Panel */}
          <aside className="cp-info-col">
            <div className="cp-info-panel">

              {/* Why Work With Us */}
              <div className="cp-info-why">
                <h4 className="cp-info-eyebrow">Why Work With Us</h4>
                <ul className="cp-why-list">
                  {WHY_ITEMS.map((item, i) => (
                    <li className="cp-why-item" key={i}>
                      <span className="cp-why-check" aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="cp-divider" />

              {/* Direct contact block */}
              <div className="cp-info-contact">
                <div className="cp-contact-row">
                  <span className="cp-contact-label">Email us directly</span>
                  <a
                    className="cp-contact-value cp-contact-link"
                    href="mailto:info@kesarixtechnology.com"
                  >
                    info@kesarixtechnology.com
                  </a>
                </div>
                <div className="cp-contact-row">
                  <span className="cp-contact-label">Call us</span>
                  <a
                    className="cp-contact-value cp-contact-link"
                    href="tel:+919274739361"
                  >
                    +91 92747 39361
                  </a>
                </div>
                <div className="cp-contact-row">
                  <span className="cp-contact-label">Based in</span>
                  <span className="cp-contact-value">Vadodara, India</span>
                </div>
              </div>

              {/* Live status chip */}
              <div className="cp-status-chip">
                <span className="cp-status-dot" aria-hidden="true" />
                <span>Available for New Projects</span>
              </div>

              {/* Social links */}
              <div className="cp-social-row">
                <a className="cp-social-link" href="https://www.linkedin.com/company/kesarix-technology" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  LinkedIn ↗
                </a>
                <span className="cp-social-sep" aria-hidden="true">·</span>
                <a className="cp-social-link" href="https://twitter.com/kesarixtechnology" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
                  Twitter / X ↗
                </a>
                <span className="cp-social-sep" aria-hidden="true">·</span>
                <a className="cp-social-link" href="https://wa.me/919274739361" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  WhatsApp ↗
                </a>
              </div>

            </div>
          </aside>

        </div>
      </section>

    </div>
  )
}
