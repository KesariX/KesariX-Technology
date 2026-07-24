import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SEO from '../SEO/SEO'
import './WebMobileAppDevelopment.css'

const PE_FAQS = [
  // ... (keeping standard FAQs)
  {
    question: 'What web development services does KesariX Technology provide?',
    answer: 'KesariX Technology provides end-to-end web development services including custom React and Next.js websites, full-stack MERN/MEAN applications, REST and GraphQL APIs, SaaS platforms, admin dashboards, CRM development, ERP systems, payment gateway integration, and real-time features using WebSockets.',
  },
  {
    question: 'Does KesariX develop mobile apps for iOS and Android?',
    answer: 'Yes. We build cross-platform iOS and Android apps using Flutter and React Native, and native apps using Swift (iOS) and Kotlin (Android). Our mobile apps include Firebase integrations, push notifications, offline capabilities, payment gateways, and custom native modules.',
  },
  {
    question: 'How much does it cost to build a website or web application in India?',
    answer: 'A business website or landing page starts at ₹20,000–₹80,000. A full-stack web application or SaaS platform starts at ₹1,50,000–₹8,00,000+ depending on features and complexity. E-commerce stores with custom checkout start at ₹60,000. All quotes include design, development, testing, and deployment.',
  },
  {
    question: 'What is the typical timeline for a React or Next.js project?',
    answer: 'A standard React website takes 2–4 weeks. A full-stack Next.js SaaS application takes 6–14 weeks. Complex enterprise platforms can take 3–6 months. We use 2-week agile sprints with regular demos so you always see progress.',
  },
  {
    question: 'Can KesariX build a custom SaaS product from scratch?',
    answer: 'Yes. We specialize in SaaS product development including multi-tenant architecture, subscription billing (Stripe, Razorpay), role-based access control, onboarding flows, analytics dashboards, and API-first design. We have shipped 15+ SaaS products across India, USA, and UK.',
  },
  {
    question: 'Do you use React or Next.js for web development?',
    answer: 'We use both. React is ideal for single-page applications and dashboards. Next.js is preferred when you need server-side rendering, static site generation, or better SEO out of the box. We recommend the right framework based on your traffic, content, and performance requirements.',
  },
]

const PE_BREADCRUMBS = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/#capabilities' },
  { name: 'Web & Mobile App Development', url: '/service/web-mobile-app-development' },
]

const PE_RATING = { ratingValue: '4.9', reviewCount: '42', bestRating: '5' }

