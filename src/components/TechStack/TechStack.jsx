import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './TechStack.css'

const STACKS = [
  {
    id: 'frontend',
    num: '01',
    label: 'Frontend Engineering',
    desc: 'Pixel-perfect, performant interfaces that feel alive — not just functional.',
    chips: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'GSAP',
      'WebGL',
      'Three.js'
    ],
  },
  {
    id: 'backend',
    num: '02',
    label: 'Backend Architecture',
    desc: 'Scalable server-side systems built for reliability, speed, and growth.',
    chips: [
      'Node.js',
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'GraphQL',
      'REST APIs',
      'WebSockets',
      'Microservices'
    ],
  },
  {
    id: 'ai',
    num: '03',
    label: 'Artificial Intelligence',
    desc: 'Production-grade AI — from conversational agents to computer vision pipelines.',
    chips: [
      'LangGraph',
      'Anthropic Claude',
      'OpenAI GPT',
      'RAG Pipelines',
      'Vector DBs',
      'Fine-tuning',
      'LlamaIndex',
      'Whisper'
    ],
  },
  {
    id: 'cloud',
    num: '04',
    label: 'Cloud & DevOps',
    desc: 'Infrastructure that scales with you — automated, secure, and always on.',
    chips: [
      'AWS',
      'GCP',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Terraform',
      'Nginx',
      'Linux'
    ],
  },
  {
    id: 'marketing',
    num: '05',
    label: 'Digital Marketing',
    desc: 'Growth-focused digital execution designed to increase visibility, leads, and conversions.',
    chips: [
      'SEO',
      'Google Ads',
      'Meta Ads',
      'Lead Generation',
      'Content Marketing',
      'Email Campaigns',
      'Social Media Management',
      'Analytics'
    ],
  },
  {
    id: 'operations',
    num: '06',
    label: 'BPO & Data Operations',
    desc: 'Reliable operational support for repetitive, high-volume business workflows.',
    chips: [
      'Data Entry',
      'CRM Management',
      'Lead Qualification',
      'Call Center Support',
      'Virtual Assistance',
      'Manual Data Processing',
      'Customer Support',
      'Back Office Operations'
    ],
  },
]

const totalTools = STACKS.reduce((a, s) => a + s.chips.length, 0)

export default function TechStack() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tech__head > *', {
        opacity: 0, y: 28, duration: 0.9, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: '.tech__head', start: 'top 82%' },
      })
      gsap.from('.tech__cell', {
        opacity: 0, y: 48, duration: 0.8, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: '.tech__wall', start: 'top 80%' },
      })
      gsap.from('.tech__chip', {
        opacity: 0, scale: 0.82, duration: 0.45, ease: 'back.out(1.4)', stagger: 0.025,
        scrollTrigger: { trigger: '.tech__wall', start: 'top 72%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="tech" ref={sectionRef}>
      <div className="tech__inner">

        <div className="tech__head">
          <span className="section-label" style={{ color: 'var(--bone)' }}>Our Arsenal</span>
          <div className="tech__head-row">
            <h2 className="tech__title">Technology<br /><em>We Master</em></h2>
            <div className="tech__head-right">
              <div className="tech__stat-pill">
                <span className="tech__stat-num">{totalTools}+</span>
                <span className="tech__stat-sep" />
                <span className="tech__stat-label">Tools &amp; Frameworks<br />across {STACKS.length} domains</span>
              </div>
              <p className="tech__head-sub">
                Every tool chosen for a reason.<br />Every stack battle-tested in production.
              </p>
            </div>
          </div>
        </div>

        <div className="tech__wall">
          {STACKS.map((s) => (
            <div className="tech__cell" key={s.id} data-cursor-hover>
              <div className="tech__cell-accent" />
              <div className="tech__cell-top">
                <span className="tech__cell-num">{s.num}</span>
                <h3 className="tech__cell-label">{s.label}</h3>
              </div>
              <p className="tech__cell-desc">{s.desc}</p>
              <div className="tech__chips">
                {s.chips.map((chip) => (
                  <span className="tech__chip" key={chip}>{chip}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
