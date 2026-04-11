import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckSquare, Combine, RefreshCw, Zap, ArrowRight, Settings, Server, Database } from 'lucide-react'
import './styles/Automation.css'

export default function Automation() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <div className="automation-page">
      
      {/* ── HERO SECTION ──────────────── */}
      <section className="automation-hero">
        <div className="auto-bg-lines" />
        
        <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-eyebrow mb-6">
              <Zap size={14} className="text-[var(--accent-primary)]" />
              Process Engineering
            </div>

            <h1 className="section-title mb-6" style={{ fontSize: 'clamp(3.5rem, 6vw, 4.5rem)', lineHeight: '1.05' }}>
              We Automate <br />
              <span className="gradient-text">Friction Away.</span>
            </h1>
            
            <p className="section-subtitle max-w-lg mb-10">
              Manual tasks kill margins and scalability. We architect deep integrations and intelligent workflows that run your enterprise flawlessly while you sleep.
            </p>
            
            <Link to="/contact" className="btn-primary group">
              Audit My Workflows <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Architecture Workflow Visual */}
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="relative w-full hidden lg:block"
          >
             <div className="auto-workflow-container">
               <div className="auto-workflow-line" />
               
               {/* Animated Data Packet */}
               <motion.div 
                 animate={{ left: ['0%', '100%'] }}
                 transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                 className="auto-moving-data"
               />

               <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity }} className="auto-workflow-node">
                 <Server size={32} className="text-gray-400" />
               </motion.div>

               <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity }} className="auto-workflow-node primary">
                 <Settings size={32} className="text-[var(--accent-primary)] animate-spin" style={{ animationDuration: '4s' }} />
               </motion.div>

               <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 3, repeat: Infinity }} className="auto-workflow-node">
                 <Database size={32} className="text-gray-400" />
               </motion.div>
             </div>
             
             {/* Floating UI Elements simulating processing */}
             <div className="absolute top-[10%] left-[20%] premium-card bg-white px-4 py-2 shadow-sm border border-[var(--border)] rounded-full text-xs font-bold text-[var(--accent-primary)]">
                Webhook Received
             </div>
             <div className="absolute bottom-[20%] right-[20%] premium-card bg-[#FAFAF8] px-4 py-2 shadow-sm border border-[var(--border)] rounded-full text-xs font-bold text-gray-500">
                DB Row Updated
             </div>
          </motion.div>
        </div>
      </section>

      {/* ── METRICS GRID ──────────────── */}
      <section className="bg-[var(--bg-base)]">
        <div className="section-container px-0 md:px-8">
          <div className="auto-metrics-grid">
            <div className="auto-metric-box">
              <div className="auto-metric-value">99%</div>
              <div className="auto-metric-label">Error Reduction</div>
            </div>
            <div className="auto-metric-box">
              <div className="auto-metric-value">12h</div>
              <div className="auto-metric-label">Saved Per User/Wk</div>
            </div>
            <div className="auto-metric-box">
              <div className="auto-metric-value">4.5x</div>
              <div className="auto-metric-label">Processing Speed</div>
            </div>
            <div className="auto-metric-box">
              <div className="auto-metric-value">24/7</div>
              <div className="auto-metric-label">Autonomous Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCROLL STRIP ──────────────── */}
      <div className="auto-scroll-strip">
        <div className="auto-scroll-content">
          SYSTEM INTEGRATION · API ARCHITECTURE · ETL PIPELINES · ZAPIER/MAKE EXPERTS · CUSTOM MIDDLEWARE · LEGACY SYSTEM MODERNIZATION · 
        </div>
      </div>

      {/* ── FEATURES GRID ──────────────── */}
      <section className="section-padding bg-[var(--surface-soft)]">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="section-eyebrow mb-4">Core Automation</span>
            <h2 className="section-title">The Engineering Approach.</h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Combine,
                title: "Deep Integrations",
                desc: "We don't just use Zapier. We build custom middleware and API bridges that connect siloed systems securely without data leaks."
              },
              {
                icon: RefreshCw,
                title: "ETL & Data Syncing",
                desc: "Transform and load millions of rows of data across platforms. Keep your CRM, ERP, and databases in perfect, real-time harmony."
              },
              {
                icon: CheckSquare,
                title: "Quality Assurance",
                desc: "Every automated pipeline features extensive fallback logic and human-in-the-loop alerts ensuring mission-critical data is never lost."
              }
            ].map((feature, i) => (
              <motion.div key={i} variants={itemVariants} className="auto-feature-card">
                 <div className="auto-feature-icon-wrap text-[var(--accent-primary)]">
                   <feature.icon size={28} />
                 </div>
                 <h3 className="text-xl font-bold mb-3 font-['Outfit'] text-[var(--text-dark)]">{feature.title}</h3>
                 <p className="text-[var(--text-mid)] leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ELEGANT THEMED CTA ────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden text-center border-t border-[var(--border)]">
        <div className="section-container relative z-10">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-[var(--surface-soft)] border border-[var(--border)] shadow-sm flex items-center justify-center mb-8">
            <Combine size={40} className="text-[var(--accent-primary)]" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tight font-['Outfit'] text-[var(--text-dark)]">
            Stop Doing <br/>
            <span className="gradient-text">Manual Work.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-[var(--text-mid)] mx-auto mb-10 max-w-2xl leading-relaxed">
            Let our engineering team architect seamless background workflows that multiply your team's output.
          </p>
          
          <Link to="/contact" className="btn-primary inline-flex items-center justify-center px-10 py-5 text-lg font-bold shadow-[var(--shadow-lift)] overflow-hidden relative group">
            <span className="relative z-10 transition-transform group-hover:-translate-x-1">Plan Automation Strategy</span>
            <ArrowRight size={20} className="ml-3 relative z-10 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

    </div>
  )
}
