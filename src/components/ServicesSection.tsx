import React from "react";
import {
  Gift,
  Heart,
  Sparkles,
  Camera,
  Video,
  Sliders,
  PartyPopper,
} from "lucide-react";

interface AvailableWork {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

const AVAILABLE_WORKS: AvailableWork[] = [
  {
    number: "01",
    title: "Birthday Shoots & Celebrations",
    category: "Party & Milestone Videography",
    description:
      "Kids' 1st birthdays, milestone age celebrations, family parties, cake cutting, and dynamic recap reels with music.",
    tags: ["Highlight Music Reel", "Candid Stills", "Cake Cutting", "48-Hour Preview"],
    icon: <Gift className="w-5 h-5 text-white" />,
  },
  {
    number: "02",
    title: "Wedding & Pre-Wedding Shoots",
    category: "Cinematography & Candid Stills",
    description:
      "Pre-wedding couple outdoor sessions, engagement ceremonies, wedding rituals, candid emotions, and cinematic highlight films.",
    tags: ["Cinematic 4K Teaser", "Full Event Highlights", "Candid Photography", "Color-Graded Stills"],
    icon: <Heart className="w-5 h-5 text-white" />,
  },
  {
    number: "03",
    title: "Maternity & Newborn Sessions",
    category: "Emotional Portraiture",
    description:
      "Golden-hour outdoor maternity shoots, home newborn sessions, and gentle family moments preserved with warm, natural tones.",
    tags: ["Golden-Hour Portraits", "Newborn Details", "Short Video Vignette", "High-End Retouching"],
    icon: <Sparkles className="w-5 h-5 text-white" />,
  },
  {
    number: "04",
    title: "Fashion & Model Portfolios",
    category: "Editorial Photography",
    description:
      "Studio and outdoor portrait sessions, model lookbooks, creative styling, and viral 9:16 Instagram reels.",
    tags: ["Model Portfolio", "Editorial Lighting", "9:16 Viral Reels", "Print-Ready High-Res"],
    icon: <Camera className="w-5 h-5 text-white" />,
  },
  {
    number: "05",
    title: "Commercial & Brand Shoots",
    category: "Commercial Content",
    description:
      "Product photography, café & restaurant promo reels, local business showcases, and aesthetic social media advertising.",
    tags: ["Promotional Reels", "Product Stills", "Food & Interior", "Brand Aesthetics"],
    icon: <Video className="w-5 h-5 text-white" />,
  },
  {
    number: "06",
    title: "Event Videography & Highlights",
    category: "Live Events & Functions",
    description:
      "Corporate gatherings, cultural programs, festival celebrations, and private functions covered with multi-angle footage.",
    tags: ["Multi-Angle Coverage", "Fast-Paced Edit", "Audio & Speech Capture", "Full Reel"],
    icon: <PartyPopper className="w-5 h-5 text-white" />,
  },
  {
    number: "07",
    title: "Video Editing & Color Grading",
    category: "Post-Production",
    description:
      "Editing raw clips into rhythmic, engaging videos using CapCut, VN, and Adobe Lightroom with custom color grading.",
    tags: ["Beat-Synced Cuts", "Sound Design", "Lightroom Retouching", "Reels & Shorts"],
    icon: <Sliders className="w-5 h-5 text-white" />,
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="relative z-30 w-full py-20 px-6 md:px-12 lg:px-20 bg-[#07070a] border-t border-white/10 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-400 text-xs font-mono mb-3">
            <span>AVAILABLE FOR // IBR CREATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Available Shoots & Works
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mt-2 font-light leading-relaxed">
            A comprehensive list of visual shoots and creative services available by Muhammed Ihsan. Every project is crafted with care, creativity, and attention to detail.
          </p>
        </div>

        {/* Clean Works List */}
        <div className="flex flex-col divide-y divide-white/5 border-y border-white/10">
          {AVAILABLE_WORKS.map((work) => (
            <div
              key={work.number}
              className="py-7 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:bg-white/[0.015] px-2 transition-colors"
            >
              {/* Left Column: Number, Icon, Title & Category */}
              <div className="flex items-start gap-5 max-w-xl">
                <span className="font-mono text-xs sm:text-sm text-zinc-600 group-hover:text-zinc-400 transition-colors pt-1">
                  {work.number}
                </span>

                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-white/20 transition-colors">
                  {work.icon}
                </div>

                <div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                    {work.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-zinc-200 transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1.5 leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </div>

              {/* Right Column: Tags */}
              <div className="flex flex-wrap md:justify-end gap-1.5 md:max-w-xs pl-12 md:pl-0">
                {work.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[11px] text-zinc-400 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Simple Note */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <span>IBR CREATION — Every Frame Has a Story.</span>
          <span>Photography • Videography • Video Editing</span>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
