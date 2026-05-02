import { useEffect } from 'react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Process from '../components/Process'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import Team from '../components/Team'
import TechStack from '../components/TechStack'
import CTA from '../components/CTA'

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth')
  }, [])

  return (
    <>
      <SEO
        title="KesariX Technology — AI Solutions & Software Engineering"
        description="KesariX Technology engineers high-performance AI agents, machine learning models, and scalable software platforms. From automation to enterprise cloud solutions, we build what's next."
        path="/"
      />
      <Hero />
      <Marquee />
      <Services />
      <Projects />
      <Process />
      <Stats />
      <Testimonials />
      <Team />
      <TechStack />
      <CTA />
    </>
  )
}
