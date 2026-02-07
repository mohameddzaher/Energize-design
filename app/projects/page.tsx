"use client";

import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import { projects } from "@/lib/projects";
import PageIntro from "@/components/sections/PageIntro";
import { getGoogleDriveUrl } from "@/lib/googleDrive";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-40 lg:h-34 flex items-center justify-center overflow-hidden mt-20 lg:mt-18">
        <div className="absolute inset-0">
          <Image
            src={getGoogleDriveUrl(
              "/images/projects/Studio/Studio-04.jpg",
              false,
            )}
            alt="Projects Background"
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
            transition={{ duration: 0.3 }}
            className="text-xl lg:text-2xl font-bold text-white mb-2"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-xs text-white/90 max-w-2xl mx-auto"
          >
            Showcasing excellence in design and execution
          </motion.p>
        </div>
      </section>

      {/* Page Intro Section */}
      <PageIntro
        title="Portfolio of Possibilities"
        description="Each project embodies a unique narrative of transformation, where client aspirations merge with our creative expertise to produce spaces that are both functionally superior and aesthetically compelling."
      />

      {/* Projects Grid */}
      <Section background="dark">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="bg-[#fff9f2] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
              >
                <div className="aspect-video relative overflow-hidden group">
                  <Image
                    src={
                      project.slug === "boys-bedroom"
                        ? project.images[1] || project.images[0]
                        : project.slug === "girls-bedroom"
                          ? project.images[1] || project.images[0]
                          : project.slug === "jewelry-store"
                            ? project.images[2] || project.images[0]
                            : project.slug === "master-bedroom"
                              ? project.images[1] || project.images[0]
                              : project.images[0]
                    }
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-[#e4ba8b] text-[#283b4a] text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-3 lg:p-4">
                  <h3 className="text-sm lg:text-base font-bold text-[#283b4a] mb-2 text-center">
                    {project.name}
                  </h3>
                  <p className="text-xs text-[#283b4a]/70 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Featured Projects Slider */}
      <Section background="light">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-xl lg:text-2xl font-bold text-[#283b4a] mb-8 text-center"
        >
          Featured Projects
        </motion.h2>
        <Swiper
          modules={[Autoplay, Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation
          loop
          className="!pb-12"
        >
          {projects.slice(0, 6).map((project) => (
            <SwiperSlide key={project.id} className="!w-72">
              <Link href={`/projects/${project.slug}`}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={
                        project.slug === "boys-bedroom"
                          ? project.images[1] || project.images[0]
                          : project.slug === "girls-bedroom"
                            ? project.images[1] || project.images[0]
                            : project.slug === "jewelry-store"
                              ? project.images[2] || project.images[0]
                              : project.slug === "master-bedroom"
                                ? project.images[1] || project.images[0]
                                : project.images[0]
                      }
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-[#e4ba8b] text-[#283b4a] text-xs font-semibold rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base lg:text-lg font-bold text-[#283b4a] mb-2 text-center">
                      {project.name}
                    </h3>
                    <p className="text-xs text-[#283b4a]/70 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </>
  );
}
