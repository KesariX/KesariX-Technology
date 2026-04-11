import { useEffect } from 'react'
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
