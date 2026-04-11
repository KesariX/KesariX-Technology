import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import './styles/Navbar.css'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    
    // Animate navbar on mount
    gsap.fromTo(
      '.kx-navbar',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
    )

    gsap.fromTo(
      '.nav-link',
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.1,
      }
    )

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['Services', 'Work', 'About', 'Blog']

  return (
    <nav
      className={`kx-navbar ${scrolled ? 'kx-navbar--scrolled' : ''}`}
    >
      <div className="section-container kx-navbar__inner">
        <div className="kx-navbar__brand-wrap">
          <a href="/" className="kx-navbar__brand" aria-label="KesariX Technology home">
            <span className="kx-navbar__brand-core">Kesari</span>
            <span className="kx-navbar__brand-accent">X</span>
          </a>
          <span className="kx-navbar__tagline">We Engineer What's Next</span>
        </div>

        <div className="kx-navbar__links">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={`/#${link.toLowerCase()}`}
              className="nav-link kx-navbar__link"
            >
              {link}
              <span className="kx-navbar__link-line" />
            </a>
          ))}
        </div>

        <div className="kx-navbar__actions">
          <Link to="/contact" className="kx-navbar__ghost-btn">Contact</Link>
          <Link to="/contact" className="kx-navbar__cta-btn">Get in Touch</Link>
        </div>

        <button
          className="kx-navbar__menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="kx-navbar__mobile">
          <div className="section-container kx-navbar__mobile-inner">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={`/#${link.toLowerCase()}`}
                className="kx-navbar__mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="kx-navbar__mobile-actions">
              <Link to="/contact" className="kx-navbar__ghost-btn kx-navbar__mobile-btn" onClick={() => setMobileOpen(false)}>Contact</Link>
              <Link to="/contact" className="kx-navbar__cta-btn kx-navbar__mobile-btn" onClick={() => setMobileOpen(false)}>Get in Touch</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
