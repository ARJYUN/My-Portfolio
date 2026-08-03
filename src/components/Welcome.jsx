import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, 
  SiJavascript, SiTypescript, SiFigma, 
  SiHtml5, SiPython, SiCplusplus, SiC
} from 'react-icons/si';
import { DiPhotoshop, DiCss3 } from 'react-icons/di';

import pImg1 from '../assets/journey/image-1.png';
import pImg2 from '../assets/journey/image-2.png';
import pImg3 from '../assets/journey/image-3.jpeg';
import pImg4 from '../assets/journey/image-4.jpeg';
import pImg5 from '../assets/journey/image-5.jpeg';
import pImg6 from '../assets/journey/image-6.png';

import gImg1 from '../assets/journey/gallery/1.jpeg';
import gImg2 from '../assets/journey/gallery/2.jpeg';
import gImg3 from '../assets/journey/gallery/3.jpeg';
import gImg4 from '../assets/journey/gallery/4.jpeg';
import gImg5 from '../assets/journey/gallery/5.jpeg';
import gImg6 from '../assets/journey/gallery/6.jpeg';

gsap.registerPlugin(ScrollTrigger);

const journeyData = [
  { year: "2026 - PRESENT", title: "WEBMASTER IEEE CS KERALA SECTION", desc: "Led the digital presence of IEEE CS Kerala Section through modern web solutions.", img: pImg3 },
  { year: "MAY 2026 - PRESENT", title: "R & D INTERN AT BOEHM TECH LLP.", desc: "Developing AI-powered MVP solutions through collaborative research and innovation.", img: pImg5 },
  { year: "2026 - PRESENT", title: "WEBMASTER IEEE SB NSSCE", desc: "Developed and maintained the official web platforms of IEEE SB NSSCE.", img: pImg4 },
  { year: "2025 - PRESENT", title: "Tech Lead, μLearn NSSCE", desc: "Empowered students by leading technical initiatives and developer communities, developed and maintained the official website of μLearn NSSCE.", img: pImg2 },
  { year: "AUG 2025 - APR 2026", title: "WEB Intern, IEDC NSSCE", desc: "Successfully Completed 9 months internship as a Web Intern at IEDC NSSCE.", img: pImg6 },
  { year: "2024", title: "JOURNEY BEGINS...", desc: "A journey fueled by learning, innovation, and the pursuit of excellence", img: pImg1 },
];

const techData = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: DiCss3, color: '#1572B6' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    { name: 'Photoshop', icon: DiPhotoshop, color: '#31A8FF' },
];

