import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SEO from '../SEO/SEO'
import './AutonomousAiAgents.css'

const AS_FAQS = [
  // ... (keeping standard FAQs)
  {
    question: 'What are AI agents and how can they help my business?',
    answer: 'AI agents are autonomous software systems that perceive input, reason over it using a large language model, and take actions—calling APIs, updating databases, sending emails, or triggering workflows—without human intervention. KesariX builds AI agents that handle customer support, sales follow-up, HR onboarding, document processing, and complex multi-step business workflows 24/7.',
  },
  {
    question: 'What is the difference between an AI chatbot and an AI agent?',
    answer: 'A chatbot answers questions conversationally. An AI agent goes further—it can take multi-step actions, call external tools and APIs, remember context across sessions, make decisions, and complete tasks autonomously. For example, an AI sales agent doesn\'t just respond; it qualifies leads, books meetings, and updates your CRM automatically.',
  },
  {
    question: 'Which platforms do you use to build AI agents?',
    answer: 'We build AI agents using LangChain, LangGraph, CrewAI, AutoGen, and custom Python frameworks depending on the use case. For no-code/low-code automation we integrate n8n, Make (Integromat), and Zapier. We also build fully custom agent orchestration systems for enterprise clients who need full control.',
  },
  {
    question: 'Can AI agents integrate with my existing CRM, ERP, or business tools?',
    answer: 'Yes. Our AI agents integrate with Salesforce, HubSpot, Zoho CRM, Notion, Slack, WhatsApp, Gmail, Google Workspace, Jira, and custom internal systems via REST APIs or webhooks. Every integration is purpose-built, not a generic connector.',
  },
  {
    question: 'How much does it cost to build a custom AI agent in India?',
    answer: 'A focused AI agent (e.g., customer support bot with CRM integration) starts at ₹1,00,000–3,00,000. A full multi-agent pipeline with memory, tool calling, and human-in-the-loop workflows costs ₹3,00,000–10,00,000+. All agents include testing, monitoring, and 30-day post-launch support.',
  },
  {
    question: 'Is the AI agent data secure and private?',
    answer: 'Yes. We implement role-based access control, data encryption at rest and in transit, and can deploy agents on your private cloud or on-premise infrastructure. For regulated industries, we offer RAG architectures that never send sensitive data to third-party LLM providers.',
  },
]

const AS_BREADCRUMBS = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/#capabilities' },
  { name: 'Autonomous AI Agents', url: '/service/autonomous-ai-agents' },
]

const AS_RATING = { ratingValue: '4.9', reviewCount: '35', bestRating: '5' }

