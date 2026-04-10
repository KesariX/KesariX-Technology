import { motion } from 'framer-motion'
import { LinkedinIcon, Github, Twitter } from 'lucide-react'
import './styles/Team.css'

export default function Team() {
  const team = [
    {
      name: 'Alex Turner',
      role: 'CEO & Co-Founder',
      expertise: 'AI Strategy, Product Vision',
      bio: '10+ years building AI products at scale for enterprise leaders.',
      initials: 'AT',
      social: ['linkedin', 'twitter']
    },
    {
      name: 'Maya Chen',
      role: 'Lead AI Engineer',
      expertise: 'LLMs, Vision, MLOps',
      bio: 'Former ML researcher turned startup builder optimizing models.',
      initials: 'MC',
      social: ['linkedin', 'github']
    },
    {
      name: 'Ryan Brooks',
      role: 'Hardware Architect',
      expertise: 'React, Node, Cloud',
      bio: 'Full-stack architect obsessed with hyper-performance scaling.',
      initials: 'RB',
      social: ['github', 'twitter']
    },
    {
      name: 'Leila Nour',
      role: 'Creative Director',
      expertise: 'UI/UX, Design Systems',
      bio: 'Creating design systems that feel as deeply satisfying as they look.',
      initials: 'LN',
      social: ['linkedin', 'github', 'twitter']
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section className="kx-team section-padding" id="team">
      <div className="section-container">
        {/* Header */}
        <div className="kx-team__header">
          <span className="kx-team__eyebrow">The Minds Behind It</span>
          <h2 className="kx-team__title">
            Built by People Who
            <br />
            Give a Damn
          </h2>
        </div>

        {/* Interactive Team Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="kx-team__grid"
        >
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="kx-team__card"
            >
              {/* Massive Center Initials Watermark */}
              <div className="kx-team__card-graphic">{member.initials}</div>
              
              {/* Top ambient glow */}
              <div className="kx-team__card-glow" />

              {/* Bottom Content Reveal Panel */}
              <div className="kx-team__card-content">
                <div className="kx-team__card-header">
                  <h3 className="kx-team__name">{member.name}</h3>
                  <p className="kx-team__role">{member.role}</p>
                </div>

                {/* Hidden Details expanding via CSS Grid rows trick */}
                <div className="kx-team__hidden-details">
                  <div className="kx-team__hidden-inner">
                    <p className="kx-team__bio">{member.bio}</p>
                    
                    <div className="kx-team__skills">
                      {member.expertise.split(', ').map((skill) => (
                        <span key={skill} className="kx-team__skill">{skill}</span>
                      ))}
                    </div>

                    <div className="kx-team__social">
                      {member.social.includes('linkedin') && (
                         <button className="kx-team__social-btn" aria-label="LinkedIn"><LinkedinIcon size={18} /></button>
                      )}
                      {member.social.includes('github') && (
                         <button className="kx-team__social-btn" aria-label="GitHub"><Github size={18} /></button>
                      )}
                      {member.social.includes('twitter') && (
                         <button className="kx-team__social-btn" aria-label="Twitter"><Twitter size={18} /></button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
