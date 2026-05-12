import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Team.css'

gsap.registerPlugin(ScrollTrigger)

const MEMBERS = [
  {
    initials: 'SS',
    name: 'Sarthak Singh',
    role: 'CEO',
    bio: "Visionary founder driving KesariX's mission to deliver AI-powered products that create real business impact.",
    tags: ['Strategy', 'Vision', 'Product'],
    bg: 'avatar--saffron',
    featured: true,
  },
  {
    initials: 'RP',
    name: 'Ronak Parmar',
    role: 'AI Engineering Lead',
    bio: 'Tech lead with a passion for architecting robust AI systems that just work.',
    tags: ['LLMs', 'Vision', 'MLOps'],
    bg: 'avatar--blue',
  },
  {
    initials: 'GM',
    name: 'Govind Mishra',
    role: 'CFO',
    bio: 'Finance strategist ensuring sustainable growth and operational excellence.',
    tags: ['Finance', 'Operations', 'Growth'],
    bg: 'avatar--ink',
  },
  {
    initials: 'HP',
    name: 'Harsh Prajapati',
    role: 'Web Development Lead',
    bio: 'Frontend engineer building fast, beautiful web experiences with modern technologies.',
    tags: ['React', 'Next.js', 'UI/UX'],
    bg: 'avatar--saffron',
  },
  {
    initials: 'PY',
    name: 'Prince Yadav',
    role: 'CMO',
    bio: 'Marketing architect crafting brand narratives that connect audiences and drive measurable growth.',
    tags: ['Brand', 'SEO', 'Campaigns'],
    bg: 'avatar--ember',
  },
  {
    initials: 'JP',
    name: 'Jay Padhiyar',
    role: 'CMO',
    bio: 'Growth specialist with expertise in digital campaigns and performance marketing.',
    tags: ['Digital', 'Analytics', 'Growth'],
    bg: 'avatar--teal',
  },
]

export default function Team() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia()
      
      // Pin the left section while the right side scrolls (Desktop only)
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: '.team__inner',
          start: 'top 15%',
          end: 'bottom 85%',
          pin: '.team__head',
          pinSpacing: false,
        })
      })

      gsap.fromTo('.team__eyebrow, .team__title, .team__count-pill', 
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: '.team__head', start: 'top 82%' },
        }
      )
      gsap.fromTo('.team__row', 
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: '.team__list', start: 'top 80%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="team" id="team" ref={sectionRef}>
      <div className="team__inner">

        <div className="team__head">
          <span className="team__eyebrow">
            <span className="team__eyebrow-dot"></span>
            The Minds Behind It
          </span>
          <div className="team__head-row">
            <h2 className="team__title">
              Built by People Who<br />
              <span className="team__title-italic">Give a Damn.</span>
            </h2>
            <div className="team__head-meta">
              <div className="team__count-pill">
                <span className="team__count-num">{MEMBERS.length}</span>
                <span className="team__count-sep" />
                <span className="team__count-label">Experts across<br />Strategy, Tech & Growth</span>
              </div>
            </div>
          </div>
        </div>

        <div className="team__list">
          {MEMBERS.map((m) => (
            <div className="team__row" key={m.initials}>
              
              <div className="team__row-main">
                <div className={`team__avatar ${m.bg}`}>{m.initials}</div>
                <div className="team__row-info">
                  <h3 className="team__name">{m.name}</h3>
                  <div className="team__role-badge">{m.role}</div>
                </div>
              </div>

              <div className="team__row-desc">
                {m.bio && <p className="team__bio">{m.bio}</p>}
              </div>

              {m.tags && (
                <div className="team__tags">
                  {m.tags.map(t => (
                    <span className="team__tag" key={t}>{t}</span>
                  ))}
                </div>
              )}
              
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
