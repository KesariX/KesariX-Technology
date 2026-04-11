import { useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Activity, Terminal, Globe } from 'lucide-react'
import gsap from 'gsap'
import './styles/Hero.css'

export default function Hero() {
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 1000], [0, 100])

  useEffect(() => {
    gsap.fromTo(
      '.hero-char',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power2.out',
      }
    )

    gsap.fromTo(
      '.hero-badge',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }
    )

    gsap.fromTo(
      '.hero-cta',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.2,
      }
    )
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <section className="kx-hero" id="home">
      <div className="kx-hero__backdrop" />
      <div className="kx-hero__mesh" />

      <div className="section-container kx-hero__container">
        <div className="kx-hero__grid">

          {/* Left Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="kx-hero__content"
          >
            <motion.div variants={itemVariants} className="hero-badge kx-hero__badge">
              <span className="kx-hero__badge-dot" />
              <span className="kx-hero__badge-text">
                Live delivery partner for 120+ product teams
              </span>
            </motion.div>

            <h1 className="kx-hero__title">
              <span className="hero-char kx-hero__title-word">We Engineer</span>
              <br />
              <span className="hero-char kx-hero__title-word gradient-text">Intelligent Systems</span>
              <br />
              <span className="hero-char kx-hero__title-word">That Convert.</span>
            </h1>

            <motion.p variants={itemVariants} className="kx-hero__subtitle">
              From AI agents to enterprise platforms, we blend strategy, design,
              and engineering into products that launch fast and scale with confidence.
            </motion.p>

            <motion.div variants={itemVariants} className="kx-hero__actions">
              <a href="#work" className="hero-cta btn-primary kx-hero__primary-btn" aria-label="Explore our project portfolio">Explore Our Work</a>
              <a href="#services" className="hero-cta btn-ghost kx-hero__ghost-btn" aria-label="View our digital service blueprint">See Service Blueprint</a>
            </motion.div>

            <motion.div variants={itemVariants} className="kx-hero__trust">
              <p className="kx-hero__trust-label">TRUSTED BY TEAMS AT</p>
              <div className="kx-hero__trust-logos">
                {['Versa AI', 'StackFlow', 'Nexlify', 'Orbito', 'DataSync'].map((company) => (
                  <span key={company} className="kx-hero__trust-chip">{company}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Dashboard Column: The Intelligence Cluster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="kx-hero__visual"
            style={{ y: imageY }}
          >
            {/* The 3D Hovering Architecture Cluster */}
            <motion.div
              className="kx-hero__cluster"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="kx-hero__cluster-glow" />

              {/* CARD 1: Analytics Sparkline (Back Right) */}
              <div className="kx-hero__cluster-card kx-hero__card--analytics">
                <div className="kx-hero__card-header">
                  <Activity size={16} className="kx-hero__card-icon amber" />
                  <h4 className="kx-hero__card-title">Live Throughput</h4>
                </div>
                <div className="kx-hero__analytics-body">
                  <p className="kx-hero__card-big-num">2.4M <span>req/s</span></p>
                  <div className="kx-hero__spark-wrap">
                    <svg className="kx-hero__sparkline" viewBox="0 0 200 60" preserveAspectRatio="none">
                      {/* Gradient for sparkline fill */}
                      <defs>
                        <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="rgba(217,119,6,0.5)" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                      <motion.path
                        d="M 0 50 L 20 40 L 40 45 L 60 20 L 80 25 L 100 10 L 120 15 L 140 5 L 160 15 L 180 5 L 200 10 L 200 60 L 0 60 Z"
                        fill="url(#sparkFill)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                      />
                      <motion.path
                        d="M 0 50 L 20 40 L 40 45 L 60 20 L 80 25 L 100 10 L 120 15 L 140 5 L 160 15 L 180 5 L 200 10"
                        fill="none" stroke="var(--accent-primary)" strokeWidth="3" strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 1, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* CARD 2: Agent Terminal (Front Left) */}
              <motion.div
                className="kx-hero__cluster-card kx-hero__card--terminal"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="kx-hero__card-header kx-hero__card-header--mac">
                  <div className="kx-hero__mac-dots">
                    <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
                  </div>
                  <span className="kx-hero__header-text">agent_protocol.sh</span>
                  <Terminal size={14} className="kx-hero__card-icon muted" />
                </div>
                <div className="kx-hero__terminal-body">
                  <p className="kx-hero__term-text">
                    <span className="kx-hero__term-amber">&gt;</span> initialising cluster core...<br />
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 1, 1, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      <span className="kx-hero__term-green">[OK]</span> Model synced via edge.<br />
                      <span className="kx-hero__term-amber">&gt;</span> rerouting dynamic nodes...<br />
                      <span className="kx-hero__term-cursor">_</span>
                    </motion.span>
                  </p>
                </div>
              </motion.div>

              {/* CARD 3: Radar Pulse System (Bottom Right) */}
              <motion.div
                className="kx-hero__cluster-card kx-hero__card--radar"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="kx-hero__card-header">
                  <Globe size={16} className="kx-hero__card-icon green" />
                  <h4 className="kx-hero__card-title">Network Global</h4>
                </div>
                <div className="kx-hero__radar-container">
                  <div className="kx-hero__radar-wrap">
                    <div className="kx-hero__radar-ring ring-1" />
                    <div className="kx-hero__radar-ring ring-2" />
                    <div className="kx-hero__radar-ring ring-3" />
                    <div className="kx-hero__radar-sweep" />
                    {/* Interactive node dots on the map equivalent */}
                    <div className="kx-hero__radar-dot dot-1" />
                    <div className="kx-hero__radar-dot dot-2" />
                    <div className="kx-hero__radar-dot dot-3" />
                  </div>
                  <div className="kx-hero__radar-stats">
                    <div className="kx-hero__radar-stat">
                      <span className="kx-hero__r-label">Latency</span>
                      <span className="kx-hero__r-val">12ms</span>
                    </div>
                    <div className="kx-hero__radar-stat">
                      <span className="kx-hero__r-label">Nodes</span>
                      <span className="kx-hero__r-val">248</span>
                    </div>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
