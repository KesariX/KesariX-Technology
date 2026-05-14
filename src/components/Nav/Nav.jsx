import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import './Nav.css'

export default function Nav() {
  const navRef = useRef(null)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nav > *', {
        opacity: 0, y: -16, duration: 0.8,
        ease: 'power2.out', stagger: 0.08, delay: 0.2,
      })
    }, navRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsServicesOpen(false)
        setIsCompanyOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const closeAll = () => { setIsServicesOpen(false); setIsCompanyOpen(false) }
  const closeMobile = () => setIsMobileOpen(false)

  return (
    <>
      <nav className={`nav ${isMobileOpen ? 'nav--menu-open' : ''}`} ref={navRef}>
        <a className="nav__logo" href="/">
          <img
            className="nav__logo-img"
            src="/Kesarix-technology-logo.webp"
            alt="KesariX Technology"
            width="40"
            height="30"
            draggable="false"
          />
          <span className="nav__logo-name">KesariX<span className="nav__logo-sep"> </span>Technology</span>
        </a>

        {/* Desktop menu */}
        <div className="nav__menu">
          <div className="nav__item">
            <button
              className="nav__link-btn"
              onClick={() => { setIsServicesOpen(!isServicesOpen); setIsCompanyOpen(false) }}
            >
              Services <span className={`nav__arrow ${isServicesOpen ? 'nav__arrow--open' : ''}`}>▾</span>
            </button>
            <div className={`nav__submenu ${isServicesOpen ? 'nav__submenu--open' : ''}`}>
              <a href="/service/neural-architecture" onClick={closeAll}>Neural Architecture</a>
              <a href="/service/product-engineering" onClick={closeAll}>Product Engineering</a>
              <a href="/service/cloud-backbone" onClick={closeAll}>Cloud Backbone</a>
              <a href="/service/agentic-systems" onClick={closeAll}>Agentic Systems</a>
              <a href="/service/workflow-engines" onClick={closeAll}>Workflow Engines</a>
            </div>
          </div>
          <a href="/work">Our Work</a>
          <div className="nav__item">
            <button
              className="nav__link-btn"
              onClick={() => { setIsCompanyOpen(!isCompanyOpen); setIsServicesOpen(false) }}
            >
              Company <span className={`nav__arrow ${isCompanyOpen ? 'nav__arrow--open' : ''}`}>▾</span>
            </button>
            <div className={`nav__submenu ${isCompanyOpen ? 'nav__submenu--open' : ''}`}>
              <a href="/about" onClick={closeAll}>About KesariX</a>
              <a href="/careers" onClick={closeAll}>Careers</a>
            </div>
          </div>
          <a href="/blog">Blog</a>
          <a href="/pricing">Pricing</a>
        </div>

        {/* Right side */}
        <div className="nav__right">
          <a className="nav__cta" href="/contact">Start Project</a>
          <button
            className={`nav__hamburger ${isMobileOpen ? 'nav__hamburger--open' : ''}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav__drawer ${isMobileOpen ? 'nav__drawer--open' : ''}`} aria-hidden={!isMobileOpen}>
        <div className="nav__drawer-inner">
          <div className="nav__drawer-sections">
            <div className="nav__drawer-section">
              <div className="nav__drawer-label">Services</div>
              <a href="/service/neural-architecture" onClick={closeMobile}>Neural Architecture</a>
              <a href="/service/product-engineering" onClick={closeMobile}>Product Engineering</a>
              <a href="/service/cloud-backbone" onClick={closeMobile}>Cloud Backbone</a>
              <a href="/service/agentic-systems" onClick={closeMobile}>Agentic Systems</a>
              <a href="/service/workflow-engines" onClick={closeMobile}>Workflow Engines</a>
            </div>
            <div className="nav__drawer-section">
              <div className="nav__drawer-label">Company</div>
              <a href="/work" onClick={closeMobile}>Our Work</a>
              <a href="/about" onClick={closeMobile}>About Us</a>
              <a href="/pricing" onClick={closeMobile}>Pricing</a>
              <a href="/blog" onClick={closeMobile}>Blog</a>
              <a href="/careers" onClick={closeMobile}>Careers</a>
            </div>
          </div>

          <div className="nav__drawer-footer">
            <a className="nav__drawer-cta" href="/contact" onClick={closeMobile}>
              Start a Project ↗
            </a>
            <div className="nav__drawer-meta">
              <div className="nav__drawer-contact">
                <a href="mailto:info@kesarixtechnology.com">info@kesarixtechnology.com</a>
                <a href="tel:+919274739361">+91 92747 39361</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMobileOpen && (
        <div className="nav__backdrop" onClick={closeMobile} aria-hidden="true" />
      )}
    </>
  )
}
