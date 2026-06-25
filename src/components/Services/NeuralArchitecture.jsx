import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SEO from '../SEO/SEO'
import './NeuralArchitecture.css'

export default function NeuralArchitecture() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.fromTo('.na-title-line', 
        { autoAlpha: 0, y: 100, rotateX: -40, scale: 0.95 },
        { autoAlpha: 1, y: 0, rotateX: 0, scale: 1, duration: 1.4, ease: 'expo.out', delay: 0.1, stagger: 0.15 }
      )
      gsap.fromTo('.na-hero-desc, .na-hero-ctas', 
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 1, ease: 'expo.out', delay: 0.4, stagger: 0.15 }
      )

      // Independent element reveals (Fully fixes "data not shown" issue)
      const revealElements = gsap.utils.toArray('.na-reveal')
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
              toggleActions: 'play none none none' // Ensures it stays visible once revealed
            } 
          }
        )
      })

      // Image Parallax
      gsap.fromTo('.na-parallax-img', 
        { scale: 1.2, y: '-15%' },
        { scale: 1, y: '15%', ease: 'none', scrollTrigger: { trigger: '.na-why-us', start: 'top bottom', end: 'bottom top', scrub: true } }
      )

      // Desktop Sticky Process Pinning
      let mm = gsap.matchMedia()
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: '.na-process__inner',
          start: 'top 15%',
          end: 'bottom 85%',
          pin: '.na-process__sticky',
        })
      })

      // Refresh triggers to ensure layout shifts don't break animations
      setTimeout(() => ScrollTrigger.refresh(), 500)

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="na-page" ref={sectionRef}>
      <SEO 
        title="AI Development & Neural Architecture"
        description="We engineer Custom LLMs, RAG architectures, and scalable AI solutions. Turn proprietary data into enterprise-grade intelligence."
        keywords="AI Development Company, AI Chatbots, AI Agents, RAG Systems, LLM Integration, OpenAI Integration, Claude Integration, Gemini Integration"
        canonicalUrl="/service/neural-architecture"
        isServicePage={true}
      />
      
      {/* ── HERO (DARK) ── */}
      <section className="na-section na-hero na-dark">
        <div className="na-hero__glow"></div>
        <div className="na-hero__bg-grid"></div>
        <div className="na-hero__inner">
          <div className="na-hero__breadcrumb">
            <a href="/">Home</a>
            <span className="na-hero__breadcrumb-sep">/</span>
            <a href="/#capabilities">Services</a>
            <span className="na-hero__breadcrumb-sep">/</span>
            <span>Neural Architecture</span>
          </div>
          <span className="na-eyebrow">
            <span className="na-eyebrow-dot"></span>
            Neural Architecture
          </span>
          <h1 className="na-hero-title">
            <span className="na-title-line na-title-line--outline">Enterprise</span>
            <span className="na-title-line na-title-line--accent">
              <em className="na-italic">Intelligence.</em>
            </span>
          </h1>
          <p className="na-hero-desc">
            We engineer Custom LLMs and RAG architectures that turn your proprietary data into scalable, production-grade intelligence.
          </p>
          <div className="na-hero-ctas">
            <a href="/#contact" className="na-cta na-cta--primary">Deploy Your Model ↗</a>
            <a href="/#contact" className="na-cta na-cta--secondary">Audit Architecture ↗</a>
          </div>
        </div>
      </section>

      {/* ── CARDS (LIGHT) ── */}
      <section className="na-section na-light">
        <div className="na-cards__grid">
          <div className="na-card na-reveal">
            <div className="na-card__icon">01</div>
            <h3 className="na-card__title">Custom LLM Development</h3>
            <p className="na-card__desc">Train and fine-tune foundation models on your proprietary data. Achieve domain-specific accuracy without compromising speed or data privacy.</p>
          </div>
          <div className="na-card na-reveal">
            <div className="na-card__icon">02</div>
            <h3 className="na-card__title">RAG Systems</h3>
            <p className="na-card__desc">Ground your AI in reality. We build Retrieval-Augmented Generation pipelines that eliminate hallucinations and provide real-time, verifiable answers.</p>
          </div>
          <div className="na-card na-reveal">
            <div className="na-card__icon">03</div>
            <h3 className="na-card__title">Production-Grade Integration</h3>
            <p className="na-card__desc">Move beyond Jupyter notebooks. We engineer resilient intelligence layers that seamlessly integrate into your existing enterprise workflows and cloud backbones.</p>
          </div>
        </div>
      </section>

      {/* ── WHY US (BLUE) ── */}
      <section className="na-section na-why-us na-blue">
        <div className="na-why-us__inner">
          <div className="na-why-us__visual na-reveal">
            <div className="na-why-us__img-wrap">
              <img loading="lazy" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200" alt="Production AI Architecture" className="na-parallax-img" />
            </div>
            <div className="na-badge">
              <span className="na-badge__num">99.9%</span>
              <span className="na-badge__text">Inference<br/>Uptime</span>
            </div>
          </div>
          <div className="na-why-us__content">
            <h2 className="na-title-huge na-reveal">Prototypes are easy.<br/><em className="na-italic">Production is hard.</em></h2>
            <p className="na-desc-large na-reveal">
              We don't just build impressive demos. We engineer resilient, secure, and scalable AI architectures designed to handle enterprise workloads, stringent security compliances, and real-time inference demands.
            </p>
          </div>
        </div>
      </section>

      {/* ── USE CASES (DARK) ── */}
      <section className="na-section na-use-cases na-dark">
        <div className="na-section-header na-reveal">
          <h2 className="na-title-huge">Applied <em className="na-italic">Intelligence</em></h2>
          <p className="na-desc-large">Proven applications across mission-critical industries.</p>
        </div>
        <div className="na-use-cases__grid">
          <div className="na-use-case na-reveal">
            <img loading="lazy" className="na-use-case__img" src="https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0c?auto=format&fit=crop&q=80&w=800" alt="Logistics AI" />
            <div className="na-use-case__content">
              <h4 className="na-use-case__title">Logistics</h4>
              <p className="na-use-case__desc">Predictive routing, demand forecasting, and automated supply chain anomaly resolution.</p>
            </div>
          </div>
          <div className="na-use-case na-reveal">
            <img loading="lazy" className="na-use-case__img" src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800" alt="Fintech AI" />
            <div className="na-use-case__content">
              <h4 className="na-use-case__title">Fintech</h4>
              <p className="na-use-case__desc">Real-time risk analysis, transaction fraud detection, and algorithmic compliance reporting.</p>
            </div>
          </div>
          <div className="na-use-case na-reveal">
            <img loading="lazy" className="na-use-case__img" src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" alt="SaaS AI" />
            <div className="na-use-case__content">
              <h4 className="na-use-case__title">SaaS Platforms</h4>
              <p className="na-use-case__desc">Intelligent workflow automation and context-aware copilot integrations built securely into your app.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS (LIGHT) ── */}
      <section className="na-section na-process na-light">
        <div className="na-process__inner">
          <div className="na-process__sticky na-reveal">
            <h2 className="na-title-huge">How We <em className="na-italic">Build</em></h2>
            <p className="na-desc-large">A rigorous, four-phase engineering workflow mapped for scale.</p>
          </div>
          <div className="na-process__list">
            <div className="na-step na-reveal">
              <div className="na-step__num">01</div> 
              <div className="na-step__content">
                <h4>Data Audit & Strategy</h4>
                <p>We assess your data readiness, identify silos, and define a clear ROI-driven AI roadmap.</p>
              </div>
            </div>
            <div className="na-step na-reveal">
              <div className="na-step__num">02</div> 
              <div className="na-step__content">
                <h4>Architecture Design</h4>
                <p>Constructing secure, scalable infrastructure customized for your specific inference and latency requirements.</p>
              </div>
            </div>
            <div className="na-step na-reveal">
              <div className="na-step__num">03</div> 
              <div className="na-step__content">
                <h4>Training & Orchestration</h4>
                <p>Fine-tuning models, embedding RAG pipelines, and establishing guardrails for accuracy and tone.</p>
              </div>
            </div>
            <div className="na-step na-reveal">
              <div className="na-step__num">04</div> 
              <div className="na-step__content">
                <h4>Deployment & MLOps</h4>
                <p>Seamless rollout to production with continuous monitoring, automated retraining loops, and zero-downtime scaling.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
