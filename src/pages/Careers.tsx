import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Rocket, Trophy, Globe, Heart, Zap } from 'lucide-react'
import './styles/Careers.css'

const jobs = [
  { title: 'Senior AI Systems Architect', team: 'Machine Learning', location: 'Remote (Global)', type: 'Full-Time' },
  { title: 'Lead Full-Stack Engineer (Next.js / Node)', team: 'Web Engineering', location: 'India / Remote', type: 'Full-Time' },
  { title: 'DevOps & Infrastructure Lead', team: 'IT Services', location: 'Remote (US Timezone)', type: 'Full-Time' },
  { title: 'B2B Technical Sales Executive', team: 'Growth', location: 'Remote', type: 'Full-Time' }
]

const perks = [
  { icon: Globe, title: 'Fully Remote', desc: 'Work from anywhere in the world' },
  { icon: Rocket, title: 'Fast Execution', desc: 'Ship real products that matter' },
  { icon: Zap, title: 'Top Stack', desc: 'Latest frameworks and tools' },
  { icon: Heart, title: 'Health Cover', desc: 'Full family medical coverage' }
]

const culture = [
  { icon: Code2, title: 'Deep Focus', desc: 'No endless meetings. We value uninterrupted work blocks where engineers can solve complex architecture problems without distraction.' },
  { icon: Rocket, title: 'Async First', desc: 'We operate globally. Loom videos, PR reviews, and detailed RFCs replace noisy Slack channels and unnecessary synchronous meetings.' },
  { icon: Trophy, title: 'Meritocracy', desc: 'The best technical argument wins regardless of title. We rapidly promote individuals who take extreme ownership of their code.' }
]

export default function Careers() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="careers-page">
      {/* ── HERO ── */}
      <section className="careers-hero">
        <div className="careers-hero__noise" />
        <div className="careers-hero__grid-lines" />

        <div className="careers-hero__inner">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="careers-hero__label">We're Hiring</div>
            <h1 className="careers-hero__title">
              Build Systems<br /><em>That Matter.</em>
            </h1>
            <p className="careers-hero__desc">
              Join a collective of elite engineers, architects, and researchers. We don't build generic SaaS wrappers — we build mission-critical enterprise platforms.
            </p>
            <div className="careers-hero__pills">
              {['Remote First', 'Top-Tier Stack', 'Meritocracy', 'No Bureaucracy'].map(p => (
                <span key={p} className="careers-hero__pill">{p}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="careers-perks"
          >
            {perks.map((perk, i) => (
              <div key={i} className="careers-perk">
                <div className="careers-perk__icon"><perk.icon size={22} /></div>
                <div className="careers-perk__title">{perk.title}</div>
                <div className="careers-perk__desc">{perk.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CULTURE CARDS ── */}
      <section>
        <div className="careers-culture">
          {culture.map((c, i) => (
            <motion.div
              key={i}
              className="careers-culture-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="careers-culture-card__icon"><c.icon size={24} /></div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── JOB BOARD ── */}
      <section className="careers-board" id="positions">
        <div className="careers-board__inner">
          <div className="careers-board__header">
            <div>
              <div className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>Open Positions</div>
              <h2 className="section-title">Join The Architecture.</h2>
            </div>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>
              {jobs.length} open roles
            </span>
          </div>

          {jobs.map((job, i) => (
            <motion.div
              key={i}
              className="careers-job-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div>
                <h3>{job.title}</h3>
                <div className="careers-job-tags">
                  <span className="careers-job-tag">{job.team}</span>
                  <span className="careers-job-tag">{job.location}</span>
                  <span className="careers-job-tag">{job.type}</span>
                </div>
              </div>
              <button className="careers-apply-btn">
                Apply Now <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}

          <div className="careers-open-door">
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-dark)' }}>
              Don't see your role?
            </h3>
            <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem' }}>
              We're always looking for exceptional 10× talent, regardless of open postings.
            </p>
            <Link to="/contact" style={{ color: 'var(--accent-primary)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Send your portfolio <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
