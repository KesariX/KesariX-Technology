import './App.css'
import { ShaderProvider, useShader } from './context/ShaderContext'
import { useLenis } from './hooks/useLenis'

import Curtain      from './components/Curtain/Curtain'
import Cursor       from './components/Cursor/Cursor'
import Nav          from './components/Nav/Nav'
import Hero         from './components/Hero/Hero'
import TrustedBy    from './components/TrustedBy/TrustedBy'
import Marquee      from './components/Marquee/Marquee'
import Manifesto    from './components/Manifesto/Manifesto'
import Capabilities from './components/Capabilities/Capabilities'
import WorkReel     from './components/WorkReel/WorkReel'
import Process      from './components/Process/Process'
import Stats        from './components/Stats/Stats'
import Testimonials from './components/Testimonials/Testimonials'
import Team         from './components/Team/Team'
import TechStack    from './components/TechStack/TechStack'
import BottomMarquee from './components/BottomMarquee/BottomMarquee'
import Contact      from './components/Contact/Contact'
import TweaksPanel  from './components/TweaksPanel/TweaksPanel'

function PageContent() {
  const shaderRef = useShader()
  useLenis(shaderRef)

  return (
    <>
      <Curtain />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <TrustedBy />
        <Marquee />
        <Manifesto />
        <Capabilities />
        <WorkReel />
        <Process />
        <Stats />
        <Testimonials />
        <Team />
        <TechStack />
        <BottomMarquee />
        <Contact />
      </main>
      <TweaksPanel />
    </>
  )
}

export default function App() {
  return (
    <ShaderProvider>
      <PageContent />
    </ShaderProvider>
  )
}
