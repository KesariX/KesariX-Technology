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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pr-hero-line', { autoAlpha: 0, y: 60 },
        { autoAlpha: 1, y: 0, duration: 1.2, ease: 'expo.out', stagger: 0.12, delay: 0.1 })
      gsap.fromTo('.pr-hero-desc', { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.9, ease: 'expo.out', delay: 0.4 })
      gsap.fromTo('.pr-promo', { autoAlpha: 0, scale: 0.94 },
        { autoAlpha: 1, scale: 1, duration: 0.7, ease: 'back.out(1.5)', delay: 0.6,
          scrollTrigger: { trigger: '.pr-promo', start: 'top 88%' } })
      gsap.fromTo('.pr-card', { autoAlpha: 0, y: 48 },
        { autoAlpha: 1, y: 0, duration: 0.85, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: '.pr-cards', start: 'top 80%' } })
    }, pageRef)
    return () => ctx.revert()
  }, [activeService])

  const plans = PLANS[activeService]

  return (
    <div className="pr-page" ref={pageRef}>

      {/* ── HERO ── */}
      <section className="pr-hero">
        <div className="pr-hero__glow" aria-hidden="true" />
        <div className="pr-hero__grid" aria-hidden="true" />
        <div className="pr-hero__inner">
          <nav className="pr-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Pricing</span>
          </nav>
          <span className="pr-eyebrow">
            <span className="pr-eyebrow-dot" />
            Transparent Pricing
          </span>
          <h1 className="pr-hero-title">
            <span className="pr-hero-line">Simple, Clear</span>
            <span className="pr-hero-line"><em className="pr-italic">Pricing.</em></span>
          </h1>
          <p className="pr-hero-desc">
            Fixed prices. No hidden fees. No surprise invoices. Every project starts
            with a free 30-minute discovery call — so you know exactly what you're paying for.
          </p>
        </div>
      </section>

      {/* ── PROMO BANNER ── */}
      <section className="pr-promo-wrap">
        <div className="pr-promo">
          <span className="pr-promo__badge">Limited Offer</span>
          <p className="pr-promo__text">
            <strong>First 2 projects — 10% OFF</strong> &nbsp;·&nbsp; Every new client gets an automatic 10% discount on their first two projects.
            <a href="/contact" className="pr-promo__link">Claim your discount ↗</a>
          </p>
        </div>
      </section>

      {/* ── SERVICE TABS ── */}
      <section className="pr-body">
        <div className="pr-tabs" role="tablist" aria-label="Service pricing categories">
          {SERVICES.map(s => (
            <button
              key={s}
              className={`pr-tab${activeService === s ? ' pr-tab--active' : ''}`}
              onClick={() => setActiveService(s)}
              role="tab"
              aria-selected={activeService === s}
            >
              {s}
            </button>
          ))}
        </div>

        {/* ── CARDS ── */}
        <div className="pr-cards">
          {plans.map((plan) => {
            const discounted = Math.round(plan.price * 0.9)
            return (
              <div key={plan.name} className={`pr-card${plan.popular ? ' pr-card--popular' : ''}`}>
                {plan.popular && <div className="pr-card__badge">Most Popular</div>}
                <div className="pr-card__head">
                  <h3 className="pr-card__name">{plan.name}</h3>
                  <p className="pr-card__desc">{plan.desc}</p>
                </div>
                <div className="pr-card__pricing">
                  <div className="pr-card__price-row">
                    <span className="pr-card__price">{fmt(plan.price)}</span>
                    <span className="pr-card__unit">one-time</span>
                  </div>
                  <div className="pr-card__discount">
                    <span className="pr-card__discount-label">With 10% new client offer:</span>
                    <span className="pr-card__discount-price">{fmt(discounted)}</span>
                  </div>
                </div>
                <ul className="pr-card__features">
                  {plan.features.map(f => (
                    <li key={f} className="pr-card__feature">
                      <span className="pr-card__check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${plan.ctaLink}?service=${encodeURIComponent(activeService + ' – ' + plan.name)}`}
                  className={`pr-card__cta${plan.popular ? ' pr-card__cta--primary' : ''}`}
                >
                  {plan.cta === 'Most Popular' ? 'Get Started' : plan.cta} ↗
                </a>
              </div>
            )
          })}
        </div>

        {/* ── CUSTOM / ENTERPRISE ── */}
        <div className="pr-custom">
          <div className="pr-custom__left">
            <h3 className="pr-custom__title">Need something custom?</h3>
            <p className="pr-custom__desc">
              Every great product is unique. If your requirements don't fit a standard package,
              let's talk — we'll scope a custom solution and provide a fixed-price quote within 48 hours.
            </p>
          </div>
          <a href="/contact" className="pr-custom__cta">
            <span>Get a Custom Quote</span>
            <span className="pr-custom__arrow">↗</span>
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="pr-faq-section">
        <div className="pr-faq-inner">
          <h2 className="pr-faq-title">Pricing FAQs</h2>
          <div className="pr-faq-list">
            {FAQS.map((item, i) => (
              <div key={i} className={`pr-faq-item${openFaq === i ? ' pr-faq-item--open' : ''}`}>
                <button className="pr-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{item.q}</span>
                  <span className="pr-faq-icon">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <p className="pr-faq-a">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
