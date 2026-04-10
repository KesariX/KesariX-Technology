import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './styles/Marquee.css'

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const marqueeContent = marquee.querySelector('.kx-marquee__content') as HTMLDivElement
    if (!marqueeContent) return

    // Clone the content for seamless loop
    const clone = marqueeContent.cloneNode(true)
    marquee.appendChild(clone)

    // GSAP timeline for marquee
    gsap.set(marquee, { overflow: 'hidden' })

    const tl = gsap.timeline({ repeat: -1 })
    tl.to(marquee, {
      x: -marqueeContent.offsetWidth,
      duration: 30,
      ease: 'linear',
    })
  }, [])

  const items = [
    'AI Solutions',
    'Web Development',
    'Automation Systems',
    'Cloud Architecture',
    'AI Agents',
    'IT Infrastructure',
    'Mobile Apps',
    'Data Engineering',
    'API Development',
  ]

  return (
    <section className="kx-marquee">
      <div
        ref={marqueeRef}
        className="kx-marquee__track"
      >
        <div className="kx-marquee__content">
          {items.map((item, idx) => (
            <div key={idx} className="kx-marquee__item">
              <span className="kx-marquee__text">{item}</span>
              <span className="kx-marquee__dot">✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="kx-marquee__fade-left" />
      <div className="kx-marquee__fade-right" />
    </section>
  )
}
