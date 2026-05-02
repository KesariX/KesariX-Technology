import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Workflow, Database, Layers } from 'lucide-react'
import SEO from '../components/SEO'
import NeuralPulseMatrix from '../components/3D/NeuralPulseMatrix'
import CTASection from '../components/CTASection'
import './styles/Automation.css'

export default function Automation() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="auto-page">
      <SEO
        title="Process Automation Services | KesariX Technology"
        description="Automate business workflows with intelligent RPA and AI-powered pipelines. KesariX helps enterprises eliminate manual tasks and scale operations effortlessly."
        path="/services/automation"
      />
      {/* ── HERO ── */}
      <section className="auto-hero" style={{ position: 'relative' }}>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <NeuralPulseMatrix className="opacity-40" />
        </div>
        <div className="auto-hero__inner" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div className="auto-hero__text" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1>Hyper-Scale<br /><span>Process Automation.</span></h1>
            <p>We eliminate operational bottlenecks by architecting deterministic logic pipelines that automate complex data extraction, routing, and reporting.</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/contact" className="btn-primary">Build Pipeline <ArrowRight size={18} /></Link>
            </div>
          </motion.div>

          <motion.div className="auto-pipeline" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
            <div className="auto-pipeline__bg" />
            <div className="auto-pipe">
              <span className="auto-pipe__label">API_Ingest</span>
              <div className="auto-pipe__track"><div className="auto-pipe__data" /></div>
            </div>
            <div className="auto-pipe">
              <span className="auto-pipe__label">ETL_Logic</span>
              <div className="auto-pipe__track"><div className="auto-pipe__data" /></div>
            </div>
            <div className="auto-pipe">
              <span className="auto-pipe__label">DB_Write</span>
              <div className="auto-pipe__track"><div className="auto-pipe__data" /></div>
            </div>
            
            {/* Visual routing nodes */}
            <div style={{ position: 'absolute', right: '40px', top: '2rem', bottom: '2rem', width: '2px', background: '#E2E8F0', zIndex: 1 }} />
          </motion.div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="auto-stats">
        <div className="auto-stats__inner">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="auto-stat__val">94%</div>
            <div className="auto-stat__lbl">Reduction in Manual Data Entry</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="auto-stat__val">15k+</div>
            <div className="auto-stat__lbl">Hours Saved Annually</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="auto-stat__val">Zero</div>
            <div className="auto-stat__lbl">Data Typo / Overwrite Errors</div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="auto-features">
        <div className="auto-feature">
          <motion.div className="auto-feature__text" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="auto-feature__eyebrow">Enterprise Integrations</div>
            <h2 className="auto-feature__title">Connect Everything.</h2>
            <p className="auto-feature__desc">We write custom middleware to bridge the gap between your legacy on-premise systems and modern SaaS APIs. No more messy spreadsheets or manual file uploads.</p>
          </motion.div>
          <motion.div className="auto-feature__visual" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', height: '100%', placeItems: 'center' }}>
              <div style={{ padding: '2rem', background: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0', color: '#1A1A2E' }}><Layers size={40} /></div>
              <div style={{ padding: '2rem', background: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0', color: '#D97706' }}><Workflow size={40} /></div>
              <div style={{ padding: '2rem', background: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0', color: '#3B82F6', gridColumn: 'span 2' }}><Database size={40} /></div>
            </div>
          </motion.div>
        </div>
        
        <div className="auto-feature">
          <motion.div className="auto-feature__text" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="auto-feature__eyebrow">Robotic Process Automation</div>
            <h2 className="auto-feature__title">Replace the Repetition.</h2>
            <p className="auto-feature__desc">For systems and portals without an API, we build robust headless browser scrapers and RPA scripts that mimic human interaction flawlessly at machine speed.</p>
          </motion.div>
          <motion.div className="auto-feature__visual" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ padding: '2rem', background: '#1A1A2E', borderRadius: '16px', fontFamily: 'JetBrains Mono', color: '#A1A1AA', fontSize: '0.875rem' }}>
              <div style={{ color: '#10B981', marginBottom: '1rem' }}>Success: Headless Driver Initialized</div>
              <div>&gt; navigating to url...</div>
              <div>&gt; locating dynamic table elements... <span style={{color: '#60A5FA'}}>OK</span></div>
              <div>&gt; extracting payload format JSON... <span style={{color: '#60A5FA'}}>OK</span></div>
              <div>&gt; POST request to internal router...</div>
              <div style={{ color: '#D97706', marginTop: '1rem' }}>Done in 1.25s. Expected human time: 4m.</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        title={<>Stop acting like a <br /> robot.</>}
        subtitle="Let our engineers build a custom automated pipeline so your team can focus on actual high-impact work."
        buttonText="Schedule Audit"
        eyebrow="Ready to automate?"
      />
    </div>
  )
}
