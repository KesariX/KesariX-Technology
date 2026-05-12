import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Cursor.css'

export default function Cursor() {
  const dotRef   = useRef(null)
  const frameRef = useRef(null)

  useEffect(() => {
    const dot   = dotRef.current
    const frame = frameRef.current
    if (!dot || !frame) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let dx = mx, dy = my
    let rx = mx, ry = my

    const onMove = (e) => { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', onMove, { passive: true })

    const tick = () => {
      dx += (mx - dx) * 0.45
      dy += (my - dy) * 0.45
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      dot.style.transform   = `translate(${dx}px,${dy}px) translate(-50%,-50%) rotate(45deg)`
      frame.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`
    }
    gsap.ticker.add(tick)

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
    }
  }, [])

  return (
    <>
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
