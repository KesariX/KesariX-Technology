import { useRef, useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './ContactPage.css'
import SEO from '../SEO/SEO'

const PROJECT_TYPES = [
  '— Select project type —',
  'AI & Machine Learning',
  'Web / Mobile Development',

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
      <SEO 
        title="Contact KesariX Technology — Hire AI Developers & Software Engineers"
        description="Get in touch with KesariX Technology. Hire expert AI developers, full-stack engineers, mobile app developers, and automation specialists. Free 30-min discovery call. Response within 24 hours. Serving India, USA, UK, UAE, Canada, Australia."
        keywords="Hire AI Developer India, Hire Full Stack Developer India, Hire React Developer, Contact Software Company India, Web Development Agency Contact, AI Agency India Contact, Hire Mobile App Developer, Software Outsourcing India, Hire MERN Developer, Hire Next.js Developer, AI Consulting India, Free Discovery Call, Tech Partner India"
        canonicalUrl="/contact"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ]}
        faqs={[
          { question: 'How can I hire KesariX Technology for a project?', answer: 'Fill out the contact form on this page or send us an email at info@kesarixtechnology.com. We respond within 24 hours and schedule a free 30-minute discovery call to understand your requirements before providing a detailed proposal.' },
          { question: 'Does KesariX Technology work with international clients?', answer: 'Yes. We actively work with clients in the USA, UK, Canada, Australia, UAE, Singapore, and across Europe. All communication is in English, and we accommodate time zone requirements for meetings and stand-ups.' },
          { question: 'Is there a minimum project budget?', answer: 'Our minimum engagement is ₹20,000 (approx. $250 USD) for small projects like landing pages. For AI development and enterprise software, engagements typically start at ₹1,00,000+. We quote based on scope, not arbitrary minimums.' },
        ]}
        schemaData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact KesariX Technology",
          "url": "https://kesarixtechnology.com/contact",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "KesariX Technology",
            "telephone": "+91-92747-39361",
            "email": "info@kesarixtechnology.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Surat",
              "addressRegion": "Gujarat",
              "postalCode": "395001",
              "addressCountry": "IN"
            },
            "openingHours": ["Mo-Fr 09:00-19:00", "Sa 10:00-16:00"]
          }
        }}
      />

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

          {/* LEFT — Contact Form or Success Panel */}
          <div className="cp-form-col">

            {status === 'success' ? (

              <div className="cp-success-panel">
                <div className="cp-success-panel__glow" aria-hidden="true" />

                {/* Animated checkmark */}
                <div className="cp-success-check-wrap">
                  <svg className="cp-check-svg" viewBox="0 0 52 52" aria-hidden="true">
                    <circle className="cp-check-circle" cx="26" cy="26" r="24" fill="none" />
                    <path className="cp-check-tick" fill="none" strokeLinecap="round" strokeLinejoin="round" d="M14 27l8 8 16-16" />
                  </svg>
                </div>

                <div className="cp-success-panel__body">
                  <span className="cp-success-eyebrow">
                    <span className="cp-success-eyebrow-dot" aria-hidden="true" />
                    Message Delivered
                  </span>

                  <h3 className="cp-success-title">
                    We've got your<br />
                    <em className="cp-success-title-em">
                      {name ? `message, ${name.split(' ')[0]}.` : 'message.'}
                    </em>
                  </h3>

                  <p className="cp-success-desc">
                    Every enquiry is reviewed personally by our team — you'll get a real reply, not a template.
                  </p>

                  {/* What happens next */}
                  <div className="cp-success-timeline">
                    <p className="cp-success-timeline-head">What happens next</p>

                    <div className="cp-timeline-item cp-timeline-item--done">
                      <span className="cp-tl-dot" />
                      <div className="cp-tl-content">
                        <span className="cp-tl-when">Right now</span>
                        <span className="cp-tl-what">Your message landed in our inbox</span>
                      </div>
                    </div>

                    <div className="cp-timeline-item">
                      <span className="cp-tl-dot" />
                      <div className="cp-tl-content">
                        <span className="cp-tl-when">Within 24 hours</span>
                        <span className="cp-tl-what">Personal reply from our team</span>
                      </div>
                    </div>

                    <div className="cp-timeline-item">
                      <span className="cp-tl-dot" />
                      <div className="cp-tl-content">
                        <span className="cp-tl-when">Within 48 hours</span>
                        <span className="cp-tl-what">Free 30-min discovery call booked</span>
                      </div>
                    </div>
                  </div>

                  {/* Immediate contact */}
                  <div className="cp-success-reach">
                    <span className="cp-success-reach-label">Need to talk sooner?</span>
                    <div className="cp-success-reach-links">
                      <a
                        className="cp-reach-link"
                        href="https://wa.me/919274739361"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp ↗
                      </a>
                      <span className="cp-reach-sep" aria-hidden="true">·</span>
                      <a
                        className="cp-reach-link"
                        href="mailto:info@kesarixtechnology.com"
                      >
                        Email directly ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            ) : (

              <>
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

                </form>
              </>

            )}

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
