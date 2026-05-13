import './PrivacyPolicy.css'

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="legal-hero__inner">
          <nav className="legal-breadcrumb">
            <a href="/">Home</a><span>/</span><span>Privacy Policy</span>
          </nav>
          <span className="legal-eyebrow">Legal</span>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-subtitle">Last updated: 1 May 2026</p>
        </div>
      </div>

      <div className="legal-body">
        <div className="legal-toc">
          <h3>Contents</h3>
          <ol>
            <li><a href="#info-collect">Information We Collect</a></li>
            <li><a href="#info-use">How We Use Your Information</a></li>
            <li><a href="#info-share">Information Sharing</a></li>
            <li><a href="#cookies">Cookies & Tracking</a></li>
            <li><a href="#data-security">Data Security</a></li>
            <li><a href="#your-rights">Your Rights</a></li>
            <li><a href="#retention">Data Retention</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ol>
        </div>

        <div className="legal-content">
          <p className="legal-intro">
            KesariX Technology ("we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains what data we collect, why we collect it, and how we use it when you visit <strong>kesarixtechnology.com</strong> or engage our services.
          </p>

          <section id="info-collect">
            <h2>1. Information We Collect</h2>
            <h3>Information you provide directly</h3>
            <ul>
              <li>Name, email address, phone number — when you fill out our contact form or email us</li>
              <li>Company name, project description, and budget — when requesting a quote</li>
              <li>Payment details — processed securely through Razorpay or bank transfer (we do not store card numbers)</li>
            </ul>
            <h3>Information collected automatically</h3>
            <ul>
              <li>IP address, browser type, device information</li>
              <li>Pages visited, time on page, referral source</li>
              <li>Cookie and session data (see Section 4)</li>
            </ul>
          </section>

          <section id="info-use">
            <h2>2. How We Use Your Information</h2>
            <ul>
              <li><strong>Service delivery</strong> — to communicate about your project and deliver agreed work</li>
              <li><strong>Invoicing &amp; payments</strong> — to process and record transactions</li>
              <li><strong>Communications</strong> — to send project updates, relevant newsletters (you can unsubscribe at any time)</li>
              <li><strong>Website improvement</strong> — to understand how visitors use our site and improve the experience</li>
              <li><strong>Legal compliance</strong> — to meet obligations under Indian law and GST regulations</li>
            </ul>
          </section>

          <section id="info-share">
            <h2>3. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information. We may share data with:</p>
            <ul>
              <li><strong>Service providers</strong> — tools like Google Analytics, Razorpay, and email services that help us operate</li>
              <li><strong>Legal authorities</strong> — when required by law or to protect our rights</li>
              <li><strong>Business transfers</strong> — in the event of a merger or acquisition, subject to the same privacy obligations</li>
            </ul>
            <p>All third-party providers are vetted and required to handle data per applicable privacy laws.</p>
          </section>

          <section id="cookies">
            <h2>4. Cookies &amp; Tracking</h2>
            <p>We use cookies to improve your experience. These include:</p>
            <ul>
              <li><strong>Essential cookies</strong> — required for the website to function (cannot be disabled)</li>
              <li><strong>Analytics cookies</strong> — Google Analytics to understand traffic patterns (opt-out available)</li>
              <li><strong>Preference cookies</strong> — to remember your theme preference (dark/light mode)</li>
            </ul>
            <p>You can manage cookie preferences via your browser settings or our <a href="/cookie-policy">Cookie Policy</a>.</p>
          </section>

          <section id="data-security">
            <h2>5. Data Security</h2>
            <p>We implement industry-standard security measures including:</p>
            <ul>
              <li>HTTPS encryption for all data in transit</li>
              <li>Access controls limiting who can view personal data internally</li>
              <li>Regular security audits of our systems</li>
            </ul>
            <p>No transmission over the internet is 100% secure. If you suspect a security breach, contact us immediately at <a href="mailto:info@kesarixtechnology.com">info@kesarixtechnology.com</a>.</p>
          </section>

          <section id="your-rights">
            <h2>6. Your Rights</h2>
            <p>Under the Digital Personal Data Protection Act 2023 (India) and applicable laws, you have the right to:</p>
            <ul>
              <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
              <li><strong>Correction</strong> — ask us to correct inaccurate data</li>
              <li><strong>Deletion</strong> — request deletion of your personal data (subject to legal obligations)</li>
              <li><strong>Portability</strong> — receive your data in a machine-readable format</li>
              <li><strong>Withdraw consent</strong> — opt out of marketing communications at any time</li>
            </ul>
            <p>To exercise any of these rights, email <a href="mailto:info@kesarixtechnology.com">info@kesarixtechnology.com</a>.</p>
          </section>

          <section id="retention">
            <h2>7. Data Retention</h2>
            <p>We retain personal data for as long as necessary to provide our services and comply with legal obligations:</p>
            <ul>
              <li>Client project data: 7 years (for GST / audit compliance)</li>
              <li>Marketing enquiries: 2 years from last contact</li>
              <li>Website analytics: 26 months (Google Analytics default)</li>
            </ul>
          </section>

          <section id="contact">
            <h2>8. Contact Us</h2>
            <p>For any privacy-related questions or to exercise your rights:</p>
            <div className="legal-contact-block">
              <p><strong>KesariX Technology</strong></p>
              <p>Surat, Gujarat, India — 395001</p>
              <p>Email: <a href="mailto:info@kesarixtechnology.com">info@kesarixtechnology.com</a></p>
              <p>Phone: <a href="tel:+919274739361">+91 92747 39361</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
