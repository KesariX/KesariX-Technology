import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './CapabilitiesPremium.css'

gsap.registerPlugin(ScrollTrigger)

const Icons = {
  Check: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="cp-icon-check">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  ),
  ArrowRight: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cp-icon-arrow">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  ),
  AI: () => (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <circle cx="15.5" cy="8.5" r="1.5"></circle>
      <path d="M9 15c0 1.1.9 2 2 2s2-.9 2-2"></path>
    </svg>
  ),
  Web: () => (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  ),
  Cloud: () => (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19a4.5 4.5 0 0 0 2-8.5A7 7 0 0 0 6 9.5 4.5 4.5 0 0 0 6.5 19Z"></path>
      <rect x="6" y="10" width="12" height="12" rx="2"></rect>
    </svg>
  ),
  Agents: () => (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
      <path d="M2 12h20"></path>
    </svg>
  ),
  Auto: () => (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20"></path>
      <path d="m17 5-5-3-5 3"></path>
      <path d="m17 19-5 3-5-3"></path>
      <path d="M2 12h20"></path>
      <path d="m5 7-3 5 3 5"></path>
      <path d="m19 7 3 5-3 5"></path>
    </svg>
  )
}

const SERVICES = [
  {
    num: '01',
    category: 'AI Solutions',
    icon: Icons.AI,
    headline: 'Build AI that works for your business.',
    desc: 'We create AI assistants, chatbots and intelligent systems that automate support, analyze data and improve decision making.',
    problems: ['Manual repetitive work', 'Customer support overload', 'Lost leads', 'Poor data utilization'],
    deliverables: ['Custom Development', 'Deployment', 'Maintenance', 'Documentation', 'Training'],
    benefits: ['AI Chatbots', 'Custom AI Assistants', 'RAG Systems', 'Document AI', 'Internal Knowledge Base', 'AI Integrations'],
    results: ['Increase productivity', 'Reduce costs', 'Improve customer experience', 'Generate more leads', 'Scale operations'],
    link: '/contact'
  },
  {
    num: '02',
    category: 'Website Development',
    icon: Icons.Web,
    headline: 'High-performance websites that generate more business.',
    desc: 'Fast websites that convert more visitors into customers with modern architecture and premium design.',
    problems: ['Poor online presence', 'Low website performance', 'Low conversion rates', 'Hard to manage content'],
    deliverables: ['Custom Design', 'Frontend Development', 'CMS Integration', 'SEO Setup', 'Analytics'],
    benefits: ['Company Websites', 'SaaS Platforms', 'Admin Dashboards', 'CRM', 'ERP', 'Custom Portals', 'API Integrations'],
    results: ['Fast loading', 'SEO optimized', 'Mobile-first', 'Secure', 'Scalable'],
    link: '/contact'
  },
  {
    num: '03',
    category: 'Process Automation',
    icon: Icons.Auto,
    headline: 'Automate repetitive work and save hundreds of hours.',
    desc: 'Operational pipelines that remove manual tasks and synchronize your tools into one reliable flow.',
    problems: ['Slow business operations', 'Human errors in data entry', 'Disconnected software tools', 'High operational costs'],
    deliverables: ['Workflow Design', 'API Integration', 'Testing', 'Monitoring Setup', 'Team Training'],
    benefits: ['CRM Automation', 'Workflow Automation', 'WhatsApp Automation', 'Email Automation', 'API Integration', 'Reporting'],
    results: ['Save hundreds of hours', 'Eliminate manual errors', 'Sync all platforms', 'Improve team focus', 'Lower overhead'],
    link: '/contact'
  },
  {
    num: '04',
    category: 'AI Agents',
    icon: Icons.Agents,
    headline: 'Autonomous AI employees working 24/7.',
    desc: 'Multi-agent systems capable of reasoning, using tools, and executing complex workflows autonomously.',
    problems: ['High staffing costs', 'Off-hours support gaps', 'Slow research tasks', 'Missed sales follow-ups'],
    deliverables: ['Agent Architecture', 'Tool Integration', 'Memory Systems', 'Guardrails', 'Testing'],
    benefits: ['Sales Agent', 'Customer Support Agent', 'HR Agent', 'Email Agent', 'Research Agent', 'Lead Generation Agent'],
    results: ['24/7 Operation', 'Instant responses', 'Continuous learning', 'Cost-effective scaling', 'Error-free execution'],
    link: '/contact'
  }
]

const OUTCOMES = [
  'Increase Leads', 'Save Time', 'Reduce Costs', 'Automate Operations', 'Scale Faster', 'Better Customer Experience'
]

const WHY_US = [
  { title: 'Business-focused solutions', desc: 'We align our technical decisions with your revenue goals and growth metrics.' },
  { title: 'End-to-end development', desc: 'From strategy and design to deployment and scaling, we handle the entire lifecycle.' },
  { title: 'Modern, scalable architecture', desc: 'We build systems designed to perform flawlessly under heavy load and future growth.' },
  { title: 'Dedicated support', desc: 'Long-term technology partner with transparent communication and rapid response times.' }
]

