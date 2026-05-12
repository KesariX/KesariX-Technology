import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './AboutKesariX.css'

gsap.registerPlugin(ScrollTrigger)

export default function AboutKesariX() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // ── Hero Entrance Animations ──
      gsap.fromTo('.ab-hero-title',
        { autoAlpha: 0, y: 60 },
        { autoAlpha: 1, y: 0, duration: 1.2, ease: 'expo.out', delay: 0.1 }
      )
      gsap.fromTo('.ab-hero-desc',
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 1, ease: 'expo.out', delay: 0.35 }
      )
      gsap.fromTo('.ab-hero-stats',
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 1, ease: 'expo.out', delay: 0.5 }
      )

      // ── Scroll-Triggered Reveals ──
      const revealElements = gsap.utils.toArray('.ab-reveal')
      revealElements.forEach((el) => {
        gsap.fromTo(el,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // ── Counter Animation for Stats Numbers ──
      const statNums = gsap.utils.toArray('.ab-stat__num')
      statNums.forEach((el) => {
        const raw = el.dataset.target
        const hasPlus = raw.endsWith('+')
        const hasPct = raw.endsWith('%')
        const numericEnd = parseFloat(raw)

        ScrollTrigger.create({
          trigger: el,
          start: 'top 90%',
          once: true,
          onEnter: () => {
            gsap.to({ val: 0 }, {
              val: numericEnd,
              duration: 2,
              ease: 'power2.out',
              onUpdate: function () {
                const v = Math.round(this.targets()[0].val)
                el.textContent = v + (hasPlus ? '+' : hasPct ? '%' : '')
              },
            })
          },
        })
      })

      // ── Timeline Items Stagger ──
      const timelineItems = gsap.utils.toArray('.ab-timeline__item')
      timelineItems.forEach((item, i) => {
        gsap.fromTo(item,
          { autoAlpha: 0, x: -40 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            delay: i * 0.1,
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      setTimeout(() => ScrollTrigger.refresh(), 500)

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="ab-page" ref={sectionRef}>

      {/* ── HERO (DARK) ── */}
      <section className="ab-section ab-hero ab-dark">
        <div className="ab-hero__glow"></div>
        <div className="ab-hero__bg-grid"></div>
        <div className="ab-hero__inner">
          <div className="ab-hero__breadcrumb">
            <a href="/">Home</a>
            <span className="ab-hero__breadcrumb-sep">/</span>
            <span>Company</span>
            <span className="ab-hero__breadcrumb-sep">/</span>
            <span className="ab-hero__breadcrumb-current">About KesariX</span>
          </div>
          <span className="ab-eyebrow">
            <span className="ab-eyebrow-dot"></span>
            Our Story
          </span>
          <h1 className="ab-hero-title">
            We Engineer <br />
            <em className="ab-italic">What's Next.</em>
          </h1>
          <p className="ab-hero-desc">
            A collective of systems architects, deep-learning researchers, and full-stack engineers building uncompromising digital platforms for the enterprise layer.
          </p>
          <div className="ab-hero-stats">
            <div className="ab-hero-stat">
              <span className="ab-hero-stat__val">Founded 2026</span>
            </div>
            <div className="ab-hero-stat__sep"></div>
            <div className="ab-hero-stat">
              <span className="ab-hero-stat__val">India Based</span>
            </div>
            <div className="ab-hero-stat__sep"></div>
            <div className="ab-hero-stat">
              <span className="ab-hero-stat__val">5+ Clients</span>
            </div>
            <div className="ab-hero-stat__sep"></div>
            <div className="ab-hero-stat">
              <span className="ab-hero-stat__val">98% Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS SECTION (LIGHT) ── */}
      <section className="ab-section ab-stats-section ab-light">
        <div className="ab-stats-grid">
          <div className="ab-stat ab-reveal">
            <span className="ab-stat__num" data-target="5+">5+</span>
            <span className="ab-stat__label">Enterprise Clients</span>
          </div>
          <div className="ab-stat ab-reveal">
            <span className="ab-stat__num" data-target="6+">6+</span>
            <span className="ab-stat__label">Team Members</span>
          </div>
          <div className="ab-stat ab-reveal">
            <span className="ab-stat__num" data-target="98%">98%</span>
            <span className="ab-stat__label">Client Satisfaction</span>
          </div>
          <div className="ab-stat ab-reveal">
            <span className="ab-stat__num" data-target="5+">5+</span>
            <span className="ab-stat__label">Projects Delivered</span>
          </div>
        </div>
      </section>

      {/* ── DNA SECTION (BLUE) ── */}
      <section className="ab-section ab-dna ab-blue">
        <div className="ab-dna__inner">
          <div className="ab-section-header ab-reveal">
            <span className="ab-eyebrow ab-eyebrow--light">
              <span className="ab-eyebrow-dot"></span>
              Our DNA
            </span>
            <h2 className="ab-title-huge">
              Ethos &amp; <br />
              <em className="ab-italic">Execution.</em>
            </h2>
            <p className="ab-desc-large">
              Three principles guide every architecture decision, every code review, and every client call.
            </p>
          </div>
          <div className="ab-dna-grid">
            <div className="ab-dna-card ab-reveal">
              <div className="ab-dna-card__num">01</div>
              <h3 className="ab-dna-card__title">Deterministic Results</h3>
              <p className="ab-dna-card__desc">
                We reject hype. Every solution we architect is bound by mathematical certainty, strict QA testing, and measurable ROI that you can directly attribute to our work.
              </p>
            </div>
            <div className="ab-dna-card ab-reveal">
              <div className="ab-dna-card__num">02</div>
              <h3 className="ab-dna-card__title">Absolute Security</h3>
              <p className="ab-dna-card__desc">
                Enterprise data is sacred. We utilize zero-trust architecture and heavily vetted microservices to completely isolate your intellectual property.
              </p>
            </div>
            <div className="ab-dna-card ab-reveal">
              <div className="ab-dna-card__num">03</div>
              <h3 className="ab-dna-card__title">Relentless Iteration</h3>
              <p className="ab-dna-card__desc">
                Software decays. We don't just ship and leave — we monitor logs, refactor for scale, and continuously optimize based on real production telemetry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HISTORY SECTION (LIGHT) ── */}
      <section className="ab-section ab-history ab-light">
        <div className="ab-history__inner">
          <div className="ab-history__header ab-reveal">
            <span className="ab-eyebrow">
              <span className="ab-eyebrow-dot"></span>
              History
            </span>
            <h2 className="ab-title-huge">
              The Road to <br />
              <em className="ab-italic">Scale.</em>
            </h2>
          </div>
          <div className="ab-timeline">
            <div className="ab-timeline__item">
              <div className="ab-timeline__left">
                <span className="ab-timeline__year">2026</span>
                <div className="ab-timeline__dot"></div>
                <div className="ab-timeline__line"></div>
              </div>
              <div className="ab-timeline__right">
                <h3 className="ab-timeline__event">KesariX Founded</h3>
                <p className="ab-timeline__desc">
                  Built a world-class AI &amp; digital engineering platform from the ground up with a mission to transform how enterprises build intelligent systems.
                </p>
              </div>
            </div>
            <div className="ab-timeline__item">
              <div className="ab-timeline__left">
                <span className="ab-timeline__year">2026</span>
                <div className="ab-timeline__dot"></div>
                <div className="ab-timeline__line"></div>
              </div>
              <div className="ab-timeline__right">
                <h3 className="ab-timeline__event">Rapid Product Development</h3>
                <p className="ab-timeline__desc">
                  Shipped 5+ successful scalable deployments, including 3+ custom enterprise AI and ML models actively in production.
                </p>
              </div>
            </div>
            <div className="ab-timeline__item">
              <div className="ab-timeline__left">
                <span className="ab-timeline__year">2026</span>
                <div className="ab-timeline__dot"></div>
                <div className="ab-timeline__line"></div>
              </div>
              <div className="ab-timeline__right">
                <h3 className="ab-timeline__event">Client Partnerships</h3>
                <p className="ab-timeline__desc">
                  Partnered with 5+ trusted teams including Wercatalyst and Neha Engineering Works, delivering measurable business results.
                </p>
              </div>
            </div>
            <div className="ab-timeline__item">
              <div className="ab-timeline__left">
                <span className="ab-timeline__year">2026</span>
                <div className="ab-timeline__dot"></div>
                <div className="ab-timeline__line ab-timeline__line--last"></div>
              </div>
              <div className="ab-timeline__right">
                <h3 className="ab-timeline__event">Scaling Operations</h3>
                <p className="ab-timeline__desc">
                  Formed a core team of 6+ elite engineers and domain experts, maintaining a 98% client satisfaction rate with repeat engagements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
