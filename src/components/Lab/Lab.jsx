import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Lab.css'

const TECHNOLOGIES = [
  {
    num: '01',
    name: 'AI & ML',
    accent: 'Models',
    desc: 'Custom trained language models, computer vision, and predictive analytics that learn from your data.',
    uses: ['OpenAI', 'PyTorch', 'TensorFlow', 'LangChain'],
  },
  {
    num: '02',
    name: 'Modern',
    accent: 'Frontend',
    desc: 'Lightning-fast, accessible, and responsive user interfaces built on the edge.',
    uses: ['React', 'Next.js', 'Vue', 'GSAP'],
  },
  {
    num: '03',
    name: 'Scalable',
    accent: 'Backend',
    desc: 'Robust microservices and APIs engineered for high availability and security.',
    uses: ['Node.js', 'Python', 'Go', 'GraphQL'],
  },
  {
    num: '04',
    name: 'Cloud',
    accent: 'Infrastructure',
    desc: 'Automated CI/CD pipelines, containerization, and serverless architectures.',
    uses: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
  },
]

export default function Lab() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia()
      
      // Pin the left section while the right side scrolls (Desktop only)
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: '.lab__inner',
          start: 'top 15%',
          end: 'bottom 85%',
          pin: '.lab__head',
          pinSpacing: false,
        })
      })

      gsap.fromTo('.lab__eyebrow, .lab__head h3, .lab__head p', 
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: '.lab__head', start: 'top 82%' },
        }
      )
      
      gsap.fromTo('.lab__card', 
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: '.lab__stack', start: 'top 80%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="lab" id="lab" ref={sectionRef}>
      <div className="lab__bg" />
      <div className="lab__inner">
        <div className="lab__head">
          <span className="lab__eyebrow">
            <span className="lab__eyebrow-dot"></span>
            The Lab
          </span>
          <h3>Technology <br /><em>We Master</em></h3>
          <p>
            We build with the tools that define tomorrow. No hype, just battle-tested technologies engineered for performance, scale, and intelligence.
          </p>
        </div>
        
        <div className="lab__stack">
          {TECHNOLOGIES.map((tech) => (
            <div className="lab__card" key={tech.num}>
              <div className="lab__card-glow" />
              <div className="lab__card-inner">
                <div className="lab__card-content">
                  <div className="lab__card-head">
                    <span className="lab__card-num">{tech.num}</span>
                    <h4 className="lab__card-name">{tech.name} <br/><em>{tech.accent}</em></h4>
                  </div>
                  <p className="lab__card-desc">{tech.desc}</p>
                </div>
                <div className="lab__card-uses">
                  {tech.uses.map(use => (
                    <span className="lab__chip" key={use}>{use}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
