import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Initial animations
    gsap.fromTo(logoRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.2 });
    gsap.fromTo(linksRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", delay: 0.4 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // Scroll down -> hide
      } else {
        setShowNavbar(true);  // Scroll up -> show
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = ["Home", "About", "Portfolio", "Projects", "Contact"];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-4 md:px-8 py-4 md:py-6 bg-transparent transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        {/* Logo */}
        <a
          href="#"
          ref={logoRef}
          className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight group shrink-0"
        >
          <span className="text-black transition-colors duration-300 group-hover:text-gray-800">Arjun</span>
          <span className="text-[#facc15] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]">.K</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              ref={(el) => (linksRef.current[index] = el)}
              className="relative text-sm uppercase tracking-widest font-semibold text-black hover:text-gray-800 transition-colors duration-300 group"
            >
              {link}
              <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-[#facc15] rounded-full transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2 sm:gap-4 shrink-0">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col gap-1.5 p-1 sm:p-2 z-50 relative shrink-0"
          >
            <span className={`w-5 sm:w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-5 sm:w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-5 sm:w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-zinc-950/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 transition-all duration-500 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {navLinks.map((link) => (
          <a
            key={`mobile-${link}`}
            href={`#${link.toLowerCase()}`}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-4xl font-black text-gray-400 hover:text-[#facc15] transition-colors duration-300"
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
