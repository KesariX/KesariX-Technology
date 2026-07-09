import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SEO from '../SEO/SEO'
import './WorkflowProcessAutomation.css'

const WE_FAQS = [
  // ... (keeping standard FAQs)
  {
    question: 'What workflow automation services does KesariX Technology offer?',
    answer: 'KesariX Technology designs and builds end-to-end workflow automation systems—from simple task automation with n8n and Make (Integromat) to complex distributed workflow engines with event-driven microservices, stateful long-running processes, and human-in-the-loop approvals. We also integrate Zapier, custom webhooks, and AI-powered decision nodes.',
  },
  {
    question: 'What business processes can KesariX automate for my company?',
    answer: 'We automate lead capture and follow-up, invoice generation, employee onboarding, inventory alerts, CRM data sync, email/WhatsApp campaigns, customer support triage, social media posting, document approval workflows, compliance reporting, and more. If it\'s repetitive and rule-based, we can automate it—often with AI decision-making layered in.',
  },
  {
    question: 'What is n8n and can KesariX set it up for my business?',
    answer: 'n8n is an open-source workflow automation platform that connects 500+ apps and services. KesariX can deploy n8n on your private cloud, build custom automation workflows, create custom nodes for your proprietary APIs, and maintain the entire infrastructure so you get enterprise automation without SaaS vendor lock-in.',
  },
  {
    question: 'How does event-driven architecture improve business workflows?',
    answer: 'Event-driven architecture decouples your business systems so they react to real-time events (e.g., a payment received, a form submitted, an inventory level crossed) independently and reliably. This eliminates polling, reduces latency, and ensures no action is missed—even if a downstream service is temporarily unavailable.',
  },
  {
    question: 'Can KesariX build a distributed orchestration system for long-running processes?',
    answer: 'Yes. We build stateful workflow engines that handle processes spanning hours, days, or weeks—like multi-stage approval workflows, supply chain coordination, or SaaS subscription lifecycle management. These systems include retry logic, failure recovery, audit trails, and monitoring dashboards.',
  },
  {
    question: 'What is the cost of a custom workflow automation project?',
    answer: 'A simple automation connecting 2–3 apps starts at ₹25,000–75,000. A custom n8n or Make workflow with AI decision nodes costs ₹75,000–2,00,000. A full distributed workflow engine or enterprise orchestration platform starts at ₹3,00,000+. Contact us for a free discovery call and scoping estimate.',
  },
]

const WE_BREADCRUMBS = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/#capabilities' },
  { name: 'Workflow & Process Automation', url: '/service/workflow-process-automation' },
]

const WE_RATING = { ratingValue: '4.8', reviewCount: '31', bestRating: '5' }

