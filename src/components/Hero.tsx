import { useRef, lazy, Suspense } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import './styles/Hero.css'

const NeuralNetwork = lazy(() => import('./3D/NeuralNetwork'))

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15])

  const glowX = useTransform(mouseX, [-0.5, 0.5], [0, 100])
  const glowY = useTransform(mouseY, [-0.5, 0.5], [0, 100])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  // ── ROOT CAUSE FIX ───────────────────────────────────────────────────────
  // Old code: spring with damping:12 + rotateX:-90 on every character.
  // damping:12 = very bouncy spring. In dev mode the React overhead slows
  // rendering enough to hide the oscillation. In Vercel's production build
  // Framer Motion runs at full speed and every character visibly bounces
  // up and down — that's the "transitions" you're seeing live.
  //
  // Fix: swap to a cubic-bezier tween (no spring physics = no bounce).
  // easeOutExpo [0.22,1,0.36,1] gives the same snappy-then-settle feel
  // without any oscillation. Also removed rotateX and preserve-3d from
  // individual character spans — those 3D contexts compounded the problem.
  // ─────────────────────────────────────────────────────────────────────────
  const charVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const lineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 },
    },
  }

  const renderAnimatedText = (text: string, className = '') => {
    return (
      <motion.span
        className={`inline-block whitespace-nowrap ${className}`}
        variants={lineVariants}
        initial="hidden"
        animate="visible"
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
            className="inline-block"
            style={{
              display: char === ' ' ? 'inline' : 'inline-block',
              marginRight: char === ' ' ? '0.3em' : '0',
            }}
            whileHover={{
              scale: 1.12,
              color: 'var(--accent-primary)',
              textShadow: '0 0 15px rgba(217, 119, 6, 0.8)',
              transition: { duration: 0.15 },
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    )
  }

  return (
    <section className="kx-hero" id="home">
      <Suspense fallback={null}>
        <NeuralNetwork />
      </Suspense>

      <div className="section-container kx-hero__container">
        <div className="kx-hero__grid">
          {/* Left Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="kx-hero__content"
            style={{ zIndex: 10, position: 'relative' }}
          >
            <motion.div variants={itemVariants} className="hero-badge kx-hero__badge">
              <span className="kx-hero__badge-dot" />
              <span className="kx-hero__badge-text">
                Live delivery partner for 5+ product teams
              </span>
            </motion.div>

            {/* 3D tilt stays on the wrapper — NOT on h1 or character spans */}
            <motion.div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative cursor-pointer py-4"
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Cursor-tracked radial glow */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(217,119,6,0.15) 0%, transparent 60%)`,
                  transform: 'translateZ(-50px)',
                  filter: 'blur(20px)',
                }}
              />

              {/* Removed translateZ(50px) + preserve-3d from h1 — those styles
                  pushed each character into its own 3D layer and amplified the
                  spring bounce significantly in the production bundle. */}
              <h1 className="kx-hero__title kx-hero__title-3d m-0">
                {renderAnimatedText('We Engineer')}
                <br />
                {renderAnimatedText(
                  'Intelligent Systems',
                  'gradient-text kx-hero__title-word--accent'
                )}
                <br />
                {renderAnimatedText('That Convert.')}
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="kx-hero__subtitle">
              From AI agents to enterprise platforms, we blend strategy, design,
              and engineering into products that launch fast and scale with confidence.
            </motion.p>

            <motion.div variants={itemVariants} className="kx-hero__actions">
              <motion.a
                href="#work"
                className="hero-cta btn-primary kx-hero__primary-btn"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(217, 119, 6, 0.6)' }}
                whileTap={{ scale: 0.98 }}
                aria-label="Explore our project portfolio"
              >
                <span className="btn-text">Explore Our Work</span>
                <motion.span
                  className="btn-glow"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.a>
              <motion.a
                href="#services"
                className="hero-cta btn-ghost kx-hero__ghost-btn"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(217, 119, 6, 0.1)' }}
                whileTap={{ scale: 0.98 }}
                aria-label="View our service blueprint"
              >
                See Service Blueprint
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="kx-hero__trust">
              <p className="kx-hero__trust-label">TRUSTED BY TEAMS AT</p>
              <div className="kx-hero__trust-logos">
                {[
                  'Wercatalyst',
                  'Neha Engineering Works',
                  'Shiv Krishna Engineers',
                  'BIT Bharuch',
                  'chronagen technophant',
                ].map((company) => (
                  <motion.span
                    key={company}
                    className="kx-hero__trust-chip"
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                      color: 'var(--accent-primary)',
                      borderColor: 'var(--accent-primary)',
                    }}
                    transition={{ duration: 0.2 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    {company}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column — Three.js canvas fills via absolute positioning */}
          <div className="kx-hero__visual-placeholder" />
        </div>
      </div>
    </section>
  )
}