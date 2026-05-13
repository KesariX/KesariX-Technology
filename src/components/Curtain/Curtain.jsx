import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import './Curtain.css'

export default function Curtain() {
  const curtainRef = useRef(null)
  const numRef     = useRef(null)
  const barFillRef = useRef(null)

  useLayoutEffect(() => {
    const curtain = curtainRef.current
    if (!curtain) return

    // Only show once per session
    if (sessionStorage.getItem('kx_loaded')) {
      gsap.set(curtain, { autoAlpha: 0, display: 'none' })
      return
    }
    sessionStorage.setItem('kx_loaded', '1')

    const obj = { v: 0 }

    const tl = gsap.timeline({
      onComplete: () => {
        curtain.style.display = 'none'
      },
    })

    // Logo entrance — scale up from slightly smaller + fade in
    tl.fromTo('.curtain__logo-wrap',
      { autoAlpha: 0, scale: 0.82, y: 12 },
      { autoAlpha: 1, scale: 1, y: 0, duration: 1.0, ease: 'expo.out' },
      0.08
    )

    // Progress row fades in
    tl.fromTo('.curtain__progress-wrap',
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.45, ease: 'power2.out' },
      0.45
    )

    // Counter 0 → 100 + bar fill
    tl.to(obj, {
      v: 100,
      duration: 1.65,
      ease: 'power2.inOut',
      onUpdate: () => {
        const val = Math.round(obj.v)
        if (numRef.current)    numRef.current.textContent = val
        if (barFillRef.current) barFillRef.current.style.transform = `scaleX(${obj.v / 100})`
      },
    }, 0.22)

    // Subtle logo pulse at 100%
    tl.to('.curtain__logo-wrap', {
      scale: 1.055,
      duration: 0.35,
      ease: 'power2.out',
    }, 1.95)

    // Progress row fade out
    tl.to('.curtain__progress-wrap', {
      autoAlpha: 0,
      y: 6,
      duration: 0.3,
      ease: 'power2.in',
    }, 2.1)

    // Logo fades + scales up — "zooms into site"
    tl.to('.curtain__logo-wrap', {
      autoAlpha: 0,
      scale: 1.18,
      duration: 0.65,
      ease: 'power2.in',
    }, 2.2)

    // Whole overlay fades out
    tl.to(curtain, {
      autoAlpha: 0,
      duration: 0.55,
      ease: 'power3.inOut',
    }, 2.45)

    return () => tl.kill()
  }, [])

  return (
    <div className="curtain" ref={curtainRef}>
      <div className="curtain__noise" />

      <div className="curtain__inner">
        {/* Logo — no extra text; name is part of the image */}
        <div className="curtain__logo-wrap">
          <img
            className="curtain__logo"
            src="/Kesarix-technology-logo.webp"
            alt="KesariX Technology"
            draggable="false"
          />
        </div>

        {/* Progress */}
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