export default function WorkflowProcessAutomation() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Hero Reveal
      gsap.fromTo('.we-hero-word', 
        { autoAlpha: 0, y: 100 },
        { autoAlpha: 1, y: 0, duration: 1.5, ease: 'power4.out', stagger: 0.1, delay: 0.2 }
      )
      gsap.fromTo('.we-hero-meta',
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 2, delay: 1 }
      )

      // 2. Manifesto Text Scrub
      const manifestoLines = gsap.utils.toArray('.we-manifesto-line')
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

      // 3. Horizontal Scroll (Our Method)
      let hzSections = gsap.utils.toArray('.we-hz-panel')
      if (hzSections.length > 0) {
        gsap.to(hzSections, {
          xPercent: -100 * (hzSections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".we-hz-container",
            pin: true,
            scrub: 1,
            end: () => "+=" + document.querySelector(".we-hz-wrapper").offsetWidth
          }
        })
      }

      // 4. Typographic Capabilities Reveal
      const useCaseLines = gsap.utils.toArray('.we-uc-item')
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
      const hzImages = gsap.utils.toArray('.we-step-img')
      hzImages.forEach((img) => {
        gsap.fromTo(img,
          { scale: 1.2 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: ".we-hz-container",
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
    <div className="we-page" ref={sectionRef}>
      <SEO 
        title="Workflow Automation & Business Process Engineering India"
        description="KesariX Technology builds scalable workflow automation systems—n8n automation, Make (Integromat), Zapier, custom event-driven microservices, and AI-powered process orchestration. Eliminate repetitive tasks and accelerate your business."
        keywords="Workflow Automation India, Business Process Automation, n8n Automation Agency, Make Integromat Development, Zapier Integration India, AI Workflow Automation, Business Automation Company India, Process Orchestration, Event-Driven Architecture, CRM Automation, Lead Automation, Email Automation, WhatsApp Automation, Digital Transformation India, Distributed Systems, Enterprise Automation"
        canonicalUrl="/service/workflow-process-automation"
        isServicePage={true}
        breadcrumbs={WE_BREADCRUMBS}
        faqs={WE_FAQS}
        aggregateRating={WE_RATING}
      />
      
      {/* ── 1. HERO (Extreme Minimal) ── */}
      <section className="we-hero">
        <div className="we-hero__inner">
          <div className="we-hero-meta">
            <span>/ SERVICE</span>
            <span>WORKFLOW & PROCESS AUTOMATION</span>
          </div>
          <h1 className="we-hero-title">
            <div className="we-hero-word">Process</div>
            <div className="we-hero-word we-italic we-saffron">Automation.</div>
          </h1>
          <div className="we-hero-meta we-hero-bottom">
            <span>Scalable state machines and distributed workflow engines orchestrating business logic.</span>
            <a href="/contact" className="we-cta">Inquire Now ↗</a>
          </div>
        </div>
      </section>

      {/* ── 2. MANIFESTO (Scrub Typography) ── */}
      <section className="we-manifesto">
        <div className="we-manifesto__inner">
          <h2 className="we-manifesto-text">
            <div className="we-manifesto-line">Cron jobs fail.</div>
            <div className="we-manifesto-line we-italic we-saffron">Workflows recover.</div>
            <div className="we-manifesto-line">We implement durable</div>
            <div className="we-manifesto-line">execution platforms.</div>
            <div className="we-manifesto-line">Guaranteeing your</div>
            <div className="we-manifesto-line">mission-critical code runs.</div>
          </h2>
          <div className="we-manifesto-stats">
            <div className="we-stat">
              <span className="we-stat-num">Zero</span>
              <span className="we-stat-label">State Loss</span>
            </div>
            <div className="we-stat">
              <span className="we-stat-num">High</span>
              <span className="we-stat-label">Availability</span>
            </div>
            <div className="we-stat">
              <span className="we-stat-num">Distributed</span>
              <span className="we-stat-label">Execution</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. HORIZONTAL SCROLL (Our Method) ── */}
      <section className="we-hz-container">
        <div className="we-hz-wrapper">
          {/* Intro Panel */}
          <div className="we-hz-panel we-hz-intro">
            <h2 className="we-hz-title">Our<br/><em className="we-italic we-saffron">Method.</em></h2>
            <p className="we-hz-desc">A structured approach to resilient operations.</p>
            <span className="we-scroll-indicator">Scroll to Explore →</span>
          </div>
          {/* Step 1 */}
          <div className="we-hz-panel we-hz-step">
            <div className="we-step-content-wrap">
              <div className="we-step-num">01</div>
              <div className="we-step-content">
                <h3 className="we-step-title">Logic Mapping</h3>
                <p className="we-step-desc">Translating complex business requirements into distinct, fault-tolerant workflow steps.</p>
              </div>
            </div>
            <div className="we-step-image-wrap">
              {/* IMAGE CONTEXT: Needs flowcharts, whiteboarding, or mapping visualization */}
              <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200" alt="Logic Mapping" className="we-step-img" />
            </div>
          </div>
          {/* Step 2 */}
          <div className="we-hz-panel we-hz-step">
            <div className="we-step-content-wrap">
              <div className="we-step-num">02</div>
              <div className="we-step-content">
                <h3 className="we-step-title">State Machine</h3>
                <p className="we-step-desc">Architecting event schemas and compensation logic for when specific tasks fail or timeout.</p>
              </div>
            </div>
            <div className="we-step-image-wrap">
              {/* IMAGE CONTEXT: Needs server architecture, database schemas, or abstract nodes */}
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200" alt="State Machine Design" className="we-step-img" />
            </div>
          </div>
          {/* Step 3 */}
          <div className="we-hz-panel we-hz-step">
            <div className="we-step-content-wrap">
              <div className="we-step-num">03</div>
              <div className="we-step-content">
                <h3 className="we-step-title">Integration</h3>
                <p className="we-step-desc">Deploying robust engines like Temporal or AWS Step Functions to manage state and execution.</p>
              </div>
            </div>
            <div className="we-step-image-wrap">
              {/* IMAGE CONTEXT: Needs cloud infrastructure, AWS servers, or complex integrations */}
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" alt="Engine Integration" className="we-step-img" />
            </div>
          </div>
          {/* Step 4 */}
          <div className="we-hz-panel we-hz-step">
            <div className="we-step-content-wrap">
              <div className="we-step-num">04</div>
              <div className="we-step-content">
                <h3 className="we-step-title">Telemetry</h3>
                <p className="we-step-desc">Providing full visibility into workflow states, execution times, and automated retry metrics via dashboards.</p>
              </div>
            </div>
            <div className="we-step-image-wrap">
              {/* IMAGE CONTEXT: Needs analytics dashboards, glowing graphs, or monitoring systems */}
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" alt="Monitoring Dashboard" className="we-step-img" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. HOVER REVEAL PILLARS (Capabilities) ── */}
      <section className="we-use-cases">
        <div className="we-uc-inner">
          <h2 className="we-uc-header we-italic">Capabilities</h2>
          <div className="we-uc-list">
            <div className="we-uc-item">
              <div className="we-uc-text-wrap">
                <h4 className="we-uc-title">Distributed Orchestration</h4>
                <p className="we-uc-desc">Reliable execution of microservices using temporal logic and distributed queues to avoid single points of failure.</p>
              </div>
              <div className="we-uc-image-wrap">
                {/* IMAGE CONTEXT: High-end visualization of distributed servers or microservices */}
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" alt="Distributed Orchestration" className="we-uc-img" />
              </div>
            </div>
            <div className="we-uc-item">
              <div className="we-uc-text-wrap">
                <h4 className="we-uc-title">Event-Driven Architecture</h4>
                <p className="we-uc-desc">Pub/sub event routing ensuring decoupled systems that react to state changes instantly and reliably.</p>
              </div>
              <div className="we-uc-image-wrap">
                {/* IMAGE CONTEXT: High-end visualization of data streams, glowing networks, or messaging queues */}
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" alt="Event-Driven Architecture" className="we-uc-img" />
              </div>
            </div>
            <div className="we-uc-item">
              <div className="we-uc-text-wrap">
                <h4 className="we-uc-title">Long-Running Processes</h4>
                <p className="we-uc-desc">Stateful workflows that handle delays, retries, and human-in-the-loop approvals without blocking resources.</p>
              </div>
              <div className="we-uc-image-wrap">
                {/* IMAGE CONTEXT: High-end visualization of clocks, timelines, or complex state machines */}
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800" alt="Long Running Processes" className="we-uc-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
