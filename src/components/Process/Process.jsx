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
  const stepsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ambient orb animation
      gsap.to('.pr-ambient__orb--1', {
        x: '8vw',
        y: '-8vh',
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      gsap.to('.pr-ambient__orb--2', {
        x: '-8vw',
        y: '8vh',
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      // Header reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.pr-header',
          start: 'top 80%',
        }
      })

      tl.fromTo('.pr-header__eyebrow',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
      ).fromTo('.pr-header__title .line',
        { opacity: 0, y: 50, rotationX: -30 },
        { opacity: 1, y: 0, rotationX: 0, duration: 1.2, stagger: 0.15, ease: 'expo.out' },
        "-=0.6"
      ).fromTo('.pr-header__desc',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        "-=0.8"
      )

      // Timeline central line reveal
      gsap.fromTo('.pr-timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top center',
          ease: 'none',
          scrollTrigger: {
            trigger: '.pr-timeline',
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: true
          }
        }
      )

      // Steps sequence & parallax
      stepsRef.current.forEach((step, index) => {
        if (!step) return;

        gsap.fromTo(step,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
            }
          }
        )

        // Subtle desktop parallax for overlapping cards
        let mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          // Even elements move slightly faster to emphasize overlapping depth
          const speed = index % 2 === 0 ? 60 : 30;
          gsap.to(step, {
            y: -speed,
            ease: 'none',
            scrollTrigger: {
              trigger: '.pr-timeline',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
            }
          })
        });
      })
    }, sectionRef)
    
    return () => ctx.revert()
  }, [])

  const handleMouseMove = (e, cardElement) => {
    if (!cardElement) return;
    const rect = cardElement.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardElement.style.setProperty('--mouse-x', `${x}px`)
    cardElement.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <section className="process-premium" id="process" ref={sectionRef}>
      
      {/* Ambient Atmosphere */}
      <div className="pr-ambient" aria-hidden="true">
        <div className="pr-ambient__orb pr-ambient__orb--1" />
        <div className="pr-ambient__orb pr-ambient__orb--2" />
        <div className="pr-ambient__noise" />
      </div>

      <div className="pr-container">
        {/* Cinematic Header */}
        <div className="pr-header">
          <div className="pr-header__eyebrow">
            <span className="pr-eyebrow-dot" /> Methodology
          </div>
          <h2 className="pr-header__title">
            <div className="line" style={{ perspective: '1000px' }}>From Idea To</div>
            <div className="line" style={{ perspective: '1000px' }}>
              <em className="italic-accent--blue">Launched Product.</em>
            </div>
          </h2>
          <p className="pr-header__desc">
            A battle-tested delivery cadence refined across 5+ engagements. Structured enough to ship fast. Flexible enough to adapt.
          </p>
        </div>

        {/* Asymmetrical Waterfall Timeline */}
        <div className="pr-timeline">
          <div className="pr-timeline-line" aria-hidden="true" />

          {STEPS.map((s, i) => (
            <div 
              className="pr-step" 
              key={s.num}
              ref={el => stepsRef.current[i] = el}
              onMouseMove={(e) => handleMouseMove(e, stepsRef.current[i])}
            >
              {/* Mouse-reactive glow layer */}
              <div className="pr-step__glow" aria-hidden="true" />
              
              {/* Massive background number */}
              <div className="pr-step__bg-num" aria-hidden="true">{s.num}</div>

              <div className="pr-step__content">
                <div className="pr-step__meta">
                  <span className="pr-step__phase">{s.phase}</span>
                  <span className="pr-step__line" aria-hidden="true" />
                </div>
                
                <h3 className="pr-step__name">{s.name}</h3>
                <p className="pr-step__desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
