"use client";

import {
  useRef,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { OwnerHero } from "@/components/OwnerHero";
import {
  Camera,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Mail,
  ArrowRight,
} from "lucide-react";

/* ---------------------------------------------------------
   ICONS: INSTAGRAM & WHATSAPP SVGS
--------------------------------------------------------- */
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

/* ---------------------------------------------------------
   ICONS: WHATSAPP SVG
--------------------------------------------------------- */
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

/* ---------------------------------------------------------
   TYPES & DATA MODELS
--------------------------------------------------------- */
export interface PhotoItem {
  id: string;
  type: "photo";
  src: string;
  fullSrc?: string;
  title: string;
  category: string;
  year: string;
  client?: string;
  tools: string;
}

export interface VideoItem {
  id: string;
  type: "video";
  poster?: string;
  videoUrl: string;
  title: string;
  category: string;
  duration: string;
  format: string;
  year: string;
  client?: string;
  tools: string;
  description: string;
}

/* ---------------------------------------------------------
   PHOTO WORKS DATA (OPTIMIZED FOR 60FPS + FULL RES LIGHTBOX)
--------------------------------------------------------- */
export const PHOTO_ITEMS: PhotoItem[] = [
  {
    id: "photo-1",
    type: "photo",
    src: "/photos/opt/ih1.jpeg",
    fullSrc: "/photos/ih1.jpeg",
    title: "Editorial Portrait Series",
    category: "Portrait Photography",
    year: "2026",
    client: "IBR CREATION",
    tools: "Lightroom & Snapseed",
  },
  {
    id: "photo-2",
    type: "photo",
    src: "/photos/opt/ih2.jpeg",
    fullSrc: "/photos/ih2.jpeg",
    title: "Cinematic Visual Stills",
    category: "Creative Photography",
    year: "2026",
    client: "IBR CREATION",
    tools: "Lightroom",
  },
  {
    id: "photo-3",
    type: "photo",
    src: "/photos/opt/ih3.jpeg",
    fullSrc: "/photos/ih3.jpeg",
    title: "Atmospheric Horizon",
    category: "Outdoor Stills",
    year: "2026",
    client: "IBR CREATION",
    tools: "Snapseed & Lightroom",
  },
  {
    id: "photo-4",
    type: "photo",
    src: "/photos/opt/ih4.jpeg",
    fullSrc: "/photos/ih4.jpeg",
    title: "Moody Silhouette & Light",
    category: "Fine Art Portrait",
    year: "2025",
    client: "IBR CREATION",
    tools: "Lightroom",
  },
  {
    id: "photo-5",
    type: "photo",
    src: "/photos/opt/ih5.jpeg",
    fullSrc: "/photos/ih5.jpeg",
    title: "Ceremony & Moments",
    category: "Wedding Shoot",
    year: "2026",
    client: "IBR CREATION",
    tools: "Lightroom Color Tone",
  },
  {
    id: "photo-6",
    type: "photo",
    src: "/photos/opt/ih6.jpeg",
    fullSrc: "/photos/ih6.jpeg",
    title: "Natural Tone Portrait",
    category: "Portrait Photography",
    year: "2025",
    client: "IBR CREATION",
    tools: "Snapseed Retouch",
  },
  {
    id: "photo-7",
    type: "photo",
    src: "/photos/opt/ih7.jpeg",
    fullSrc: "/photos/ih7.jpeg",
    title: "Candid Emotion & Glow",
    category: "Wedding Shoot",
    year: "2026",
    client: "IBR CREATION",
    tools: "Lightroom Soft Tone",
  },
  {
    id: "photo-8",
    type: "photo",
    src: "/photos/opt/ih8.jpeg",
    fullSrc: "/photos/ih8.jpeg",
    title: "Golden Hour Atmosphere",
    category: "Outdoor Stills",
    year: "2026",
    client: "IBR CREATION",
    tools: "Snapseed & Lightroom",
  },
  {
    id: "photo-9",
    type: "photo",
    src: "/photos/opt/ih9.jpeg",
    fullSrc: "/photos/ih9.jpeg",
    title: "Signature Frame Study",
    category: "Creative Portrait",
    year: "2025",
    client: "IBR CREATION",
    tools: "Lightroom Color Grade",
  },
  {
    id: "photo-10",
    type: "photo",
    src: "/photos/opt/ih10.jpeg",
    fullSrc: "/photos/ih10.jpeg",
    title: "Studio Light & Shadow",
    category: "Creative Photography",
    year: "2026",
    client: "IBR CREATION",
    tools: "Lightroom Moody Grade",
  },
  {
    id: "photo-11",
    type: "photo",
    src: "/photos/opt/ih11.jpeg",
    fullSrc: "/photos/ih11.jpeg",
    title: "Milestone Celebration",
    category: "Event Photography",
    year: "2025",
    client: "IBR CREATION",
    tools: "Snapseed Retouch",
  },
  {
    id: "photo-12",
    type: "photo",
    src: "/photos/opt/ih12.jpeg",
    fullSrc: "/photos/ih12.jpeg",
    title: "Cinematic Mood & Tone",
    category: "Visual Storytelling",
    year: "2026",
    client: "IBR CREATION",
    tools: "Lightroom B&W Curve",
  },
  {
    id: "photo-13",
    type: "photo",
    src: "/photos/opt/ih13.jpeg",
    fullSrc: "/photos/ih13.jpeg",
    title: "Candid Story Moment",
    category: "Wedding & Events",
    year: "2026",
    client: "IBR CREATION",
    tools: "Lightroom Color Tone",
  },
];

/* ---------------------------------------------------------
   VIDEO WORKS DATA (15 LOCAL CINEMATIC FILMS & REELS)
--------------------------------------------------------- */
export const VIDEO_ITEMS: VideoItem[] = [
  // Column 1 Videos
  {
    id: "vid-1",
    type: "video",
    title: "Cinematic Highlight Reel // 01",
    category: "Cinematic Film",
    duration: "0:21",
    format: "4K Color Grade",
    year: "2026",
    client: "IBR CREATION",
    tools: "CapCut Pro & VN",
    poster: "/videos/covers/iv1_cover.jpg",
    videoUrl: "/videos/iv1.mp4",
    description: "Dynamic cinematic edit highlighting visual rhythm, atmospheric color tones, and seamless cuts.",
  },
  {
    id: "vid-2",
    type: "video",
    title: "Ceremony & Moments // 02",
    category: "Wedding Story",
    duration: "0:43",
    format: "Full HD 60fps",
    year: "2026",
    client: "IBR CREATION",
    tools: "VN Video Editor",
    poster: "/videos/covers/iv2_cover.jpg",
    videoUrl: "/videos/iv2.mp4",
    description: "Heartfelt candid moments and vibrant energy preserved with natural warm color tones.",
  },
  {
    id: "vid-3",
    type: "video",
    title: "Visual Story & Rhythm // 03",
    category: "Visual Narrative",
    duration: "0:46",
    format: "Full HD Master",
    year: "2026",
    client: "IBR CREATION",
    tools: "CapCut & VN",
    poster: "/videos/covers/iv3_cover.jpg",
    videoUrl: "/videos/iv3.mp4",
    description: "Paced storytelling capturing intimate expressions, joy, and celebration details.",
  },
  {
    id: "vid-4",
    type: "video",
    title: "Golden Hour Stills & Motion // 04",
    category: "Cinematic Reel",
    duration: "0:21",
    format: "4K 60fps",
    year: "2026",
    client: "IBR CREATION",
    tools: "CapCut Pro",
    poster: "/videos/covers/iv4_cover.jpg",
    videoUrl: "/videos/iv4.mp4",
    description: "Atmospheric golden hour aesthetics with smooth motion stabilization and color grade.",
  },
  {
    id: "vid-5",
    type: "video",
    title: "Celebration Highlight Film // 05",
    category: "Event Highlight",
    duration: "0:25",
    format: "4K Cinema",
    year: "2026",
    client: "IBR CREATION",
    tools: "VN Editor & CapCut",
    poster: "/videos/covers/iv5_cover.jpg",
    videoUrl: "/videos/iv5.mp4",
    description: "Festive celebration highlights edited with fast-paced cuts and rhythmic transitions.",
  },
  {
    id: "vid-6",
    type: "video",
    title: "Signature Portrait Motion // 06",
    category: "Creative Edit",
    duration: "0:21",
    format: "4K Vertical",
    year: "2026",
    client: "IBR CREATION",
    tools: "CapCut Pro",
    poster: "/videos/covers/iv6_cover.jpg",
    videoUrl: "/videos/iv6.mp4",
    description: "Minimal, elegant portrait video motion study with deep shadows and refined lighting.",
  },
  {
    id: "vid-7",
    type: "video",
    title: "The Narrative Sequence // 07",
    category: "Wedding & Event",
    duration: "1:11",
    format: "4K Master Film",
    year: "2026",
    client: "IBR CREATION",
    tools: "CapCut & VN Editor",
    poster: "/videos/covers/iv7_cover.jpg",
    videoUrl: "/videos/iv7.mp4",
    description: "Full narrative extended sequence blending emotional storytelling with vibrant visuals.",
  },
  {
    id: "vid-8",
    type: "video",
    title: "Modern Beat Sync Reel // 08",
    category: "Social Reel",
    duration: "0:30",
    format: "9:16 Reel",
    year: "2026",
    client: "IBR CREATION",
    tools: "VN Video Editor",
    poster: "/videos/covers/iv8_cover.jpg",
    videoUrl: "/videos/iv8.mp4",
    description: "Trending audio-synced dynamic reel designed for maximum social engagement and flow.",
  },
  {
    id: "vid-9",
    type: "video",
    title: "Atmospheric Visual Journey // 09",
    category: "Cinematic Film",
    duration: "0:37",
    format: "4K Cinema Tone",
    year: "2026",
    client: "IBR CREATION",
    tools: "CapCut Pro",
    poster: "/videos/covers/iv9_cover.jpg",
    videoUrl: "/videos/iv9.mp4",
    description: "Rich colors, emotive cadence, and cinematic depth crafted for lasting impressions.",
  },
  {
    id: "vid-10",
    type: "video",
    title: "Editorial Framing & Tone // 10",
    category: "Creative Edit",
    duration: "0:28",
    format: "4K Grade",
    year: "2026",
    client: "IBR CREATION",
    tools: "CapCut & VN",
    poster: "/videos/covers/iv10_cover.jpg",
    videoUrl: "/videos/iv10.mp4",
    description: "Sophisticated editorial frame pacing with emphasis on light, emotion, and texture.",
  },
  {
    id: "vid-11",
    type: "video",
    title: "Festive Vibes & Energy // 11",
    category: "Event Highlight",
    duration: "0:36",
    format: "Full HD 60fps",
    year: "2026",
    client: "IBR CREATION",
    tools: "VN Video Editor",
    poster: "/videos/covers/iv11_cover.jpg",
    videoUrl: "/videos/iv11.mp4",
    description: "High-energy candid moments and festive smiles captured with lively movement.",
  },
  {
    id: "vid-12",
    type: "video",
    title: "Expressive Short Vignette // 12",
    category: "Quick Cut Reel",
    duration: "0:13",
    format: "9:16 Reel",
    year: "2026",
    client: "IBR CREATION",
    tools: "CapCut Pro",
    poster: "/videos/covers/iv12_cover.jpg",
    videoUrl: "/videos/iv12.mp4",
    description: "Snappy, punchy short vignette engineered for instant visual impact.",
  },
  {
    id: "vid-13",
    type: "video",
    title: "Cinematic Grand Master // 13",
    category: "Cinematic Film",
    duration: "0:32",
    format: "4K Master Film",
    year: "2026",
    client: "IBR CREATION",
    tools: "CapCut Pro & VN",
    poster: "/videos/covers/iv13_cover.jpg",
    videoUrl: "/videos/iv13.mp4",
    description: "Pristine visual production with rich dynamic range and cinematic color grade.",
  },
  {
    id: "vid-14",
    type: "video",
    title: "Candid Emotion & Glow // 14",
    category: "Wedding Story",
    duration: "0:29",
    format: "4K Color Grade",
    year: "2026",
    client: "IBR CREATION",
    tools: "VN Video Editor",
    poster: "/videos/covers/iv14_cover.jpg",
    videoUrl: "/videos/iv14.mp4",
    description: "Warm and authentic moments captured with natural light and heartfelt composition.",
  },
  {
    id: "vid-15",
    type: "video",
    title: "Twilight Sunset Finale // 15",
    category: "Cinematic Reel",
    duration: "0:26",
    format: "4K Cinema",
    year: "2026",
    client: "IBR CREATION",
    tools: "CapCut Pro & VN",
    poster: "/videos/covers/iv15_cover.jpg",
    videoUrl: "/videos/iv15.mp4",
    description: "Dramatic twilight tones, subtle motion, and cinematic sunset framing.",
  },
];

/* ---------------------------------------------------------
   CARD RENDERERS: PHOTO CARD & VIDEO CARD
--------------------------------------------------------- */
interface PhotoCardProps {
  item: PhotoItem;
  onLoad?: () => void;
  onClick: (item: PhotoItem) => void;
}

const PhotoCard = ({ item, onLoad, onClick }: PhotoCardProps) => {
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick(item);
      }}
      className="group w-full h-[220px] sm:h-[300px] md:h-[400px] flex-shrink-0 bg-[#0e0e14] transition-transform duration-300 hover:scale-[1.03] cursor-pointer relative rounded-xl overflow-hidden border border-white/10 hover:border-white/30 shadow-xl"
    >
      <img
        src={item.src}
        alt={item.title}
        loading="lazy"
        decoding="async"
        onLoad={onLoad}
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
      />
    </div>
  );
};

