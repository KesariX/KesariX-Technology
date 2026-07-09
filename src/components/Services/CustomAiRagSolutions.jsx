import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SEO from '../SEO/SEO'
import './CustomAiRagSolutions.css'

const NA_FAQS = [
  // ... (keeping standard FAQs)
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
    let ctx = gsap.context(() => {
      // 1. Hero Reveal
      gsap.fromTo('.cine-hero-word', 
        { autoAlpha: 0, y: 100 },
        { autoAlpha: 1, y: 0, duration: 1.5, ease: 'power4.out', stagger: 0.1, delay: 0.2 }
      )
      gsap.fromTo('.cine-hero-meta',
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 2, delay: 1 }
      )

      // 2. Manifesto Text Scrub
      const manifestoLines = gsap.utils.toArray('.cine-manifesto-line')
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
      let hzSections = gsap.utils.toArray('.cine-hz-panel')
      if (hzSections.length > 0) {
        gsap.to(hzSections, {
          xPercent: -100 * (hzSections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".cine-hz-container",
            pin: true,
            scrub: 1,
            end: () => "+=" + document.querySelector(".cine-hz-wrapper").offsetWidth
          }
        })
      }

      // 4. Typographic Use Cases Reveal
      const useCaseLines = gsap.utils.toArray('.cine-uc-item')
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
      const hzImages = gsap.utils.toArray('.cine-step-img')
      hzImages.forEach((img) => {
        gsap.fromTo(img,
          { scale: 1.2 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: ".cine-hz-container",
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
    <div className="cine-page" ref={sectionRef}>
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
      
      {/* ── 1. HERO (Extreme Minimal) ── */}
      <section className="cine-hero">
        <div className="cine-hero__inner">
          <div className="cine-hero-meta">
            <span>/ SERVICE</span>
            <span>CUSTOM AI & RAG</span>
          </div>
          <h1 className="cine-hero-title">
            <div className="cine-hero-word">Autonomous</div>
            <div className="cine-hero-word cine-italic cine-saffron">Intelligence.</div>
          </h1>
          <div className="cine-hero-meta cine-hero-bottom">
            <span>Engineering bespoke RAG pipelines and foundation models.</span>
            <a href="/#contact" className="cine-cta">Inquire Now ↗</a>
          </div>
        </div>
      </section>

      {/* ── 2. MANIFESTO (Scrub Typography) ── */}
      <section className="cine-manifesto">
        <div className="cine-manifesto__inner">
          <h2 className="cine-manifesto-text">
            <div className="cine-manifesto-line">We don't build toys.</div>
            <div className="cine-manifesto-line">We build production</div>
            <div className="cine-manifesto-line cine-italic cine-saffron">vector pipelines</div>
            <div className="cine-manifesto-line">that ground generative</div>
            <div className="cine-manifesto-line">models in your real-world,</div>
            <div className="cine-manifesto-line">real-time enterprise data.</div>
          </h2>
          <div className="cine-manifesto-stats">
            <div className="cine-stat">
              <span className="cine-stat-num">0%</span>
              <span className="cine-stat-label">Hallucinations</span>
            </div>
            <div className="cine-stat">
              <span className="cine-stat-num">99.9%</span>
              <span className="cine-stat-label">Inference Uptime</span>
            </div>
            <div className="cine-stat">
              <span className="cine-stat-num">100%</span>
              <span className="cine-stat-label">Data Privacy</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. HORIZONTAL SCROLL (How We Build) ── */}
      <section className="cine-hz-container">
        <div className="cine-hz-wrapper">
          {/* Intro Panel */}
          <div className="cine-hz-panel cine-hz-intro">
            <h2 className="cine-hz-title">How We<br/><em className="cine-italic cine-saffron">Build.</em></h2>
            <p className="cine-hz-desc">A rigorous, four-phase engineering lifecycle tailored for scale.</p>
            <span className="cine-scroll-indicator">Scroll to Explore →</span>
          </div>
          {/* Step 1 */}
          <div className="cine-hz-panel cine-hz-step">
            <div className="cine-step-content-wrap">
              <div className="cine-step-num">01</div>
              <div className="cine-step-content">
                <h3 className="cine-step-title">Discovery</h3>
                <p className="cine-step-desc">We analyze your data landscape and identify high-leverage AI opportunities that drive tangible business value.</p>
              </div>
            </div>
            <div className="cine-step-image-wrap">
              {/* IMAGE CONTEXT: Needs abstract visualization of Data Analysis, glowing networks, or blueprints */}
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" alt="Data Discovery" className="cine-step-img" />
            </div>
          </div>
          {/* Step 2 */}
          <div className="cine-hz-panel cine-hz-step">
            <div className="cine-step-content-wrap">
              <div className="cine-step-num">02</div>
              <div className="cine-step-content">
                <h3 className="cine-step-title">Vectorization</h3>
                <p className="cine-step-desc">Establishing clean ingestion pipelines and vector databases to ensure the foundation model has pristine context.</p>
              </div>
            </div>
            <div className="cine-step-image-wrap">
              {/* IMAGE CONTEXT: Needs representation of vector embeddings, 3D grids, or database architecture */}
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200" alt="Vectorization" className="cine-step-img" />
            </div>
          </div>
          {/* Step 3 */}
          <div className="cine-hz-panel cine-hz-step">
            <div className="cine-step-content-wrap">
              <div className="cine-step-num">03</div>
              <div className="cine-step-content">
                <h3 className="cine-step-title">Orchestration</h3>
                <p className="cine-step-desc">Integrating frameworks like LangChain, crafting robust prompts, and establishing strict guardrails.</p>
              </div>
            </div>
            <div className="cine-step-image-wrap">
              {/* IMAGE CONTEXT: Needs glowing AI nodes orchestrating logic, connecting lines, code execution */}
              <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200" alt="Orchestration" className="cine-step-img" />
            </div>
          </div>
          {/* Step 4 */}
          <div className="cine-hz-panel cine-hz-step">
            <div className="cine-step-content-wrap">
              <div className="cine-step-num">04</div>
              <div className="cine-step-content">
                <h3 className="cine-step-title">MLOps</h3>
                <p className="cine-step-desc">Seamless integration into your production environment with continuous observability and dynamic scaling.</p>
              </div>
            </div>
            <div className="cine-step-image-wrap">
              {/* IMAGE CONTEXT: Needs representation of server racks, continuous deployment, or live monitoring dashboards */}
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200" alt="MLOps" className="cine-step-img" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. TYPOGRAPHY USE CASES WITH HOVER IMAGES ── */}
      <section className="cine-use-cases">
        <div className="cine-uc-inner">
          <h2 className="cine-uc-header cine-italic">Applied Intelligence</h2>
          <div className="cine-uc-list">
            <div className="cine-uc-item">
              <div className="cine-uc-text-wrap">
                <h4 className="cine-uc-title">Logistics</h4>
                <p className="cine-uc-desc">Predictive routing, demand forecasting, and automated supply chain anomaly resolution.</p>
              </div>
              <div className="cine-uc-image-wrap">
                {/* IMAGE CONTEXT: High-end, dark visualization of global shipping, digital maps, or supply chains */}
                <img src="https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0c?auto=format&fit=crop&q=80&w=800" alt="Logistics AI" className="cine-uc-img" />
              </div>
            </div>
            <div className="cine-uc-item">
              <div className="cine-uc-text-wrap">
                <h4 className="cine-uc-title">Fintech</h4>
                <p className="cine-uc-desc">Real-time risk analysis, transaction fraud detection, and algorithmic compliance reporting.</p>
              </div>
              <div className="cine-uc-image-wrap">
                {/* IMAGE CONTEXT: High-end, dark visualization of financial data, stock tickers, or security lock icons */}
                <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800" alt="Fintech AI" className="cine-uc-img" />
              </div>
            </div>
            <div className="cine-uc-item">
              <div className="cine-uc-text-wrap">
                <h4 className="cine-uc-title">SaaS Platforms</h4>
                <p className="cine-uc-desc">Intelligent workflow automation and context-aware copilot integrations built securely into your app.</p>
              </div>
              <div className="cine-uc-image-wrap">
                {/* IMAGE CONTEXT: High-end, dark visualization of software interfaces, glowing UI components, or copilot nodes */}
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" alt="SaaS AI" className="cine-uc-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
