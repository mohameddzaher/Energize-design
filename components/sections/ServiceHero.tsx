'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ServiceHero({ service }: { service: any }) {
  return (
    <section className="relative h-40 lg:h-48 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#283b4a] to-[#1a2632]" />
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-xl lg:text-2xl font-bold text-white mb-2"
        >
          {service.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-xs lg:text-sm text-white/90"
        >
          {service.category}
        </motion.p>
      </div>
    </section>
  );
}
