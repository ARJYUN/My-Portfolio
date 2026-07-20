import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import greenImg from '../assets/service/ieeesb.png';
import orangeImg from '../assets/service/triswara.png';
import purpleImg from '../assets/service/bao.png';
import redImg from '../assets/service/cse.png';
import whiteImg from '../assets/service/th.png';
import yellowImg from '../assets/service/ktu.png';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  { img: greenImg, bgColor: '#b66f05ff', title: 'IEEE SB NSSCE Website', desc: 'The official IEEE SB NSSCE website showcasing events, achievements, and student activities.', tag: 'Website', github: 'https://github.com/ARJYUN/IEEE-SB-NSSCE', live: 'https://www.ieeesbnssce.in/' },
  { img: orangeImg, bgColor: '#d6b405ff', title: 'TRISWARA', desc: 'An AI-powered web app that transforms Carnatic swaras from images into interactive multi-layered musical compositions.', tag: 'WEB APP', github: 'https://github.com/ARJYUN/TriSwara', live: 'https://triswara.vercel.app/' },
  { img: purpleImg, bgColor: '#953030ff', title: 'BLOOD AND ORGAN DONATION MANAGEMENT SYSTEM', desc: 'A desktop platform that streamlines donor registration, blood inventory, and recipient matching.', tag: 'web app', github: 'https://github.com/ARJYUN/Blood-and-Organ-Donation-Management', live: 'https://github.com/ARJYUN/Blood-and-Organ-Donation-Management' },
  { img: redImg, bgColor: '#441c04ff', title: 'CSE DEPARTMENT NSSCE WEBSITE', desc: 'An informative departmental website providing academic resources, updates, and announcements.', tag: 'website', github: 'https://github.com/ARJYUN/CSE-NSSCE', live: 'https://arjyun.github.io/CSE-NSSCE/' },
  { img: yellowImg, bgColor: '#0a184bff', title: 'KTU COMPASS', desc: 'A smart academic planning tool that predicts grades and helps students achieve their target ESE scores.', tag: 'website', github: 'https://github.com/ARJYUN/KTU-Compass-CIE-to-ESE-Success-Tool-2024-Scheme', live: 'https://arjyun.github.io/KTU-Compass-CIE-to-ESE-Success-Tool-2024-Scheme/' },
  { img: whiteImg, bgColor: '#d78201ff', title: 'TINKERHUB NSSCE Website', desc: 'A dynamic community website connecting students through events, projects, and peer learning.', tag: 'website', github: 'https://github.com/ARJYUN/TinkerHub-NSSCE', live: 'https://arjyun.github.io/TinkerHub-NSSCE/' },
];

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const bgRefs = useRef([]);
  const textRefs = useRef([]);

  const handleScroll = (e) => {
    if (window.innerWidth >= 769) return;
    const container = e.target;
    const center = container.scrollLeft + container.offsetWidth / 2;
    
    let activeIdx = 0;
    let minDiff = Infinity;
    
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const diff = Math.abs(cardCenter - center);
      if (diff < minDiff) {
        minDiff = diff;
        activeIdx = i;
      }
    });

    cardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.to(card, { scale: i === activeIdx ? 1 : 0.9, duration: 0.4, ease: "power2.out", overwrite: "auto" });
      }
    });

    bgRefs.current.forEach((bg, i) => {
      if (bg) gsap.to(bg, { opacity: i === activeIdx ? 1 : 0, duration: 0.4, overwrite: "auto" });
    });
    
    textRefs.current.forEach((txt, i) => {
      if (txt) gsap.to(txt, { opacity: i === activeIdx ? 1 : 0, duration: 0.4, overwrite: "auto" });
    });
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Set initial positions
      const updateCards = (p) => {
        cardsRef.current.forEach((card, i) => {
          if (!card) return;
          const offset = i - p;
          
          // Math for a perfect half-circle curve!
          const radius = window.innerWidth < 768 ? 1200 : 1800; // Slightly tighter circle on mobile
          const angleSpread = window.innerWidth < 768 ? 22 : 18; // Slightly more spread on mobile
          
          const angle = offset * angleSpread;
          const rad = angle * Math.PI / 180;
          
          // Perfect circle formula
          const x = Math.sin(rad) * radius;
          const y = radius - (Math.cos(rad) * radius); // Drops down along the curve
          const scale = Math.max(0.4, 1 - Math.abs(offset) * 0.15);
          const rotateZ = angle; // Tilt the cards so they perfectly follow the curve!
          
          const opacity = Math.max(0.1, 1 - Math.abs(offset) * 0.3);
          const zIndex = Math.round(100 - Math.abs(offset) * 10);

          gsap.set(card, {
            x: x,
            y: y,
            scale: scale,
            rotationZ: rotateZ,
            opacity: opacity,
            zIndex: zIndex,
          });
        });

        // Update solid background colors and text strokes based on active card
        bgRefs.current.forEach((bg, i) => {
            if (!bg) return;
            const itemOpacity = Math.max(0, 1 - Math.abs(i - p));
            gsap.set(bg, { opacity: itemOpacity });
            
            if (textRefs.current[i]) {
                gsap.set(textRefs.current[i], { opacity: itemOpacity });
            }
        });
      };

      // Initialize positions
      updateCards(0);

      // The ScrollTrigger timeline
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=500%", // 500vh of scrolling duration
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress * (servicesData.length - 1);
          updateCards(p);
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="projects"
      ref={sectionRef} 
      className="relative w-full h-screen bg-white text-black overflow-hidden flex items-center justify-center [perspective:1000px]"
    >
      {/* Dynamic Light Background Colors */}
      {servicesData.map((s, i) => (
        <div 
          key={i}
          ref={el => bgRefs.current[i] = el}
          className="absolute inset-0 z-0 pointer-events-none opacity-0"
          style={{ backgroundColor: s.bgColor }}
        />
      ))}

      {/* Massive Background Typography (Transparent with Stroke) */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        {servicesData.map((s, i) => (
          <h1 
            key={`text-${i}`}
            ref={el => textRefs.current[i] = el}
            className="absolute flex flex-col items-center text-[20vw] md:text-[15vw] font-black uppercase text-transparent leading-[0.85] tracking-tighter mix-blend-overlay"
            style={{ 
               WebkitTextStroke: `2px ${i === 5 ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.4)'}`,
               opacity: 0 // Controlled by GSAP
            }}
          >
            <span>HOBBY</span>
            <span>PROJECTS</span>
          </h1>
        ))}
      </div>

      {/* Carousel Container */}
      <div 
        className="relative w-full h-full flex items-center justify-center z-10 overflow-visible"
      >
        {servicesData.map((s, i) => (
          <div 
            key={i}
            ref={el => cardsRef.current[i] = el}
            className="absolute shrink-0 w-[70vw] sm:w-[350px] md:w-[420px] h-[400px] md:h-[550px] rounded-[30px] p-4 bg-white backdrop-blur-2xl border border-gray-200 flex flex-col justify-between overflow-hidden group/outer shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
          >
            {/* Inner Glossy Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent opacity-0 group-hover/outer:opacity-100 transition-opacity duration-500 pointer-events-none z-20" />
            
            {/* Full Card Image */}
            <div className="w-full h-full rounded-[20px] overflow-hidden relative z-10 group/card pointer-events-auto cursor-pointer">
              <img 
                src={s.img} 
                alt={s.title} 
                className="w-full h-full object-cover transition-all duration-700 group-hover/card:scale-110 group-hover/card:blur-[4px]" 
              />
              
              {/* Overlay with Text and Icons */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center z-30">
                  <h3 className="text-white text-2xl font-bold mb-2 translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">{s.title}</h3>
                  <p className="text-white/80 text-sm md:text-base mb-6 translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500 delay-75">{s.desc}</p>
                  
                  <div className="flex items-center gap-4">
                    <a href={s.github || "#"} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-[#facc15] hover:scale-110 transition-all duration-300 shadow-xl translate-y-4 group-hover/card:translate-y-0 delay-150" title="View Source on GitHub">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </a>
                    <a href={s.live || "#"} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-[#facc15] hover:scale-110 transition-all duration-300 shadow-xl translate-y-4 group-hover/card:translate-y-0 delay-200" title="Live Preview">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Services;
