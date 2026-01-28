"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ProjectVideoProps {
  video?: string;
  projectName: string;
}

export default function ProjectVideo({
  video,
  projectName,
}: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading video
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "100px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      if (document.fullscreenElement === videoElement) {
        // When entering fullscreen, maintain portrait aspect ratio
        videoElement.style.objectFit = "contain";
        videoElement.style.width = "auto";
        videoElement.style.height = "100vh";
        videoElement.style.maxWidth = "56.25vh"; // Maintain 9:16 aspect ratio
        videoElement.style.margin = "0 auto";
      } else {
        // Reset when exiting fullscreen
        videoElement.style.width = "";
        videoElement.style.height = "";
        videoElement.style.maxWidth = "";
        videoElement.style.margin = "";
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange,
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange,
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange,
      );
    };
  }, []);

  if (!video) return null;

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-8"
    >
      {/* Left Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="hidden lg:flex lg:col-span-3 flex-col items-end gap-6 justify-center"
      >
        {/* Geometric shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 12 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-14 h-14 rounded-xl border-2 border-[#e4ba8b]/40 shadow-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-1 h-32 bg-gradient-to-b from-transparent via-[#e4ba8b]/50 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-10 h-10 rounded-full border-2 border-[#e4ba8b]/30"
        />

        {/* Text labels */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-right mt-2"
        >
          <p className="text-[10px] text-[#283b4a]/60 uppercase tracking-[0.15em] mb-1.5 font-medium">
            Video
          </p>
          <p className="text-[10px] text-[#283b4a]/60 uppercase tracking-[0.15em] font-medium">
            Showcase
          </p>
        </motion.div>
      </motion.div>

      {/* Video - Center (Smaller & Refined) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="flex justify-center lg:col-span-6 relative"
      >
        {/* Decorative ring around video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[260px] sm:w-[300px] h-[460px] sm:h-[540px] rounded-2xl border border-[#e4ba8b]/20" />
        </motion.div>

        <div className="relative w-full max-w-[240px] sm:max-w-[280px] aspect-[9/16] rounded-xl overflow-hidden shadow-2xl ring-2 ring-black/5 bg-[#283b4a] z-10">
          {isInView && (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain bg-[#283b4a]"
              controls
              controlsList="nodownload nofullscreen"
              preload="none"
              onContextMenu={(e) => e.preventDefault()}
            >
              <source src={video} type="video/mp4" />
              <source src={video} type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          )}
          {/* Enhanced overlay gradient */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Right Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="hidden lg:flex lg:col-span-3 flex-col items-start gap-6 justify-center"
      >
        {/* Geometric shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: -12 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-12 h-12 rounded-full border-2 border-[#283b4a]/20 shadow-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-1 h-28 bg-gradient-to-b from-transparent via-[#e4ba8b]/40 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-16 h-16 rounded-xl border-2 border-[#e4ba8b]/25 rotate-[-8deg]"
        />

        {/* Text labels */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-left mt-2"
        >
          <p className="text-[10px] text-[#283b4a]/60 uppercase tracking-[0.15em] mb-1.5 font-medium">
            Project
          </p>
          <p className="text-[10px] text-[#283b4a]/60 uppercase tracking-[0.15em] font-medium">
            Gallery
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
