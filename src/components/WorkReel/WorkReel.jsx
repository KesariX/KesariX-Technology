import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './WorkReel.css'

gsap.registerPlugin(ScrollTrigger)

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
]

export default function WorkReel() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
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
          <span className="section-label" style={{ color: 'var(--ink)' }}>Our Portfolio</span>
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
          </div>
        </div>
      ))}
    </section>
  )
}
