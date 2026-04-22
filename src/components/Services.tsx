import { type CSSProperties, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Code2,
  Server,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import './styles/Services.css'

type ServiceCard = {
  id: string
  title: string
  description: string
  path: string
  tag: string
  highlights: string[]
  icon: LucideIcon
  layout: 'hero' | 'focus' | 'standard'
  accent: string
  soft: string
}

const services: ServiceCard[] = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Custom LLMs, RAG systems, and production-grade intelligence layers aligned to your business data and workflows.',
    path: '/services/ai-solutions',
    tag: 'Neural Architecture',
    highlights: ['RAG Systems', 'Fine-tuned Models', 'Inference Ops'],
    icon: BrainCircuit,
    layout: 'hero',
    accent: '#d97706',
    soft: '#fff3e4',
  },
  {
    id: 'web-engineering',
    title: 'Web Engineering',
    description: 'High-performance React and Node platforms designed for speed, conversion, and enterprise-level scalability.',
    path: '/services/web-development',
    tag: 'Product Engineering',
    highlights: ['React + TypeScript', 'Scalable APIs', 'Core Web Vitals'],
    icon: Code2,
    layout: 'focus',
    accent: '#ea8c11',
    soft: '#fff7ea',
  },
  {
    id: 'it-infrastructure',
    title: 'IT Infrastructure',
    description: 'Managed cloud, security hardening, and dependable DevOps pipelines to keep your systems resilient at scale.',
    path: '/services/it-services',
    tag: 'Cloud Backbone',
    highlights: ['Cloud Ops', 'Cybersecurity', 'CI/CD Automation'],
    icon: Server,
    layout: 'standard',
    accent: '#ca6f00',
    soft: '#fdf3e2',
  },
  {
    id: 'autonomous-agents',
    title: 'Autonomous Agents',
    description: 'Multi-agent orchestration engines for autonomous execution, decision loops, and reliable handoff to human teams.',
    path: '/services/ai-agents',
    tag: 'Agentic Systems',
    highlights: ['Agent Memory', 'Tool Calling', 'Human-in-the-Loop'],
    icon: Bot,
    layout: 'standard',
    accent: '#dd7d08',
    soft: '#fff5e7',
  },
  {
    id: 'process-automation',
    title: 'Process Automation',
    description: 'Operational pipelines that remove repetitive manual work and synchronize your tools into one reliable flow.',
    path: '/services/automation',
    tag: 'Workflow Engines',
    highlights: ['No-code Integrations', 'API Workflows', 'Ops Optimization'],
    icon: Zap,
    layout: 'standard',
    accent: '#f39a1a',
    soft: '#fff8ed',
  },
]

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      type: 'spring', 
      stiffness: 100, 
      damping: 20,
      staggerChildren: 0.08,
      delayChildren: 0.1
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { type: 'spring', stiffness: 400, damping: 25 },
  },
  tap: {
    scale: 0.98,
    transition: { type: 'spring', stiffness: 400, damping: 25 },
  },
}

const iconWrapVariants = {
  hidden: { scale: 0.5, opacity: 0, rotate: -20 },
  show: { scale: 1, opacity: 1, rotate: 0, transition: { type: 'spring', stiffness: 220, damping: 15 } },
  hover: { rotate: 10, scale: 1.15, transition: { type: 'spring', stiffness: 300 } }
}

const arrowVariants = {
  hidden: { x: -4, y: 4, opacity: 0 },
  show: { x: 0, y: 0, opacity: 1, transition: { type: 'spring', stiffness: 200 } },
  hover: { x: 4, y: -4, scale: 1.1, transition: { type: 'spring', stiffness: 300 } }
}

const chipVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 150 } }
}

const headerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
}

export default function Services() {
  const navigate = useNavigate()
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const handleServiceClick = (path: string) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    navigate(path)
  }

  return (
    <section className="kx-services section-padding" ref={sectionRef} id="services">
      <div className="section-container">
        <motion.div
          className="kx-services__header"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          <motion.span variants={itemVariants} className="section-eyebrow kx-services__eyebrow">Services</motion.span>
          <motion.h2 variants={itemVariants} className="section-title kx-services__title">Built to solve hard business problems.</motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle kx-services__subtitle">
            Every service below mirrors the live navbar structure and routes directly to its dedicated page.
          </motion.p>
        </motion.div>

        <motion.div
          className="kx-services__grid"
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const cardStyle = {
              '--service-accent': service.accent,
              '--service-soft': service.soft,
            } as CSSProperties

            return (
              <motion.button
                key={service.id}
                type="button"
                className={`kx-services__card kx-services__card--${service.layout}`}
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
                style={cardStyle}
                onClick={() => handleServiceClick(service.path)}
                aria-label={`Open ${service.title}`}
              >
                <div className="kx-services__card-glow" />

                <div className="kx-services__card-top">
                  <motion.div className="kx-services__icon-wrap" aria-hidden="true" variants={iconWrapVariants}>
                    <Icon size={28} strokeWidth={1.8} />
                  </motion.div>
                  <span className="kx-services__index">{String(index + 1).padStart(2, '0')}</span>
                </div>

                <span className="kx-services__tag">{service.tag}</span>
                <h3 className="kx-services__card-title">{service.title}</h3>
                <p className="kx-services__card-desc">{service.description}</p>

                <motion.ul className="kx-services__chips">
                  {service.highlights.map((item) => (
                    <motion.li key={item} variants={chipVariants}>{item}</motion.li>
                  ))}
                </motion.ul>

                <span className="kx-services__cta">
                  Explore service
                  <motion.span className="kx-services__cta-icon" aria-hidden="true" variants={arrowVariants}>
                    <ArrowUpRight size={17} strokeWidth={2.4} />
                  </motion.span>
                </span>
              </motion.button>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
