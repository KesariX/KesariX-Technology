import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import './Curtain.css'

export default function Curtain() {
  const curtainRef = useRef(null)
  const numRef = useRef(null)
  const panel1Ref = useRef(null)
  const panel2Ref = useRef(null)

  useLayoutEffect(() => {
    const curtain = curtainRef.current
    const num = numRef.current
    const p1 = panel1Ref.current
    const p2 = panel2Ref.current
    if (!curtain || !num || !p1 || !p2) return

    const obj = { v: 0 }
    const tl = gsap.timeline({
      onComplete: () => { curtain.style.display = 'none' }
    })

    tl.to(obj, {
      v: 100,
      duration: 1.4,
      ease: 'power2.out',
      onUpdate: () => { num.textContent = Math.round(obj.v) },
    }, 0)
      .to(num, { opacity: 0, duration: 0.35, ease: 'power2.in' }, 1.45)
      .to(p1, { scaleY: 0, duration: 0.9, ease: 'expo.inOut' }, 1.55)
      .to(p2, { scaleY: 0, duration: 0.9, ease: 'expo.inOut' }, 1.65)

    return () => { tl.kill() }
  }, [])

  return (
    <div className="curtain" ref={curtainRef}>
      <div className="curtain__panel" ref={panel1Ref} />
      <div className="curtain__panel curtain__panel--2" ref={panel2Ref} />
      <div className="curtain__num" ref={numRef}>0</div>
    </div>
  )
}
