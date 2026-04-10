import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import './styles/Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      tag: 'AI Solution',
      title: 'VersaBot — Enterprise AI Assistant',
      client: 'Versa Technologies',
      description: 'Built a multi-model AI assistant for internal knowledge management, reducing support tickets by 67% in 3 months.',
      stack: ['GPT-4', 'LangChain', 'React', 'FastAPI'],
      stats: [
        { label: 'Support Load', value: '-67%' },
        { label: 'Daily Queries', value: '40K+' },
        { label: 'Build Time', value: '3 Mo' },
      ],
      gradient: 'linear-gradient(135deg, #1e3a8a, #3b82f6)', // Blue
    },
    {
      id: 2,
      tag: 'Web Application',
      title: 'StackFlow — Real-Time Analytics Platform',
      client: 'StackFlow Inc.',
      description: 'Engineered a real-time business intelligence platform handling 2M+ daily events with live dashboard rendering.',
      stack: ['Next.js', 'Kafka', 'ClickHouse', 'D3.js'],
      stats: [
        { label: 'Daily Events', value: '2M+' },
        { label: 'Uptime', value: '99.98%' },
        { label: 'Avg Load', value: '180ms' },
      ],
      gradient: 'linear-gradient(135deg, #D97706, #FBBF24)', // Amber (Brand)
    },
    {
      id: 3,
      tag: 'Mobile + AI',
      title: 'MediTrack — AI-Powered Health Platform',
      client: 'NexHealth Group',
      description: 'Cross-platform health monitoring app with AI symptom checker used by 50,000+ patients across 12 hospitals.',
      stack: ['React Native', 'TensorFlow', 'Firebase'],
      stats: [
        { label: 'Active Users', value: '50K+' },
        { label: 'Hospitals', value: '12' },
        { label: 'AI Accuracy', value: '94%' },
      ],
      gradient: 'linear-gradient(135deg, #047857, #10b981)', // Emerald
    },
    {
      id: 4,
      tag: 'Automation System',
      title: 'AutoSync — HR Workflow Automation',
      client: 'Orbito Corp',
      description: 'Fully automated the employee onboarding and payroll pipeline, reducing manual HR workload by 80%.',
      stack: ['Node.js', 'Zapier API', 'Docker'],
      stats: [
        { label: 'Time Saved', value: '80%' },
        { label: 'Employees', value: '500+' },
        { label: 'ROI Timeline', value: '6 Wk' },
      ],
      gradient: 'linear-gradient(135deg, #7c3aed, #a5b4fc)', // Purple
    },
    {
      id: 5,
      tag: 'IT Infrastructure',
      title: 'DataSync Cloud — Migration & DevOps',
      client: 'DataSync Solutions',
      description: 'Migrated legacy on-premise infrastructure to AWS with zero downtime, cutting server costs by 55%.',
      stack: ['AWS', 'Terraform', 'Kubernetes'],
      stats: [
        { label: 'Cost Reduced', value: '55%' },
        { label: 'Downtime', value: '0 Mins' },
        { label: 'Time To Launch', value: '14 Days' },
      ],
      gradient: 'linear-gradient(135deg, #be123c, #fb7185)', // Rose
    },
  ]

  return (
    <section className="kx-projects" id="work">
      <div className="section-container">
        <div className="kx-projects__header">
          <span className="kx-projects__eyebrow">Selected Work</span>
          <h2 className="kx-projects__title">
            Products That
            <br />
            Make an Impact
          </h2>
        </div>

        <div className="kx-projects__stack-wrap">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-20px' }}
              className="kx-projects__sticky-card"
              style={{
                top: `calc(40px + ${idx * 24}px)`,
              }}
            >
              <div className="kx-projects__card-inner">
                {/* Left Content */}
                <div className="kx-projects__card-content">
                  <div className="kx-projects__card-meta">
                    <span className="kx-projects__card-client">{project.client}</span>
                    <span className="kx-projects__card-tag">{project.tag}</span>
                  </div>
                  
                  <h3 className="kx-projects__card-title">{project.title}</h3>
                  <p className="kx-projects__card-desc">{project.description}</p>
                  
                  <div className="kx-projects__stats-grid">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="kx-projects__stat-item">
                        <p className="kx-projects__stat-value">{stat.value}</p>
                        <p className="kx-projects__stat-label">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="kx-projects__stack-list">
                    {project.stack.map((tech) => (
                      <span key={tech} className="kx-projects__stack-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <button className="kx-projects__card-cta">
                    View Case Study <ArrowUpRight size={18} />
                  </button>
                </div>
                
                {/* Right Visual */}
                <div className="kx-projects__card-visual" style={{ background: project.gradient }}>
                  <div className="kx-projects__card-visual-text">
                     {String(idx + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
