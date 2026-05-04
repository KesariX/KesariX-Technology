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

  // Header animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut', delay: 0.15 },
    },
  }

  const eyebrowVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  const stepCardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  }

  const dotVariants = {
    hover: {
      scale: 1.25,
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
  }

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
        <motion.div
          className="kx-process__header"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.span
            className="kx-process__eyebrow"
            variants={eyebrowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Process
          </motion.span>
          <motion.h2
            className="kx-process__title"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.span
              style={{ display: 'inline-block' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            >
              From Idea to
            </motion.span>
            <br />
            <motion.span
              className="gradient-text"
              style={{ display: 'inline-block' }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}
            >
              Launched Product
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="kx-process__timeline-wrap" ref={containerRef}>
          {/* Background Track Line */}
          <div className="kx-process__line-bg" />
          
          {/* Animated Golden Fill Line */}
          <motion.div 
            className="kx-process__line-fill"
            style={{ scaleY, originY: 0 }}
          />

          <motion.div
            className="kx-process__steps"
            variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {steps.map((step, idx) => {
              const Icon = step.icon
              const isEven = idx % 2 !== 0 // idx 1 (02) is even/right side

              return (
                <motion.div
                  key={step.number}
                  variants={stepCardVariants}
                  className={`kx-process__step ${isEven ? 'kx-process__step--right' : 'kx-process__step--left'}`}
                  whileHover={{ y: -5 }}
                >
                  {/* Center Dot Indicator */}
                  <motion.div
                    className="kx-process__dot"
                    variants={dotVariants}
                    whileHover="hover"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.15 }}
                  >
                    <motion.span
                      className="kx-process__dot-inner"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: idx * 0.3 }}
                    />
                  </motion.div>

                  {/* Card Content */}
                  <div className="kx-process__card">
                    {/* Background Number Watermark */}
                    <motion.span
                      className="kx-process__card-bg-num"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 0.02 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.15 }}
                      whileHover={{ scale: 1.1, opacity: 0.08 }}
                    >
                      {step.number}
                    </motion.span>
                    
                    <motion.div
                      className="kx-process__card-glow"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />

                    <motion.div
                      className="kx-process__step-header"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 + idx * 0.15, duration: 0.5 }}
                    >
                      <motion.div
                        className="kx-process__step-icon"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <Icon />
                      </motion.div>
                      <motion.span
                        className="kx-process__step-duration"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + idx * 0.15 }}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(217, 119, 6, 0.15)' }}
                      >
                        {step.duration}
                      </motion.span>
                    </motion.div>

                    <motion.h3
                      className="kx-process__step-title"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.37 + idx * 0.15, duration: 0.5 }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p
                      className="kx-process__step-desc"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.39 + idx * 0.15, duration: 0.6 }}
                    >
                      {step.description}
                    </motion.p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
