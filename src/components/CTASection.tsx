import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import './styles/CTASection.css'

interface CTASectionProps {
  title: React.ReactNode
  subtitle: string
  buttonText: string
  buttonLink?: string
  eyebrow?: string
}

export default function CTASection({
  title,
  subtitle,
  buttonText,
  buttonLink = '/contact',
  eyebrow = 'Ready to build?',
}: CTASectionProps) {
  const keywordsRow1 = ['ENGINEER WHAT\'S NEXT', 'SCALE TO MILLIONS', 'BUILD FASTER', 'LAUNCH YOUR MVP', 'AI-DRIVEN SOLUTIONS']
  const keywordsRow2 = ['START YOUR PROJECT', 'RAPID DEVELOPMENT', 'ENTERPRISE GRADE', 'ZERO TO ONE', 'DISRUPT THE MARKET']
  const keywordsRow3 = ['SEAMLESS ARCHITECTURE', 'PUSH BOUNDARIES', 'ACCELERATE GROWTH', 'CRAFTED WITH CODE', 'NEXT-GEN TECH']

  return (
    <section className="cta-section" id="contact">
      {/* Background Kinetic Text Wall */}
      <div className="cta-section__text-wall">
        {/* Row 1 - scrolling left */}
        <div className="cta-section__marquee-row">
          <div className="cta-section__marquee-track cta-section__marquee-track--left">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="cta-section__marquee-content">
                {keywordsRow1.map((word, idx) => (
                  <span key={`${i}-${idx}`}>{word} <span className="cta-section__spark">✦</span></span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - scrolling right */}
        <div className="cta-section__marquee-row">
          <div className="cta-section__marquee-track cta-section__marquee-track--right">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="cta-section__marquee-content">
                {keywordsRow2.map((word, idx) => (
                  <span key={`${i}-${idx}`}>{word} <span className="cta-section__spark">✦</span></span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 - scrolling left */}
        <div className="cta-section__marquee-row">
          <div className="cta-section__marquee-track cta-section__marquee-track--left">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="cta-section__marquee-content">
                {keywordsRow3.map((word, idx) => (
                  <span key={`${i}-${idx}`}>{word} <span className="cta-section__spark">✦</span></span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Center Floating Glass Card */}
      <div className="cta-section__center-anchor">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="cta-section__glass-panel"
        >
          {eyebrow && <span className="cta-section__eyebrow">{eyebrow}</span>}
          <h2 className="cta-section__title">{title}</h2>
          <p className="cta-section__subtitle">{subtitle}</p>

          <div className="cta-section__actions">
            <Link to={buttonLink} className="cta-section__btn-primary">
              {buttonText} <ArrowUpRight size={22} className="cta-section__btn-icon" />
            </Link>
          </div>

          <div className="cta-section__trust">
            <span>✓ Free 30m discovery</span>
            <span className="cta-section__trust-dot">•</span>
            <span>✓ Response within 24h</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
