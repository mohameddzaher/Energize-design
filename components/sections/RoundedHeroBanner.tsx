"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Glasses } from "lucide-react";

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
  return (
    <section className="relative w-full">
      <div className="relative w-full overflow-hidden rounded-b-[28px] sm:rounded-b-[32px] min-h-[780px] sm:min-h-[680px] lg:min-h-[720px] xl:min-h-[760px]">
        {/* 3D background */}
        <div className="absolute inset-0 z-0">
          <HeroBackgroundScene />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-slate-950/75 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#283b4a]/80 via-[#283b4a]/70 to-black/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#dc2626]/18 via-transparent to-[#dc2626]/22" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/40 to-transparent" />
          <div className="absolute top-1/2 right-1/4 w-56 h-56 bg-[#dc2626]/22 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-[#dc2626]/18 rounded-full blur-2xl" />
          <div className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-[#dc2626]/15 rounded-full blur-2xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-14 xl:px-16 min-h-[780px] sm:min-h-[680px] lg:min-h-[720px] xl:min-h-[760px] pt-24 sm:pt-28 lg:pt-[100px] pb-10 sm:pb-14 flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">

          {/* Left: Main content */}
          <div className="flex-1 flex flex-col justify-center max-w-[680px]">
            {/* Badge */}
            <div className="mb-3 sm:mb-4 inline-flex w-fit rounded-full bg-[#e4ba8b] px-3.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#283b4a] shadow-lg">
              290+ Projects Delivered
            </div>

            {/* Eyebrow */}
            <p className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#e4ba8b]/90 mb-2 sm:mb-3">
              {eyebrow}
            </p>

            {/* Headline */}
            <h1 className="font-playfair text-[26px] sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-[1.1] text-white mb-4 sm:mb-5 text-balance">
              {titleLine1}
              <br />
              <span className="italic text-[#e4ba8b]">{titleLine2}</span>
              <br />
              {titleLine3}
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm lg:text-base text-white/80 leading-relaxed mb-5 sm:mb-6 max-w-[540px]">
              We transform architectural concepts into living experiences, where
              every detail is intentional, every material tells a story, and
              every space becomes a testament to refined craftsmanship and
              timeless elegance.
            </p>

            {/* Buttons */}
            <div className="flex flex-row gap-3 mb-5 sm:mb-6">
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-[#e4ba8b] px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-medium text-[#283b4a] shadow-lg transition-all duration-200 hover:bg-[#d4a97a] hover:shadow-xl hover:scale-[1.02]"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-medium text-white transition-all duration-200 hover:bg-white/10 hover:border-white/60"
              >
                Get In Touch
              </a>
            </div>

            {/* VR Highlight micro-card */}
            <Link
              href="/vr-real-estate"
              className="group flex items-start gap-3 rounded-xl bg-white/[0.06] backdrop-blur-sm border border-white/10 px-4 py-3 max-w-[440px] transition-all duration-200 hover:bg-white/10 hover:border-[#e4ba8b]/30"
            >
              <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-[#e4ba8b]/15 flex items-center justify-center">
                <Glasses className="w-4 h-4 text-[#e4ba8b]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs font-semibold text-white/90 mb-0.5">
                  Virtual Tours in VR
                </p>
                <p className="text-[9px] sm:text-[10px] text-white/50 leading-relaxed line-clamp-2">
                  Walk through your design before execution and preview materials & colors in real-time.
                </p>
              </div>
              <span className="flex-shrink-0 text-[9px] text-[#e4ba8b]/70 group-hover:text-[#e4ba8b] transition-colors mt-1 whitespace-nowrap">
                Learn More →
              </span>
            </Link>

            {/* Stats row - mobile & tablet */}
            <div className="grid grid-cols-3 gap-3 mt-6 lg:hidden">
              <div className="text-center rounded-xl bg-white/[0.04] border border-white/[0.06] py-3">
                <div className="text-xl sm:text-2xl font-playfair font-bold text-[#e4ba8b]">290+</div>
                <div className="text-[8px] sm:text-[9px] text-white/50 uppercase tracking-wider mt-0.5">Projects</div>
              </div>
              <div className="text-center rounded-xl bg-white/[0.04] border border-white/[0.06] py-3">
                <div className="text-xl sm:text-2xl font-playfair font-bold text-[#e4ba8b]">8+</div>
                <div className="text-[8px] sm:text-[9px] text-white/50 uppercase tracking-wider mt-0.5">Years</div>
              </div>
              <div className="text-center rounded-xl bg-white/[0.04] border border-white/[0.06] py-3">
                <div className="text-xl sm:text-2xl font-playfair font-bold text-[#e4ba8b]">100%</div>
                <div className="text-[8px] sm:text-[9px] text-white/50 uppercase tracking-wider mt-0.5">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right: Desktop stats + decorative */}
          <div className="hidden lg:flex flex-col items-end justify-center gap-5 flex-shrink-0 w-[200px] xl:w-[240px]">
            {/* Stat cards */}
            <div className="w-full rounded-2xl bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] p-5 text-right">
              <div className="text-4xl xl:text-5xl font-playfair font-bold text-white/15 leading-none">290+</div>
              <div className="text-[10px] text-white/40 uppercase tracking-wider mt-1.5">Projects Delivered</div>
            </div>
            <div className="w-full rounded-2xl bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] p-5 text-right">
              <div className="text-4xl xl:text-5xl font-playfair font-bold text-white/15 leading-none">8+</div>
              <div className="text-[10px] text-white/40 uppercase tracking-wider mt-1.5">Years Experience</div>
            </div>
            <div className="w-full rounded-2xl bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] p-5 text-right">
              <div className="text-4xl xl:text-5xl font-playfair font-bold text-white/15 leading-none">100%</div>
              <div className="text-[10px] text-white/40 uppercase tracking-wider mt-1.5">Client Satisfaction</div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 right-8 xl:right-16 w-14 h-14 rounded-xl border-2 border-[#e4ba8b]/20 rotate-12" />
            <div className="absolute bottom-24 right-12 xl:right-20 w-10 h-10 rounded-full border-2 border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
