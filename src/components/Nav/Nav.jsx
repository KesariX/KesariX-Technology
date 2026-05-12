import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import './Nav.css'

export default function Nav() {
  const navRef = useRef(null)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nav > *', {
        opacity: 0, y: -16, duration: 0.8,
        ease: 'power2.out', stagger: 0.08, delay: 3.0,
      })
    }, navRef)
    return () => ctx.revert()
  }, [])

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

  return (
    <nav className="nav" ref={navRef}>
      <a className="nav__logo" href="/">
        <span className="nav__mark">K</span>
        <span>KesariX&nbsp;/&nbsp;Technology</span>
      </a>
      <div className="nav__menu">
        {/* Services dropdown */}
        <div className="nav__item">
          <button className="nav__link-btn" onClick={() => { setIsServicesOpen(!isServicesOpen); setIsCompanyOpen(false) }}>
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

        {/* Company dropdown */}
        <div className="nav__item">
          <button className="nav__link-btn" onClick={() => { setIsCompanyOpen(!isCompanyOpen); setIsServicesOpen(false) }}>
            Company <span className={`nav__arrow ${isCompanyOpen ? 'nav__arrow--open' : ''}`}>▾</span>
          </button>
          <div className={`nav__submenu ${isCompanyOpen ? 'nav__submenu--open' : ''}`}>
            <a href="/about" onClick={closeAll}>About KesariX</a>
            <a href="/careers" onClick={closeAll}>Careers</a>
          </div>
        </div>

        <a href="/blog">Blog</a>
      </div>
      <a className="nav__cta" href="/contact">Start Project</a>
    </nav>
  )
}
