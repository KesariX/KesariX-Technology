import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

const CHECKLIST = [
  'Free 30-minute discovery call',
  'Response within 24 hours',
  'Fixed price commitments',
  'Built to scale from day one',
]

const FOOTER_SERVICES = [
  { name: 'AI Solutions', link: '/service/neural-architecture' },
  { name: 'Web Development', link: '/service/product-engineering' },
  { name: 'IT Services', link: '/service/cloud-backbone' },
  { name: 'AI Agents', link: '/service/agentic-systems' },
  { name: 'Process Automation', link: '/service/workflow-engines' },
]
const FOOTER_COMPANY = [
  { name: 'About KesariX', link: '/about' },
  { name: 'Our Work', link: '/work' },
  { name: 'Blog', link: '/blog' },
  { name: 'Careers', link: '/careers' },
  { name: 'Contact', link: '/contact' },
]

export default function Contact() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Headline clip-reveal
      gsap.from('.contact__line', {
        yPercent: 110, opacity: 0, duration: 1.1, ease: 'expo.out', stagger: 0.1,
        scrollTrigger: { trigger: '.contact__headline', start: 'top 80%' },
      })
      // Right panel
      gsap.from('.contact__check-item', {
        opacity: 0, x: 24, duration: 0.7, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: '.contact__panel', start: 'top 80%' },
      })
      gsap.from('.contact__cta-wrap', {
        opacity: 0, y: 20, duration: 0.8, ease: 'power3.out', delay: 0.3,
        scrollTrigger: { trigger: '.contact__panel', start: 'top 75%' },
      })
      // Bottom bar
      gsap.from('.contact__bar', {
        opacity: 0, y: 20, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: '.contact__bar', start: 'top 90%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <section className="contact" id="contact" ref={sectionRef}>
        <div className="contact__inner">

          {/* ── Section label ── */}
          <span className="section-label contact__eyebrow" style={{ color: 'var(--bone)' }}>
            Ready to Build
          </span>

          {/* ── Split layout ── */}
          <div className="contact__split">

            {/* Left: headline + copy */}
            <div className="contact__left">
              <h2 className="contact__headline">
                <span className="contact__line-wrap"><span className="contact__line">Let's Turn Your</span></span>
                <span className="contact__line-wrap"><span className="contact__line">Idea Into a</span></span>
                <span className="contact__line-wrap contact__line-wrap--accent">
                  <span className="contact__line"><em>Product.</em></span>
                </span>
              </h2>
              <p className="contact__copy">
                Whether you're a startup with a napkin sketch or an enterprise
                scaling to millions — we're the engineering team that actually ships.
              </p>
            </div>

            {/* Right: checklist + CTA */}
            <div className="contact__panel">
              <div className="contact__panel-label">What you get</div>
              <ul className="contact__checklist">
                {CHECKLIST.map((item) => (
                  <li className="contact__check-item" key={item}>
                    <span className="contact__check-icon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="contact__cta-wrap">
                <a className="cta contact__cta" href="mailto:info@kesarixtechnology.com">
                  <span>Start Your Project</span>
                  <span className="cta__arrow">↗</span>
                </a>
                <span className="contact__note">Free discovery · No commitment</span>
              </div>
            </div>

          </div>

          {/* ── Contact info bar ── */}
          <div className="contact__bar">
            <a className="contact__bar-item" href="mailto:info@kesarixtechnology.com">
              info@kesarixtechnology.com
            </a>
            <span className="contact__bar-sep">·</span>
            <a className="contact__bar-item" href="tel:+919274739361">
              +91 92747 39361
            </a>
            <span className="contact__bar-sep">·</span>
            <span className="contact__bar-item">Surat, India</span>
            <span className="contact__bar-sep">·</span>
            <span className="contact__bar-item contact__bar-item--live">
              <span className="contact__live-dot" />
              Available Now
            </span>
          </div>

        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__mark">K</span>
              <span>KesariX</span>
            </div>
            <p className="footer__tagline">We Engineer What's Next.</p>
            <a className="footer__book" href="mailto:info@kesarixtechnology.com">
              Book a Free Call ↗
            </a>
          </div>
          <div className="footer__cols">
            <div className="footer__col">
              <div className="footer__col-head">Services</div>
              {FOOTER_SERVICES.map((s) => (
                <a className="footer__col-link" href={s.link} key={s.name}>{s.name}</a>
              ))}
            </div>
            <div className="footer__col">
              <div className="footer__col-head">Company</div>
              {FOOTER_COMPANY.map((s) => (
                <a className="footer__col-link" href={s.link} key={s.name}>{s.name}</a>
              ))}
            </div>
            <div className="footer__col">
              <div className="footer__col-head">Get in Touch</div>
              <a className="footer__col-link" href="mailto:info@kesarixtechnology.com">info@kesarixtechnology.com</a>
              <a className="footer__col-link" href="tel:+919274739361">+91 92747 39361</a>
              <span className="footer__col-link">India</span>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 KesariX Technology. All rights reserved.</span>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </>
  )
}
