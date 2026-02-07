'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectGallery({ images, projectName }: { images: string[]; projectName: string }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.03 }}
          className="relative aspect-square rounded-xl overflow-hidden shadow-md group cursor-pointer"
        >
          <Image
            src={image}
            alt={`${projectName} - Image ${index + 1}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            loading={index < 4 ? 'eager' : 'lazy'}
            priority={index < 4}
          />
        </motion.div>
      ))}
    </div>
  );
}
