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
          <div className="legal-updated">Last Updated: April 15, 2026 | Version 2.0</div>
        </div>

        <div className="legal-content">
          {/* ────── INTRODUCTION ────── */}
          <section className="privacy-section">
            <h2>Introduction</h2>
            <p>
              At <strong>KesariX Technology</strong> ("we," "our," "us," or "Company"), we are committed to protecting your privacy and ensuring transparency in how we handle your personal data. This comprehensive Privacy Policy explains how we collect, use, process, disclose, and safeguard your information when you visit our website (www.kesarix.com), engage with our services, or interact with our digital platforms.
            </p>
            <p>
              This policy applies across all jurisdictions where we operate, including but not limited to India, European Union, United States, United Kingdom, Canada, and other territories. We comply with applicable data protection laws including the <strong>Information Technology Act, 2000 (ITA)</strong>, <strong>Digital Personal Data Protection Act, 2023 (DPDPA)</strong>, <strong>General Data Protection Regulation (GDPR)</strong>, <strong>California Consumer Privacy Act (CCPA)</strong>, and other local privacy regulations.
            </p>
            <p>Please read this policy carefully. By accessing or using KesariX Technology services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.</p>
          </section>

          {/* ────── 1. INFORMATION WE COLLECT ────── */}
          <section className="privacy-section">
            <h2>1. Information We Collect</h2>
            <p>We collect information in multiple ways depending on how you interact with our services:</p>

            <h3>1.1 Information You Provide Directly</h3>
            <ul>
              <li><strong>Account Registration:</strong> Name, email address, phone number, company name, job title, business address, and authentication credentials</li>
              <li><strong>Contact Forms & Inquiries:</strong> Messages, project descriptions, service requirements, and communication preferences</li>
              <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely through third-party payment gateways)</li>
              <li><strong>Client Projects:</strong> Project-specific data, requirements, documents, and content provided for web development, AI implementation, and IT services</li>
              <li><strong>AI Model Training:</strong> Data specifically provided for training autonomous agents and AI systems (processed under separate Data Processing Agreements)</li>
              <li><strong>Support & Communication:</strong> Customer support tickets, feedback, testimonials, and communication records</li>
              <li><strong>Survey & Research Data:</strong> Responses to forms, questionnaires, and market research initiatives</li>
            </ul>

            <h3>1.2 Information Collected Automatically</h3>
            <ul>
              <li><strong>Technical Data:</strong> IP address, device type, browser type, operating system, device identifiers, and hardware model</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, referral sources, and interaction patterns</li>
              <li><strong>Cookies & Similar Technologies:</strong> Session identifiers, performance cookies, preference cookies, and tracking pixels</li>
              <li><strong>Location Data:</strong> Approximate geographic location (country/region level) inferred from IP address</li>
              <li><strong>Analytics Data:</strong> User journey analytics, conversion tracking, performance metrics, and aggregated usage statistics</li>
              <li><strong>Security Data:</strong> Login attempts, failed authentication trials, and suspicious activity logs</li>
            </ul>

            <h3>1.3 Information from Third Parties</h3>
            <ul>
              <li><strong>Service Providers:</strong> Data from payment processors, cloud infrastructure providers, and communication platforms</li>
              <li><strong>Client Referrals:</strong> Information provided by existing clients when referring new business</li>
              <li><strong>Public Sources:</strong> Publicly available business information, company registrations, and industry databases</li>
              <li><strong>Social Media:</strong> Information from social media platforms when you interact with our accounts or use social login</li>
              <li><strong>Third-Party Integrations:</strong> Data from connected applications, CRM systems, and enterprise platforms</li>
            </ul>

            <h3>1.4 Special Categories of Data</h3>
            <ul>
              <li><strong>Sensitive Personal Data (India DPDPA):</strong> We minimize collection of sensitive data. When necessary, we obtain explicit consent and implement enhanced security measures.</li>
              <li><strong>Financial Data:</strong> Bank account information, transaction history, and financial records are encrypted and processed only through secure payment gateways</li>
              <li><strong>Biometric Data:</strong> Not intentionally collected unless explicitly agreed upon for security purposes</li>
            </ul>
          </section>

          {/* ────── 2. LEGAL BASIS FOR PROCESSING ────── */}
          <section className="privacy-section">
            <h2>2. Legal Basis for Processing</h2>
            <p>We process personal data based on the following legal grounds:</p>

            <h3>2.1 India (DPDPA & ITA)</h3>
            <ul>
              <li><strong>Consent:</strong> Explicit consent obtained for processing personal data</li>
              <li><strong>Contract Performance:</strong> To fulfill service agreements and deliver web development, AI solutions, and IT services</li>
              <li><strong>Legal Obligation:</strong> Compliance with Income Tax Act, GST Act, and other statutory requirements</li>
              <li><strong>Vital Interests:</strong> Security and fraud prevention</li>
            </ul>

            <h3>2.2 European Union (GDPR)</h3>
            <ul>
              <li><strong>Consent:</strong> Explicit opt-in consent for marketing communications and optional services</li>
              <li><strong>Contract Necessity:</strong> Processing necessary for contract performance</li>
              <li><strong>Legal Obligation:</strong> Compliance with EU regulations and local laws</li>
              <li><strong>Legitimate Interests:</strong> Security, fraud detection, and service improvement</li>
              <li><strong>Data Subject Consent:</strong> All processing activities documented with clear consent records</li>
            </ul>

            <h3>2.3 United States (CCPA & State Laws)</h3>
            <ul>
              <li><strong>Service Provision:</strong> Necessary to provide requested services</li>
              <li><strong>Consumer Preference:</strong> Honoring do-not-sell and opt-out preferences</li>
              <li><strong>Business Operations:</strong> Internal analytics and service improvement</li>
            </ul>
          </section>

          {/* ────── 3. USE OF YOUR INFORMATION ────── */}
          <section className="privacy-section">
            <h2>3. Use of Your Information</h2>
            <p>We use collected information for the following purposes:</p>

            <h3>3.1 Service Delivery</h3>
            <ul>
              <li>Providing web development, AI solutions, and IT management services</li>
              <li>Creating and maintaining enterprise accounts</li>
              <li>Processing transactions and managing payments</li>
              <li>Delivering technical support and customer service</li>
              <li>Fulfilling contractual obligations and project requirements</li>
            </ul>

            <h3>3.2 AI Model Development & Training</h3>
            <ul>
              <li><strong>Model Improvement:</strong> Training autonomous agents and AI systems using anonymized project data</li>
              <li><strong>Performance Optimization:</strong> Enhancing algorithm accuracy and system reliability</li>
              <li><strong>Research & Development:</strong> Advancing AI/ML capabilities within our organization</li>
              <li><strong>Note:</strong> Client data marked as confidential is never used for training without explicit written consent</li>
            </ul>

            <h3>3.3 Communication & Marketing</h3>
            <ul>
              <li>Sending service announcements and updates</li>
              <li>Delivering newsletters and promotional content (only with opt-in consent)</li>
              <li>Responding to inquiries and customer support requests</li>
              <li>Conducting surveys and gathering feedback</li>
              <li>Event invitations and webinar registrations</li>
            </ul>

            <h3>3.4 Security & Compliance</h3>
            <ul>
              <li>Detecting and preventing fraud, abuse, and security threats</li>
              <li>Enforcing terms of service and legal agreements</li>
              <li>Responding to legal requests and regulatory investigations</li>
              <li>Maintaining system integrity and security logging</li>
              <li>Performing identity verification and authentication</li>
            </ul>

            <h3>3.5 Analytics & Business Intelligence</h3>
            <ul>
              <li>Compiling aggregated, non-identifiable statistical data</li>
              <li>Analyzing usage patterns and service performance</li>
              <li>Improving website functionality and user experience</li>
              <li>Measuring conversion rates and campaign effectiveness</li>
              <li>Generating business intelligence reports</li>
            </ul>

            <h3>3.6 Legal & Regulatory Compliance</h3>
            <ul>
              <li>Compliance with Indian tax and business regulations</li>
              <li>Fulfilling GDPR, CCPA, and other international data protection requirements</li>
              <li>Maintaining audit trails and regulatory documentation</li>
              <li>Responding to government requests and legal proceedings</li>
            </ul>
          </section>

          {/* ────── 4. DATA SHARING & THIRD PARTIES ────── */}
          <section className="privacy-section">
            <h2>4. Data Sharing & Third-Party Disclosure</h2>

            <h3>4.1 We Do NOT Sell Your Data</h3>
            <p>
              KesariX Technology <strong>does not sell, rent, trade, or lease</strong> personal data to third parties for marketing purposes. This applies globally, including CCPA compliance for California residents and DPDPA compliance for Indian citizens.
            </p>

            <h3>4.2 Services Providers & Sub-Processors</h3>
            <p>We share data with trusted service providers who assist in service delivery:</p>
            <ul>
              <li><strong>Cloud Infrastructure:</strong> AWS, Google Cloud, Azure (with data residency in geo-specific VPCs)</li>
              <li><strong>Payment Processing:</strong> Stripe, Razorpay, PayPal (PCI-DSS compliant)</li>
              <li><strong>Communication Platforms:</strong> SendGrid, Twilio, Microsoft Teams</li>
              <li><strong>Analytics Services:</strong> Google Analytics, Mixpanel, Hotjar</li>
              <li><strong>CRM Systems:</strong> Salesforce, HubSpot, Pipedrive</li>
              <li><strong>Collaboration Tools:</strong> Slack, Notion, GitHub</li>
              <li><strong>Security Services:</strong> Cloudflare, Okta, Auth0</li>
            </ul>
            <p>All sub-processors are contractually bound to maintain data confidentiality and comply with applicable privacy laws.</p>

            <h3>4.3 India-Specific Data Residency</h3>
            <ul>
              <li><strong>Sensitive Personal Data:</strong> Stored exclusively in India (as per DPDPA requirements)</li>
              <li><strong>Project Data:</strong> Maintained in secure VPCs tailored to client geography</li>
              <li><strong>Transactional Data:</strong> Primary copy retained in India; backups in secure geographically-distributed locations</li>
            </ul>

            <h3>4.4 International Data Transfers</h3>
            <ul>
              <li><strong>GDPR Compliance:</strong> Standard Contractual Clauses (SCCs) and Data Protection Agreements for EU data transfers</li>
              <li><strong>Adequacy Decisions:</strong> Compliance with countries having adequacy determinations</li>
              <li><strong>Your Consent:</strong> Explicit consent obtained before transferring data outside your country of origin</li>
            </ul>

            <h3>4.5 Legal Disclosure</h3>
            <p>We may disclose personal data when required by law or in response to:</p>
            <ul>
              <li>Court orders and legal proceedings</li>
              <li>Government investigations and regulatory requests</li>
              <li>Law enforcement agencies (with appropriate legal documentation)</li>
              <li>Compliance with statutory obligations</li>
            </ul>

            <h3>4.6 Business Transitions</h3>
            <p>In the event of merger, acquisition, bankruptcy, or asset sale, personal data may be transferred as part of the business transaction. You will be notified of any such change and any choices you have regarding your data.</p>
          </section>

          {/* ────── 5. DATA SECURITY & PROTECTION ────── */}
          <section className="privacy-section">
            <h2>5. Data Security & Protection Measures</h2>

            <h3>5.1 Security Infrastructure</h3>
            <ul>
              <li><strong>Zero-Trust Architecture:</strong> Multi-layer authentication, continuous verification, and least-privilege access controls</li>
              <li><strong>Encryption:</strong> 
                <ul>
                  <li>In-Transit: TLS 1.2+ for all communications</li>
                  <li>At-Rest: AES-256 encryption for sensitive data</li>
                  <li>Database Encryption: Industry-standard encryption for all data stores</li>
                </ul>
              </li>
              <li><strong>Network Security:</strong> Firewalls, intrusion detection systems, DDoS protection, and WAF implementations</li>
              <li><strong>Access Control:</strong> Role-based access control (RBAC) and multi-factor authentication (MFA) for employees</li>
            </ul>

            <h3>5.2 Physical Security</h3>
            <ul>
              <li>Secure data centers with biometric access controls</li>
              <li>Video surveillance and security monitoring</li>
              <li>Climate-controlled and redundant power systems</li>
              <li>Regular physical security audits</li>
            </ul>

            <h3>5.3 Operational Security</h3>
            <ul>
              <li><strong>Employee Training:</strong> Mandatory privacy and security training for all personnel</li>
              <li><strong>Background Checks:</strong> Comprehensive background verification for employees with data access</li>
              <li><strong>Data Minimization:</strong> Employees access only necessary data for their roles</li>
              <li><strong>Incident Response:</strong> 24/7 security monitoring with documented incident response procedures</li>
            </ul>

            <h3>5.4 Third-Party Security</h3>
            <ul>
              <li>Regular security audits of service providers</li>
              <li>SOC 2 Type II compliance verification</li>
              <li>ISO 27001 certifications</li>
              <li>HIPAA BAA agreements where applicable</li>
            </ul>

            <h3>5.5 Vulnerability Management</h3>
            <ul>
              <li>Continuous penetration testing and vulnerability assessments</li>
              <li>Regular security patching and updates</li>
              <li>Bug bounty program for responsible disclosure</li>
              <li>Security incident response within 48 hours</li>
            </ul>
          </section>

          {/* ────── 6. DATA RETENTION ────── */}
          <section className="privacy-section">
            <h2>6. Data Retention & Deletion</h2>

            <h3>6.1 Retention Periods</h3>
            <ul>
              <li><strong>Account Data:</strong> Retained for the duration of the business relationship + 3 years for regulatory compliance</li>
              <li><strong>Transaction Records:</strong> 7 years (as per Indian tax requirements)</li>
              <li><strong>Project Data:</strong> As specified in client contracts; typically 5-7 years</li>
              <li><strong>Marketing Data:</strong> 2 years or until you withdraw consent</li>
              <li><strong>Support Tickets:</strong> 2 years</li>
              <li><strong>Server & System Logs:</strong> 90 days for standard logs; 1 year for security incidents</li>
              <li><strong>Cookies:</strong> Session cookies expire on browser close; persistent cookies expire based on purpose (up to 24 months)</li>
              <li><strong>AI Training Data:</strong> Deleted within 30 days of project completion unless extended contract specifies otherwise</li>
            </ul>

            <h3>6.2 Data Deletion Process</h3>
            <ul>
              <li><strong>Secure Deletion:</strong> Using cryptographic erasure or cryptographic shredding methods</li>
              <li><strong>Backup Retention:</strong> Deleted from active systems within 30 days; backup copies retained per compliance requirements</li>
              <li><strong>Third-Party Deletion:</strong> All service providers notified to delete data within 15 days</li>
              <li><strong>Exceptions:</strong> Data retained when legally required (taxation, litigation, regulatory compliance)</li>
            </ul>

            <h3>6.3 Right to Deletion (Right to be Forgotten)</h3>
            <ul>
              <li><strong>India (DPDPA):</strong> You can request deletion of personal data with limited exceptions</li>
              <li><strong>EU (GDPR):</strong> Right to erasure with specified exceptions</li>
              <li><strong>US (CCPA):</strong> Right to deletion of consumer personal information</li>
              <li>Requests processed within 30 days; we will inform you of any reasons for refusal</li>
            </ul>
          </section>

          {/* ────── 7. YOUR DATA RIGHTS & CHOICES ────── */}
          <section className="privacy-section">
            <h2>7. Your Data Rights & Choices</h2>

            <h3>7.1 India (Digital Personal Data Protection Act, 2023)</h3>
            <p>As a data subject in India, you have the following rights:</p>
            <ul>
              <li><strong>Right to Access:</strong> Request a copy of personal data we hold about you</li>
              <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Right to Deletion:</strong> Request deletion of personal data with specified exceptions</li>
              <li><strong>Right to Data Portability:</strong> Obtain data in portable, machine-readable format</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
              <li><strong>Right to Object:</strong> Object to automated decision-making and profiling</li>
            </ul>
            <p>To exercise these rights, contact our Data Protection Officer: <strong>dpo@kesarix.com</strong></p>

            <h3>7.2 European Union (GDPR)</h3>
            <ul>
              <li><strong>Right of Access:</strong> Obtain confirmation of processing and access to data</li>
              <li><strong>Right to Rectification:</strong> Correct inaccurate personal data</li>
              <li><strong>Right to Erasure:</strong> Request deletion ("right to be forgotten")</li>
              <li><strong>Right to Restrict:</strong> Request restriction of processing</li>
              <li><strong>Right to Data Portability:</strong> Receive data in structured, interoperable format</li>
              <li><strong>Right to Object:</strong> Object to processing for direct marketing</li>
              <li><strong>Rights Related to Automation:</strong> Not be subject to automated decisions with legal significance without human review</li>
            </ul>
            <p>To exercise these rights: <strong>privacy@kesarix.com</strong> | Response within 30 days</p>

            <h3>7.3 United States (CCPA & State Laws)</h3>
            <ul>
              <li><strong>Right to Know:</strong> Request what personal information is collected, used, and shared</li>
              <li><strong>Right to Delete:</strong> Request deletion of personal data collected from consumers</li>
              <li><strong>Right to Opt-Out:</strong> Opt-out of sale or sharing of personal information</li>
              <li><strong>Right to Correct:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to Limit:</strong> Limit use and disclosure of sensitive personal information</li>
              <li><strong>Right to Non-Discrimination:</strong> No discrimination for exercising privacy rights</li>
            </ul>
            <p>To exercise these rights: <strong>privacy@kesarix.com</strong> | Response within 45 days</p>

            <h3>7.4 Canada (PIPEDA)</h3>
            <ul>
              <li><strong>Right to Access:</strong> Request and obtain personal information held</li>
              <li><strong>Right to Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to Opt-Out:</strong> Decline permission for use or disclosure</li>
            </ul>

            <h3>7.5 United Kingdom (UK GDPR & Data Protection Act 2018)</h3>
            <ul>
              <li>Similar rights as GDPR with UK-specific provisions</li>
              <li>Contact: <strong>privacy@kesarix.com</strong></li>
            </ul>

            <h3>7.6 How to Exercise Your Rights</h3>
            <p>To exercise any of the above rights, submit a written request including:</p>
            <ul>
              <li>Your full name and email address</li>
              <li>Clear description of your request</li>
              <li>Proof of identity (government-issued ID or recent utility bill)</li>
              <li>Specific timeframe if requesting data from a certain period</li>
            </ul>
            <p>Send requests to: <strong>privacy@kesarix.com</strong> or <strong>dpo@kesarix.com</strong></p>
          </section>

          {/* ────── 8. COOKIES & TRACKING TECHNOLOGIES ────── */}
          <section className="privacy-section">
            <h2>8. Cookies & Tracking Technologies</h2>

            <h3>8.1 What Are Cookies?</h3>
            <p>Cookies are small data files stored on your device by your web browser. We use cookies to enhance your browsing experience, remember preferences, and analyze website usage.</p>

            <h3>8.2 Types of Cookies We Use</h3>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for website functionality, authentication, and security (no consent required)</li>
              <li><strong>Performance Cookies:</strong> Measure website performance and user behavior (requires consent)</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and choices (requires consent)</li>
              <li><strong>Marketing Cookies:</strong> Track user interests for targeted advertising (requires explicit consent)</li>
            </ul>

            <h3>8.3 Other Tracking Technologies</h3>
            <ul>
              <li><strong>Web Beacons:</strong> Transparent GIF pixels for tracking email opens and page visits</li>
              <li><strong>Pixel Tags:</strong> Used in analytics and conversion tracking</li>
              <li><strong>Local Storage:</strong> Persistent client-side storage for preferences and session data</li>
              <li><strong>Analytics Tags:</strong> Google Analytics, Mixpanel, and similar tools</li>
            </ul>

            <h3>8.4 Third-Party Cookies</h3>
            <ul>
              <li>Analytics: Google Analytics, Hotjar</li>
              <li>Marketing: Meta Pixel, LinkedIn Insight, Google Ads</li>
              <li>Customer Support: Intercom, Zendesk</li>
            </ul>

            <h3>8.5 Cookie Management</h3>
            <ul>
              <li><strong>Browser Settings:</strong> You can control cookies through browser settings</li>
              <li><strong>Cookie Consent Banner:</strong> Accept/reject non-essential cookies on first visit</li>
              <li><strong>Opt-Out Links:</strong> Third-party cookies can be disabled through provider opt-out pages</li>
              <li><strong>Do Not Track:</strong> We respect browser "Do Not Track" signals where applicable</li>
            </ul>

            <h3>8.6 India-Specific: IAMAI Guidelines</h3>
            <p>We comply with Internet and Mobile Association of India (IAMAI) guidelines for cookie consent and transparency in digital advertising.</p>
          </section>

          {/* ────── 9. CHILDREN'S PRIVACY ────── */}
          <section className="privacy-section">
            <h2>9. Children's Privacy</h2>
            <p>KesariX Technology services are not intended for children under the age of 18 years (or the age of majority in your jurisdiction). We do not knowingly collect personal data from children.</p>
            <ul>
              <li><strong>No Intentional Collection:</strong> We do not solicit or knowingly collect information from anyone under 18</li>
              <li><strong>Parental Safeguards:</strong> If we discover data from a child, we delete it immediately</li>
              <li><strong>Parent/Guardian Rights:</strong> Parents/guardians can request information about their child's data or request deletion</li>
              <li><strong>Educational Use:</strong> For educational projects involving minors, explicit parental consent is required</li>
            </ul>
            <p>If you believe we have collected data from a minor, contact: <strong>legal@kesarix.com</strong></p>
          </section>

          {/* ────── 10. AUTOMATED DECISION-MAKING & PROFILING ────── */}
          <section className="privacy-section">
            <h2>10. Automated Decision-Making & AI Processing</h2>

            <h3>10.1 Automated Systems</h3>
            <p>We use automated systems and AI for:</p>
            <ul>
              <li>Fraud detection and prevention</li>
              <li>Customer segmentation and personalization</li>
              <li>Chatbot interactions and support automation</li>
              <li>Service recommendation algorithms</li>
              <li>Spam detection and security filtering</li>
            </ul>

            <h3>10.2 Profiling & Automated Decisions</h3>
            <ul>
              <li><strong>GDPR Compliance:</strong> You have the right not to be subject to automated decisions with legal effects</li>
              <li><strong>Human Review:</strong> High-stakes decisions involving credit, employment, or legal implications include human review</li>
              <li><strong>Transparency:</strong> You will be informed when automated decision-making is used</li>
              <li><strong>Appeal Process:</strong> You can request manual reconsideration of automated decisions</li>
            </ul>

            <h3>10.3 AI Model Processing</h3>
            <ul>
              <li><strong>Data Use:</strong> Project data used only for agreed-upon AI modeling</li>
              <li><strong>Anonymization:</strong> Personal identifiers removed before model training</li>
              <li><strong>Access Control:</strong> Autonomous agent training data segregated from other systems</li>
            </ul>
          </section>

          {/* ────── 11. MARKETING & COMMUNICATIONS ────── */}
          <section className="privacy-section">
            <h2>11. Marketing Communications & Preferences</h2>

            <h3>11.1 Opt-In & Opt-Out</h3>
            <ul>
              <li><strong>Email Marketing:</strong> Only sent to those who have opted in or have existing business relationships</li>
              <li><strong>SMS Marketing:</strong> Only with explicit written consent</li>
              <li><strong>Push Notifications:</strong> Opt-in required; can be disabled in app settings</li>
              <li><strong>Unsubscribe Option:</strong> Every marketing email includes unsubscribe link</li>
            </ul>

            <h3>11.2 Marketing Compliance</h3>
            <ul>
              <li><strong>India (DPDPA):</strong> Compliance with Privacy Policy and consent management</li>
              <li><strong>India (Telecom Regulations):</strong> Do Not Call Registry and SMS regulations</li>
              <li><strong>Germany (UWG):</strong> Unfair Competition Act compliance for B2B communications</li>
              <li><strong>CAN-SPAM Act (USA):</strong> Clear identification, accurate subject lines, valid physical address</li>
              <li><strong>GDPR)</strong> Explicit consent for non-transactional marketing in EU</li>
            </ul>

            <h3>11.3 Communication Preferences</h3>
            <p>Manage your communication preferences by:</p>
            <ul>
              <li>Logging into your account and updating notification settings</li>
              <li>Clicking "Unsubscribe" in marketing emails</li>
              <li>Contacting privacy@kesarix.com with your preferences</li>
            </ul>
          </section>

          {/* ────── 12. THIRD-PARTY SERVICES & LINKS ────── */}
          <section className="privacy-section">
            <h2>12. Third-Party Services & External Links</h2>

            <h3>12.1 External Websites & Links</h3>
            <ul>
              <li>Our website contains links to external websites, social media, and third-party services</li>
              <li>We are not responsible for privacy practices of third-party sites</li>
              <li>Please review their privacy policies before sharing personal information</li>
              <li>We do not endorse or warrant any third-party services</li>
            </ul>

            <h3>12.2 Social Media Integration</h3>
            <ul>
              <li>We integrate with LinkedIn, Twitter, GitHub, and other platforms</li>
              <li>Social login features are optional; you can register without social connection</li>
              <li>Third-party platforms collect data according to their privacy policies</li>
              <li>We receive only basic profile information (email, name) unless you share more</li>
            </ul>

            <h3>12.3 Embedded Content</h3>
            <ul>
              <li>YouTube videos, Google Maps, and other embedded services may collect data</li>
              <li>These services operate under their own privacy policies</li>
              <li>Use incognito/private browsing to limit tracking</li>
            </ul>
          </section>

          {/* ────── 13. INTERNATIONAL DATA TRANSFERS ────── */}
          <section className="privacy-section">
            <h2>13. International Data Transfers & Cross-Border Flow</h2>

            <h3>13.1 GDPR Compliant Transfers</h3>
            <ul>
              <li><strong>Standard Contractual Clauses (SCCs):</strong> Used for transfers to countries without adequacy decisions</li>
              <li><strong>Adequacy Decisions:</strong> Recognized equivalency standards implemented</li>
              <li><strong>Derogations:</strong> Specific contractual safeguards for necessary transfers</li>
            </ul>

            <h3>13.2 India to Global Transfers</h3>
            <ul>
              <li><strong>Data Localization:</strong> Sensitive personal data remains in India</li>
              <li><strong>Cross-Border Exception:</strong> Non-sensitive data transferred under Data Processing Agreements</li>
              <li><strong>Compliance:</strong> All transfers comply with DPDPA 2023 requirements</li>
            </ul>

            <h3>13.3 Data Processing Agreements</h3>
            <ul>
              <li>Service providers sign Data Processing Agreements (DPA)</li>
              <li>Agreements specify permitted use, security obligations, and data deletion</li>
              <li>Sub-processors listed in DPA Annex; changes require 30-day notice</li>
            </ul>
          </section>

          {/* ────── 14. DATA BREACHES & INCIDENT RESPONSE ────── */}
          <section className="privacy-section">
            <h2>14. Data Breach Notification & Response</h2>

            <h3>14.1 Breach Detection & Investigation</h3>
            <ul>
              <li><strong>24/7 Monitoring:</strong> Continuous security monitoring for unauthorized access or breaches</li>
              <li><strong>Incident Response:</strong> Documented procedures triggered upon detection of potential breach</li>
              <li><strong>Forensic Analysis:</strong> Third-party forensics engaged to determine scope and impact</li>
            </ul>

            <h3>14.2 Notification Timeline</h3>
            <ul>
              <li><strong>GDPR (EU):</strong> Notify authorities within 72 hours; affected individuals without undue delay if high risk</li>
              <li><strong>DPDPA (India):</strong> Notify affected individuals and government without unreasonable delay</li>
              <li><strong>CCPA (USA):</strong> Notify consumers without unreasonable delay (typically 15-30 days)</li>
              <li><strong>India ITA 2000 Section 43A:</strong> Notify affected parties and CERT-IN without undue delay</li>
            </ul>

            <h3>14.3 Breach Communication</h3>
            <p>In case of a data breach affecting personal data, we will provide:</p>
            <ul>
              <li>Description of the breach and data affected</li>
              <li>Likely consequences for data subjects</li>
              <li>Security measures implemented in response</li>
              <li>Contact information for additional information</li>
              <li>Recommendations for individuals (monitoring, password reset, etc.)</li>
            </ul>

            <h3>14.4 Breach Responsibility</h3>
            <ul>
              <li>We maintain cyber liability insurance</li>
              <li>Affected individuals may have rights to compensation (varies by jurisdiction)</li>
              <li>GDPR: Right to compensation for material/non-material damages</li>
            </ul>
          </section>

          {/* ────── 15. ACCOUNTABILITY & GOVERNANCE ────── */}
          <section className="privacy-section">
            <h2>15. Accountability & Privacy Governance</h2>

            <h3>15.1 Data Protection Officer (DPO)</h3>
            <p>We have appointed a dedicated Data Protection Officer responsible for:</p>
            <ul>
              <li>Privacy policy development and implementation</li>
              <li>Staff training and compliance monitoring</li>
              <li>Data subject complaint handling</li>
              <li>Regulatory liaison and cooperation with authorities</li>
              <li>Data Protection Impact Assessments (DPIAs)</li>
            </ul>
            <p><strong>Contact:</strong> dpo@kesarix.com</p>

            <h3>15.2 Privacy Compliance Audits</h3>
            <ul>
              <li>Annual third-party privacy audits</li>
              <li>SOC 2 Type II assessments</li>
              <li>Regular Data Protection Impact Assessments (DPIA)</li>
              <li>Penetration testing and vulnerability assessments</li>
            </ul>

            <h3>15.3 Regulatory Cooperation</h3>
            <ul>
              <li>Full cooperation with regulatory authorities (GDPR, CCPA, DPDPA bodies)</li>
              <li>Response to data subject complaints within stipulated timeframes</li>
              <li>Transparent documentation of processing activities</li>
              <li>Record Retention: 5+ years of compliance documentation</li>
            </ul>

            <h3>15.4 Privacy by Design</h3>
            <ul>
              <li>Privacy considered at all stages of service development</li>
              <li>Data minimization: Collect only necessary information</li>
              <li>Purpose limitation: Use data only for stated purposes</li>
              <li>Storage limitation: Delete data when no longer needed</li>
            </ul>
          </section>

          {/* ────── 16. SPECIFIC USE CASES ────── */}
          <section className="privacy-section">
            <h2>16. Specific Service-Related Privacy Practices</h2>

            <h3>16.1 Web Development Services</h3>
            <ul>
              <li>Client project data (designs, specifications, content) treated as confidential</li>
              <li>Code repositories stored in secure, private infrastructure</li>
              <li>Data protected under separate Service Agreements and NDAs</li>
              <li>Portfolio usage: Explicit permission required before publishing project details</li>
            </ul>

            <h3>16.2 AI Solutions & Autonomous Agents</h3>
            <ul>
              <li>Training data segregated and encrypted</li>
              <li>Models never trained on confidential client data without consent</li>
              <li>Autonomous agent behaviour logs retained for debugging (30-90 days)</li>
              <li>Model outputs not retained after project completion unless agreed</li>
            </ul>

            <h3>16.3 IT Services & Infrastructure Management</h3>
            <ul>
              <li>System logs and security monitoring data retained for compliance</li>
              <li>Access audits for all admin activities</li>
              <li>Incident response coordination with client security teams</li>
              <li>Data deletion per contract terms and legal obligations</li>
            </ul>
          </section>

          {/* ────── 17. POLICY UPDATES & CHANGES ────── */}
          <section className="privacy-section">
            <h2>17. Policy Updates & Changes</h2>

            <h3>17.1 Policy Modification</h3>
            <ul>
              <li>This Privacy Policy may be updated periodically to reflect changes in legal requirements, technology, or business practices</li>
              <li>Material changes will be communicated via email or prominently displayed on the website</li>
              <li>Continued use of services constitutes acceptance of updated policy</li>
              <li>Your rights under the previous version will be preserved during transition period</li>
            </ul>

            <h3>17.2 Version History</h3>
            <ul>
              <li>Current Version: 2.0 (April 15, 2026)</li>
              <li>Previous versions available upon request</li>
              <li>Effective Date: Posted with "Last Updated" date</li>
            </ul>
          </section>

          {/* ────── 18. CONTACT & COMPLAINT RESOLUTION ────── */}
          <section className="privacy-section">
            <h2>18. Contact Us & File Complaints</h2>

            <h3>18.1 Privacy Inquiries</h3>
            <p>For privacy-related questions or to exercise your data rights:</p>
            <ul>
              <li><strong>Email:</strong> privacy@kesarix.com</li>
              <li><strong>Data Protection Officer:</strong> dpo@kesarix.com</li>
              <li><strong>Legal Team:</strong> legal@kesarix.com</li>
            </ul>

            <h3>18.2 Complaint Procedures</h3>
            <p><strong>Step 1: Initial Complaint</strong></p>
            <p>Submit your complaint with detailed information to: privacy@kesarix.com</p>
            <p><strong>Step 2: Acknowledgment</strong></p>
            <p>We acknowledge receipt within 7 days and assign a case reference number</p>
            <p><strong>Step 3: Investigation</strong></p>
            <p>Our DPO teams investigates and gathers necessary information (typically 15-30 days)</p>
            <p><strong>Step 4: Resolution</strong></p>
            <p>We provide detailed response outlining findings and remedial actions</p>
            <p><strong>Step 5: Appeal</strong></p>
            <p>If unsatisfied, you may escalate to regulatory authorities (see below)</p>

            <h3>18.3 Regulatory Authority Contacts</h3>
            <ul>
              <li>
                <strong>India:</strong> <br />
                Data Protection Board of India (DPBI)<br />
                Ministry of Electronics and Information Technology
              </li>
              <li>
                <strong>European Union:</strong> <br />
                European Data Protection Board (EDPB)<br />
                Contact your local Data Protection Authority (DPA)
              </li>
              <li>
                <strong>United States:</strong> <br />
                Federal Trade Commission (FTC) for CCPA complaints<br />
                State Attorneys General Offices
              </li>
              <li>
                <strong>United Kingdom:</strong> <br />
                Information Commissioner's Office (ICO)<br />
                www.ico.org.uk
              </li>
              <li>
                <strong>Canada:</strong> <br />
                Office of the Privacy Commissioner of Canada (OPC)<br />
                www.priv.gc.ca
              </li>
            </ul>

            <h3>18.4 Escalation & Legal Action</h3>
            <ul>
              <li>You have the right to file complaints with regulatory authorities</li>
              <li>Legal action may be pursued in courts of competent jurisdiction</li>
              <li>GDPR: Right to judicial remedy in EU courts</li>
              <li>CCPA: Right to sue for certain data breaches</li>
            </ul>
          </section>

          {/* ────── 19. RESPONSIBLE DISCLOSURE ────── */}
          <section className="privacy-section">
            <h2>19. Security Vulnerability Reporting</h2>
            <p>If you discover a security vulnerability in our systems, please report it responsibly to: <strong>security@kesarix.com</strong></p>
            <ul>
              <li>Do not publicly disclose the vulnerability</li>
              <li>Provide detailed technical information</li>
              <li>We will investigate and respond within 48 hours</li>
              <li>Rewards may be available through our bug bounty program</li>
            </ul>
          </section>

          {/* ────── 20. ADDITIONAL RESOURCES ────── */}
          <section className="privacy-section">
            <h2>20. Additional Resources & Support</h2>
            <ul>
              <li><strong>Privacy at KesariX:</strong> www.kesarix.com/privacy</li>
              <li><strong>Cookie Policy:</strong> www.kesarix.com/cookies</li>
              <li><strong>Terms of Service:</strong> www.kesarix.com/terms</li>
              <li><strong>Security Center:</strong> www.kesarix.com/security</li>
              <li><strong>Data Protection Impact Assessment:</strong> Available upon request from DPO</li>
            </ul>
          </section>

          {/* ────── FINAL DISCLAIMER ────── */}
          <section className="privacy-section privacy-final">
            <h2>Final Statement</h2>
            <p>
              This Privacy Policy represents our commitment to protecting your personal data across all jurisdictions where we operate. By using KesariX Technology services, you acknowledge that you have read, understood, and agree to the terms outlined herein. Your privacy is fundamental to our values, and we continuously improve our practices to maintain the highest standards of data protection and compliance.
            </p>
            <p>
              <strong>For questions or to report privacy concerns:</strong><br />
              📧 privacy@kesarix.com<br />
              📧 dpo@kesarix.com<br />
              ⚖️ legal@kesarix.com
            </p>
            <p style={{ opacity: 0.7, marginTop: '2rem' }}>
              <strong>Last Updated:</strong> April 15, 2026 | <strong>Version:</strong> 2.0 | <strong>Status:</strong> Active & Compliant
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  )
}
