'use client';

import dynamic from 'next/dynamic';

const ProjectVideo = dynamic(
  () => import('@/components/sections/ProjectVideo'),
  {
    ssr: false,
    loading: () => (
      <div className="h-[460px] sm:h-[540px] w-full max-w-[240px] sm:max-w-[280px] mx-auto" />
    ),
  }
);

const ProjectVideoGallery = dynamic(
  () => import('@/components/sections/ProjectVideoGallery'),
  { ssr: false }
);

interface ProjectVideoGalleryWrapperProps {
  video?: string;
  images: string[];
  projectName: string;
}

export default function ProjectVideoGalleryWrapper({
  video,
  images,
  projectName,
}: ProjectVideoGalleryWrapperProps) {
  return (
    <>
      {/* Video Section - Before Gallery */}
      {video && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectVideo video={video} projectName={projectName} />
        </div>
      )}

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl lg:text-2xl font-bold text-center text-[#283b4a] mb-6">
          Project Gallery
        </h2>
        <ProjectVideoGallery images={images} projectName={projectName} />
      </div>
    </>
  );
}
