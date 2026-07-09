import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SEO from '../SEO/SEO'
import './CustomAiRagSolutions.css'

const NA_FAQS = [
  {
    question: 'What AI development services does KesariX Technology offer?',
    answer: 'KesariX Technology offers end-to-end AI development including custom LLM fine-tuning, RAG (Retrieval-Augmented Generation) system design, AI agent development, OpenAI GPT-4 integration, Anthropic Claude integration, Google Gemini integration, computer vision pipelines, document AI, voice AI, and vector database setup with Pinecone, Weaviate, or Qdrant.',
  },
  {
    question: 'What is RAG and can KesariX build a RAG system for my business?',
    answer: 'RAG (Retrieval-Augmented Generation) is an AI architecture that combines a language model with a searchable knowledge base of your private data. KesariX builds production RAG systems that let your AI answer questions accurately using your internal documents, PDFs, databases, and APIs — with source citations and no hallucinations.',
  },
  {
    question: 'How long does it take to build a custom AI chatbot or AI agent?',
    answer: 'A standard AI chatbot with LLM integration typically takes 3–6 weeks. A fully autonomous multi-agent AI system with tool calling, memory, and external API integrations takes 6–14 weeks. Timeline depends on data complexity, integration requirements, and testing needs.',
  },
  {
    question: 'Can KesariX fine-tune an LLM on my proprietary data?',
    answer: 'Yes. We fine-tune open-source models (LLaMA, Mistral, Phi) and select OpenAI models on your proprietary datasets using LoRA and QLoRA techniques. Fine-tuning improves domain accuracy, reduces prompt length, and lowers inference costs compared to general-purpose models.',
  },
  {
    question: 'What is the cost of building a custom AI solution in India?',
    answer: 'A basic AI chatbot integration starts at ₹50,000–₹2,00,000. A custom RAG system costs ₹1,50,000–₹5,00,000. A full multi-agent AI pipeline with custom integrations ranges from ₹3,00,000–₹15,00,000+. All projects include architecture review, deployment, and 30-day post-launch support.',
  },
  {
    question: 'Does KesariX build AI solutions for international clients?',
    answer: 'Yes. We work with clients across the US, UK, Canada, Australia, UAE, Singapore, and Europe. All communication is in English, delivery is remote-first, and we accommodate time zone requirements for calls and stand-ups.',
  },
]

const NA_BREADCRUMBS = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/#capabilities' },
  { name: 'Custom AI & RAG Solutions', url: '/service/custom-ai-rag-solutions' },
]

const NA_RATING = { ratingValue: '4.9', reviewCount: '38', bestRating: '5' }

