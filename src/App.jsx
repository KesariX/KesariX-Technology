import './App.css'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ShaderProvider, useShader } from './context/ShaderContext'
import { ThemeProvider } from './context/ThemeContext'
import { useLenis } from './hooks/useLenis'
import SEO from './components/SEO/SEO'

/*
  ─── EAGERLY LOADED ──────────────────────────────────────────────────────────
  These are part of the critical home-page path and must be available
  immediately. They stay in the main bundle.
*/
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
import ChatBot       from './components/ChatBot/ChatBot'
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

const AgenticSystems     = lazy(() => import('./components/Services/AgenticSystems'))
const WorkflowEngines    = lazy(() => import('./components/Services/WorkflowEngines'))

/*
  Minimal fallback shown while a lazy page chunk downloads.
  Dark background matches the site so there's no flash/flicker.
*/
function PageLoader() {
  return <div className="page-loader" aria-hidden="true" />
}

const HOME_FAQS = [
  {
    question: 'What services does KesariX Technology offer?',
    answer: 'KesariX Technology offers end-to-end AI development (LLMs, RAG, AI agents, ChatGPT/Claude/Gemini integration), full-stack web development (React, Next.js, Node.js), mobile app development (Flutter, React Native), enterprise software (CRM, ERP, SaaS), and AI-powered workflow automation (n8n, Make, Zapier, custom pipelines).',
  },
  {
    question: 'Where is KesariX Technology located?',
    answer: 'KesariX Technology is headquartered in Vadodara, Gujarat, India. We serve clients across India (Mumbai, Delhi, Bangalore, Hyderabad, Pune, Chennai, Ahmedabad, and all major cities) and internationally across the USA, UK, Canada, Australia, UAE, and Europe.',
  },
  {
    question: 'How much does it cost to build an AI solution or website with KesariX?',
    answer: 'Project costs vary by scope. A business website typically starts at ₹25,000–₹1,50,000. A custom AI chatbot or agent starts at ₹50,000–₹5,00,000 depending on integrations. Enterprise platforms and SaaS products are scoped individually. Contact us for a free discovery call and detailed estimate.',
  },
  {
    question: 'Can KesariX Technology integrate ChatGPT, Claude, or Gemini into my business?',
    answer: 'Yes. We specialize in integrating OpenAI GPT-4, Anthropic Claude, and Google Gemini into business workflows — including custom AI chatbots, document analysis systems, RAG-based knowledge bases, and autonomous AI agents tailored to your data and processes.',
  },
  {
    question: 'Does KesariX Technology develop mobile apps?',
    answer: 'Yes. We build cross-platform iOS and Android mobile apps using Flutter and React Native, as well as native apps using Swift and Kotlin. Our mobile apps include Firebase integrations, real-time features, payment gateways, and custom native modules.',
  },
  {
    question: 'What is the typical project timeline at KesariX Technology?',
    answer: 'A standard business website takes 2–4 weeks. A mobile app or SaaS platform takes 6–16 weeks. Custom AI solutions take 4–12 weeks depending on complexity. We use agile 2-week sprints with continuous delivery and stakeholder demos.',
  },
  {
    question: 'Does KesariX Technology provide post-launch support and maintenance?',
    answer: 'Yes. We offer ongoing maintenance packages covering bug fixes, feature additions, performance monitoring, security updates, and cloud infrastructure management. Our team is available via email, WhatsApp, and scheduled calls.',
  },
  {
    question: 'Can KesariX Technology build a complete CRM or ERP system for my business?',
    answer: 'Absolutely. We develop fully custom CRM systems, ERP platforms, HRMS solutions, inventory management systems, and billing software tailored to your specific business processes — not off-the-shelf tools that require adapting your workflow to their limitations.',
  },
]

const HOME_BREADCRUMBS = [{ name: 'Home', url: '/' }]

const HOME_RATING = { ratingValue: '4.9', reviewCount: '47', bestRating: '5' }

function PageContent() {
  const shaderRef = useShader()
  useLenis(shaderRef)

  return (
    <>
      <SEO 
        title="KesariX Technology — AI Development & Software Company India"
        description="KesariX Technology builds production AI agents, LLMs, RAG systems, enterprise web platforms, mobile apps & intelligent automation. 50+ projects shipped. 98% client satisfaction. Based in Vadodara, India. Get a free discovery call."
        keywords="AI Development Company India, AI Agency Vadodara, LLM Development, GPT Integration, RAG Development, Web Development Company India, React Development, Full Stack Development, Mobile App Development, Flutter, Software Company Vadodara Gujarat, AI Automation"
        canonicalUrl="/"
        isHomePage={true}
        breadcrumbs={HOME_BREADCRUMBS}
        faqs={HOME_FAQS}
        aggregateRating={HOME_RATING}
      />
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

              <Route path="/service/agentic-systems"     element={<WithNav><AgenticSystems /></WithNav>} />
              <Route path="/service/workflow-engines"    element={<WithNav><WorkflowEngines /></WithNav>} />

              <Route path="*" element={<><Nav /><NotFound /></>} />
            </Routes>
          </Suspense>

          {/* Global persistent widgets — always present, not part of Suspense */}
          <ChatBot />
          <WhatsApp />
          <CookieBanner />
        </ShaderProvider>
      </Router>
    </ThemeProvider>
  )
}