export default function AutonomousAiAgents() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Hero Reveal
      gsap.fromTo('.as-hero-word', 
        { autoAlpha: 0, y: 100 },
        { autoAlpha: 1, y: 0, duration: 1.5, ease: 'power4.out', stagger: 0.1, delay: 0.2 }
      )
      gsap.fromTo('.as-hero-meta',
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 2, delay: 1 }
      )

      // 2. Manifesto Text Scrub
      const manifestoLines = gsap.utils.toArray('.as-manifesto-line')
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

      // 3. Horizontal Scroll (How We Build)
      let hzSections = gsap.utils.toArray('.as-hz-panel')
      if (hzSections.length > 0) {
        gsap.to(hzSections, {
          xPercent: -100 * (hzSections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".as-hz-container",
            pin: true,
            scrub: 1,
            end: () => "+=" + document.querySelector(".as-hz-wrapper").offsetWidth
          }
        })
      }

      // 4. Typographic Use Cases Reveal (Agent Catalogue)
      const useCaseLines = gsap.utils.toArray('.as-uc-item')
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
      const hzImages = gsap.utils.toArray('.as-step-img')
      hzImages.forEach((img) => {
        gsap.fromTo(img,
          { scale: 1.2 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: ".as-hz-container",
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
    <div className="as-page" ref={sectionRef}>
      <SEO 
        title="AI Agent Development Company India — Custom Autonomous AI Systems"
        description="KesariX Technology builds production AI agents that handle customer support, sales follow-up, lead qualification, HR automation, and complex multi-step workflows 24/7. Custom AI agent development using LangGraph, CrewAI, n8n, and OpenAI."
        keywords="AI Agent Development India, Custom AI Agents, AI Automation Agency India, Agentic Systems, LangGraph Development, CrewAI Development, n8n Automation, Make Automation, Zapier Integration, CRM Automation AI, Sales AI Agent, Customer Support AI, WhatsApp AI Bot, Multi-Agent System, Autonomous AI Workflow, AI Chatbot Development India, Workflow Automation India"
        canonicalUrl="/service/autonomous-ai-agents"
        isServicePage={true}
        breadcrumbs={AS_BREADCRUMBS}
        faqs={AS_FAQS}
        aggregateRating={AS_RATING}
      />
      
      {/* ── 1. HERO (Extreme Minimal) ── */}
      <section className="as-hero">
        <div className="as-hero__inner">
          <div className="as-hero-meta">
            <span>/ SERVICE</span>
            <span>AUTONOMOUS AI AGENTS</span>
          </div>
          <h1 className="as-hero-title">
            <div className="as-hero-word">Autonomous</div>
            <div className="as-hero-word as-italic as-saffron">Workflows.</div>
          </h1>
          <div className="as-hero-meta as-hero-bottom">
            <span>Deploy intelligent agents that perceive, reason, and act. Automating complex processes.</span>
            <a href="/contact" className="as-cta">Inquire Now ↗</a>
          </div>
        </div>
      </section>

      {/* ── 2. MANIFESTO (Scrub Typography) ── */}
      <section className="as-manifesto">
        <div className="as-manifesto__inner">
          <h2 className="as-manifesto-text">
            <div className="as-manifesto-line">Beyond chatbots.</div>
            <div className="as-manifesto-line">Real action.</div>
            <div className="as-manifesto-line">We build agentic systems</div>
            <div className="as-manifesto-line as-italic as-saffron">that do.</div>
            <div className="as-manifesto-line">Reliable digital workers</div>
            <div className="as-manifesto-line">that perform 24/7.</div>
          </h2>
          <div className="as-manifesto-stats">
            <div className="as-stat">
              <span className="as-stat-num">24/7</span>
              <span className="as-stat-label">Operation</span>
            </div>
            <div className="as-stat">
              <span className="as-stat-num">10x</span>
              <span className="as-stat-label">Process Acceleration</span>
            </div>
            <div className="as-stat">
              <span className="as-stat-num">0</span>
              <span className="as-stat-label">Hallucinations</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. HORIZONTAL SCROLL (How We Build) ── */}
      <section className="as-hz-container">
        <div className="as-hz-wrapper">
          {/* Intro Panel */}
          <div className="as-hz-panel as-hz-intro">
            <h2 className="as-hz-title">How We<br/><em className="as-italic as-saffron">Build.</em></h2>
            <p className="as-hz-desc">A strategic approach to autonomous integration.</p>
            <span className="as-scroll-indicator">Scroll to Explore →</span>
          </div>
          {/* Step 1 */}
          <div className="as-hz-panel as-hz-step">
            <div className="as-step-content-wrap">
              <div className="as-step-num">01</div>
              <div className="as-step-content">
                <h3 className="as-step-title">Analysis</h3>
                <p className="as-step-desc">Identifying high-value, repetitive workflows that can be successfully abstracted and handed to an agent.</p>
              </div>
            </div>
            <div className="as-step-image-wrap">
              {/* IMAGE CONTEXT: Needs business workflow analysis, flowchart, or abstract data visualization */}
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Workflow Analysis" className="as-step-img" />
            </div>
          </div>
          {/* Step 2 */}
          <div className="as-hz-panel as-hz-step">
            <div className="as-step-content-wrap">
              <div className="as-step-num">02</div>
              <div className="as-step-content">
                <h3 className="as-step-title">Tooling</h3>
                <p className="as-step-desc">Developing secure, isolated API functions that the agent can invoke to interact with your business software.</p>
              </div>
            </div>
            <div className="as-step-image-wrap">
              {/* IMAGE CONTEXT: Needs API integration, code snippets, or tech infrastructure */}
              <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=1200" alt="Tool Construction" className="as-step-img" />
            </div>
          </div>
          {/* Step 3 */}
          <div className="as-hz-panel as-hz-step">
            <div className="as-step-content-wrap">
              <div className="as-step-num">03</div>
              <div className="as-step-content">
                <h3 className="as-step-title">Guardrails</h3>
                <p className="as-step-desc">Designing prompt chains and fail-safes so the agent handles edge-cases safely without destructive actions.</p>
              </div>
            </div>
            <div className="as-step-image-wrap">
              {/* IMAGE CONTEXT: Needs security locks, glowing AI logic gates, or digital shields */}
              <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200" alt="AI Guardrails" className="as-step-img" />
            </div>
          </div>
          {/* Step 4 */}
          <div className="as-hz-panel as-hz-step">
            <div className="as-step-content-wrap">
              <div className="as-step-num">04</div>
              <div className="as-step-content">
                <h3 className="as-step-title">Deployment</h3>
                <p className="as-step-desc">Running the agent in a simulated sandbox environment before promoting it to a live production workflow.</p>
              </div>
            </div>
            <div className="as-step-image-wrap">
              {/* IMAGE CONTEXT: Needs server deployment, dashboard monitoring, or live tech operations */}
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" alt="Agent Deployment" className="as-step-img" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. HOVER REVEAL PILLARS (Agent Catalogue) ── */}
      <section className="as-use-cases">
        <div className="as-uc-inner">
          <h2 className="as-uc-header as-italic">Agent Catalogue</h2>
          <div className="as-uc-list">
            <div className="as-uc-item">
              <div className="as-uc-text-wrap">
                <h4 className="as-uc-title">Customer Support Bot</h4>
                <p className="as-uc-desc">Handles L1/L2 queries autonomously — processing refunds, updating tickets, and accessing CRM data.</p>
              </div>
              <div className="as-uc-image-wrap">
                {/* IMAGE CONTEXT: Call center AI, glowing headset, or digital customer service visualization */}
                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800" alt="Customer Support AI" className="as-uc-img" />
              </div>
            </div>
            <div className="as-uc-item">
              <div className="as-uc-text-wrap">
                <h4 className="as-uc-title">Sales Intelligence Agent</h4>
                <p className="as-uc-desc">Qualifies inbound leads, follows up via email & WhatsApp, and schedules demos 24/7 without fatigue.</p>
              </div>
              <div className="as-uc-image-wrap">
                {/* IMAGE CONTEXT: CRM dashboard, financial growth charts, or digital sales funnels */}
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Sales AI" className="as-uc-img" />
              </div>
            </div>
            <div className="as-uc-item">
              <div className="as-uc-text-wrap">
                <h4 className="as-uc-title">Knowledge Base Assistant</h4>
                <p className="as-uc-desc">A RAG-powered agent trained on your internal docs. Instantly surfaces accurate, cited answers for your team.</p>
              </div>
              <div className="as-uc-image-wrap">
                {/* IMAGE CONTEXT: Glowing brain, document scanning, or digital library */}
                <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800" alt="Knowledge Base AI" className="as-uc-img" />
              </div>
            </div>
            <div className="as-uc-item">
              <div className="as-uc-text-wrap">
                <h4 className="as-uc-title">E-commerce Concierge</h4>
                <p className="as-uc-desc">Product discovery, order tracking, and return processing — fully automated across WhatsApp and web chat.</p>
              </div>
              <div className="as-uc-image-wrap">
                {/* IMAGE CONTEXT: Digital shopping cart, mobile commerce, or global shipping visualization */}
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800" alt="E-Commerce AI" className="as-uc-img" />
              </div>
            </div>
            <div className="as-uc-item">
              <div className="as-uc-text-wrap">
                <h4 className="as-uc-title">HR & Onboarding Agent</h4>
                <p className="as-uc-desc">Automates new-hire onboarding flows, policy Q&A, and leave management — freeing your HR team.</p>
              </div>
              <div className="as-uc-image-wrap">
                {/* IMAGE CONTEXT: Team collaboration, digital forms, or enterprise workspace */}
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" alt="HR AI" className="as-uc-img" />
              </div>
            </div>
            <div className="as-uc-item">
              <div className="as-uc-text-wrap">
                <h4 className="as-uc-title">Custom Pipelines</h4>
                <p className="as-uc-desc">Multiple specialized sub-agents orchestrated to handle complex, multi-step workflows spanning APIs and humans.</p>
              </div>
              <div className="as-uc-image-wrap">
                {/* IMAGE CONTEXT: Neural networks, complex node connections, or multi-agent orchestration logic */}
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" alt="Multi Agent System" className="as-uc-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
