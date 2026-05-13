import { useRef, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './AboutKesariX.css'

gsap.registerPlugin(ScrollTrigger)

const TEAM = [
  {
    name: 'Sarthak Singh',
    role: 'Founder & CEO',
    bio: "Visionary founder driving KesariX's mission to deliver AI-powered products that create real business impact.",
    tags: ['Strategy', 'Vision', 'Product'],
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=480&h=600&q=80',
    featured: true,
  },
  {
    name: 'Ronak Parmar',
    role: 'AI Engineering Lead',
    bio: 'Tech lead with a passion for architecting robust AI systems that just work — every time, at any scale.',
    tags: ['LLMs', 'Vision AI', 'MLOps'],
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=480&h=600&q=80',
  },
  {
    name: 'Govind Mishra',
    role: 'Chief Financial Officer',
    bio: 'Finance strategist ensuring sustainable growth and the operational backbone that lets the team move fast.',
    tags: ['Finance', 'Operations', 'Growth'],
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=480&h=600&q=80',
  },
  {
    name: 'Harsh Prajapati',
    role: 'Web Development Lead',
    bio: 'Frontend engineer building fast, pixel-perfect web experiences using modern stack and creative precision.',
    tags: ['React', 'Next.js', 'UI/UX'],
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=480&h=600&q=80',
  },
  {
    name: 'Prince Yadav',
    role: 'Chief Marketing Officer',
    bio: 'Marketing architect crafting brand narratives that connect with audiences and drive measurable growth.',
    tags: ['Brand', 'SEO', 'Campaigns'],
    photo: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=480&h=600&q=80',
  },
  {
    name: 'Jay Padhiyar',
    role: 'Growth Specialist',
    bio: 'Growth expert with deep expertise in digital campaigns, performance marketing, and data-driven pipelines.',
    tags: ['Digital', 'Analytics', 'Growth'],
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=480&h=600&q=80',
  },
]

const VALUES = [
  {
    num: '01',
    title: 'Deterministic Results',
    desc: 'We reject hype. Every solution we architect is bound by mathematical certainty, strict QA testing, and measurable ROI you can directly attribute to our work.',
  },
  {
    num: '02',
    title: 'Absolute Security',
    desc: 'Enterprise data is sacred. Zero-trust architecture and heavily vetted microservices completely isolate your intellectual property at every layer.',
  },
  {
    num: '03',
    title: 'Relentless Iteration',
    desc: "Software decays. We don't just ship and leave — we monitor logs, refactor for scale, and optimize continuously based on real production telemetry.",
  },
  {
    num: '04',
    title: 'Human-First Design',
    desc: 'Every pixel and every interaction is designed for the people who use it daily. Technology serves humans, not the reverse — beauty and function as one.',
  },
]

const TIMELINE = [
  {
    period: 'Q1 2026',
    event: 'KesariX Founded',
    desc: 'Built a world-class AI & digital engineering platform from the ground up with a mission to transform how enterprises build intelligent systems.',
    badge: 'Genesis',
  },
  {
    period: 'Q2 2026',
    event: 'Rapid Product Development',
    desc: 'Shipped 5+ successful scalable deployments, including 3+ custom enterprise AI and ML models actively running in production environments.',
    badge: 'Launch',
  },
  {
    period: 'Q2 2026',
    event: 'First Client Partnerships',
    desc: 'Partnered with trusted teams including Wercatalyst and Neha Engineering Works, delivering measurable business results and repeat engagements.',
    badge: 'Growth',
  },
  {
    period: 'Q3 2026',
    event: 'Scaling Operations',
    desc: 'Formed a core team of 6+ elite engineers and domain experts, maintaining a 98% client satisfaction rate across all active projects.',
    badge: 'Scale',
  },
]

export default function AboutKesariX() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      /* ── Hero entrance ── */
      gsap.fromTo('.ab-hero-title',
        { autoAlpha: 0, y: 60 },
        { autoAlpha: 1, y: 0, duration: 1.2, ease: 'expo.out', delay: 0.1 }
      )
      gsap.fromTo('.ab-hero-desc',
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 1, ease: 'expo.out', delay: 0.35 }
      )
      gsap.fromTo('.ab-hero-stats',
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 1, ease: 'expo.out', delay: 0.5 }
      )
      gsap.fromTo('.ab-hero__scroll',
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 1, delay: 1.0 }
      )

      /* ── Generic scroll reveals ── */
      gsap.utils.toArray('.ab-reveal').forEach((el) => {
        gsap.fromTo(el,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          }
        )
      })

      /* ── Stats counters ── */
      gsap.utils.toArray('.ab-stat__num').forEach((el) => {
        const raw = el.dataset.target
        const hasPlus = raw.endsWith('+')
        const hasPct = raw.endsWith('%')
        const numericEnd = parseFloat(raw)
        ScrollTrigger.create({
          trigger: el, start: 'top 90%', once: true,
          onEnter: () => {
            gsap.to({ val: 0 }, {
              val: numericEnd, duration: 2, ease: 'power2.out',
              onUpdate: function () {
                el.textContent = Math.round(this.targets()[0].val) + (hasPlus ? '+' : hasPct ? '%' : '')
              },
            })
          },
        })
      })

      /* ── Timeline stagger ── */
      gsap.utils.toArray('.ab-milestone').forEach((item, i) => {
        gsap.fromTo(item,
          { autoAlpha: 0, x: -40 },
          {
            autoAlpha: 1, x: 0, duration: 0.9, ease: 'power3.out', delay: i * 0.1,
            scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none none' },
          }
        )
      })

      /* ── Values grid stagger ── */
      gsap.fromTo('.ab-value-card',
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: '.ab-values-grid', start: 'top 80%' },
        }
      )

      /* ── Team cards stagger ── */
      gsap.fromTo('.ab-team-card',
        { autoAlpha: 0, y: 60 },
        {
          autoAlpha: 1, y: 0, duration: 0.85, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: '.ab-team-grid', start: 'top 82%' },
        }
      )

      setTimeout(() => ScrollTrigger.refresh(), 500)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="ab-page" ref={sectionRef}>

      {/* ══════════════════════════════════════
          1. HERO
         ══════════════════════════════════════ */}
      <section className="ab-section ab-hero ab-dark">
        <div className="ab-hero__glow" />
        <div className="ab-hero__bg-grid" />
        <div className="ab-hero__inner">
          <div className="ab-hero__breadcrumb">
            <Link to="/">Home</Link>
            <span className="ab-hero__breadcrumb-sep">/</span>
            <span>Company</span>
            <span className="ab-hero__breadcrumb-sep">/</span>
            <span className="ab-hero__breadcrumb-current">About KesariX</span>
          </div>
          <span className="ab-eyebrow">
            <span className="ab-eyebrow-dot" />
            Our Story
          </span>
          <h1 className="ab-hero-title">
            We Engineer <br />
            <em className="ab-italic">What's Next.</em>
          </h1>
          <p className="ab-hero-desc">
            A collective of systems architects, deep-learning researchers, and full-stack engineers building uncompromising digital platforms for the enterprise layer.
          </p>
          <div className="ab-hero-stats">
            <div className="ab-hero-stat">
              <span className="ab-hero-stat__val">Founded 2026</span>
            </div>
            <div className="ab-hero-stat__sep" />
            <div className="ab-hero-stat">
              <span className="ab-hero-stat__val">India Based</span>
            </div>
            <div className="ab-hero-stat__sep" />
            <div className="ab-hero-stat">
              <span className="ab-hero-stat__val">5+ Clients</span>
            </div>
            <div className="ab-hero-stat__sep" />
            <div className="ab-hero-stat">
              <span className="ab-hero-stat__val">98% Satisfaction</span>
            </div>
          </div>
          <div className="ab-hero__scroll">
            <div className="ab-hero__scroll-track">
              <div className="ab-hero__scroll-dot" />
            </div>
            <span className="ab-hero__scroll-label">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. STATS
         ══════════════════════════════════════ */}
      <section className="ab-section ab-stats-section ab-light">
        <div className="ab-stats-grid">
          {[
            { val: '5+',  label: 'Enterprise Clients' },
            { val: '6+',  label: 'Core Team Members' },
            { val: '98%', label: 'Client Satisfaction' },
            { val: '5+',  label: 'Projects Delivered' },
          ].map(({ val, label }) => (
            <div className="ab-stat ab-reveal" key={label}>
              <span className="ab-stat__num" data-target={val}>{val}</span>
              <span className="ab-stat__label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. COMPANY STORY
         ══════════════════════════════════════ */}
      <section className="ab-section ab-story ab-dark">
        <div className="ab-story__inner">
          <div className="ab-story__image-col ab-reveal">
            <div className="ab-story__img-frame">
              <img
                className="ab-story__img"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                alt="KesariX team collaborating"
                loading="lazy"
              />
              <div className="ab-story__img-overlay" />
              <div className="ab-story__img-badge">
                <span className="ab-story__img-badge-year">2026</span>
                <span className="ab-story__img-badge-label">Est.</span>
              </div>
            </div>
          </div>
          <div className="ab-story__content-col">
            <span className="ab-eyebrow ab-reveal">
              <span className="ab-eyebrow-dot" />
              Company Story
            </span>
            <h2 className="ab-title-huge ab-reveal">
              Born from a <br />
              <em className="ab-italic">Bold Idea.</em>
            </h2>
            <p className="ab-desc-large ab-reveal">
              KesariX was founded in 2026 with a single conviction: that Indian engineering talent could build world-class AI systems that rival any Silicon Valley outfit. Not someday. Now.
            </p>
            <p className="ab-story__body ab-reveal">
              We started as a tight-knit crew of builders tired of watching enterprise software be mediocre — too slow, too fragile, too disconnected from real business outcomes. We knew we could do better, and we proved it with every project we shipped.
            </p>
            <div className="ab-story__chips ab-reveal">
              <span className="ab-chip">AI Engineering</span>
              <span className="ab-chip">Full-Stack Dev</span>
              <span className="ab-chip">Enterprise Systems</span>
              <span className="ab-chip">Agentic Workflows</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. MISSION + VISION
         ══════════════════════════════════════ */}
      <section className="ab-section ab-mv ab-light">
        <div className="ab-mv__label ab-reveal">
          <span className="ab-eyebrow">
            <span className="ab-eyebrow-dot" />
            What we stand for
          </span>
        </div>
        <div className="ab-mv__grid">
          <div className="ab-mv-card ab-mv-card--mission ab-reveal">
            <div className="ab-mv-card__watermark">M</div>
            <div className="ab-mv-card__inner">
              <span className="ab-mv-card__tag">Mission</span>
              <h3 className="ab-mv-card__heading">
                To engineer intelligent systems that give enterprises an unfair competitive advantage.
              </h3>
              <p className="ab-mv-card__body">
                We exist to close the gap between cutting-edge AI research and production-grade enterprise software. Every engagement is a proof point that ambitious technology, done right, changes industries.
              </p>
            </div>
          </div>
          <div className="ab-mv-card ab-mv-card--vision ab-reveal">
            <div className="ab-mv-card__watermark">V</div>
            <div className="ab-mv-card__inner">
              <span className="ab-mv-card__tag">Vision</span>
              <h3 className="ab-mv-card__heading">
                A world where every business has access to elite AI engineering — regardless of size.
              </h3>
              <p className="ab-mv-card__body">
                We're building toward a future where the tools, talent, and systems that power billion-dollar companies are accessible to every forward-thinking team. Intelligence at scale, for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. FOUNDER'S MESSAGE
         ══════════════════════════════════════ */}
      <section className="ab-section ab-founder ab-dark">
        <div className="ab-founder__inner">
          <div className="ab-founder__quote-col ab-reveal">
            <div className="ab-founder__quote-mark">"</div>
            <blockquote className="ab-founder__quote">
              We didn't start KesariX to build another agency. We started it to build a machine — one that compounds intelligence, ships fast, and never compromises on craft.
            </blockquote>
            <div className="ab-founder__sig">
              <div className="ab-founder__avatar-wrap">
                <img
                  className="ab-founder__avatar"
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Sarthak Singh"
                  loading="lazy"
                />
                <div className="ab-founder__avatar-ring" />
              </div>
              <div className="ab-founder__sig-text">
                <span className="ab-founder__name">Sarthak Singh</span>
                <span className="ab-founder__title">Founder & CEO, KesariX</span>
              </div>
            </div>
          </div>
          <div className="ab-founder__image-col ab-reveal">
            <div className="ab-founder__img-frame">
              <img
                className="ab-founder__img"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&h=780&q=80"
                alt="Sarthak Singh, Founder of KesariX"
                loading="lazy"
              />
              <div className="ab-founder__img-caption">
                <span className="ab-founder__img-caption-name">Sarthak Singh</span>
                <span className="ab-founder__img-caption-role">Founder & CEO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. CORE VALUES
         ══════════════════════════════════════ */}
      <section className="ab-section ab-values ab-blue">
        <div className="ab-values__inner">
          <div className="ab-values__header ab-reveal">
            <span className="ab-eyebrow ab-eyebrow--light">
              <span className="ab-eyebrow-dot" />
              Core Values
            </span>
            <h2 className="ab-title-huge">
              Our <em className="ab-italic">Principles.</em>
            </h2>
            <p className="ab-desc-large">
              Four principles guide every architecture decision, every code review, and every client call.
            </p>
          </div>
          <div className="ab-values-grid">
            {VALUES.map((v) => (
              <div className="ab-value-card" key={v.num}>
                <div className="ab-value-card__num">{v.num}</div>
                <h3 className="ab-value-card__title">{v.title}</h3>
                <p className="ab-value-card__desc">{v.desc}</p>
                <div className="ab-value-card__line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. TIMELINE — MILESTONES
         ══════════════════════════════════════ */}
      <section className="ab-section ab-history ab-light">
        <div className="ab-history__inner">
          <div className="ab-history__header ab-reveal">
            <span className="ab-eyebrow">
              <span className="ab-eyebrow-dot" />
              Company Milestones
            </span>
            <h2 className="ab-title-huge">
              The Road to <br />
              <em className="ab-italic">Scale.</em>
            </h2>
          </div>
          <div className="ab-history-track">
            <div className="ab-history-track__line" />
            {TIMELINE.map((item, i) => (
              <div className="ab-milestone" key={i}>
                <div className="ab-milestone__node">
                  <div className="ab-milestone__node-core" />
                </div>
                <div className="ab-milestone__card">
                  <div className="ab-milestone__bg" />
                  <div className="ab-milestone__header">
                    <span className="ab-milestone__period">{item.period}</span>
                    <span className="ab-milestone__badge">{item.badge}</span>
                  </div>
                  <h3 className="ab-milestone__title">{item.event}</h3>
                  <p className="ab-milestone__desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. TEAM
         ══════════════════════════════════════ */}
      <section className="ab-section ab-team ab-blue">
        <div className="ab-team__inner">
          <div className="ab-team__header ab-reveal">
            <span className="ab-eyebrow ab-eyebrow--light">
              <span className="ab-eyebrow-dot" />
              The Team
            </span>
            <h2 className="ab-title-huge">
              Built by People Who <br />
              <em className="ab-italic">Give a Damn.</em>
            </h2>
            <p className="ab-desc-large">
              Six specialists across AI, engineering, finance, and growth — all aligned on one mission.
            </p>
          </div>
          <div className="ab-team-grid">
            {TEAM.map((member) => (
              <div className="ab-team-card" key={member.name}>
                <div className="ab-team-card__img-wrap">
                  <img
                    className="ab-team-card__img"
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                  />
                  {member.featured && (
                    <div className="ab-team-card__featured">Founder</div>
                  )}
                  <div className="ab-team-card__overlay">
                    <p className="ab-team-card__bio">{member.bio}</p>
                  </div>
                </div>
                <div className="ab-team-card__info">
                  <div className="ab-team-card__name-row">
                    <h3 className="ab-team-card__name">{member.name}</h3>
                  </div>
                  <span className="ab-team-card__role">{member.role}</span>
                  <div className="ab-team-card__tags">
                    {member.tags.map((t) => (
                      <span className="ab-team-card__tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          9. CTA — WORK WITH US
         ══════════════════════════════════════ */}
      <section className="ab-section ab-cta">
        <div className="ab-cta__glow" />
        <div className="ab-cta__grid-bg" />
        <div className="ab-cta__inner ab-reveal">
          <span className="ab-eyebrow">
            <span className="ab-eyebrow-dot" />
            Ready to build?
          </span>
          <h2 className="ab-cta__heading">
            Let's Build <br />
            <em className="ab-italic">Something Remarkable.</em>
          </h2>
          <p className="ab-cta__body">
            Whether you're launching a product, scaling an existing system, or integrating AI into your operations — we're the team that ships.
          </p>
          <div className="ab-cta__btns">
            <Link to="/contact" className="ab-cta-btn ab-cta-btn--primary">
              Work With Us
              <span className="ab-cta-btn__arrow">→</span>
            </Link>
            <Link to="/work" className="ab-cta-btn ab-cta-btn--ghost">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
