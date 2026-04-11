import { useEffect, MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { Brain, Code2, Bot, Settings, Zap, ArrowRight, Network, Database, Cpu, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AiSolutions() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const capabilities = [
    {
      id: 1,
      title: 'Neural Architecture & LLMs',
      desc: 'Bespoke large language models fine-tuned on your proprietary enterprise data. Secure, deterministic, and highly accurate.',
      icon: Network,
      tag: 'Core Infra',
      colSpan: 3,
      gradient: 'linear-gradient(135deg, #D97706, #FBBF24)'
    },
    {
      id: 2,
      title: 'Retrieval-Augmented Generation',
      desc: 'Connect your internal databases securely to AI, allowing instantaneous factual querying without hallucination risks.',
      icon: Database,
      colSpan: 2,
      gradient: 'linear-gradient(135deg, #F59E0B, #D97706)'
    },
    {
      id: 3,
      title: 'Autonomous Agents',
      desc: 'Multi-step reasoning engines that take over complex, repetitive operations like customer onboarding and data triage.',
      icon: Bot,
      colSpan: 2,
      gradient: 'linear-gradient(135deg, #D97706, #F59E0B)'
    },
    {
      id: 4,
      title: 'Vision Intelligence',
      desc: 'Advanced spatial computing and object detection integrated directly into your edge infrastructure and hardware pipelines.',
      icon: Eye,
      colSpan: 3,
      gradient: 'linear-gradient(135deg, #FBBF24, #F59E0B)'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <div className="bg-[var(--bg-base)]">
      
      {/* ── CLEAN HERO SECTION ──────────────── */}
      {/* Removing extra global padding, just using standard hero heights */}
      <section className="relative w-full pt-[120px] pb-16 md:pt-[160px] md:pb-24 overflow-hidden border-b border-[var(--border)]">
        {/* Subtle geometric background */}
        <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none" />
        
        {/* Animated Accent Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent-primary)]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--accent-glow)]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="section-eyebrow mb-6">
              <Sparkles size={14} className="text-[var(--accent-primary)]" />
              Applied Intelligence
            </div>

            <h1 className="section-title mb-6" style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)', lineHeight: '1.05' }}>
              We Engineer <br />
              <span className="gradient-text">AI Systems.</span>
            </h1>
            
            <p className="section-subtitle max-w-lg mb-10">
              Go beyond simple prompt wrappers. We architect deterministic deep learning, predictive models, and autonomous agents engineered for enterprise scale.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-primary">
                Start Your AI Project <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Interactive Abstract Node Map */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="relative h-[400px] md:h-[500px] w-full hidden lg:flex items-center justify-center"
          >
             {/* Central Hub */}
             <div className="absolute w-32 h-32 rounded-full bg-white shadow-[var(--shadow-lift)] border border-[var(--border)] z-20 flex items-center justify-center">
               <Brain size={48} className="text-[var(--accent-primary)] relative z-10" />
               <div className="absolute inset-0 bg-[var(--accent-primary)] rounded-full animate-ping opacity-20" style={{ animationDuration: '3s' }} />
             </div>

             {/* Orbital Path 1 */}
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute w-[280px] h-[280px] rounded-full border border-[var(--border)] border-dashed z-10"
             >
               <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border border-[var(--border)] shadow-md flex items-center justify-center text-[var(--accent-primary)]">
                 <Database size={20} />
               </div>
             </motion.div>

             {/* Orbital Path 2 */}
             <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="absolute w-[440px] h-[440px] rounded-full border border-[var(--border)] border-dashed z-0"
             >
               <div className="absolute bottom-10 -left-2 w-12 h-12 bg-white rounded-full border border-[var(--border)] shadow-md flex items-center justify-center text-[var(--text-dark)]">
                 <ShieldCheck size={20} />
               </div>
               <div className="absolute top-10 -right-2 w-12 h-12 bg-white rounded-full border border-[var(--border)] shadow-md flex items-center justify-center text-[var(--accent-primary)]">
                 <Cpu size={20} />
               </div>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── INTERACTIVE CAPABILITIES GRID ──────────────── */}
      <section className="section-padding bg-[var(--surface-soft)] relative overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(var(--text-dark) 1px, transparent 1px), linear-gradient(90deg, var(--text-dark) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="section-container relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="section-eyebrow mb-4">Enterprise Capabilites</span>
              <h2 className="section-title">The Neural <span className="gradient-text">Blueprint.</span></h2>
            </div>
            <p className="text-[var(--text-mid)] max-w-md pb-2">
              We architect foundation models into specialized business engines, transforming raw data into automated operational leverage.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
          >
            {/* Card 1 */}
            <motion.div variants={cardVariants} className="premium-card p-10 lg:col-span-7 group cursor-pointer relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-500">
               <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[var(--accent-primary)]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="flex flex-col h-full justify-between relative z-10">
                 <div className="flex items-center justify-between mb-16">
                   <div className="w-16 h-16 rounded-2xl bg-[var(--surface-soft)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-primary)] group-hover:scale-110 transition-transform duration-500">
                     <Network size={32} />
                   </div>
                   <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors">Core Infra</span>
                 </div>
                 <div>
                   <h3 className="text-3xl font-bold mb-4 font-['Outfit'] text-[var(--text-dark)] group-hover:text-[var(--accent-primary)] transition-colors">Neural Architecture & LLMs</h3>
                   <p className="text-lg text-[var(--text-mid)] leading-relaxed">Bespoke large language models fine-tuned on your proprietary enterprise data. Secure, deterministic, and highly accurate without relying on public wrappers.</p>
                 </div>
               </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={cardVariants} className="premium-card p-10 lg:col-span-5 group cursor-pointer relative overflow-hidden bg-[#FAFAF8] hover:bg-white hover:shadow-2xl transition-all duration-500">
               <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="flex flex-col h-full justify-between relative z-10">
                 <div className="flex items-center justify-between mb-16">
                   <div className="w-16 h-16 rounded-2xl bg-white border border-[var(--border)] flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-500">
                     <Database size={32} />
                   </div>
                 </div>
                 <div>
                   <h3 className="text-3xl font-bold mb-4 font-['Outfit'] text-[var(--text-dark)] group-hover:text-blue-500 transition-colors">Enterprise RAG</h3>
                   <p className="text-lg text-[var(--text-mid)]">Connect your internal databases securely to AI, allowing instantaneous factual querying without hallucination risks.</p>
                 </div>
               </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={cardVariants} className="premium-card p-10 lg:col-span-5 group cursor-pointer relative overflow-hidden bg-[#FAFAF8] hover:bg-white hover:shadow-2xl transition-all duration-500">
               <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="flex flex-col h-full justify-between relative z-10">
                 <div className="flex items-center justify-between mb-16">
                   <div className="w-16 h-16 rounded-2xl bg-white border border-[var(--border)] flex items-center justify-center text-emerald-500 group-hover:-rotate-12 transition-transform duration-500">
                     <Bot size={32} />
                   </div>
                 </div>
                 <div>
                   <h3 className="text-3xl font-bold mb-4 font-['Outfit'] text-[var(--text-dark)] group-hover:text-emerald-500 transition-colors">Autonomous Agents</h3>
                   <p className="text-lg text-[var(--text-mid)]">Multi-step reasoning engines that take over complex, repetitive operations from customer onboarding to data triage.</p>
                 </div>
               </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div variants={cardVariants} className="premium-card p-10 lg:col-span-7 group cursor-pointer relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-500">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--accent-glow)_0%,transparent_70%)] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />
               <div className="flex flex-col h-full justify-between relative z-10">
                 <div className="flex items-center justify-between mb-16">
                   <div className="w-16 h-16 rounded-2xl bg-[var(--surface-soft)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-primary)] group-hover:scale-110 transition-transform duration-500">
                     <Eye size={32} />
                   </div>
                   <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">Edge & Spatial</span>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                   <div>
                     <h3 className="text-3xl font-bold mb-4 font-['Outfit'] text-[var(--text-dark)] group-hover:text-[var(--accent-primary)] transition-colors">Vision Intelligence</h3>
                     <p className="text-lg text-[var(--text-mid)] leading-relaxed">Advanced spatial computing and object detection integrated directly into your edge infrastructure and hardware pipelines.</p>
                   </div>
                   <div className="hidden md:flex justify-end pb-2">
                     <div className="w-12 h-12 rounded-full border border-[var(--accent-primary)] flex items-center justify-center text-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] group-hover:text-white transition-colors">
                       <ArrowRight size={20} className="-rotate-45" />
                     </div>
                   </div>
                 </div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── INTERACTIVE ARCHITECTURE ACCORDION ────────────────── */}
      <section className="section-padding relative bg-white border-y border-[var(--border)]">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-16">
             <span className="section-eyebrow mb-4">Reliability Logic</span>
             <h2 className="section-title mb-6">Deterministic <span className="gradient-text">By Design.</span></h2>
             <p className="text-lg text-[var(--text-mid)] max-w-2xl mx-auto">
               Generative models are inherently unpredictable. Enterprise systems cannot be. We wrap raw LLM capabilities in strict logical guardrails and multi-agent verification checks.
             </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
             
             {/* Text/List Column */}
             <div className="lg:col-span-5 space-y-6">
                 {[
                   { 
                     title: 'Semantic Caching Layer', 
                     desc: 'Sub-50ms conversational response times using advanced vector database indexing and Redis layers.',
                     icon: Zap,
                     color: 'text-amber-500',
                     bg: 'bg-amber-50'
                   },
                   { 
                     title: 'Strict Output Schemas', 
                     desc: 'Models forced to respond in deterministic JSON/XML structures, completely eliminating hallucinations.',
                     icon: Code2,
                     color: 'text-blue-500',
                     bg: 'bg-blue-50'
                   },
                   { 
                     title: 'Data Sovereignty VPC', 
                     desc: 'Your proprietary data never leaves your secure environment or trains external foundational models.',
                     icon: ShieldCheck,
                     color: 'text-emerald-500',
                     bg: 'bg-emerald-50'
                   }
                 ].map((feat, i) => (
                   <motion.div 
                     initial={{ opacity: 0, x: -30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.15 }}
                     key={i} 
                     className="group flex gap-5 p-6 rounded-3xl border border-transparent hover:border-[var(--border)] hover:bg-[var(--surface-soft)] transition-all cursor-default"
                   >
                     <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${feat.bg} ${feat.color} group-hover:scale-110 transition-transform`}>
                       <feat.icon size={24} />
                     </div>
                     <div>
                       <h4 className="text-xl font-bold text-[var(--text-dark)] mb-2 font-['Outfit']">{feat.title}</h4>
                       <p className="text-[var(--text-mid)] leading-relaxed">{feat.desc}</p>
                     </div>
                   </motion.div>
                 ))}
             </div>

             {/* Visual Column */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="lg:col-span-7 relative"
             >
               <div className="premium-card p-2 md:p-4 bg-[var(--surface-soft)] border-[var(--border)] shadow-2xl rounded-[2rem] overflow-hidden">
                 <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/3] w-full border border-[var(--border)]">
                   <img 
                     src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop" 
                     alt="Secure Server Rack" 
                     className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-1000"
                   />
                   
                   {/* Overlay UI elements simulating "System Check" */}
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                     
                     <div className="space-y-4 max-w-sm">
                       <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center justify-between text-white shadow-lg">
                         <div className="flex items-center gap-3">
                           <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
                           <span className="font-mono text-sm font-bold tracking-wider">VPC_TUNNEL_SECURE</span>
                         </div>
                         <ShieldCheck size={18} className="text-emerald-400" />
                       </div>
                       
                       <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center justify-between text-white shadow-lg ml-8 relative">
                         <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-6 h-px bg-white/20" />
                         <div className="flex items-center gap-3">
                           <Database size={16} className="text-blue-400" />
                           <span className="font-mono text-xs opacity-80">RAG Indicies Loaded</span>
                         </div>
                         <span className="font-mono text-xs font-bold text-amber-400">14ms ping</span>
                       </div>
                     </div>

                   </div>
                 </div>
               </div>
             </motion.div>
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
            {/* Animated Rings fitting the Light Theme */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-50">
               <motion.div 
                 animate={{ rotate: 360, scale: [1, 1.05, 1] }} 
                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 border-[2px] border-dashed border-[var(--border)] rounded-full mix-blend-multiply"
               />
               <motion.div 
                 animate={{ rotate: -360, scale: [1, 1.1, 1] }} 
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-10 border border-[var(--accent-primary)]/20 rounded-full"
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
                Deploy Your First <br/>
                <span className="gradient-text">Autonomous Agent.</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-[var(--text-mid)] mx-auto mb-12 max-w-3xl leading-relaxed">
                Skip the theoretical discussions. Let our engineering team build a proof-of-concept tailored specifically to your operational bottlenecks.
              </p>
              
              <Link to="/contact" className="btn-primary flex items-center justify-center px-10 py-5 text-lg font-bold shadow-[var(--shadow-lift)] overflow-hidden relative">
                <span className="relative z-10 transition-transform group-hover:-translate-x-1">Schedule Architecture Review</span>
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

function Eye(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function Sparkles(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  )
}
