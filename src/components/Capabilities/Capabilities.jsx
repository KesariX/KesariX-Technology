import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Capabilities.css'

const SERVICES = [
  {
    num: '01',
    category: 'Neural Architecture',
    type: 'AI Solutions',
    desc: 'Custom LLMs, RAG systems, and production-grade intelligence layers aligned to your business data and workflows.',
    tags: ['RAG Systems', 'Fine-tuned Models', 'Inference Ops'],
    link: '/service/neural-architecture',
  },
  {
    num: '02',
    category: 'Product Engineering',
    type: 'Web Engineering',
    desc: 'High-performance React and Node platforms designed for speed, conversion, and enterprise-level scalability.',
    tags: ['React + TypeScript', 'Scalable APIs', 'Core Web Vitals'],
    link: '/service/product-engineering',
  },
  {
    num: '03',
    category: 'Cloud Backbone',
    type: 'IT Infrastructure',
    desc: 'Managed cloud, security hardening, and dependable DevOps pipelines to keep your systems resilient at scale.',
    tags: ['Cloud Ops', 'Cybersecurity', 'CI/CD Automation'],
    link: '/service/cloud-backbone',
  },
  {
    num: '04',
    category: 'Agentic Systems',
    type: 'Autonomous Agents',
    desc: 'Multi-agent orchestration engines for autonomous execution, decision loops, and reliable handoff to human teams.',
    tags: ['Agent Memory', 'Tool Calling', 'Human-in-the-Loop'],
    link: '/service/agentic-systems',
  },
  {
    num: '05',
    category: 'Workflow Engines',
    type: 'Process Automation',
    desc: 'Operational pipelines that remove repetitive manual work and synchronize your tools into one reliable flow.',
    tags: ['No-code Integrations', 'API Workflows', 'Ops Optimization'],
    link: '/service/workflow-engines',
  },
]

export default function Capabilities() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia()
      
      // Pin the left section while the right side scrolls (Desktop only)
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: '.cap__inner',
          start: 'top 15%',
          end: 'bottom 85%',
          pin: '.cap__head',
          pinSpacing: false,
        })
      })

      gsap.fromTo('.cap__eyebrow, .cap__title, .cap__desc', 
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: '.cap__head', start: 'top 82%' }
        }
      )
      
      gsap.fromTo('.cap__row', 
        { opacity: 0, y: 50, scale: 0.98 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: '.cap__list', start: 'top 80%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="capabilities" id="capabilities" ref={sectionRef}>
      <div className="cap__inner">

        <div className="cap__head">
          <span className="cap__eyebrow">
            <span className="cap__eyebrow-dot"></span>
            Our Arsenal
          </span>
          <h2 className="cap__title">
            Capabilities <br />
            <span className="cap__title-italic">That Deliver.</span>
          </h2>
          <p className="cap__desc">
            We combine deep technical expertise with strategic product vision to build systems that scale, perform, and drive real business value.
          </p>
        </div>

        <div className="cap__list">
        {SERVICES.map((s, i) => (
          <div className="cap__row" key={i}>
              <div className="cap__row-glow" />
            <div className="cap__left">
              <div className="cap__num">{s.num}</div>
                <h3 className="cap__category">{s.category}</h3>
                <div className="cap__type"><em>{s.type}</em></div>
            </div>
            <div className="cap__center">
                <p className="cap__desc-text">{s.desc}</p>
              <div className="cap__tags">
                {s.tags.map((tag) => (
                  <span className="cap__tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="cap__right">
              <a className="cap__link" href={s.link} aria-label={`Explore ${s.category} service`}>
                Explore service
                <span className="cap__arrow">↗</span>
              </a>
            </div>
          </div>
        ))}
        </div>

      </div>
    </section>
  )
}
