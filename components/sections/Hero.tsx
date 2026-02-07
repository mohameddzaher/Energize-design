'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const HeroScene = dynamic(() => import('../three/HeroScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-[#283b4a] to-[#e4ba8b]" />,
});

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center max-w-full ">
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0 w-full">
        <HeroScene />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fff9f2]/90 via-[#fff9f2]/70 to-[#fff9f2]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 xl:px-8 max-w-7xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.08 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.4 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
          >
            <span className="text-[#283b4a]">Raising Design</span>
            <br />
            <span className="text-[#e4ba8b]">& Execution Standards</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.6 }}
                  className="text-lg md:text-lg text-[#283b4a]/80 mb-8 max-w-2xl mx-auto leading-relaxed text-justify"
          >
            Merging refined craftsmanship with modern innovation to ensure trust, distinction, and long-term value in every project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button href="/projects" variant="primary" size="lg">
              View Projects
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#283b4a] rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-[#283b4a] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
