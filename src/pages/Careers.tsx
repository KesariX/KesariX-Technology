import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Code2, Users, Rocket, Trophy, Briefcase } from 'lucide-react'
import './styles/Careers.css'

export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const jobs = [
    {
      title: "Senior AI Systems Architect",
      team: "Machine Learning",
      location: "Remote (Global)",
      type: "Full-Time"
    },
    {
      title: "Lead Full-Stack Engineer (Next.js/Node)",
      team: "Web Engineering",
      location: "India / Remote",
      type: "Full-Time"
    },
    {
      title: "DevOps & Infrastructure Lead",
      team: "IT Services",
      location: "Remote (US Timezone)",
      type: "Full-Time"
    },
    {
      title: "B2B Technical Sales Executive",
      team: "Growth",
      location: "Remote",
      type: "Full-Time"
    }
  ]

  return (
    <div className="careers-page">
      
      {/* ── HERO ──────────────── */}
      <section className="careers-hero">
        <div className="careers-bg" />
        <div className="section-container relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="text-[var(--accent-primary)] mb-6 font-bold tracking-widest uppercase text-sm px-4 py-2 bg-[var(--accent-primary)]/10 rounded-full border border-[var(--accent-primary)]/20 shadow-sm">
             We Are Hiring
          </div>
          
          <h1 className="section-title mb-6" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: '1.1' }}>
            Build Systems <br/>
            <span className="gradient-text">That Matter.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[var(--text-mid)] mb-10 leading-relaxed font-medium">
            Join a collective of elite engineers, architects, and researchers. We don't build generic SaaS wrappers; we build mission-critical enterprise platforms.
          </p>
          
          <a href="#positions" className="btn-primary">
            View Open Roles <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </section>

      {/* ── CULTURE ──────────────── */}
      <section className="bg-[var(--surface-soft)]">
        <div className="section-container">
          <div className="text-center pt-16">
            <h2 className="section-title">The Engineering Culture.</h2>
          </div>
          <div className="careers-culture-grid">
            <div className="careers-culture-card">
              <Code2 size={32} className="text-[var(--accent-primary)] mb-6" />
              <h3 className="text-2xl font-bold mb-3 font-['Outfit']">Deep Focus</h3>
              <p className="text-[var(--text-mid)] leading-relaxed">No endless meetings. No micro-management. We value deep, uninterrupted work blocks allowing engineers to solve complex logic flows.</p>
            </div>
            <div className="careers-culture-card">
              <Rocket size={32} className="text-[var(--accent-primary)] mb-6" />
              <h3 className="text-2xl font-bold mb-3 font-['Outfit']">Asynchronous First</h3>
              <p className="text-[var(--text-mid)] leading-relaxed">We operate globally across time zones. Extensive written documentation, Loom videos, and PR reviews replace noisy Slack channels.</p>
            </div>
            <div className="careers-culture-card">
              <Trophy size={32} className="text-[var(--accent-primary)] mb-6" />
              <h3 className="text-2xl font-bold mb-3 font-['Outfit']">Meritocracy</h3>
              <p className="text-[var(--text-mid)] leading-relaxed">The best technical argument wins, regardless of your title. We rapidly promote individuals who take extreme ownership of technical debt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── POSITIONS ──────────────── */}
      <section className="section-padding bg-white border-y border-[var(--border)]" id="positions">
        <div className="section-container max-w-5xl">
           <span className="section-eyebrow mb-4">Open Roles</span>
           <h2 className="section-title mb-12">Join The Architecture.</h2>

           <div className="careers-jobs-container">
             {jobs.map((job, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="careers-job-row"
               >
                 <div>
                   <h3 className="careers-job-title">{job.title}</h3>
                   <div className="careers-job-meta">
                     <span className="careers-job-tag">{job.team}</span>
                     <span className="careers-job-tag">{job.location}</span>
                     <span className="careers-job-tag tracking-wider uppercase text-xs flex items-center bg-gray-100">{job.type}</span>
                   </div>
                 </div>
                 
                 <div className="careers-job-apply">
                    Apply Now <ArrowRight size={16} />
                 </div>
               </motion.div>
             ))}
           </div>
           
           <div className="mt-16 text-center premium-card p-12 bg-[#FAFAF8]">
             <Briefcase size={32} className="text-gray-400 mx-auto mb-4" />
             <h3 className="text-xl font-bold mb-2">Don't see your role?</h3>
             <p className="text-[var(--text-mid)] mb-6 max-w-md mx-auto">We're always looking for exceptional 10x talent, regardless of open postings.</p>
             <a href="/contact" className="text-[var(--accent-primary)] font-bold hover:underline">Send us your portfolio.</a>
           </div>

        </div>
      </section>

    </div>
  )
}
