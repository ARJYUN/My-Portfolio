import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DesignWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-zinc-900 font-sans p-4 sm:p-8 md:p-16 flex flex-col relative overflow-hidden">
      
      {/* Background Typography */}
      <div className="absolute top-0 left-0 w-full flex items-start justify-center pointer-events-none z-0 pt-1 md:pt-0 opacity-10">
        <h1 className="text-[15vw] sm:text-[18vw] md:text-[22vw] font-black text-zinc-950 tracking-tighter leading-none whitespace-nowrap uppercase">
          Archive
        </h1>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col w-full h-full flex-grow relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-12 gap-4 md:mt-8">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black">Design Works</h1>
          <Link to="/" className="px-6 py-3 bg-zinc-950 text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#facc15] hover:text-black transition-colors duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] whitespace-nowrap shrink-0">
            Back to Home
          </Link>
        </div>

        {/* Google Drive Iframe Wrapper - Seamlessly Blended & Scrollbar Hidden (Desktop) */}
        <div className="w-full flex-grow min-h-[75vh] relative mt-2 md:mt-4 overflow-hidden rounded-xl">
          {/* We expand the iframe slightly beyond its container and shift it left on Desktop only. 
              This perfectly crops out the internal Google Drive padding and 
              hides the thick iframe scrollbar on the right! 
              On mobile, touch scrollbars are invisible overlays so we keep it 100% wide. */}
          <iframe 
            src="https://drive.google.com/embeddedfolderview?id=1DSgicmVytnadkrzIkNY_M88E_dHQ9JSs#grid" 
            className="absolute top-0 h-full border-none mix-blend-multiply contrast-[1.05] transition-all duration-700 left-0 w-full md:-left-6 md:w-[calc(100%+48px)]"
            title="Design Works Drive Folder"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DesignWorks;
