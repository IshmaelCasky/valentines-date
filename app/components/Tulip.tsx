export default function Tulip({ className, delay = 0 }: { className?: string, delay?: number }) {
  return (
    <div className={`relative w-32 h-48 group ${className}`}>
        <svg viewBox="0 0 100 150" className="w-full h-full overflow-visible">
            <defs>
                <linearGradient id="stem-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4d7c0f" />
                    <stop offset="100%" stopColor="#65a30d" />
                </linearGradient>
                <linearGradient id="petal-gradient-left" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#be123c" />
                    <stop offset="100%" stopColor="#e11d48" />
                </linearGradient>
                <linearGradient id="petal-gradient-right" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#be123c" />
                    <stop offset="100%" stopColor="#e11d48" />
                </linearGradient>
                <linearGradient id="petal-gradient-center" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#e11d48" />
                    <stop offset="100%" stopColor="#fb7185" />
                </linearGradient>
            </defs>

            {/* Stem */}
            <path d="M50 150 Q55 100 50 60" stroke="url(#stem-gradient)" strokeWidth="6" fill="none" />

            {/* Leaves */}
            <path d="M50 140 Q30 100 20 80 Q40 90 50 110" fill="#4d7c0f" className="origin-bottom-left hover:rotate-[-5deg] transition-transform duration-700" />
            <path d="M50 130 Q70 100 80 80 Q60 90 50 110" fill="#65a30d" className="origin-bottom-right hover:rotate-[5deg] transition-transform duration-700" />

            {/* Flower Head Group - Animates on hover */}
            <g className="origin-bottom transition-transform duration-1000 group-hover:-translate-y-2">
                {/* Back Petal (Center Darker) */}
                <path d="M35 60 Q50 20 65 60 L50 85 Z" fill="#9f1239" />
                
                {/* Left Petal */}
                <path d="M50 85 C20 85 20 30 50 10 C40 40 40 70 50 85" fill="url(#petal-gradient-left)" className="origin-bottom-right group-hover:rotate-[-10deg] transition-transform duration-700" />
                
                {/* Right Petal */}
                <path d="M50 85 C80 85 80 30 50 10 C60 40 60 70 50 85" fill="url(#petal-gradient-right)" className="origin-bottom-left group-hover:rotate-[10deg] transition-transform duration-700" />
                
                {/* Front Center Petal */}
                <path d="M50 85 C35 85 35 40 50 15 C65 40 65 85 50 85" fill="url(#petal-gradient-center)" />
            </g>
        </svg>
    </div>
  );
}
