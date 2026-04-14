import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import './styles/Projects.css'

const projects = [
  {
    id: 1,
    tag: 'AI Solution',
    title: 'VersaBot — Enterprise AI Assistant',
    client: 'Versa Technologies',
    description: 'Built a multi-model AI assistant for internal knowledge management, reducing support tickets by 67% in 3 months. Scaled across 5,000+ employees.',
    stack: ['GPT-4', 'LangChain', 'React', 'FastAPI'],
    stats: [
      { label: 'Support Load', value: '-67%' },
      { label: 'Daily Queries', value: '40K+' },
    ],
    bg: 'radial-gradient(ellipse at center, rgba(217,119,6,0.8) 0%, rgba(26,26,46,0.95) 100%)',
    accent: '#F59E0B',
    abstractId: 1
  },
  {
    id: 2,
    tag: 'Web Application',
    title: 'StackFlow — Real-Time Analytics Platform',
    client: 'StackFlow Inc.',
    description: 'Engineered a real-time business intelligence platform handling 2M+ daily events with sub-second live dashboard rendering and edge caching.',
    stack: ['Next.js', 'Kafka', 'ClickHouse', 'D3.js'],
    stats: [
      { label: 'Daily Events', value: '2M+' },
      { label: 'Avg Load', value: '180ms' },
    ],
    bg: 'radial-gradient(ellipse at center, rgba(180,83,9,0.8) 0%, rgba(26,26,46,0.95) 100%)',
    accent: '#D97706',
    abstractId: 2
  },
  {
    id: 3,
    tag: 'Mobile + AI',
    title: 'MediTrack — AI-Powered Health Platform',
    client: 'NexHealth Group',
    description: 'Cross-platform health monitoring mobile app with highly accurate predictive AI symptom checker used safely by 50,000+ patients.',
    stack: ['React Native', 'TensorFlow', 'Firebase'],
    stats: [
      { label: 'Active Users', value: '50K+' },
      { label: 'AI Accuracy', value: '94%' },
    ],
    bg: 'radial-gradient(ellipse at center, rgba(245,158,11,0.6) 0%, rgba(26,26,46,0.95) 100%)',
    accent: '#FBBF24',
    abstractId: 3
  },
  {
    id: 4,
    tag: 'Automation',
    title: 'AutoSync — HR Workflow Automation',
    client: 'Orbito Corp',
    description: 'Designed a fully automated, scalable employee onboarding and payroll pipeline, completely eliminating manual HR data entry workload.',
    stack: ['Node.js', 'Zapier API', 'Docker'],
    stats: [
      { label: 'Time Saved', value: '80%' },
      { label: 'ROI Timeline', value: '6 Wk' },
    ],
    bg: 'radial-gradient(ellipse at center, rgba(146,64,14,0.8) 0%, rgba(26,26,46,0.95) 100%)',
    accent: '#eab308',
    abstractId: 4
  },
  {
    id: 5,
    tag: 'Cloud Infra',
    title: 'DataSync Cloud — Migration & DevOps',
    client: 'DataSync Solutions',
    description: 'Securely migrated legacy on-premise monolithic infrastructure to AWS Kubernetes clusters with zero downtime, massively cutting costs.',
    stack: ['AWS', 'Terraform', 'Kubernetes'],
    stats: [
      { label: 'Cost Reduced', value: '55%' },
      { label: 'Downtime', value: '0 Mins' },
    ],
    bg: 'radial-gradient(ellipse at center, rgba(120,53,15,0.9) 0%, rgba(26,26,46,0.95) 100%)',
    accent: '#d97706',
    abstractId: 5
  },
]

