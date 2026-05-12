import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './CloudBackbone.css'

gsap.registerPlugin(ScrollTrigger)

export default function CloudBackbone() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.fromTo('.cb-hero-title', 
        { autoAlpha: 0, y: 60 },
        { autoAlpha: 1, y: 0, duration: 1.2, ease: 'expo.out', delay: 0.1 }
      )
      gsap.fromTo('.cb-hero-desc, .cb-hero-ctas', 
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 1, ease: 'expo.out', delay: 0.4, stagger: 0.15 }
      )

      // Independent element reveals
      const revealElements = gsap.utils.toArray('.cb-reveal')
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

      // Image Parallax
      gsap.fromTo('.cb-parallax-img', 
        { scale: 1.2, y: '-15%' },
        { scale: 1, y: '15%', ease: 'none', scrollTrigger: { trigger: '.cb-why-us', start: 'top bottom', end: 'bottom top', scrub: true } }
      )

      // Desktop Sticky Process Pinning
      let mm = gsap.matchMedia()
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: '.cb-process__inner',
          start: 'top 15%',
          end: 'bottom 85%',
          pin: '.cb-process__sticky',
        })
      })

      setTimeout(() => ScrollTrigger.refresh(), 500)
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="cb-page" ref={sectionRef}>
      
      {/* ── HERO (DARK) ── */}
      <section className="cb-section cb-hero cb-dark">
        <div className="cb-hero__glow"></div>
        <div className="cb-hero__bg-grid"></div>
        <div className="cb-hero__inner">
          <div className="cb-hero__breadcrumb">
            <a href="/">Home</a>
            <span className="cb-hero__breadcrumb-sep">/</span>
            <a href="/#capabilities">Services</a>
            <span className="cb-hero__breadcrumb-sep">/</span>
            <span>Cloud Backbone</span>
          </div>
          <span className="cb-eyebrow">
            <span className="cb-eyebrow-dot"></span>
            Cloud Backbone
          </span>
          <h1 className="cb-hero-title">
            IT <br /> <em className="cb-italic">Infrastructure.</em>
          </h1>
          <p className="cb-hero-desc">
            Managed cloud, security hardening, and dependable DevOps pipelines to keep your systems resilient at scale.
          </p>
          <div className="cb-hero-ctas">
            <a href="/#contact" className="cb-cta cb-cta--primary">Setup Infrastructure ↗</a>
            <a href="/#contact" className="cb-cta cb-cta--secondary">Audit Security ↗</a>
          </div>
        </div>
      </section>

      {/* ── CARDS (LIGHT) ── */}
      <section className="cb-section cb-light">
        <div className="cb-cards__grid">
          <div className="cb-card cb-reveal">
            <div className="cb-card__icon">01</div>
            <h3 className="cb-card__title">Managed Cloud</h3>
            <p className="cb-card__desc">Architecting and maintaining highly available cloud environments on AWS, GCP, and Azure tailored for your workload.</p>
          </div>
          <div className="cb-card cb-reveal">
            <div className="cb-card__icon">02</div>
            <h3 className="cb-card__title">DevOps & CI/CD</h3>
            <p className="cb-card__desc">Automated deployment pipelines that ensure zero-downtime releases, rigorous testing, and rapid rollback capabilities.</p>
          </div>
          <div className="cb-card cb-reveal">
            <div className="cb-card__icon">03</div>
            <h3 className="cb-card__title">Cybersecurity Ops</h3>
            <p className="cb-card__desc">Continuous vulnerability scanning, penetration testing, and compliance hardening to protect your data assets.</p>
          </div>
        </div>
      </section>

      {/* ── WHY US (BLUE) ── */}
      <section className="cb-section cb-why-us cb-blue">
        <div className="cb-why-us__inner">
          <div className="cb-why-us__visual cb-reveal">
            <div className="cb-why-us__img-wrap">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" alt="Cloud Infrastructure" className="cb-parallax-img" />
            </div>
            <div className="cb-badge">
              <span className="cb-badge__num">24/7</span>
              <span className="cb-badge__text">Active<br/>Monitoring</span>
            </div>
          </div>
          <div className="cb-why-us__content">
            <h2 className="cb-title-huge cb-reveal">Scale with confidence.<br/><em className="cb-italic">Never go down.</em></h2>
            <p className="cb-desc-large cb-reveal">
              We design IT backbones that treat infrastructure as code. From elastic auto-scaling to multi-region redundancy, we ensure your business operations remain uninterrupted regardless of traffic surges.
            </p>
          </div>
        </div>
      </section>

      {/* ── USE CASES (DARK) ── */}
      <section className="cb-section cb-use-cases cb-dark">
        <div className="cb-section-header cb-reveal">
          <h2 className="cb-title-huge">Cloud <em className="cb-italic">Solutions</em></h2>
          <p className="cb-desc-large">Resilient backbones for enterprise ecosystems.</p>
        </div>
        <div className="cb-use-cases__grid">
          <div className="cb-use-case cb-reveal">
            <img className="cb-use-case__img" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800" alt="Server Clusters" />
            <div className="cb-use-case__content">
              <h4 className="cb-use-case__title">High-Availability Clusters</h4>
              <p className="cb-use-case__desc">Load-balanced, containerized applications using Kubernetes for infinite scalability.</p>
            </div>
          </div>
          <div className="cb-use-case cb-reveal">
            <img className="cb-use-case__img" src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800" alt="Data Compliance" />
            <div className="cb-use-case__content">
              <h4 className="cb-use-case__title">Compliance Architecture</h4>
              <p className="cb-use-case__desc">Infrastructure mapped directly to SOC2, HIPAA, or ISO 27001 compliance standards.</p>
            </div>
          </div>
          <div className="cb-use-case cb-reveal">
            <img className="cb-use-case__img" src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800" alt="Disaster Recovery" />
            <div className="cb-use-case__content">
              <h4 className="cb-use-case__title">Disaster Recovery</h4>
              <p className="cb-use-case__desc">Automated backups and failover strategies to guarantee business continuity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS (LIGHT) ── */}
      <section className="cb-section cb-process cb-light">
        <div className="cb-process__inner">
          <div className="cb-process__sticky cb-reveal">
            <h2 className="cb-title-huge">Our <em className="cb-italic">Method</em></h2>
            <p className="cb-desc-large">A strategic approach to resilient infrastructure.</p>
          </div>
          <div className="cb-process__list">
            <div className="cb-step cb-reveal">
              <div className="cb-step__num">01</div> 
              <div className="cb-step__content">
                <h4>Audit & Planning</h4>
                <p>We analyze your current infrastructure, identifying bottlenecks, security vulnerabilities, and cost-saving opportunities.</p>
              </div>
            </div>
            <div className="cb-step cb-reveal">
              <div className="cb-step__num">02</div> 
              <div className="cb-step__content">
                <h4>Infrastructure as Code</h4>
                <p>Creating immutable, repeatable environments using Terraform or Ansible to eliminate configuration drift.</p>
              </div>
            </div>
            <div className="cb-step cb-reveal">
              <div className="cb-step__num">03</div> 
              <div className="cb-step__content">
                <h4>Migration & Implementation</h4>
                <p>Seamlessly migrating data and services to the new architecture with zero to minimal operational downtime.</p>
              </div>
            </div>
            <div className="cb-step cb-reveal">
              <div className="cb-step__num">04</div> 
              <div className="cb-step__content">
                <h4>Monitoring & Support</h4>
                <p>Establishing 24/7 observability with Datadog or Prometheus, backed by our rapid-response engineering team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
