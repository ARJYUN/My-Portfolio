
import footerImg from '../assets/footer/footer.png';

const Footer = () => {
  const navLinks = ["Home", "About", "Projects", "Designs", "Achievements", "Contact"];
  const marqueeText = "WEB DEVELOPER • ARJUN K • STUDENT • FREELANCER • PORTFOLIO • ".repeat(4);

  return (
    <footer className="w-full bg-[#f4c400] text-zinc-950 rounded-t-[50px] md:rounded-t-[100px] pt-16 pb-12 px-8 overflow-hidden relative shadow-[0_-20px_50px_rgba(244,196,0,0.1)]">
      
      {/* Massive Infinite Marquee Background Text */}
      <div className="absolute top-8 md:top-12 left-0 w-full pointer-events-none opacity-[0.05] z-0 flex flex-col gap-0 overflow-hidden select-none">
        <style>{`
          @keyframes slide-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes slide-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .animate-slide-left {
            animation: slide-left 120s linear infinite;
          }
          .animate-slide-right {
            animation: slide-right 120s linear infinite;
          }
        `}</style>
        
        {/* Layer 1: Runs Left */}
        <div className="flex whitespace-nowrap animate-slide-left w-max">
            <h1 className="text-[14vw] lg:text-[7.5vw] font-black uppercase tracking-tighter text-zinc-950 leading-none pr-8">
                {marqueeText}
            </h1>
            <h1 className="text-[14vw] lg:text-[7.5vw] font-black uppercase tracking-tighter text-zinc-950 leading-none pr-8">
                {marqueeText}
            </h1>
        </div>

        {/* Layer 2: Runs Right */}
        <div className="flex whitespace-nowrap animate-slide-right w-max">
            <h1 className="text-[14vw] lg:text-[7.5vw] font-black uppercase tracking-tighter text-zinc-950 leading-none pr-8">
                {marqueeText}
            </h1>
            <h1 className="text-[14vw] lg:text-[7.5vw] font-black uppercase tracking-tighter text-zinc-950 leading-none pr-8">
                {marqueeText}
            </h1>
        </div>

        {/* Layer 3: Runs Left */}
        <div className="flex whitespace-nowrap animate-slide-left w-max">
            <h1 className="text-[14vw] lg:text-[7.5vw] font-black uppercase tracking-tighter text-zinc-950 leading-none pr-8">
                {marqueeText}
            </h1>
            <h1 className="text-[14vw] lg:text-[7.5vw] font-black uppercase tracking-tighter text-zinc-950 leading-none pr-8">
                {marqueeText}
            </h1>
        </div>

        {/* Layer 4: Runs Right (Instagram) */}
        <div className="flex whitespace-nowrap animate-slide-right w-max">
            <h1 className="text-[14vw] lg:text-[7.5vw] font-black uppercase tracking-tighter text-zinc-950 leading-none pr-8">
                {"FOLLOW ON INSTAGRAM • ".repeat(8)}
            </h1>
            <h1 className="text-[14vw] lg:text-[7.5vw] font-black uppercase tracking-tighter text-zinc-950 leading-none pr-8">
                {"FOLLOW ON INSTAGRAM • ".repeat(8)}
            </h1>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-7xl mx-auto">
        
        {/* Profile Card Area */}
        <div className="flex flex-col items-center justify-center w-full mb-8 z-10">
            {/* Profile Image */}
            <img 
                src={footerImg} 
                alt="Leeshark Footer Portrait" 
                className="w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] object-contain drop-shadow-2xl mb-6"
            />
            
            {/* Action Buttons */}
            <div className="flex items-center gap-4">
                <a 
                    href="https://www.instagram.com/arjyun_k/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 md:px-12 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 text-sm md:text-base tracking-wide"
                >
                    Follow
                </a>
                <a 
                    href="https://ig.me/m/arjyun_k"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-zinc-200 hover:bg-white text-zinc-900 font-bold py-3 px-8 md:px-12 rounded-xl transition-all shadow-lg text-sm md:text-base tracking-wide"
                >
                    Message
                </a>
            </div>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center">
            <a href="#" className="text-4xl md:text-5xl font-black tracking-tight flex items-center gap-1">
            <span className="text-zinc-950">Arjun</span>
            <span className="text-white drop-shadow-md">.K</span>
            </a>
            <p className="mt-4 text-zinc-800 font-medium text-center max-w-sm">
                Thoughtfully Crafted. Beautifully Engineered.
            </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-4 md:gap-12 px-2">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs sm:text-sm md:text-base uppercase tracking-widest font-bold text-zinc-900 hover:text-white transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Footer Bottom Area */}
        <div className="w-full max-w-4xl flex flex-col items-center gap-4 -mt-4 md:-mt-6">
          {/* Divider */}
          <div className="w-full h-[2px] bg-zinc-950/10 rounded-full" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full text-xs sm:text-sm font-semibold text-zinc-700 text-center gap-2 px-4 pb-2 md:pb-0">
            <p className="tracking-wide">
              © {new Date().getFullYear()} <span className="text-black font-black">Arjun K</span>. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5 tracking-wide">
              Designed & Developed with <svg className="w-3.5 h-3.5 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
