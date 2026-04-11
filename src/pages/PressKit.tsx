import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { DownloadCloud, ExternalLink } from 'lucide-react'
import './styles/PressKit.css'

export default function PressKit() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="press-page">
      
      {/* ── HERO ──────────────── */}
      <section className="press-hero">
        <div className="section-container relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="text-[var(--text-muted)] mb-6 font-bold tracking-widest uppercase text-sm px-4 py-2 bg-[var(--surface-soft)] rounded-full border border-[var(--border)] shadow-sm">
             Brand Assets & PR
          </div>
          
          <h1 className="section-title mb-6" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: '1.1' }}>
            The KesariX <br/>
            <span className="gradient-text">Press Kit.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[var(--text-mid)] mb-10 leading-relaxed font-medium">
            Official logos, brand colors, typography guidelines, and company information for media and press usage.
          </p>
          
          <a href="#" className="btn-primary flex items-center gap-2">
            Download Full Kit (ZIP) <DownloadCloud size={20} />
          </a>
        </div>
      </section>

      {/* ── LOGOS ──────────────── */}
      <section className="section-padding bg-[var(--surface-soft)] text-center">
        <div className="section-container max-w-5xl">
          <span className="section-eyebrow mb-4">Identity</span>
          <h2 className="section-title mb-12">Logomarks</h2>
          
          <div className="press-section-grid">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="press-asset-card press-logo-dark"
            >
              <div className="press-logo-demo">
                Kesari<span className="highlight">X</span>
              </div>
              <button className="press-download-btn"><DownloadCloud size={16} /> SVG & PNG</button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.1 }}
              className="press-asset-card press-logo-light"
            >
              <div className="press-logo-demo">
                Kesari<span className="highlight">X</span>
              </div>
              <button className="press-download-btn"><DownloadCloud size={16} /> SVG & PNG</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── COLORS ──────────────── */}
      <section className="section-padding bg-white border-y border-[var(--border)]">
        <div className="section-container max-w-5xl">
          <span className="section-eyebrow mb-4">Palette</span>
          <h2 className="section-title mb-12">Brand Colors</h2>
          
          <p className="text-[var(--text-mid)] leading-relaxed max-w-3xl mb-8">
            The KesariX brand relies on stark contrast. We utilize deep enterprise darks, stark whites, and our signature technical Amber to highlight interactive logic.
          </p>

          <div className="press-color-grid">
            {[
              { name: "Kesari Amber", hex: "#D97706", rgb: "217, 119, 6", bg: "bg-[#D97706]" },
              { name: "Core White", hex: "#FFFFFF", rgb: "255, 255, 255", bg: "bg-[#FFFFFF]" },
              { name: "Base Gray", hex: "#F9FAFB", rgb: "249, 250, 251", bg: "bg-[#F9FAFB]" },
              { name: "Enterprise Dark", hex: "#0A0A0B", rgb: "10, 10, 11", bg: "bg-[#0A0A0B]" },
            ].map((color, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="press-color-block"
              >
                <div className={`press-color-swatch ${color.bg}`} />
                <div className="press-color-meta">
                  <span>{color.name}</span>
                  {color.hex} <br/>
                  RGB {color.rgb}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPANY INFO ──────────────── */}
      <section className="py-24 bg-[var(--surface-soft)]">
        <div className="section-container max-w-3xl premium-card p-12 bg-white">
          <h3 className="text-2xl font-bold mb-6 font-['Outfit']">Company Fact Sheet</h3>
          
          <ul className="space-y-4 mb-8">
            <li className="flex justify-between py-3 border-b border-[var(--border)]">
              <span className="font-bold text-[var(--text-dark)]">Founded</span>
              <span className="text-[var(--text-muted)]">2019</span>
            </li>
            <li className="flex justify-between py-3 border-b border-[var(--border)]">
              <span className="font-bold text-[var(--text-dark)]">Headquarters</span>
              <span className="text-[var(--text-muted)]">India</span>
            </li>
            <li className="flex justify-between py-3 border-b border-[var(--border)]">
              <span className="font-bold text-[var(--text-dark)]">Sector</span>
              <span className="text-[var(--text-muted)]">B2B Software Engineering</span>
            </li>
            <li className="flex justify-between py-3 border-b border-[var(--border)]">
              <span className="font-bold text-[var(--text-dark)]">Contact</span>
              <span className="text-[var(--text-muted)] font-mono">press@kesarix.com</span>
            </li>
          </ul>

          <a href="/contact" className="text-[var(--accent-primary)] font-bold flex items-center gap-2 hover:underline">
             Contact Media Relations <ExternalLink size={16} />
          </a>
        </div>
      </section>

    </div>
  )
}
