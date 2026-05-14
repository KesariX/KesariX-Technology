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
    text: 'We needed a custom web application and KesariX delivered a beautiful, responsive platform. The performance is outstanding and the ongoing support is exceptional.',
    author: 'Manager',
    role: 'Neha Engineering Works',
    initials: 'NEW',
    stars: 5,
  },
  {
    id: 3,
    text: 'Their automation solutions helped us streamline our lead handling process. We saw immediate results with 70% time savings on manual data entry.',
    author: 'Operations Head',
    role: 'Shiv Krishna Engineers',
    initials: 'SKE',
    stars: 5,
    metric: '70% Time Saved',
  },
  {
    id: 4,
    text: 'KesariX helped us optimize our online presence with SEO and digital marketing strategies. Our organic traffic increased by 60% within 3 months.',
    author: 'Director',
    role: 'BIT Bharuch',
    initials: 'BBT',
    stars: 5,
    metric: '+60% Traffic',
  },
  {
    id: 5,
    text: 'The team at KesariX provides reliable 24/7 support for our automation systems. Their proactive approach and quick response time is impressive.',
    author: 'CTO',
    role: 'Chronagen Technophant',
    initials: 'CT',
    stars: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="testi__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="testi__star">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.testi__eyebrow, .testi__title, .testi__head-meta', 
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: '.testi__head', start: 'top 82%' },
        }
      )
      gsap.fromTo('.testi__card', 
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: '.testi__grid', start: 'top 80%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const [featured, ...rest] = testimonials

  return (
    <section className="testimonials" ref={sectionRef}>
      <div className="testi__inner">

        <div className="testi__head">
          <span className="testi__eyebrow">
            <span className="testi__eyebrow-dot"></span>
            Client Voices
          </span>
          <div className="testi__head-row">
            <h2 className="testi__title">
              What Our Clients<br />
              <span className="testi__title-italic">Actually Say.</span>
            </h2>
            <div className="testi__head-meta">
              <div className="testi__rating-pill">
                <span className="testi__rating-stars">★★★★★</span>
                <span className="testi__rating-copy">5.0 · All clients</span>
              </div>
              <p className="testi__head-desc">
                Real results from real partnerships —<br />no stock photos, no made-up quotes.
              </p>
            </div>
          </div>
        </div>

        <div className="testi__grid">
          <div className="testi__card testi__card--featured">
            <div className="testi__card-glow" />
            <div className="testi__card-top">
              <Stars count={featured.stars} />
              {featured.metric && (
                <div className="testi__metrics">
                  <span className="testi__metric-val">{featured.metric}</span>
                  {featured.metricSub && (
                    <>
                      <span className="testi__metric-dot" />
                      <span className="testi__metric-sub">{featured.metricSub}</span>
                    </>
                  )}
                </div>
              )}
            </div>
            <p className="testi__quote-text">"{featured.text}"</p>
            <div className="testi__author">
              <div className="testi__avatar">{featured.initials}</div>
              <div className="testi__info">
                <div className="testi__name">{featured.author}</div>
                <div className="testi__company">{featured.role}</div>
              </div>
            </div>
          </div>

          {rest.map((t) => (
            <div className="testi__card" key={t.id}>
              <div className="testi__card-glow" />
              <div className="testi__card-top">
                <Stars count={t.stars} />
                {t.metric && <span className="testi__metric-tag">{t.metric}</span>}
              </div>
              <p className="testi__quote-text">"{t.text}"</p>
              <div className="testi__author">
                <div className="testi__avatar">{t.initials}</div>
                <div className="testi__info">
                  <div className="testi__name">{t.author}</div>
                  <div className="testi__company">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
