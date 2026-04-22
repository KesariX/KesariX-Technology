import { motion } from "framer-motion";
import { LinkedinIcon, Github, Twitter } from "lucide-react";
import "./styles/Team.css";

export default function Team() {
  const team = [
    {
      name: "Sarthak Singh",
      role: "CEO",
      expertise: "AI Strategy, Product Vision",
      bio: "3+ years building AI products at scale for enterprise leaders.",
      initials: "SS",
      social: {
        linkedin: "https://www.linkedin.com/in/sarthak-singh-34296b223",
        github: "https://github.com/Sarthak-1004",
        twitter: "https://twitter.com/username",
      },
    },
    {
      name: "Ronak Parmar",
      role: "AI Engineering Lead",
      expertise: "LLMs, Vision, MLOps",
      bio: "Tech lead with a passion for architecting robust AI systems that just work.",
      initials: "RP",
      social: {
        linkedin: "https://www.linkedin.com/in/ronak-parmar-/",
        github: "https://github.com/ronak-create",
        twitter: "https://x.com/RonakParmar__",
      },
    },
    {
      name: "Govind Mishra",
      role: "CFO",
      expertise: "Finance, Analysis, Operations",
      bio: "Finance with a knack for making numbers tell stories.",
      initials: "GM",
      social: {
        linkedin: "https://linkedin.com/in/username",
        github: "https://github.com/username",
        twitter: "https://twitter.com/username",
      },
    },
    {
      name: "Prince Yadav",
      role: "CMO",
      expertise: "Leagal, Marketing, Growth",
      bio: "Expert in Legal Strategy, Marketing, and Growth, helping businesses stay compliant, acquire customers, and scale profitably.",
      initials: "PY",
      social: {
        linkedin: "https://linkedin.com/in/username",
        github: "https://github.com/username",
        twitter: "https://twitter.com/username",
      },
    },
    {
      name: "Jay Padhiyar",
      role: "CMO",
      expertise: "Leagal, Marketing, Growth",
      bio: "Growth hacker with a legal background, bridging the gap between innovation and compliance.",
      initials: "JP",
      social: {
        linkedin: "https://linkedin.com/in/username",
        github: "https://github.com/username",
        twitter: "https://twitter.com/username",
      },
    },
    {
      name: "Harsh Prajapati",
      role: "Web Development Lead",
      expertise: "UI/UX, Design Systems",
      bio: "Creating design systems that feel as deeply satisfying as they look.",
      initials: "HP",
      social: {
        linkedin: "https://linkedin.com/in/username",
        github: "https://github.com/username",
        twitter: "https://twitter.com/username",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

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
          viewport={{ once: true, margin: "-50px" }}
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
                      {member.expertise.split(", ").map((skill) => (
                        <span key={skill} className="kx-team__skill">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="kx-team__social">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="kx-team__social-btn"
                          aria-label="LinkedIn"
                        >
                          <LinkedinIcon size={18} />
                        </a>
                      )}

                      {member.social.github && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="kx-team__social-btn"
                          aria-label="GitHub"
                        >
                          <Github size={18} />
                        </a>
                      )}

                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="kx-team__social-btn"
                          aria-label="Twitter"
                        >
                          <Twitter size={18} />
                        </a>
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
  );
}
