// ─────────────────────────────────────────────────────────────────────────────
// KesariX Technology — Pricing Page (modified)
//
// CHANGES FROM ORIGINAL:
//  1. Added `market` state ('india' | 'global') + priceVis state for fade
//  2. Added `usd` field to every plan object (INR prices unchanged; Web Starter
//     bumped ₹19,999 → ₹29,999 as recommended to match premium positioning)
//  3. Added <MarketToggle> component between promo banner and service tabs
//  4. fmt() now currency-aware; discount row updates accordingly
//  5. Updated FAQ: added India/Global pricing rationale Q; updated tax note
//  6. Added new CSS classes for toggle — paste into your Pricing.css (bottom)
//
// NOTE: GSAP / ScrollTrigger imports and useLayoutEffect blocks are UNCHANGED.
//       This file is a drop-in replacement for your existing Pricing.jsx.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Pricing.css'
import SEO from '../SEO/SEO'

gsap.registerPlugin(ScrollTrigger)

// ── CONSTANTS ─────────────────────────────────────────────────────────────────

const SERVICES = [
  'Web Development',
  'AI Solutions',
  'Mobile App',
  'Process Automation',
]

// Each plan now has `inr` (was `price`) and `usd` fields.
// KesariX Technology — Revised Pricing (v2)
// ~15-20% reduction on entry/mid tiers; Enterprise tiers lightly touched.
// Replace the PLANS constant in your Pricing.jsx with this.

