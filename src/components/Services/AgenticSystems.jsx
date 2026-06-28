import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './AgenticSystems.css'
import SEO from '../SEO/SEO'

const BOT_TYPES = [
  {
    num: '01',
    icon: '🎧',
    title: 'Customer Support Bot',
    desc: 'Handles L1/L2 queries autonomously — processing refunds, updating tickets, accessing CRM data, and escalating edge-cases to human agents with full context passed.',
    tags: ['CRM Integration', 'Sentiment Analysis', 'Auto-Escalation'],
  },
  {
    num: '02',
    icon: '📈',
    title: 'Sales Intelligence Agent',
    desc: 'Qualifies inbound leads, follows up via email & WhatsApp, schedules demos, and syncs all interaction history into your CRM — operating 24/7 without fatigue.',
    tags: ['Lead Scoring', 'CRM Sync', 'Multi-channel Outreach'],
  },
  {
    num: '03',
    icon: '🧠',
    title: 'Knowledge Base Assistant',
    desc: 'A RAG-powered agent trained on your internal docs, SOPs, and wikis. Instantly surfaces accurate, cited answers for your team — no more manual search.',
    tags: ['RAG Architecture', 'Document Ingestion', 'Role-based Access'],
  },
  {
    num: '04',
    icon: '🛒',
    title: 'E-commerce Concierge',
    desc: 'Product discovery, order tracking, return processing, and upsell recommendations — fully automated across WhatsApp, web chat, and email channels.',
    tags: ['Product Search', 'Order Management', 'Personalized Upsell'],
  },
  {
    num: '05',
    icon: '🏢',
    title: 'HR & Onboarding Agent',
    desc: 'Automates new-hire onboarding flows, policy Q&A, leave management, and performance review nudges — freeing your HR team for high-value strategic work.',
    tags: ['Policy Q&A', 'Document Automation', 'HRMS Integration'],
  },
  {
    num: '06',
    icon: '🔗',
    title: 'Custom Multi-Agent Pipeline',
    desc: 'Multiple specialized sub-agents orchestrated to handle complex, multi-step workflows spanning tools, APIs, and human touchpoints in a single reliable chain.',
    tags: ['Agent Orchestration', 'Tool Calling', 'Human-in-the-Loop'],
  },
]

const AS_FAQS = [
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
  { name: 'Agentic Systems & AI Automation', url: '/service/agentic-systems' },
]

const AS_RATING = { ratingValue: '4.9', reviewCount: '35', bestRating: '5' }

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
      <SEO 
        title="AI Agent Development Company India — Custom Autonomous AI Systems"
        description="KesariX Technology builds production AI agents that handle customer support, sales follow-up, lead qualification, HR automation, and complex multi-step workflows 24/7. Custom AI agent development using LangGraph, CrewAI, n8n, and OpenAI."
        keywords="AI Agent Development India, Custom AI Agents, AI Automation Agency India, Agentic Systems, LangGraph Development, CrewAI Development, n8n Automation, Make Automation, Zapier Integration, CRM Automation AI, Sales AI Agent, Customer Support AI, WhatsApp AI Bot, Multi-Agent System, Autonomous AI Workflow, AI Chatbot Development India, Workflow Automation India"
        canonicalUrl="/service/agentic-systems"
        isServicePage={true}
        breadcrumbs={AS_BREADCRUMBS}
        faqs={AS_FAQS}
        aggregateRating={AS_RATING}
      />
      
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
              <img loading="lazy" src="https://images.unsplash.com/photo-1678324483786-9dc5512217f2?auto=format&fit=crop&q=80&w=1200" alt="Agentic Automation" className="as-parallax-img" />
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
            <img loading="lazy" className="as-use-case__img" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800" alt="Customer Support Agent" />
            <div className="as-use-case__content">
              <h4 className="as-use-case__title">Customer Support</h4>
              <p className="as-use-case__desc">L1/L2 autonomous resolution capable of processing refunds, updating billing, and referencing CRM data.</p>
            </div>
          </div>
          <div className="as-use-case as-reveal">
            <img loading="lazy" className="as-use-case__img" src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800" alt="Data Research Agent" />
            <div className="as-use-case__content">
              <h4 className="as-use-case__title">Data Research</h4>
              <p className="as-use-case__desc">Agents that crawl the web, synthesize reports, monitor competitors, and update internal databases automatically.</p>
            </div>
          </div>
          <div className="as-use-case as-reveal">
            <img loading="lazy" className="as-use-case__img" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Financial Audit Agent" />
            <div className="as-use-case__content">
              <h4 className="as-use-case__title">Financial Auditing</h4>
              <p className="as-use-case__desc">Reviewing hundreds of documents for compliance anomalies, flagging irregularities to human supervisors instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOT TYPES (DARK) ── */}
      <section className="as-section as-bot-types as-dark">
        <div className="as-section-header as-reveal">
          <span className="as-eyebrow"><span className="as-eyebrow-dot"></span>Agent Catalogue</span>
          <h2 className="as-title-huge">Bot Types <em className="as-italic">We Deploy</em></h2>
          <p className="as-desc-large">Purpose-built autonomous agents for every business function — not generic chatbots, but precision-engineered digital workers with real integrations.</p>
        </div>
        <div className="as-bot-types__grid">
          {BOT_TYPES.map((bot) => (
            <div className="as-bot-card as-reveal" key={bot.num}>
              <span className="as-bot-card__icon">{bot.icon}</span>
              <div className="as-bot-card__num">{bot.num}</div>
              <h3 className="as-bot-card__title">{bot.title}</h3>
              <p className="as-bot-card__desc">{bot.desc}</p>
              <div className="as-bot-card__tags">
                {bot.tags.map(t => <span key={t} className="as-bot-tag">{t}</span>)}
              </div>
            </div>
          ))}
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
