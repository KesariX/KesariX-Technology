import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import "./styles/OurWork.css";

const projects = [
  {
    title: "AI Voice Bot Automation (Exotel)",
    client: "Internal Product",
    industry: "wercatalyst",
    desc: "Built an AI-powered voice calling system using Exotel that can handle inbound/outbound calls, understand user intent, and respond in real-time using LLMs. Integrated WebSocket streaming, custom workflows, and automated call handling.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e8a94d7b4cf?q=80&w=2000&auto=format&fit=crop",
    metrics: [
      { val: "500+", lbl: "Calls / Day" },
      { val: "<1s", lbl: "Response Time" },
    ],
  },
  {
    title: "Mechanical Services Website Platform",
    client: "Local Service Business",
    industry: "Neha Engineering Works",
    desc: "Designed and developed a high-conversion website for a mechanical service provider. Includes service listings, lead capture, SEO optimization, and fast-loading UI for better customer acquisition.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22731b8f7c?q=80&w=2000&auto=format&fit=crop",
    metrics: [
      { val: "+3x", lbl: "Lead Increase" },
      { val: "95+", lbl: "Lighthouse Score" },
    ],
  },
  {
    title: "Global E-Commerce Platform",
    client: "Aura Aesthetics",
    industry: "Retail & E-Commerce",
    desc: "A completely custom headless commerce architecture using Next.js and Shopify Plus. Achieved perfect Lighthouse 100 scores across all metrics, resulting in a 310% organic traffic increase within 6 months.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    metrics: [
      { val: "+310%", lbl: "Organic Traffic" },
      { val: "380ms", lbl: "Page Load" },
    ],
  },
];

export default function OurWork() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="work-page">
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
        {[
          "All Projects",
          "AI Automation",
          "Web Development",
          "E-Commerce",
          "Enterprise Automation",
          "Infrastructure",
        ].map((t, i) => (
          <button key={t} className={`work-tag-btn ${i === 0 ? "active" : ""}`}>
            {t}
          </button>
        ))}
      </div>

      {/* ── CASE STUDIES ── */}
      <div className="work-case-list">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="work-case"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
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
        ))}
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
