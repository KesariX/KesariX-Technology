import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ShaderProvider, useShader } from './context/ShaderContext'
import { ThemeProvider } from './context/ThemeContext'
import { useLenis } from './hooks/useLenis'

import Curtain        from './components/Curtain/Curtain'
import Nav            from './components/Nav/Nav'
import Hero           from './components/Hero/Hero'
import TrustedBy      from './components/TrustedBy/TrustedBy'
import Marquee        from './components/Marquee/Marquee'
import Manifesto      from './components/Manifesto/Manifesto'
import Capabilities   from './components/Capabilities/Capabilities'
import WorkReel       from './components/WorkReel/WorkReel'
import Process        from './components/Process/Process'
import Stats          from './components/Stats/Stats'
import Testimonials   from './components/Testimonials/Testimonials'
import Team           from './components/Team/Team'
import TechStack      from './components/TechStack/TechStack'
import BottomMarquee  from './components/BottomMarquee/BottomMarquee'
import Contact        from './components/Contact/Contact'
import TweaksPanel    from './components/TweaksPanel/TweaksPanel'
import WhatsApp       from './components/WhatsApp/WhatsApp'
import CookieBanner   from './components/CookieBanner/CookieBanner'

// Pages
import OurWork          from './components/OurWork/OurWork'
import AboutKesariX     from './components/AboutKesariX/AboutKesariX'
import Careers          from './components/Careers/Careers'
import Blog             from './components/Blog/Blog'
import ContactPage      from './components/ContactPage/ContactPage'
import Pricing          from './components/Pricing/Pricing'
import BlogPost         from './components/BlogPost/BlogPost'
import PrivacyPolicy    from './components/PrivacyPolicy/PrivacyPolicy'
import Terms            from './components/Terms/Terms'
import CookiePolicy     from './components/CookiePolicy/CookiePolicy'
import NotFound         from './components/NotFound/NotFound'

// Service pages
import NeuralArchitecture from './components/Services/NeuralArchitecture'
import ProductEngineering from './components/Services/ProductEngineering'
import CloudBackbone      from './components/Services/CloudBackbone'
import AgenticSystems     from './components/Services/AgenticSystems'
import WorkflowEngines    from './components/Services/WorkflowEngines'

function PageContent() {
  const shaderRef = useShader()
  useLenis(shaderRef)

  return (
    <>
      <Curtain />
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

function WithNav({ children }) {
  return <><Nav />{children}<Contact /></>
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ShaderProvider>
          <Routes>
            <Route path="/"                             element={<PageContent />} />
            <Route path="/work"                         element={<WithNav><OurWork /></WithNav>} />
            <Route path="/about"                        element={<WithNav><AboutKesariX /></WithNav>} />
            <Route path="/careers"                      element={<WithNav><Careers /></WithNav>} />
            <Route path="/blog"                         element={<><Nav /><Blog /><Contact /></>} />
            <Route path="/blog/:id"                     element={<><Nav /><BlogPost /><Contact /></>} />
            <Route path="/contact"                      element={<><Nav /><ContactPage /></>} />
            <Route path="/pricing"                      element={<><Nav /><Pricing /><Contact /></>} />
            <Route path="/privacy-policy"               element={<><Nav /><PrivacyPolicy /><Contact /></>} />
            <Route path="/terms"                        element={<><Nav /><Terms /><Contact /></>} />
            <Route path="/cookie-policy"                element={<><Nav /><CookiePolicy /><Contact /></>} />
            <Route path="/service/neural-architecture"  element={<WithNav><NeuralArchitecture /></WithNav>} />
            <Route path="/service/product-engineering"  element={<WithNav><ProductEngineering /></WithNav>} />
            <Route path="/service/cloud-backbone"       element={<WithNav><CloudBackbone /></WithNav>} />
            <Route path="/service/agentic-systems"      element={<WithNav><AgenticSystems /></WithNav>} />
            <Route path="/service/workflow-engines"     element={<WithNav><WorkflowEngines /></WithNav>} />
            <Route path="*"                             element={<><Nav /><NotFound /></>} />
          </Routes>

          {/* Global persistent widgets */}
          <WhatsApp />
          <CookieBanner />
        </ShaderProvider>
      </Router>
    </ThemeProvider>
  )
}
