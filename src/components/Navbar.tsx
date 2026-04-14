import { useEffect, useState, memo } from 'react'
import { Menu, X, ChevronDown, BrainCircuit, Code2, Server, Bot, Zap, Users, Briefcase, BookOpen, Presentation } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
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

export default memo(function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null)
  const location = useLocation()

  const isDarkHero = ['/company/careers'].includes(location.pathname) && !scrolled

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`kx-navbar ${scrolled && !mobileOpen ? 'kx-navbar--scrolled' : ''} ${isDarkHero && !mobileOpen ? 'kx-navbar--dark' : ''} ${mobileOpen ? 'kx-navbar--mobile-open' : ''}`}
    >
      <div className="section-container kx-navbar__inner">
        <div className="kx-navbar__brand-wrap">
          <Link to="/" className="kx-navbar__brand" aria-label="KesariX Technology home">
            <span className="kx-navbar__brand-core">Kesari<span className="kx-navbar__brand-x">X</span></span>
            <span className="kx-navbar__brand-accent">Technology</span>
          </Link>
        </div>

        <div className="kx-navbar__links">
          {/* Services Dropdown */}
          <motion.div 
            className="nav-link-wrap nav-link-item" 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
            onMouseEnter={() => setActiveMenu('services')} 
            onMouseLeave={() => setActiveMenu(null)}
          >
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
          </motion.div>

          {/* Work Link */}
          <motion.div 
            className="nav-link-wrap nav-link-item"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5, ease: 'easeOut' }}
          >
            <Link to="/company/work" className="kx-navbar__link">
              Our Work
              <span className="kx-navbar__link-line" />
            </Link>
          </motion.div>

          {/* Company Dropdown */}
          <motion.div 
            className="nav-link-wrap nav-link-item" 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
            onMouseEnter={() => setActiveMenu('company')} 
            onMouseLeave={() => setActiveMenu(null)}
          >
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
          </motion.div>

          {/* Blog Link */}
          <motion.div 
            className="nav-link-wrap nav-link-item"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }}
          >
            <Link to="/company/blog" className="kx-navbar__link">
              <BookOpen size={16} className="mr-1" style={{ display: 'inline' }} /> Blog
              <span className="kx-navbar__link-line" />
            </Link>
          </motion.div>
        </div>

        <div className="kx-navbar__actions">
          <Link to="/contact" className="kx-navbar__cta-btn">Start Project</Link>
        </div>

        <button 
          className="kx-navbar__menu-btn" 
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={mobileOpen ? 'close' : 'menu'}
              initial={{ opacity: 0, rotate: mobileOpen ? -90 : 90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: mobileOpen ? 90 : -90, scale: 0.8 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Full-Screen Immersive Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            className="kx-mobile-overlay" 
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }} 
            animate={{ opacity: 1, backdropFilter: 'blur(24px)' }} 
            exit={{ opacity: 0, backdropFilter: 'blur(0px)', transition: { delay: 0.2, duration: 0.4 } }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Luminous Background Orbs */}
            <div className="kx-mobile-glow kx-mobile-glow--primary"></div>
            <div className="kx-mobile-glow kx-mobile-glow--secondary"></div>

            <motion.div 
              className="kx-mobile-content"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 }
                }
              }}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <div className="kx-mobile-nav-group section-container">
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } } }}>
                  <Link to="/" className="kx-mobile-link" onClick={() => setMobileOpen(false)}>
                    <span>Home</span>
                  </Link>
                </motion.div>
                
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } } }}>
                  <button
                    className={`kx-mobile-link kx-mobile-link--accordion ${expandedMobileMenu === 'services' ? 'is-open' : ''}`}
                    onClick={() => setExpandedMobileMenu(expandedMobileMenu === 'services' ? null : 'services')}
                  >
                    <span>Services</span>
                    <div className="kx-mobile-accordion-icon">
                      <span /><span />
                    </div>
                  </button>
                  <AnimatePresence>
                    {expandedMobileMenu === 'services' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="kx-mobile-sublinks-wrap">
                          {navMenus.services.map((svc) => (
                            <Link key={svc.path} to={svc.path} className="kx-mobile-sublink" onClick={() => setMobileOpen(false)}>
                              {svc.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } } }}>
                  <Link to="/company/work" className="kx-mobile-link" onClick={() => setMobileOpen(false)}>
                    <span>Our Work</span>
                  </Link>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } } }}>
                  <button
                    className={`kx-mobile-link kx-mobile-link--accordion ${expandedMobileMenu === 'company' ? 'is-open' : ''}`}
                    onClick={() => setExpandedMobileMenu(expandedMobileMenu === 'company' ? null : 'company')}
                  >
                    <span>Company</span>
                    <div className="kx-mobile-accordion-icon">
                      <span /><span />
                    </div>
                  </button>
                  <AnimatePresence>
                    {expandedMobileMenu === 'company' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="kx-mobile-sublinks-wrap">
                          {navMenus.company.map((item) => (
                            <Link key={item.path} to={item.path} className="kx-mobile-sublink" onClick={() => setMobileOpen(false)}>
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } } }}>
                  <Link to="/company/blog" className="kx-mobile-link" onClick={() => setMobileOpen(false)}>
                    <span>Blog</span>
                  </Link>
                </motion.div>
                
                <motion.div 
                  className="kx-mobile-footer"
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } } }}
                >
                  <Link to="/contact" className="kx-mobile-cta" onClick={() => setMobileOpen(false)}>
                    <span>Start Project</span>
                    <span className="kx-mobile-cta-arrow">→</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
})
