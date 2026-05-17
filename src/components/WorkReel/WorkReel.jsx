import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./WorkReel.css";

const PROJECTS = [
  {
    num: "01",
    type: "AI Powered Voice Call Center",
    title: "AI Voice Campaign Engine",
    client: "Delivery Club (Outbound Campaign)",
    desc: "Built an AI-driven outbound voice campaign system using Exotel, handling automated calls, real-time conversation processing, and lead qualification. Integrated speech-to-text, LLM-based intent detection, and structured data capture with campaign tracking dashboards.",
    tags: [
      "Exotel API",
      "WebSockets",
      "FastAPI",
      "LLM (Groq/GPT)",
      "PostgreSQL",
      "React",
    ],
    metrics: [
      { value: "500–1000", label: "Daily Calls" },
      { value: "85%+", label: "Automation Rate" },
    ],
    gradient: "bg-ai-voice",
  },
  {
    num: "02",
    type: "Self-Hosted CRM Platform with Custom Branding",
    title: "Aegis CRM",
    client: "Internal / KesariX Technology",
    desc: "Forked and fully rebranded Twenty CRM (AGPL-3.0) into Aegis — a self-hosted, white-labelled CRM platform built for client deployment. Replaced all platform branding, implemented a custom KesariX visual theme, built a branded landing page, configured Docker Compose deployment, and optimized the environment for scalable self-hosted usage.",
    tags: [
      "Twenty CRM",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "React",
      "Nx Monorepo",
      "Docker",
      "WSL / Ubuntu",
    ],
    metrics: [
      { value: "100%", label: "Platform Rebranding" },
      { value: "Self-Hosted", label: "Deployment Model" },
    ],
    gradient: "bg-ai-voice",
  },
  {
    num: "03",
    type: "AI-Powered Legal Research & RAG System",
    title: "Legal RAG",
    client: "Internal / Legal Intelligence Platform",
    desc: "Built a legal RAG system for analyzing expert witness depositions and legal documents using semantic retrieval and LLM-powered reasoning. Implemented PDF ingestion, metadata extraction, citation-based Q&A, inconsistency detection across testimonies, and case-wise document organization with a full-stack interface and Dockerized deployment.",
    tags: [
      "FastAPI",
      "LlamaIndex",
      "React",
      "TypeScript",
      "PostgreSQL + pgvector",
      "OpenAI Embeddings",
      "Groq / Claude",
      "Docker",
    ],
    metrics: [
      { value: "RAG-Powered", label: "Legal Analysis" },
      { value: "Citation-Based", label: "Response Accuracy" },
    ],
    gradient: "bg-ai-voice",
  },
];

export default function WorkReel() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".portfolio__card", {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: { trigger: ".portfolio__card", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="portfolio" id="portfolio" ref={sectionRef}>
      <div className="portfolio__head">
        <div className="portfolio__title-wrap">
          <div className="cp-header__eyebrow">
            <span className="cp-eyebrow-dot" /> Our Products
          </div>
          <h2 className="portfolio__title">
            Products That Make
            <br />
            an <em>Impact</em>
          </h2>
        </div>
        <p className="portfolio__sub">
          We don't just write code. We engineer high-performance enterprise
          systems, intelligent workflows, and scalable platforms that drive
          measurable business results.
        </p>
      </div>

      {PROJECTS.map((p, i) => (
        <div className="portfolio__card" key={i}>
          <div className={`portfolio__card-visual ${p.gradient}`}>
            <div className="portfolio__card-num">{p.num}</div>
            <div className="portfolio__card-metrics">
              {p.metrics.map((m) => (
                <div className="portfolio__metric" key={m.label}>
                  <div className="portfolio__metric-value">{m.value}</div>
                  <div className="portfolio__metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="portfolio__card-body">
            <div className="portfolio__card-type">{p.type}</div>
            <h3 className="portfolio__card-title">{p.title}</h3>
            <div className="portfolio__card-client">
              Client: <em>{p.client}</em>
            </div>
            <p className="portfolio__card-desc">{p.desc}</p>
            <div className="portfolio__card-tags">
              {p.tags.map((tag) => (
                <span className="portfolio__tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
