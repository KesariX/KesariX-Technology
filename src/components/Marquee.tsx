import { useRef } from 'react'
import './styles/Marquee.css'

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)

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

  // Duplicate items for seamless loop
  const displayItems = [...items, ...items]

  return (
    <section className="kx-marquee">
      <div
        ref={marqueeRef}
        className="kx-marquee__track"
      >
        <div className="kx-marquee__content">
          {displayItems.map((item, idx) => (
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
