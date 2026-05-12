import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import './Curtain.css'

export default function Curtain() {
  const curtainRef  = useRef(null)
  const numRef      = useRef(null)
  const barFillRef  = useRef(null)
  const panel1Ref   = useRef(null)
  const panel2Ref   = useRef(null)

  useLayoutEffect(() => {
    const curtain = curtainRef.current
    if (!curtain) return

    // Show only once per browser session
    if (sessionStorage.getItem('kx_loaded')) {
      curtain.style.display = 'none'
      return
    }
    sessionStorage.setItem('kx_loaded', '1')

    const num  = numRef.current
    const bar  = barFillRef.current
    const p1   = panel1Ref.current
    const p2   = panel2Ref.current

    const obj = { v: 0 }

    const tl = gsap.timeline({
      onComplete: () => { curtain.style.display = 'none' },
    })

    // Brand entrance — name stagger up
    tl.fromTo('.curtain__brand-name',
      { autoAlpha: 0, y: 28 },
      { autoAlpha: 1, y: 0, duration: 0.8, ease: 'expo.out' }, 0.05
    )
    tl.fromTo('.curtain__sub',
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.55, ease: 'power3.out' }, 0.3
    )
    tl.fromTo('.curtain__progress-wrap',
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.4 }, 0.35
    )

    // Count 0 → 100 + fill bar
    tl.to(obj, {
      v: 100,
      duration: 1.5,
      ease: 'power2.inOut',
      onUpdate: () => {
        const val = Math.round(obj.v)
        if (num) num.textContent = val
        if (bar) bar.style.transform = `scaleX(${obj.v / 100})`
      },
    }, 0.2)

    // Content fade out
    tl.to('.curtain__inner',
      { autoAlpha: 0, y: -14, duration: 0.38, ease: 'power2.in' }, 1.85
    )

    // Panels slide away
    tl.to(p1, { scaleY: 0, duration: 0.85, ease: 'expo.inOut' }, 1.95)
    tl.to(p2, { scaleY: 0, duration: 0.85, ease: 'expo.inOut' }, 2.08)

    return () => tl.kill()
  }, [])

  return (
    <div className="curtain" ref={curtainRef}>
      <div className="curtain__panel"    ref={panel1Ref} />
      <div className="curtain__panel curtain__panel--2" ref={panel2Ref} />

      <div className="curtain__inner">
        {/* Brand */}
        <div className="curtain__brand">
          <span className="curtain__mark">K</span>
          <div className="curtain__brand-text">
            <span className="curtain__brand-name">KesariX</span>
            <span className="curtain__sub">Technology</span>
          </div>
        </div>

        {/* Progress row */}
        <div className="curtain__progress-wrap">
          <div className="curtain__bar-track">
            <div className="curtain__bar-fill" ref={barFillRef} />
          </div>
          <span className="curtain__num" ref={numRef}>0</span>
        </div>
      </div>
    </div>
  )
}