const PLANS = {
  'Web Development': [
    {
      name: 'Starter',
      inr: 22499,   // was 29,999
      usd: 449,     // was 599
      desc: 'Perfect for small businesses and personal brands',
      features: [
        '5-page responsive website',
        'Mobile-first design',
        'Contact form integration',
        'Basic on-page SEO',
        'WhatsApp button',
        'Google Analytics setup',
        '1 month post-launch support',
      ],
      cta: 'Get Started',
      ctaLink: '/contact',
    },
    {
      name: 'Professional',
      inr: 40499,   // was 49,999
      usd: 1079,    // was 1,499
      popular: true,
      desc: 'Full-featured website for growing businesses',
      features: [
        'Up to 15 pages',
        'CMS / blog integration',
        'Advanced SEO + sitemap',
        'Speed optimisation',
        'Social media integration',
        'Custom animations',
        'Google My Business setup',
        '3 months support',
      ],
      cta: 'Most Popular',
      ctaLink: '/contact',
    },
    {
      name: 'Enterprise',
      inr: 112499,  // was 149,999
      usd: 3149,    // was 3,999
      desc: 'Custom platform built to scale your business',
      features: [
        'Unlimited pages',
        'E-commerce / SaaS ready',
        'Custom API integrations',
        'Admin dashboard',
        'Performance monitoring',
        'Security hardening',
        '12 months support',
        'Dedicated account manager',
      ],
      cta: 'Book a Call',
      ctaLink: '/contact',
    },
  ],

  'AI Solutions': [
    {
      name: 'AI Chatbot',
      inr: 35999,   // was 49,999
      usd: 899,     // was 1,499
      desc: 'Smart chatbot that handles customer queries 24/7',
      features: [
        'GPT-powered responses',
        'Website / WhatsApp integration',
        'Custom knowledge base',
        'Conversation history',
        'Handoff to human agent',
        'Analytics dashboard',
        '1 month support',
      ],
      cta: 'Get Started',
      ctaLink: '/contact',
    },
    {
      name: 'AI Agent System',
      inr: 89999,   // was 124,999
      usd: 2519,    // was 3,499
      popular: true,
      desc: 'Autonomous agent that executes multi-step tasks',
      features: [
        'Multi-step task automation',
        'CRM / database integration',
        'Email & calendar handling',
        'Document processing',
        'Custom workflows',
        'Real-time monitoring',
        '3 months support',
      ],
      cta: 'Most Popular',
      ctaLink: '/contact',
    },
    {
      name: 'Enterprise AI',
      inr: 224999,  // was 299,999
      usd: 5849,    // was 7,999
      desc: 'Full AI transformation for your organisation',
      features: [
        'Custom LLM fine-tuning',
        'Proprietary data pipelines',
        'RAG knowledge system',
        'Compliance & audit logs',
        'Multi-model orchestration',
        'On-premise deployment option',
        '12 months support',
        'Dedicated AI engineer',
      ],
      cta: 'Book a Call',
      ctaLink: '/contact',
    },
  ],

  'Mobile App': [
    {
      name: 'MVP App',
      inr: 53999,   // was 69,999
      usd: 1529,    // was 1,999
      desc: 'Validate your idea with a functional prototype',
      features: [
        'iOS + Android (React Native)',
        'Up to 8 screens',
        'Basic authentication',
        'REST API integration',
        'Push notifications',
        'App Store submission help',
        '1 month support',
      ],
      cta: 'Get Started',
      ctaLink: '/contact',
    },
    {
      name: 'Business App',
      inr: 112499,  // was 149,999
      usd: 3329,    // was 4,499
      popular: true,
      desc: 'Production-ready app for real users',
      features: [
        'iOS + Android',
        'Up to 25 screens',
        'Social / OTP login',
        'Payment gateway',
        'Real-time features',
        'Offline mode',
        'Push & in-app notifications',
        '3 months support',
      ],
      cta: 'Most Popular',
      ctaLink: '/contact',
    },
    {
      name: 'Enterprise App',
      inr: 269999,  // was 349,999
      usd: 7649,    // was 9,999
      desc: 'Scalable, secure enterprise mobile solution',
      features: [
        'Custom screens + features',
        'Role-based access control',
        'Enterprise SSO',
        'Biometric authentication',
        'End-to-end encryption',
        'Analytics & crash reporting',
        'CI/CD pipeline',
        '12 months support',
      ],
      cta: 'Book a Call',
      ctaLink: '/contact',
    },
  ],

  'Process Automation': [
    {
      name: 'Basic Automation',
      inr: 22499,   // was 34,999
      usd: 629,     // was 999
      desc: 'Eliminate one major manual process',
      features: [
        '1 workflow automated',
        'Email / sheet integration',
        'Error notifications',
        'Basic reporting',
        'Documentation',
        '1 month support',
      ],
      cta: 'Get Started',
      ctaLink: '/contact',
    },
    {
      name: 'Advanced Workflows',
      inr: 58499,   // was 79,999
      usd: 1619,    // was 2,299
      popular: true,
      desc: 'Automate entire departments and pipelines',
      features: [
        'Up to 5 workflows',
        'CRM / ERP integration',
        'Multi-step approvals',
        'Real-time dashboards',
        'API connections',
        'Exception handling',
        'Staff training',
        '3 months support',
      ],
      cta: 'Most Popular',
      ctaLink: '/contact',
    },
    {
      name: 'Enterprise Automation',
      inr: 148499,  // was 199,999
      usd: 4229,    // was 5,999
      desc: 'End-to-end digital transformation',
      features: [
        'Unlimited workflows',
        'AI-powered decision logic',
        'Legacy system integration',
        'Compliance audit trail',
        'Custom reporting',
        'Change management support',
        '12 months support',
        'Dedicated automation engineer',
      ],
      cta: 'Book a Call',
      ctaLink: '/contact',
    },
  ],
}
const FAQS = [
  {
    q: 'Why are India and Global prices different?',
    a: "Our India pricing is calibrated to the local market — so Indian businesses get world-class engineering at fair rates. Global (USD) pricing reflects international delivery benchmarks and is competitive against Western agency rates. Same team, same quality, same commitment. Just two different market realities.",
  },
  {
    q: 'How does the 10% first-project discount work?',
    a: 'Every new client gets 10% off their first two projects with us — automatically applied. No coupon code needed. Just mention it when you reach out.',
  },
  {
    q: 'Are these fixed prices or estimates?',
    a: "These are starting prices. Complex projects may vary, but we always provide a fixed-price quote before any work begins. No surprise invoices.",
  },
  {
    q: 'What is the payment structure?',
    a: 'Typically 50% upfront and 50% on delivery. For larger enterprise projects, we offer milestone-based payments.',
  },
  {
    q: 'Do you work with startups on limited budgets?',
    a: "Yes. Tell us your budget and goals — we'll find the right scope. We also offer equity arrangements for select early-stage startups.",
  },
  {
    q: 'Are prices inclusive of taxes?',
    a: 'India prices are exclusive of GST (18%), which will be added on the final invoice. Global (USD) prices are exclusive of applicable taxes in your region.',
  },
]

