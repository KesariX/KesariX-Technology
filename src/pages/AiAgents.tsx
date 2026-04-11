import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Bot, Cpu, GitMerge, MessageSquare, Terminal, Zap, ArrowRight, Activity } from 'lucide-react'
import './styles/AiAgents.css'

export default function AiAgents() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <div className="agent-page">
      
      {/* ── HERO SECTION ──────────────── */}
      <section className="agent-hero">
        <div className="agent-grid-bg" />
        
        <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-eyebrow mb-6">
              <Bot size={14} className="text-[var(--accent-primary)]" />
              Autonomous Workforce
            </div>

            <h1 className="section-title mb-6" style={{ fontSize: 'clamp(3.5rem, 6vw, 4.5rem)', lineHeight: '1.05' }}>
              Deploy Digital <br />
              <span className="gradient-text">Employees.</span>
            </h1>
            
            <p className="section-subtitle max-w-lg mb-10">
              We build specialized AI agents that don't just chat—they execute. Multi-step reasoning, tool usage, and full autonomy to handle your complex operational workflows securely.
            </p>
            
            <Link to="/contact" className="btn-primary group inline-flex items-center">
              Build Custom Agent <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Visual: The 3D Agent Stack */}
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="relative w-full hidden lg:block"
          >
             <div className="agent-stack-container">
               
               {/* Back Layer - Database Agent */}
               <motion.div 
                 animate={{ rotateX: 20, rotateY: -15, rotateZ: 5, z: -100, y: -40, x: 40 }}
                 transition={{ duration: 0 }}
                 className="agent-layer opacity-40 shadow-none border-gray-200"
               >
                 <div className="agent-layer-header">
                   <div className="agent-avatar text-gray-400"><Database size={18} /></div>
                   <div className="flex-1">
                     <p className="text-xs font-bold text-gray-500">Retrieval Agent</p>
                   </div>
                 </div>
                 <div className="agent-log">
                   <span className="text-blue-400">SELECT</span> * FROM users;<br/>
                   [Fetched 2,042 rows / 12ms]
                 </div>
               </motion.div>

               {/* Middle Layer - Logic Agent */}
               <motion.div 
                 animate={{ rotateX: 10, rotateY: -10, rotateZ: 2, z: -50, y: -20, x: 20 }}
                 transition={{ duration: 0 }}
                 className="agent-layer opacity-80 shadow-md border-gray-300"
               >
                 <div className="agent-layer-header">
                   <div className="agent-avatar text-blue-500"><Cpu size={18} /></div>
                   <div className="flex-1">
                     <p className="text-xs font-bold text-gray-600">Reasoning Agent</p>
                   </div>
                   <Activity size={14} className="text-blue-500" />
                 </div>
                 <div className="agent-log" style={{ background: '#f0f9ff' }}>
                   Analyzing DB payload...<br/>
                   Found 3 anomalies. Triggering webhook.
                 </div>
               </motion.div>

               {/* Front Layer - Executor Agent */}
               <motion.div 
                 animate={{ rotateX: 0, rotateY: -5, rotateZ: 0, z: 0, y: 0, x: 0 }}
                 transition={{ duration: 0 }}
                 className="agent-layer shadow-xl border-[var(--accent-primary)]/50"
                 style={{ transform: 'rotateX(0deg) rotateY(-5deg) translateZ(0) scale(1.05)', zIndex: 10 }}
               >
                 <div className="agent-layer-header">
                   <div className="agent-avatar text-white bg-[var(--accent-primary)] border-none"><Bot size={18} /></div>
                   <div className="flex-1">
                     <p className="text-sm font-bold text-[var(--accent-primary)]">Master Orchestrator</p>
                   </div>
                   <div className="agent-pulse-dot" />
                 </div>
                 <div className="space-y-3">
                   <div className="h-2 w-3/4 rounded-full bg-gray-100" />
                   <div className="h-2 w-1/2 rounded-full bg-gray-100" />
                   <div className="mt-3 text-xs font-mono font-semibold text-emerald-600 bg-emerald-50 p-2 rounded-md border border-emerald-100 flex items-center gap-2">
                     <Zap size={14} /> Sequence Successfully Executed
                   </div>
                 </div>
               </motion.div>

             </div>
          </motion.div>
        </div>
      </section>

      {/* ── BENTO FEATURES ──────────────── */}
      <section className="section-padding bg-[var(--surface-soft)]">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="section-eyebrow mb-4">Agentic Capabilities</span>
            <h2 className="section-title">Beyond Standard Chatbots.</h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="agent-bento-grid"
          >
            <motion.div variants={itemVariants} className="agent-card agent-card-large">
               <div className="agent-card-icon"><GitMerge size={24} /></div>
               <h3>Multi-Agent Orchestration</h3>
               <p>We build systems where multiple specialized AI agents talk to each other. A researcher agent finds data, a reasoning agent processes it, and an executor agent acts on it—all perfectly managed by a core orchestration layer.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="agent-card">
               <div className="agent-card-icon"><Terminal size={24} /></div>
               <h3>Tool Calling</h3>
               <p>Give your AI access to the real world. Our agents securely call your internal APIs, query databases, and trigger webhooks to take actual actions.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="agent-card">
               <div className="agent-card-icon"><MessageSquare size={24} /></div>
               <h3>Memory & Context</h3>
               <p>Using advanced vector databases, our agents remember past interactions and retain specific user context across infinite sessions.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="agent-card agent-card-large">
               <div className="agent-card-icon"><Cpu size={24} /></div>
               <h3>Deterministic Guardrails</h3>
               <p>Agents acting wildly destroys business value. We engineer strict logical boundaries ensuring agents fail gracefully to human review rather than hallucinating actions.</p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ── USE CASES ──────────────── */}
      <section className="section-padding bg-white relative overflow-hidden border-t border-[var(--border)]">
        <div className="section-container text-center">
           <span className="section-eyebrow mb-4">Proven Architectures</span>
           <h2 className="section-title mb-16">High-ROI Deployments.</h2>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { t: "Automated Lead Qualification", d: "Agents that instantly engage inbound leads, assess criteria via API, and directly book qualified meetings onto your sales team's calendar." },
               { t: "IT Support Resolution", d: "Tier 1 support replaced. The agent reads the ticket, fetches system logs via tool calling, and attempts safe automated fixes before escalating." },
               { t: "Data Triage & Routing", d: "Agents constantly monitoring massive inboxes or data streams, tagging urgency, and routing specific issues to the correct human departments." }
             ].map((useCase, idx) => (
               <div key={idx} className="p-8 text-left border border-[var(--border)] rounded-3xl hover:border-[var(--accent-primary)] transition-colors">
                 <div className="text-3xl font-black text-[var(--border)] mb-4 font-['Outfit']">0{idx + 1}</div>
                 <h4 className="text-xl font-bold mb-3">{useCase.t}</h4>
                 <p className="text-[var(--text-mid)]">{useCase.d}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* ── ELEGANT THEMED CTA ────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[var(--bg-base)] relative overflow-hidden border-t border-[var(--border)]">
        <div className="section-container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full premium-card rounded-[3rem] p-12 md:p-24 overflow-hidden relative text-center group bg-white shadow-2xl"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-50">
               <motion.div 
                 animate={{ rotate: 360, scale: [1, 1.05, 1] }} 
                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 border-[2px] border-dashed border-[var(--border)] rounded-full mix-blend-multiply"
               />
            </div>
            
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[60%] bg-gradient-to-t from-[var(--accent-primary)]/10 to-transparent pointer-events-none blur-[40px]" />

            <div className="relative z-20 flex flex-col items-center">
              <div className="w-24 h-24 mb-10 rounded-[2rem] bg-gradient-to-tr from-[var(--accent-primary)]/20 to-[var(--accent-primary)]/5 p-[1px]">
                <div className="w-full h-full bg-white rounded-[2rem] flex items-center justify-center border border-[var(--accent-primary)]/20 shadow-sm transition-transform duration-700 group-hover:scale-110">
                  <Bot size={40} className="text-[var(--accent-primary)]" />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tight font-['Outfit'] text-[var(--text-dark)] leading-tight relative">
                Deploy Your <br/>
                <span className="gradient-text">First Agent.</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-[var(--text-mid)] mx-auto mb-12 max-w-3xl leading-relaxed">
                Skip the generic chatbots. Let's architect a highly specialized digital employee to handle your most tedious operational workflows.
              </p>
              
              <Link to="/contact" className="btn-primary flex items-center justify-center px-10 py-5 text-lg font-bold shadow-[var(--shadow-lift)] overflow-hidden relative">
                <span className="relative z-10 transition-transform group-hover:-translate-x-1">Design Agent Workflow</span>
                <ArrowRight size={20} className="ml-3 relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

function Database(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
      <path d="M3 12A9 3 0 0 0 21 12"/>
    </svg>
  )
}
