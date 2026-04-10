import { motion, useScroll, useSpring } from 'framer-motion'
import { Compass, Layers, Code2, ShieldCheck, Rocket } from 'lucide-react'
import { useRef } from 'react'
import './styles/Process.css'

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We deep-dive into your goals, users, and technical requirements to define a product roadmap built for results — not assumptions.',
      icon: Compass,
      duration: 'Week 1-2',
    },
    {
      number: '02',
      title: 'Architecture & Design',
      description: 'Our designers craft pixel-perfect interfaces while engineers design the system architecture — both working in parallel from day one.',
      icon: Layers,
      duration: 'Week 2-4',
    },
    {
      number: '03',
      title: 'Development Sprint',
      description: 'Agile 2-week sprints, daily standups, live previews. You\'re always in the loop. No black boxes, no surprises.',
      icon: Code2,
      duration: 'Week 4-12',
    },
    {
      number: '04',
      title: 'QA & Performance',
      description: 'Rigorous testing across devices, load tests, accessibility audits, and performance optimization before a single user sees it.',
      icon: ShieldCheck,
      duration: 'Week 12-14',
    },
    {
      number: '05',
      title: 'Launch & Scale',
      description: 'We deploy, monitor, and stay by your side post-launch. Your growth is our growth.',
      icon: Rocket,
      duration: 'Ongoing',
    },
  ]

  // Reference for the entire timeline container
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll progress through the container for drawing the golden line!
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  // Smooth out the scroll line drawing with a physics spring for a premium feel
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section className="kx-process section-padding" id="about">
      <div className="section-container" style={{ position: 'relative' }}>
        {/* Header */}
        <div className="kx-process__header">
          <span className="kx-process__eyebrow">Our Process</span>
          <h2 className="kx-process__title">
            From Idea to
            <br />
            Launched Product
          </h2>
        </div>

        {/* Timeline */}
        <div className="kx-process__timeline-wrap" ref={containerRef}>
          {/* Background Track Line */}
          <div className="kx-process__line-bg" />
          
          {/* Animated Golden Fill Line */}
          <motion.div 
            className="kx-process__line-fill"
            style={{ scaleY, originY: 0 }}
          />

          <div className="kx-process__steps">
            {steps.map((step, idx) => {
              const Icon = step.icon
              const isEven = idx % 2 !== 0 // idx 1 (02) is even/right side

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? 80 : -80, y: 50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`kx-process__step ${isEven ? 'kx-process__step--right' : 'kx-process__step--left'}`}
                >
                  {/* Center Dot Indicator */}
                  <div className="kx-process__dot">
                    <span className="kx-process__dot-inner" />
                  </div>

                  {/* Card Content */}
                  <div className="kx-process__card">
                    {/* Background Number Watermark */}
                    <span className="kx-process__card-bg-num">{step.number}</span>
                    
                    <div className="kx-process__card-glow" />

                    <div className="kx-process__step-header">
                      <div className="kx-process__step-icon">
                        <Icon />
                      </div>
                      <span className="kx-process__step-duration">{step.duration}</span>
                    </div>

                    <h3 className="kx-process__step-title">{step.title}</h3>
                    <p className="kx-process__step-desc">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
