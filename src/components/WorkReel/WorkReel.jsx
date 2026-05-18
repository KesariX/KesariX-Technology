import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './WorkReel.css'

const PROJECTS = [
  {
    num: '01',
    type: 'AI Powered Voice Call Center',
    title: 'AI Voice Campaign Engine',
    client: 'Delivery Club (Outbound Campaign)',
    desc: 'Built an AI-driven outbound voice campaign system using Exotel, handling automated calls, real-time conversation processing, and lead qualification. Integrated speech-to-text, LLM-based intent detection, and structured data capture with campaign tracking dashboards.',
    tags: ['Exotel API', 'WebSockets', 'FastAPI', 'LLM (Groq/GPT)', 'PostgreSQL', 'React'],
    metrics: [
      { value: '500–1000', label: 'Daily Calls' },
      { value: '85%+', label: 'Automation Rate' },
    ],
    gradient: 'bg-ai-voice',
  },
  {
    num: '02',
    type: 'Self-Hosted CRM Platform',
    title: 'Aegis CRM',
    client: 'Internal / KesariX Technology',
    desc: 'Forked and fully rebranded Twenty CRM (AGPL-3.0) into Aegis — a self-hosted, white-labelled CRM platform built for client deployment. Replaced all branding, implemented a custom KesariX color theme, built a branded cover landing page, and configured a Docker Compose production deployment pipeline.',
    tags: ['Node.js', 'NestJS', 'PostgreSQL', 'React', 'Vite', 'Nx Monorepo', 'Docker', 'Linaria'],
    metrics: [
      { value: '100%', label: 'Self-Hosted' },
      { value: 'White-Label', label: 'Custom Brand' },
    ],
    gradient: 'bg-aegis-crm',
    link: 'https://aegis.kesarixtechnology.com/',
  },
]

export default function WorkReel() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.portfolio__card', {
        opacity: 0, y: 60, duration: 1.2, ease: 'expo.out',
        scrollTrigger: { trigger: '.portfolio__card', start: 'top 80%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="portfolio" id="portfolio" ref={sectionRef}>
      <div className="portfolio__head">
        <div className="portfolio__title-wrap">
          <div className="cp-header__eyebrow">
            <span className="cp-eyebrow-dot" /> Our Products
          </div>
          <h2 className="portfolio__title">
            Products That Make<br />an <em>Impact</em>
          </h2>
        </div>
        <p className="portfolio__sub">
          We don't just write code. We engineer high-performance enterprise systems, intelligent workflows, and scalable platforms that drive measurable business results.
        </p>
      </div>

      {PROJECTS.map((p, i) => (
        <div className="portfolio__card" key={i}>
          <div className={`portfolio__card-visual ${p.gradient}`}>
            <div className="portfolio__card-num">{p.num}</div>
            <div className="portfolio__card-metrics">
              {p.metrics.map((m) => (
                <div className="portfolio__metric" key={m.label}>
                  <div className="portfolio__metric-value">{m.value}</div>
                  <div className="portfolio__metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="portfolio__card-body">
            <div className="portfolio__card-type">{p.type}</div>
            <h3 className="portfolio__card-title">
              {p.title}
            </h3>
            <div className="portfolio__card-client">
              Client: <em>{p.client}</em>
            </div>
            <p className="portfolio__card-desc">{p.desc}</p>
            <div className="portfolio__card-tags">
              {p.tags.map((tag) => (
                <span className="portfolio__tag" key={tag}>{tag}</span>
              ))}
            </div>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio__card-link"
              >
                Visit Live ↗
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  )
}
