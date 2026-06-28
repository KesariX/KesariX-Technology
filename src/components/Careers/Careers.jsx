import { useRef, useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Careers.css'
import SEO from '../SEO/SEO'

export default function Careers() {
  const sectionRef = useRef(null)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
    }
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // ── Hero Entrance Animations ──
      gsap.fromTo('.cr-hero-title',
        { autoAlpha: 0, y: 60 },
        { autoAlpha: 1, y: 0, duration: 1.2, ease: 'expo.out', delay: 0.1 }
      )
      gsap.fromTo('.cr-hero-desc',
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 1, ease: 'expo.out', delay: 0.35 }
      )
      gsap.fromTo('.cr-hero-ctas',
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 1, ease: 'expo.out', delay: 0.5 }
      )

      // ── Scroll-Triggered Reveals ──
      const revealElements = gsap.utils.toArray('.cr-reveal')
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

      setTimeout(() => ScrollTrigger.refresh(), 500)

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="cr-page" ref={sectionRef}>
      <SEO 
        title="Careers at KesariX Technology — Software & AI Engineering Jobs India"
        description="Join the KesariX Technology team. We're hiring talented software engineers, AI/ML developers, React developers, Flutter developers, DevOps engineers, and automation specialists. Remote-friendly roles based in Vadodara, India."
        keywords="Software Engineer Jobs India, AI Developer Jobs India, React Developer Jobs Vadodara, Web Developer Jobs India, Machine Learning Jobs India, Full Stack Developer Jobs, Mobile App Developer Jobs, Flutter Developer Jobs, Tech Jobs Vadodara Gujarat, Software Company Jobs India, Startup Jobs India, Remote Developer Jobs India"
        canonicalUrl="/careers"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Company', url: '/about' },
          { name: 'Careers', url: '/careers' },
        ]}
        faqs={[
          { question: 'What roles is KesariX Technology currently hiring for?', answer: 'KesariX Technology hires software engineers, AI/ML developers, React developers, Next.js developers, Flutter developers, Node.js backend engineers, DevOps engineers, UI/UX designers, and automation specialists. Check back regularly as we post new openings.' },
          { question: 'Does KesariX Technology offer remote work?', answer: 'Yes. KesariX is a remote-friendly company. Most of our engineering and design roles support hybrid or fully remote arrangements with regular team stand-ups and sprint reviews over video call.' },
          { question: 'How can I apply to KesariX Technology?', answer: 'You can apply by filling out the interest form on this page or by emailing your resume to info@kesarixtechnology.com with the role title in the subject line. We review all applications within 5 business days.' },
        ]}
      />

      {/* ── HERO (DARK) ── */}
      <section className="cr-section cr-hero cr-dark">
        <div className="cr-hero__glow"></div>
        <div className="cr-hero__bg-grid"></div>
        <div className="cr-hero__inner">
          <div className="cr-hero__breadcrumb">
            <a href="/">Home</a>
            <span className="cr-hero__breadcrumb-sep">/</span>
            <span>Company</span>
            <span className="cr-hero__breadcrumb-sep">/</span>
            <span className="cr-hero__breadcrumb-current">Careers</span>
          </div>
          <span className="cr-eyebrow">
            <span className="cr-eyebrow-dot"></span>
            Join Us
          </span>
          <h1 className="cr-hero-title">
            Build What's Next. <br />
            <em className="cr-italic">Together.</em>
          </h1>
          <p className="cr-hero-desc">
            We're a team of engineers, researchers, and builders who care deeply about craft. We move fast, ship real systems, and work on problems that actually matter.
          </p>
          <div className="cr-hero-ctas">
            <a
              href="mailto:info@kesarixtechnology.com"
              className="cr-cta cr-cta--primary"
            >
              Send Your CV ↗
            </a>
            <a href="#culture" className="cr-cta cr-cta--secondary">
              See Our Culture ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY JOIN SECTION (LIGHT) ── */}
      <section className="cr-section cr-why cr-light" id="culture">
        <div className="cr-why__inner">
          <div className="cr-section-header cr-reveal">
            <span className="cr-eyebrow cr-eyebrow--dark">
              <span className="cr-eyebrow-dot"></span>
              Why KesariX
            </span>
            <h2 className="cr-title-huge">
              Where Elite <br />
              <em className="cr-italic">Engineers Thrive.</em>
            </h2>
          </div>
          <div className="cr-values-grid">
            <div className="cr-value-card cr-reveal">
              <div className="cr-value-card__icon">01</div>
              <h3 className="cr-value-card__title">Remote-First, Results-Driven</h3>
              <p className="cr-value-card__desc">
                Work from anywhere in India. No politics, no pointless meetings — just deep work and meaningful output.
              </p>
            </div>
            <div className="cr-value-card cr-reveal">
              <div className="cr-value-card__icon">02</div>
              <h3 className="cr-value-card__title">Real Problems, Real Impact</h3>
              <p className="cr-value-card__desc">
                Every system you build goes to production. Our clients are enterprises with real users — your code actually matters.
              </p>
            </div>
            <div className="cr-value-card cr-reveal">
              <div className="cr-value-card__icon">03</div>
              <h3 className="cr-value-card__title">Elite Team, Fast Growth</h3>
              <p className="cr-value-card__desc">
                Work alongside senior engineers and researchers. The bar is high, and your skills will compound faster than anywhere else.
              </p>
            </div>
            <div className="cr-value-card cr-reveal">
              <div className="cr-value-card__icon">04</div>
              <h3 className="cr-value-card__title">Ownership &amp; Equity Mindset</h3>
              <p className="cr-value-card__desc">
                We treat you like a founder, not a contractor. Own your work, your decisions, and your career trajectory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS SECTION (DARK) ── */}
      <section className="cr-section cr-positions cr-dark">
        <div className="cr-positions__inner">
          <div className="cr-section-header cr-reveal">
            <span className="cr-eyebrow cr-eyebrow--light">
              <span className="cr-eyebrow-dot"></span>
              Open Roles
            </span>
            <h2 className="cr-title-huge">
              Current <br />
              <em className="cr-italic">Openings.</em>
            </h2>
          </div>
          <div className="cr-empty-state cr-reveal">
            <div className="cr-empty-state__icon">◎</div>
            <h3 className="cr-empty-state__title">No Open Positions Right Now</h3>
            <p className="cr-empty-state__desc">
              We're not actively hiring at the moment, but we're always interested in exceptional talent. If you believe you'd be a great fit, we'd love to hear from you.
            </p>
            <a
              href="mailto:careers@kesarixtechnology.com"
              className="cr-cta cr-cta--primary"
            >
              Send an Open Application ↗
            </a>
            <p className="cr-empty-state__note">We review every application personally.</p>
          </div>
        </div>
      </section>

      {/* ── STAY CONNECTED SECTION (LIGHT) ── */}
      <section className="cr-section cr-connect cr-light">
        <div className="cr-connect__inner cr-reveal">
          <h3 className="cr-connect__title">Interested in Future Roles?</h3>
          <p className="cr-connect__desc">
            Drop your email and we'll reach out when something opens up that matches your skills. No spam, ever.
          </p>
          {subscribed ? (
            <div className="cr-connect__success">
              <span className="cr-connect__success-icon">✓</span>
              <span>You're on the list. We'll be in touch.</span>
            </div>
          ) : (
            <form className="cr-connect__form" onSubmit={handleSubscribe}>
              <input
                type="email"
                className="cr-connect__input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="cr-connect__submit">
                Stay Updated ↗
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  )
}
