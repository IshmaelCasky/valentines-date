'use client';

import { useState } from 'react';

export default function Envelope() {
  const [isOpen, setIsOpen] = useState(false);

  // Helper for the envelope flap geometry (SVG) to ensure perfect responsiveness and gradients
  // But we can stick to divs with clip-path for easier Tailwind integration if we want complex gradients.
  // Actually, standard CSS clip-path is easiest for "triangles" that need gradients.

  return (
    <div className="flex flex-col items-center justify-center relative w-full h-[600px]">
      
      <div className="relative perspective-1000 group mt-32">
        
        {/* Envelope Container */}
        <div 
            className="relative w-[90vw] md:w-[400px] h-[240px] md:h-[300px] md:mt-[10rem] transition-transform duration-700 ease-in-out mx-auto"
            onClick={() => setIsOpen(true)}
            style={{ clipPath: 'inset(-200% -50% 0 -50%)' }}
        >
            
          {/* Back of Envelope (Inside Color) */}
          <div className="absolute inset-0 bg-[#bd283c] rounded-lg shadow-2xl"></div>

          {/* Letter */}
          <div
            className={`absolute z-20 left-2 right-2 bg-[#fffdf5] rounded shadow-md transition-all duration-[1500ms] cubic-bezier(0.4, 0, 0.2, 1) ${
              isOpen 
                ? '-translate-y-[140px] md:-translate-y-[280px] h-[260px] md:h-[430px] rotate-[-1deg] delay-500' // slightly taller on mobile
                : 'top-[40px] h-full translate-y-4' 
            }`}
          >
             {/* Paper Texture/Lines - Added overflow-y-auto for scrolling */}
            <div className="h-full border-2 border-double border-red-100 p-6 flex flex-col items-center justify-start pt-10 text-center bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] overflow-y-auto scrollbar-thin scrollbar-thumb-red-200 scrollbar-track-transparent">
                <h1 className="font-[family-name:var(--font-dancing)] text-3xl font-bold text-red-600 mb-6 drop-shadow-sm shrink-0">To My Valentine</h1>
                <p className="font-[family-name:var(--font-lora)] text-[0.8rem] md:text-base text-gray-800 leading-relaxed italic whitespace-pre-line">
                    "
                    
                    Hewooo babuuuu, it’s finally valentines day, and I decided to ask you out to be my valentines through this little website I created. I decided to ask you out this way because why not diba? Bleeeeee your uyab is a programmer baya bleeee, I know dli kaayo ta maka lakaw lakaw gyud because of all the happenings babuuu, pero no need to worry because dada will plan for our belated valentines date bleeee. Happy valentines akong pinalanggangggg babyyyyyy mwamwaaaaaa. Be my valentines haaaa?? Bantay ka duu grrr, I love you always babyyyyyy mwamwaaaaa
                    
                    - imong pogiest dada bleeee
                    "
                </p>
                <div className="flex-1 shrink-0"></div>
                <div className="text-red-400 text-3xl animate-pulse pb-4 shrink-0 mt-4">♥</div>
            </div>
          </div>

          {/* Pocket (Front Flaps) */}
          {/* Left Flap */}
          <div 
            className="absolute z-30 inset-0 bg-gradient-to-br from-[#e11d48] to-[#be123c]"
            style={{ clipPath: 'polygon(0 0, 0% 100%, 50% 50%)' }}
          ></div>

          {/* Right Flap */}
          <div 
            className="absolute z-30 inset-0 bg-gradient-to-bl from-[#e11d48] to-[#be123c]"
            style={{ clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)' }}
          ></div>

          {/* Bottom Flap */}
          <div 
            className="absolute z-30 inset-0 bg-gradient-to-t from-[#be123c] to-[#e11d48] shadow-[0_-5px_15px_rgba(0,0,0,0.1)]"
            style={{ clipPath: 'polygon(0 100%, 100% 100%, 50% 50%)' }}
          ></div>

          {/* Top Flap (The animation part) */}
          <div
            className={`absolute inset-0 bg-gradient-to-b from-[#f43f5e] to-[#e11d48] rounded-t-lg origin-top transition-all duration-1000 ease-in-out ${
                isOpen 
                    ? 'rotate-x-180 z-10 brightness-90' // z-10 puts it behind letter (z-20)
                    : 'z-40 delay-200' // High z-index when closed
            }`}
             // We need a specific transition for z-index to snap it LATE when opening
            style={{ 
                clipPath: 'polygon(0 0, 100% 0, 50% 55%)',
                transformStyle: 'preserve-3d',
                transitionProperty: 'transform, z-index, filter',
                transitionDelay: isOpen ? '0s, 300ms, 0s' : '0s, 0s, 0s' // Delay z-index swap when opening
            }}
          >
             {/* Wax Seal */}
            <div className={`absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-red-900 rounded-full shadow-inner flex items-center justify-center border-[3px] border-red-800 opacity-90 transition-opacity duration-200 ${isOpen ? 'opacity-0 delay-0' : 'delay-500 opacity-100'}`}>
                <div className="text-red-200 text-sm font-serif font-bold">♥</div>
            </div>
          </div>
          
        </div>

        {/* Text Prompt */}
        <div className={`mt-12 text-center transition-opacity duration-1000 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
            <p className="font-[family-name:var(--font-lora)] text-red-800/60 italic tracking-widest cursor-pointer hover:text-red-800" onClick={() => setIsOpen(true)}>
                tap to open
            </p>
        </div>

      </div>

    </div>
  );
}
