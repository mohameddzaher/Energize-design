'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Image from 'next/image';

export default function AboutSnapshot({ background = 'light' }: { background?: 'white' | 'light' | 'dark' | 'beige' }) {
  const isDark = background === 'dark';
  return (
    <Section background={background}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/projects/Studio/Studio-01.jpg"
            alt="Modern interior design"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="flex flex-col justify-between h-full"
        >
          <div className="flex-1 flex flex-col justify-center">
            <h2 className={`text-xl lg:text-2xl font-bold mb-4 ${
              isDark ? 'text-[#e4ba8b]' : 'text-[#283b4a]'
            }`}>
              Crafting Timeless Spaces
            </h2>
            <p className={`mb-3 leading-relaxed text-xs lg:text-sm text-justify ${
              isDark ? 'text-white/80' : 'text-gray-700'
            }`}>
              Energize Design merges creativity with strategy to craft powerful and distinctive brand experiences. 
              We believe true design goes beyond aesthetics — it tells a story, creates emotional impact, and delivers measurable results.
            </p>
            <p className={`mb-3 leading-relaxed text-xs lg:text-sm text-justify ${
              isDark ? 'text-white/80' : 'text-gray-700'
            }`}>
              Through passion for detail and continuous innovation, we transform ideas into real-world experiences that make a difference.
            </p>
            <p className={`leading-relaxed text-xs lg:text-sm text-justify ${
              isDark ? 'text-white/80' : 'text-gray-700'
            }`}>
              Our commitment to excellence drives us to push boundaries, creating spaces that not only meet functional needs but also inspire and elevate the human experience through thoughtful design and meticulous attention to every detail.
            </p>
          </div>
          <motion.a
            href="/about"
            whileHover={{ scale: 1.05 }}
            className={`inline-block font-semibold hover:text-[#e4ba8b] transition-colors duration-300 text-xs lg:text-sm mt-4 ${
              isDark ? 'text-white' : 'text-[#283b4a]'
            }`}
          >
            Learn More →
          </motion.a>
        </motion.div>
      </div>
    </Section>
  );
}
