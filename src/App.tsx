import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import AiSolutions from './pages/AiSolutions'
import WebDevelopment from './pages/WebDevelopment'
import Automation from './pages/Automation'
import AiAgents from './pages/AiAgents'
import ItServices from './pages/ItServices'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import OurWork from './pages/OurWork'
import Blog from './pages/Blog'
import Careers from './pages/Careers'
import PressKit from './pages/PressKit'

import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'

function App() {
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth')
  }, [])

  return (
    <BrowserRouter>
      <div className="kx-app">
        <CustomCursor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/ai-solutions" element={<AiSolutions />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/automation" element={<Automation />} />
            <Route path="/services/ai-agents" element={<AiAgents />} />
            <Route path="/services/it-services" element={<ItServices />} />
            <Route path="/company/about" element={<AboutUs />} />
            <Route path="/company/work" element={<OurWork />} />
            <Route path="/company/blog" element={<Blog />} />
            <Route path="/company/careers" element={<Careers />} />
            <Route path="/company/press" element={<PressKit />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/legal/privacy" element={<PrivacyPolicy />} />
            <Route path="/legal/terms" element={<TermsOfService />} />
            <Route path="/legal/cookies" element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
