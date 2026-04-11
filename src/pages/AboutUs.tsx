import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Activity, Target, Shield, Users, Crosshair, MapPin } from 'lucide-react'
import './styles/AboutUs.css'

export default function AboutUs() {
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
    <div className="about-page">
      
      {/* ── HERO ──────────────── */}
      <section className="about-hero">
        <div className="about-grid-pattern" />
        <div className="section-container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center max-w-4xl mx-auto"
          >
            <div className="w-16 h-16 rounded-2xl bg-[var(--surface-soft)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-primary)] mb-8 shadow-sm">
               <Crosshair size={32} />
            </div>
            
            <h1 className="section-title mb-6 text-center" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: '1.1' }}>
              We Engineer <br/>
              <span className="gradient-text">What's Next.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[var(--text-mid)] mb-10 leading-relaxed font-medium">
              We are a collective of systems architects, deep-learning researchers, and full-stack engineers building uncompromising digital platforms for the enterprise layer.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.3 }}
             className="mt-16 w-full max-w-5xl mx-auto"
          >
             <div className="about-stats-grid">
               {[
                 { i: "120+", l: "Projects Shipped" },
                 { i: "4", l: "Global Offices" },
                 { i: "99%", l: "Client Retention" },
                 { i: "24/7", l: "Systems Uptime" }
               ].map((stat, idx) => (
                 <div key={idx} className="about-stat-bubble">
                   <h3 className="text-4xl md:text-5xl font-black text-[var(--text-dark)] font-['Outfit'] mb-2">{stat.i}</h3>
                   <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">{stat.l}</span>
                 </div>
               ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────── */}
      <section className="section-padding bg-[var(--surface-soft)]">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="section-eyebrow mb-4">Our DNA</span>
            <h2 className="section-title">Ethos & Execution.</h2>
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
                icon: Target,
                title: "Deterministic Results",
                desc: "We reject hype. Every solution we architect is bound by mathematical certainty, strict QA testing, and measurable ROI."
              },
              {
                icon: Shield,
                title: "Absolute Security",
                desc: "Enterprise data is sacred. We utilize zero-trust architecture and heavily vetted microservices to isolate your IP."
              },
              {
                icon: Activity,
                title: "Relentless Iteration",
                desc: "Software decays. We don't just ship and leave; we monitor logs, refactor for scale, and continuously optimize."
              }
            ].map((value, i) => (
              <motion.div key={i} variants={itemVariants} className="about-value-box">
                <div className="about-value-icon">
                  <value.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-['Outfit'] text-[var(--text-dark)]">{value.title}</h3>
                <p className="text-[var(--text-mid)] text-lg leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────── */}
      <section className="section-padding bg-white relative border-y border-[var(--border)] overflow-hidden">
        <div className="section-container max-w-4xl">
           <span className="section-eyebrow mb-4">Our History</span>
           <h2 className="section-title mb-16">The Road to Scale.</h2>

           <div className="about-timeline-container">
             {[
               { year: "2019", title: "The Foundation", desc: "Started as a boutique web engineering agency focusing entirely on React and early Node.js microservice architectures." },
               { year: "2021", title: "Enterprise Scaling", desc: "Expanded into DevOps and IT infrastructure management to support our rapidly scaling client platforms under heavy load." },
               { year: "2023", title: "The AI Pivot", desc: "Formed a dedicated ML research wing to integrate Large Language Models deterministically into strict enterprise logic flows." },
               { year: "Present", title: "Global Operations", desc: "Now serving over 120+ product teams globally, providing end-to-end digital engineering from standard web to autonomous agents." }
             ].map((node, i) => (
               <motion.div 
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.15 }}
                 key={i} 
                 className="about-timeline-item group"
               >
                 <div className="about-timeline-dot group-hover:scale-125 transition-transform" />
                 <h4 className="text-xs font-black tracking-widest uppercase text-[var(--accent-primary)] mb-2">{node.year}</h4>
                 <h3 className="text-2xl font-bold mb-3 text-[var(--text-dark)] font-['Outfit']">{node.title}</h3>
                 <p className="text-[var(--text-mid)] text-lg">{node.desc}</p>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* ── LOCATIONS ──────────────── */}
      <section className="py-24 bg-[var(--surface-soft)] text-center">
        <div className="section-container">
          <div className="w-16 h-16 mx-auto rounded-full bg-white border border-[var(--border)] flex items-center justify-center text-gray-400 mb-6 font-bold shadow-sm">
            <MapPin size={24} className="text-[var(--accent-primary)]" />
          </div>
          <h2 className="text-3xl font-bold mb-4 font-['Outfit']">Global Presence. Local Engineering.</h2>
          <p className="text-[var(--text-mid)] max-w-xl mx-auto">
            While our core engineering hub is located in India, our infrastructure and project teams operate seamlessly across global time zones.
          </p>
        </div>
      </section>

    </div>
  )
}
