import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './ProductEngineering.css'

export default function ProductEngineering() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pe-hero-title',
        { autoAlpha: 0, y: 60 },
        { autoAlpha: 1, y: 0, duration: 1.2, ease: 'expo.out', delay: 0.1 }
      )
      gsap.fromTo('.pe-hero-desc, .pe-hero-ctas',
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 1, ease: 'expo.out', delay: 0.4, stagger: 0.15 }
      )

      const revealElements = gsap.utils.toArray('.pe-reveal')
      revealElements.forEach((el) => {
        gsap.fromTo(el,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        )
      })

      gsap.fromTo('.pe-parallax-img',
        { scale: 1.2, y: '-15%' },
        { scale: 1, y: '15%', ease: 'none', scrollTrigger: { trigger: '.pe-why-us', start: 'top bottom', end: 'bottom top', scrub: true } }
      )

      let mm = gsap.matchMedia()
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: '.pe-process__inner',
          start: 'top 15%',
          end: 'bottom 85%',
          pin: '.pe-process__sticky',
        })
      })

      setTimeout(() => ScrollTrigger.refresh(), 500)
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="pe-page" ref={sectionRef}>

      {/* ── HERO (DARK) ── */}
      <section className="pe-section pe-hero pe-dark">
        <div className="pe-hero__glow"></div>
        <div className="pe-hero__bg-grid"></div>
        <div className="pe-hero__inner">
          <div className="pe-hero__breadcrumb">
            <a href="/">Home</a>
            <span className="pe-hero__breadcrumb-sep">/</span>
            <a href="/#capabilities">Services</a>
            <span className="pe-hero__breadcrumb-sep">/</span>
            <span>Product Engineering</span>
          </div>
          <span className="pe-eyebrow">
            <span className="pe-eyebrow-dot"></span>
            Product Engineering
          </span>
          <h1 className="pe-hero-title">
            Products <br /> <em className="pe-italic">Built to Scale.</em>
          </h1>
          <p className="pe-hero-desc">
            End-to-end digital product development — from concept and UX to production-ready web and mobile platforms engineered for performance.
          </p>
          <div className="pe-hero-ctas">
            <a href="/#contact" className="pe-cta pe-cta--primary">Start Building ↗</a>
            <a href="/#contact" className="pe-cta pe-cta--secondary">View Our Work ↗</a>
          </div>
        </div>
      </section>

      {/* ── CARDS (LIGHT) ── */}
      <section className="pe-section pe-light">
        <div className="pe-cards__grid">
          <div className="pe-card pe-reveal">
            <div className="pe-card__icon">01</div>
            <h3 className="pe-card__title">Full-Stack Web Development</h3>
            <p className="pe-card__desc">High-performance React, Next.js, and Node.js platforms optimised for speed, SEO, and conversion. Built to handle enterprise traffic from day one.</p>
          </div>
          <div className="pe-card pe-reveal">
            <div className="pe-card__icon">02</div>
            <h3 className="pe-card__title">Mobile App Development</h3>
            <p className="pe-card__desc">Cross-platform iOS and Android applications using React Native, delivering native-quality experiences with a single, maintainable codebase.</p>
          </div>
          <div className="pe-card pe-reveal">
            <div className="pe-card__icon">03</div>
            <h3 className="pe-card__title">API & Backend Architecture</h3>
            <p className="pe-card__desc">Scalable RESTful and GraphQL APIs backed by microservices architecture, designed for low latency, high availability, and third-party integration.</p>
          </div>
        </div>
      </section>

      {/* ── WHY US (BLUE) ── */}
      <section className="pe-section pe-why-us pe-blue">
        <div className="pe-why-us__inner">
          <div className="pe-why-us__visual pe-reveal">
            <div className="pe-why-us__img-wrap">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200" alt="Product Engineering" className="pe-parallax-img" />
            </div>
            <div className="pe-badge">
              <span className="pe-badge__num">100+</span>
              <span className="pe-badge__text">Products<br/>Shipped</span>
            </div>
          </div>
          <div className="pe-why-us__content">
            <h2 className="pe-title-huge pe-reveal">Good design ships.<br/><em className="pe-italic">Great design scales.</em></h2>
            <p className="pe-desc-large pe-reveal">
              We don't just write code — we architect digital products. Every decision from component structure to database schema is made with long-term maintainability, performance benchmarks, and real user behaviour in mind.
            </p>
          </div>
        </div>
      </section>

      {/* ── USE CASES (DARK) ── */}
      <section className="pe-section pe-use-cases pe-dark">
        <div className="pe-section-header pe-reveal">
          <h2 className="pe-title-huge">Products <em className="pe-italic">We Build</em></h2>
          <p className="pe-desc-large">Proven delivery across high-stakes digital products.</p>
        </div>
        <div className="pe-use-cases__grid">
          <div className="pe-use-case pe-reveal">
            <img className="pe-use-case__img" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="SaaS Platforms" />
            <div className="pe-use-case__content">
              <h4 className="pe-use-case__title">SaaS Platforms</h4>
              <p className="pe-use-case__desc">Multi-tenant dashboard products with subscription billing, role management, and complex data visualisation.</p>
            </div>
          </div>
          <div className="pe-use-case pe-reveal">
            <img className="pe-use-case__img" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800" alt="E-Commerce" />
            <div className="pe-use-case__content">
              <h4 className="pe-use-case__title">E-Commerce</h4>
              <p className="pe-use-case__desc">High-conversion storefronts with custom checkout flows, headless CMS integrations, and real-time inventory systems.</p>
            </div>
          </div>
          <div className="pe-use-case pe-reveal">
            <img className="pe-use-case__img" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800" alt="Enterprise Portals" />
            <div className="pe-use-case__content">
              <h4 className="pe-use-case__title">Enterprise Portals</h4>
              <p className="pe-use-case__desc">Internal tooling, client portals, and data dashboards handling sensitive workflows at enterprise scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS (LIGHT) ── */}
      <section className="pe-section pe-process pe-light">
        <div className="pe-process__inner">
          <div className="pe-process__sticky pe-reveal">
            <h2 className="pe-title-huge">How We <em className="pe-italic">Deliver</em></h2>
            <p className="pe-desc-large">A structured engineering process from brief to production.</p>
          </div>
          <div className="pe-process__list">
            <div className="pe-step pe-reveal">
              <div className="pe-step__num">01</div>
              <div className="pe-step__content">
                <h4>Discovery & UX Strategy</h4>
                <p>Understanding your users, defining user journeys, and wireframing core interaction patterns before a line of code is written.</p>
              </div>
            </div>
            <div className="pe-step pe-reveal">
              <div className="pe-step__num">02</div>
              <div className="pe-step__content">
                <h4>Architecture & Design System</h4>
                <p>Establishing a scalable component library, API contracts, and data models aligned to your product's long-term roadmap.</p>
              </div>
            </div>
            <div className="pe-step pe-reveal">
              <div className="pe-step__num">03</div>
              <div className="pe-step__content">
                <h4>Agile Development Sprints</h4>
                <p>Two-week sprint cycles with continuous delivery, code reviews, and stakeholder demos to keep the product on track.</p>
              </div>
            </div>
            <div className="pe-step pe-reveal">
              <div className="pe-step__num">04</div>
              <div className="pe-step__content">
                <h4>Launch & Growth Engineering</h4>
                <p>Production deployment with performance audits, A/B testing infrastructure, and ongoing optimisation based on real usage data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