export default function CustomAiRagSolutions() {
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
          { autoAlpha: 0, y: 40 },
          { 
            autoAlpha: 1, 
            y: 0, 
            duration: 1.2, 
            ease: 'power3.out', 
            scrollTrigger: { 
              trigger: el, 
              start: 'top 95%', // Triggers much earlier as it enters the viewport
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
        title="AI Development Company India — LLM, RAG & Custom AI Solutions"
        description="KesariX Technology engineers production-grade AI systems — custom LLMs, RAG architectures, AI agents, GPT/Claude/Gemini integration, computer vision, and voice AI. Turn proprietary data into enterprise intelligence."
        keywords="AI Development Company India, AI Development Company Gujarat, LLM Development, RAG Development Company, GPT Integration India, Claude Integration, Gemini API Integration, Custom AI Solutions, AI Chatbot Development, AI Agent Development, Vector Database, Pinecone Integration, OpenAI API, LangChain Development, LangGraph, Computer Vision AI, Document AI, Voice AI, Fine-tuning LLM, AI Automation India, AI Agency Ahmedabad, AI Engineers Surat, AI Agency Vadodara, AI Developers Rajkot"
        canonicalUrl="/service/custom-ai-rag-solutions"
        isServicePage={true}
        breadcrumbs={NA_BREADCRUMBS}
        faqs={NA_FAQS}
        aggregateRating={NA_RATING}
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
            <span>Custom AI & RAG Solutions</span>
          </div>
          <span className="na-eyebrow">
            <span className="na-eyebrow-dot"></span>
            Custom AI & RAG Solutions
          </span>
          <h1 className="na-hero-title">
            <span className="na-title-line na-title-line--outline">Autonomous</span>
            <span className="na-title-line na-title-line--accent">
              <em className="na-italic">Intelligence.</em>
            </span>
          </h1>
          <p className="na-hero-desc">
            We engineer bespoke AI architectures and Retrieval-Augmented Generation (RAG) systems that transform your proprietary data into scalable, production-grade assets.
          </p>
          <div className="na-hero-ctas">
            <a href="/#contact" className="na-cta na-cta--primary">Build Your AI Strategy ↗</a>
            <a href="/#contact" className="na-cta na-cta--secondary">Explore Architecture ↗</a>
          </div>
        </div>
      </section>

      {/* ── CARDS (LIGHT) ── */}
      <section className="na-section na-light">
        <div className="na-cards__grid">
          <div className="na-card na-reveal">
            <div className="na-card__icon">01</div>
            <h3 className="na-card__title">Custom LLM Integration</h3>
            <p className="na-card__desc">Harness the power of foundation models (GPT-4, Claude, Gemini, Llama) fine-tuned on your internal datasets. Achieve unprecedented domain accuracy and operational velocity.</p>
          </div>
          <div className="na-card na-reveal">
            <div className="na-card__icon">02</div>
            <h3 className="na-card__title">Advanced RAG Architecture</h3>
            <p className="na-card__desc">Eliminate hallucinations. We build scalable vector data pipelines that ground generative models in your real-world, real-time enterprise data.</p>
          </div>
          <div className="na-card na-reveal">
            <div className="na-card__icon">03</div>
            <h3 className="na-card__title">Agentic Workflows</h3>
            <p className="na-card__desc">Deploy autonomous AI agents capable of multi-step reasoning, API execution, and intelligent decision-making integrated directly into your software ecosystem.</p>
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
            <h2 className="na-title-huge na-reveal">Beyond the <em className="na-italic">Prototype.</em></h2>
            <p className="na-desc-large na-reveal">
              The gap between a compelling demo and a robust production system is vast. We specialize in crossing it. We architect secure, low-latency AI backends designed to withstand enterprise scale, stringent compliance, and complex data environments.
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
            <p className="na-desc-large">A rigorous, structured engineering lifecycle tailored for AI deployment.</p>
          </div>
          <div className="na-process__list">
            <div className="na-step na-reveal">
              <div className="na-step__num">01</div> 
              <div className="na-step__content">
                <h4>Discovery & Strategy</h4>
                <p>We analyze your data landscape and identify high-leverage AI opportunities that drive tangible business value.</p>
              </div>
            </div>
            <div className="na-step na-reveal">
              <div className="na-step__num">02</div> 
              <div className="na-step__content">
                <h4>Data Pipeline & Vectorization</h4>
                <p>Establishing clean, real-time ingestion pipelines and vector databases to ensure the foundation model has pristine, searchable context.</p>
              </div>
            </div>
            <div className="na-step na-reveal">
              <div className="na-step__num">03</div> 
              <div className="na-step__content">
                <h4>Orchestration & Fine-Tuning</h4>
                <p>Integrating frameworks like LangChain or LlamaIndex, crafting robust prompts, and establishing strict guardrails against hallucinations.</p>
              </div>
            </div>
            <div className="na-step na-reveal">
              <div className="na-step__num">04</div> 
              <div className="na-step__content">
                <h4>Deployment & MLOps</h4>
                <p>Seamless integration into your production environment with continuous observability, automated feedback loops, and dynamic scaling.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
