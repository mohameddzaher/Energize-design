"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroBackgroundScene = dynamic(
  () => import("@/components/three/HeroBackgroundScene"),
  { ssr: false },
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
      {/* Full-width hero container — 100% width, 3D as full background */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full overflow-hidden rounded-b-[28px] sm:rounded-b-[32px] min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] xl:min-h-[760px]"
      >
        {/* 3D animation — full hero background */}
        <div className="absolute inset-0 z-0">
          <HeroBackgroundScene />
        </div>

        {/* Creative gradient overlays — readable text + vignette + soft red glow */}
        <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-r from-[#283b4a]/85 via-[#283b4a]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#283b4a]/40 via-transparent to-[#283b4a]/20" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/15 to-transparent" />
          {/* Soft red glow, blended into background (not a hard square) */}
          <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-[#dc2626]/10 rounded-full blur-3xl" />
        </div>

        {/* Content layer — pt for header overlap so hero is visible from top */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] xl:min-h-[760px] pt-24 lg:pt-28">
          {/* Left: text block */}
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-14 xl:px-20 py-12 sm:py-16 lg:col-span-6 lg:max-w-[580px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-4 inline-flex w-fit rounded-full bg-[#e4ba8b] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#283b4a] shadow-lg"
            >
              25+ Projects Delivered
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#e4ba8b]/90 mb-3 sm:mb-4"
            >
              {eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-playfair text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-[1.08] text-white mb-5 sm:mb-6"
            >
              {titleLine1}
              <br />
              <span className="italic text-[#e4ba8b]">{titleLine2}</span>
              <br />
              {titleLine3}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 mt-2"
            >
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-[#e4ba8b] px-7 py-3 text-sm font-medium text-[#283b4a] shadow-lg transition-all duration-200 hover:bg-[#d4a97a] hover:shadow-xl hover:scale-[1.02]"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-7 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-white/10 hover:border-white/60"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Right: creative space with abstract elements */}
          <div className="hidden lg:flex lg:col-span-6 items-center justify-center relative p-8 xl:p-12">
            {/* Large decorative number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-12 right-16 xl:right-24 text-[180px] xl:text-[220px] font-playfair font-bold text-white/8 leading-none select-none"
            >
              25
            </motion.div>

            {/* Floating geometric shapes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-20 right-8 xl:right-16 w-16 h-16 rounded-xl border-2 border-[#e4ba8b]/30 rotate-12"
            />
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-24 right-12 xl:right-20 w-12 h-12 rounded-full border-2 border-white/20"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute top-1/2 right-4 xl:right-8 w-1 h-24 bg-gradient-to-b from-transparent via-[#e4ba8b]/40 to-transparent"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
