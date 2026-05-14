import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Process.css'

const STEPS = [
  { num: '01', phase: 'Week 1-2',   name: 'Discovery & Strategy', desc: 'We deep-dive into your goals, users, and technical requirements to define a product roadmap built for results — not assumptions.' },
  { num: '02', phase: 'Week 2-4',   name: 'Architecture & Design', desc: 'Our designers craft pixel-perfect interfaces while engineers design the system architecture — both working in parallel from day one.' },
  { num: '03', phase: 'Week 4-12',  name: 'Development Sprint',   desc: 'Agile 2-week sprints, daily standups, live previews. You\'re always in the loop. No black boxes, no surprises.' },
  { num: '04', phase: 'Week 12-14', name: 'QA & Performance',     desc: 'Rigorous testing across devices, load tests, accessibility audits, and performance optimization before a single user sees it.' },
  { num: '05', phase: 'Ongoing',    name: 'Launch & Scale',       desc: 'We deploy, monitor, and stay by your side post-launch. Your growth is our growth.' },
]

export default function Process() {
  const sectionRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia()
      
      // Pin the left section while the right side scrolls (Desktop only)
      mm.add("(min-width: 992px)", () => {
        ScrollTrigger.create({
          trigger: '.process__inner',
          start: 'top 15%',
          end: 'bottom 85%',
          pin: '.process__head',
          pinSpacing: false,
        })
      })

      // Animate each step precisely as it enters the viewport
      gsap.utils.toArray('.process__step').forEach((step) => {
        gsap.from(step, {
          opacity: 0,
          y: 60,
          scale: 0.95,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
          }
        })
      })
    }, sectionRef)
    
    return () => ctx.revert()
  }, [])

  return (
    <section className="process" ref={sectionRef}>
      <div className="process__inner">
        {/* Left Sticky Header */}
        <div className="process__head">
          <span className="process__eyebrow">
            <span className="process__eyebrow-dot"></span>
            Our Process
          </span>
          <h2 className="process__title">
            From Idea to <br />
            <span className="process__title-italic">Launched Product.</span>
          </h2>
          <p className="process__desc">
            A battle-tested delivery cadence refined across 50+ engagements. Structured enough to ship fast. Flexible enough to adapt.
          </p>
        </div>

        {/* Right Scrolling Steps */}
        <div className="process__steps">
          {STEPS.map((s) => (
            <div className="process__step" key={s.num}>
              <div className="process__step-glow" />

              <div className="process__step-header">
                <span className="process__step-num">{s.num}</span>
                <span className="process__step-phase">{s.phase}</span>
              </div>
              
              <h3 className="process__step-name">{s.name}</h3>
              <p className="process__step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
