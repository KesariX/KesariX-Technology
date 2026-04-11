import { useEffect } from 'react'
import { motion } from 'framer-motion'
import './styles/Legal.css'

export default function TermsOfService() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="legal-page">
      <motion.div className="legal-container" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="legal-header">
          <div className="legal-eyebrow">Legal & Compliance</div>
          <h1 className="legal-title">Terms of Service</h1>
          <div className="legal-updated">Last Updated: April 2026</div>
        </div>

        <div className="legal-content">
          <p>These Terms of Service ("Terms") govern your use of the websites, products, and enterprise engineering services provided by KesariX Technology ("we", "us", or "our").</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing our website or deploying our software, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on KesariX Technology's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul>
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose, or for any public display;</li>
            <li>Attempt to decompile or reverse engineer any proprietary software provided by KesariX Technology;</li>
            <li>Remove any copyright or other proprietary notations from the materials.</li>
          </ul>

          <h2>3. Service Level Agreements (SLA)</h2>
          <p>For enterprise clients engaging our Managed IT or Autonomous Agent pipelines, specific SLA uptime and latency guarantees will supersede these generalized terms. Please consult your bespoke architectural contract.</p>

          <h2>4. Limitations</h2>
          <p>In no event shall KesariX Technology or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on KesariX Technology's website.</p>

          <h2>5. Contact</h2>
          <p>If you have any questions regarding these Terms, please reach out via our contact page.</p>
        </div>
      </motion.div>
    </div>
  )
}
