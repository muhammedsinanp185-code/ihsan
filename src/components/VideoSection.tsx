import React, { useState } from "react";
import { Play, Film, Clock, X, Volume2 } from "lucide-react";

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  format: string;
  poster: string;
  videoUrl: string;
  description: string;
}

export const FEATURED_VIDEOS: VideoItem[] = [
  {
    id: "vid-1",
    title: "Cinematic Wedding Highlights // Aarav & Meera",
    category: "Wedding Film",
    duration: "3:45",
    format: "4K Cinema 2.39:1",
    poster: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description: "An emotional, candid wedding film capturing heartfelt vows, ceremony rituals, and vibrant evening celebrations.",
  },
  {
    id: "vid-2",
    title: "Zayd's 1st Birthday // Milestone Celebration Reel",
    category: "Birthday Highlights",
    duration: "1:15",
    format: "9:16 Instagram Reel",
    poster: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    description: "High-energy birthday celebration recap with cake cutting, joyful family portraits, and beat-synced music editing.",
  },
  {
    id: "vid-3",
    title: "Urban Rhythm // Fashion & Lifestyle Edit",
    category: "Commercial Reel",
    duration: "0:45",
    format: "CapCut & VN Beat Sync",
    poster: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    description: "Fast-paced, dynamic transitions and custom color grading crafted for viral social media engagement.",
  },
  {
    id: "vid-4",
    title: "Highland Solitude // Travel Cinematography",
    category: "Documentary Film",
    duration: "2:30",
    format: "4K ProRes",
    poster: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    description: "Atmospheric landscapes, morning mist, and solitary exploration filmed with natural lighting and soundscapes.",
  },
  {
    id: "vid-5",
    title: "Artisan Brew // Café Commercial Film",
    category: "Brand Campaign",
    duration: "1:00",
    format: "4K Commercial",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    description: "Sensory macro food & beverage cinematography showcasing craft brewing techniques and warm café ambiance.",
  },
  {
    id: "vid-6",
    title: "Neon Horizon // Music Video Teaser",
    category: "Music Video",
    duration: "3:10",
    format: "Anamorphic Color Grade",
    poster: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    description: "A dark, moody music video production featuring prismatic lighting, silhouette choreography, and deep film grade.",
  },
];

export const VideoSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <section className="relative z-30 w-full py-20 px-6 md:px-12 lg:px-20 bg-[#060608] border-t border-white/10 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-14 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-400 text-xs font-mono mb-3">
            <Film className="w-3.5 h-3.5 text-zinc-400" />
            <span>VIDEOGRAPHY // MOTION & REELS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Videos
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mt-2 font-light leading-relaxed">
            From cinematic wedding stories and birthday recap reels to commercial brand promos and music videos. Click any frame to play.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_VIDEOS.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group relative rounded-2xl bg-[#0c0c12] border border-white/10 hover:border-white/30 overflow-hidden shadow-xl cursor-pointer transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Thumbnail Container */}
              <div className="relative w-full aspect-video overflow-hidden bg-zinc-950">
                <img
                  src={video.poster}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Center Play Button Badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Top Duration & Format Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-zinc-300">
                    {video.format}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-zinc-300 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-zinc-400" />
                    {video.duration}
                  </span>
                </div>
              </div>

              {/* Video Info Content */}
              <div className="p-5 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                    {video.category}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-zinc-200 transition-colors line-clamp-1">
                    {video.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light mt-1.5 leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                  <span className="font-mono text-[11px]">Watch Full Video</span>
                  <div className="flex items-center gap-1 text-white font-medium group-hover:translate-x-0.5 transition-transform">
                    <Play className="w-3 h-3 fill-current" />
                    <span>Play</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Player Modal */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl rounded-2xl bg-[#0f0f15] border border-white/15 overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Modal Video Header */}
            <div className="p-4 flex items-center justify-between border-b border-white/10 bg-[#0c0c12]">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-white/10 text-zinc-300 font-mono text-[11px]">
                  {activeVideo.category}
                </span>
                <h4 className="text-sm font-semibold text-white truncate max-w-md">
                  {activeVideo.title}
                </h4>
              </div>

              <button
                onClick={() => setActiveVideo(null)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Screen */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
              <video
                src={activeVideo.videoUrl}
                poster={activeVideo.poster}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>

            {/* Video Details Footer */}
            <div className="p-4 bg-[#0a0a0f] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-400 font-mono">
              <p className="text-zinc-300 font-sans text-xs">
                {activeVideo.description}
              </p>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="flex items-center gap-1">
                  <Volume2 className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Stereo Master</span>
                </span>
                <span>•</span>
                <span>{activeVideo.format}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
