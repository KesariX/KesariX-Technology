import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { DownloadCloud, ExternalLink } from 'lucide-react'
import './styles/PressKit.css'

const colors = [
  { name: 'Kesari Amber', hex: '#D97706', rgb: '217, 119, 6', bg: '#D97706' },
  { name: 'Accent Gold', hex: '#F59E0B', rgb: '245, 158, 11', bg: '#F59E0B' },
  { name: 'Glow Yellow', hex: '#FBBF24', rgb: '251, 191, 36', bg: '#FBBF24' },
  { name: 'Enterprise Dark', hex: '#1A1A2E', rgb: '26, 26, 46', bg: '#1A1A2E' },
  { name: 'Surface White', hex: '#FAFAF8', rgb: '250, 250, 248', bg: '#FAFAF8', border: true },
  { name: 'Border Gray', hex: '#E5E7EB', rgb: '229, 231, 235', bg: '#E5E7EB' }
]

const logos = [
  { variant: 'Light Background', previewClass: 'press-logo-preview--light', markClass: 'press-logo-mark--dark' },
  { variant: 'Dark Background', previewClass: 'press-logo-preview--dark', markClass: 'press-logo-mark--light' },
  { variant: 'Amber Gradient', previewClass: 'press-logo-preview--amber', markClass: 'press-logo-mark--white' }
]

const facts = [
  { key: 'Legal Name', val: 'KesariX Technology Pvt. Ltd.' },
  { key: 'Founded', val: '2019' },
  { key: 'Headquarters', val: 'India (Remote-First)' },
  { key: 'Focus Area', val: 'B2B Enterprise Software Engineering & AI' },
  { key: 'Total Projects', val: '120+ across 14 countries' },
  { key: 'Press Contact', val: 'press@kesarix.com', mono: true },
  { key: 'Website', val: 'https://kesarix.com', mono: true }
]

export default function PressKit() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="press-page">
      {/* ── HERO ── */}
      <section className="press-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="press-hero__label">Brand Assets & PR</div>
          <h1 className="press-hero__title">
            The KesariX<br /><em>Press Kit.</em>
          </h1>
          <p className="press-hero__desc">
            Official logos, brand colors, typography guidelines, and company information for media, press, and partner usage.
          </p>
          <a href="/assets/KesariX_PressKit.zip" download className="btn-primary">
            <DownloadCloud size={18} /> Download Full Kit (.zip)
          </a>
        </motion.div>
      </section>

      {/* ── LOGOS ── */}
      <section className="press-section">
        <h2 className="press-section__title">Logomarks</h2>
        <p className="press-section__subtitle">
          Available in SVG, PNG (transparent), and PDF formats. Always maintain minimum clear space equal to the height of the "K" character on all sides.
        </p>
        <div className="press-logo-grid">
          {logos.map((l, i) => (
            <motion.div
              key={i}
              className="press-logo-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className={`press-logo-preview ${l.previewClass}`}>
                <span className={`press-logo-mark ${l.markClass}`}>
                  Kesari<span className="press-logo-accent">X</span>
                </span>
              </div>
              <div className="press-logo-actions">
                <span className="press-logo-variant">{l.variant}</span>
                <button className="press-download-btn">
                  <DownloadCloud size={14} /> SVG & PNG
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── COLORS ── */}
      <section className="press-section">
        <h2 className="press-section__title">Brand Colors</h2>
        <p className="press-section__subtitle">
          The KesariX palette uses stark enterprise darks and our signature technical Amber to communicate precision, speed, and reliability.
        </p>
        <div className="press-colors">
          {colors.map((c, i) => (
            <motion.div
              key={i}
              className="press-color-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div
                className="press-color-swatch"
                style={{ background: c.bg, border: c.border ? '1px solid #E5E7EB' : undefined }}
              />
              <div className="press-color-name">{c.name}</div>
              <div className="press-color-codes">
                HEX {c.hex}<br />
                RGB ({c.rgb})
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TYPOGRAPHY ── */}
      <section className="press-section">
        <h2 className="press-section__title">Typography</h2>
        <p className="press-section__subtitle">
          Two typefaces define the KesariX voice: Outfit for expressive headings and Inter for readable body copy. JetBrains Mono is reserved for code and metadata.
        </p>
        <div className="press-type-specimens">
          {[
            { label: 'Outfit', role: 'Display / Headings', weight: '700 – 900', style: { fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: '2.5rem', color: 'var(--text-dark)', letterSpacing: '-0.03em', lineHeight: 1.1 }, sample: 'We Engineer What\'s Next.' },
            { label: 'Inter', role: 'Body / UI Text', weight: '400 – 600', style: { fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '1.0625rem', color: 'var(--text-mid)', lineHeight: 1.75 }, sample: 'A collective of systems architects building uncompromising digital platforms.' },
            { label: 'JetBrains Mono', role: 'Code / Labels', weight: '500 – 700', style: { fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, fontSize: '0.875rem', color: 'var(--accent-primary)', letterSpacing: '0.1em', textTransform: 'uppercase' }, sample: 'SYSTEM · ARCHITECTURE · API_GATEWAY · 2026' }
          ].map((t, i) => (
            <div key={i} className="press-type-row">
              <div className="press-type-meta">
                <strong>{t.label}</strong>
                Role: {t.role}<br />
                Weight: {t.weight}
              </div>
              <span style={t.style}>{t.sample}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FACT SHEET ── */}
      <section className="press-facts">
        <h2 className="press-section__title">Company Fact Sheet</h2>
        <p className="press-section__subtitle">Key information for editorial and press reference.</p>

        <div className="press-fact-table">
          {facts.map((f, i) => (
            <motion.div
              key={i}
              className="press-fact-row"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="press-fact-key">{f.key}</div>
              <div className={`press-fact-val ${f.mono ? 'mono' : ''}`}>{f.val}</div>
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="mailto:press@kesarix.com" className="btn-primary">
            Contact Media Relations <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </div>
  )
}
