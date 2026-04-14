import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import NeuralNetwork from './3D/NeuralNetwork'
import './styles/Hero.css'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  // 3D Parallax & Tilt Setup
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth out the mouse movement for the 3D tilt effect
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 })

  // Transform mouse position to rotation angles
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15])
  
  // Transform for dynamic glow position following the cursor
  const glowX = useTransform(mouseX, [-0.5, 0.5], [0, 100])
  const glowY = useTransform(mouseY, [-0.5, 0.5], [0, 100])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    // Calculate relative mouse position between -0.5 and 0.5
    const relativeX = (e.clientX - rect.left) / rect.width - 0.5
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5
    
    x.set(relativeX)
    y.set(relativeY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  // Animation setup - variants defined below
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  // Character animation variants
  const charVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      scale: 1,
      transition: { 
        type: 'spring',
        damping: 12,
        stiffness: 100,
      } 
    },
  }

  const lineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04
      }
    }
  }

  const renderAnimatedText = (text: string, className = '') => {
    return (
      <motion.span 
        className={`inline-block whitespace-nowrap ${className}`}
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
            className="inline-block"
            style={{ 
              display: char === ' ' ? 'inline' : 'inline-block',
              marginRight: char === ' ' ? '0.3em' : '0' 
            }}
            whileHover={{
              scale: 1.15,
              color: 'var(--accent-primary)',
              rotateY: 15,
              textShadow: '0 0 15px rgba(217, 119, 6, 0.8)',
              transition: { duration: 0.2 }
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
            style={{ zIndex: 10, position: 'relative', perspective: '1200px' }}
          >
            <motion.div variants={itemVariants} className="hero-badge kx-hero__badge">
              <span className="kx-hero__badge-dot" />
              <span className="kx-hero__badge-text">
                Live delivery partner for 120+ product teams
              </span>
            </motion.div>

            {/* True 3D Interactive Headline Container */}
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
              {/* Dynamic Glow Effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(217,119,6,0.15) 0%, transparent 60%)`,
                  transform: 'translateZ(-50px)',
                  filter: 'blur(20px)'
                }}
              />

              <h1 
                className="kx-hero__title kx-hero__title-3d m-0"
                style={{ transform: 'translateZ(50px)', transformStyle: 'preserve-3d' }}
              >
                {renderAnimatedText("We Engineer")}
                <br />
                {renderAnimatedText("Intelligent Systems", "gradient-text kx-hero__title-word--accent")}
                <br />
                {renderAnimatedText("That Convert.")}
              </h1>
            </motion.div>

            <motion.p 
              variants={itemVariants} 
              className="kx-hero__subtitle"
              style={{ transform: 'translateZ(20px)' }}
            >
              From AI agents to enterprise platforms, we blend strategy, design,
              and engineering into products that launch fast and scale with confidence.
            </motion.p>

            <motion.div 
              variants={itemVariants} 
              className="kx-hero__actions"
              style={{ transform: 'translateZ(30px)' }}
            >
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
                {['Versa AI', 'StackFlow', 'Nexlify', 'Orbito', 'DataSync'].map((company) => (
                  <motion.span
                    key={company}
                    className="kx-hero__trust-chip"
                    whileHover={{ scale: 1.1, y: -2, color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }}
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
