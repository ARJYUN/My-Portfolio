import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const achievementsData = [
  { 
    year: 'Oct 2024', 
    title: '1st Prize - Project Expo', 
    org: "Thathva'24 (NIT Calicut)", 
    desc: 'Secured 1st Prize in the Project Expo organized by NIT Calicut.' 
  },
  { 
    year: '2024 - 2025', 
    title: 'State Level Winner', 
    org: 'YIP 4.0', 
    desc: 'Selected to RIT (Rapid Innovation Track) as a prestigious YIP 4.0 State Level Winner.' 
  },
  { 
    year: 'Jun 2025', 
    title: '1st Prize - Coding Challenge', 
    org: 'Mulearn LBS College', 
    desc: 'Top performer in the 30-Day Coding Challenge conducted in June.' 
  },
  { 
    year: 'Aug 2025', 
    title: '1st Prize - Component Design', 
    org: 'IA/IE/PELS Jt. Chapter Kerala', 
    desc: 'Winner of the "Minimal Component Design Challenge" with IEEE IES & PELS.' 
  },
  { 
    year: 'Jul 2026', 
    title: '2nd Prize - ENIGMA | CTF - Capture The Flag', 
    org: 'MuLearn Foundation', 
    desc: 'Secured 2nd Prize in the ENIGMA CTF-Capture The Flag conducted by MuLearn Foundation.' 
  },
  { 
    year: 'Dec 2025', 
    title: '3rd Prize - Code & Predict', 
    org: "TARANGA'26 (ELACSTA NSSCE)", 
    desc: 'Won 3rd prize in the "Code and Predict" coding competition.' 
  },
  { 
    year: 'Jan 2026', 
    title: '1st Prize - Poster Design', 
    org: "TARANGA'26 (ELACSTA NSSCE)", 
    desc: 'Secured 1st place in the poster designing competition.' 
  },
];

const Achievements = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Pin this section when its bottom hits the bottom of the screen,
      // so the next section (Let's Talk) can slide over it like a parallax effect.
      // The pin duration must precisely match the height of the overlapping section!
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'bottom bottom',
        end: () => `+=${document.querySelector('#contact')?.offsetHeight || window.innerHeight}`,
        pin: true,
        pinSpacing: false,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="achievements" ref={sectionRef} className="relative w-full min-h-screen py-32 bg-zinc-950 text-white flex flex-col items-center justify-center overflow-hidden z-10 border-t border-white/10">
      
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <h1 className="text-[18vw] font-black text-white whitespace-nowrap tracking-tighter">
            ACHIEVEMENTS
        </h1>
      </div>

      <div className="text-center z-10 mb-20 px-4" data-aos="fade-up">
         <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">Milestones</h2>
         <p className="text-[#facc15] font-medium tracking-widest uppercase text-sm">Awards and Recognitions</p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementsData.map((item, index) => (
          <div 
            key={index} 
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="achievement-card w-full bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-[30px] p-8 flex flex-col items-center justify-center text-center group hover:bg-white hover:-translate-y-2 transition-all duration-500 cursor-default shadow-xl"
          >
            <span className="text-[#facc15] font-black text-xl mb-3 group-hover:text-black transition-colors duration-500">{item.year}</span>
            <h3 className="text-xl md:text-2xl font-black mb-2 group-hover:text-black transition-colors duration-500">{item.title}</h3>
            <p className="text-zinc-300 font-bold text-sm mb-3 group-hover:text-zinc-800 transition-colors duration-500">{item.org}</p>
            <p className="text-zinc-500 group-hover:text-zinc-600 transition-colors font-medium text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
