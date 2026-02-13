import Envelope from "./components/Envelope";
import Tulip from "./components/Tulip";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-gradient-to-b from-pink-100 to-pink-200 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Hearts/Decorations */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Simple CSS-based floating hearts could go here, or we use a library. 
             For now, let's just make the background nice. */}
         <div className="absolute top-10 left-10 text-pink-300 text-6xl opacity-50 blur-[2px] animate-pulse">♥</div>
         <div className="absolute bottom-20 right-20 text-red-300 text-8xl opacity-30 blur-[4px] animate-bounce delay-700">♥</div>
         <div className="absolute top-1/2 right-10 text-pink-400 text-4xl opacity-40 animate-pulse delay-300">♥</div>
      </div>

      <div className="z-10">
        <Envelope />
      </div>

      {/* Garden of Tulips */}
      <div className="absolute bottom-0 w-full flex justify-between items-end px-4 md:px-20 -mb-4 pointer-events-none">
         <Tulip className="scale-75 md:scale-100 delay-100" />
         <Tulip className="scale-90 md:scale-110 delay-200 -ml-12" />
         <div className="flex-1"></div>
         <Tulip className="scale-90 md:scale-110 delay-300 -mr-12" />
         <Tulip className="scale-75 md:scale-100 delay-400" />
      </div>
      
    </main>
  );
}
