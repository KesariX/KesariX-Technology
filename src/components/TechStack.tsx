import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import './styles/TechStack.css'

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<number | null>(0)

  const stacks = [
    {
      id: 0,
      title: 'Frontend Engineering',
      tag: '01',
      techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WebGL'],
    },
    {
      id: 1,
      title: 'Backend Architecture',
      tag: '02',
      techs: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'GraphQL'],
    },
    {
      id: 2,
      title: 'Artificial Intelligence',
      tag: '03',
      techs: ['GPT-4', 'LangChain', 'TensorFlow', 'PyTorch', 'Hugging Face'],
    },
    {
      id: 3,
      title: 'Cloud & DevOps',
      tag: '04',
      techs: ['AWS Ecosystem', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD Automation'],
    },
  ]

  return (
    <section className="kx-techstack section-padding" id="tech">
      <div className="kx-techstack__header-area">
        <div className="section-container">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="kx-techstack__eyebrow"
          >
            Our Arsenal
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            viewport={{ once: true }}
            className="kx-techstack__title"
          >
            Technology We Master
          </motion.h2>
        </div>
      </div>

      <div className="kx-techstack__accordion">
        {stacks.map((stack) => {
          const isActive = activeCategory === stack.id

          return (
            <div 
              key={stack.id}
              className={`kx-techstack__row ${isActive ? 'kx-techstack__row--active' : ''}`}
              onMouseEnter={() => setActiveCategory(stack.id)}
            >
              <div className="section-container kx-techstack__row-inner">
                
                {/* Visible Header Tab */}
                <div className="kx-techstack__row-header">
                  <span className="kx-techstack__row-tag">/{stack.tag}</span>
                  <h3 className="kx-techstack__row-title">{stack.title}</h3>
                  <div className="kx-techstack__row-icon">
                    <ArrowUpRight size={48} />
                  </div>
                </div>

                {/* Collapsing Detail Content via Grid Math */}
                <div className="kx-techstack__row-content-wrap">
                  <div className="kx-techstack__row-content">
                    <div className="kx-techstack__tech-list">
                      {stack.techs.map(tech => (
                        <span key={tech} className="kx-techstack__tech-item">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
