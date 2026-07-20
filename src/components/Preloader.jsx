import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import heroImg from '../assets/hero/hero.png';

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const progressRef = useRef(null);
  const textRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loaded = false;
    let simProgress = 0;

    // Start prefetching the heavy hero image immediately
    const img = new Image();
    img.src = heroImg;
    img.onload = () => { loaded = true; };
    img.onerror = () => { loaded = true; };

    // Animate progress
    const interval = setInterval(() => {
      // If image loaded, speed up rapidly to 100
      if (loaded) {
        simProgress += 4;
      } else {
        // If not loaded, slowly approach 90% and hold
        if (simProgress < 90) {
          simProgress += 1;
        }
      }

      if (simProgress >= 100) {
        simProgress = 100;
        clearInterval(interval);
        
        // Trigger sleek exit animation
        const tl = gsap.timeline({
          onComplete: onComplete
        });
        
        tl.to(textRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.4,
          ease: "power3.in"
        })
        .to(progressRef.current, {
          scaleX: 0,
          transformOrigin: "right",
          duration: 0.4,
          ease: "power3.in"
        }, "-=0.2")
        .to(containerRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "expo.inOut"
        });
      }
      
      setProgress(Math.min(simProgress, 100));
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-[280px] sm:max-w-sm px-8 overflow-hidden flex flex-col items-center justify-center">
        <div ref={textRef} className="w-full flex justify-between items-end mb-3 text-[#facc15] font-black uppercase tracking-[0.2em] text-xs sm:text-sm">
          <span>Loading</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full h-[2px] bg-white/10 overflow-hidden relative">
          <div 
            ref={progressRef}
            className="absolute top-0 left-0 h-full bg-[#facc15] origin-left"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