export default function Capabilities() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ambient Background Animation
      gsap.to('.cp-ambient__orb--blue', {
        x: '8vw',
        y: '8vh',
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      gsap.to('.cp-ambient__orb--orange', {
        x: '-8vw',
        y: '-6vh',
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      // Cinematic Header Reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.cp-header',
          start: 'top 80%',
        }
      })

      tl.fromTo('.cp-header__eyebrow',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
      ).fromTo('.cp-header__title .line',
        { opacity: 0, y: 50, rotationX: -30 },
        { opacity: 1, y: 0, rotationX: 0, duration: 1.2, stagger: 0.15, ease: 'expo.out' },
        "-=0.6"
      ).fromTo('.cp-header__desc',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        "-=0.8"
      )

      // Cards Reveal
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(card,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            }
          }
        )
      })

      // Level 2 & 3 Reveals
      gsap.utils.toArray('.cp-fade-up').forEach(el => {
        gsap.fromTo(el, 
          { opacity: 0, y: 40 },
          { 
            opacity: 1, y: 0, duration: 1, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 90%' }
          }
        )
      })

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleMouseMove = (e, cardElement) => {
    if (!cardElement) return;
    const rect = cardElement.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardElement.style.setProperty('--mouse-x', `${x}px`)
    cardElement.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <section className="capabilities-premium" id="capabilities" ref={sectionRef}>
      
      {/* Ambient Lighting & Atmosphere */}
      <div className="cp-ambient" aria-hidden="true">
        <div className="cp-ambient__orb cp-ambient__orb--blue" />
        <div className="cp-ambient__orb cp-ambient__orb--orange" />
        <div className="cp-ambient__noise" />
      </div>

      <div className="cp-container">
        
        {/* Cinematic Header */}
        <div className="cp-header">
          <div className="cp-header__eyebrow">
            <span className="cp-eyebrow-dot" /> Our Capabilities
          </div>
          <h2 className="cp-header__title">
            <div className="line" style={{ perspective: '1000px' }}>Digital Solutions That</div>
            <div className="line" style={{ perspective: '1000px' }}>
              <em className="italic-accent">Grow Your Business.</em>
            </div>
          </h2>
          <p className="cp-header__desc">
            We help startups, SMEs and enterprises automate operations, build powerful digital products and grow faster using AI, software and cloud technologies.
          </p>
        </div>

        {/* Level 1: What You Need (Service Cards) */}
        <div className="cp-level">
          <h3 className="cp-level__title cp-fade-up">1. What You Need</h3>
          <div className="cp-grid">
            <div className="cp-grid__line cp-grid__line--v" aria-hidden="true" />
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  className={`cp-card-biz ${i % 2 !== 0 ? 'cp-card-biz--offset' : ''}`}
                  key={i}
                  ref={el => cardsRef.current[i] = el}
                  onMouseMove={(e) => handleMouseMove(e, cardsRef.current[i])}
                >
                  <div className="cp-card-biz__glow" aria-hidden="true" />
                  
                  <div className="cp-card-biz__inner">
                    <div className="cp-card-biz__content">
                      <div className="cp-card-biz__header">
                        <div className="cp-card-biz__meta">
                          <span className="cp-card-biz__category">{s.num}. {s.category}</span>
                        </div>
                      </div>
                      
                      <h4 className="cp-card-biz__headline">{s.headline}</h4>
                      <p className="cp-card-biz__desc">{s.desc}</p>
                      
                      <div className="cp-card-biz__lists">
                        <div className="cp-list-group">
                          <h5>Business Problems We Solve</h5>
                          <ul>
                            {s.problems.map((prob, idx) => (
                              <li key={idx}><Icons.Check /> {prob}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="cp-list-group">
                          <h5>Deliverables</h5>
                          <ul>
                            {s.deliverables.map((del, idx) => (
                              <li key={idx}><span className="cp-bullet">•</span> {del}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="cp-card-biz__pills">
                        <h5>Solutions & Technologies</h5>
                        <div className="cp-pills-wrap">
                          {s.benefits.map(tag => (
                            <span className="cp-pill" key={tag}>{tag}</span>
                          ))}
                        </div>
                      </div>

                      <div className="cp-card-biz__results">
                        <h5>Expected Results:</h5>
                        <p>{s.results.join(' • ')}</p>
                      </div>

                      <a href={s.link} className="cp-card-biz__cta" aria-label={`Learn more about ${s.category}`}>
                        <span>Let's Build This</span>
                        <Icons.ArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Level 2: What You'll Get */}
        <div className="cp-level cp-level--outcomes">
          <h3 className="cp-level__title cp-fade-up">2. What You'll Get</h3>
          <div className="cp-outcomes-grid">
            {OUTCOMES.map((outcome, i) => (
              <div className="cp-outcome-card cp-fade-up" key={i}>
                <div className="cp-outcome-icon">
                  <Icons.Check />
                </div>
                <h4 className="cp-outcome-text">{outcome}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Level 3: Why KesariX */}
        <div className="cp-level cp-level--why-us">
          <h3 className="cp-level__title cp-fade-up">3. Why KesariX Technology</h3>
          <div className="cp-why-grid">
            <div className="cp-why-content cp-fade-up">
              {WHY_US.map((item, i) => (
                <div className="cp-why-item" key={i}>
                  <Icons.Check />
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="cp-why-stats cp-fade-up">
              <div className="cp-stat-box">
                <span className="cp-stat-num">5</span>
                <span className="cp-stat-label">Projects Delivered</span>
              </div>
              <div className="cp-stat-box">
                <span className="cp-stat-num">98%</span>
                <span className="cp-stat-label">Client Satisfaction</span>
              </div>
              <div className="cp-stat-box">
                <span className="cp-stat-num">&lt;2h</span>
                <span className="cp-stat-label">Response Time</span>
              </div>
              <div className="cp-stat-box">
                <span className="cp-stat-num">12+</span>
                <span className="cp-stat-label">Countries Served</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
