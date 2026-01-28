"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const HeroBackgroundScene = dynamic(
  () => import("@/components/three/HeroBackgroundScene"),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-[#283b4a]" />,
  },
);

export default function RoundedHeroBanner({
  eyebrow = "Crafting Tomorrow's Living Spaces",
  titleLine1 = "Set New Standards",
  titleLine2 = "in Modern Design",
  titleLine3 = "& Construction",
}: {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  titleLine3?: string;
}) {
  const [showScene, setShowScene] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lazy load Three.js scene only when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Delay loading slightly to prioritize initial render
          setTimeout(() => setShowScene(true), 300);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full" ref={containerRef}>
      {/* Full-width hero container — 100% width, 3D as full background */}
      <div className="relative w-full overflow-hidden rounded-b-[28px] sm:rounded-b-[32px] min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] xl:min-h-[760px]">
        {/* 3D animation — full hero background (lazy loaded) */}
        <div className="absolute inset-0 z-0">
          {showScene ? (
            <HeroBackgroundScene />
          ) : (
            <div className="absolute inset-0 bg-[#283b4a]" />
          )}
        </div>

        {/* Creative gradient overlays — readable text + vignette + soft red glow */}
        <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-r from-[#283b4a]/90 via-[#283b4a]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#283b4a]/50 via-transparent to-[#283b4a]/30" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent" />
          {/* Soft red glow, blended into background (not a hard square) */}
          <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-[#dc2626]/10 rounded-full blur-3xl" />
        </div>

        {/* Content layer — pt for header overlap so hero is visible from top */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] xl:min-h-[760px] pt-20 lg:pt-[88px]">
          {/* Left: text block — wider on desktop */}
          <div className="flex flex-col justify-start px-6 sm:px-10 lg:px-14 xl:px-16 pt-10 sm:pt-12 lg:pt-14 xl:pt-16 pb-12 sm:pb-16 lg:col-span-8 xl:col-span-7 lg:max-w-[720px] xl:max-w-[800px]">
            <div className="mb-3 inline-flex w-fit rounded-full bg-[#e4ba8b] px-3.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#283b4a] shadow-lg">
              25+ Projects Delivered
            </div>
            <p className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#e4ba8b]/90 mb-2.5 sm:mb-3">
              {eyebrow}
            </p>
            <h1 className="font-playfair text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-[1.1] text-white mb-4 sm:mb-5">
              {titleLine1}
              <br />
              <span className="italic text-[#e4ba8b]">{titleLine2}</span>
              <br />
              {titleLine3}
            </h1>
            {/* Additional description text */}
            <p className="text-xs sm:text-sm lg:text-base text-white/85 leading-relaxed mb-6 sm:mb-7 max-w-[600px]">
              We transform architectural concepts into living experiences, where
              every detail is intentional, every material tells a story, and
              every space becomes a testament to refined craftsmanship and
              timeless elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-[#e4ba8b] px-6 py-2.5 text-xs sm:text-sm font-medium text-[#283b4a] shadow-lg transition-all duration-200 hover:bg-[#d4a97a] hover:shadow-xl hover:scale-[1.02]"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-6 py-2.5 text-xs sm:text-sm font-medium text-white transition-all duration-200 hover:bg-white/10 hover:border-white/60"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right: creative space with abstract elements — smaller */}
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-5 items-center justify-center relative p-8 xl:p-12">
            {/* Large decorative number */}
            <div className="absolute top-12 right-16 xl:right-24 text-[140px] xl:text-[180px] font-playfair font-bold text-white/6 leading-none select-none">
              25
            </div>

            {/* Floating geometric shapes */}
            <div className="absolute top-20 right-8 xl:right-16 w-14 h-14 rounded-xl border-2 border-[#e4ba8b]/25 rotate-12" />
            <div className="absolute bottom-24 right-12 xl:right-20 w-10 h-10 rounded-full border-2 border-white/15" />
            <div className="absolute top-1/2 right-4 xl:right-8 w-1 h-20 bg-gradient-to-b from-transparent via-[#e4ba8b]/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
