"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectVideoGalleryProps {
  images: string[];
  projectName: string;
}

export default function ProjectVideoGallery({
  images,
  projectName,
}: ProjectVideoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            className="relative aspect-square rounded-xl overflow-hidden shadow-md group cursor-pointer ring-1 ring-black/5"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              alt={`${projectName} - Image ${index + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500 select-none"
              loading={index < 4 ? "eager" : "lazy"}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-7xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt={projectName}
              fill
              className="object-contain select-none"
              sizes="90vw"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
