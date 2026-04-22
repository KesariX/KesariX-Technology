import { motion } from 'framer-motion'
import { memo } from 'react'
import { Linkedin, Github, Twitter, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'
import './styles/Footer.css'

export default memo(function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { label: 'AI Solutions', path: '/services/ai-solutions' },
      { label: 'Web Development', path: '/services/web-development' },
      { label: 'IT Services', path: '/services/it-services' },
      { label: 'AI Agents', path: '/services/ai-agents' },
      { label: 'Process Automation', path: '/services/automation' }
    ],
    Company: [
      { label: 'About Us', path: '/company/about' },
      { label: 'Our Work', path: '/company/work' },
      { label: 'Blog', path: '/company/blog' },
      { label: 'Careers', path: '/company/careers' }
    ],
    Contact: ['info@kesarixtechnology.com', '+91 92747 39361', 'India'],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <footer className="kx-footer">
      <div className="kx-footer__border-top" />
      <div className="kx-footer__watermark">KESARIX</div>

      <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="kx-footer__grid"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="kx-footer__brand">
            <div className="kx-footer__logo">
              <span className="kx-footer__logo-text">KesariX</span>
            </div>
            <p className="kx-footer__tagline">We Engineer What's Next.</p>
            <div className="kx-footer__social">
              {[
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/kesarix-technology' },
                { Icon: Github, href: 'https://github.com/KesariX' },
                { Icon: Twitter, href: 'https://x.com/kesarixtech' },
                // { Icon: Send, href: '#' },
                { Icon: Instagram, href: 'https://www.instagram.com/kesarix_technology' },
              ].map(({ Icon, href }, idx) => (
                <a key={idx} href={href} className="kx-footer__social-link" aria-label="Social link">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={itemVariants} className="kx-footer__column">
            <h4 className="kx-footer__column-title">Services</h4>
            <ul className="kx-footer__links">
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="kx-footer__link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div variants={itemVariants} className="kx-footer__column">
            <h4 className="kx-footer__column-title">Company</h4>
            <ul className="kx-footer__links">
              {footerLinks.Company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="kx-footer__link">
                    {link.label}
                    {link.label === 'Careers' && (
                      <span className="kx-footer__hiring-badge">Hiring</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants} className="kx-footer__column">
            <h4 className="kx-footer__column-title">Get in Touch</h4>
            <ul className="kx-footer__links">
              {footerLinks.Contact.map((item) => (
                <li key={item}>
                  <p className="kx-footer__contact-text">{item}</p>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="kx-footer__book-btn text-center inline-block">
              Book a Free Call
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="kx-footer__bottom"
        >
          <p className="kx-footer__copyright">
            © {currentYear} KesariX Technology. All rights reserved.
          </p>
          <div className="kx-footer__legal">
            <Link to="/legal/privacy" className="kx-footer__legal-link">Privacy Policy</Link>
            <Link to="/legal/terms" className="kx-footer__legal-link">Terms of Service</Link>
            <Link to="/legal/cookies" className="kx-footer__legal-link">Cookie Policy</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
})