interface VideoCardProps {
  item: VideoItem;
  onLoad?: () => void;
  onClick: (item: VideoItem) => void;
}

const VideoCard = ({ item, onLoad, onClick }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      if (onLoad) onLoad();
      if (video.currentTime === 0) {
        try {
          video.currentTime = 0.001;
        } catch {}
      }
    };

    video.addEventListener("loadeddata", handleLoadedData);
    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
    };
  }, [onLoad]);

  const handleMouseEnter = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      try {
        videoRef.current.currentTime = 0.001;
      } catch {}
    }
  };

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick(item);
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group w-full h-[220px] sm:h-[300px] md:h-[400px] flex-shrink-0 bg-[#0e0e14] transition-transform duration-300 hover:scale-[1.03] cursor-pointer relative rounded-xl overflow-hidden border border-white/10 hover:border-white/40 shadow-xl"
    >
      <video
        ref={videoRef}
        src={`${item.videoUrl}#t=0.001`}
        poster={item.poster}
        preload="metadata"
        playsInline
        muted
        loop
        className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Center Frosted Play Button (fades smoothly when hover preview is playing) */}
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ${
          isPlaying ? "opacity-0 scale-90" : "opacity-100 scale-100"
        }`}
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/75 border border-white/30 flex items-center justify-center text-white shadow-2xl group-hover:scale-115 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
          <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />
        </div>
      </div>
    </div>
  );
};

/* ---------------------------------------------------------
   MAIN COMPONENT: 3D PARALLAX UNFURLING GALLERY
--------------------------------------------------------- */
export interface ParallaxGalleryProps {
  className?: string;
  showOwnerHero?: boolean;
  headerSlot?: ReactNode;
}

export default function Component({
  className = "",
  showOwnerHero = true,
  headerSlot,
}: ParallaxGalleryProps = {}) {
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryAnchorRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<"photos" | "videos">("photos");
  const [isVideoMuted, setIsVideoMuted] = useState(false);

  const selectedPhoto = selectedPhotoIndex !== null ? PHOTO_ITEMS[selectedPhotoIndex] : null;
  const selectedVideo = selectedVideoIndex !== null ? VIDEO_ITEMS[selectedVideoIndex] : null;

  const handleOpenPhoto = (item: PhotoItem) => {
    const idx = PHOTO_ITEMS.findIndex((p) => p.id === item.id);
    setSelectedPhotoIndex(idx !== -1 ? idx : 0);
  };

  const handlePrevPhoto = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setSelectedPhotoIndex((prev) => {
      if (prev === null) return null;
      return prev > 0 ? prev - 1 : PHOTO_ITEMS.length - 1;
    });
  };

  const handleNextPhoto = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setSelectedPhotoIndex((prev) => {
      if (prev === null) return null;
      return prev < PHOTO_ITEMS.length - 1 ? prev + 1 : 0;
    });
  };

  const handleOpenVideo = (item: VideoItem) => {
    const idx = VIDEO_ITEMS.findIndex((v) => v.id === item.id);
    setSelectedVideoIndex(idx !== -1 ? idx : 0);
  };

  const handlePrevVideo = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setSelectedVideoIndex((prev) => {
      if (prev === null) return null;
      return prev > 0 ? prev - 1 : VIDEO_ITEMS.length - 1;
    });
  };

  const handleNextVideo = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setSelectedVideoIndex((prev) => {
      if (prev === null) return null;
      return prev < VIDEO_ITEMS.length - 1 ? prev + 1 : 0;
    });
  };

  // Distribute photos and videos cleanly across 3 balanced columns
  const col1Photos = PHOTO_ITEMS.filter((_, i) => i % 3 === 0);
  const col2Photos = PHOTO_ITEMS.filter((_, i) => i % 3 === 1);
  const col3Photos = PHOTO_ITEMS.filter((_, i) => i % 3 === 2);

  const col1Videos = VIDEO_ITEMS.filter((_, i) => i % 3 === 0);
  const col2Videos = VIDEO_ITEMS.filter((_, i) => i % 3 === 1);
  const col3Videos = VIDEO_ITEMS.filter((_, i) => i % 3 === 2);

  // LINKED SCROLL: Tracks scroll progress within the gallery container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollWrapperRef,
    offset: ["start start", "end end"],
  });

  // LENIS SMOOTH MOMENTUM SCROLL ENGINE (Attached directly to scroll container)
  useEffect(() => {
    const el = scrollWrapperRef.current;
    if (!el) return;

    const lenis = new Lenis({
      wrapper: el,
      content: el.firstElementChild as HTMLElement,
      eventsTarget: el,
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
      autoToggle: false, // Prevents Lenis from setting overflow:clip
    });

    lenisRef.current = lenis;
    (window as any).__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      delete (window as any).__lenis;
    };
  }, []);

  // Track active section ("photos" vs "videos") cleanly without unnecessary re-renders
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const nextSection = latest < 0.48 ? "photos" : "videos";
      setActiveSection((prev) => (prev !== nextSection ? nextSection : prev));
    });
  }, [scrollYProgress]);

  // Prevent background scroll events while lightbox modal is active (WITHOUT stopping or resetting Lenis)
  useEffect(() => {
    if (selectedPhotoIndex === null && selectedVideoIndex === null) return;

    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [selectedPhotoIndex, selectedVideoIndex]);

  // Handle keyboard events (Escape to close, Left/Right arrow keys to cycle photos or videos)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPhotoIndex(null);
        setSelectedVideoIndex(null);
      } else if (selectedPhotoIndex !== null) {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          handlePrevPhoto();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          handleNextPhoto();
        }
      } else if (selectedVideoIndex !== null) {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          handlePrevVideo();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          handleNextVideo();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, selectedVideoIndex]);

  // CONTINUOUS NON-STOP UPWARD GLIDE: Driven directly by Lenis momentum with zero deadzone or hesitation
  const yGallery = useTransform(scrollYProgress, [0, 0.5, 1], ["48%", "0%", "-48%"]);

  const handleScrollToGallery = () => {
    if (!containerRef.current) return;
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(containerRef.current.offsetTop, {
        duration: 1.25,
      });
    } else if (scrollWrapperRef.current) {
      scrollWrapperRef.current.scrollTo({
        top: containerRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleJumpToSection = (section: "photos" | "videos") => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;
    const targetScroll =
      section === "photos"
        ? containerTop
        : containerTop + containerHeight * 0.50;

    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(targetScroll, {
        duration: 1.25,
      });
    } else if (scrollWrapperRef.current) {
      scrollWrapperRef.current.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={scrollWrapperRef}
      className={`w-full h-screen overflow-y-auto overflow-x-hidden bg-[#050505] text-white relative ${className}`}
    >
      <div className="relative w-full">
      {/* 01: FIRST PAGE - WHO AM I? (MUHAMMED IHSAN / IBR CREATION) */}
      {headerSlot ? (
        headerSlot
      ) : showOwnerHero ? (
        <OwnerHero onExploreClick={handleScrollToGallery} />
      ) : null}

      {/* 02: SECOND PAGE - THE WORKS (PHOTOS -> ONE BIG HEADING 'VIDEOS' -> VIDEOS) */}
      <section
        ref={containerRef}
        className="relative w-full h-[580vh] bg-[#050505] text-white font-sans selection:bg-white selection:text-black"
      >
        <div
          ref={galleryAnchorRef}
          className="sticky top-0 h-screen w-full flex justify-center items-center overflow-hidden"
        >
          {/* Top Section Navigator HUD */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 p-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 shadow-2xl">
            <button
              onClick={() => handleJumpToSection("photos")}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                activeSection === "photos"
                  ? "bg-white text-black font-semibold shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Photos</span>
            </button>
            <button
              onClick={() => handleJumpToSection("videos")}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                activeSection === "videos"
                  ? "bg-white text-black font-semibold shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Videos</span>
            </button>
          </div>

          {/* Full-bleed 3D Gallery Canvas (No bounding box or border) */}
          <div className="relative w-full h-full bg-[#050505] overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              {/* Ambient Vignette Masks - GPU Friendly Hardware Gradients */}
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#050505]/60 to-transparent z-20 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050505]/70 to-transparent z-20 pointer-events-none" />
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

              {/* Flat & Centered Main Grid: Completely flat, zero slope, centered in the middle */}
              <motion.div
                style={{
                  y: yGallery,
                }}
                className="relative flex flex-col items-center w-full max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 origin-center opacity-100 will-change-transform pointer-events-auto"
              >
                {/* 00: ONLY ONE BIG HEADING: 'PHOTOS' */}
                <div className="w-full flex flex-col items-center justify-center text-center pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 select-none pointer-events-none">
                  <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black text-white tracking-widest uppercase [text-shadow:0_15px_40px_rgba(0,0,0,0.95)]">
                    PHOTOS
                  </h2>
                </div>

                {/* 01: 3x5 GRID OF PHOTOS (3 EQUAL BALANCED COLUMNS, CENTERED IN MIDDLE) */}
                <div className="flex gap-4 sm:gap-6 md:gap-8 justify-center items-start w-full">
                  {/* Column 1 Photos */}
                  <div className="flex-1 min-w-0 flex flex-col gap-4 sm:gap-6 md:gap-8">
                    {col1Photos.map((item) => (
                      <PhotoCard
                        key={item.id}
                        item={item}
                        onClick={handleOpenPhoto}
                      />
                    ))}
                  </div>

                  {/* Column 2 Photos (MIDDLE COLUMN) */}
                  <div className="flex-1 min-w-0 flex flex-col gap-4 sm:gap-6 md:gap-8">
                    {col2Photos.map((item) => (
                      <PhotoCard
                        key={item.id}
                        item={item}
                        onClick={handleOpenPhoto}
                      />
                    ))}
                  </div>

                  {/* Column 3 Photos */}
                  <div className="flex-1 min-w-0 flex flex-col gap-4 sm:gap-6 md:gap-8">
                    {col3Photos.map((item) => (
                      <PhotoCard
                        key={item.id}
                        item={item}
                        onClick={handleOpenPhoto}
                      />
                    ))}
                  </div>
                </div>

                {/* 02: ONLY ONE BIG HEADING: 'VIDEOS' */}
                <div className="w-full flex flex-col items-center justify-center text-center py-20 sm:py-28 md:py-36 select-none pointer-events-none">
                  <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black text-white tracking-widest uppercase [text-shadow:0_15px_40px_rgba(0,0,0,0.95)]">
                    VIDEOS
                  </h2>
                </div>

                {/* 03: 3x5 GRID OF VIDEOS (3 EQUAL BALANCED COLUMNS, CENTERED IN MIDDLE) */}
                <div className="flex gap-4 sm:gap-6 md:gap-8 justify-center items-start w-full">
                  {/* Column 1 Videos */}
                  <div className="flex-1 min-w-0 flex flex-col gap-4 sm:gap-6 md:gap-8">
                    {col1Videos.map((item) => (
                      <VideoCard
                        key={item.id}
                        item={item}
                        onClick={handleOpenVideo}
                      />
                    ))}
                  </div>

                  {/* Column 2 Videos (MIDDLE COLUMN) */}
                  <div className="flex-1 min-w-0 flex flex-col gap-4 sm:gap-6 md:gap-8">
                    {col2Videos.map((item) => (
                      <VideoCard
                        key={item.id}
                        item={item}
                        onClick={handleOpenVideo}
                      />
                    ))}
                  </div>

                  {/* Column 3 Videos */}
                  <div className="flex-1 min-w-0 flex flex-col gap-4 sm:gap-6 md:gap-8">
                    {col3Videos.map((item) => (
                      <VideoCard
                        key={item.id}
                        item={item}
                        onClick={handleOpenVideo}
                      />
                    ))}
                  </div>
                </div>

                {/* 04: EXPLORE MORE ON INSTAGRAM BUTTON */}
                <div className="w-full flex justify-center items-center pt-14 sm:pt-20 pb-16 pointer-events-auto">
                  <a
                    href="https://instagram.com/ibr_creation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3.5 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-orange-500/20 hover:from-purple-600/35 hover:via-pink-600/35 hover:to-orange-500/35 border border-white/20 hover:border-pink-500/60 text-white font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-2xl hover:shadow-[0_0_35px_rgba(236,72,153,0.35)] hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-md group-hover:rotate-12 transition-transform duration-300">
                      <InstagramIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
                    </div>
                    <span>Explore More on Instagram</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-pink-300 group-hover:text-white" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 03: THIRD PAGE - SEPARATE ENDING PAGE (NO VISIBLE SEPARATIONS / NO LINES) */}
      <section className="relative w-full min-h-screen bg-[#050505] text-white flex flex-col justify-between items-center px-6 sm:px-12 md:px-20 py-16 sm:py-24 select-none">
        {/* Subtle Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-[140px] pointer-events-none" />

        <div />

        {/* Center Brand Showcase */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl my-auto py-8">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-widest uppercase [text-shadow:0_20px_50px_rgba(0,0,0,0.95)]">
            IBR CREATION
          </h2>

          <p className="text-base sm:text-xl md:text-2xl text-zinc-300 font-light tracking-widest italic max-w-xl mt-6">
            &ldquo;Every Frame Has a Story.&rdquo;
          </p>

          {/* Book Your Slot CTA Button */}
          <div className="mt-8 sm:mt-10 pointer-events-auto">
            <a
              href="https://wa.me/917012258448?text=Hello%20Muhammed%20Ihsan,%20I%20would%20like%20to%20book%20a%20slot%20for%20a%20photography%20/%20videography%20session%20with%20IBR%20CREATION."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-white text-black font-semibold text-xs sm:text-sm tracking-wider uppercase hover:bg-zinc-200 transition-all duration-300 shadow-2xl hover:shadow-[0_0_35px_rgba(255,255,255,0.35)] hover:scale-105 cursor-pointer"
            >
              <span>Book Your Slot</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-5 sm:gap-7 mt-6 sm:mt-8 pointer-events-auto">
            <a
              href="https://instagram.com/ibr_creation"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white/[0.04] hover:bg-gradient-to-tr hover:from-purple-600/30 hover:to-pink-600/30 border border-white/10 hover:border-pink-500/50 text-zinc-300 hover:text-pink-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl cursor-pointer"
            >
              <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://wa.me/917012258448?text=Hello%20Muhammed%20Ihsan,%20I%20am%20interested%20in%20IBR%20CREATION%20photography%20and%20videography%20services"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white/[0.04] hover:bg-emerald-500/15 border border-white/10 hover:border-emerald-500/50 text-zinc-300 hover:text-emerald-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:ibrcreation.visuals@gmail.com?subject=Inquiry%20for%20IBR%20CREATION%20//%20Muhammed%20Ihsan"
              aria-label="Email"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/[0.04] hover:bg-sky-500/15 border border-white/10 hover:border-sky-500/50 text-zinc-300 hover:text-sky-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl cursor-pointer"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>

        {/* Bottom Footer Credits - No visible border / separator line */}
        <div className="relative z-10 w-full flex items-center justify-between text-zinc-600 text-xs font-mono pt-8">
          <span>© 2026 IBR CREATION</span>
          <span>MUHAMMED IHSAN</span>
        </div>
      </section>
      </div>

      {/* Immersive Full-View Photo Lightbox Modal - 100% Pure Image with Keyboard & Arrow Navigation */}
      {typeof document !== "undefined" && selectedPhoto && createPortal(
        <div
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setSelectedPhotoIndex(null);
          }}
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200 select-none"
        >
          {/* Floating Close Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setSelectedPhotoIndex(null);
            }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 p-2.5 sm:p-3 rounded-full bg-black/70 hover:bg-white hover:text-black text-white border border-white/20 transition-all cursor-pointer shadow-2xl backdrop-blur-md hover:scale-110 active:scale-95"
            aria-label="Close photo view"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Left Arrow Button (Previous Photo) */}
          <button
            type="button"
            onClick={handlePrevPhoto}
            className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-full bg-black/70 hover:bg-white hover:text-black text-white border border-white/20 transition-all cursor-pointer shadow-2xl backdrop-blur-md hover:scale-110 active:scale-95"
            aria-label="Previous photo (Left arrow key or click)"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Right Arrow Button (Next Photo) */}
          <button
            type="button"
            onClick={handleNextPhoto}
            className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-full bg-black/70 hover:bg-white hover:text-black text-white border border-white/20 transition-all cursor-pointer shadow-2xl backdrop-blur-md hover:scale-110 active:scale-95"
            aria-label="Next photo (Right arrow key or click)"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Center Image: 100% Pure, Fully Visible, Zero Text Clutter */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-auto max-w-full max-h-[86vh] sm:max-h-[90vh] md:max-h-[92vh] flex items-center justify-center p-2"
          >
            <img
              key={selectedPhoto.id}
              src={selectedPhoto.fullSrc || selectedPhoto.src}
              alt={selectedPhoto.title}
              className="max-h-[82vh] sm:max-h-[88vh] md:max-h-[92vh] w-auto max-w-full object-contain rounded-xl shadow-[0_0_80px_rgba(0,0,0,0.95)] border border-white/10"
            />
          </div>
        </div>,
        document.body
      )}

      {/* Interactive Cinema Video Player Modal (Rendered via Portal to protect scroll container) */}
      {typeof document !== "undefined" && selectedVideo && createPortal(
        <div
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setSelectedVideoIndex(null);
          }}
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200 select-none"
        >
          {/* Floating Close Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setSelectedVideoIndex(null);
            }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 p-2.5 sm:p-3 rounded-full bg-black/70 hover:bg-white hover:text-black text-white border border-white/20 transition-all cursor-pointer shadow-2xl backdrop-blur-md hover:scale-110 active:scale-95"
            aria-label="Close video player"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Left Arrow Button (Previous Video) */}
          <button
            type="button"
            onClick={handlePrevVideo}
            className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-full bg-black/70 hover:bg-white hover:text-black text-white border border-white/20 transition-all cursor-pointer shadow-2xl backdrop-blur-md hover:scale-110 active:scale-95"
            aria-label="Previous video (Left arrow key or click)"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Right Arrow Button (Next Video) */}
          <button
            type="button"
            onClick={handleNextVideo}
            className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-full bg-black/70 hover:bg-white hover:text-black text-white border border-white/20 transition-all cursor-pointer shadow-2xl backdrop-blur-md hover:scale-110 active:scale-95"
            aria-label="Next video (Right arrow key or click)"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Floating Watch More on Instagram Button */}
          <a
            href="https://instagram.com/ibr_creation"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="group absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-2.5 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-black/80 hover:bg-black/95 text-white border border-white/20 hover:border-pink-500/70 text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 shadow-2xl backdrop-blur-xl hover:scale-105 active:scale-95 cursor-pointer hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-md group-hover:rotate-12 transition-transform duration-300">
              <InstagramIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
            </div>
            <span>Watch More on Instagram</span>
            <ArrowRight className="w-3.5 h-3.5 text-pink-400 group-hover:translate-x-1 group-hover:text-white transition-transform" />
          </a>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[78vh] sm:max-h-[82vh] rounded-2xl bg-black border border-white/15 overflow-hidden shadow-2xl flex items-center justify-center mb-6 sm:mb-8"
          >
            {/* Video Player Box - Pure Full-Bleed Video without any text clutter */}
            <video
              key={selectedVideo.videoUrl}
              src={selectedVideo.videoUrl}
              poster={selectedVideo.poster}
              controls
              autoPlay
              playsInline
              muted={isVideoMuted}
              className="max-h-[74vh] sm:max-h-[80vh] w-auto max-w-full object-contain"
            />

            {/* Mute/Unmute toggle */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsVideoMuted(!isVideoMuted);
              }}
              className="absolute top-4 left-4 z-20 p-2 sm:p-2.5 rounded-full bg-black/75 hover:bg-black/95 text-white border border-white/20 transition-all cursor-pointer shadow-xl backdrop-blur-md"
              title={isVideoMuted ? "Unmute" : "Mute"}
              aria-label={isVideoMuted ? "Unmute video" : "Mute video"}
            >
              {isVideoMuted ? (
                <VolumeX className="w-4 h-4 text-red-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-white" />
              )}
            </button>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
