import { useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import NeuralNetwork from './3D/NeuralNetwork'
import './styles/Hero.css'

export default function Hero() {
  // Animation setup
  useEffect(() => {
    // Character reveal animation
    gsap.fromTo(
      '.hero-char',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power2.out',
      }
    )

    // Badge animation
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

    // CTA buttons
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

  const wordVariants = {
    hidden: { opacity: 0, y: 40, rotateX: 90 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { 
      scale: 1.05,
      textShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
      transition: { duration: 0.3 }
    }
  }

  return (
    <section className="kx-hero" id="home">
      {/* Three.js Neural Network Background */}
      <NeuralNetwork />

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
                Live delivery partner for 120+ product teams
              </span>
            </motion.div>

            {/* 3D Interactive Headline */}
            <h1 className="kx-hero__title kx-hero__title-3d">
              <motion.span
                className="hero-char kx-hero__title-word"
                variants={wordVariants}
                whileHover="hover"
              >
                We Engineer
              </motion.span>
              <br />
              <motion.span
                className="hero-char kx-hero__title-word gradient-text kx-hero__title-word--accent"
                variants={wordVariants}
                whileHover="hover"
              >
                Intelligent Systems
              </motion.span>
              <br />
              <motion.span
                className="hero-char kx-hero__title-word"
                variants={wordVariants}
                whileHover="hover"
              >
                That Convert.
              </motion.span>
            </h1>

            <motion.p variants={itemVariants} className="kx-hero__subtitle">
              From AI agents to enterprise platforms, we blend strategy, design,
              and engineering into products that launch fast and scale with confidence.
            </motion.p>

            <motion.div variants={itemVariants} className="kx-hero__actions">
              <motion.a 
                href="#work" 
                className="hero-cta btn-primary kx-hero__primary-btn"
                whileHover={{ scale: 1.05 }}
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                aria-label="View our service blueprint"
              >
                See Service Blueprint
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="kx-hero__trust">
              <p className="kx-hero__trust-label">TRUSTED BY TEAMS AT</p>
              <div className="kx-hero__trust-logos">
                {['Versa AI', 'StackFlow', 'Nexlify', 'Orbito', 'DataSync'].map((company) => (
                  <motion.span
                    key={company}
                    className="kx-hero__trust-chip"
                    whileHover={{ scale: 1.1, y: -2 }}
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

          {/* Right Column - 3D Neural Network Background */}
          <div className="kx-hero__visual-placeholder" />
        </div>
      </div>
    </section>
  )
}
