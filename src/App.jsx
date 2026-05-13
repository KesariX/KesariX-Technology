import './App.css'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ShaderProvider, useShader } from './context/ShaderContext'
import { ThemeProvider } from './context/ThemeContext'
import { useLenis } from './hooks/useLenis'

/*
  ─── EAGERLY LOADED ──────────────────────────────────────────────────────────
  These are part of the critical home-page path and must be available
  immediately. They stay in the main bundle.
*/
import Curtain       from './components/Curtain/Curtain'
import Nav           from './components/Nav/Nav'
import Hero          from './components/Hero/Hero'
import TrustedBy     from './components/TrustedBy/TrustedBy'
import Marquee       from './components/Marquee/Marquee'
import Manifesto     from './components/Manifesto/Manifesto'
import Capabilities  from './components/Capabilities/Capabilities'
import WorkReel      from './components/WorkReel/WorkReel'
import Process       from './components/Process/Process'
import Stats         from './components/Stats/Stats'
import Testimonials  from './components/Testimonials/Testimonials'
import Team          from './components/Team/Team'
import TechStack     from './components/TechStack/TechStack'
import BottomMarquee from './components/BottomMarquee/BottomMarquee'
import Contact       from './components/Contact/Contact'
import TweaksPanel   from './components/TweaksPanel/TweaksPanel'
import WhatsApp      from './components/WhatsApp/WhatsApp'
import CookieBanner  from './components/CookieBanner/CookieBanner'

/*
  ─── LAZILY LOADED PAGES ─────────────────────────────────────────────────────
  Each of these becomes its own JS chunk. It is only downloaded when the user
  actually navigates to that route — not on the initial page load.
  This removes ~15 components + their dependencies from the initial bundle,
  cutting first-load JS by 30–50 % depending on route.
*/
const OurWork           = lazy(() => import('./components/OurWork/OurWork'))
const AboutKesariX      = lazy(() => import('./components/AboutKesariX/AboutKesariX'))
const Careers           = lazy(() => import('./components/Careers/Careers'))
const Blog              = lazy(() => import('./components/Blog/Blog'))
const ContactPage       = lazy(() => import('./components/ContactPage/ContactPage'))
const Pricing           = lazy(() => import('./components/Pricing/Pricing'))
const BlogPost          = lazy(() => import('./components/BlogPost/BlogPost'))
const PrivacyPolicy     = lazy(() => import('./components/PrivacyPolicy/PrivacyPolicy'))
const Terms             = lazy(() => import('./components/Terms/Terms'))
const CookiePolicy      = lazy(() => import('./components/CookiePolicy/CookiePolicy'))
const NotFound          = lazy(() => import('./components/NotFound/NotFound'))
const NeuralArchitecture = lazy(() => import('./components/Services/NeuralArchitecture'))
const ProductEngineering = lazy(() => import('./components/Services/ProductEngineering'))
const CloudBackbone      = lazy(() => import('./components/Services/CloudBackbone'))
const AgenticSystems     = lazy(() => import('./components/Services/AgenticSystems'))
const WorkflowEngines    = lazy(() => import('./components/Services/WorkflowEngines'))

/*
  Minimal fallback shown while a lazy page chunk downloads.
  Dark background matches the site so there's no flash/flicker.
*/
function PageLoader() {
  return <div className="page-loader" aria-hidden="true" />
}

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
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Home — eager, no Suspense penalty */}
              <Route path="/" element={<PageContent />} />

              {/* All other routes — lazy loaded */}
              <Route path="/work"          element={<WithNav><OurWork /></WithNav>} />
              <Route path="/about"         element={<WithNav><AboutKesariX /></WithNav>} />
              <Route path="/careers"       element={<WithNav><Careers /></WithNav>} />
              <Route path="/blog"          element={<><Nav /><Blog /><Contact /></>} />
              <Route path="/blog/:id"      element={<><Nav /><BlogPost /><Contact /></>} />
              <Route path="/contact"       element={<><Nav /><ContactPage /></>} />
              <Route path="/pricing"       element={<><Nav /><Pricing /><Contact /></>} />
              <Route path="/privacy-policy" element={<><Nav /><PrivacyPolicy /><Contact /></>} />
              <Route path="/terms"         element={<><Nav /><Terms /><Contact /></>} />
              <Route path="/cookie-policy" element={<><Nav /><CookiePolicy /><Contact /></>} />

              <Route path="/service/neural-architecture" element={<WithNav><NeuralArchitecture /></WithNav>} />
              <Route path="/service/product-engineering" element={<WithNav><ProductEngineering /></WithNav>} />
              <Route path="/service/cloud-backbone"      element={<WithNav><CloudBackbone /></WithNav>} />
              <Route path="/service/agentic-systems"     element={<WithNav><AgenticSystems /></WithNav>} />
              <Route path="/service/workflow-engines"    element={<WithNav><WorkflowEngines /></WithNav>} />

              <Route path="*" element={<><Nav /><NotFound /></>} />
            </Routes>
          </Suspense>

          {/* Global persistent widgets — always present, not part of Suspense */}
          <WhatsApp />
          <CookieBanner />
        </ShaderProvider>
      </Router>
    </ThemeProvider>
  )
}
