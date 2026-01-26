'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '../ui/Section';

import { projects } from '@/lib/projects';

export default function CreativeVision({ background = 'white' }: { background?: 'white' | 'light' | 'dark' | 'beige' }) {
  const isDark = background === 'dark';
  return (
    <Section background={background}>
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-xl lg:text-2xl font-bold text-center mb-8 ${
            isDark ? 'text-[#e4ba8b]' : 'text-[#283b4a]'
          }`}
        >
          Our Creative Vision
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 h-full flex flex-col"
          >
            <div className="relative h-48 lg:h-56 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={projects[2]?.images[1] || '/images/projects/Jewelry Store/Jewelry Store-02.jpg'}
                alt="Design Philosophy"
                fill
                className="object-cover"
              />
            </div>
            <h3 className={`text-lg lg:text-xl font-bold ${isDark ? 'text-white' : 'text-[#283b4a]'}`}>Design Philosophy</h3>
            <p className={`leading-relaxed text-sm lg:text-base text-justify flex-1 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
              We approach every project with a deep understanding of space, light, and materials. 
              Our designs are not just visually stunning but also functionally superior, creating 
              environments that enhance daily life and business operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 h-full flex flex-col"
          >
            <div className="relative h-48 lg:h-56 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={projects[4]?.images[1] || '/images/projects/Master Bedroom/Bedroom-02.jpg'}
                alt="Execution Excellence"
                fill
                className="object-cover"
              />
            </div>
            <h3 className={`text-lg lg:text-xl font-bold ${isDark ? 'text-[#e4ba8b]' : 'text-[#e4ba8b]'}`}>Execution Excellence</h3>
            <p className={`leading-relaxed text-sm lg:text-base text-justify flex-1 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
              From concept to completion, we maintain the highest standards of craftsmanship. 
              Our team combines traditional techniques with modern innovation, ensuring every 
              detail is executed with precision and care.
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
