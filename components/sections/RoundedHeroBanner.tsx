"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";

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
  // Show animation immediately - no lazy loading
  const showScene = true;

  return (
    <section className="relative w-full">
      {/* Full-width hero container — 100% width, 3D as full background */}
      <div className="relative w-full overflow-hidden rounded-b-[28px] sm:rounded-b-[32px] min-h-[780px] sm:min-h-[680px] lg:min-h-[720px] xl:min-h-[760px]">
        {/* 3D animation — full hero background */}
        <div className="absolute inset-0 z-0">
          <HeroBackgroundScene />
        </div>

        {/* Creative gradient overlays — readable text + vignette + soft red glow - dark with red like reference */}
        <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden>
          {/* Base dark gradient - dark like reference */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-slate-950/75 to-black/85" />
          {/* Main dark gradient overlay - dark but show animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#283b4a]/80 via-[#283b4a]/70 to-black/65" />
          {/* Vertical gradient - strong dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
          {/* Red tint overlay - creative mix - stronger */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#dc2626]/18 via-transparent to-[#dc2626]/22" />
          {/* Right side dark overlay */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/40 to-transparent" />
          {/* Enhanced red glow - larger and more visible */}
          <div className="absolute top-1/2 right-1/4 w-56 h-56 bg-[#dc2626]/22 rounded-full blur-3xl" />
          {/* Additional red accent glow - stronger */}
          <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-[#dc2626]/18 rounded-full blur-2xl" />
          {/* Extra red layer for depth */}
          <div className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-[#dc2626]/15 rounded-full blur-2xl" />
        </div>

        {/* Content layer — pt for header overlap so hero is visible from top */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-[780px] sm:min-h-[680px] lg:min-h-[720px] xl:min-h-[760px] pt-20 lg:pt-[88px]">
          {/* Left: text block — wider on desktop */}
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-14 xl:px-16 pt-6 sm:pt-12 lg:pt-14 xl:pt-16 pb-8 sm:pb-16 lg:col-span-8 xl:col-span-7 lg:max-w-[720px] xl:max-w-[800px]">
            <div className="mb-3 inline-flex w-fit rounded-full bg-[#e4ba8b] px-3.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#283b4a] shadow-lg">
              290+ Projects Delivered
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

            {/* Stats - visible on mobile to fill space */}
            <div className="grid grid-cols-3 gap-4 mt-8 lg:hidden">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-playfair font-bold text-[#e4ba8b]">290+</div>
                <div className="text-[9px] sm:text-[10px] text-white/60 uppercase tracking-wider mt-1">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-playfair font-bold text-[#e4ba8b]">8+</div>
                <div className="text-[9px] sm:text-[10px] text-white/60 uppercase tracking-wider mt-1">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-playfair font-bold text-[#e4ba8b]">100%</div>
                <div className="text-[9px] sm:text-[10px] text-white/60 uppercase tracking-wider mt-1">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right: creative space with abstract elements */}
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-5 items-center justify-center relative p-8 xl:p-12">
            {/* Stats on desktop */}
            <div className="absolute top-16 right-16 xl:right-24 flex flex-col gap-6">
              <div className="text-right">
                <div className="text-5xl xl:text-6xl font-playfair font-bold text-white/10 leading-none">290+</div>
                <div className="text-[10px] text-white/30 uppercase tracking-wider mt-1">Projects Delivered</div>
              </div>
              <div className="text-right">
                <div className="text-5xl xl:text-6xl font-playfair font-bold text-white/10 leading-none">8+</div>
                <div className="text-[10px] text-white/30 uppercase tracking-wider mt-1">Years Experience</div>
              </div>
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
