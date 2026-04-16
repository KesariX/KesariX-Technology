import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Bot, Network, Workflow, BrainCircuit, Activity, Lock, ArrowRight, Database, Terminal, Server } from 'lucide-react'
import NeuralPulseMatrix from '../components/3D/NeuralPulseMatrix'
import CTASection from '../components/CTASection'
import './styles/AiAgents.css'

const capabilities = [
  { icon: Bot, title: 'Multi-Agent Swarms', desc: 'Deploy highly specialized swarms where individual agents reason, collaborate, and execute complex logic trees in tandem.' },
  { icon: Network, title: 'API Integration', desc: 'Agents flawlessly interact with your internal CRM, databases, and third-party APIs to read/write deterministic data.' },
  { icon: Workflow, title: 'Long-Term Memory', desc: 'Vector-backed episodic memory allows agents to recall past interactions and organizational history perfectly.' },
  { icon: BrainCircuit, title: 'Self-Correction', desc: 'Built-in reflection protocols allow agents to criticize their own outputs and correct errors before delivering final results.' },
  { icon: Activity, title: 'Background Operations', desc: 'Run unassisted processes that continuously monitor metrics, scrape data, and trigger alerts autonomously.' },
  { icon: Lock, title: 'Secure Execution', desc: 'Agents run in sandboxed Docker environments isolated entirely within your proprietary network to ensure data security.' }
]

export default function AiAgents() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="agents-page">
      {/* ── HERO ── */}
      <section className="agents-hero">
        <div className="agents-hero-bg" />
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ height: '95vh' }}>
          <NeuralPulseMatrix className="opacity-50" />
        </div>
        
        <div className="agents-hero-inner">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="agents-hero-eyebrow">
              <div className="pulse-dot" /> Autonomous Workforce 
            </div>
            <h1 className="agents-hero-title">
              We Engineer<br /><span>Superintelligence.</span>
            </h1>
            <p className="agents-hero-desc">
              Move beyond chatbots. We deploy multi-agent reasoning engines capable of planning, executing, and self-correcting entire operational workflows autonomously.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">
                Deploy Agents <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Right Floating Cards (Dark Mode style matching User Screenshot) */}
          <div className="agent-cards-container">
            <motion.div 
              className="av-card-base av-card-1"
              initial={{ opacity: 0, x: 50, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="av-card-1__header">
                <Activity size={16} color="#FBBF24" /> Agent Throughput
              </div>
              <div className="av-card-1__val">4.8M</div>
              <div style={{ fontSize: '0.875rem', color: '#94A3B8', marginTop: '0.5rem' }}>actions / month</div>
              {/* Graphic graph line */}
              <svg width="100%" height="60" style={{ marginTop: '2rem' }} viewBox="0 0 100 40" preserveAspectRatio="none">
                <path d="M0 40 L0 30 L20 25 L40 35 L60 15 L80 20 L100 5 L100 40 Z" fill="rgba(217,119,6,0.15)" />
                <path d="M0 30 L20 25 L40 35 L60 15 L80 20 L100 5" fill="none" stroke="#FBBF24" strokeWidth="2" />
              </svg>
            </motion.div>

            <motion.div 
              className="av-card-base av-card-2"
              initial={{ opacity: 0, x: 30, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="av-card-2__header">
                <div className="av-term-dot" style={{ background: '#EF4444' }} />
                <div className="av-term-dot" style={{ background: '#FBBF24' }} />
                <div className="av-term-dot" style={{ background: '#10B981' }} />
                <span style={{ marginLeft: 'auto', fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: '#64748B' }}>orchestrator.sh &gt;_</span>
              </div>
              <div className="av-term-line"><span style={{ color: '#D97706' }}>&gt;</span> initializing cluster core...</div>
              <div className="av-term-line"><span style={{ color: '#10B981' }}>[OK]</span> Model synced via edge.</div>
              <div className="av-term-line"><span style={{ color: '#D97706' }}>&gt;</span> rerouting dynamic nodes... <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{repeat:Infinity, duration: 0.8}} style={{background: 'white', width: 6, height: 12, display: 'inline-block', verticalAlign: 'middle'}}/></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE FLOW DIAGRAM (Light Theme) ── */}
      <section className="agents-console-wrap">
        <div className="ac-inner">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="agents-hero-title" style={{ fontSize: '3rem' }}>Transparent<br />Reasoning.</h2>
            <p className="agents-hero-desc">
              Never wonder what your AI is doing. Our architecture clearly visualizes the delegation of tasks. The Orchestrator plans, and specialized agents execute their designated tools precisely.
            </p>
          </motion.div>

          <motion.div className="ac-diagram" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="ac-node">
              <BrainCircuit size={20} color="#D97706" /> Orchestrator Agent <span>[PLANNING]</span>
            </div>
            
            <div className="ac-connector" />
            
            <div className="ac-node" style={{ marginLeft: '2rem' }}>
              <Database size={20} color="#3B82F6" /> Vector Memory <span>[RAG_INDEX]</span>
            </div>

            <div className="ac-connector" style={{ transform: 'translateY(-1.5rem)' }}/>

            <div className="ac-node" style={{ marginLeft: '2rem' }}>
              <Terminal size={20} color="#10B981" /> Scraper Agent <span>[EXECUTION]</span>
            </div>

            <div className="ac-connector" style={{ transform: 'translateY(-1.5rem)' }}/>

            <div className="ac-node" style={{ marginLeft: '2rem' }}>
              <Server size={20} color="#8B5CF6" /> Webhook Output <span>[POST]</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES GRID (Light Theme) ── */}
      <section className="agents-features">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="agents-hero-title" style={{ fontSize: '2.5rem' }}>Architectural Capabilities.</h2>
          <p className="agents-hero-desc" style={{ margin: '0 auto' }}>Pre-configured components for enterprise deployment.</p>
        </div>

        <div className="af-grid">
          {capabilities.map((cap, i) => (
            <motion.div 
              key={i} 
              className="af-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="af-card__icon"><cap.icon size={28} /></div>
              <h3>{cap.title}</h3>
              <p>{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        title={<>Ready to build your <br /> <span>digital workforce?</span></>}
        subtitle="Let our engineering team architect an autonomous pipeline for your specific use-case."
        buttonText="Connect With Us"
        eyebrow="Ready to build?"
      />
    </div>
  )
}
