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
    { year: '2026', title: 'KesariX Founded', desc: 'From concept to enterprise leader in a single year. Built a world-class AI & digital engineering platform from the ground up with a mission to transform how enterprises build intelligent systems.' },
    { year: '2026', title: 'Rapid Product Development', desc: 'Shipped 5 production-grade AI agent frameworks, autonomous workflow systems, and custom web platforms. Every product built with zero-tolerance for compromise.' },
    { year: '2026', title: 'Enterprise Adoption', desc: 'Onboarded 40+ Fortune 500 and fast-growing companies. Architected deterministic AI systems handling millions of transactions daily across critical infrastructure.' },
    { year: '2026', title: 'Scaling Operations', desc: 'Grew team to 25+ elite engineers, ML researchers, and architects. Established offices in Mumbai & Bangalore. Deployed systems processing 4.8M+ autonomous agent actions monthly.' }
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
              {['Founded 2024', 'India Based', '40+ Clients', '98% Satisfaction'].map(b => (
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
              { val: '40+', label: 'Enterprise Clients' },
              { val: '25+', label: 'Team Members' },
              { val: '98%', label: 'Client Satisfaction' },
              { val: '2', label: 'Global Offices' }
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
      <section className="about-timeline">
        <div className="about-timeline__inner">
          <div className="section-eyebrow" style={{ marginBottom: '1rem' }}>History</div>
          <h2 className="section-title" style={{ marginBottom: '4rem' }}>The Road to Scale.</h2>

          <div className="about-timeline__track">
            {timeline.map((node, i) => (
              <motion.div
                key={i}
                className="about-timeline__item"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <div className="about-timeline__dot" />
                <div className="about-timeline__year">{node.year}</div>
                <div className="about-timeline__title">{node.title}</div>
                <div className="about-timeline__desc">{node.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