export default function Projects() {
  // Desktop defaults to expanding accordion.
  const [hoveredIndex, setHoveredIndex] = useState<number>(0)

  return (
    <section className="kx-accordion" id="work">
      {/* Dynamic Master Background */}
      <motion.div 
        className="kx-accordion__master-bg"
        animate={{ backgroundColor: projects[hoveredIndex].accent }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <div className="kx-accordion__noise" />

      <div className="section-container kx-accordion__container">
        
        <div className="kx-accordion__header">
          <motion.span 
            className="kx-accordion__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Capabilities & Impact
          </motion.span>
          <motion.h2 
            className="kx-accordion__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Digital Experiences That <br className="hidden md:block"/>
            <span className="kx-accordion__title-glow">Drive Evolution</span>
          </motion.h2>
        </div>

        {/* The Incredible Expanding Grid Gallery */}
        <div className="kx-accordion__gallery">
          {projects.map((project, idx) => {
            const isActive = hoveredIndex === idx

            return (
              <motion.div
                key={project.id}
                layout
                onHoverStart={() => setHoveredIndex(idx)}
                onClick={() => setHoveredIndex(idx)}
                className={`kx-accordion__panel ${isActive ? 'is-active' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: 1,
                  y: 0,
                  boxShadow: isActive ? `0 30px 100px -20px ${project.accent}80` : `0 10px 30px -10px rgba(0,0,0,0.5)`,
                  borderColor: isActive ? `${project.accent}80` : 'rgba(255,255,255,0.05)'
                }}
                transition={{ 
                  layout: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }, /* Extremely buttery fluid ease */
                  opacity: { duration: 0.5, ease: "easeOut" },
                  y: { duration: 0.5, ease: "easeOut" }
                }}
              >
                {/* Panel Background Layer with Parallax Pan */}
                <motion.div 
                  className="kx-accordion__panel-bg"
                  animate={{ 
                    scale: isActive ? 1.05 : 1.2,
                    background: project.bg
                  }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />

                {/* Abstract Geometric Overlay Element animating infinitely inside active card */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      key="abstract-shape"
                      className="kx-accordion__abstract-shape"
                      initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                      animate={{ 
                        opacity: 0.3, 
                        scale: [1, 1.2, 1], 
                        rotate: [0, 90, 180, 270, 360] 
                      }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ 
                        opacity: { duration: 0.5 },
                        scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 30, repeat: Infinity, ease: "linear" }
                      }}
                      style={{ borderTopColor: project.accent, borderRightColor: project.accent }}
                    />
                  )}
                </AnimatePresence>

                {/* Content Overlay */}
                <motion.div layout className="kx-accordion__panel-inner">
                  
                  {/* Collapsed View (Vertical Text) */}
                  <div className="kx-accordion__collapsed-view">
                    <motion.div 
                      className="kx-accordion__number-vert"
                      animate={{ opacity: isActive ? 0 : 0.4 }}
                      transition={{ duration: 0.3 }}
                    >
                      0{idx + 1}
                    </motion.div>
                    <motion.h3 
                      className="kx-accordion__title-vert"
                      animate={{ opacity: isActive ? 0 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.client}
                    </motion.h3>
                  </div>

                  {/* Expanded View (Rich Content) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        className="kx-accordion__expanded-view"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {/* Upper Section */}
                        <div className="kx-accordion__expanded-top">
                          <div className="kx-accordion__meta-badge" style={{ color: project.accent, backgroundColor: `${project.accent}20` }}>
                            {project.tag}
                          </div>
                          <div className="kx-accordion__huge-number" style={{ color: project.accent }}>
                            0{idx + 1}
                          </div>
                        </div>

                        {/* Lower Section Detail */}
                        <div className="kx-accordion__expanded-bottom">
                          <h3 className="kx-accordion__expanded-title">{project.title}</h3>
                          <p className="kx-accordion__expanded-desc">{project.description}</p>
                          
                          <div className="kx-accordion__expanded-grid">
                            {/* Tech Stack */}
                            <div className="kx-accordion__stack-list">
                               {project.stack.map(tech => (
                                 <span key={tech} className="kx-accordion__stack-item">{tech}</span>
                               ))}
                            </div>
                            
                            {/* Key Stats */}
                            <div className="kx-accordion__stats-list">
                               {project.stats.map(stat => (
                                 <div key={stat.label} className="kx-accordion__stat">
                                   <div className="kx-accordion__stat-val" style={{ color: project.accent }}>{stat.value}</div>
                                   <div className="kx-accordion__stat-lbl">{stat.label}</div>
                                 </div>
                               ))}
                            </div>
                          </div>

                          <motion.button 
                            className="kx-accordion__cta-btn group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{ borderColor: project.accent }}
                          >
                            <span style={{ color: project.accent }}>View Full Case Study</span>
                            <div className="kx-accordion__cta-icon group-hover:rotate-45 transition-transform" style={{ backgroundColor: project.accent }}>
                              <ArrowUpRight strokeWidth={2.5} size={16} className="text-white" />
                            </div>
                          </motion.button>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
