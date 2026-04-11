import { useEffect, useState } from 'react'
import { Menu, X, ChevronDown, BrainCircuit, Code2, Server, Bot, Zap, Users, Briefcase, BookOpen, Presentation } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import './styles/Navbar.css'

const navMenus = {
  services: [
    { path: '/services/ai-solutions', icon: BrainCircuit, title: 'AI Solutions', desc: 'Custom LLMs, RAG, and neural architectures.' },
    { path: '/services/web-development', icon: Code2, title: 'Web Engineering', desc: 'High-performance React & Node platforms.' },
    { path: '/services/it-services', icon: Server, title: 'IT Infrastructure', desc: 'Managed cloud, cybersecurity, and DevOps.' },
    { path: '/services/ai-agents', icon: Bot, title: 'Autonomous Agents', desc: 'Multi-agent reasoning engines for enterprise.' },
    { path: '/services/automation', icon: Zap, title: 'Process Automation', desc: 'Deep operational scripting and workflow logic.' }
  ],
  company: [
    { path: '/company/about', icon: Users, title: 'About KesariX', desc: 'Our history, values, and engineering ethos.' },
    { path: '/company/careers', icon: Briefcase, title: 'Careers', desc: 'Join the architecture. Open engineering roles.' },
    { path: '/company/press', icon: Presentation, title: 'Press & Assets', desc: 'Official brand assets, logos, and fact sheets.' }
  ]
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const location = useLocation()

  const isDarkHero = ['/company/careers'].includes(location.pathname) && !scrolled

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    
    gsap.fromTo('.kx-navbar', { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' })
    gsap.fromTo('.nav-link-item', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out', stagger: 0.1 })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`kx-navbar ${scrolled ? 'kx-navbar--scrolled' : ''} ${isDarkHero ? 'kx-navbar--dark' : ''}`}>
      <div className="section-container kx-navbar__inner">
        <div className="kx-navbar__brand-wrap">
          <Link to="/" className="kx-navbar__brand" aria-label="KesariX Technology home">
            <span className="kx-navbar__brand-core">Kesari</span>
            <span className="kx-navbar__brand-accent">X</span>
          </Link>
        </div>

        <div className="kx-navbar__links">
          {/* Services Dropdown */}
          <div className="nav-link-wrap nav-link-item" onMouseEnter={() => setActiveMenu('services')} onMouseLeave={() => setActiveMenu(null)}>
            <div className="kx-navbar__link">
              Services <ChevronDown size={14} className="kx-navbar__chevron" />
              <span className="kx-navbar__link-line" />
            </div>
            <AnimatePresence>
              {activeMenu === 'services' && (
                <motion.div 
                  className="kx-navbar__dropdown"
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  {navMenus.services.map((svc) => (
                    <Link key={svc.path} to={svc.path} className="kx-dropdown-item" onClick={() => setActiveMenu(null)}>
                      <div className="kx-dropdown-icon"><svc.icon size={20} /></div>
                      <div className="kx-dropdown-text">
                        <div className="kx-dropdown-title">{svc.title}</div>
                        <div className="kx-dropdown-desc">{svc.desc}</div>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Work Link */}
          <div className="nav-link-wrap nav-link-item">
            <Link to="/company/work" className="kx-navbar__link">
              Our Work
              <span className="kx-navbar__link-line" />
            </Link>
          </div>

          {/* Company Dropdown */}
          <div className="nav-link-wrap nav-link-item" onMouseEnter={() => setActiveMenu('company')} onMouseLeave={() => setActiveMenu(null)}>
            <div className="kx-navbar__link">
              Company <ChevronDown size={14} className="kx-navbar__chevron" />
              <span className="kx-navbar__link-line" />
            </div>
            <AnimatePresence>
              {activeMenu === 'company' && (
                <motion.div 
                  className="kx-navbar__dropdown" style={{ width: '400px', gridTemplateColumns: '1fr' }}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  {navMenus.company.map((item) => (
                    <Link key={item.path} to={item.path} className="kx-dropdown-item" onClick={() => setActiveMenu(null)}>
                      <div className="kx-dropdown-icon"><item.icon size={20} /></div>
                      <div className="kx-dropdown-text">
                        <div className="kx-dropdown-title">{item.title}</div>
                        <div className="kx-dropdown-desc">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Blog Link */}
          <div className="nav-link-wrap nav-link-item">
            <Link to="/company/blog" className="kx-navbar__link">
              <BookOpen size={16} className="mr-1" style={{ display: 'inline' }} /> Blog
              <span className="kx-navbar__link-line" />
            </Link>
          </div>
        </div>

        <div className="kx-navbar__actions">
          <Link to="/contact" className="kx-navbar__cta-btn">Start Project</Link>
        </div>

        <button className="kx-navbar__menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="kx-navbar__mobile" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
            <div className="section-container kx-navbar__mobile-inner">
              <Link to="/" className="kx-navbar__mobile-link" onClick={() => setMobileOpen(false)}>Home</Link>
              
              <div style={{ padding: '0.5rem', marginTop: '0.5rem', borderLeft: '2px solid var(--accent-primary)', marginLeft: '0.5rem' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Services</div>
                {navMenus.services.map((svc) => (
                  <Link key={svc.path} to={svc.path} className="kx-navbar__mobile-link" style={{ fontSize: '1rem', border: 'none', padding: '0.5rem 0' }} onClick={() => setMobileOpen(false)}>
                    {svc.title}
                  </Link>
                ))}
              </div>

              <Link to="/company/work" className="kx-navbar__mobile-link" onClick={() => setMobileOpen(false)}>Our Work</Link>
              
              <div style={{ padding: '0.5rem', marginTop: '0.5rem', borderLeft: '2px solid var(--accent-primary)', marginLeft: '0.5rem' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Company</div>
                {navMenus.company.map((item) => (
                  <Link key={item.path} to={item.path} className="kx-navbar__mobile-link" style={{ fontSize: '1rem', border: 'none', padding: '0.5rem 0' }} onClick={() => setMobileOpen(false)}>
                    {item.title}
                  </Link>
                ))}
              </div>

              <Link to="/company/blog" className="kx-navbar__mobile-link" onClick={() => setMobileOpen(false)}>Blog</Link>
              
              <div className="kx-navbar__mobile-actions">
                <Link to="/contact" className="kx-navbar__cta-btn kx-navbar__mobile-btn" onClick={() => setMobileOpen(false)}>Start Project</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
