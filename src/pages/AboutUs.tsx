import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Target, Shield, Activity } from 'lucide-react'
import CTA from '../components/CTA'
import './styles/AboutUs.css'

export default function AboutUs() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const values = [
    {
      icon: Target,
      title: 'Deterministic Results',
      desc: 'We reject hype. Every solution we architect is bound by mathematical certainty, strict QA testing, and measurable ROI that you can directly attribute to our work.'
    },
    {
      icon: Shield,
      title: 'Absolute Security',
      desc: 'Enterprise data is sacred. We utilize zero-trust architecture and heavily vetted microservices to completely isolate your intellectual property.'
    },
    {
      icon: Activity,
      title: 'Relentless Iteration',
      desc: 'Software decays. We don\'t just ship and leave — we monitor logs, refactor for scale, and continuously optimize based on real production telemetry.'
    }
  ]

  const timeline = [
    { year: '2026', title: 'KesariX Founded', desc: 'Built a world-class AI & digital engineering platform from the ground up with a mission to transform how enterprises build intelligent systems.' },
    { year: '2026', title: 'Rapid Product Development', desc: 'Shipped 5+ successful scalable deployments, including 3+ custom enterprise AI and ML models actively in production.' },
    { year: '2026', title: 'Client Partnerships', desc: 'Partnered with 5+ trusted teams including Wercatalyst and Neha Engineering Works, delivering measurable business results.' },
    { year: '2026', title: 'Scaling Operations', desc: 'Formed a core team of 6+ elite engineers and domain experts, maintaining a 98% client satisfaction rate with repeat engagements.' }
  ]

  return (
    <div>
      {/* ── HERO ─────────────────────────── */}
      <section className="about-hero">
        {/* Left text */}
        <div className="about-hero__left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-hero__eyebrow">Our Story</div>
            <h1 className="about-hero__title">
              We Engineer<br />
              <em>What's Next.</em>
            </h1>
            <p className="about-hero__desc">
              A collective of systems architects, deep-learning researchers, and full-stack engineers building uncompromising digital platforms for the enterprise layer.
            </p>
            <div className="about-hero__badges">
              {['Founded 2026', 'India Based', '5+ Clients', '98% Satisfaction'].map(b => (
                <span key={b} className="about-hero__badge">{b}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right dark panel */}
        <div className="about-hero__right">
          <div className="about-hero__blob about-hero__blob--1" />
          <div className="about-hero__blob about-hero__blob--2" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="about-hero__stat-cluster"
          >
            {[
              { val: '5+', label: 'Enterprise Clients' },
              { val: '6+', label: 'Team Members' },
              { val: '98%', label: 'Client Satisfaction' },
              { val: '5+', label: 'Projects Delivered' }
            ].map((s, i) => (
              <div key={i} className="about-stat-tile">
                <div className="about-stat-tile__val">{s.val}</div>
                <div className="about-stat-tile__label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── VALUES HORIZONTAL SCROLL ─────────── */}
      <section className="about-values">
        <div className="about-values__header">
          <div>
            <div className="section-eyebrow" style={{ marginBottom: '1rem' }}>Our DNA</div>
            <h2 className="section-title">Ethos &amp; Execution.</h2>
          </div>
          <p style={{ maxWidth: '360px', color: 'var(--text-mid)', lineHeight: '1.7' }}>
            Three principles guide every architecture decision, every code review, and every client call.
          </p>
        </div>

        <div className="about-values__scroll">
          {values.map((v, i) => (
            <motion.div
              key={i}
              className="about-value-card"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="about-value-card__number">0{i + 1}</div>
              <div className="about-value-card__icon">
                <v.icon size={26} />
              </div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-[#fafaf8] border-y border-[var(--border)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--accent-primary)]/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="section-container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="section-eyebrow mb-4 flex items-center justify-center gap-2 mx-auto">
              <span className="w-8 h-px bg-[var(--accent-primary)]"></span>
              History
              <span className="w-8 h-px bg-[var(--accent-primary)]"></span>
            </div>
            <h2 className="section-title">The Road to <span className="gradient-text">Scale.</span></h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Central Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--accent-primary)] via-[var(--accent-primary)]/30 to-transparent transform -translate-x-1/2 rounded-full" />

            {timeline.map((node, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full mb-12 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  {/* Content Card */}
                  <div className="w-full pl-16 md:pl-0 md:w-[45%] peer relative z-30">
                    <motion.div 
                      className={`p-8 md:p-10 rounded-[2rem] bg-white border border-[var(--border)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(217,119,6,0.12)] hover:border-[var(--accent-primary)]/30 transition-all duration-500 relative group overflow-hidden flex flex-col ${isEven ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}
                      whileHover={{ y: -5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/0 via-transparent to-[var(--accent-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[var(--accent-primary)] to-amber-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left ${isEven ? 'md:origin-right' : 'md:origin-left'}`} />
                      
                      <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] font-mono font-bold text-sm mb-5 tracking-widest border border-[var(--accent-primary)]/20 group-hover:bg-[var(--accent-primary)] group-hover:text-white transition-colors duration-500 relative z-10">
                        {node.year}
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-4 font-['Outfit'] relative z-10">
                        {node.title}
                      </h3>
                      <p className="text-[var(--text-mid)] leading-relaxed relative z-10">
                        {node.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-[20px] md:left-1/2 top-12 md:top-1/2 w-10 h-10 rounded-full bg-white border-4 border-[var(--accent-primary)] shadow-[0_0_15px_rgba(217,119,6,0.2)] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20 peer-hover:scale-125 peer-hover:border-amber-400 peer-hover:shadow-[0_0_25px_rgba(217,119,6,0.6)] peer-hover:[&>div]:bg-amber-400 transition-all duration-500 pointer-events-none">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)] transition-colors duration-500" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
