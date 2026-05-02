import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Brain, Bot, ArrowRight, Network, Database, Cpu, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import NeuralPulseMatrix from '../components/3D/NeuralPulseMatrix'
import CTASection from '../components/CTASection'

// Keep NeuralPulseMatrix import - already present

export default function AiSolutions() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <div className="bg-[var(--bg-base)] overflow-x-hidden min-h-screen">
      <SEO
        title="AI Solutions & Machine Learning | KesariX Technology"
        description="KesariX delivers production-grade AI — LLM orchestration, predictive ML engines, and autonomous multi-agent systems. We engineer neural architectures that execute at scale."
        path="/services/ai-solutions"
      />
      {/* ── ADVANCED 3D BACKGROUND SYSTEM ──────────────── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <NeuralPulseMatrix className="opacity-60" />
        
        {/* Holographic Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,var(--bg-base)_100%)] opacity-40" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--accent-primary)]/20 to-transparent animate-pulse" />
      </div>

      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .ai-scanline {
          width: 100%;
          height: 100px;
          background: linear-gradient(to bottom, transparent, rgba(217, 119, 6, 0.05), transparent);
          position: absolute;
          animation: scanline 8s linear infinite;
          pointer-events: none;
        }
        .glitch-text {
          position: relative;
          display: inline-block;
        }
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          left: 2px;
          text-shadow: -1px 0 #3B82F6;
          top: 0;
          color: var(--text-dark);
          background: transparent;
          overflow: hidden;
          clip: rect(0, 900px, 0, 0);
          animation: noise-anim 2s infinite linear alternate-reverse;
        }
        @keyframes noise-anim {
          0% { clip: rect(20px, 9999px, 10px, 0); }
          20% { clip: rect(40px, 9999px, 30px, 0); }
          40% { clip: rect(10px, 9999px, 50px, 0); }
          60% { clip: rect(80px, 9999px, 90px, 0); }
          80% { clip: rect(30px, 9999px, 20px, 0); }
          100% { clip: rect(60px, 9999px, 70px, 0); }
        }
      `}</style>

      {/* ── HERO SECTION ──────────────── */}
      <section className="relative w-full min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
        <div className="ai-scanline" />
        
        <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 text-[var(--accent-primary)] font-bold text-sm mb-8 backdrop-blur-md">
              <Sparkles size={16} />
              <span>Next-Gen Artificial Intelligence</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-[var(--text-dark)]">
              Neural <br />
              <span className="gradient-text glitch-text" data-text="Architecture.">Architecture.</span>
            </h1>

            <p className="text-xl text-[var(--text-mid)] max-w-lg mb-10 leading-relaxed font-light">
              We don't just use AI; we engineer it. From deterministic deep learning to autonomous multi-agent systems, we build the brains of tomorrow's industry leaders.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link to="/contact" className="btn-primary px-10 py-5 group">
                Build Your Engine <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center gap-4 text-[var(--text-muted)]">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[var(--bg-base)] bg-[var(--surface-soft)]" />
                  ))}
                </div>
                <span className="text-sm font-medium">Trusted by 50+ Enterprises</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Unique Visual: Floating Geometric Neural Core */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-primary)]/20 to-[var(--accent-glow)]/20 rounded-[4rem] blur-[60px] animate-pulse" />
              <div className="relative w-full h-full rounded-[3.5rem] border border-[var(--border)] bg-[var(--surface-soft)]/30 backdrop-blur-xl p-12 flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-48 h-48 bg-white rounded-3xl shadow-2xl flex items-center justify-center z-10 border border-[var(--border)]"
                >
                  <Brain size={80} className="text-[var(--accent-primary)]" />
                </motion.div>
                
                <div className="absolute top-10 right-10 w-20 h-20 bg-[var(--accent-glow)]/10 rounded-2xl backdrop-blur-md border border-[var(--border)] flex items-center justify-center animate-bounce" style={{ animationDuration: '4s' }}>
                  <Cpu size={32} className="text-[var(--accent-glow)]" />
                </div>
                
                <div className="absolute bottom-12 left-12 w-24 h-24 bg-blue-500/5 rounded-full backdrop-blur-md border border-[var(--border)] flex items-center justify-center animate-pulse">
                  <ShieldCheck size={36} className="text-blue-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CORE STACK ──────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-5xl font-bold mb-6 tracking-tight text-[var(--text-dark)]">The <span className="gradient-text">Neural Core</span> Stack</h2>
            <p className="text-xl text-[var(--text-mid)]">We deploy production-grade AI that doesn't just hallucinate—it executes.</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'LLM Orchestration',
                desc: 'Fine-tuned private models running in your VPC. Secure, deterministic, and optimized for latency.',
                icon: Network,
                color: 'text-[var(--accent-primary)]'
              },
              {
                title: 'Predictive Engines',
                desc: 'Turning historical data into future operational foresight with custom-trained ML pipelines.',
                icon: Database,
                color: 'text-blue-500'
              },
              {
                title: 'Autonomous Agents',
                desc: 'Goal-oriented agents that perform multi-step reasoning tasks without human intervention.',
                icon: Bot,
                color: 'text-emerald-500'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="group p-10 rounded-[2.5rem] bg-white border border-[var(--border)] hover:border-[var(--accent-primary)]/50 transition-all duration-500 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-[var(--surface-soft)] flex items-center justify-center ${feature.color} mb-8 group-hover:scale-110 transition-transform`}>
                  <feature.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--text-dark)]">{feature.title}</h3>
                <p className="text-[var(--text-mid)] leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────── */}
      <CTASection
        title={<>Ready to Engineer <br /> Intelligence?</>}
        subtitle="Stop playing with chat apps. Start building industrial-scale systems."
        buttonText="Get Started Now"
        eyebrow="Ready to build?"
      />
    </div>
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
