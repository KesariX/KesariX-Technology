import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './CapabilitiesPremium.css'

const SERVICES = [
  {
    num: '01',
    category: 'Neural Architecture',
    type: 'AI Solutions',
    desc: 'Custom LLMs, RAG systems, and production-grade intelligence layers aligned to your business data and workflows.',
    tags: ['RAG Systems', 'Fine-tuned Models', 'Inference Ops'],
    link: '/service/neural-architecture',
  },
  {
    num: '02',
    category: 'Product Engineering',
    type: 'Web Engineering',
    desc: 'High-performance React and Node platforms designed for speed, conversion, and enterprise-level scalability.',
    tags: ['React + TypeScript', 'Scalable APIs', 'Core Web Vitals'],
    link: '/service/product-engineering',
  },
  {
    num: '03',
    category: 'Cloud Backbone',
    type: 'IT Infrastructure',
    desc: 'Managed cloud, security hardening, and dependable DevOps pipelines to keep your systems resilient at scale.',
    tags: ['Cloud Ops', 'Cybersecurity', 'CI/CD Automation'],
    link: '/service/cloud-backbone',
  },
  {
    num: '04',
    category: 'Agentic Systems',
    type: 'Autonomous Agents',
    desc: 'Multi-agent orchestration engines for autonomous execution, decision loops, and reliable handoff to human teams.',
    tags: ['Agent Memory', 'Tool Calling', 'Human-in-the-Loop'],
    link: '/service/agentic-systems',
  },
  {
    num: '05',
    category: 'Workflow Engines',
    type: 'Process Automation',
    desc: 'Operational pipelines that remove repetitive manual work and synchronize your tools into one reliable flow.',
    tags: ['No-code Integrations', 'API Workflows', 'Ops Optimization'],
    link: '/service/workflow-engines',
  },
]

export default function Capabilities() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ambient Background Animation
      gsap.to('.cp-ambient__orb--blue', {
        x: '8vw',
        y: '8vh',
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      gsap.to('.cp-ambient__orb--orange', {
        x: '-8vw',
        y: '-6vh',
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      // Cinematic Header Reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.cp-header',
          start: 'top 80%',
        }
      })

      tl.fromTo('.cp-header__eyebrow',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
      ).fromTo('.cp-header__title .line',
        { opacity: 0, y: 50, rotationX: -30 },
        { opacity: 1, y: 0, rotationX: 0, duration: 1.2, stagger: 0.15, ease: 'expo.out' },
        "-=0.6"
      ).fromTo('.cp-header__desc',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        "-=0.8"
      )

      // Staggered Card Parallax & Reveal
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(card,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            }
          }
        )

        // Parallax depth applied only on desktop
        let mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          const speed = index % 2 !== 0 ? 90 : 40;
          gsap.to(card, {
            y: -speed,
            ease: 'none',
            scrollTrigger: {
              trigger: '.cp-grid',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
            }
          })
        });
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleMouseMove = (e, cardElement) => {
    if (!cardElement) return;
    const rect = cardElement.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardElement.style.setProperty('--mouse-x', `${x}px`)
    cardElement.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <section className="capabilities-premium" id="capabilities" ref={sectionRef}>
      
      {/* Ambient Lighting & Atmosphere */}
      <div className="cp-ambient" aria-hidden="true">
        <div className="cp-ambient__orb cp-ambient__orb--blue" />
        <div className="cp-ambient__orb cp-ambient__orb--orange" />
        <div className="cp-ambient__noise" />
      </div>

      <div className="cp-container">
        {/* Cinematic Header */}
        <div className="cp-header">
          <div className="cp-header__eyebrow">
            <span className="cp-eyebrow-dot" /> Architecture & Delivery
          </div>
          <h2 className="cp-header__title">
            <div className="line" style={{ perspective: '1000px' }}>Capabilities</div>
            <div className="line" style={{ perspective: '1000px' }}>
              <em className="italic-accent">That Deliver.</em>
            </div>
          </h2>
          <p className="cp-header__desc">
            We combine deep technical expertise with strategic product vision to build systems that scale, perform, and drive real business value.
          </p>
        </div>

        {/* Asymmetrical Grid */}
        <div className="cp-grid">
          <div className="cp-grid__line cp-grid__line--v" aria-hidden="true" />
          {SERVICES.map((s, i) => (
            <div
              className={`cp-card ${i % 2 !== 0 ? 'cp-card--offset' : ''}`}
              key={i}
              ref={el => cardsRef.current[i] = el}
              onMouseMove={(e) => handleMouseMove(e, cardsRef.current[i])}
            >
              {/* Mouse-reactive glow layer */}
              <div className="cp-card__glow" aria-hidden="true" />
              
              <div className="cp-card__content">
                <div className="cp-card__header">
                  <span className="cp-card__num">{s.num}</span>
                  <h3 className="cp-card__title">{s.category}</h3>
                  <span className="cp-card__type">{s.type}</span>
                </div>
                
                <p className="cp-card__desc">{s.desc}</p>
                
                <div className="cp-card__tags">
                  {s.tags.map(tag => (
                    <span className="cp-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <a href={s.link} className="cp-card__link" aria-label={`Explore ${s.category}`}>
                <span className="cp-link-text">Explore Blueprint</span>
                <span className="cp-link-arrow">↗</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
