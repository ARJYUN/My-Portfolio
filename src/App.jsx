import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Portfolio from './components/Portfolio'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import Projects from './components/Projects'
import Services from './components/Services'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import DesignWorks from './pages/DesignWorks'
import Preloader from './components/Preloader'

import AOS from 'aos'
import 'aos/dist/aos.css'

gsap.registerPlugin(ScrollTrigger);

function MainPortfolio() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });

    // Fix for GSAP ScrollTrigger calculation bugs on production deploy:
    // When elements (like AOS fade-ups or images) change the height of the document,
    // GSAP needs to recalculate the trigger points for pinned sections.
    const refreshGSAP = () => {
      ScrollTrigger.refresh();
    };

    // The most robust fix for production layout shifts:
    // Watch the entire body for ANY height changes (images loading, AOS expanding, etc)
    // and instantly tell GSAP to recalculate all pinned sections.
    const resizeObserver = new ResizeObserver(() => {
      refreshGSAP();
    });
    
    // Start observing immediately
    if (document.body) {
      resizeObserver.observe(document.body);
    }

    // Fallback timers for initial hydration
    const timer1 = setTimeout(refreshGSAP, 500);
    const timer2 = setTimeout(refreshGSAP, 2000);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <main id="home" className={`bg-zinc-950 min-h-screen text-white font-sans selection:bg-[#facc15]/30 overflow-x-hidden ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
      <Navbar />

      {/* Fixed Portfolio Background for Parallax Overlap */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-auto">
        <Portfolio />
      </div>

      {/* Main Content that scrolls OVER the portfolio */}
      <div className="relative w-full overflow-hidden bg-white mt-[100vh] z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.15)] border-t border-white/20">
        <Hero />
        <Welcome />
      </div>

      <Services />

      <Projects />

      <Achievements />

      {/* Contact overlap Parallax */}
      <Contact />

      <div className="relative z-30">
        <Footer />
      </div>

    </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/design-works" element={<DesignWorks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
