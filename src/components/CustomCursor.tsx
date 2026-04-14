import { useEffect, useState, useRef, memo } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import './styles/CustomCursor.css'

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

export default memo(function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const [trail, setTrail] = useState<TrailPoint[]>([])

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const prevMouseX = useRef(-100)
  const prevMouseY = useRef(-100)
  const particleIdRef = useRef(0)
  const trailIdRef = useRef(0)

  // Spring configurations - faster for smoother feel
  const springConfig = { damping: 24, stiffness: 220 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      const newX = e.clientX
      const newY = e.clientY

      // Calculate velocity
      const vx = newX - prevMouseX.current
      const vy = newY - prevMouseY.current

      // Spawn trail particles with theme colors
      if (Math.random() > 0.55) {
        setTrail((prev) => {
          const newTrail = [
            ...prev,
            {
              id: trailIdRef.current++,
              x: newX,
              y: newY,
              age: 0,
            },
          ]
          return newTrail.length > 15 ? newTrail.slice(-15) : newTrail
        })
      }

      // Spawn movement particles occasionally
      if (Math.random() > 0.75) {
        const angle = Math.atan2(vy, vx)
        const speed = Math.sqrt(vx * vx + vy * vy)
        const numParticles = Math.min(3, Math.floor(speed / 2))

        for (let i = 0; i < numParticles; i++) {
          const spreadAngle = angle + (Math.random() - 0.5) * Math.PI
          const spreadSpeed = 2 + Math.random() * 3
          setParticles((prev) => [
            ...prev,
            {
              id: particleIdRef.current++,
              x: newX,
              y: newY,
              vx: Math.cos(spreadAngle) * spreadSpeed,
              vy: Math.sin(spreadAngle) * spreadSpeed,
              life: 1,
              size: 3 + Math.random() * 3,
            },
          ])
        }
      }

      prevMouseX.current = newX
      prevMouseY.current = newY
      mouseX.set(newX)
      mouseY.set(newY)
      if (!isVisible) setIsVisible(true)
    }

    const onMouseDown = () => setIsClicking(true)
    const onMouseUp = () => setIsClicking(false)

    const handleHoverEnter = () => setIsHovering(true)
    const handleHoverLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', moveMouse)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverEnter)
      el.addEventListener('mouseleave', handleHoverLeave)
    })

    document.body.style.cursor = 'none'

    // Particle animation loop
    const animationInterval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.1, // gravity
            life: p.life - 0.02,
          }))
          .filter((p) => p.life > 0),
      )

      setTrail((prev) =>
        prev
          .map((t) => ({
            ...t,
            age: t.age + 1,
          }))
          .filter((t) => t.age < 30),
      )
    }, 16)

    return () => {
      clearInterval(animationInterval)
      window.removeEventListener('mousemove', moveMouse)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverEnter)
        el.removeEventListener('mouseleave', handleHoverLeave)
      })
      document.body.style.cursor = 'auto'
    }
  }, [isVisible, mouseX, mouseY])

  return (
    <div className={`kx-cursor-system ${isVisible ? 'visible' : ''}`}>
      {/* Trail effect */}
      <svg className="kx-cursor-trail" width="100%" height="100%" viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}>
        {trail.map((point, idx) => {
          const nextPoint = trail[idx + 1]
          if (!nextPoint) return null

          const opacity = 1 - point.age / 30
          const strokeWidth = 2 * opacity

          return (
            <line
              key={point.id}
              x1={point.x}
              y1={point.y}
              x2={nextPoint.x}
              y2={nextPoint.y}
              stroke={`rgba(217, 119, 6, ${opacity * 0.6})`}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
          )
        })}
      </svg>

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="kx-cursor-particle"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.life,
          }}
        />
      ))}

      {/* Main cursor ring with morphing effect */}
      <motion.div
        className={`kx-cursor-ring ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div className="kx-cursor-ring__outer" />
        <div className="kx-cursor-ring__middle" />
        <div className="kx-cursor-ring__inner" />
      </motion.div>

      {/* Core dot with glow */}
      <motion.div
        className={`kx-cursor-dot ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div className="kx-cursor-dot__core" />
        <div className="kx-cursor-dot__glow" />
      </motion.div>

      {/* Click ripple effect */}
      {isClicking && (
        <motion.div
          className="kx-cursor-ripple"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ scale: 0.5, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      )}
    </div>
  )
})
