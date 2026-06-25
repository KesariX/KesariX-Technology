import './CookiePolicy.css'
import SEO from '../SEO/SEO'

export default function CookiePolicy() {
  return (
    <div className="legal-page">
      <SEO 
        title="Cookie Policy | KesariX Technology"
        description="Read the KesariX Technology cookie policy to understand how we use cookies and tracking technologies to improve your experience."
        canonicalUrl="/cookie-policy"
      />
      <div className="legal-hero">
        <div className="legal-hero__inner">
          <nav className="legal-breadcrumb">
            <a href="/">Home</a><span>/</span><span>Cookie Policy</span>
          </nav>
          <span className="legal-eyebrow">Legal</span>
          <h1 className="legal-title">Cookie Policy</h1>
          <p className="legal-subtitle">Last updated: 1 May 2026</p>
        </div>
      </div>

      <div className="legal-body">
        <div className="legal-content legal-content--wide">
          <p className="legal-intro">
            This Cookie Policy explains how KesariX Technology uses cookies and similar tracking technologies on <strong>kesarixtechnology.com</strong>. By continuing to use our site, you consent to our use of cookies as described below.
          </p>

          <section>
            <h2>What Are Cookies?</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and deliver a better experience. Cookies cannot harm your device or access other data on it.</p>
          </section>

          <section>
            <h2>Cookies We Use</h2>
            <div className="legal-cookie-table">
              <div className="legal-cookie-row legal-cookie-row--header">
                <div>Cookie Name</div>
                <div>Type</div>
                <div>Purpose</div>
                <div>Duration</div>
              </div>
              <div className="legal-cookie-row">
                <div><code>kesarix-theme</code></div>
                <div><span className="cookie-tag cookie-tag--essential">Essential</span></div>
                <div>Stores your dark/light mode preference</div>
                <div>Persistent</div>
              </div>
              <div className="legal-cookie-row">
                <div><code>kesarix-cookies</code></div>
                <div><span className="cookie-tag cookie-tag--essential">Essential</span></div>
                <div>Records your cookie consent choice</div>
                <div>1 year</div>
              </div>
              <div className="legal-cookie-row">
                <div><code>_ga, _ga_*</code></div>
                <div><span className="cookie-tag cookie-tag--analytics">Analytics</span></div>
                <div>Google Analytics — tracks page views and user behaviour (anonymised)</div>
                <div>2 years</div>
              </div>
              <div className="legal-cookie-row">
                <div><code>_gid</code></div>
                <div><span className="cookie-tag cookie-tag--analytics">Analytics</span></div>
                <div>Google Analytics — distinguishes users</div>
                <div>24 hours</div>
              </div>
            </div>
          </section>

          <section>
            <h2>Third-Party Cookies</h2>
            <p>We may embed content from third-party services (such as YouTube videos or social media buttons). These services may set their own cookies. We do not control third-party cookies and recommend reviewing their respective privacy policies.</p>
          </section>

          <section>
            <h2>Managing Cookies</h2>
            <p>You can control and delete cookies in several ways:</p>
            <ul>
              <li><strong>Browser settings</strong> — Most browsers allow you to view, delete, and block cookies via Settings &gt; Privacy</li>
              <li><strong>Our consent banner</strong> — You can decline non-essential cookies when prompted on your first visit</li>
              <li><strong>Google Analytics opt-out</strong> — Install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics opt-out browser add-on</a></li>
            </ul>
            <p>Note: disabling certain cookies may affect website functionality.</p>
          </section>

          <section>
            <h2>Updates to This Policy</h2>
            <p>We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated date. Continued use of the site after changes constitutes acceptance.</p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>Questions about our cookie practices? Email us at <a href="mailto:info@kesarixtechnology.com">info@kesarixtechnology.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
