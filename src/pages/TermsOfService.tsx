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
          <div className="legal-updated">Last Updated: April 15, 2026 | Version 2.0 | Effective Globally</div>
        </div>

        <div className="legal-content">
          {/* ────── TABLE OF CONTENTS ────── */}
          <section className="terms-section">
            <h2>Table of Contents</h2>
            <ol style={{ paddingLeft: '2rem' }}>
              <li>Introduction & Acceptance</li>
              <li>Definitions</li>
              <li>Website Use License</li>
              <li>Service Terms & Scope</li>
              <li>Intellectual Property Rights</li>
              <li>Payment Terms & Billing</li>
              <li>Confidentiality & NDA</li>
              <li>Data Protection & Privacy</li>
              <li>Security & Compliance</li>
              <li>Warranties & Disclaimers</li>
              <li>Limitation of Liability</li>
              <li>Indemnification</li>
              <li>Termination & Suspension</li>
              <li>Service Level Agreements (SLAs)</li>
              <li>Acceptable Use Policy</li>
              <li>Data Collection & Use</li>
              <li>Third-Party Services & APIs</li>
              <li>Force Majeure</li>
              <li>Dispute Resolution & Governing Law</li>
              <li>Export Compliance</li>
              <li>Anti-Corruption & Legal Compliance</li>
              <li>Entire Agreement & Severability</li>
              <li>Miscellaneous Provisions</li>
              <li>Service-Specific Addenda</li>
            </ol>
          </section>

          {/* ────── 1. INTRODUCTION & ACCEPTANCE ────── */}
          <section className="terms-section">
            <h2>1. Introduction & Acceptance</h2>
            
            <h3>1.1 Binding Agreement</h3>
            <p>
              These Terms of Service ("Terms", "Agreement") constitute a legally binding agreement between <strong>KesariX Technology</strong> (registered in India, with operations worldwide) ("Company", "we", "us", "our") and the client, organization, or individual accessing our website, services, or platforms ("Client", "you", "your").
            </p>

            <h3>1.2 Scope of Application</h3>
            <p>These Terms govern:</p>
            <ul>
              <li>Access to and use of www.kesarix.com and affiliated platforms</li>
              <li>Web Development services (custom React/Next.js/Node.js applications)</li>
              <li>AI Solutions & Autonomous Agent development and deployment</li>
              <li>IT Services & Infrastructure Management (managed services, cloud operations, cybersecurity)</li>
              <li>Enterprise Technology Integration consulting and implementation</li>
              <li>All related support, documentation, and professional services</li>
            </ul>

            <h3>1.3 Acceptance Mechanism</h3>
            <p>
              By accessing our website, clicking "I Accept", signing a Statement of Work (SOW), or engaging our services in any capacity, you acknowledge that you have read, understood, and agree to be bound by all terms herein. If you do not agree, you must immediately cease access and use of our services. Your continued use constitutes acceptance.
            </p>

            <h3>1.4 Age & Authority</h3>
            <ul>
              <li>You represent that you are at least 18 years of age (or the age of majority in your jurisdiction)</li>
              <li>If accessing on behalf of a company, you represent that you have authority to bind that entity</li>
              <li>You take full responsibility for any breach by you or on your behalf</li>
            </ul>

            <h3>1.5 Modification Rights</h3>
            <p>
              We reserve the right to modify these Terms at any time. Material changes will be communicated via email or prominent website notice with 30 days' notice. Your continued use after modifications constitutes acceptance. Review this page periodically for updates.
            </p>
          </section>

          {/* ────── 2. DEFINITIONS ────── */}
          <section className="terms-section">
            <h2>2. Definitions</h2>
            <ul>
              <li><strong>"Client"</strong> - The individual, organization, or legal entity engaging KesariX Technology for services</li>
              <li><strong>"Confidential Information"</strong> - Non-public information marked confidential or reasonably understood to be confidential</li>
              <li><strong>"Deliverables"</strong> - Services, code, designs, documentation, AI models, and outputs specified in the Statement of Work (SOW)</li>
              <li><strong>"Data"</strong> - All personal data, business data, and information processed by KesariX Technology on Client's behalf</li>
              <li><strong>"Intellectual Property (IP)"</strong> - Patents, copyrights, trademarks, trade secrets, and proprietary technologies</li>
              <li><strong>"Services"</strong> - Web development, AI solutions, IT services, and related professional services provided by KesariX Technology</li>
              <li><strong>"SLA"</strong> - Service Level Agreement specifying uptime, response times, and performance targets</li>
              <li><strong>"Statement of Work (SOW)"</strong> - Specific project documentation detailing scope, deliverables, timeline, and pricing</li>
              <li><strong>"Sensitive Personal Data"</strong> - Personal data requiring special protection under DPDPA, GDPR, CCPA, and related laws</li>
              <li><strong>"Force Majeure"</strong> - Unforeseeable events beyond parties' reasonable control (natural disasters, pandemics, wars, etc.)</li>
            </ul>
          </section>

          {/* ────── 3. WEBSITE USE LICENSE ────── */}
          <section className="terms-section">
            <h2>3. Website Use License</h2>

            <h3>3.1 License Grant</h3>
            <p>
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our website for lawful purposes only. This is a license, not a transfer of ownership or title.
            </p>

            <h3>3.2 Permitted Uses</h3>
            <ul>
              <li>Viewing publicly available content and information</li>
              <li>Contacting us regarding services</li>
              <li>Accessing resources and documentation</li>
              <li>Using interactive tools (contact forms, request buttons)</li>
            </ul>

            <h3>3.3 Prohibited Activities</h3>
            <p>You agree NOT to:</p>
            <ul>
              <li>Modify, copy, or distribute website content without permission</li>
              <li>Reverse-engineer, decompile, or disassemble proprietary software</li>
              <li>Attempt to gain unauthorized access to systems or accounts</li>
              <li>Deploy automated scraping, bots, or crawlers (except legitimate search engines)</li>
              <li>Remove copyright, trademark, or proprietary notices</li>
              <li>Use the website for illegal activities or third-party's behalf without authorization</li>
              <li>Transmit viruses, malware, or harmful code</li>
              <li>Engage in phishing, fraud, or misleading activities</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>

            <h3>3.4 Suspension & Termination</h3>
            <p>
              We may immediately suspend or terminate your access if you violate these Terms or pose a security risk, without liability to you.
            </p>
          </section>

          {/* ────── 4. SERVICE TERMS & SCOPE ────── */}
          <section className="terms-section">
            <h2>4. Service Terms & Scope</h2>

            <h3>4.1 Web Development Services</h3>
            <ul>
              <li><strong>Scope:</strong> Custom development using React, Next.js, Node.js, databases (PostgreSQL, MongoDB, etc.), and cloud infrastructure</li>
              <li><strong>Deliverables:</strong> Source code, documentation, deployed application on Client's chosen infrastructure</li>
              <li><strong>Timeline:</strong> As specified in SOW; milestone-based delivery</li>
              <li><strong>Performance Standards:</strong> Lighthouse scores ≥ 90, Core Web Vitals optimization, accessibility (WCAG 2.1 AA)</li>
              <li><strong>Testing & QA:</strong> Comprehensive testing included; Client acceptance within 5 business days of UAT delivery</li>
              <li><strong>Hosting:</strong> Client responsible for production hosting infrastructure unless otherwise agreed</li>
              <li><strong>Change Requests:</strong> Out-of-scope changes invoiced separately; minimum 2-day turnaround</li>
              <li><strong>Maintenance Period:</strong> 30-60 days included bug fix support post-launch; extended support available via separate SLA</li>
            </ul>

            <h3>4.2 AI Solutions & Autonomous Agents</h3>
            <ul>
              <li><strong>Scope:</strong> Custom AI model development, training, fine-tuning, and autonomous agent implementation</li>
              <li><strong>Data Requirements:</strong> Client responsible for providing sufficient, quality training data</li>
              <li><strong>Model Performance:</strong> Performance metrics (accuracy, F1-score, latency) agreed in SOW; no guarantee of specific accuracy</li>
              <li><strong>Limitations:</strong> AI models have inherent limitations; Client assumes risk of model predictions; we don't guarantee zero errors</li>
              <li><strong>Monitoring & Retraining:</strong> Autonomous agents monitored for drift; retraining cycles specified in SLA</li>
              <li><strong>Deployment:</strong> Client responsible for production deployment on their infrastructure or agreed cloud environment</li>
              <li><strong>Data Handling:</strong> All training/inference data encrypted, segregated, and deleted per contract terms</li>
              <li><strong>Model Updates:</strong> Version updates released quarterly or as needed; Client may choose to deploy or defer updates</li>
            </ul>

            <h3>4.3 IT Services & Infrastructure Management</h3>
            <ul>
              <li><strong>Scope:</strong> Managed IT services, cloud infrastructure, cybersecurity, patch management, 24/7 monitoring</li>
              <li><strong>SLAs:</strong> Specified uptime targets (99.5%, 99.9%, or custom), response times, and resolution times per tier</li>
              <li><strong>Support Tiers:</strong> Platinum (24/7 response), Gold (business hours), Silver (ticket-based, 24-hour response)</li>
              <li><strong>Incident Classification:</strong> Critical (P1, 1-hour response), High (P2, 2-hour response), Medium (P3, 4-hour response), Low (P4, next business day)</li>
              <li><strong>Maintenance Windows:</strong> 2-4 hours per month, typically weekends; Client notified 14 days in advance</li>
              <li><strong>Disaster Recovery:</strong> Backup procedures, RTO/RPO per contract, testing quarterly</li>
              <li><strong>Compliance Responsibility:</strong> Client responsible for compliance; we implement security controls per contract</li>
            </ul>

            <h3>4.4 Managed Services & Retainers</h3>
            <ul>
              <li><strong>Monthly Allocation:</strong> Specified hours/credits per month, non-refundable if unused</li>
              <li><strong>Rolling Scope:</strong> Services may include support, updates, optimization, consulting as per MSA</li>
              <li><strong>Onboarding:</strong> Initial setup completed within 5 business days of contract execution</li>
              <li><strong>Offboarding:</strong> Upon termination, 30-day transition period for knowledge transfer and data handover</li>
            </ul>
          </section>

          {/* ────── 5. INTELLECTUAL PROPERTY RIGHTS ────── */}
          <section className="terms-section">
            <h2>5. Intellectual Property Rights</h2>

            <h3>5.1 Pre-Existing IP</h3>
            <ul>
              <li><strong>KesariX Tools & Frameworks:</strong> All pre-existing KesariX tools, libraries, methodologies, and processes remain KesariX property</li>
              <li><strong>License to Client:</strong> Client receives perpetual, non-exclusive, non-transferable license to use pre-existing IP as incorporated in Deliverables</li>
              <li><strong>No Reverse Engineering:</strong> Client may not reverse-engineer or extract pre-existing IP components</li>
            </ul>

            <h3>5.2 Deliverables & Custom Code</h3>
            <ul>
              <li><strong>Ownership:</strong> Custom code, designs, and deliverables created specifically for Client are owned by Client upon full payment</li>
              <li><strong>License to KesariX:</strong> KesariX retains non-exclusive license to use general methodologies, patterns, and anonymized learnings</li>
              <li><strong>Protection:</strong> All deliverables protected under copyright; KesariX provides source code access or escrow as agreed</li>
            </ul>

            <h3>5.3 Client Data & IP</h3>
            <ul>
              <li><strong>Client Ownership:</strong> All Client data, content, and pre-existing IP remains Client property</li>
              <li><strong>License to KesariX:</strong> Client grants KesariX license to use data only for agreed service delivery and technical support</li>
              <li><strong>Restrictions:</strong> KesariX may not use Client data for training public models without explicit consent</li>
            </ul>

            <h3>5.4 Third-Party IP & Open-Source</h3>
            <ul>
              <li><strong>Disclosure:</strong> All third-party libraries, open-source components disclosed in deliverable documentation</li>
              <li><strong>License Compliance:</strong> All open-source licenses (MIT, Apache 2.0, GPL, etc.) complied with; Client responsible for understanding implications</li>
              <li><strong>Attribution:</strong> All attributions maintained; Client responsible for downstream compliance</li>
            </ul>

            <h3>5.5 Portfolio & Case Studies</h3>
            <ul>
              <li><strong>Permission Required:</strong> KesariX may use anonymized project descriptions in portfolio only with explicit written Client consent</li>
              <li><strong>Confidential Projects:</strong> Client may request project remain confidential; request honored without penalty</li>
            </ul>
          </section>

          {/* ────── 6. PAYMENT TERMS & BILLING ────── */}
          <section className="terms-section">
            <h2>6. Payment Terms & Billing</h2>

            <h3>6.1 Pricing Models</h3>
            <ul>
              <li><strong>Fixed Price Projects:</strong> Total fee invoiced as 50% upfront, 50% upon delivery</li>
              <li><strong>Hourly Services:</strong> Range of ₹2,500-₹10,000 per hour depending on expertise; monthly invoice</li>
              <li><strong>Milestone-Based:</strong> Invoiced upon completion of each milestone (typically 25-50% increments)</li>
              <li><strong>Retainer Services:</strong> Monthly retainer due on 1st of each month; unused credits non-refundable</li>
            </ul>

            <h3>6.2 Invoice & Payment</h3>
            <ul>
              <li><strong>Payment Terms:</strong> Net 15 (15 days from invoice date) for standard clients, Net 30 for enterprise</li>
              <li><strong>Accepted Methods:</strong> Bank transfer (NEFT/RTGS), credit card (Stripe/Razorpay), wire transfer, cryptocurrency (if agreed)</li>
              <li><strong>Currency:</strong> Invoices in INR (₹) for India-based services; USD/EUR for international clients; conversion at prevailing rates</li>
              <li><strong>Late Payment:</strong> 1.5% per month (18% annually) interest on overdue amounts; Client liable for collection costs</li>
              <li><strong>Dispute Period:</strong> Billing disputes must be raised within 15 days of invoice; timely payment assumed approval</li>
            </ul>

            <h3>6.3 Taxes & GST</h3>
            <ul>
              <li><strong>India (GST):</strong> 18% GST added to all invoices for Indian clients (if Client GST registered, reverse charge applies)</li>
              <li><strong>International:</strong> IGST (Integrated GST) applicable for non-India clients; VAT/Sales Tax per local jurisdiction</li>
              <li><strong>Tax Certificate:</strong> Tax invoice provided with GST registration number for deduction purposes</li>
            </ul>

            <h3>6.4 Expenses & Reimbursement</h3>
            <ul>
              <li><strong>Out-of-Pocket Expenses:</strong> Approved travel, tools, licenses, infrastructure reimbursed at cost + 10% handling</li>
              <li><strong>Pre-Approval:</strong> Expenses &gt;₹5,000 require written pre-approval; unexpected expenses up to ₹2,500 allowed</li>
            </ul>

            <h3>6.5 Change Orders & Additional Services</h3>
            <ul>
              <li><strong>Scope Changes:</strong> Requests outside agreed SOW invoiced separately at prevailing rates</li>
              <li><strong>Timeline Impact:</strong> Timeline adjustments made mutually; Client absorbs extended costs</li>
              <li><strong>Approval Process:</strong> Written change order required before work commences</li>
            </ul>

            <h3>6.6 No Refunds Policy</h3>
            <p>
              <strong>Services are non-refundable.</strong> Once work commences, KesariX assumes resource allocation and opportunity cost. Client may terminate and receive:
            </p>
            <ul>
              <li>30% of paid amount if terminated within first 2 weeks</li>
              <li>0% refund if terminated after 2 weeks</li>
              <li>Exception: Refunds may apply if Client has legitimate breach disputes (reviewed case-by-case)</li>
            </ul>
          </section>

          {/* ────── 7. CONFIDENTIALITY & NDA ────── */}
          <section className="terms-section">
            <h2>7. Confidentiality & Non-Disclosure Agreement</h2>

            <h3>7.1 Definition of Confidential Information</h3>
            <p>Confidential Information includes:</p>
            <ul>
              <li>Business strategies, plans, financial data, and proprietary methods</li>
              <li>Client code, architecture, and technical specifications</li>
              <li>Personal data, customer lists, and business relationships</li>
              <li>Any information marked "Confidential" or reasonably understood as confidential</li>
              <li>Discussions, demos, and non-public information shared during engagement</li>
            </ul>

            <h3>7.2 Confidentiality Obligations</h3>
            <p>
              Both parties agree to maintain strict confidentiality and protect Confidential Information using reasonable care (no less than they use for their own confidential information). Confidential Information may not be disclosed to third parties without prior written consent.
            </p>

            <h3>7.3 Exceptions to Confidentiality</h3>
            <p>
              Confidentiality does not apply to information that is: (a) publicly available through no breach of these Terms, (b) rightfully received from third party without confidentiality obligation, (c) independently developed without reference to Confidential Information, or (d) required to be disclosed by law or court order.
            </p>

            <h3>7.4 Duration</h3>
            <p>
              Confidentiality obligations survive for <strong>3 years after project completion or contract termination</strong>, whichever is later. Trade secrets remain confidential indefinitely.
            </p>

            <h3>7.5 Residual Knowledge Exception</h3>
            <p>
              KesariX employees may use general knowledge, skills, and experience acquired during engagement in other projects; this does not constitute breach if no Client Confidential Information is used.
            </p>

            <h3>7.6 Third-Party Recipients</h3>
            <p>
              If Confidential Information must be shared with subcontractors or service providers, KesariX ensures they sign equivalent confidentiality agreements and assumes liability for their breaches.
            </p>
          </section>

          {/* ────── 8. DATA PROTECTION & PRIVACY ────── */}
          <section className="terms-section">
            <h2>8. Data Protection & Privacy</h2>

            <h3>8.1 Data Processing</h3>
            <ul>
              <li><strong>KesariX Role:</strong> KesariX acts as data processor for personal data processed on Client's behalf</li>
              <li><strong>Client Responsibility:</strong> Client responsible for lawful data collection, obtaining consent, and complying with privacy laws</li>
              <li><strong>DPA:</strong> For EU/UK personal data, separate Data Processing Agreement (DPA) with Standard Contractual Clauses (SCCs) required before processing</li>
            </ul>

            <h3>8.2 Data Residency & Localization</h3>
            <ul>
              <li><strong>India (DPDPA):</strong> Sensitive personal data remains in India; non-sensitive data may be transferred for processing with Client consent</li>
              <li><strong>GDPR:</strong> EU personal data processed only with compliant transfer mechanisms (SCCs, adequacy decisions)</li>
              <li><strong>CCPA:</strong> California consumer data not sold; retention limited to stated purposes</li>
            </ul>

            <h3>8.3 Data Breach Notification</h3>
            <ul>
              <li><strong>GDPR:</strong> Notification to authorities within 72 hours of discovery; affected individuals notified if high risk</li>
              <li><strong>DPDPA:</strong> Notification to affected individuals without unreasonable delay; government notification if required</li>
              <li><strong>CCPA:</strong> Notice to consumers without unreasonable delay (typically 15-30 days)</li>
              <li><strong>India ITA 2000:</strong> Notification to CERT-IN and affected parties without undue delay</li>
            </ul>

            <h3>8.4 Data Retention Post-Termination</h3>
            <ul>
              <li><strong>Client Data:</strong> Retained for 30 days post-termination for transition; then securely deleted unless legally required</li>
              <li><strong>Backup Retention:</strong> Backup copies retained per compliance requirements; primary copies deleted within timeline</li>
              <li><strong>Legal Holds:</strong> Data retained if subject to litigation or regulatory investigation</li>
            </ul>

            <h3>8.5 Data Subject Rights Support</h3>
            <p>
              KesariX assists Client in responding to data subject access requests (DSAR), deletion requests, and portability requests within 10 business days of Client's request. Client reimburses reasonable costs for complex requests.
            </p>
          </section>

          {/* ────── 9. SECURITY & COMPLIANCE ────── */}
          <section className="terms-section">
            <h2>9. Security & Compliance</h2>

            <h3>9.1 Security Infrastructure</h3>
            <ul>
              <li><strong>Zero-Trust Architecture:</strong> Multi-factor authentication, continuous verification, least-privilege access controls</li>
              <li><strong>Encryption:</strong> TLS 1.2+ for data in transit; AES-256 for data at rest</li>
              <li><strong>Firewalls & Intrusion Detection:</strong> WAF, DDoS protection, IDS/IPS systems</li>
              <li><strong>Access Control:</strong> Role-based access control (RBAC), segregated databases, audit logging</li>
            </ul>

            <h3>9.2 Certifications & Compliance</h3>
            <ul>
              <li><strong>ISO 27001:</strong> Information Security Management System certification</li>
              <li><strong>SOC 2 Type II:</strong> Annual audit covering security, availability, processing integrity</li>
              <li><strong>GDPR Compliant:</strong> Privacy Impact Assessments conducted; Data Protection Officer appointed</li>
              <li><strong>HIPAA Ready:</strong> Healthcare data encryption and audit trails (if applicable)</li>
            </ul>

            <h3>9.3 Operational Security</h3>
            <ul>
              <li><strong>Employee Training:</strong> Annual security and privacy training mandatory</li>
              <li><strong>Background Checks:</strong> All employees with data access background verified</li>
              <li><strong>Incident Response:</strong> 24/7 monitoring; 1-hour incident response; root cause analysis within 48 hours</li>
              <li><strong>Penetration Testing:</strong> Annual third-party penetration tests; vulnerability assessments quarterly</li>
            </ul>

            <h3>9.4 Third-Party Security</h3>
            <ul>
              <li><strong>Vendor Assessment:</strong> Service providers audited for SOC 2/ISO 27001 compliance</li>
              <li><strong>Contractual Safeguards:</strong> All service providers sign Data Processing Agreements with security obligations</li>
              <li><strong>Right to Audit:</strong> KesariX reserves right to audit service provider security controls annually</li>
            </ul>

            <h3>9.5 Vulnerability Reporting</h3>
            <p>
              Security vulnerabilities in KesariX systems can be reported to: <strong>security@kesarix.com</strong>. We respond within 48 hours; bug bounty program available for eligible findings.
            </p>
          </section>

          {/* ────── 10. WARRANTIES & DISCLAIMERS ────── */}
          <section className="terms-section">
            <h2>10. Warranties & Disclaimers</h2>

            <h3>10.1 Limited Warranty</h3>
            <ul>
              <li><strong>Web Development:</strong> Deliverable code free from defects for 60 days post-launch; bug fixes provided at no charge</li>
              <li><strong>AI Models:</strong> Models function as demonstrated; no warranty of specific accuracy or business results</li>
              <li><strong>IT Services:</strong> Services performed in professional manner per agreed SLAs; not warranty of zero downtime</li>
            </ul>

            <h3>10.2 As-Is Services</h3>
            <p>
              EXCEPT FOR LIMITED WARRANTIES ABOVE, ALL SERVICES PROVIDED "AS-IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h3>10.3 AI Model Disclaimers</h3>
            <ul>
              <li>AI models have inherent limitations and may produce inaccurate, biased, or harmful outputs</li>
              <li>No guarantee of specific accuracy metrics or business results</li>
              <li>Client responsible for validation, testing, and oversight of model outputs before production use</li>
              <li>KesariX not liable for AI model failures, false predictions, or downstream consequences</li>
            </ul>

            <h3>10.4 Third-Party Disclaimers</h3>
            <ul>
              <li>No warranty for third-party APIs, libraries, or services integrated into deliverables</li>
              <li>Third-party outages not covered under KesariX SLAs</li>
              <li>Client assumes risk of third-party dependencies</li>
            </ul>

            <h3>10.5 Internet & Connectivity</h3>
            <p>
              KesariX does not warrant uninterrupted internet connectivity, third-party ISP reliability, or Client network security. Client responsible for adequate network infrastructure.
            </p>

            <h3>10.6 Client Infrastructure</h3>
            <p>
              If Services deployed on Client-controlled infrastructure, Client responsible for maintaining that infrastructure. KesariX not liable for Client-side failures unless caused by KesariX code defects.
            </p>
          </section>

          {/* ────── 11. LIMITATION OF LIABILITY ────── */}
          <section className="terms-section">
            <h2>11. Limitation of Liability</h2>

            <h3>11.1 Liability Cap</h3>
            <p>
              <strong>EXCEPT FOR SPECIFIC EXCEPTIONS BELOW, IN NO EVENT SHALL KESARIX TECHNOLOGY'S TOTAL LIABILITY EXCEED THE TOTAL FEES PAID BY CLIENT IN THE 12 MONTHS PRECEDING THE CLAIM.</strong> If no fees paid, liability capped at ₹10,000.
            </p>

            <h3>11.2 Excluded Damages</h3>
            <p>
              KESARIX TECHNOLOGY SHALL NOT BE LIABLE FOR:
            </p>
            <ul>
              <li>Indirect, incidental, consequential, special, or punitive damages</li>
              <li>Lost profits, lost revenue, lost business opportunity, or lost data</li>
              <li>Cost of substitute goods or services</li>
              <li>Business interruption or loss of use</li>
              <li>Reputational harm or loss of goodwill</li>
              <li>Even if advised of possibility of such damages</li>
            </ul>

            <h3>11.3 Exceptions to Liability Cap</h3>
            <p>
              Liability cap does NOT apply to:
            </p>
            <ul>
              <li>Gross negligence or willful misconduct by KesariX</li>
              <li>Breach of confidentiality obligations</li>
              <li>Infringement of Client's intellectual property rights</li>
              <li>Indemnification obligations under Section 12</li>
              <li>Breach of data protection laws (GDPR, DPDPA, CCPA)</li>
              <li>Either party's defense against third-party claims</li>
            </ul>

            <h3>11.4 Capped Remedies</h3>
            <p>
              Client's exclusive remedy for any Service defect is correction of the defect or, if impractical, receipt of a credit against future fees. This limitation applies even if this remedy fails of its essential purpose.
            </p>

            <h3>11.5 Essential Nature of Limitations</h3>
            <p>
              Both parties have relied on these liability limitations in entering into this Agreement. These limitations are essential to economically viable arrangement between parties and apply regardless of form of claim (contract, tort, strict liability, or otherwise).
            </p>
          </section>

          {/* ────── 12. INDEMNIFICATION ────── */}
          <section className="terms-section">
            <h2>12. Indemnification</h2>

            <h3>12.1 KesariX Indemnification</h3>
            <p>
              KesariX indemnifies Client against third-party claims that deliverables, when used in accordance with these Terms, infringe third-party intellectual property rights. KesariX shall, at its expense, defend the claim and either:
            </p>
            <ul>
              <li>Obtain right for Client to continue using deliverables, or</li>
              <li>Replace or modify deliverable to make it non-infringing, or</li>
              <li>If above not feasible, terminate service and refund prepaid amounts for remaining term</li>
            </ul>

            <h3>12.2 Client Indemnification</h3>
            <p>
              Client indemnifies KesariX against third-party claims that:
            </p>
            <ul>
              <li>Client data, content, or pre-existing IP infringes third-party rights</li>
              <li>Client's use of deliverables violates applicable laws</li>
              <li>Client modifies deliverables outside of KesariX's control</li>
              <li>Client data breach or security failure</li>
            </ul>

            <h3>12.3 Indemnification Procedures</h3>
            <ul>
              <li><strong>Notice:</strong> Indemnified party notify indemnifying party within 10 days of claim</li>
              <li><strong>Defense:</strong> Indemnifying party controls defense at its expense</li>
              <li><strong>Cooperation:</strong> Indemnified party cooperates with defense; indemnified party not settle without consent</li>
              <li><strong>Settlement:</strong> Indemnifying party satisfies judgment or claim at its expense</li>
            </ul>

            <h3>12.4 Sole Remedy</h3>
            <p>
              Indemnification sets forth exclusive remedy for third-party intellectual property infringement claims.
            </p>
          </section>

          {/* ────── 13. TERMINATION & SUSPENSION ────── */}
          <section className="terms-section">
            <h2>13. Termination & Suspension</h2>

            <h3>13.1 Termination for Convenience</h3>
            <ul>
              <li><strong>Project-Based:</strong> Client may terminate with 15 days' notice; Client pays for work completed + reasonable wind-down costs</li>
              <li><strong>Retainer Services:</strong> Either party may terminate with 30 days' notice; final month invoiced for allocated hours</li>
              <li><strong>Fixed-Price:</strong> Client may terminate; Client pays all costs incurred + 20% of remaining contract value</li>
            </ul>

            <h3>13.2 Termination for Cause</h3>
            <p>
              Either party may terminate immediately if:
            </p>
            <ul>
              <li>Other party materially breaches these Terms and fails to cure within 15 days of written notice</li>
              <li>Other party becomes insolvent, bankrupt, or subject to receivership</li>
              <li>Other party's actions jeopardize security or compliance</li>
            </ul>

            <h3>13.3 Suspension for Security Threats</h3>
            <p>
              KesariX may immediately suspend services if Client data is at risk, security is compromised, or Client violates acceptable use policy. Suspension lifted upon remediation.
            </p>

            <h3>13.4 Effects of Termination</h3>
            <ul>
              <li><strong>Licenses:</strong> All licenses granted hereunder terminate immediately</li>
              <li><strong>Confidential Information:</strong> Confidentiality obligations survive and continue for specified period</li>
              <li><strong>Data Return:</strong> Client data provided within 30 days; Client bears retrieval/transfer costs over ₹5,000</li>
              <li><strong>Survival:</strong> Sections 5 (IP), 7 (Confidentiality), 8 (Data Protection), 10 (Warranties), 11 (Liability), 12 (Indemnity), 19 (Dispute Resolution), and 24 (Miscellaneous) survive termination</li>
            </ul>

            <h3>13.5 Offboarding</h3>
            <p>
              Upon termination, KesariX provides up to 2 weeks (40 hours) of transition support at no charge. If Client requests extended transition support, standard hourly rates apply.
            </p>
          </section>

          {/* ────── 14. SERVICE LEVEL AGREEMENTS (SLAs) ────── */}
          <section className="terms-section">
            <h2>14. Service Level Agreements (SLAs)</h2>

            <h3>14.1 IT Services & Managed Services SLAs</h3>
            <ul>
              <li><strong>Platinum Tier:</strong> 99.9% uptime, 1-hour response, 4-hour resolution, 24/7 support</li>
              <li><strong>Gold Tier:</strong> 99.5% uptime, 2-hour response, 8-hour resolution, business hours support</li>
              <li><strong>Silver Tier:</strong> 95% uptime, 24-hour response, best-effort resolution, ticket-based support</li>
            </ul>

            <h3>14.2 Measured Uptime</h3>
            <p>
              Uptime calculated as percentage of time services available during billing month (measured from KesariX infrastructure). Excludes planned maintenance windows (2 hours/month) and Force Majeure events.
            </p>

            <h3>14.3 SLA Remedies</h3>
            <ul>
              <li><strong>First Month:</strong> 99.5%-99.9% uptime = 5% service credit</li>
              <li><strong>First Month:</strong> Below 95% uptime = 10% service credit</li>
              <li><strong>Cumulative:</strong> Maximum 20% credit per billing cycle</li>
              <li><strong>Application:</strong> Credit automatically applied to next month's invoice or refunded if contract terminates</li>
            </ul>

            <h3>14.4 SLA Exclusions</h3>
            <p>
              SLA does not apply to:
            </p>
            <ul>
              <li>Planned maintenance (2-4 hours/month, 14 days notice)</li>
              <li>Force Majeure events</li>
              <li>Client-caused failures (misconfiguration, security breach, DDoS attacks)</li>
              <li>Third-party service outages (AWS, Cloudflare, database providers)</li>
              <li>Networks outside KesariX control</li>
            </ul>

            <h3>14.5 SLA is Sole Remedy</h3>
            <p>
              SLA credits are Client's exclusive remedy for service unavailability. SLA does not guarantee any uptime or performance level.
            </p>
          </section>

          {/* ────── 15. ACCEPTABLE USE POLICY ────── */}
          <section className="terms-section">
            <h2>15. Acceptable Use Policy</h2>

            <h3>15.1 Prohibited Activities</h3>
            <p>
              Client shall NOT use Services to:
            </p>
            <ul>
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Engage in fraud, phishing, spam, or deceptive practices</li>
              <li>Deploy malware, viruses, ransomware, or other malicious code</li>
              <li>Attempt unauthorized access, hacking, or system intrusion</li>
              <li>Engage in harassment, abuse, or threatening behavior</li>
              <li>Send unsolicited commercial communications (spam)</li>
              <li>Bypass security controls or attempt privilege escalation</li>
              <li>Conduct denial-of-service (DoS) or distributed denial-of-service (DDoS) attacks</li>
              <li>Mine cryptocurrency or similar resource-intensive activities</li>
              <li>Infringe intellectual property or third-party rights</li>
              <li>Resell Services to third parties without authorization</li>
            </ul>

            <h3>15.2 Monitoring & Enforcement</h3>
            <p>
              KesariX monitors for compliance but is not obligated to pre-screen content. Upon discovery of violation, KesariX may:
            </p>
            <ul>
              <li>Issue written warning and demand immediate cessation</li>
              <li>Suspend services without liability</li>
              <li>Report violation to law enforcement</li>
              <li>Terminate agreement for material breach</li>
            </ul>

            <h3>15.3 Client Responsibility</h3>
            <p>
              Client responsible for monitoring and controlling use of Services. Client liable for all activities conducted through Client's account or authorization.
            </p>
          </section>

          {/* ────── 16. DATA COLLECTION & USE ────── */}
          <section className="terms-section">
            <h2>16. Data Collection & Use Limitations</h2>

            <h3>16.1 Use for Service Delivery Only</h3>
            <p>
              KesariX collects and processes data solely for:
            </p>
            <ul>
              <li>Providing requested Services</li>
              <li>Support, maintenance, and technical assistance</li>
              <li>Billing and invoicing</li>
              <li>Compliance with legal obligations</li>
              <li>Security and fraud prevention</li>
            </ul>

            <h3>16.2 No Data Sale</h3>
            <p>
              <strong>KesariX does NOT sell, rent, trade, or share Client data with third parties for marketing purposes.</strong> This applies globally, including CCPA/DPDPA compliance.
            </p>

            <h3>16.3 Analytics & Monitoring</h3>
            <ul>
              <li>Google Analytics, Mixpanel used for website analytics only (see Privacy Policy)</li>
              <li>System logs retained 90 days for security; security incidents 1 year</li>
              <li>Performance metrics collected for SLA reporting</li>
            </ul>

            <h3>16.4 Cookies & Tracking</h3>
            <p>
              See Privacy Policy for details on cookies, tracking technologies, and opt-out mechanisms.
            </p>
          </section>

          {/* ────── 17. THIRD-PARTY SERVICES & APIs ────── */}
          <section className="terms-section">
            <h2>17. Third-Party Services & APIs</h2>

            <h3>17.1 Integrated Services</h3>
            <ul>
              <li><strong>Cloud Infrastructure:</strong> AWS, Google Cloud, Microsoft Azure may be integrated per SOW</li>
              <li><strong>Payment Processors:</strong> Stripe, Razorpay, PayPal for payment processing</li>
              <li><strong>Communication:</strong> SendGrid, Twilio, Firebase for notifications</li>
              <li><strong>Analytics:</strong> Google Analytics, Mixpanel, Hotjar for performance tracking</li>
              <li><strong>APIs & Integrations:</strong> Third-party APIs per Client specifications</li>
            </ul>

            <h3>17.2 Client Responsibility</h3>
            <ul>
              <li>Client responsible for third-party service terms, licenses, and compliance</li>
              <li>Client assumes risk of third-party outages, data loss, or service changes</li>
              <li>KesariX not liable for third-party failures or unavailability</li>
            </ul>

            <h3>17.3 API Availability</h3>
            <ul>
              <li>Third-party APIs used "as-is" with no uptime guarantee</li>
              <li>If third-party API becomes unavailable, KesariX may substitute with similar alternative</li>
              <li>Client may request alternate service; additional costs may apply</li>
            </ul>

            <h3>17.4 External Links</h3>
            <p>
              KesariX website contains links to external websites. KesariX not responsible for external content, privacy practices, or policies of third-party sites.
            </p>
          </section>

          {/* ────── 18. FORCE MAJEURE ────── */}
          <section className="terms-section">
            <h2>18. Force Majeure</h2>

            <h3>18.1 Definition</h3>
            <p>
              Force Majeure means unforeseeable events beyond reasonable parties' control, including: natural disasters, pandemics, wars, terrorism, government action, strikes, power outages, or internet backbone failures.
            </p>

            <h3>18.2 Suspension of Obligations</h3>
            <p>
              Upon Force Majeure event, affected party's performance obligations suspended for duration of event. Affected party shall:
            </p>
            <ul>
              <li>Notify other party within 24 hours of discovery</li>
              <li>Describe event, expected duration, and mitigation efforts</li>
              <li>Use reasonable efforts to mitigate impact and resume performance</li>
            </ul>

            <h3>18.3 Duration Limits</h3>
            <ul>
              <li>If Force Majeure continues &gt;30 days, either party may terminate without liability</li>
              <li>Termination effective upon written notice</li>
              <li>Client pays for Services already rendered; no refund for unrendered services</li>
            </ul>

            <h3>18.4 Not Force Majeure</h3>
            <p>
              The following do NOT constitute Force Majeure:
            </p>
            <ul>
              <li>Economic downturns or market conditions</li>
              <li>Increase in costs or scarcity of labor/materials</li>
              <li>Failure of third-party service providers (unless directly caused by Force Majeure)</li>
              <li>Contractor's inability to secure personnel or resources</li>
            </ul>
          </section>

          {/* ────── 19. DISPUTE RESOLUTION & GOVERNING LAW ────── */}
          <section className="terms-section">
            <h2>19. Dispute Resolution & Governing Law</h2>

            <h3>19.1 Governing Law</h3>
            <ul>
              <li><strong>Jurisdiction:</strong> This Agreement governed by laws of <strong>India</strong> (specifically applicable state/UT)</li>
              <li><strong>For EU/UK Clients:</strong> GDPR and Data Protection Act 2018 apply to personal data processing</li>
              <li><strong>For US Clients:</strong> CCPA applies to California residents; applicable state laws to other US clients</li>
              <li><strong>For Canadian Clients:</strong> PIPEDA applies to personal data; applicable provincial laws for other matters</li>
            </ul>

            <h3>19.2 Dispute Resolution—Escalation Steps</h3>
            <p><strong>Step 1: Negotiation (30 days)</strong></p>
            <ul>
              <li>Dispute raised in writing to legal@kesarix.com with detailed description</li>
              <li>Executive-level representatives meet (in-person or video) within 10 days</li>
              <li>Parties negotiate in good faith to reach resolution</li>
            </ul>

            <p><strong>Step 2: Mediation (30-60 days)</strong></p>
            <ul>
              <li>If negotiation unsuccessful, parties submit to non-binding mediation</li>
              <li>Neutral mediator appointed by mutual agreement or ICCR</li>
              <li>Mediation session held within 20 days</li>
              <li>Costs split equally between parties</li>
            </ul>

            <p><strong>Step 3: Arbitration (Final & Binding)</strong></p>
            <ul>
              <li><strong>Seat of Arbitration:</strong> New Delhi, India (for international clients, parties may mutually agree alternative seat)</li>
              <li><strong>Rules:</strong> International Chamber of Commerce (ICC) Arbitration Rules (current version)</li>
              <li><strong>Tribunal:</strong> Single arbitrator for claims under ₹50 lakhs; three arbitrators for larger claims</li>
              <li><strong>Language:</strong> English</li>
              <li><strong>Timeline:</strong> Award issued within 12 months of request</li>
              <li><strong>Costs:</strong> Prevailing party recovers reasonable costs from losing party</li>
              <li><strong>Appeal:</strong> Limited appeal rights per ICC rules; arbitration award final and binding</li>
            </ul>

            <h3>19.3 Waiver of Jury Trial & Right to Sue</h3>
            <p>
              <strong>EACH PARTY WAIVES RIGHT TO JURY TRIAL AND RIGHT TO SUE IN COURT.</strong> Disputes resolved exclusively through arbitration above, except:
            </p>
            <ul>
              <li>Either party may seek injunctive relief in court for breach of confidentiality or IP infringement</li>
              <li>Either party may enforce arbitration award in court</li>
            </ul>

            <h3>19.4 Class Action Waiver</h3>
            <p>
              <strong>DISPUTES RESOLVED ON INDIVIDUAL BASIS ONLY.</strong> Class actions, consolidated proceedings, or representative actions not permitted.
            </p>

            <h3>19.5 GDPR/CCPA Dispute Handling</h3>
            <ul>
              <li><strong>GDPR:</strong> Data subject may file complaint with applicable Data Protection Authority; arbitration does not prevent regulatory recourse</li>
              <li><strong>CCPA:</strong> Consumer may file complaint with California Attorney General; arbitration does not prevent regulatory action</li>
            </ul>

            <h3>19.6 Injunctive Relief</h3>
            <p>
              Either party may seek temporary restraining order or injunctive relief in court if necessary to prevent irreparable harm from breach of confidentiality, IP infringement, or misuse of data.
            </p>
          </section>

          {/* ────── 20. EXPORT COMPLIANCE ────── */}
          <section className="terms-section">
            <h2>20. Export Compliance</h2>

            <h3>20.1 Export Control Regulations</h3>
            <p>
              Client shall comply with all export control laws and regulations, including:
            </p>
            <ul>
              <li>US Export Administration Regulations (EAR)</li>
              <li>International Traffic in Arms Regulations (ITAR)</li>
              <li>EU export controls and sanctions</li>
              <li>Countries with restricted access policies</li>
            </ul>

            <h3>20.2 Restricted Countries</h3>
            <p>
              Services not available to or for use in: Iran, North Korea, Syria, Cuba, or individuals/entities on OFAC sanctions lists.
            </p>

            <h3>20.3 Technology Transfer</h3>
            <p>
              KesariX may restrict technology transfer or access to certain features for non-US persons or entities.
            </p>

            <h3>20.4 Client Responsibility</h3>
            <p>
              Client responsible for compliance with export regulations in its jurisdiction. Client shall not re-export Services, technical data, or related information in violation of export control laws.
            </p>
          </section>

          {/* ────── 21. ANTI-CORRUPTION & COMPLIANCE ────── */}
          <section className="terms-section">
            <h2>21. Anti-Corruption & Legal Compliance</h2>

            <h3>21.1 Anti-Bribery & Corruption</h3>
            <p>
              Both parties comply with anti-bribery and anti-corruption laws:
            </p>
            <ul>
              <li>US Foreign Corrupt Practices Act (FCPA)</li>
              <li>UK Bribery Act 2010</li>
              <li>Indian Prevention of Corruption Act</li>
              <li>Any applicable local anti-corruption laws</li>
            </ul>

            <h3>21.2 Sanctions & Embargoes</h3>
            <p>
              Client shall not knowingly engage KesariX to provide Services to sanctioned persons, entities, or countries.
            </p>

            <h3>21.3 Human Rights & Labor Laws</h3>
            <p>
              KesariX commits to ethical labor practices, no child labor, no forced labor, and respect for human rights in all operations.
            </p>

            <h3>21.4 Environmental Compliance</h3>
            <p>
              Services delivered in compliance with applicable environmental laws and regulations in jurisdiction of delivery.
            </p>
          </section>

          {/* ────── 22. ENTIRE AGREEMENT & SEVERABILITY ────── */}
          <section className="terms-section">
            <h2>22. Entire Agreement & Severability</h2>

            <h3>22.1 Integration Clause</h3>
            <p>
              <strong>This Agreement, including attached SOW, SLA, and DPA, constitutes the entire agreement between parties and supersedes all prior negotiations, understandings, and agreements, whether written or oral.</strong> No prior representations, warranties, or understandings binding unless expressly incorporated herein.
            </p>

            <h3>22.2 Order of Precedence</h3>
            <p>
              In case of conflict, documents apply in this order of precedence:
            </p>
            <ol>
              <li>Statement of Work (SOW) or individual project contract</li>
              <li>Service Level Agreement (SLA) if applicable</li>
              <li>Data Processing Agreement (DPA) for GDPR/privacy matters</li>
              <li>These Terms of Service</li>
            </ol>

            <h3>22.3 Severability</h3>
            <p>
              If any provision held invalid or unenforceable, that provision severed; remaining provisions continue in full force. If severance would frustrate intent, parties shall renegotiate to achieve original intent.
            </p>

            <h3>22.4 Amendment Procedures</h3>
            <p>
              No amendment to this Agreement valid unless in writing and signed by authorized representatives of both parties.
            </p>

            <h3>22.5 No Waiver</h3>
            <p>
              Failure or delay in exercising any right or remedy does not constitute waiver. Waiver of any breach does not waive subsequent breaches.
            </p>

            <h3>22.6 No Partnership, Agency, or Joint Venture</h3>
            <p>
              Nothing in these Terms creates partnership, joint venture, agency, or employment relationship. Each party independent entity responsible for own obligations.
            </p>
          </section>

          {/* ────── 23. MISCELLANEOUS PROVISIONS ────── */}
          <section className="terms-section">
            <h2>23. Miscellaneous Provisions</h2>

            <h3>23.1 Notice Procedures</h3>
            <p>
              All notices must be sent to:
            </p>
            <ul>
              <li><strong>To KesariX Technology:</strong><br />
                Legal Department<br />
                KesariX Technology<br />
                Email: legal@kesarix.com<br />
                Address: [Insert registered office address]
              </li>
              <li><strong>To Client:</strong><br />
                To email address provided in SOW or account registration
              </li>
            </ul>
            <p>
              Notices effective upon receipt (email confirmed via read receipt or bounce notification).
            </p>

            <h3>23.2 Assignment & Delegation</h3>
            <ul>
              <li><strong>KesariX:</strong> May assign or delegate obligations to subcontractors; Client must approve subcontractors (approval not unreasonably withheld); KesariX remains liable</li>
              <li><strong>Client:</strong> May not assign or delegate without KesariX's prior written consent; attempted assignment void</li>
              <li><strong>Exception:</strong> Either party may assign to affiliate, successor company, or acquirer with notice</li>
            </ul>

            <h3>23.3 Counterparts & Electronic Signatures</h3>
            <p>
              Agreement may be executed in counterparts (including electronically/digitally). Electronic signatures (DocuSign, Adobe Sign, etc.) have same legal effect as original signatures.
            </p>

            <h3>23.4 Time of Essence</h3>
            <p>
              Time is of the essence in performance of obligations under these Terms. Parties shall perform within specified timeframes.
            </p>

            <h3>23.5 Equitable Relief</h3>
            <p>
              In addition to remedies at law, either party entitled to seek equitable relief (injunctive relief, specific performance) without posting bond.
            </p>

            <h3>23.6 Survival</h3>
            <p>
              The following provisions survive termination or expiration:
            </p>
            <ul>
              <li>Section 5 - Intellectual Property Rights</li>
              <li>Section 7 - Confidentiality (3 years post-termination)</li>
              <li>Section 8 - Data Protection</li>
              <li>Section 10 - Warranties & Disclaimers</li>
              <li>Section 11 - Limitation of Liability</li>
              <li>Section 12 - Indemnification</li>
              <li>Section 19 - Dispute Resolution & Governing Law</li>
              <li>Section 23 - Miscellaneous (all subsections)</li>
              <li>Section 24 - Service-Specific Addenda (applicable terms)</li>
            </ul>

            <h3>23.7 Entire Understanding</h3>
            <p>
              These Terms, together with SOW, SLA, and DPA, constitute entire understanding and agreement. Any claim not raised within 6 months of discovery deemed waived.
            </p>
          </section>

          {/* ────── 24. SERVICE-SPECIFIC ADDENDA ────── */}
          <section className="terms-section">
            <h2>24. Service-Specific Addenda & Schedules</h2>

            <h3>24.1 Incorporated Documents</h3>
            <p>
              The following documents are incorporated by reference and form part of this Agreement:
            </p>
            <ul>
              <li><strong>Statement of Work (SOW):</strong> Project-specific scope, deliverables, timeline, payment terms</li>
              <li><strong>Service Level Agreement (SLA):</strong> Specific uptime, response times, resolution times, support tiers</li>
              <li><strong>Data Processing Agreement (DPA):</strong> For GDPR/DPDPA compliance; includes Standard Contractual Clauses (SCCs) if applicable</li>
              <li><strong>Acceptable Use Policy (AUP):</strong> Detailed prohibited uses and monitoring procedures</li>
              <li><strong>Security & Compliance Addendum:</strong> Specific security requirements, audit rights, certifications</li>
              <li><strong>API Integration Schedule:</strong> Third-party APIs integrated, terms, support level</li>
            </ul>

            <h3>24.2 SOW Precedence</h3>
            <p>
              In case of conflict, SOW takes precedence over general Terms for specific project matters (scope, deliverables, timeline, pricing).
            </p>

            <h3>24.3 Service-Specific Terms</h3>
            <ul>
              <li><strong>Web Development:</strong> Section 4.1 applies; performance standards per Lighthouse metrics</li>
              <li><strong>AI Solutions:</strong> Section 4.2 applies; model performance metrics specified in SOW; no accuracy guarantee</li>
              <li><strong>IT Services:</strong> Section 4.3 applies; SLA Tier specified in contract; incident classification per Section 14</li>
              <li><strong>Managed Services:</strong> Section 4.4 applies; monthly hours/credits defined in MSA</li>
            </ul>

            <h3>24.4 Process Documents</h3>
            <ul>
              <li><strong>Change Request Procedures:</strong> Out-of-scope requests submitted via change order form; pricing tier defined</li>
              <li><strong>Support Ticket Procedures:</strong> For managed services, tickets submitted via support portal; SLA response times apply</li>
              <li><strong>Escalation Procedures:</strong> P1 incidents escalate to senior engineers within 1 hour; P2-P4 per SLA tier</li>
              <li><strong>Incident Response:</strong> Security incidents reported within 1 hour; root cause analysis within 48 hours</li>
            </ul>

            <h3>24.5 Custom Amendments</h3>
            <p>
              For enterprise clients, custom amendments addressing specific requirements may be negotiated and executed as formal amendment to main Agreement. Amendment takes precedence for covered matters.
            </p>

            <h3>24.6 Schedule References</h3>
            <p>
              Any schedules, exhibits, or appendices referenced in this Agreement or SOW are incorporated by reference and form integral part of Agreement.
            </p>
          </section>

          {/* ────── SIGNATURE SECTION ────── */}
          <section className="terms-section terms-final">
            <h2>Acceptance & Signature</h2>
            <p>
              By accessing our Services, processing a payment, clicking "I Accept", or executing a Statement of Work, you
              acknowledge that you have read, understood, and agree to be bound by all terms and conditions in this Agreement.
            </p>
            <p style={{ marginTop: '2rem', fontWeight: 'bold' }}>
              KesariX Technology<br />
              www.kesarix.com<br />
              legal@kesarix.com<br />
              dpo@kesarix.com
            </p>
            <p style={{ opacity: 0.7, marginTop: '2rem' }}>
              <strong>Effective Date:</strong> April 15, 2026 | <strong>Version:</strong> 2.0 | <strong>Status:</strong> Active & Enforceable<br />
              Last Updated: April 15, 2026 | Jurisdiction: India with Global Applicability
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  )
}
