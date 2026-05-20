import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    text: "KesariX built our AI calling bot platform from scratch. It's now handling 500+ calls daily with 95% accuracy. Their team understood our requirements perfectly and delivered on time.",
    author: 'Founder',
    role: 'Wercatalyst',
    initials: 'WC',
    stars: 5,
    metric: '95% Accuracy',
    metricSub: '500+ Daily Calls',
  },
  {
    id: 2,
    text: 'We needed a professional website to showcase our engineering capabilities, and KesariX delivered a beautiful, highly responsive platform. The performance is outstanding and the ongoing support is exceptional.',
    author: 'Manager',
    role: 'Neha Engineering Works',
    initials: 'NEW',
    stars: 5,
  },
  {
    id: 3,
    text: 'KesariX developed a modern, high-performance website for us. The new design is clean, user-friendly, and has significantly enhanced our online presence and credibility in the industry.',
    author: 'Operations Head',
    role: 'Shiv Krishna Engineers',
    initials: 'SKE',
    stars: 5,
    metric: 'Enhanced UI/UX',
  },
  {
    id: 4,
    text: 'The custom WhatsApp bot developed by KesariX transformed how we communicate with our students. It automatically handles inquiries 24/7, drastically reducing our manual response time.',
    author: 'Director',
    role: 'BIT Bharuch',
    initials: 'BBT',
    stars: 5,
    metric: '24/7 Automated Support',
  },
  {
    id: 5,
    text: 'KesariX transformed our digital infrastructure by building a seamless new website alongside an intelligent AI calling bot. It has completely modernized our customer engagement and online brand.',
    author: 'CTO',
    role: 'Chronagen Technophant',
    initials: 'CT',
    stars: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="testi-card__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="testi-card__star">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      // Pin left header while right cards scroll — same pattern as Team section
      mm.add('(min-width: 1024px)', () => {
        ScrollTrigger.create({
          trigger: '.testi-inner',
          start: 'top 15%',
          end: 'bottom 85%',
          pin: '.testi-header',
          pinSpacing: false,
        })
      })

      // Header reveal
      gsap.fromTo('.testi-header__eyebrow',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.testi-header', start: 'top 80%' } }
      )
      gsap.fromTo('.testi-header__title .line',
        { opacity: 0, y: 50, rotationX: -30 },
        { opacity: 1, y: 0, rotationX: 0, duration: 1.2, stagger: 0.15, ease: 'expo.out', scrollTrigger: { trigger: '.testi-header', start: 'top 80%' } }
      )
      gsap.fromTo('.testi-header__meta',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.testi-header', start: 'top 80%' } }
      )

      // Cards entrance + parallax
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(card,
          { opacity: 0, y: 100 },
          {
            opacity: 1, y: 0, duration: 1.2, ease: 'expo.out', delay: i * 0.1,
            scrollTrigger: { trigger: card, start: 'top 85%' },
          }
        )
        mm.add('(min-width: 1024px)', () => {
          const speed = i % 2 !== 0 ? 80 : 30
          gsap.to(card, {
            y: -speed,
            ease: 'none',
            scrollTrigger: {
              trigger: '.testi-track',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          })
        })
      })

      // Ambient Orbs
      gsap.to('.testi-ambient__orb--purple', {
        x: '10vw', y: '10vh', duration: 18, repeat: -1, yoyo: true, ease: 'sine.inOut',
      })
      gsap.to('.testi-ambient__orb--blue', {
        x: '-8vw', y: '-8vh', duration: 14, repeat: -1, yoyo: true, ease: 'sine.inOut',
      })

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleMouseMove = (e, cardElement) => {
    if (!cardElement) return
    const rect = cardElement.getBoundingClientRect()
    cardElement.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    cardElement.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }

  return (
    <section className="testimonials-premium" ref={sectionRef}>

      {/* Ambient Atmosphere */}
      <div className="testi-ambient" aria-hidden="true">
        <div className="testi-ambient__orb testi-ambient__orb--purple" />
        <div className="testi-ambient__orb testi-ambient__orb--blue" />
        <div className="testi-ambient__noise" />
      </div>

      <div className="testi-inner">

        {/* LEFT — pinned by GSAP while right scrolls */}
        <div className="testi-header">
          <span className="testi-header__eyebrow">
            <span className="testi-eyebrow-dot" />
            Client Voices
          </span>
          <h2 className="testi-header__title">
            <div className="line" style={{ perspective: '1000px' }}>What Our</div>
            <div className="line" style={{ perspective: '1000px' }}>Clients</div>
            <div className="line" style={{ perspective: '1000px' }}>
              <em className="testi-italic">Actually Say.</em>
            </div>
          </h2>
          <div className="testi-header__meta">
            <div className="testi-rating-pill">
              <span className="testi-rating-stars">★★★★★</span>
              <span className="testi-rating-copy">5.0 · All clients</span>
            </div>
            <p className="testi-header__desc">
              Real results from real partnerships —<br />no stock photos, no made-up quotes.
            </p>
          </div>
        </div>

        {/* RIGHT — scrollable cards */}
        <div className="testi-track">
          {testimonials.map((t, i) => (
            <div
              className={`testi-card ${i % 2 !== 0 ? 'testi-card--offset' : ''} ${i === 0 ? 'testi-card--featured' : ''}`}
              key={t.id}
              ref={el => cardsRef.current[i] = el}
              onMouseMove={(e) => handleMouseMove(e, cardsRef.current[i])}
            >
              <div className="testi-card__glow" aria-hidden="true" />
              <div className="testi-card__bg-quote" aria-hidden="true">"</div>

              <div className="testi-card__content">
                <div className="testi-card__top">
                  <Stars count={t.stars} />
                  {t.metric && (
                    <div className="testi-card__metrics">
                      <span className="testi-card__metric-val">{t.metric}</span>
                      {t.metricSub && (
                        <>
                          <span className="testi-card__metric-dot" />
                          <span className="testi-card__metric-sub">{t.metricSub}</span>
                        </>
                      )}
                    </div>
                  )}
                </div>

                <p className="testi-card__text">"{t.text}"</p>

                <div className="testi-card__author">
                  <div className="testi-card__avatar">{t.initials}</div>
                  <div className="testi-card__info">
                    <div className="testi-card__name">{t.author}</div>
                    <div className="testi-card__company">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .testimonials-premium { padding: 8rem 0; background: var(--color-bg-dark, #050505); color: #fff; position: relative; overflow: hidden; }
        .testi-ambient { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .testi-ambient__orb { position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.25; mix-blend-mode: screen; }
        .testi-ambient__orb--purple { width: 50vw; height: 50vw; background: rgba(139, 92, 246, 0.35); top: -10%; right: -15%; }
        .testi-ambient__orb--blue { width: 45vw; height: 45vw; background: rgba(249, 115, 22, 0.25); bottom: -10%; left: -10%; }

        /* ── Layout — mirrors Team section exactly ── */
        .testi-inner { max-width: 1400px; margin: 0 auto; padding: 0 5%; display: flex; flex-direction: column; gap: 4rem; position: relative; z-index: 1; }

        /* Desktop: side-by-side */
        @media (min-width: 1024px) { .testi-inner { flex-direction: row; gap: 6rem; align-items: flex-start; } }

        .testi-header { flex: 0 0 380px; height: fit-content; will-change: transform; }
        .testi-header__eyebrow { display: inline-flex; align-items: center; gap: 0.75rem; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.15em; color: #a1a1aa; margin-bottom: 2rem; }
        .testi-eyebrow-dot { width: 6px; height: 6px; background: #f97316; border-radius: 50%; box-shadow: 0 0 10px rgba(249,115,22,0.8); }
        .testi-header__title { font-size: clamp(2.8rem, 4.8vw, 4.5rem); line-height: 1.05; font-weight: 300; letter-spacing: -0.02em; margin-bottom: 2rem; }
        .testi-italic { font-style: italic; color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.9); font-weight: 200; }
        .testi-header__meta { display: flex; flex-direction: column; gap: 1.5rem; margin-top: 3rem; }
        .testi-rating-pill { display: inline-flex; align-items: center; gap: 0.8rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 0.6rem 1.2rem; border-radius: 50px; width: fit-content; }
        .testi-rating-stars { color: #fbbf24; font-size: 1.1rem; letter-spacing: 1px; }
        .testi-rating-copy { font-size: 0.95rem; color: #e4e4e7; font-weight: 500; }
        .testi-header__desc { font-size: 1.1rem; color: #a1a1aa; line-height: 1.6; max-width: 360px; }

        /* ── Cards track ── */
        .testi-track { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 3rem; padding-top: 1rem; }
        .testi-card { --mouse-x: 50%; --mouse-y: 50%; position: relative; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 3.5rem 3rem; border-radius: 24px; overflow: hidden; backdrop-filter: blur(20px); width: 100%; transition: border-color 0.4s ease, background 0.4s ease; }
        .testi-card:hover { border-color: rgba(255,255,255,0.15); background: rgba(255,255,255,0.04); }
        .testi-card--offset { align-self: flex-end; margin-top: 2rem; max-width: 90%; }
        .testi-card--featured { border-color: rgba(249, 115, 22, 0.3); background: rgba(249, 115, 22, 0.05); }
        .testi-card__glow { display: none; }
        .testi-card__bg-quote { position: absolute; right: 5%; top: 5%; font-size: 15rem; font-family: serif; color: rgba(255,255,255,0.03); z-index: 0; user-select: none; pointer-events: none; line-height: 1; margin-top: -3rem; }
        .testi-card__content { position: relative; z-index: 2; }
        .testi-card__top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem; }
        .testi-card__stars { color: #fbbf24; font-size: 1.2rem; letter-spacing: 3px; }
        .testi-card__metrics { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
        .testi-card__metric-val { font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: #f97316; border: 1px solid rgba(249,115,22,0.3); padding: 0.4rem 1rem; border-radius: 50px; background: rgba(249,115,22,0.1); font-weight: 500; }
        .testi-card__metric-dot { width: 4px; height: 4px; border-radius: 50%; background: #52525b; }
        .testi-card__metric-sub { font-size: 0.85rem; color: #a1a1aa; border: 1px solid rgba(255,255,255,0.1); padding: 0.4rem 1rem; border-radius: 50px; }
        .testi-card__text { font-size: 1.25rem; color: #e4e4e7; line-height: 1.65; font-weight: 300; margin-bottom: 3rem; }
        .testi-card__author { display: flex; align-items: center; gap: 1.2rem; }
        .testi-card__avatar { width: 52px; height: 52px; border-radius: 50%; background: linear-gradient(135deg, #1e1e1e, #2d2d2d); border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; font-weight: 400; font-size: 1rem; color: #fff; letter-spacing: 1px; }
        .testi-card--featured .testi-card__avatar { background: linear-gradient(135deg, #f97316, #8b5cf6); border: none; font-weight: 600; }
        .testi-card__info { display: flex; flex-direction: column; gap: 0.2rem; }
        .testi-card__name { font-size: 1.05rem; color: #fff; font-weight: 500; }
        .testi-card__company { font-size: 0.9rem; color: #a1a1aa; }

        /* Mobile */
        @media (max-width: 1023px) {
          .testi-card--offset { align-self: flex-start; margin-top: 0; max-width: 100%; }
          .testi-card { padding: 2.5rem 2rem; }
          .testi-card__text { font-size: 1.1rem; }
        }
      `}} />
    </section>
  )
}
