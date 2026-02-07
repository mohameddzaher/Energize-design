'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  description?: string;
  imageSrc: string;
}

export default function PageHero({ title, description, imageSrc }: PageHeroProps) {
  return (
    <section className="bg-white py-6 sm:py-8 lg:py-10">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-xl bg-[#283b4a] shadow-xl ring-1 ring-black/5 min-h-[400px] sm:min-h-[480px] lg:min-h-[520px]"
        >
          <div className="absolute inset-0">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#283b4a]/85 via-[#283b4a]/75 to-[#283b4a]/85" />
          </div>
          
          <div className="relative z-10 flex flex-col justify-center items-center text-center h-full p-8 sm:p-12 lg:p-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="font-playfair text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight text-white mb-4"
            >
              {title}
            </motion.h1>
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.08 }}
                className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl"
              >
                {description}
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
