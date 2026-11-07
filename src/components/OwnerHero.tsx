import React from "react";
import { ArrowDown } from "lucide-react";

export const InstagramIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const WhatsAppIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

interface OwnerHeroProps {
  onExploreClick?: () => void;
}

export const OwnerHero: React.FC<OwnerHeroProps> = ({ onExploreClick }) => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-20 py-8 sm:py-10 z-30 bg-[#050505] text-white overflow-hidden">
      {/* Big Picture on the Right Side, Seamlessly Blended into #050505 on the Left */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[65%] lg:w-[58%] xl:w-[52%] pointer-events-none select-none overflow-hidden z-0">
        <img
          src="/ihsan-car-portrait.jpg"
          alt="Muhammed Ihsan - IBR CREATION"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-[center_18%] md:object-[68%_center] filter contrast-[1.04] brightness-95"
        />

        {/* Seamless blend from solid black #050505 on the left over to the image on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/95 via-35% md:via-20% to-transparent pointer-events-none" />

        {/* Soft left feathered transition */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />

        {/* Top edge blend into header */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent pointer-events-none" />

        {/* Bottom edge blend into footer */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-transparent pointer-events-none" />

        {/* Right edge soft dark vignette */}
        <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-[#050505]/60 to-transparent pointer-events-none" />
      </div>

      {/* Top Header */}
      <header className="relative z-10 w-full flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur-md flex items-center justify-center font-bold tracking-wider text-xs text-white shadow-lg">
            IBR
          </div>
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-zinc-200">
            IBR CREATION
          </span>
        </div>
      </header>

      {/* Hero Body: Text Overlaid on Left Side */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-6 sm:py-8 flex items-center">
        <div className="max-w-xl lg:max-w-2xl flex flex-col gap-5">
          {/* Identity & Experience Badge */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest uppercase text-zinc-400">
                Visual Artist & Filmmaker
              </span>
              <span className="text-zinc-600 font-mono">•</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-mono text-zinc-300">
                3–5 YRS EXP
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
              Muhammed Ihsan
            </h1>
          </div>

          {/* Clean concise bio - Luxury Editorial Serif */}
          <p className="font-editorial text-lg sm:text-xl md:text-2xl text-zinc-200 font-light italic leading-relaxed max-w-lg drop-shadow-md tracking-wide">
            The creative eye behind <span className="text-white font-normal not-italic tracking-normal">IBR CREATION</span>. Specializing in cinematic wedding films, vibrant celebration reels, and emotional portraits crafted with natural light and rhythmic storytelling.
          </p>

          {/* Creative Disciplines */}
          <div className="flex flex-col gap-2 pt-1">
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400">
              Creative Disciplines
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Cinematography",
                "Wedding Films",
                "Portrait Photography",
                "Color Grading",
                "Beat-Synced Reels",
                "Photo Retouching",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md bg-white/[0.04] backdrop-blur-md border border-white/10 text-xs text-zinc-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Software & Tools Stack */}
          <div className="flex flex-col gap-2 pt-1">
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400">
              Software & Apps
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { name: "Adobe Lightroom", use: "Color & Tone" },
                { name: "CapCut Pro", use: "Speed & Cinema" },
                { name: "VN Editor", use: "Reels & Beat Sync" },
                { name: "Snapseed", use: "Detail Retouch" },
              ].map((tool) => (
                <div
                  key={tool.name}
                  className="px-3 py-2 rounded-lg bg-white/[0.03] border border-white/10 flex flex-col gap-0.5 hover:border-white/20 transition-colors"
                >
                  <span className="text-xs font-semibold text-white truncate">{tool.name}</span>
                  <span className="text-[10px] text-zinc-400 font-mono truncate">{tool.use}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action button */}
          <div className="pt-2">
            <button
              onClick={onExploreClick}
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-all duration-300 cursor-pointer shadow-xl"
            >
              <span>Explore Works</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Minimalist Footer */}
      <footer className="relative z-10 w-full flex items-center justify-between pt-4 text-[11px] text-zinc-500 font-mono">
        <span>© 2026 IBR CREATION</span>
        <span className="text-zinc-600">SCROLL TO EXPLORE ↓</span>
      </footer>
    </div>
  );
};

export default OwnerHero;
