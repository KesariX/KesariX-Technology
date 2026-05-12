import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ShaderProvider, useShader } from './context/ShaderContext'
import { useLenis } from './hooks/useLenis'

import Curtain      from './components/Curtain/Curtain'
// import Cursor       from './components/Cursor/Cursor'
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

// Pages
import OurWork from './components/OurWork/OurWork'
import AboutKesariX from './components/AboutKesariX/AboutKesariX'
import Careers from './components/Careers/Careers'
import Blog from './components/Blog/Blog'
import ContactPage from './components/ContactPage/ContactPage'

// Service pages
import NeuralArchitecture from './components/Services/NeuralArchitecture'
import ProductEngineering from './components/Services/ProductEngineering'
import CloudBackbone from './components/Services/CloudBackbone'
import AgenticSystems from './components/Services/AgenticSystems'
import WorkflowEngines from './components/Services/WorkflowEngines'

function PageContent() {
  const shaderRef = useShader()
  useLenis(shaderRef)

  return (
    <>
      <Curtain />
      {/* <Cursor /> */}
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
    <Router>
      <ShaderProvider>
        <Routes>
          <Route path="/" element={<PageContent />} />
          <Route path="/work" element={<><Nav /><OurWork /><Contact /></>} />
          <Route path="/about" element={<><Nav /><AboutKesariX /><Contact /></>} />
          <Route path="/careers" element={<><Nav /><Careers /><Contact /></>} />
          <Route path="/blog" element={<><Nav /><Blog /><Contact /></>} />
          <Route path="/contact" element={<><Nav /><ContactPage /></>} />
          <Route path="/service/neural-architecture" element={<><Nav /><NeuralArchitecture /><Contact /></>} />
          <Route path="/service/product-engineering" element={<><Nav /><ProductEngineering /><Contact /></>} />
          <Route path="/service/cloud-backbone" element={<><Nav /><CloudBackbone /><Contact /></>} />
          <Route path="/service/agentic-systems" element={<><Nav /><AgenticSystems /><Contact /></>} />
          <Route path="/service/workflow-engines" element={<><Nav /><WorkflowEngines /><Contact /></>} />
        </Routes>
      </ShaderProvider>
    </Router>
  )
}