const CreateCard = ({ tech }) => {
    const Icon = tech.icon;
    return (
        <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-2xl mx-2 sm:mx-3 md:mx-4 bg-[#111111] flex flex-col items-center justify-center gap-2 sm:gap-4 group transition-all duration-300 border border-transparent hover:border-white/10 shrink-0 cursor-default hover:bg-[#1a1a1a]">
            <Icon className="text-4xl sm:text-5xl md:text-6xl transition-transform duration-500 group-hover:scale-110" style={{ color: tech.color }} />
            <h4 className="text-[11px] sm:text-sm md:text-base font-semibold tracking-wide text-white/90 group-hover:text-white transition-colors duration-300 text-center px-1">{tech.name}</h4>
        </div>
    );
};

const JourneyItem = ({ item, index }) => {
    const isEven = index % 2 === 0;
    return (
       <div className="relative w-full flex flex-col md:flex-row items-center justify-between md:py-2 my-8 md:my-0 group cursor-default" data-aos="fade-up">
          
          {/* Timeline Dot (Left on Mobile, Center on Desktop) */}
          <div className="absolute md:left-1/2 left-6 -translate-x-1/2 top-1.5 md:top-1/2 md:-translate-y-1/2 w-4 h-4 bg-white border-[3px] border-zinc-300 rounded-full z-10 shadow-md transition-all duration-300 group-hover:scale-[1.5] group-hover:border-[#facc15]"></div>
          
          {/* Content Side */}
          <div className={`w-full md:w-1/2 flex flex-col pl-16 md:pl-0 ${isEven ? 'md:items-end md:text-right md:pr-16' : 'md:items-start md:text-left md:pl-16 md:order-last'} text-left mb-6 md:mb-0 z-20`}>
              <span className="text-[#d9a300] font-black text-base md:text-lg tracking-widest uppercase mb-1 drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-1">{item.year}</span>
              <h4 className={`text-2xl md:text-4xl font-black uppercase tracking-tighter text-black mb-3 transition-transform duration-500 ease-out group-hover:translate-x-2 ${isEven ? 'md:group-hover:-translate-x-2' : 'md:group-hover:translate-x-2'}`}>{item.title}</h4>
              <p className="text-zinc-600 font-medium max-w-sm md:mx-0 leading-relaxed text-sm">{item.desc}</p>
          </div>

          {/* Image Side (Always visible on Desktop) */}
          <div className={`hidden md:flex w-1/2 items-center ${isEven ? 'justify-start pl-16 md:order-last' : 'justify-end pr-16'} z-20`}>
              <div className={`relative max-w-[85%] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-black/5 transition-transform duration-500 ease-out group-hover:scale-[1.02] ${isEven ? 'group-hover:rotate-2' : 'group-hover:-rotate-2'}`}>
                 <img src={item.img} alt={item.title} className="w-full h-auto max-h-[40vh] object-contain transition-transform duration-700 ease-out group-hover:scale-110" loading="lazy" />
              </div>
          </div>

          {/* Mobile Image (Always visible on mobile) */}
          <div className="md:hidden w-full flex justify-start pl-16 pr-4 mt-2 mb-8 z-20">
              <div className="w-[90%] sm:w-[75%] relative p-2 bg-white rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-black/5 transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:rotate-1">
                 <div className="rounded-xl overflow-hidden bg-zinc-50 flex items-center justify-center">
                    <img src={item.img} alt={item.title} className="w-full h-auto max-h-[30vh] object-contain transition-transform duration-700 ease-out group-hover:scale-110" loading="lazy" />
                 </div>
              </div>
          </div>

       </div>
    );
};

const Welcome = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      const heroImgNode = document.querySelector("#hero-image");

      mm.add({
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)"
      }, (context) => {
        let { isDesktop, isMobile } = context.conditions;
        
        if (heroImgNode) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "top top",
              scrub: true,
            }
          });

          // Only animate the hero image on Desktop
          if (isDesktop) {
            tl.to(heroImgNode, {
              y: () => {
                const rect = heroImgNode.getBoundingClientRect();
                const originalTopY = rect.top + window.scrollY;
                
                const welcomeRect = sectionRef.current.getBoundingClientRect();
                const welcomeTopY = welcomeRect.top + window.scrollY;
                
                const targetTopY = welcomeTopY - (window.innerHeight * 0.08); 
                return targetTopY - originalTopY;
              },
              scale: () => window.innerWidth < 1024 ? 2.8 : 3.8,
              transformOrigin: "top center",
              ease: "power2.inOut"
            }, 0);

            // Fade out the hero image when scrolling from Welcome into the Journey section
            gsap.to(heroImgNode, {
              autoAlpha: 0,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top", // Triggers when the Welcome text is at the top of the screen
                end: "+=600",     // Fades out over 600px of scroll
                scrub: true,
              }
            });
          }

          // Welcome text animation for both
          tl.fromTo(".welcome-huge-text", {
            y: isMobile ? -50 : -100,
            scale: 0.9,
            opacity: 0,
          }, {
            y: 0,
            scale: 1,
            opacity: 0.3, // Increased opacity to make the text more visible
            ease: "power2.out"
          }, 0);
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-auto min-h-screen bg-transparent text-black flex flex-col items-center justify-start overflow-hidden pointer-events-none"
    >
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,rgba(240,240,240,1)_100%)]"></div>
        <div 
          className="absolute inset-0 mix-blend-overlay opacity-20 pointer-events-none"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        ></div>
      </div>

      {/* ---------------- SCREEN 1: WELCOME TEXT ---------------- */}
      <div className="w-full h-[30vh] md:h-screen text-center z-10 flex flex-col items-center justify-center relative px-4 pt-8 md:pt-0">
        <h2 className="welcome-huge-text text-[14vw] sm:text-[14vw] md:text-[14vw] font-black uppercase tracking-tighter text-black leading-none whitespace-nowrap">
          WELCOME
        </h2>
        <p className="welcome-huge-text mt-2 md:mt-4 text-black font-bold tracking-[0.4em] uppercase text-xs sm:text-sm md:text-xl">
          TO MY CREATIVE SPACE
        </p>
      </div>

      {/* ---------------- SCREEN 1.5: JOURNEY TIMELINE ---------------- */}
      <div className="w-full min-h-screen relative z-40 flex flex-col items-center py-20 pointer-events-auto bg-transparent">
         <div className="text-center mb-20 md:mb-32 px-4" data-aos="fade-up">
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-black mb-2">The Journey</h3>
            <p className="text-zinc-500 font-medium">My path to becoming a creative developer</p>
         </div>

         <div className="relative w-full max-w-6xl mx-auto px-4 md:px-8 flex flex-col">
            {/* Timeline Line (Left on Mobile, Center on Desktop) */}
            <div className="absolute md:left-1/2 left-10 top-0 bottom-0 w-[2px] bg-zinc-200 -translate-x-1/2 z-0"></div>
            
            {journeyData.map((item, index) => (
                <JourneyItem key={index} item={item} index={index} />
            ))}
         </div>

         {/* Journey Image Gallery Marquee */}
         <div className="w-full mt-20 md:mt-32 overflow-hidden relative py-10">
            <style>{`
              @keyframes imageMarquee {
                  0% { transform: translateX(0%); }
                  100% { transform: translateX(-50%); }
              }
              .image-marquee-inner {
                  display: flex;
                  width: max-content;
                  animation: imageMarquee 40s linear infinite; 
              }
              .image-marquee-inner:hover {
                  animation-play-state: paused;
              }
            `}</style>
            
            <div className="relative w-full max-w-[100vw] overflow-hidden">
               <div className="absolute left-0 top-0 h-full w-16 sm:w-32 z-10 pointer-events-none bg-gradient-to-r from-[#f0f0f0] to-transparent opacity-90"></div>
               
               <div className="image-marquee-inner gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8">
                  {[gImg1, gImg2, gImg3, gImg4, gImg5, gImg6, gImg1, gImg2, gImg3, gImg4, gImg5, gImg6].map((img, idx) => (
                      <div key={idx} className="h-60 sm:h-72 md:h-96 w-auto flex-shrink-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-black/5 group bg-zinc-100">
                          <img src={img} alt={`Journey moment ${idx}`} className="w-auto h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" loading="lazy" />
                      </div>
                  ))}
               </div>
               
               <div className="absolute right-0 top-0 h-full w-16 sm:w-32 z-10 pointer-events-none bg-gradient-to-l from-[#f0f0f0] to-transparent opacity-90"></div>
            </div>
         </div>
      </div>

      {/* ---------------- SCREEN 2: TECH STACKS ---------------- */}
      <div className="w-full h-screen z-20 flex flex-col justify-center gap-8 md:gap-12 relative bg-[#0a0a0a] pointer-events-auto">
          {/* Solid gradient to blend the transition from Screen 1 */}
          <div className="absolute -top-32 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none"></div>
          
          <div className="text-center z-30 mt-10">
             <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-2" data-aos="fade-up">Tech Stack</h3>
             <p className="text-zinc-400 font-medium" data-aos="fade-up" data-aos-delay="100">Technologies I work with</p>
          </div>

          <div className="flex flex-col gap-6">
              <style>{`
                @keyframes marqueeScroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-inner {
                    animation: marqueeScroll 25s linear infinite; 
                }
                @media (min-width: 768px) {
                    .marquee-inner {
                        animation: marqueeScroll 35s linear infinite;
                    }
                }
                .marquee-reverse {
                    animation-direction: reverse;
                }
              `}</style>
              
              <div className="marquee-row w-full mx-auto max-w-[100vw] overflow-hidden relative py-1 sm:py-2">
                  <div className="absolute left-0 top-0 h-full w-12 sm:w-24 md:w-32 z-10 pointer-events-none bg-gradient-to-r from-[#0a0a0a] to-transparent"></div>
                  <div className="marquee-inner flex transform-gpu min-w-[200%] items-center">
                      {[...techData, ...techData, ...techData, ...techData].map((tech, index) => (
                          <CreateCard key={`fwd-${index}`} tech={tech} />
                      ))}
                  </div>
                  <div className="absolute right-0 top-0 h-full w-12 sm:w-24 md:w-32 z-10 pointer-events-none bg-gradient-to-l from-[#0a0a0a] to-transparent"></div>
              </div>

              <div className="marquee-row w-full mx-auto max-w-[100vw] overflow-hidden relative py-1 sm:py-2">
                  <div className="absolute left-0 top-0 h-full w-12 sm:w-24 md:w-32 z-10 pointer-events-none bg-gradient-to-r from-[#0a0a0a] to-transparent"></div>
                  <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] items-center">
                      {[...techData, ...techData, ...techData, ...techData].reverse().map((tech, index) => (
                          <CreateCard key={`rev-${index}`} tech={tech} />
                      ))}
                  </div>
                  <div className="absolute right-0 top-0 h-full w-12 sm:w-24 md:w-32 z-10 pointer-events-none bg-gradient-to-l from-[#0a0a0a] to-transparent"></div>
              </div>
          </div>
      </div>

    </section>
  );
};

export default Welcome;
