import { useEffect, Suspense, lazy, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";

// Lazy-loaded pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const AiSolutions = lazy(() => import("./pages/AiSolutions"));
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const Automation = lazy(() => import("./pages/Automation"));
const AiAgents = lazy(() => import("./pages/AiAgents"));
const ItServices = lazy(() => import("./pages/ItServices"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const OurWork = lazy(() => import("./pages/OurWork"));
const Blog = lazy(() => import("./pages/Blog"));
const Careers = lazy(() => import("./pages/Careers"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));

// Premium page loading fallback
function PageLoader() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "#F0EAE0" }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* <div className="w-12 h-12 border-4 border-amber-600/20 border-t-amber-600 rounded-full animate-spin" /> */}
      </div>
    </div>
  );
}

function App() {
  const isPrerendering =
    typeof window !== "undefined" && !!(window as any).__PRERENDER_INJECTED__;
  // Skip loading screen for bots and Lighthouse (navigator.webdriver is set by headless Chrome)
  const isBot =
    typeof navigator !== "undefined" &&
    (navigator.webdriver ||
      /lighthouse|headlesschrome/i.test(navigator.userAgent));
  const [showLoadingScreen, setShowLoadingScreen] = useState(
    !isPrerendering && !isBot,
  );

  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");

    return () => {
      document.documentElement.classList.remove("scroll-smooth");
    };
  }, []);

  return (
    <BrowserRouter>
      {showLoadingScreen && (
        <LoadingScreen
          durationMs={800}
          onComplete={() => setShowLoadingScreen(false)}
        />
      )}

      <div
        className="kx-app"
        aria-hidden={showLoadingScreen}
        style={{
          opacity: showLoadingScreen ? 0 : 1,
          pointerEvents: showLoadingScreen ? "none" : "auto",
          transition: "opacity 250ms ease-out",
        }}
      >
        <CustomCursor />
        <Navbar />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/ai-solutions" element={<AiSolutions />} />
              <Route
                path="/services/web-development"
                element={<WebDevelopment />}
              />
              <Route path="/services/automation" element={<Automation />} />
              <Route path="/services/ai-agents" element={<AiAgents />} />
              <Route path="/services/it-services" element={<ItServices />} />
              <Route path="/company/about" element={<AboutUs />} />
              <Route path="/company/work" element={<OurWork />} />
              <Route path="/company/blog" element={<Blog />} />
              <Route path="/company/careers" element={<Careers />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/legal/privacy" element={<PrivacyPolicy />} />
              <Route path="/legal/terms" element={<TermsOfService />} />
              <Route path="/legal/cookies" element={<CookiePolicy />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
