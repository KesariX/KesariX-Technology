import { motion } from 'framer-motion'
import { Brain, Code2, Bot, Settings, Zap } from 'lucide-react'
import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/Services.css'
export default function Services() {
  const navigate = useNavigate()

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
      link: '/services/ai-solutions',
    },
    {
      id: 2,
      number: '02',
      icon: Code2,
      title: 'Software & Web Development',
      description: 'Full-stack applications built with React, Next.js, Node.js, and modern cloud-native architectures. Pixel-perfect, performance-obsessed, and built to scale.',
      colSpan: 3,
      gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
      link: '/services/web-development',
    },
    {
      id: 3,
      number: '03',
      icon: Bot,
      title: 'AI Agents & Chatbots',
      description: 'Autonomous multi-step agents powered by GPT-4, Claude, and custom-trained models that work 24/7 for your workflows.',
      colSpan: 2,
      gradient: 'linear-gradient(135deg, #D97706, #F59E0B)',
      link: '/services/ai-agents',
    },
    {
      id: 4,
      number: '04',
      icon: Settings,
      title: 'IT Services & Infrastructure',
      description: 'Cloud setup, DevOps pipelines, migrations, and end-to-end IT management for growing companies.',
      colSpan: 2,
      gradient: 'linear-gradient(135deg, #FBBF24, #F59E0B)',
      link: '/services/it-services',
    },
    {
      id: 5,
      number: '05',
      icon: Zap,
      title: 'Process Automation',
      description: 'Replace manual bottlenecks with intelligent RPA workflows, API integrations, and automation systems.',
      colSpan: 2,
      gradient: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
      link: '/services/automation',
    },
  ]

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const titleLineVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut', delay: 0.1 },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1], // Custom spring curve
      },
    },
  }

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
  }

  const arrowVariants = {
    hidden: { scale: 0.6, opacity: 0, rotate: -45 },
    visible: { scale: 1, opacity: 1, rotate: 0 },
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
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="kx-services__header"
        >
          <motion.span
            className="kx-services__eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            What We Do
          </motion.span>
          <motion.h2
            className="kx-services__title"
            variants={titleLineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.span
              style={{ display: 'inline-block' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            >
              End-to-End
            </motion.span>
            <br />
            <motion.span
              className="gradient-text"
              style={{ display: 'inline-block' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            >
              Digital Engineering
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="kx-services__grid"
        >
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className={`kx-services__card kx-services__card--span-${service.colSpan} ${service.link ? 'cursor-pointer' : ''}`}
                onMouseMove={handleMouseMove}
                onClick={() => service.link && navigate(service.link)}
                whileHover={{ y: -8 }}
              >
                {/* Background Number */}
                <motion.span
                  className="kx-services__bg-number"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.02 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.08 }}
                  whileHover={{ scale: 1.08, color: 'rgba(217, 119, 6, 0.08)' }}
                >
                  {service.number}
                </motion.span>

                {/* Hover glow */}
                <motion.div
                  className="kx-services__card-glow"
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                />

                {/* Content */}
                <div className="kx-services__card-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    {/* Icon */}
                    <motion.div
                      className="kx-services__icon"
                      style={{ background: service.gradient }}
                      variants={iconVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 + idx * 0.08 }}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        <Icon />
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Text */}
                  <div>
                    <motion.div
                      className="kx-services__card-header"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 + idx * 0.08, duration: 0.5 }}
                    >
                      <h3 className="kx-services__card-title">{service.title}</h3>
                      {service.tag && (
                        <motion.span
                          className="kx-services__tag"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + idx * 0.08 }}
                        >
                          {service.tag}
                        </motion.span>
                      )}
                    </motion.div>
                    <motion.p
                      className="kx-services__card-desc"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.38 + idx * 0.08, duration: 0.6 }}
                    >
                      {service.description}
                    </motion.p>
                  </div>
                </div>

                {/* Hover indicator */}
                <motion.div
                  className="kx-services__arrow"
                  variants={arrowVariants}
                  whileHover="visible"
                  initial="hidden"
                >
                  →
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
