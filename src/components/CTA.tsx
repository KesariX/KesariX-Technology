import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import './styles/CTA.css'

export default function CTA() {
  const keywordsRow1 = ['ENGINEER WHAT\'S NEXT', 'SCALE TO MILLIONS', 'BUILD FASTER', 'LAUNCH YOUR MVP', 'AI-DRIVEN SOLUTIONS']
  const keywordsRow2 = ['START YOUR PROJECT', 'RAPID DEVELOPMENT', 'ENTERPRISE GRADE', 'ZERO TO ONE', 'DISRUPT THE MARKET']
  const keywordsRow3 = ['SEAMLESS ARCHITECTURE', 'PUSH BOUNDARIES', 'ACCELERATE GROWTH', 'CRAFTED WITH CODE', 'NEXT-GEN TECH']

  return (
    <section className="kx-cta" id="contact">
      
      {/* Background Kinetic Text Wall */}
      <div className="kx-cta__text-wall">
        {/* Row 1 - scrolling left */}
        <div className="kx-cta__marquee-row">
           <div className="kx-cta__marquee-track kx-cta__marquee-track--left">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="kx-cta__marquee-content">
                  {keywordsRow1.map((word, idx) => (
                    <span key={`${i}-${idx}`}>{word} <span className="kx-cta__spark">✦</span></span>
                  ))}
                </div>
              ))}
           </div>
        </div>

        {/* Row 2 - scrolling right */}
        <div className="kx-cta__marquee-row">
           <div className="kx-cta__marquee-track kx-cta__marquee-track--right">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="kx-cta__marquee-content">
                  {keywordsRow2.map((word, idx) => (
                    <span key={`${i}-${idx}`}>{word} <span className="kx-cta__spark">✦</span></span>
                  ))}
                </div>
              ))}
           </div>
        </div>

        {/* Row 3 - scrolling left */}
        <div className="kx-cta__marquee-row">
           <div className="kx-cta__marquee-track kx-cta__marquee-track--left">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="kx-cta__marquee-content">
                  {keywordsRow3.map((word, idx) => (
                    <span key={`${i}-${idx}`}>{word} <span className="kx-cta__spark">✦</span></span>
                  ))}
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Center Floating Interstitial Glass Card */}
      <div className="kx-cta__center-anchor">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="kx-cta__glass-panel"
        >
          <span className="kx-cta__eyebrow">Ready to build?</span>
          <h2 className="kx-cta__title">
            Let's Turn Your Idea
            <br />
            Into a Product.
          </h2>
          <p className="kx-cta__subtitle">
            Whether you're a startup with a napkin sketch or an enterprise scaling to millions, we're the engineering team that actually ships. Your next level awaits.
          </p>
          
          <div className="kx-cta__actions">
            <Link to="/contact" className="kx-cta__btn-primary">
              Start Your Project <ArrowUpRight size={22} className="kx-cta__btn-icon" />
            </Link>
          </div>

          <div className="kx-cta__trust">
            <span>✓ Free 30m discovery</span>
            <span className="kx-cta__trust-dot">•</span>
            <span>✓ Response within 24h</span>
          </div>

        </motion.div>
      </div>

    </section>
  )
}
