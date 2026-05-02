import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import './styles/Projects.css'

type Project = {
  id: number;
  tag?: string;
  category?: string;
  number?: string;
  title: string;
  client?: string;
  description: string;
  stack?: string[];
  tags?: string[];
  stats?: { label: string; value: string }[];
  metric?: string;
  metricLabel?: string;
  image?: string;
  website?: string;
}

const projects: Project[] = [
  {
    id: 1,
    tag: "AI Powered Voice Call Center",
    title: "Exotel Voice Bot Campaign Manager",
    client: "Delivery Club (Outbound Campaign)",
    description:
      "Built an AI-driven outbound voice campaign system using Exotel, handling automated calls, real-time conversation processing, and lead qualification. Integrated speech-to-text, LLM-based intent detection, and structured data capture with campaign tracking dashboards.",
    stack: [
      "Exotel API",
      "WebSockets",
      "FastAPI",
      "LLM (Groq/GPT)",
      "PostgreSQL",
      "React",
    ],
    stats: [
      { label: "Daily Calls", value: "500–1000" },
      { label: "Automation Rate", value: "85%+" },
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=75&w=800&auto=format&fit=crop&fm=webp'
  }
]

export default function Projects() {
  const handleWebsiteClick = (website: string) => {
    window.open(website, '_blank')
  }

  return (
    <section className="projects-section">
      <div className="projects-container">
        {/* Header */}
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="section-eyebrow" style={{ display: 'inline-block', marginBottom: '1rem' }}>Our Portfolio</span>
          <h2 className="projects-title">Products That Make an Impact</h2>
          <p className="projects-subtitle" style={{ maxWidth: '600px', marginTop: '1rem', lineHeight: '1.6' }}>
            We don't just write code. We engineer high-performance enterprise systems, intelligent workflows, and scalable platforms that drive measurable business results.
          </p>
        </motion.div>

        {/* Sticky Stack Layout */}
        <div className="projects-layout">
          {projects.map((project, index) => {
            // Calculate a progressive top offset so they stack neatly as you scroll
            const stickyOffset = 90 + index * 36;
            // Optionally scale down the cards behind to give a depth effect (z-axis stacking)
            const scaleDown = 1 - (projects.length - index - 1) * 0.02;

            return (
              <motion.div
                key={project.id}
                className="project-card-cinematic"
                initial={{ opacity: 0, y: 60, scale: scaleDown * 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: scaleDown }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: scaleDown * 1.015, y: -8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ top: `${stickyOffset}px`, zIndex: index }}
              >
                <div className="cinematic-content">
                  <div className="cinematic-meta">
                    <span className="cinematic-number">{project.number || String(index + 1).padStart(2, '0')}</span>
                    <span className="cinematic-category">{project.category || project.tag}</span>
                  </div>

                  <h3 className="cinematic-title">{project.title}</h3>
                  {project.client && (
                    <div style={{ color: '#d97706', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
                      Client: {project.client}
                    </div>
                  )}
                  <p className="cinematic-description">{project.description}</p>

                  <div className="cinematic-tags">
                    {(project.tags || project.stack || []).map((tag) => (
                      <span key={tag} className="cinematic-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Visit Project Button matching website theme */}
                  {project.website && (
                    <motion.button
                      className="cinematic-btn"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleWebsiteClick(project.website!)}
                    >
                      View Live Project
                      <ArrowRight size={18} className="btn-arrow" />
                    </motion.button>
                  )}
                </div>

                {/* Right side visual representation */}
                <div className="cinematic-visual" style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '3rem' }}>
                  {/* Image Background overlaying the visual area */}
                  <motion.div 
                    style={{ 
                      position: 'absolute', 
                      inset: 0, 
                      backgroundImage: `url(${project.image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=75&w=800&auto=format&fit=crop&fm=webp'})`, 
                      backgroundSize: 'cover', 
                      backgroundPosition: 'center', 
                      mixBlendMode: 'overlay',
                      opacity: 0.2,
                    }}
                    whileHover={{ opacity: 0.45, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                  
                  {project.stats ? (
                    project.stats.map(stat => (
                      <div key={stat.label} style={{ textAlign: 'center' }}>
                        <div className="visual-metric-large" style={{ position: 'relative', zIndex: 10, fontSize: '4.5rem', marginBottom: '8px' }}>{stat.value}</div>
                        <div className="visual-metric-label" style={{ position: 'relative', zIndex: 10 }}>{stat.label}</div>
                      </div>
                    ))
                  ) : (
                    <div style={{ textAlign: 'center' }}>
                      <div className="visual-metric-large" style={{ position: 'relative', zIndex: 10 }}>{project.metric}</div>
                      <div className="visual-metric-label" style={{ position: 'relative', zIndex: 10 }}>{project.metricLabel}</div>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
