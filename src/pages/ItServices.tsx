import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Server, ShieldCheck, Cloud, Network, HeadphonesIcon, Database, ArrowRight, CheckCircle2 } from 'lucide-react'
import SEO from '../components/SEO'
import NeuralPulseMatrix from '../components/3D/NeuralPulseMatrix'
import CTASection from '../components/CTASection'
import './styles/ItServices.css'

export default function ItServices() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <div className="it-page">
      <SEO
        title="IT Infrastructure & Cloud Services | KesariX Technology"
        description="Enterprise IT services including cloud infrastructure, DevOps, security, and managed services. KesariX builds resilient, scalable systems that keep your business running."
        path="/services/it-services"
      />

      {/* ── HERO SECTION ──────────────── */}
      <section className="it-hero">
        <div className="it-hero-bg" />
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ height: '100%' }}>
          <NeuralPulseMatrix className="opacity-40" />
        </div>

        <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-eyebrow mb-6">
              <Server size={14} className="text-[var(--accent-primary)]" />
              Managed Infrastructure
            </div>

            <h1 className="section-title mb-6" style={{ fontSize: 'clamp(3.5rem, 6vw, 4.5rem)', lineHeight: '1.05' }}>
              Enterprise IT <br />
              <span className="gradient-text">Management.</span>
            </h1>

            <p className="section-subtitle max-w-lg mb-10">
              Your business operations shouldn't be bottlenecked by server downtime or security threats. We provide highly scalable cloud management, cybersecurity, and 24/7 technical support.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-primary group">
                Audit Infrastructure <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Visual: 3D Server Blades */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full hidden lg:block perspective-[1000px]"
          >
            <div className="it-datacenter-container">
              {/* Server Rack 1 - Left */}
              <motion.div
                animate={{ rotateY: -10 }}
                className="it-server-rack h-[240px]"
              >
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className={`it-server-blade ${i % 3 === 0 ? 'active' : ''}`}>
                    <div className="it-led" />
                  </div>
                ))}
              </motion.div>

              {/* Server Rack 2 - Center */}
              <motion.div
                animate={{ rotateY: 0, y: -20 }}
                className="it-server-rack h-[320px] border-gray-400 shadow-2xl relative z-10"
              >
                <div className="text-center font-mono text-[8px] font-bold text-gray-400 mb-1">MAIN CLUSTER</div>
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className={`it-server-blade ${i % 2 === 0 ? 'active' : ''}`}>
                    <div className="it-led" />
                  </div>
                ))}
              </motion.div>

              {/* Server Rack 3 - Right */}
              <motion.div
                animate={{ rotateY: 10 }}
                className="it-server-rack h-[260px]"
              >
                {Array.from({ length: 13 }).map((_, i) => (
                  <div key={i} className={`it-server-blade ${i === 4 ? 'warning' : 'active'}`}>
                    <div className="it-led" />
                  </div>
                ))}
              </motion.div>

              {/* Floating Uptime Card */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="it-status-card"
              >
                <div className="it-uptime-circle tracking-tighter">99.9%</div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-dark)]">Global Uptime</h4>
                  <p className="text-xs text-[var(--text-muted)] mt-1 flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-500" /> Systems Operational</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES BENTO ──────────────── */}
      <section className="section-padding bg-[var(--surface-soft)]">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="section-eyebrow mb-4">Core IT Offerings</span>
            <h2 className="section-title">Zero-Downtime Reliability.</h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="it-grid-section"
          >
            {[
              {
                icon: Cloud,
                title: "Cloud Infrastructure",
                desc: "AWS, Azure, and GCP architecture. We manage seamless cloud migrations and ongoing server optimizations to cut your hosting costs."
              },
              {
                icon: ShieldCheck,
                title: "Cybersecurity & Compliance",
                desc: "Proactive threat monitoring, penetration testing, and zero-trust architecture bridging the gap between performance and absolute security."
              },
              {
                icon: HeadphonesIcon,
                title: "24/7 Managed IT Support",
                desc: "Dedicated helpdesk operations. We resolve hardware failures, software bugs, and network issues for your team globally, around the clock."
              },
              {
                icon: Database,
                title: "Data Backup & Recovery",
                desc: "Redundant off-site backups with aggressive Recovery Time Objectives (RTO). If disaster strikes, your business data survives."
              },
              {
                icon: Network,
                title: "Network Architecture",
                desc: "Design and deployment of secure, high-speed SD-WAN and VPN architectures connecting your distributed global workforce."
              },
              {
                icon: Server,
                title: "Server Deployment",
                desc: "End-to-end management of on-premise or cloud-native bare-metal servers, ensuring you have the raw compute power when you need it."
              }
            ].map((feature, i) => (
              <motion.div key={i} variants={itemVariants} className="it-feature-box group">
                <div className="it-icon-wrap group-hover:scale-110 transition-transform">
                  <feature.icon size={26} />
                </div>
                <h3 className="text-xl font-bold mb-3 font-['Outfit'] text-[var(--text-dark)]">{feature.title}</h3>
                <p className="text-[var(--text-mid)] leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ELEGANT THEMED CTA ────────────────────────────── */}
      <CTASection
        title={<>Secure Your <br /> <span>Infrastructure.</span></>}
        subtitle="Connect with our systems engineers to audit your current IT architecture and eliminate critical vulnerabilities."
        buttonText="Speak with an Engineer"
        eyebrow="Ready to secure?"
      />

    </div>
  )
}
