import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Code2, MonitorSmartphone, Zap, Server, Globe2, ArrowRight, CheckCircle2, Terminal } from 'lucide-react'

export default function WebDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [activeTab, setActiveTab] = useState(0)

  const architectureStack = [
    {
      title: "Frontend Engineering",
      desc: "Pixel-perfect, hyper-responsive interfaces built for extreme performance.",
      techs: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
      icon: MonitorSmartphone,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Backend & APIs",
      desc: "Scalable microservices and robust API gateways that handle millions of requests.",
      techs: ["Node.js", "Python Fast API", "GraphQL", "tRPC"],
      icon: Server,
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      title: "Database Scalability",
      desc: "Optimized relational and NoSQL databases designed for zero-downtime environments.",
      techs: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
      icon: Database,
      color: "text-amber-500",
      bg: "bg-amber-50"
    }
  ]

  const metrics = [
    { score: 100, label: 'Performance' },
    { score: 100, label: 'Accessibility' },
    { score: 100, label: 'Best Practices' },
    { score: 100, label: 'SEO' }
  ]

  // Mock code snippet for the interactive terminal
  const codeSnippets = [
    `// Rendering High-Performance UI\nexport default async function Page() {\n  const data = await fetchCriticalData()\n  return <UltraFastComponent payload={data} />\n}`,
    `// Scalable Microservices\napp.get('/api/scale', async (req, res) => {\n  const cached = await redis.get(req.id)\n  if (cached) return res.send(cached)\n})`,
    `// Vector Indexed Queries\nconst results = await db.query(\n  'SELECT * FROM users WHERE active = true'\n).cache(3600);`
  ]

  return (
    <div className="bg-[var(--bg-base)]">

      {/* ── ISOMETRIC HERO SECTION ──────────────── */}
      <section className="relative w-full pt-[120px] pb-16 md:pt-[160px] md:pb-32 overflow-hidden border-b border-[var(--border)]">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--accent-primary) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="section-eyebrow mb-6">
              <Code2 size={14} className="text-[var(--accent-primary)]" />
              Digital Architectures
            </div>

            <h1 className="section-title mb-6" style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)', lineHeight: '1.05' }}>
              We Build <br />
              <span className="gradient-text">Web Platforms.</span>
            </h1>

            <p className="section-subtitle max-w-lg mb-10">
              Stop relying on templates. We architect custom, high-performance web applications designed to dominate search rankings and convert traffic effortlessly.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-primary group">
                Deploy A Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center gap-2 text-sm font-bold text-[var(--accent-primary)] px-4 py-2 bg-[var(--accent-primary)]/10 rounded-full border border-[var(--accent-primary)]/20">
                <Globe2 size={16} /> Global CDN Delivery
              </div>
            </div>
          </motion.div>

          {/* Right Floating Browser Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[500px] w-full hidden lg:block perspective-[1000px]"
          >
            {/* Back/Bottom Browser */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-20 right-0 w-[400px] h-[250px] bg-white border border-[var(--border)] rounded-2xl shadow-xl overflow-hidden -rotate-6 scale-90 opacity-60"
            >
              {/* Browser Top Bar */}
              <div className="w-full h-8 bg-gray-50 border-b border-[var(--border)] flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="p-4 grid grid-cols-3 gap-4">
                <div className="h-20 bg-gray-100 rounded-lg col-span-3" />
                <div className="h-24 bg-gray-100 rounded-lg col-span-1" />
                <div className="h-24 bg-gray-100 rounded-lg col-span-2" />
              </div>
            </motion.div>

            {/* Middle Browser */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-10 left-10 w-[450px] h-[280px] bg-white border border-[var(--border)] rounded-2xl shadow-2xl overflow-hidden z-10"
            >
              <div className="w-full h-8 bg-gray-50 border-b border-[var(--border)] flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="p-6">
                <div className="w-32 h-6 bg-[var(--accent-primary)]/20 rounded-md mb-6" />
                <div className="space-y-3">
                  <div className="w-full h-4 bg-gray-100 rounded-full" />
                  <div className="w-[80%] h-4 bg-gray-100 rounded-full" />
                  <div className="w-[90%] h-4 bg-gray-100 rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* Front Feature/Metric Card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute bottom-10 right-20 w-[240px] premium-card p-6 shadow-[0_20px_40px_rgba(0,0,0,0.1)] z-20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[var(--text-dark)]">Lighthouse Score</h4>
                  <p className="text-xs text-[var(--text-muted)]">Perfect 100/100</p>
                </div>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, delay: 1 }}
                  className="h-full bg-emerald-500"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── LIGHTHOUSE SCORES BANNER ──────────────── */}
      <section className="bg-white border-b border-[var(--border)] py-12 relative z-20">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[var(--border)]">
            {metrics.map((metric, i) => (
              <div key={i} className={`flex flex-col items-center justify-center ${i !== 0 ? 'pl-8' : ''}`}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, delay: i * 0.1 }}
                  className="w-20 h-20 rounded-full border-4 border-[var(--accent-primary)]/20 flex flex-col items-center justify-center mb-3 relative group"
                >
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle cx="36" cy="36" r="36" stroke="var(--accent-primary)" strokeWidth="4" fill="none" strokeDasharray="226" strokeDashoffset="0" className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  </svg>
                  <span className="text-2xl font-black text-[var(--text-dark)] font-['Outfit']">{metric.score}</span>
                </motion.div>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] text-center">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE STACK ACCORDION ──────────────── */}
      <section className="section-padding bg-[var(--surface-soft)]">
        <div className="section-container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

            <div className="lg:col-span-6">
              <span className="section-eyebrow mb-4">Architecture Deep Dive</span>
              <h2 className="section-title mb-6">Modern Stack. <br /><span className="gradient-text">Infinite Scale.</span></h2>
              <p className="text-lg text-[var(--text-mid)] mb-10">
                We use the exact same technology stacks powering Silicon Valley's top tech giants. Your application will be incredibly fast, natively SEO optimized, and mathematically secure.
              </p>

              <div className="space-y-4">
                {architectureStack.map((layer, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${activeTab === idx
                        ? 'bg-white border-[var(--accent-primary)]/50 shadow-lg scale-[1.02]'
                        : 'bg-transparent border-transparent hover:border-[var(--border)] hover:bg-white/50'
                      }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${layer.bg} ${layer.color}`}>
                        <layer.icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[var(--text-dark)] mb-2 font-['Outfit']">{layer.title}</h4>
                        <p className="text-[var(--text-mid)] mb-4">{layer.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {layer.techs.map(tech => (
                            <span key={tech} className="px-2.5 py-1 text-xs font-semibold rounded-md border border-[var(--border)] text-[var(--text-dark)] bg-[var(--bg-base)]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              {/* Dynamic Code Editor Mockup */}
              <motion.div
                className="premium-card p-0 rounded-2xl overflow-hidden bg-[#1D1F23] shadow-2xl relative border-none"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Editor Header */}
                <div className="bg-[#282C34] px-4 py-3 flex items-center justify-between border-b border-black/20">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ED6A5E]" />
                    <div className="w-3 h-3 rounded-full bg-[#F4BF4F]" />
                    <div className="w-3 h-3 rounded-full bg-[#61C554]" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                    <Terminal size={14} /> architecture.ts
                  </div>
                </div>

                {/* Editor Body */}
                <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden h-[340px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-300"
                    >
                      <pre className="whitespace-pre-wrap">
                        {/* Super simple syntax highlighting hack for the demo */}
                        {codeSnippets[activeTab].split('\n').map((line, i) => (
                          <div key={i} className="flex">
                            <span className="w-8 shrink-0 text-gray-600 select-none text-right pr-4">{i + 1}</span>
                            <span dangerouslySetInnerHTML={{
                              __html: line
                                .replace(/export|default|async|function|const|await|return|if/g, '<span style="color: #C678DD;">$&</span>')
                                .replace(/Page|UltraFastComponent/g, '<span style="color: #E5C07B;">$&</span>')
                                .replace(/data|payload|cached|results|req|res/g, '<span style="color: #E06C75;">$&</span>')
                                .replace(/'.*'/g, '<span style="color: #98C379;">$&</span>')
                                .replace(/\/\/.*$/g, '<span style="color: #5C6370;">$&</span>')
                            }} />
                          </div>
                        ))}
                      </pre>
                    </motion.div>
                  </AnimatePresence>

                  {/* Blinking cursor */}
                  <motion.div
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2 h-4 bg-[#61AFEF] mt-4 ml-8"
                  />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PERFORMANCE COMPARISON CARDS ──────────────── */}
      <section className="section-padding bg-white border-y border-[var(--border)]">
        <div className="section-container max-w-5xl text-center">
          <span className="section-eyebrow mb-4">The KesariX Standard</span>
          <h2 className="section-title mb-16">Why Standard Development Fails.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="premium-card p-10 bg-gray-50 border-gray-200"
            >
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-600 mx-auto mb-6">
                <div className="text-xl font-bold">X</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-['Outfit']">Generic Web Agencies</h3>
              <ul className="space-y-4 text-left text-[var(--text-mid)]">
                <li className="flex items-center gap-3"><span className="text-red-500">×</span> Relies on slow Wordpress templates</li>
                <li className="flex items-center gap-3"><span className="text-red-500">×</span> Zero performance standard (3+ second load times)</li>
                <li className="flex items-center gap-3"><span className="text-red-500">×</span> Standard plugins creating security vulnerabilities</li>
                <li className="flex items-center gap-3"><span className="text-red-500">×</span> Terrible native SEO structure</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="premium-card p-10 border-[var(--accent-primary)]/30 shadow-[0_20px_40px_rgba(217,119,6,0.05)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-primary)]/5 to-transparent pointer-events-none" />
              <div className="w-16 h-16 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center text-[var(--accent-primary)] mx-auto mb-6 relative z-10">
                <CheckCircle2 size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-['Outfit'] relative z-10">KesariX Engineering</h3>
              <ul className="space-y-4 text-left text-[var(--text-dark)] font-medium relative z-10">
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-[var(--accent-primary)]" /> Custom React/Next.js Architecture</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-[var(--accent-primary)]" /> Sub-500ms guaranteed loading speeds</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-[var(--accent-primary)]" /> Military-grade microservice security</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-[var(--accent-primary)]" /> Perfect 100/100 Lighthouse SEO Structuring</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ELEGANT THEMED CTA ────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[var(--bg-base)] relative overflow-hidden">
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full premium-card rounded-[3rem] p-12 md:p-24 overflow-hidden relative text-center group bg-white shadow-2xl"
          >
            {/* Animated Rings fitting the Light Theme */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-50">
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[2px] border-dashed border-[var(--border)] rounded-full mix-blend-multiply"
              />
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[60%] bg-gradient-to-t from-[var(--accent-primary)]/10 to-transparent pointer-events-none blur-[40px]" />

            <div className="relative z-20 flex flex-col items-center">
              <div className="w-24 h-24 mb-10 rounded-[2rem] bg-gradient-to-tr from-[var(--accent-primary)]/20 to-[var(--accent-primary)]/5 p-[1px]">
                <div className="w-full h-full bg-white rounded-[2rem] flex items-center justify-center border border-[var(--accent-primary)]/20 shadow-sm transition-transform duration-700 group-hover:scale-110">
                  <Code2 size={40} className="text-[var(--accent-primary)]" />
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tight font-['Outfit'] text-[var(--text-dark)] leading-tight relative">
                Start Building <br />
                <span className="gradient-text">Your Platform.</span>
              </h2>

              <p className="text-xl md:text-2xl text-[var(--text-mid)] mx-auto mb-12 max-w-3xl leading-relaxed">
                Break away from restrictive templates. We architect platforms designed exactly for your most ambitious technical requirements.
              </p>

              <Link to="/contact" className="btn-primary flex items-center justify-center px-10 py-5 text-lg font-bold shadow-[var(--shadow-lift)] overflow-hidden relative">
                <span className="relative z-10 transition-transform group-hover:-translate-x-1">Launch Project</span>
                <ArrowRight size={20} className="ml-3 relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

function Database(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}
