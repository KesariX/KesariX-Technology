import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './WorkflowEngines.css'

gsap.registerPlugin(ScrollTrigger)

export default function WorkflowEngines() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.fromTo('.we-hero-title', 
        { autoAlpha: 0, y: 60 },
        { autoAlpha: 1, y: 0, duration: 1.2, ease: 'expo.out', delay: 0.1 }
      )
      gsap.fromTo('.we-hero-desc, .we-hero-ctas', 
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 1, ease: 'expo.out', delay: 0.4, stagger: 0.15 }
      )

      // Independent element reveals
      const revealElements = gsap.utils.toArray('.we-reveal')
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
      gsap.fromTo('.we-parallax-img', 
        { scale: 1.2, y: '-15%' },
        { scale: 1, y: '15%', ease: 'none', scrollTrigger: { trigger: '.we-why-us', start: 'top bottom', end: 'bottom top', scrub: true } }
      )

      // Desktop Sticky Process Pinning
      let mm = gsap.matchMedia()
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: '.we-process__inner',
          start: 'top 15%',
          end: 'bottom 85%',
          pin: '.we-process__sticky',
        })
      })

      setTimeout(() => ScrollTrigger.refresh(), 500)
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="we-page" ref={sectionRef}>
      
      {/* ── HERO (DARK) ── */}
      <section className="we-section we-hero we-dark">
        <div className="we-hero__glow"></div>
        <div className="we-hero__bg-grid"></div>
        <div className="we-hero__inner">
          <div className="we-hero__breadcrumb">
            <a href="/">Home</a>
            <span className="we-hero__breadcrumb-sep">/</span>
            <a href="/#capabilities">Services</a>
            <span className="we-hero__breadcrumb-sep">/</span>
            <span>Workflow Engines</span>
          </div>
          <span className="we-eyebrow">
            <span className="we-eyebrow-dot"></span>
            Workflow Engines
          </span>
          <h1 className="we-hero-title">
            Process <br /> <em className="we-italic">Automation.</em>
          </h1>
          <p className="we-hero-desc">
            Scalable state machines and distributed workflow engines designed to orchestrate complex, long-running business logic.
          </p>
          <div className="we-hero-ctas">
            <a href="/#contact" className="we-cta we-cta--primary">Architect Workflow ↗</a>
            <a href="/#contact" className="we-cta we-cta--secondary">Audit Processes ↗</a>
          </div>
        </div>
      </section>

      {/* ── CARDS (LIGHT) ── */}
      <section className="we-section we-light">
        <div className="we-cards__grid">
          <div className="we-card we-reveal">
            <div className="we-card__icon">01</div>
            <h3 className="we-card__title">Distributed Orchestration</h3>
            <p className="we-card__desc">Reliable execution of microservices using temporal logic and distributed queues to avoid single points of failure.</p>
          </div>
          <div className="we-card we-reveal">
            <div className="we-card__icon">02</div>
            <h3 className="we-card__title">Event-Driven Architecture</h3>
            <p className="we-card__desc">Pub/sub event routing ensuring decoupled, resilient, and highly available systems that react to state changes instantly.</p>
          </div>
          <div className="we-card we-reveal">
            <div className="we-card__icon">03</div>
            <h3 className="we-card__title">Long-Running Processes</h3>
            <p className="we-card__desc">Stateful workflows that handle delays, retries, and human-in-the-loop approvals seamlessly without blocking resources.</p>
          </div>
        </div>
      </section>

      {/* ── WHY US (BLUE) ── */}
      <section className="we-section we-why-us we-blue">
        <div className="we-why-us__inner">
          <div className="we-why-us__visual we-reveal">
            <div className="we-why-us__img-wrap">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200" alt="Hardware Infrastructure" className="we-parallax-img" />
            </div>
            <div className="we-badge">
              <span className="we-badge__num">Zero</span>
              <span className="we-badge__text">State Loss<br/>Guarantee</span>
            </div>
          </div>
          <div className="we-why-us__content">
            <h2 className="we-title-huge we-reveal">Cron jobs fail.<br/><em className="we-italic">Workflows recover.</em></h2>
            <p className="we-desc-large we-reveal">
              We don't just schedule scripts. We implement durable execution platforms that guarantee your mission-critical code runs to completion, even if the underlying infrastructure crashes mid-process.
            </p>
          </div>
        </div>
      </section>

      {/* ── USE CASES (DARK) ── */}
      <section className="we-section we-use-cases we-dark">
        <div className="we-section-header we-reveal">
          <h2 className="we-title-huge">Engine <em className="we-italic">Use Cases</em></h2>
          <p className="we-desc-large">Resilient operations across distinct industries.</p>
        </div>
        <div className="we-use-cases__grid">
          <div className="we-use-case we-reveal">
            <img className="we-use-case__img" src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=80&w=800" alt="E-Commerce Fulfillment" />
            <div className="we-use-case__content">
              <h4 className="we-use-case__title">E-Commerce Fulfillment</h4>
              <p className="we-use-case__desc">Orchestrating inventory reservation, payment processing, and shipping dispatch with automated rollbacks.</p>
            </div>
          </div>
          <div className="we-use-case we-reveal">
            <img className="we-use-case__img" src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800" alt="Financial Transactions" />
            <div className="we-use-case__content">
              <h4 className="we-use-case__title">Financial Transactions</h4>
              <p className="we-use-case__desc">Multi-step ledger reconciliations requiring distributed transactions and strict ACID properties.</p>
            </div>
          </div>
          <div className="we-use-case we-reveal">
            <img className="we-use-case__img" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Media Processing" />
            <div className="we-use-case__content">
              <h4 className="we-use-case__title">Media Processing</h4>
              <p className="we-use-case__desc">Encoding, transcribing, and distributing high-volume media assets across asynchronous worker pools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS (LIGHT) ── */}
      <section className="we-section we-process we-light">
        <div className="we-process__inner">
          <div className="we-process__sticky we-reveal">
            <h2 className="we-title-huge">Our <em className="we-italic">Method</em></h2>
            <p className="we-desc-large">A structured approach to resilient operations.</p>
          </div>
          <div className="we-process__list">
            <div className="we-step we-reveal">
              <div className="we-step__num">01</div> 
              <div className="we-step__content">
                <h4>Logic Mapping</h4>
                <p>We translate your complex business requirements into distinct, fault-tolerant workflow steps.</p>
              </div>
            </div>
            <div className="we-step we-reveal">
              <div className="we-step__num">02</div> 
              <div className="we-step__content">
                <h4>State Machine Design</h4>
                <p>Architecting the event schema and compensation logic for when specific tasks fail or timeout.</p>
              </div>
            </div>
            <div className="we-step we-reveal">
              <div className="we-step__num">03</div> 
              <div className="we-step__content">
                <h4>Engine Integration</h4>
                <p>Deploying robust engines like Temporal, Camunda, or AWS Step Functions to manage state and execution.</p>
              </div>
            </div>
            <div className="we-step we-reveal">
              <div className="we-step__num">04</div> 
              <div className="we-step__content">
                <h4>Monitoring & Telemetry</h4>
                <p>Providing full visibility into workflow states, execution times, and automated retry metrics via dashboards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
