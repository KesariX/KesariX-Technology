import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import './styles/CustomCursor.css'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  // Motion values for smooth tracking
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Spring configuration for the outer ring (high quality lag)
  const springConfig = { damping: 25, stiffness: 200 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const onMouseDown = () => setIsClicking(true)
    const onMouseUp = () => setIsClicking(false)

    const handleHoverEnter = () => setIsHovering(true)
    const handleHoverLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', moveMouse)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    // Add listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverEnter)
      el.addEventListener('mouseleave', handleHoverLeave)
    })

    // Hide the real cursor
    document.body.style.cursor = 'none'

    return () => {
      window.removeEventListener('mousemove', moveMouse)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverEnter)
        el.removeEventListener('mouseleave', handleHoverLeave)
      })
      document.body.style.cursor = 'auto'
    }
  }, [isVisible])

  return (
    <div className={`kx-cursor-system ${isVisible ? 'visible' : ''}`}>
      {/* 1. The Inner Dot (Fast, zero lag) */}
      <motion.div
        className="kx-cursor-dot"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* 2. The Outer Ring (Spring physics, beautiful lag) */}
      <motion.div
        className={`kx-cursor-ring ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div className="kx-cursor-ring__inner" />
      </motion.div>
    </div>
  )
}
