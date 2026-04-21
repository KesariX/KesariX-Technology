import { motion } from 'framer-motion'
import { useRef, useState, MouseEvent, useEffect } from 'react'
import { Globe, Cpu, HeartHandshake, TrendingUp } from 'lucide-react'
import './styles/Stats.css'

// Simple counter component for animated numbers
function AnimatedNumber({ target, duration = 2500, delay = 0 }: { target: number; duration?: number; delay?: number }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const startTime = Date.now()
      const interval = setInterval(() => {
        const now = Date.now()
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        // Easeout expo
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
        setCount(Math.floor(target * eased))
        if (progress === 1) clearInterval(interval)
      }, 16)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timer)
  }, [target, duration, delay])
  
  return <span>{count}</span>
}

export default function Stats() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  const stats = [
    { 
      id: "stat-1", 
      number: 5, 
      label: 'Projects Delivered', 
      suffix: '+', 
      icon: Globe, 
      colSpan: 2,
      desc: 'Successful scalable deployments serving businesses across 1+ countries globally.' 
    },
    { 
      id: "stat-2", 
      number: 3, 
      label: 'AI Systems', 
      suffix: '+', 
      icon: Cpu, 
      colSpan: 1,
      desc: 'Custom enterprise AI and ML models actively in production.' 
    },
    { 
      id: "stat-3", 
      number: 98, 
      label: 'Client Satisfaction', 
      suffix: '%', 
      icon: HeartHandshake, 
      colSpan: 1,
      desc: 'Consistent client retention and satisfaction rate averaged over 5 years.' 
    },
    { 
      id: "stat-4", 
      number: 1, 
      label: 'Value Generated', 
      prefix: '$', 
      suffix: 'K+', 
      icon: TrendingUp, 
      colSpan: 2,
      desc: 'Direct measurable revenue and cost-savings created for our corporate partners.' 
    },
  ]

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section className="kx-stats section-padding">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="kx-stats__header"
        >
          <span className="kx-stats__eyebrow">Our Impact</span>
          <h2 className="kx-stats__title">
            Measurable
            <br />
            Business Results
          </h2>
        </motion.div>

        <motion.div
          ref={statsRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="kx-stats__bento"
          onViewportEnter={() => setInView(true)}
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className={`kx-stats__card kx-stats__card--span-${stat.colSpan}`}
                onMouseMove={handleMouseMove}
              >
                {/* Glow Follower */}
                <div className="kx-stats__card-glow" />
                
                <div className="kx-stats__card-inner">
                  <div className="kx-stats__card-top">
                    <div className="kx-stats__card-icon">
                      <Icon size={24} />
                    </div>
                  </div>
                  
                  <div className="kx-stats__card-bottom">
                    <div className="kx-stats__number-wrap">
                      {stat.prefix && <span className="kx-stats__prefix">{stat.prefix}</span>}
                      <span className="kx-stats__number-val">
                        {inView ? <AnimatedNumber target={stat.number} delay={idx * 200} /> : 0}
                      </span>
                      <span className="kx-stats__suffix">{stat.suffix}</span>
                    </div>
                    <div>
                      <p className="kx-stats__label">{stat.label}</p>
                      <p className="kx-stats__desc">{stat.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
