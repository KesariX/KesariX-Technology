import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './AgenticSystems.css'

gsap.registerPlugin(ScrollTrigger)

export default function AgenticSystems() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.fromTo('.as-hero-title', 
        { autoAlpha: 0, y: 60 },
        { autoAlpha: 1, y: 0, duration: 1.2, ease: 'expo.out', delay: 0.1 }
      )
      gsap.fromTo('.as-hero-desc, .as-hero-ctas', 
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 1, ease: 'expo.out', delay: 0.4, stagger: 0.15 }
      )

      // Independent element reveals
      const revealElements = gsap.utils.toArray('.as-reveal')
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
      gsap.fromTo('.as-parallax-img', 
        { scale: 1.2, y: '-15%' },
        { scale: 1, y: '15%', ease: 'none', scrollTrigger: { trigger: '.as-why-us', start: 'top bottom', end: 'bottom top', scrub: true } }
      )

      // Desktop Sticky Process Pinning
      let mm = gsap.matchMedia()
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: '.as-process__inner',
          start: 'top 15%',
          end: 'bottom 85%',
          pin: '.as-process__sticky',
        })
      })

      setTimeout(() => ScrollTrigger.refresh(), 500)
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="as-page" ref={sectionRef}>
      
      {/* ── HERO (DARK) ── */}
      <section className="as-section as-hero as-dark">
        <div className="as-hero__glow"></div>
        <div className="as-hero__bg-grid"></div>
        <div className="as-hero__inner">
          <div className="as-hero__breadcrumb">
            <a href="/">Home</a>
            <span className="as-hero__breadcrumb-sep">/</span>
            <a href="/#capabilities">Services</a>
            <span className="as-hero__breadcrumb-sep">/</span>
            <span>Agentic Systems</span>
          </div>
          <span className="as-eyebrow">
            <span className="as-eyebrow-dot"></span>
            Agentic Systems
          </span>
          <h1 className="as-hero-title">
            Autonomous <br /> <em className="as-italic">Workflows.</em>
          </h1>
          <p className="as-hero-desc">
            Deploy intelligent agents that perceive, reason, and act within your ecosystem, automating complex multi-step processes autonomously.
          </p>
          <div className="as-hero-ctas">
            <a href="/#contact" className="as-cta as-cta--primary">Build Your Agent ↗</a>
            <a href="/#contact" className="as-cta as-cta--secondary">Discover Use Cases ↗</a>
          </div>
        </div>
      </section>

      {/* ── CARDS (LIGHT) ── */}
      <section className="as-section as-light">
        <div className="as-cards__grid">
          <div className="as-card as-reveal">
            <div className="as-card__icon">01</div>
            <h3 className="as-card__title">Autonomous Agents</h3>
            <p className="as-card__desc">Intelligent bots capable of navigating complex tasks, executing software operations, and communicating naturally with humans.</p>
          </div>
          <div className="as-card as-reveal">
            <div className="as-card__icon">02</div>
            <h3 className="as-card__title">Reasoning Engines</h3>
            <p className="as-card__desc">Beyond simple if/else logic, our systems utilize chain-of-thought processing and self-correction to handle ambiguous and dynamic scenarios.</p>
          </div>
          <div className="as-card as-reveal">
            <div className="as-card__icon">03</div>
            <h3 className="as-card__title">Tool Integration</h3>
            <p className="as-card__desc">Agents securely equipped with internal API access, enabling them to query databases, send emails, and control software like a human operator.</p>
          </div>
        </div>
      </section>

      {/* ── WHY US (BLUE) ── */}
      <section className="as-section as-why-us as-blue">
        <div className="as-why-us__inner">
          <div className="as-why-us__visual as-reveal">
            <div className="as-why-us__img-wrap">
              <img src="https://images.unsplash.com/photo-1678324483786-9dc5512217f2?auto=format&fit=crop&q=80&w=1200" alt="Agentic Automation" className="as-parallax-img" />
            </div>
            <div className="as-badge">
              <span className="as-badge__num">10x</span>
              <span className="as-badge__text">Process<br/>Acceleration</span>
            </div>
          </div>
          <div className="as-why-us__content">
            <h2 className="as-title-huge as-reveal">Beyond chatbots.<br/><em className="as-italic">Real action.</em></h2>
            <p className="as-desc-large as-reveal">
              Most AI simply talks. We build agentic systems that <em>do</em>. By combining LLM reasoning with secure execution environments, we create reliable digital workers that perform meaningful tasks round-the-clock without fatigue.
            </p>
          </div>
        </div>
      </section>

      {/* ── USE CASES (DARK) ── */}
      <section className="as-section as-use-cases as-dark">
        <div className="as-section-header as-reveal">
          <h2 className="as-title-huge">Agents <em className="as-italic">At Work</em></h2>
          <p className="as-desc-large">Transforming distinct industries through autonomy.</p>
        </div>
        <div className="as-use-cases__grid">
          <div className="as-use-case as-reveal">
            <img className="as-use-case__img" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800" alt="Customer Support Agent" />
            <div className="as-use-case__content">
              <h4 className="as-use-case__title">Customer Support</h4>
              <p className="as-use-case__desc">L1/L2 autonomous resolution capable of processing refunds, updating billing, and referencing CRM data.</p>
            </div>
          </div>
          <div className="as-use-case as-reveal">
            <img className="as-use-case__img" src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800" alt="Data Research Agent" />
            <div className="as-use-case__content">
              <h4 className="as-use-case__title">Data Research</h4>
              <p className="as-use-case__desc">Agents that crawl the web, synthesize reports, monitor competitors, and update internal databases automatically.</p>
            </div>
          </div>
          <div className="as-use-case as-reveal">
            <img className="as-use-case__img" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Financial Audit Agent" />
            <div className="as-use-case__content">
              <h4 className="as-use-case__title">Financial Auditing</h4>
              <p className="as-use-case__desc">Reviewing hundreds of documents for compliance anomalies, flagging irregularities to human supervisors instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS (LIGHT) ── */}
      <section className="as-section as-process as-light">
        <div className="as-process__inner">
          <div className="as-process__sticky as-reveal">
            <h2 className="as-title-huge">How We <em className="as-italic">Build</em></h2>
            <p className="as-desc-large">A strategic approach to autonomous integration.</p>
          </div>
          <div className="as-process__list">
            <div className="as-step as-reveal">
              <div className="as-step__num">01</div> 
              <div className="as-step__content">
                <h4>Workflow Analysis</h4>
                <p>Identifying high-value, repetitive workflows that can be successfully abstracted and handed to an agent.</p>
              </div>
            </div>
            <div className="as-step as-reveal">
              <div className="as-step__num">02</div> 
              <div className="as-step__content">
                <h4>Tool Construction</h4>
                <p>Developing secure, isolated API tools and functions that the agent can invoke to interact with your business software.</p>
              </div>
            </div>
            <div className="as-step as-reveal">
              <div className="as-step__num">03</div> 
              <div className="as-step__content">
                <h4>Reasoning & Guardrails</h4>
                <p>Designing the prompt chains and fail-safes so the agent handles edge-cases safely without hallucinating destructive actions.</p>
              </div>
            </div>
            <div className="as-step as-reveal">
              <div className="as-step__num">04</div> 
              <div className="as-step__content">
                <h4>Testing & Deployment</h4>
                <p>Running the agent in a simulated sandbox environment before promoting it to a live production workflow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
