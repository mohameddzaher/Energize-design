'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CollageShowcaseProps {
  heading: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  images: string[];
}

export default function CollageShowcase({
  heading = 'Comprehensive Design & Construction Solutions',
  bullets = [
    'Architectural & Interior Design',
    'General Contracting & Construction',
    'Project Management & Supervision',
  ],
  ctaLabel = 'Explore Services',
  ctaHref = '/services',
  images = [],
}: CollageShowcaseProps) {
  return (
    <section className="bg-[#fff9f2] py-8 lg:py-12">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:col-span-6"
          >
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl leading-tight text-[#283b4a]">
              {heading}
            </h2>
            <ul className="space-y-2">
              {bullets.map((bullet, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-2 text-xs lg:text-sm text-[#283b4a]/80"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#e4ba8b] flex-shrink-0" />
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </ul>
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-[#283b4a] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-[#1f2d38] hover:shadow-md mt-6"
            >
              {ctaLabel}
            </Link>
          </motion.div>

          {/* Right: Collage Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex justify-center lg:justify-end self-center w-full max-w-full lg:max-w-[560px] 2xl:max-w-[640px]"
          >
            <div className="grid grid-cols-2 gap-4 w-full">
              {/* Large Image - Top Row (spans 2 columns) */}
              {images[0] && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-[16/10] overflow-hidden rounded-xl ring-1 ring-black/10 shadow-sm bg-white col-span-2"
                >
                  <Image 
                    src={images[0]} 
                    alt="Showcase 1" 
                    fill 
                    className="object-cover object-center" 
                  />
                </motion.div>
              )}

              {/* Two Smaller Images - Bottom Row */}
              {images[1] && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative aspect-[16/11] overflow-hidden rounded-xl ring-1 ring-black/10 shadow-sm bg-white col-span-1"
                >
                  <Image 
                    src={images[1]} 
                    alt="Showcase 2" 
                    fill 
                    className="object-cover object-center" 
                  />
                </motion.div>
              )}

              {images[2] && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative aspect-[16/11] overflow-hidden rounded-xl ring-1 ring-black/10 shadow-sm bg-white col-span-1"
                >
                  <Image 
                    src={images[2]} 
                    alt="Showcase 3" 
                    fill 
                    className="object-cover object-center" 
                  />
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
