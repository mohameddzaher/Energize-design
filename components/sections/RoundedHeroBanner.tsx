'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function RoundedHeroBanner({
  eyebrow = 'Crafting Tomorrow\'s Living Spaces',
  titleLine1 = 'Set New Standards',
  titleLine2 = 'in Modern Design',
  titleLine3 = '& Construction',
  imageSrc,
}: {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  titleLine3?: string;
  imageSrc: string;
}) {
  return (
    <section className="bg-white py-6 sm:py-8 lg:py-10">
      <div className="mx-auto max-w-7xl 2xl:max-w-[1400px] px-3 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-xl bg-[#283b4a] shadow-xl ring-1 ring-black/5"
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute top-6 left-6 z-10 rounded-full bg-[#e4ba8b] px-4 py-1.5 text-[10px] font-semibold text-[#283b4a] shadow-lg"
          >
            25+ Projects Delivered
          </motion.div>

          <div className="grid lg:grid-cols-2 min-h-[480px] sm:min-h-[560px] lg:min-h-[600px] 2xl:min-h-[680px]">
            {/* Text Area */}
            <div className="relative p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-center order-2 lg:order-1">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[10px] sm:text-xs tracking-widest uppercase text-[#e4ba8b]/80 mb-3 sm:mb-4"
              >
                {eyebrow}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-playfair text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-[1.1] text-white mb-4 sm:mb-6"
              >
                {titleLine1}<br />
                <span className="italic text-[#e4ba8b]">{titleLine2}</span><br />
                {titleLine3}
              </motion.h1>
              
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 mt-4"
              >
                <a
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-full bg-[#e4ba8b] px-6 py-2.5 text-xs sm:text-sm font-medium text-[#283b4a] transition-all duration-200 hover:bg-[#d4a97a] hover:shadow-md"
                >
                  View Projects
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-6 py-2.5 text-xs sm:text-sm font-medium text-white transition-all duration-200 hover:bg-white/10 hover:border-white/50"
                >
                  Get In Touch
                </a>
              </motion.div>

              {/* Decorative Elements */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
              <div className="absolute bottom-8 right-8 w-2 h-2 rounded-full bg-[#e4ba8b]/40 hidden lg:block" />
              <div className="absolute top-1/2 right-4 w-px h-16 bg-[#e4ba8b]/20 hidden lg:block" />
            </div>

            {/* Image Area */}
            <div className="relative overflow-hidden order-1 lg:order-2 min-h-[280px] sm:min-h-[320px] lg:min-h-full">
              <div className="absolute inset-0">
                <Image
                  src={imageSrc}
                  alt="Hero"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-[#283b4a]/40 via-[#283b4a]/10 to-transparent" />
              
              {/* Small Thumbnail Chip Overlay */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-6 right-6 hidden lg:block"
              >
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shadow-xl ring-2 ring-white/50">
                  <Image
                    src="/images/projects/Jewelry Store/Jewelry Store-03.jpg"
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
