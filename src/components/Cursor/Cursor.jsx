import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Cursor.css'

export default function Cursor() {
  const dotRef   = useRef(null)
  const frameRef = useRef(null)
  const glowRef  = useRef(null)

  useEffect(() => {
    const dot   = dotRef.current
    const frame = frameRef.current
    const glow  = glowRef.current
    if (!dot || !frame || !glow) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let dx = mx, dy = my       // dot — snappy
    let rx = mx, ry = my       // frame — medium lag
    let gx = mx, gy = my       // glow — slow drift
    let pgx = mx, pgy = my     // previous glow pos for velocity

    const onMove = (e) => { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', onMove, { passive: true })

    const tick = () => {
      dx += (mx - dx) * 0.45
      dy += (my - dy) * 0.45
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12

      // Glow drifts far behind
      gx += (mx - gx) * 0.04
      gy += (my - gy) * 0.04

      // Velocity-based elongation along movement direction
      const vx = gx - pgx
      const vy = gy - pgy
      const speed  = Math.sqrt(vx * vx + vy * vy)
      const angle  = Math.atan2(vy, vx)
      const stretch = 1 + Math.min(speed * 0.05, 0.8)
      const squeeze = 1 / Math.sqrt(stretch)

      pgx = gx
      pgy = gy

      dot.style.transform   = `translate(${dx}px,${dy}px) translate(-50%,-50%) rotate(45deg)`
      frame.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`
      glow.style.transform  = `translate(${gx}px,${gy}px) translate(-50%,-50%) rotate(${angle}rad) scaleX(${stretch}) scaleY(${squeeze})`
    }
    gsap.ticker.add(tick)

    // Fade glow when cursor leaves the window
    const onLeave = () => { glow.style.opacity = '0' }
    const onEnter = () => { glow.style.opacity = '1' }
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)

    const onOver = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) {
        frame.classList.add('is-hover')
        dot.classList.add('is-hover')
      }
    }
    const onOut = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) {
        frame.classList.remove('is-hover')
        dot.classList.remove('is-hover')
      }
    }
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseout',  onOut,  { passive: true })

    return () => {
      gsap.ticker.remove(tick)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout',  onOut)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
    }
  }, [])

  return (
    <>
      <div className="cursor__glow" ref={glowRef}>
        <div className="cursor__glow-inner" />
      </div>
      <div className="cursor__dot" ref={dotRef} />
      <div className="cursor__frame" ref={frameRef}>
        <span className="c-tl" />
        <span className="c-tr" />
        <span className="c-bl" />
        <span className="c-br" />
      </div>
    </>
  )
}
