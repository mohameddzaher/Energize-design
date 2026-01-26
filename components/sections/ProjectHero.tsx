'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProjectHero({ project }: { project: any }) {
  return (
    <section className="relative h-40 lg:h-48 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={project.images[0]}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#283b4a]/90 via-[#283b4a]/80 to-[#283b4a]/90" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl lg:text-2xl font-bold text-white mb-2"
        >
          {project.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs lg:text-sm text-white/90"
        >
          {project.category}
        </motion.p>
      </div>
    </section>
  );
}
