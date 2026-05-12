import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import './Nav.css'

export default function Nav() {
  const navRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nav > *', {
        opacity: 0, y: -16, duration: 0.8,
        ease: 'power2.out', stagger: 0.08, delay: 3.0,
      })
    }, navRef)
    return () => ctx.revert()
  }, [])

  return (
    <nav className="nav" ref={navRef}>
      <a className="nav__logo" href="#top">
        <span className="nav__mark">K</span>
        <span>KesariX&nbsp;/&nbsp;Technology</span>
      </a>
      <div className="nav__menu">
        <a href="#services">Services</a>
        <a href="#portfolio">Our Work</a>
        <a href="#team">Company</a>
        <a href="#contact">Blog</a>
      </div>
      <a className="nav__cta" href="#contact">Start Project</a>
    </nav>
  )
}
