import { useState, useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Pricing.css'

const SERVICES = ['Web Development', 'AI Solutions', 'Mobile App', 'Cloud & Infrastructure', 'Process Automation']

const PLANS = {
  'Web Development': [
    {
      name: 'Starter',
      price: 19999,
      desc: 'Perfect for small businesses and personal brands',
      features: ['5-page responsive website', 'Mobile-first design', 'Contact form integration', 'Basic on-page SEO', 'WhatsApp button', 'Google Analytics setup', '1 month post-launch support'],
      cta: 'Get Started',
      ctaLink: '/contact',
    },
    {
      name: 'Professional',
      price: 49999,
      popular: true,
      desc: 'Full-featured website for growing businesses',
      features: ['Up to 15 pages', 'CMS / blog integration', 'Advanced SEO + sitemap', 'Speed optimisation', 'Social media integration', 'Custom animations', 'Google My Business setup', '3 months support'],
      cta: 'Most Popular',
      ctaLink: '/contact',
    },
    {
      name: 'Enterprise',
      price: 149999,
      desc: 'Custom platform built to scale your business',
      features: ['Unlimited pages', 'E-commerce / SaaS ready', 'Custom API integrations', 'Admin dashboard', 'Performance monitoring', 'Security hardening', '12 months support', 'Dedicated account manager'],
      cta: 'Book a Call',
      ctaLink: '/contact',
    },
  ],
  'AI Solutions': [
    {
      name: 'AI Chatbot',
      price: 49999,
      desc: 'Smart chatbot that handles customer queries 24/7',
      features: ['GPT-powered responses', 'Website / WhatsApp integration', 'Custom knowledge base', 'Conversation history', 'Handoff to human agent', 'Analytics dashboard', '1 month support'],
      cta: 'Get Started',
      ctaLink: '/contact',
    },
    {
      name: 'AI Agent System',
      price: 124999,
      popular: true,
      desc: 'Autonomous agent that executes multi-step tasks',
      features: ['Multi-step task automation', 'CRM / database integration', 'Email & calendar handling', 'Document processing', 'Custom workflows', 'Real-time monitoring', '3 months support'],
      cta: 'Most Popular',
      ctaLink: '/contact',
    },
    {
      name: 'Enterprise AI',
      price: 299999,
      desc: 'Full AI transformation for your organisation',
      features: ['Custom LLM fine-tuning', 'Proprietary data pipelines', 'RAG knowledge system', 'Compliance & audit logs', 'Multi-model orchestration', 'On-premise deployment option', '12 months support', 'Dedicated AI engineer'],
      cta: 'Book a Call',
      ctaLink: '/contact',
    },
  ],
  'Mobile App': [
    {
      name: 'MVP App',
      price: 69999,
      desc: 'Validate your idea with a functional prototype',
      features: ['iOS + Android (React Native)', 'Up to 8 screens', 'Basic authentication', 'REST API integration', 'Push notifications', 'App Store submission help', '1 month support'],
      cta: 'Get Started',
      ctaLink: '/contact',
    },
    {
      name: 'Business App',
      price: 149999,
      popular: true,
      desc: 'Production-ready app for real users',
      features: ['iOS + Android', 'Up to 25 screens', 'Social / OTP login', 'Payment gateway', 'Real-time features', 'Offline mode', 'Push & in-app notifications', '3 months support'],
      cta: 'Most Popular',
      ctaLink: '/contact',
    },
    {
      name: 'Enterprise App',
      price: 349999,
      desc: 'Scalable, secure enterprise mobile solution',
      features: ['Custom screens + features', 'Role-based access control', 'Enterprise SSO', 'Biometric authentication', 'End-to-end encryption', 'Analytics & crash reporting', 'CI/CD pipeline', '12 months support'],
      cta: 'Book a Call',
      ctaLink: '/contact',
    },
  ],
  'Cloud & Infrastructure': [
    {
      name: 'Starter Setup',
      price: 24999,
      desc: 'Get your app hosted reliably and securely',
      features: ['AWS / GCP setup', 'Docker containerisation', 'Domain + SSL configuration', 'Auto-scaling basics', 'Daily backups', 'Monitoring alerts', '1 month support'],
      cta: 'Get Started',
      ctaLink: '/contact',
    },
    {
      name: 'Professional Cloud',
      price: 74999,
      popular: true,
      desc: 'Production-grade cloud for growing products',
      features: ['Multi-region deployment', 'Kubernetes orchestration', 'CI/CD pipelines', 'Database clustering', 'CDN configuration', 'Security hardening', 'Cost optimisation', '3 months support'],
      cta: 'Most Popular',
      ctaLink: '/contact',
    },
    {
      name: 'Enterprise Cloud',
      price: 199999,
      desc: 'Zero-downtime infrastructure that scales globally',
      features: ['Custom cloud architecture', 'Multi-cloud strategy', 'Disaster recovery plan', 'SOC2 / compliance setup', 'FinOps cost management', '24/7 on-call support', 'SLA guarantee', 'Dedicated DevOps engineer'],
      cta: 'Book a Call',
      ctaLink: '/contact',
    },
  ],
  'Process Automation': [
    {
      name: 'Basic Automation',
      price: 34999,
      desc: 'Eliminate one major manual process',
      features: ['1 workflow automated', 'Email / sheet integration', 'Error notifications', 'Basic reporting', 'Documentation', '1 month support'],
      cta: 'Get Started',
      ctaLink: '/contact',
    },
    {
      name: 'Advanced Workflows',
      price: 79999,
      popular: true,
      desc: 'Automate entire departments and pipelines',
      features: ['Up to 5 workflows', 'CRM / ERP integration', 'Multi-step approvals', 'Real-time dashboards', 'API connections', 'Exception handling', 'Staff training', '3 months support'],
      cta: 'Most Popular',
      ctaLink: '/contact',
    },
    {
      name: 'Enterprise Automation',
      price: 199999,
      desc: 'End-to-end digital transformation',
      features: ['Unlimited workflows', 'AI-powered decision logic', 'Legacy system integration', 'Compliance audit trail', 'Custom reporting', 'Change management support', '12 months support', 'Dedicated automation engineer'],
      cta: 'Book a Call',
      ctaLink: '/contact',
    },
  ],
}

const FAQS = [
  { q: 'How does the 10% first-project discount work?', a: 'Every new client gets 10% off their first two projects with us — automatically applied. No coupon code needed. Just mention it when you reach out.' },
  { q: 'Are these fixed prices or estimates?', a: 'These are starting prices. Complex projects may vary, but we always provide a fixed-price quote before any work begins. No surprise invoices.' },
  { q: 'What is the payment structure?', a: 'Typically 50% upfront and 50% on delivery. For larger enterprise projects, we offer milestone-based payments.' },
  { q: 'Do you work with startups on limited budgets?', a: 'Yes. Tell us your budget and goals — we\'ll find the right scope. We also offer equity arrangements for select early-stage startups.' },
  { q: 'What happens after the support period ends?', a: 'We offer affordable monthly maintenance and support retainers. Most clients stay on for continued development.' },
  { q: 'Are prices inclusive of all taxes?', a: 'Prices shown are exclusive of GST (18%). GST will be added on the final invoice.' },
]

function fmt(n) {
  return '₹' + n.toLocaleString('en-IN')
}

export default function Pricing() {
  const [activeService, setActiveService] = useState('Web Development')
  const [openFaq, setOpenFaq] = useState(null)
  const pageRef = useRef(null)
  const panelsRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Ambient orb animation
      gsap.to('.pr-ambient__orb--1', {
        x: '10vw',
        y: '10vh',
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
      gsap.to('.pr-ambient__orb--2', {
        x: '-10vw',
        y: '-10vh',
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      // Cinematic Header reveal
      gsap.fromTo('.pr-hero-line', 
        { autoAlpha: 0, y: 60, rotationX: -30 },
        { autoAlpha: 1, y: 0, rotationX: 0, duration: 1.2, ease: 'expo.out', stagger: 0.12, delay: 0.1 }
      )
      gsap.fromTo('.pr-hero-desc', 
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.5 }
      )
      gsap.fromTo('.pr-promo-glass', 
        { autoAlpha: 0, scale: 0.94 },
        { autoAlpha: 1, scale: 1, duration: 0.7, ease: 'back.out(1.5)', delay: 0.7 }
      )
    }, pageRef)
    return () => ctx.revert()
  }, [])

  // Animate panels dynamically on tab change
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.pr-panel');
      panels.forEach((panel) => {
        gsap.fromTo(panel, 
          { opacity: 0, y: 40, filter: 'blur(10px)' },
          { 
            opacity: 1, y: 0, filter: 'blur(0px)', 
            duration: 0.8, 
            ease: 'power3.out',
            scrollTrigger: {
              trigger: panel,
              start: 'top 85%',
            }
          }
        )
      })
    }, panelsRef)
    return () => ctx.revert()
  }, [activeService])

  const handleMouseMove = (e, cardElement) => {
    if (!cardElement) return;
    const rect = cardElement.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardElement.style.setProperty('--mouse-x', `${x}px`)
    cardElement.style.setProperty('--mouse-y', `${y}px`)
  }

  const plans = PLANS[activeService]

  return (
    <div className="pr-page-premium" ref={pageRef}>

      {/* ── AMBIENT BACKGROUND ── */}
      <div className="pr-ambient" aria-hidden="true">
        <div className="pr-ambient__orb pr-ambient__orb--1" />
        <div className="pr-ambient__orb pr-ambient__orb--2" />
        <div className="pr-ambient__noise" />
      </div>

      <div className="pr-container">

      {/* ── HERO ── */}
      <header className="pr-hero">
        <div className="pr-eyebrow">
          <span className="pr-eyebrow-dot" /> Transparent Investment
        </div>
        <h1 className="pr-hero-title" style={{ perspective: '1000px' }}>
          <div className="pr-hero-line">Simple, Clear</div>
          <div className="pr-hero-line"><em className="pr-italic">Pricing.</em></div>
        </h1>
        <p className="pr-hero-desc">
          Fixed prices. No hidden fees. No surprise invoices. Every project starts
          with a free 30-minute discovery call — so you know exactly what you're paying for.
        </p>

        {/* ── PROMO BANNER ── */}
        <div className="pr-promo-glass">
          <span className="pr-promo-badge">Limited</span>
          <span className="pr-promo-text">First 2 projects — 10% OFF</span>
        </div>
      </header>

      {/* ── SERVICE TABS ── */}
      <nav className="pr-tabs" role="tablist">
        {SERVICES.map(s => (
          <button
            key={s}
            className={`pr-tab ${activeService === s ? 'is-active' : ''}`}
            onClick={() => setActiveService(s)}
            role="tab"
          >
            {s}
          </button>
        ))}
      </nav>

      {/* ── ASYMMETRICAL PANELS ── */}
      <div className="pr-panels" ref={panelsRef}>
          {plans.map((plan, i) => {
            const discounted = Math.round(plan.price * 0.9)
            return (
              <div 
                key={plan.name} 
                className={`pr-panel ${plan.popular ? 'pr-panel--popular' : ''} ${i % 2 !== 0 ? 'pr-panel--offset' : ''}`}
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              >
                <div className="pr-panel__glow" aria-hidden="true" />
                
                <div className="pr-panel__content">
                  <div className="pr-panel__left">
                    {plan.popular && <div className="pr-panel__badge">Most Popular</div>}
                    <h3 className="pr-panel__name">{plan.name}</h3>
                    <p className="pr-panel__desc">{plan.desc}</p>
                    
                    <div className="pr-panel__price-wrap">
                      <div className="pr-panel__price-main">
                        <span className="pr-price">{fmt(plan.price)}</span>
                        <span className="pr-unit">/ project</span>
                      </div>
                      <div className="pr-panel__price-discount">
                        <span>With 10% new client offer:</span>
                        <strong className="pr-discount-val">{fmt(discounted)}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="pr-panel__right">
                    <ul className="pr-features">
                      {plan.features.map(f => (
                        <li key={f} className="pr-feature">
                          <span className="pr-check" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    
                    <a href={`${plan.ctaLink}?service=${encodeURIComponent(activeService + ' – ' + plan.name)}`} className="pr-cta">
                      <span className="pr-cta-text">{plan.cta}</span>
                      <span className="pr-cta-arrow">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
      </div>

        {/* ── CUSTOM / ENTERPRISE ── */}
        <div className="pr-custom">
        <div className="pr-custom__bg" />
        <div className="pr-custom__content">
          <h3 className="pr-custom__title">Need something custom?</h3>
          <p className="pr-custom__desc">
            Every great product is unique. If your requirements don't fit a standard package,
            let's talk — we'll scope a custom solution and provide a fixed-price quote within 48 hours.
          </p>
        </div>
        <a href="/contact" className="pr-custom__btn">
          Get a Custom Quote <span className="pr-custom-arrow">↗</span>
        </a>
        </div>

      {/* ── FAQ ── */}
      <div className="pr-faq">
        <h2 className="pr-faq-head">Pricing FAQs</h2>
        <div className="pr-faq-list">
          {FAQS.map((item, i) => (
            <div key={i} className={`pr-faq-item ${openFaq === i ? 'is-open' : ''}`}>
              <button className="pr-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{item.q}</span>
                <span className="pr-faq-icon">{openFaq === i ? '−' : '+'}</span>
              </button>
              <div className="pr-faq-a">
                <div className="pr-faq-a-inner">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      </div>
    </div>
  )
}
