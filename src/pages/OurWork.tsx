import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Layout, BarChart, Server } from 'lucide-react'
import './styles/OurWork.css'

export default function OurWork() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projects = [
    {
      title: "FinTech Trading Infrastructure",
      client: "QuantEdge Global",
      industry: "Financial Services",
      desc: "Architected a low-latency microservice trading platform capable of handling 2.4 million requests per second with absolute deterministic reliability. Migrated legacy monolith to a Kubernetes cluster.",
      image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2000&auto=format&fit=crop",
      metrics: [
        { val: "2.4M", lbl: "Requests/Sec" },
        { val: "12ms", lbl: "Avg Latency" }
      ],
      icon: Server
    },
    {
      title: "Autonomous Medical Triage Agent",
      client: "HealthSync",
      industry: "Healthcare AI",
      desc: "Deployed a HIPAA-compliant multi-agent reasoning system that ingests patient symptoms, retrieves medical literature, and prepares structured reports for physicians prior to consultations.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop",
      metrics: [
        { val: "40%", lbl: "Time Saved/Doc" },
        { val: "0", lbl: "Hallucinations" }
      ],
      icon: BarChart
    },
    {
      title: "Global E-Commerce Platform",
      client: "Aura Aesthetics",
      industry: "Retail & E-Commerce",
      desc: "A completely custom headless e-commerce solution using Next.js and Shopify Plus. Achieved perfect 100 Lighthouse scores resulting in massive organic traffic dominance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
      metrics: [
        { val: "+310%", lbl: "Organic Traffic" },
        { val: "380ms", lbl: "Page Load Time" }
      ],
      icon: Layout
    }
  ]

  return (
    <div className="work-page">
      
      {/* ── HERO ──────────────── */}
      <section className="work-hero">
        <div className="section-container relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="text-[var(--accent-primary)] mb-6 font-bold tracking-widest uppercase text-sm">Case Studies</div>
          
          <h1 className="section-title mb-6" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: '1.1' }}>
            We Let The <br/>
            <span className="gradient-text">Work Speak.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[var(--text-mid)] mb-10 leading-relaxed font-medium">
            Explore how we've architected complex systems, automated workflows, and scaled infrastructure for industry leaders.
          </p>
        </div>
      </section>

      {/* ── CASE STUDIES ──────────────── */}
      <section className="bg-[var(--surface-soft)] border-y border-[var(--border)] overflow-hidden">
        <div className="section-container max-w-6xl work-case-grid">
          
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="work-case-study"
            >
              <div className="work-case-image-wrap">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="work-case-image-overlay" />
              </div>

              <div>
                <div className="work-case-meta">
                  <span className="work-industry-tag">{project.industry}</span>
                  <span className="text-[var(--text-muted)] font-bold text-sm">{project.client}</span>
                </div>
                
                <h2 className="text-4xl font-black mb-6 font-['Outfit'] text-[var(--text-dark)] leading-tight">{project.title}</h2>
                <p className="text-lg text-[var(--text-mid)] leading-relaxed mb-8">{project.desc}</p>
                
                <div className="work-metric-grid">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="work-metric">
                      <span className="work-metric-val">{m.val}</span>
                      <span className="work-metric-lbl">{m.lbl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ── CTA ──────────────── */}
      <section className="py-32 bg-white text-center">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-8 font-['Outfit']">Ready to map out your infrastructure?</h2>
          <a href="/contact" className="btn-primary inline-flex items-center">
            Start A Project <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </section>
      
    </div>
  )
}
