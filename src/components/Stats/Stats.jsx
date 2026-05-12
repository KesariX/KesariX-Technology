import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Stats.css'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { count: 50,  suffix: '+',  prefix: '',  label: 'Projects Delivered',    sub: 'Successful scalable deployments serving businesses across 1+ countries globally.' },
  { count: 20,  suffix: '+',  prefix: '',  label: 'AI Systems',             sub: 'Custom enterprise AI and ML models actively in production.' },
  { count: 98,  suffix: '%',  prefix: '',  label: 'Client Satisfaction',    sub: 'Consistent client retention with repeat engagements and referrals.' },
  { count: 500, suffix: 'K+', prefix: '₹', label: 'Value Generated',        sub: 'Direct measurable revenue and cost-savings created for our partners.' },
]

export default function Stats() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      sectionRef.current?.querySelectorAll('[data-count]').forEach((el) => {
        const target = parseFloat(el.dataset.count)
        const obj = { v: 0 }
        gsap.to(obj, {
          v: target,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
          onUpdate: () => { el.textContent = Math.round(obj.v) },
        })
      })
      gsap.fromTo('.stats__card', 
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: '.stats__grid', start: 'top 82%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="stats" ref={sectionRef}>
      <div className="stats__inner">
        <div className="stats__head">
          <span className="stats__eyebrow">
            <span className="stats__eyebrow-dot"></span>
            Our Impact
          </span>
          <h2 className="stats__title">
            Measurable <br />
            <span className="stats__title-italic">Business Results.</span>
          </h2>
          <p className="stats__desc">
            We're not just about code; we're about creating tangible value. Here's a look at the numbers that define our partnerships.
          </p>
        </div>
        <div className="stats__grid">
          {STATS.map((s, i) => (
            <div className="stats__card" key={i}>
              <div className="stats__card-glow" />
              <div className="stats__num">
                <span className="stats__prefix">{s.prefix}</span>
                <span data-count={s.count}>0</span>
                <span className="stats__suffix">{s.suffix}</span>
              </div>
              <h3 className="stats__label">{s.label}</h3>
              <p className="stats__sub">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
