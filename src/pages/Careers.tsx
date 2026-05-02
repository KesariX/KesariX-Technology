import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Rocket, Trophy, Globe, Heart, Zap } from 'lucide-react'
import SEO from '../components/SEO'
import './styles/Careers.css'

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
      <SEO
        title="Careers at KesariX Technology — Join Our Team"
        description="Join KesariX Technology's team of elite AI engineers and software architects. Explore open roles and help us build the intelligent systems of tomorrow."
        path="/company/careers"
      />
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
              <div className="section-eyebrow careers-board__eyebrow" style={{ marginBottom: '0.75rem' }}>Open Positions</div>
              <h2 className="section-title careers-board__title">Join The Architecture.</h2>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="careers-no-positions"
          >
            <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
              <h3 className="careers-no-positions__title" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>
                No Positions Available Right Now
              </h3>
              <p className="careers-no-positions__text" style={{ marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
                We're not actively hiring at the moment, but we're always interested in exceptional 10× talent. If you believe you're a great fit for our team, we'd love to hear from you.
              </p>
              <Link 
                to="/contact" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  background: '#D97706',
                  color: 'white',
                  borderRadius: '8px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#B8620A'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#D97706'}
              >
                Send Your Portfolio <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          <div className="careers-open-door">
            <h3 className="careers-open-door__title" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              Interested in Working Together?
            </h3>
            <p className="careers-open-door__text" style={{ marginBottom: '1.5rem' }}>
              Tell us about your background, expertise, and what you're working on. We review every submission personally.
            </p>
            <Link to="/contact" style={{ color: '#D97706', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Get In Touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
