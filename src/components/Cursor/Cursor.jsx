import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Cursor.css'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Start in center so cursor doesn't flash from (0,0) on load
    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let dx = mx, dy = my
    let rx = mx, ry = my

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    // Run inside GSAP's ticker so cursor, scroll, and animations
    // all update in the same RAF — eliminates jitter from competing loops.
    const tick = () => {
      dx += (mx - dx) * 0.45
      dy += (my - dy) * 0.45
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%,-50%)`
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`
    }
    gsap.ticker.add(tick)

    // Event delegation covers dynamically added elements (team cards, etc.)
    const onOver = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) {
        ring.classList.add('is-hover')
      }
    }
    const onOut = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) {
        ring.classList.remove('is-hover')
      }
    }
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseout', onOut, { passive: true })

    return () => {
      gsap.ticker.remove(tick)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <>
      <div className="cursor__dot" ref={dotRef} />
      <div className="cursor__ring" ref={ringRef} />
    </>
  )
}