export default function WebMobileAppDevelopment() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Hero Reveal
      gsap.fromTo('.pe-hero-word', 
        { autoAlpha: 0, y: 100 },
        { autoAlpha: 1, y: 0, duration: 1.5, ease: 'power4.out', stagger: 0.1, delay: 0.2 }
      )
      gsap.fromTo('.pe-hero-meta',
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 2, delay: 1 }
      )

      // 2. Manifesto Text Scrub
      const manifestoLines = gsap.utils.toArray('.pe-manifesto-line')
      manifestoLines.forEach((line) => {
        gsap.fromTo(line,
          { opacity: 0.1, y: 50 },
          {
            opacity: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: line,
              start: 'top 80%',
              end: 'top 40%',
              scrub: true,
            }
          }
        )
      })

      // 3. Horizontal Scroll (How We Deliver)
      let hzSections = gsap.utils.toArray('.pe-hz-panel')
      if (hzSections.length > 0) {
        gsap.to(hzSections, {
          xPercent: -100 * (hzSections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".pe-hz-container",
            pin: true,
            scrub: 1,
            end: () => "+=" + document.querySelector(".pe-hz-wrapper").offsetWidth
          }
        })
      }

      // 4. Typographic Use Cases Reveal
      const useCaseLines = gsap.utils.toArray('.pe-uc-item')
      useCaseLines.forEach((line) => {
        gsap.fromTo(line,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: line,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        )
      })

      // Image Parallax within Horizontal Scroll
      const hzImages = gsap.utils.toArray('.pe-step-img')
      hzImages.forEach((img) => {
        gsap.fromTo(img,
          { scale: 1.2 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: ".pe-hz-container",
              scrub: 1,
              start: "top top",
              end: "bottom top",
            }
          }
        )
      })

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="pe-page" ref={sectionRef}>
      <SEO 
        title="Web Development & Product Engineering Company India"
        description="KesariX Technology builds scalable React, Next.js, and Node.js web platforms, iOS & Android mobile apps, SaaS products, CRM/ERP systems, and enterprise APIs. End-to-end product engineering from concept to production."
        keywords="Web Development Company India, React Development Company, Next.js Development, Full Stack Development India, MERN Stack Development, Node.js Development, Mobile App Development India, Flutter Development, React Native Development, SaaS Development India, CRM Development, ERP Development, Custom Software Development Gujarat, Web Developers Surat, Web Developers Ahmedabad, Web Developers Vadodara, Software Agency Rajkot, Enterprise Web Development"
        canonicalUrl="/service/web-mobile-app-development"
        isServicePage={true}
        breadcrumbs={PE_BREADCRUMBS}
        faqs={PE_FAQS}
        aggregateRating={PE_RATING}
      />
      
      {/* ── 1. HERO (Extreme Minimal) ── */}
      <section className="pe-hero">
        <div className="pe-hero__inner">
          <div className="pe-hero-meta">
            <span>/ SERVICE</span>
            <span>WEB & MOBILE APP</span>
          </div>
          <h1 className="pe-hero-title">
            <div className="pe-hero-word">Products</div>
            <div className="pe-hero-word pe-italic pe-saffron">Built to Scale.</div>
          </h1>
          <div className="pe-hero-meta pe-hero-bottom">
            <span>End-to-end digital product engineering. From concept to production-ready platforms.</span>
            <a href="/contact" className="pe-cta">Inquire Now ↗</a>
          </div>
        </div>
      </section>

      {/* ── 2. MANIFESTO (Scrub Typography) ── */}
      <section className="pe-manifesto">
        <div className="pe-manifesto__inner">
          <h2 className="pe-manifesto-text">
            <div className="pe-manifesto-line">We don't just write code.</div>
            <div className="pe-manifesto-line">We architect digital products.</div>
            <div className="pe-manifesto-line pe-italic pe-saffron">Designed for performance.</div>
            <div className="pe-manifesto-line">Built for your users.</div>
          </h2>
          <div className="pe-manifesto-stats">
            <div className="pe-stat">
              <span className="pe-stat-num">100+</span>
              <span className="pe-stat-label">Products Shipped</span>
            </div>
            <div className="pe-stat">
              <span className="pe-stat-num">99%</span>
              <span className="pe-stat-label">Crash-free Rate</span>
            </div>
            <div className="pe-stat">
              <span className="pe-stat-num">Cross</span>
              <span className="pe-stat-label">Platform Apps</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. HORIZONTAL SCROLL (How We Deliver) ── */}
      <section className="pe-hz-container">
        <div className="pe-hz-wrapper">
          {/* Intro Panel */}
          <div className="pe-hz-panel pe-hz-intro">
            <h2 className="pe-hz-title">How We<br/><em className="pe-italic pe-saffron">Deliver.</em></h2>
            <p className="pe-hz-desc">A structured engineering process from brief to production.</p>
            <span className="pe-scroll-indicator">Scroll to Explore →</span>
          </div>
          {/* Step 1 */}
          <div className="pe-hz-panel pe-hz-step">
            <div className="pe-step-content-wrap">
              <div className="pe-step-num">01</div>
              <div className="pe-step-content">
                <h3 className="pe-step-title">Discovery</h3>
                <p className="pe-step-desc">Understanding your users and wireframing core interaction journeys.</p>
              </div>
            </div>
            <div className="pe-step-image-wrap">
              {/* IMAGE CONTEXT: Needs wireframing, UX discovery, team brainstorming, or blueprint visuals */}
              <img src="/web_mobile_app_development/discovery.png" alt="UX Discovery" className="pe-step-img" />
            </div>
          </div>
          {/* Step 2 */}
          <div className="pe-hz-panel pe-hz-step">
            <div className="pe-step-content-wrap">
              <div className="pe-step-num">02</div>
              <div className="pe-step-content">
                <h3 className="pe-step-title">Architecture</h3>
                <p className="pe-step-desc">Establishing scalable component libraries and fast, secure APIs.</p>
              </div>
            </div>
            <div className="pe-step-image-wrap">
              {/* IMAGE CONTEXT: Needs code editor, system architecture diagram, or abstract structural tech */}
              <img src="/web_mobile_app_development/architecture.png" alt="System Architecture" className="pe-step-img" />
            </div>
          </div>
          {/* Step 3 */}
          <div className="pe-hz-panel pe-hz-step">
            <div className="pe-step-content-wrap">
              <div className="pe-step-num">03</div>
              <div className="pe-step-content">
                <h3 className="pe-step-title">Sprints</h3>
                <p className="pe-step-desc">Two-week agile cycles with continuous delivery and stakeholder demos.</p>
              </div>
            </div>
            <div className="pe-step-image-wrap">
              {/* IMAGE CONTEXT: Needs agile development, sprint planning, or developers at work */}
              <img src="/web_mobile_app_development/sprints.png" alt="Agile Sprints" className="pe-step-img" />
            </div>
          </div>
          {/* Step 4 */}
          <div className="pe-hz-panel pe-hz-step">
            <div className="pe-step-content-wrap">
              <div className="pe-step-num">04</div>
              <div className="pe-step-content">
                <h3 className="pe-step-title">Launch</h3>
                <p className="pe-step-desc">Production deployment with performance audits and scaling infrastructure.</p>
              </div>
            </div>
            <div className="pe-step-image-wrap">
              {/* IMAGE CONTEXT: Needs rockets, deployment servers, live dashboards, or cloud infrastructure */}
              <img src="/web_mobile_app_development/launch.png" alt="Product Launch" className="pe-step-img" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. HOVER REVEAL PILLARS (Service Pillars) ── */}
      <section className="pe-use-cases">
        <div className="pe-uc-inner">
          <h2 className="pe-uc-header pe-italic">Our Services</h2>
          <div className="pe-uc-list">
            <div className="pe-uc-item">
              <div className="pe-uc-text-wrap">
                <h4 className="pe-uc-title">Full-Stack Web</h4>
                <p className="pe-uc-desc">High-performance React, Next.js, and Node.js platforms optimised for speed, SEO, and conversion. Built to handle enterprise traffic from day one.</p>
              </div>
              <div className="pe-uc-image-wrap">
                {/* IMAGE CONTEXT: High-end visualization of a web application dashboard, React code, or modern browser UI */}
                <img src="/web_mobile_app_development/full_stack.png" alt="Full Stack Development" className="pe-uc-img" />
              </div>
            </div>
            <div className="pe-uc-item">
              <div className="pe-uc-text-wrap">
                <h4 className="pe-uc-title">Mobile Apps</h4>
                <p className="pe-uc-desc">Cross-platform iOS and Android applications using React Native, delivering native-quality experiences with a single, maintainable codebase.</p>
              </div>
              <div className="pe-uc-image-wrap">
                {/* IMAGE CONTEXT: High-end visualization of mobile phones, app interfaces, or mobile testing */}
                <img src="/web_mobile_app_development/mobile_apps.png" alt="Mobile App Development" className="pe-uc-img" />
              </div>
            </div>
            <div className="pe-uc-item">
              <div className="pe-uc-text-wrap">
                <h4 className="pe-uc-title">API & Backend</h4>
                <p className="pe-uc-desc">Scalable RESTful and GraphQL APIs backed by microservices architecture, designed for low latency, high availability, and third-party integration.</p>
              </div>
              <div className="pe-uc-image-wrap">
                {/* IMAGE CONTEXT: High-end visualization of server racks, database nodes, or glowing backend logic */}
                <img src="/web_mobile_app_development/backend_api.png" alt="Backend Architecture" className="pe-uc-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
