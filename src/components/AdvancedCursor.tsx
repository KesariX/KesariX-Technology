import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useMagneticHover } from '../hooks/useMagneticHover'
import './AdvancedCursor.css'

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  life: number
  size: number
}

interface TrailPoint {
  id: number
  x: number
  y: number
  age: number
}

export default function AdvancedCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [scale, setScale] = useState(1)
  const [particles, setParticles] = useState<Particle[]>([])
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const [rotationAngle, setRotationAngle] = useState(0)

  const rawMouseX = useRef(0)
  const rawMouseY = useRef(0)
  const particleIdRef = useRef(0)
  const trailIdRef = useRef(0)

  // Core motion
  const coreX = useMotionValue(-100)
  const coreY = useMotionValue(-100)

  // Aura motion with spring delay
  const auraX = useMotionValue(-100)
  const auraY = useMotionValue(-100)
  const auraXSpring = useSpring(auraX, { damping: 22, stiffness: 280 })
  const auraYSpring = useSpring(auraY, { damping: 22, stiffness: 280 })

  // Outer glow motion (heavier spring)
  const glowX = useMotionValue(-100)
  const glowY = useMotionValue(-100)
  const glowXSpring = useSpring(glowX, { damping: 28, stiffness: 160 })
  const glowYSpring = useSpring(glowY, { damping: 28, stiffness: 160 })

  const { isHovering, targetBounds } = useMagneticHover()

  // Magnetic attraction
  useEffect(() => {
    if (isHovering && targetBounds) {
      const centerX = targetBounds.left + targetBounds.width / 2
      const centerY = targetBounds.top + targetBounds.height / 2
      const distance = Math.hypot(rawMouseX.current - centerX, rawMouseY.current - centerY)

      if (distance < 80) {
        auraX.set(centerX)
        auraY.set(centerY)
        glowX.set(centerX)
        glowY.set(centerY)

        const targetScale = Math.min(1 + targetBounds.width / 120, 2.2)
        setScale(targetScale)
      } else {
        auraX.set(rawMouseX.current)
        auraY.set(rawMouseY.current)
        glowX.set(rawMouseX.current)
        glowY.set(rawMouseY.current)
        setScale(1.15)
      }
    } else {
      auraX.set(rawMouseX.current)
      auraY.set(rawMouseY.current)
      glowX.set(rawMouseX.current)
      glowY.set(rawMouseY.current)
      setScale(1)
    }
  }, [isHovering, targetBounds, auraX, auraY, glowX, glowY])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      rawMouseX.current = e.clientX
      rawMouseY.current = e.clientY

      coreX.set(e.clientX)
      coreY.set(e.clientY)

      if (!isHovering) {
        auraX.set(e.clientX)
        auraY.set(e.clientY)
        glowX.set(e.clientX)
        glowY.set(e.clientY)
      }

      // Update rotation for visual effect
      setRotationAngle((prev) => (prev + 2) % 360)

      // Spawn trail particles
      if (Math.random() > 0.7) {
        setTrail((prev) => {
          const newTrail = [
            ...prev,
            {
              id: trailIdRef.current++,
              x: e.clientX,
              y: e.clientY,
              age: 0,
            },
          ]
          return newTrail.length > 12 ? newTrail.slice(-12) : newTrail
        })
      }

      // Spawn particles
      if (Math.random() > 0.8) {
        for (let i = 0; i < 2; i++) {
          const angle = Math.random() * Math.PI * 2
          const speed = 1.5 + Math.random() * 2.5
          setParticles((prev) => [
            ...prev,
            {
              id: particleIdRef.current++,
              x: e.clientX,
              y: e.clientY,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed,
              life: 1,
              size: 2 + Math.random() * 2,
            },
          ])
        }
      }

      if (!isVisible) setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown, { passive: true })
    window.addEventListener('mouseup', handleMouseUp, { passive: true })

    document.body.style.cursor = 'none'

    // Particle animation loop
    const animationInterval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.15,
            life: p.life - 0.025,
          }))
          .filter((p) => p.life > 0),
      )

      setTrail((prev) =>
        prev
          .map((t) => ({
            ...t,
            age: t.age + 1,
          }))
          .filter((t) => t.age < 25),
      )
    }, 16)

    return () => {
      clearInterval(animationInterval)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = 'auto'
    }
  }, [isVisible, isHovering, auraX, auraY, glowX, glowY, coreX, coreY])

  return (
    <div className={`kx-premium-cursor ${isVisible ? 'visible' : ''}`}>
      {/* SVG Trail Effect */}
      <svg className="kx-cursor-trail" width="100%" height="100%">
        <defs>
          <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(217, 119, 6, 0.8)" />
            <stop offset="100%" stopColor="rgba(245, 158, 11, 0.2)" />
          </linearGradient>
        </defs>
        {trail.map((point, idx) => {
          const nextPoint = trail[idx + 1]
          if (!nextPoint) return null

          const opacity = 1 - point.age / 25
          const strokeWidth = 2.5 * opacity

          return (
            <line
              key={point.id}
              x1={point.x}
              y1={point.y}
              x2={nextPoint.x}
              y2={nextPoint.y}
              stroke={`rgba(217, 119, 6, ${opacity * 0.7})`}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              filter="drop-shadow(0 0 4px rgba(217, 119, 6, 0.3))"
            />
          )
        })}
      </svg>

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="kx-premium-particle"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.life,
          }}
        />
      ))}

      {/* Ultra Outer Glow (Heavy spring, far behind) */}
      <motion.div
        className={`kx-premium-outer-glow ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          x: glowXSpring,
          y: glowYSpring,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? scale * 1.5 : scale * 0.9,
        }}
      />

      {/* Middle Aura Ring (Medium spring) */}
      <motion.div
        className={`kx-premium-aura ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          x: auraXSpring,
          y: auraYSpring,
          translateX: '-50%',
          translateY: '-50%',
          scale: scale,
          rotate: rotationAngle,
        }}
      >
        <div className="kx-premium-aura__ring-1" />
        <div className="kx-premium-aura__ring-2" />
        <div className="kx-premium-aura__glow" />
      </motion.div>

      {/* Core Dot (Zero latency) */}
      <motion.div
        className={`kx-premium-core ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          x: coreX,
          y: coreY,
          translateX: '-50%',
          translateY: '-50%',
          mixBlendMode: isHovering ? 'screen' : 'lighten',
        }}
      >
        <div className="kx-premium-core__dot" />
        <div className="kx-premium-core__inner-glow" />
        <div className="kx-premium-core__ring-pulse" />
      </motion.div>

      {/* Click Impact Wave */}
      {isClicking && (
        <motion.div
          className="kx-premium-impact"
          style={{
            x: coreX,
            y: coreY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ scale: 0.3, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      )}
    </div>
  )
}
