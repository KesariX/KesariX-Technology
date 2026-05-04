import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Rocket } from "lucide-react";
import SEO from "../components/SEO";
import "./styles/OurWork.css";

const projects = [
  {
    title: "AI Voice Bot Automation (Exotel)",
    client: "Wercatalyst",
    industry: "AI Automation",
    desc: "Built an AI-powered voice calling system using Exotel that can handle inbound/outbound calls, understand user intent, and respond in real-time using LLMs. Integrated WebSocket streaming, custom workflows, and automated call handling.",
    image:
      "/assets/img_23.jpg",
    metrics: [
      { val: "500+", lbl: "Calls / Day" },
      { val: "<1s", lbl: "Response Time" },
    ],
  },
  {
    title: "Mechanical Services Website Platform",
    client: "Neha Engineering Works",
    industry: "Web Development",
    desc: "Designed and developed a high-conversion website for a mechanical service provider. Includes service listings, lead capture, SEO optimization, and fast-loading UI for better customer acquisition.",
    image:
      "/assets/img_24.jpg",
    metrics: [
      { val: "+3x", lbl: "Lead Increase" },
      { val: "95+", lbl: "Lighthouse Score" },
    ],
  },
  {
    title: "Global E-Commerce Platform",
    client: "Aura Aesthetics",
    industry: "E-Commerce",
    desc: "A completely custom headless commerce architecture using Next.js and Shopify Plus. Achieved perfect Lighthouse 100 scores across all metrics, resulting in a 310% organic traffic increase within 6 months.",
    image:
      "/assets/img_25.jpg",
    metrics: [
      { val: "+310%", lbl: "Organic Traffic" },
      { val: "380ms", lbl: "Page Load" },
    ],
  },
];

const filters = [
  "All Projects",
  "AI Automation",
  "Web Development",
  "E-Commerce",
  "Enterprise Automation",
  "Infrastructure",
];

export default function OurWork() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.industry === activeFilter);

  return (
    <div className="work-page">
      <SEO
        title="Our Work & Case Studies | KesariX Technology"
        description="Explore KesariX Technology's portfolio of AI solutions, web applications, and enterprise software. See how we've delivered measurable results for our clients."
        path="/company/work"
      />
      {/* ── HERO ── */}
      <section className="work-hero">
        <div className="work-hero__bg-text">WORK</div>
        <div className="work-hero__inner">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="work-hero__label">Case Studies</div>
            <h1 className="work-hero__title">
              We Let The
              <br />
              <em>Work Speak.</em>
            </h1>
          </motion.div>
          <motion.div
            className="work-hero__right"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              We build real-world AI systems and high-performance websites —
              from voice automation to conversion-focused platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── INDUSTRY FILTER TAGS ── */}
      <div className="work-tags-strip">
        {filters.map((t) => (
          <button 
            key={t} 
            className={`work-tag-btn ${activeFilter === t ? "active" : ""}`}
            onClick={() => setActiveFilter(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* ── CASE STUDIES ── */}
      <div className="work-case-list">
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((p) => (
              <motion.div
                key={p.title}
                layout
                className="work-case"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="work-case__image">
                  <img src={p.image} alt={p.title} />
                  <div className="work-case__image-overlay">
                    <span className="work-case__view-link">
                      View Case Study <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
                <div className="work-case__content">
                  <div className="work-case__industry">{p.industry}</div>
                  <h2 className="work-case__title">{p.title}</h2>
                  <p className="work-case__desc">{p.desc}</p>
                  <div className="work-case__metrics">
                    {p.metrics.map((m, mi) => (
                      <div key={mi}>
                        <div className="work-metric__val">{m.val}</div>
                        <div className="work-metric__lbl">{m.lbl}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              key="empty-state"
              layout
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center justify-center text-center py-24 w-full"
            >
              <div className="w-20 h-20 bg-[var(--surface-soft)] border border-[var(--border)] rounded-full flex items-center justify-center mb-6 text-[var(--accent-primary)] shadow-sm">
                <Rocket size={32} />
              </div>
              <h3 className="text-3xl font-bold text-[var(--text-dark)] font-['Outfit'] mb-4">
                Launching Soon
              </h3>
              <p className="text-[var(--text-mid)] max-w-md mx-auto text-lg leading-relaxed">
                We are currently finalizing our enterprise case studies for the <span className="font-semibold text-[var(--accent-primary)]">{activeFilter}</span> sector. Check back soon for exciting updates!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── CTA ── */}
      <section
        style={{
          padding: "7rem 3rem",
          background: "white",
          borderTop: "1px solid var(--border)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
            Ready to become a<br />
            <span className="gradient-text">case study?</span>
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--text-mid)",
              marginBottom: "2.5rem",
            }}
          >
            Let's map your infrastructure and build something that ships fast
            and scales with confidence.
          </p>
          <Link to="/contact" className="btn-primary">
            Start A Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
