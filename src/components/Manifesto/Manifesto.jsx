import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Manifesto.css'

gsap.registerPlugin(ScrollTrigger)

export default function Manifesto() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const quoteEl = sectionRef.current?.querySelector('[data-rise]')
      if (quoteEl) {
        const words = quoteEl.textContent.trim().split(/(\s+)/)
        quoteEl.innerHTML = words.map(w =>
          /\s+/.test(w) ? w : `<span class="rise-word"><span>${w}</span></span>`
        ).join('')
        quoteEl.querySelectorAll('.rise-word').forEach(rw => {
          rw.style.display = 'inline-block'
          rw.style.overflow = 'hidden'
          rw.style.lineHeight = '1.05'
          rw.style.paddingBottom = '0.06em'
        })
        gsap.set(quoteEl.querySelectorAll('.rise-word > span'), { yPercent: 110, display: 'inline-block' })
        gsap.to(quoteEl.querySelectorAll('.rise-word > span'), {
          yPercent: 0, duration: 1.1, ease: 'expo.out', stagger: 0.035,
          scrollTrigger: { trigger: quoteEl, start: 'top 80%' },
        })
      }
      gsap.from('.manifesto__meta', {
        opacity: 0, y: 30, duration: 0.9, ease: 'power2.out',
        scrollTrigger: { trigger: '.manifesto__meta', start: 'top 84%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="manifesto" id="services" ref={sectionRef}>
      <div className="manifesto__inner">
        <div className="manifesto__top">
          <div className="manifesto__meta">
            <span className="section-label">Services</span>
            <p className="manifesto__sub">
              Every service mirrors a live system we've already shipped. We don't pitch decks — we show running code.
            </p>
          </div>
          <h2 className="manifesto__quote" data-rise>
            Built to solve hard <em>business</em> problems — not to look good in a pitch deck.
          </h2>
        </div>
      </div>
    </section>
  )
}