// ── FORMATTERS ────────────────────────────────────────────────────────────────

function fmtINR(n) {
  return '₹' + n.toLocaleString('en-IN')
}

function fmtUSD(n) {
  return '$' + n.toLocaleString('en-US')
}

// ── MARKET TOGGLE COMPONENT ───────────────────────────────────────────────────
// Sliding pill toggle between India ₹ and Global $
// Reads position of active button to slide the pill underneath.

function MarketToggle({ market, onSwitch }) {
  const indiaRef = useRef(null)
  const globalRef = useRef(null)
  const pillRef  = useRef(null)

  useEffect(() => {
    const btn  = market === 'india' ? indiaRef.current : globalRef.current
    const pill = pillRef.current
    if (!btn || !pill) return
    const wrap    = pill.parentElement
    const wRect   = wrap.getBoundingClientRect()
    const bRect   = btn.getBoundingClientRect()
    pill.style.left  = `${bRect.left - wRect.left}px`
    pill.style.width = `${bRect.width}px`
  }, [market])

  return (
    <div className="pr-market-wrap">
      <div className="pr-market-toggle">
        {/* sliding background pill */}
        <div className="pr-market-pill" ref={pillRef} aria-hidden="true" />

        <button
          ref={indiaRef}
          className={`pr-market-btn ${market === 'india' ? 'is-active' : ''}`}
          onClick={() => onSwitch('india')}
        >
          <span className="pr-market-flag">🇮🇳</span>
          India&nbsp;<span className="pr-market-currency">₹</span>
        </button>

        <button
          ref={globalRef}
          className={`pr-market-btn ${market === 'global' ? 'is-active' : ''}`}
          onClick={() => onSwitch('global')}
        >
          <span className="pr-market-flag">🌍</span>
          Global&nbsp;<span className="pr-market-currency">$</span>
        </button>
      </div>

      <p className="pr-market-note">
        {market === 'india'
          ? 'Prices in Indian Rupees · exclusive of GST (18%)'
          : 'Prices in US Dollars · exclusive of local taxes'}
      </p>
    </div>
  )
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────

export default function Pricing() {
  const [market, setMarket]             = useState('india') // 'india' | 'global'
  const [priceVis, setPriceVis]         = useState(true)    // for fade animation
  const [activeService, setActiveService] = useState('Web Development')
  const [openFaq, setOpenFaq]           = useState(null)

  const pageRef   = useRef(null)
  const panelsRef = useRef(null)

  // ── switch market with price fade ──
  const handleMarketSwitch = (m) => {
    if (m === market) return
    setPriceVis(false)
    setTimeout(() => {
      setMarket(m)
      setPriceVis(true)
    }, 180)
  }

  // ── currency helpers ──
  const isGlobal   = market === 'global'
  const getPrice   = (plan) => isGlobal ? fmtUSD(plan.usd) : fmtINR(plan.inr)
  const getDisc    = (plan) =>
    isGlobal
      ? fmtUSD(Math.round(plan.usd * 0.9))
      : fmtINR(Math.round(plan.inr * 0.9))

  // ── GSAP: hero reveal (UNCHANGED) ──
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.pr-ambient__orb--1', {
        x: '10vw', y: '10vh', duration: 15, repeat: -1, yoyo: true, ease: 'sine.inOut',
      })
      gsap.to('.pr-ambient__orb--2', {
        x: '-10vw', y: '-10vh', duration: 18, repeat: -1, yoyo: true, ease: 'sine.inOut',
      })
      gsap.fromTo('.pr-hero-line',
        { autoAlpha: 0, y: 60, rotationX: -30 },
        { autoAlpha: 1, y: 0, rotationX: 0, duration: 1.2, ease: 'expo.out', stagger: 0.12, delay: 0.1 },
      )
      gsap.fromTo('.pr-hero-desc',
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.5 },
      )
      gsap.fromTo('.pr-promo-glass',
        { autoAlpha: 0, scale: 0.94 },
        { autoAlpha: 1, scale: 1, duration: 0.7, ease: 'back.out(1.5)', delay: 0.7 },
      )
      // animate the new market toggle in
      gsap.fromTo('.pr-market-wrap',
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.9 },
      )
    }, pageRef)
    return () => ctx.revert()
  }, [])

  // ── GSAP: panel scroll reveals (UNCHANGED) ──
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.pr-panel')
      panels.forEach((panel) => {
        gsap.fromTo(panel,
          { opacity: 0, y: 40, filter: 'blur(10px)' },
          {
            opacity: 1, y: 0, filter: 'blur(0px)',
            duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: panel, start: 'top 85%' },
          },
        )
      })
    }, panelsRef)
    return () => ctx.revert()
  }, [activeService])

  // ── mouse glow on cards (UNCHANGED) ──
  const handleMouseMove = (e, cardElement) => {
    if (!cardElement) return
    const rect = cardElement.getBoundingClientRect()
    cardElement.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    cardElement.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }

  const plans = PLANS[activeService]

  return (
    <div className="pr-page-premium" ref={pageRef}>
      <SEO 
        title="Pricing | Web Development & AI Solutions Cost"
        description="Transparent pricing for enterprise software development, AI automation, and web platforms in India, USA, and globally."
        keywords="Web Development Cost, Software Engineering Pricing, Hire Developers Cost, Custom Software Pricing"
        canonicalUrl="/pricing"
      />

      {/* ── PROMO BANNER ── */}
      <div className="pr-ambient" aria-hidden="true">
        <div className="pr-ambient__orb pr-ambient__orb--1" />
        <div className="pr-ambient__orb pr-ambient__orb--2" />
        <div className="pr-ambient__noise" />
      </div>

      <div className="pr-container">

        {/* ── HERO (UNCHANGED) ── */}
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

          {/* ── PROMO BANNER (UNCHANGED) ── */}
          <div className="pr-promo-glass">
            <span className="pr-promo-badge">Limited</span>
            <span className="pr-promo-text">First 2 projects — 10% OFF</span>
          </div>
        </header>

        {/* ── MARKET TOGGLE (NEW) ── */}
        <MarketToggle market={market} onSwitch={handleMarketSwitch} />

        {/* ── SERVICE TABS (UNCHANGED) ── */}
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

        {/* ── PANELS ── */}
        <div className="pr-panels" ref={panelsRef}>
          {plans.map((plan, i) => (
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

                  {/* prices fade when market switches */}
                  <div
                    className="pr-panel__price-wrap"
                    style={{
                      opacity: priceVis ? 1 : 0,
                      transform: priceVis ? 'translateY(0)' : 'translateY(6px)',
                      transition: 'opacity 0.18s ease, transform 0.18s ease',
                    }}
                  >
                    <div className="pr-panel__price-main">
                      <span className="pr-price">{getPrice(plan)}</span>
                      <span className="pr-unit">/ project</span>
                    </div>
                    <div className="pr-panel__price-discount">
                      <span>With 10% new client offer:</span>
                      <strong className="pr-discount-val">{getDisc(plan)}</strong>
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

                  <a
                    href={`${plan.ctaLink}?service=${encodeURIComponent(activeService + ' – ' + plan.name)}&market=${market}`}
                    className="pr-cta"
                  >
                    <span className="pr-cta-text">{plan.cta}</span>
                    <span className="pr-cta-arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── CUSTOM QUOTE (UNCHANGED) ── */}
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

