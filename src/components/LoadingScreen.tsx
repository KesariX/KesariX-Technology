import { useEffect, useState, memo } from 'react'
import { motion } from 'framer-motion'
import './styles/LoadingScreen.css'

const LoadingScreen = memo(function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Animate progress bar with natural easing, capped at 90%
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 85) {
          return Math.min(prev + Math.random() * 20, 85)
        }
        return prev
      })
    }, 250)

    // Auto-exit after 3 seconds
    const exitTimer = setTimeout(() => {
      setProgress(100)
      setTimeout(() => setIsExiting(true), 300)
    }, 3000)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(exitTimer)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0, 1] },
    },
  }

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1, background: '#F0EAE0' }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{ pointerEvents: isExiting ? 'none' : 'auto', background: '#F0EAE0' }}
    >
      {/* Animated gradient background */}
      <div className="loading-screen__bg">
        <div className="loading-screen__gradient" />
        <motion.div
          className="loading-screen__glow loading-screen__glow--1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="loading-screen__glow loading-screen__glow--2"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.div
          className="loading-screen__glow loading-screen__glow--3"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      {/* Content Container */}
      <motion.div
        className="loading-screen__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Brand Logo Area */}
        <motion.div
          className="loading-screen__brand"
          variants={itemVariants}
        >
          {/* Animated ring backdrop */}
          <motion.div
            className="loading-screen__ring"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />

          {/* Brand Text */}
          <div className="loading-screen__text-wrapper">
            <motion.div
              className="loading-screen__text"
              initial={{ letterSpacing: '-0.05em', opacity: 0, y: 10 }}
              animate={{ letterSpacing: '0.02em', opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
            >
              <span className="loading-screen__text-main">KesariX</span>
              <span className="loading-screen__text-accent">Technology</span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="loading-screen__tagline"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: 'easeOut' }}
            >
              Engineering Intelligent Systems
            </motion.p>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="loading-screen__progress-container"
          variants={itemVariants}
        >
          <div className="loading-screen__progress-track">
            <motion.div
              className="loading-screen__progress-bar"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>
          <motion.p
            className="loading-screen__progress-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {Math.round(progress)}%
          </motion.p>
        </motion.div>

        {/* Floating Particles */}
        <div className="loading-screen__particles">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="loading-screen__particle"
              initial={{
                opacity: 0.2 + Math.random() * 0.3,
                x: Math.random() * 60 - 30,
                y: Math.random() * 60 - 30,
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                x: Math.random() * 150 - 75,
                y: Math.random() * 150 - 75,
              }}
              transition={{
                duration: 5 + i * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                '--particle-color': [
                  '#3b82f6',
                  '#8b5cf6',
                  '#ec4899',
                  '#f59e0b',
                  '#10b981',
                  '#06b6d4',
                ][i % 6],
              } as React.CSSProperties}
            />
          ))}
        </div>
      </motion.div>

      {/* Animated dots indicator */}
      <motion.div
        className="loading-screen__dots"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={i}
            className="loading-screen__dot"
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
})

export default LoadingScreen