import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SvgPathDrawingTextAnimation } from "@/components/ui/path-drawing-portfolio-hero";

interface PathDrawingLoaderProps {
  onZoomStart?: () => void;
  onComplete?: () => void;
  durationSec?: number;
}

export const PathDrawingLoader: React.FC<PathDrawingLoaderProps> = ({
  onZoomStart,
  onComplete,
  durationSec = 3.2,
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const triggerTransition = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    if (onZoomStart) onZoomStart();

    setTimeout(() => {
      if (onComplete) onComplete();
    }, 950);
  };

  const handleDrawComplete = () => {
    // Hold for a brief moment after path drawing finishes then begin the premium zoom transition
    setTimeout(() => {
      triggerTransition();
    }, 350);
  };

  // Safety timer to guarantee at least durationSec and avoid any hang
  useEffect(() => {
    const safety = setTimeout(() => {
      triggerTransition();
    }, (durationSec + 1.0) * 1000);

    return () => clearTimeout(safety);
  }, [durationSec]);

  return (
    <motion.div
      key="path-drawing-loader"
      initial={{ opacity: 1, scale: 1 }}
      animate={
        isTransitioning
          ? {
              scale: 2.8,
              opacity: 0,
              filter: "blur(24px)",
              transition: {
                duration: 0.95,
                ease: [0.76, 0, 0.24, 1], // Cinematic luxury ease
              },
            }
          : {
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
            }
      }
      className="fixed inset-0 z-[9999] flex items-center justify-center p-6 sm:p-12 bg-black text-white select-none pointer-events-auto overflow-hidden origin-center"
    >
      {/* ONLY the Main Drawn Text: IBR CREATION */}
      <div className="w-full max-w-5xl flex items-center justify-center">
        <SvgPathDrawingTextAnimation
          text="IBR CREATION"
          fromColor="#ffffff"
          toColor="#ffffff"
          className="w-full min-h-[200px] sm:min-h-[260px] md:min-h-[320px]"
          fontSize={110}
          viewBoxWidth={1000}
          viewBoxHeight={200}
          strokeWidth={2.4}
          durationSec={durationSec}
          loop={false}
          onDrawComplete={handleDrawComplete}
        />
      </div>
    </motion.div>
  );
};

export default PathDrawingLoader;
