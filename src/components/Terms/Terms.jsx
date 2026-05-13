import './Terms.css'

export default function Terms() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="legal-hero__inner">
          <nav className="legal-breadcrumb">
            <a href="/">Home</a><span>/</span><span>Terms of Service</span>
          </nav>
          <span className="legal-eyebrow">Legal</span>
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-subtitle">Last updated: 1 May 2026</p>
        </div>
      </div>

      <div className="legal-body">
        <div className="legal-toc">
          <h3>Contents</h3>
          <ol>
            <li><a href="#acceptance">Acceptance of Terms</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#payment">Payment Terms</a></li>
            <li><a href="#ip">Intellectual Property</a></li>
            <li><a href="#liability">Limitation of Liability</a></li>
            <li><a href="#warranties">Warranties & Disclaimers</a></li>
            <li><a href="#termination">Termination</a></li>
            <li><a href="#governing">Governing Law</a></li>
          </ol>
        </div>

        <div className="legal-content">
          <p className="legal-intro">
            These Terms of Service govern your use of kesarixtechnology.com and any services provided by KesariX Technology. By engaging our services or using this website, you agree to these terms.
          </p>

          <section id="acceptance">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing our website or entering into a service agreement with KesariX Technology ("KesariX", "we", "us"), you agree to be bound by these Terms of Service, our Privacy Policy, and any project-specific agreements. If you do not agree, please do not use our services.</p>
          </section>

          <section id="services">
            <h2>2. Our Services</h2>
            <p>KesariX Technology provides technology services including but not limited to:</p>
            <ul>
              <li>Web and mobile application development</li>
              <li>AI solutions and machine learning systems</li>
              <li>Cloud infrastructure setup and management</li>
              <li>Process automation and workflow engineering</li>
              <li>Digital strategy and consulting</li>
            </ul>
            <p>The specific scope, deliverables, timeline, and price for each engagement are defined in a separate Project Agreement or Statement of Work (SOW) signed by both parties.</p>
          </section>

          <section id="payment">
            <h2>3. Payment Terms</h2>
            <ul>
              <li><strong>Advance payment</strong> — Projects require a 50% upfront payment before work commences</li>
              <li><strong>Final payment</strong> — The remaining 50% is due upon project delivery before final handover</li>
              <li><strong>Enterprise projects</strong> — May use milestone-based payment schedules as agreed in the SOW</li>
              <li><strong>Late payments</strong> — We reserve the right to pause work on overdue invoices</li>
              <li><strong>Currency</strong> — All prices are in Indian Rupees (INR) exclusive of GST (18%)</li>
              <li><strong>Refunds</strong> — Work completed up to the point of cancellation is non-refundable. See our Refund Policy for details.</li>
            </ul>
          </section>

          <section id="ip">
            <h2>4. Intellectual Property</h2>
            <h3>Client ownership</h3>
            <p>Upon receipt of full payment, the client owns all custom code, designs, and creative work produced specifically for their project.</p>
            <h3>KesariX ownership</h3>
            <p>We retain ownership of:</p>
            <ul>
              <li>Our proprietary tools, frameworks, and libraries used in delivery</li>
              <li>General methodologies and know-how developed during projects</li>
              <li>Any open-source components (which remain subject to their respective licences)</li>
            </ul>
            <h3>Portfolio rights</h3>
            <p>KesariX retains the right to showcase completed work in our portfolio and marketing materials unless the client requests confidentiality in writing.</p>
          </section>

          <section id="liability">
            <h2>5. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law:</p>
            <ul>
              <li>KesariX's total liability shall not exceed the total amount paid for the specific project giving rise to the claim</li>
              <li>We are not liable for indirect, consequential, or incidental damages</li>
              <li>We are not responsible for third-party services, APIs, or platforms integrated into your project</li>
              <li>We are not liable for data loss if the client fails to maintain adequate backups</li>
            </ul>
          </section>

          <section id="warranties">
            <h2>6. Warranties &amp; Disclaimers</h2>
            <p>We warrant that:</p>
            <ul>
              <li>Services will be delivered with reasonable skill and care</li>
              <li>We will not knowingly introduce security vulnerabilities</li>
              <li>We hold appropriate rights to any third-party assets used in your project</li>
            </ul>
            <p>We do not warrant that software will be error-free or that it will meet all of the client's requirements unless explicitly specified in the SOW.</p>
          </section>

          <section id="termination">
            <h2>7. Termination</h2>
            <p>Either party may terminate a project engagement with 14 days' written notice. Upon termination:</p>
            <ul>
              <li>The client is liable for all work completed up to the termination date</li>
              <li>KesariX will deliver all completed work and assets to the client</li>
              <li>Any upfront payments for uncompleted work will be assessed fairly and any appropriate refund processed within 30 days</li>
            </ul>
          </section>

          <section id="governing">
            <h2>8. Governing Law</h2>
            <p>These Terms are governed by the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Surat, Gujarat, India.</p>
            <p>For any questions about these Terms, contact us at <a href="mailto:info@kesarixtechnology.com">info@kesarixtechnology.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
