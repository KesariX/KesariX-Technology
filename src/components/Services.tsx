import { motion } from 'framer-motion'
import { Brain, Code2, Bot, Settings, Zap } from 'lucide-react'
import { MouseEvent } from 'react'
import './styles/Services.css'

export default function Services() {
  const services = [
    {
      id: 1,
      number: '01',
      icon: Brain,
      title: 'AI Solutions & Machine Learning',
      description: 'We design and deploy custom AI models, LLM integrations, computer vision pipelines, and intelligent automation systems tailored to your business logic.',
      tag: 'Most Popular',
      colSpan: 3,
      gradient: 'linear-gradient(135deg, #D97706, #FBBF24)',
    },
    {
      id: 2,
      number: '02',
      icon: Code2,
      title: 'Software & Web Development',
      description: 'Full-stack applications built with React, Next.js, Node.js, and modern cloud-native architectures. Pixel-perfect, performance-obsessed, and built to scale.',
      colSpan: 3,
      gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
    },
    {
      id: 3,
      number: '03',
      icon: Bot,
      title: 'AI Agents & Chatbots',
      description: 'Autonomous multi-step agents powered by GPT-4, Claude, and custom-trained models that work 24/7 for your workflows.',
      colSpan: 2,
      gradient: 'linear-gradient(135deg, #D97706, #F59E0B)',
    },
    {
      id: 4,
      number: '04',
      icon: Settings,
      title: 'IT Services & Infrastructure',
      description: 'Cloud setup, DevOps pipelines, migrations, and end-to-end IT management for growing companies.',
      colSpan: 2,
      gradient: 'linear-gradient(135deg, #FBBF24, #F59E0B)',
    },
    {
      id: 5,
      number: '05',
      icon: Zap,
      title: 'Process Automation',
      description: 'Replace manual bottlenecks with intelligent RPA workflows, API integrations, and automation systems.',
      colSpan: 2,
      gradient: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <section className="kx-services section-padding" id="services">
      <div className="section-container">
        {/* Header */}
        <div className="kx-services__header">
          <span className="kx-services__eyebrow">What We Do</span>
          <h2 className="kx-services__title">
            End-to-End
            <br />
            Digital Engineering
          </h2>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="kx-services__grid"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className={`kx-services__card kx-services__card--span-${service.colSpan}`}
                onMouseMove={handleMouseMove}
              >
                {/* Background Number */}
                <span className="kx-services__bg-number">{service.number}</span>

                {/* Hover glow */}
                <div className="kx-services__card-glow" />

                {/* Content */}
                <div className="kx-services__card-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    {/* Icon */}
                    <div className="kx-services__icon" style={{ background: service.gradient }}>
                      <Icon />
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <div className="kx-services__card-header">
                      <h3 className="kx-services__card-title">{service.title}</h3>
                      {service.tag && (
                        <span className="kx-services__tag">{service.tag}</span>
                      )}
                    </div>
                    <p className="kx-services__card-desc">{service.description}</p>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="kx-services__arrow">→</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
