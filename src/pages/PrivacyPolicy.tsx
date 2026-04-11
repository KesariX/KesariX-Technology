import { useEffect } from 'react'
import { motion } from 'framer-motion'
import './styles/Legal.css'

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="legal-page">
      <motion.div className="legal-container" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="legal-header">
          <div className="legal-eyebrow">Legal & Compliance</div>
          <h1 className="legal-title">Privacy Policy</h1>
          <div className="legal-updated">Last Updated: April 2026</div>
        </div>

        <div className="legal-content">
          <p>At KesariX Technology, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.</p>
          
          <h2>1. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
          <ul>
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, and your access times.</li>
          </ul>

          <h2>2. Use of Your Information</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. We may use information collected about you via the Site to:</p>
          <ul>
            <li>Create and manage your enterprise technology integration account.</li>
            <li>Compile anonymous statistical data and analysis for use internally.</li>
            <li>Deliver targeted advertising, newsletters, and other information regarding promotions.</li>
          </ul>

          <h2>3. Data Security & Sovereignty</h2>
          <p>Our autonomous agents and cloud infrastructure strictly adhere to zero-trust compliance standards. Your data resides only in secure VPCs tailored to your geography unless otherwise configured. We use administrative, technical, and physical security measures to help protect your personal information.</p>

          <h2>4. Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <p><strong>KesariX Technology Legal Operations:</strong><br />legal@kesarix.com</p>
        </div>
      </motion.div>
    </div>
  )
}
