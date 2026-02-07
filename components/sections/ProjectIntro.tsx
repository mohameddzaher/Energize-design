'use client';

import { motion } from 'framer-motion';

export default function ProjectIntro({ name, description }: { name: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="text-center"
    >
      <h2 className="text-xl lg:text-2xl font-bold text-[#283b4a] mb-4">{name}</h2>
      <p className="text-sm lg:text-base text-[#283b4a]/80 leading-relaxed text-justify">
        {description}
      </p>
    </motion.div>
  );
}
