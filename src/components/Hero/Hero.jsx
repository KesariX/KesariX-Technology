import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import './Hero.css'

export default function Hero() {
  const sectionRef = useRef(null)
  const mainRef    = useRef(null)
  const orbQT      = useRef({})

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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

      const tl = gsap.timeline({ delay: 0.3 })

      tl.to('.hero__strip', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
        .to('.hero__kicker', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')

      tl.to('.h-word > span', {
        yPercent: 0,
        skewY: 0,
        rotationX: 0,
        opacity: 1,
        duration: 1.8,
        ease: 'expo.out',
        stagger: { amount: 0.8, from: 'start' },
      }, '-=0.6')

      tl.to('.hero__foot-desc',    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
        .to('.hero__foot-ctas',    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
        .to('.hero__foot-metrics', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
        .to('.hero__scroll-wrap',  { opacity: 1, duration: 0.8 }, '-=0.4')

      // Mouse-parallax quickTo — text drifts very subtly against cursor direction
      if (mainRef.current) {
        orbQT.current.txtX = gsap.quickTo(mainRef.current, 'x', { duration: 2.2, ease: 'power2.out' })
        orbQT.current.txtY = gsap.quickTo(mainRef.current, 'y', { duration: 2.2, ease: 'power2.out' })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const mousePending = useRef(false)
  const mouseXY      = useRef({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    mouseXY.current = { x: e.clientX, y: e.clientY }
    if (mousePending.current || !sectionRef.current) return
    mousePending.current = true
    requestAnimationFrame(() => {
      mousePending.current = false
      const rect = sectionRef.current?.getBoundingClientRect()
      if (!rect) return

      // Spotlight position
      sectionRef.current.style.setProperty('--mouse-x', `${mouseXY.current.x - rect.left}px`)
      sectionRef.current.style.setProperty('--mouse-y', `${mouseXY.current.y - rect.top}px`)

      // Normalised centre-relative (-0.5 → 0.5) for parallax
      const nx = (mouseXY.current.x - rect.left) / rect.width  - 0.5
      const ny = (mouseXY.current.y - rect.top)  / rect.height - 0.5
      orbQT.current.txtX?.(nx * 10)
      orbQT.current.txtY?.(ny *  6)
    })
  }

  const handleMouseEnter = () => sectionRef.current?.classList.add('is-hovered')
  const handleMouseLeave = () => {
    sectionRef.current?.classList.remove('is-hovered')
    orbQT.current.txtX?.(0)
    orbQT.current.txtY?.(0)
  }

  return (
    <section
      className="hero"
      id="top"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Layer 0: real background photo — cinematic reveal + slow drift ── */}
      <div className="hero__bg-image" aria-hidden="true" />

      {/* ── Layer 1: dark colour-grade overlay + corner ambience ── */}
      <div className="hero__canvas" />

      {/* ── Ambient corner glows ── */}
      <div className="hero__ambient hero__ambient--tr" />
      <div className="hero__ambient hero__ambient--bl" />
      <div className="hero__ambient hero__ambient--center" />

      {/* ── Floating warm light orb ── */}
      <div className="hero__light-orb" aria-hidden="true" />

      {/* ── CSS grid mesh ── */}
      <div className="hero__grid" aria-hidden="true" />

      {/* ── Cursor spotlight ── */}
      <div className="hero__spotlight" />

      {/* ── Film grain (animated) ── */}
      <div className="hero__grain" />

      {/* ── Edge vignette for text legibility ── */}
      <div className="hero__vignette" aria-hidden="true" />

      {/* ── Top eyebrow strip ── */}
      <div className="hero__strip">
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
      <div
        className="hero__main"
        ref={mainRef}
        style={{ zIndex: 10, position: 'relative', width: '100%' }}
      >
        <div className="hero__kicker">
          <span className="hero__kicker-dot" style={{ boxShadow: '0 0 10px rgba(255,255,255,0.5)' }} />
          <span>Live delivery partner for 5+ product teams</span>
        </div>

        <h1 className="hero__headline" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.08em',
          perspective: '1000px'
        }}>

          <span className="hero__line">
            <span className="h-word"><span>We</span></span>
            <span className="h-word h-word--accent"><span>Build</span></span>
          </span>

          <span className="hero__line hero__line--italic" style={{ paddingLeft: '5%' }}>
            <span className="h-word">
              <span
                className="text-gradient-flow"
                style={{
                  background: 'linear-gradient(90deg, #f97316 0%, #fb923c 30%, #fbbf24 55%, #fb923c 75%, #f97316 100%)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  paddingRight: '0.1em',
                  display: 'inline-block',
                  filter: 'drop-shadow(0 0 32px rgba(249, 115, 22, 0.35))'
                }}
              >
                Extraordinary
              </span>
            </span>
          </span>

          <span className="hero__line">
            <span className="h-word"><span>Digital</span></span>
            <span className="h-word"><span style={{ color: '#d1d5db', fontWeight: 400 }}>Experiences</span></span>
          </span>

          <span className="hero__line hero__line--outline">
            <span className="h-word">
              <span style={{
                color: 'transparent',
                WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.5)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'crosshair',
                display: 'inline-block'
              }}>
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
            <span className="hero__metric-num">5<sup>+</sup></span>
            <span className="hero__metric-label">Projects Shipped</span>
          </div>
          <div className="hero__metric">
            <span className="hero__metric-num">6<sup>+</sup></span>
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
