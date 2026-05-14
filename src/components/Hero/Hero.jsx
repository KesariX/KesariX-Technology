import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import './Hero.css'

export default function Hero() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial hidden states
      gsap.set('.h-word > span', { 
        yPercent: 120, 
        skewY: 8, 
        rotationX: 50, 
        opacity: 0, 
        transformOrigin: 'left top' 
      })
      gsap.set(['.hero__strip', '.hero__kicker'], { opacity: 0, y: 15 })
      gsap.set(['.hero__foot-desc', '.hero__foot-ctas', '.hero__foot-metrics'], { opacity: 0, y: 20 })
      gsap.set('.hero__scroll-wrap', { opacity: 0 })

      const tl = gsap.timeline({ delay: 1.8 })

      // Strip + kicker come in first
      tl.to('.hero__strip', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
        .to('.hero__kicker',  { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')

      // Headline: advanced 3D staggered word reveal
      tl.to('.h-word > span', {
        yPercent: 0,
        skewY: 0,
        rotationX: 0,
        opacity: 1,
        duration: 1.8,
        ease: 'expo.out',
        stagger: { amount: 0.8, from: 'start' },
      }, '-=0.6')

      // Bottom bar items
      tl.to('.hero__foot-desc',    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
        .to('.hero__foot-ctas',    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
        .to('.hero__foot-metrics', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
        .to('.hero__scroll-wrap',  { opacity: 1, duration: 0.8 }, '-=0.4')

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // Throttle mouse tracking to one rAF per frame
  const mousePending = useRef(false)
  const mouseXY = useRef({ x: 0, y: 0 })
  const handleMouseMove = (e) => {
    mouseXY.current = { x: e.clientX, y: e.clientY }
    if (mousePending.current || !sectionRef.current) return
    mousePending.current = true
    requestAnimationFrame(() => {
      mousePending.current = false
      const rect = sectionRef.current?.getBoundingClientRect()
      if (rect) {
        sectionRef.current.style.setProperty('--mouse-x', `${mouseXY.current.x - rect.left}px`)
        sectionRef.current.style.setProperty('--mouse-y', `${mouseXY.current.y - rect.top}px`)
      }
    })
  }

  const handleMouseEnter = () => sectionRef.current?.classList.add('is-hovered')
  const handleMouseLeave = () => sectionRef.current?.classList.remove('is-hovered')

  return (
    <section
      className="hero"
      id="top"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Cursor-following spotlight — visible only while hovering */}
      <div className="hero__spotlight" />

      {/* Static ambient glows */}
      <div className="hero__ambient hero__ambient--tr" />
      <div className="hero__ambient hero__ambient--bl" />

      {/* CSS animated gradient background */}
      <div className="hero__canvas" />
      {/* Film grain */}
      <div className="hero__grain" />
      {/* Readability gradients */}
      <div className="hero__vignette" style={{ 
        background: 'radial-gradient(circle at center, transparent 45%, rgba(5, 5, 7, 0.6) 100%)',
        pointerEvents: 'none'
      }} />

      {/* ── Top eyebrow strip ── */}
      <div className="hero__strip" style={{ zIndex: 10, position: 'relative' }}>
        <div className="hero__strip-left">
          <span>Based in</span>
          <span style={{ fontWeight: 500, marginLeft: '6px' }}>India</span>
        </div>
        <div className="hero__strip-right">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ display: 'block', width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%', boxShadow: '0 0 12px #10b981' }} />
            <span style={{ fontWeight: 500 }}>Available for new projects</span>
          </div>
        </div>
      </div>

      {/* ── Main: badge + headline ── */}
      <div className="hero__main" style={{ zIndex: 10, position: 'relative', width: '100%' }}>

        {/* Live badge */}
        <div className="hero__kicker">
          <span className="hero__kicker-dot" style={{ boxShadow: '0 0 10px rgba(255,255,255,0.5)' }} />
          <span>Live delivery partner for 5+ product teams</span>
        </div>

        {/* The headline — each word wrapped for clip reveal */}
        <h1 className="hero__headline" style={{
          fontSize: 'clamp(2.5rem, 7.5vw, 6.5rem)', // Fluid typography fixes the font cut-off
          lineHeight: '1.05',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.1em',
          perspective: '1000px'
        }}>

          {/* Line 1: WE BUILD */}
          <span className="hero__line">
            <span className="h-word">
              <span>We</span>
            </span>
            <span className="h-word h-word--accent">
              <span>Build</span>
            </span>
          </span>

          {/* Line 2: Extraordinary — serif italic, saffron, deliberately oversized */}
          <span className="hero__line hero__line--italic" style={{ paddingLeft: '5%' }}>
            <span className="h-word">
              <span 
                className="text-gradient-flow"
                style={{ 
                  background: 'linear-gradient(90deg, #f59e0b 0%, #ea580c 25%, #f43f5e 50%, #ea580c 75%, #f59e0b 100%)', 
                  backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                  paddingRight: '0.1em', // Prevents italic clipping issues
                  display: 'inline-block',
                  filter: 'drop-shadow(0 0 24px rgba(234, 88, 12, 0.4))'
                }}
              >
                Extraordinary
              </span>
            </span>
          </span>

          {/* Line 3: DIGITAL EXPERIENCES */}
          <span className="hero__line">
            <span className="h-word">
              <span>Digital</span>
            </span>
            <span className="h-word">
              <span style={{ color: '#d1d5db', fontWeight: 400 }}>Experiences</span>
            </span>
          </span>

          {/* Line 4: THAT INSPIRE. — outlined stroke */}
          <span className="hero__line hero__line--outline">
            <span className="h-word">
              <span 
                style={{ 
                  color: 'transparent', 
                  WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.5)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'crosshair',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff'
                  e.currentTarget.style.WebkitTextStroke = '1.5px #ffffff'
                  e.currentTarget.style.textShadow = '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4)'
                  e.currentTarget.style.transform = 'scale(1.03) translateX(1.5%)'
                  e.currentTarget.style.letterSpacing = '0.02em'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'transparent'
                  e.currentTarget.style.WebkitTextStroke = '1.5px rgba(255, 255, 255, 0.5)'
                  e.currentTarget.style.textShadow = 'none'
                  e.currentTarget.style.transform = 'scale(1) translateX(0)'
                  e.currentTarget.style.letterSpacing = 'normal'
                }}
              >
                That Inspire.
              </span>
            </span>
          </span>

        </h1>
      </div>

      {/* ── Bottom bar ── */}
      <div className="hero__foot">
        <div className="hero__foot-desc">
          <p>
            From AI agents to enterprise platforms — we blend strategy,
            design&nbsp;&amp; engineering into products that{' '}
            <em>launch fast</em> and scale with confidence.
          </p>
        </div>

        <div className="hero__foot-ctas">
          <a className="hero__cta-primary" href="#portfolio">
            <span>Explore Our Work</span>
            <span className="hero__cta-arrow">↗</span>
          </a>
          <a className="hero__cta-ghost" href="#services">
            See Service Blueprint
          </a>
        </div>

        <div className="hero__foot-metrics">
          <div className="hero__metric">
            <span className="hero__metric-num">50<sup>+</sup></span>
            <span className="hero__metric-label">Projects Shipped</span>
          </div>
          <div className="hero__metric">
            <span className="hero__metric-num">5<sup>+</sup></span>
            <span className="hero__metric-label">Active Teams</span>
          </div>
          <div className="hero__metric">
            <span className="hero__metric-num">98<sup>%</sup></span>
            <span className="hero__metric-label">Client Retention</span>
          </div>
        </div>
      </div>

      
    </section>
  )
}
