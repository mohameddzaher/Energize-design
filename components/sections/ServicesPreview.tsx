'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { projects } from '@/lib/projects';

const services = [
  {
    title: 'Architectural & Interior Design',
    description: 'Creating spaces that blend functionality with aesthetic excellence.',
    image: projects[6]?.images[0] || '/images/projects/Studio/Studio-01.jpg',
  },
  {
    title: 'General Contracting & Construction',
    description: 'Full-service construction management with precision and care.',
    image: projects[5]?.images[0] || '/images/projects/Offices/Offices-Makkah-01.jpg',
  },
  {
    title: 'Project Management',
    description: 'End-to-end project oversight ensuring quality and timely delivery.',
    image: projects[3]?.images[0] || '/images/projects/LANO Cafe/LANO CAFE-01.jpg',
  },
];

export default function ServicesPreview({ background = 'white' }: { background?: 'white' | 'light' | 'dark' | 'beige' }) {
  const isDark = background === 'dark';
  return (
    <Section background={background}>
      {/* Centered Text */}
      <div className="text-center mb-6">
        <h2
          className={`text-2xl lg:text-3xl font-playfair mb-3 ${
            isDark ? 'text-[#e4ba8b]' : 'text-[#283b4a]'
          }`}
        >
          Our Services
        </h2>
        <p
          className={`text-xs lg:text-sm leading-relaxed text-justify ${
            isDark ? 'text-white/80' : 'text-[#283b4a]/70'
          }`}
        >
          From initial concept to final execution, we deliver comprehensive design and construction solutions 
          that exceed expectations and create lasting value.
        </motion.p>
      </div>

      {/* Horizontal Slider Cards */}
      <div className="mb-8">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-4"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl ring-1 ring-black/5 transition-shadow duration-200 h-full flex flex-col ${
                  isDark ? 'bg-white/10' : 'bg-white'
                }`}
              >
                <div className="relative h-32 lg:h-36">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className={`text-sm lg:text-base font-bold mb-2 text-center ${
                    isDark ? 'text-white' : 'text-[#283b4a]'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`text-xs flex-1 ${
                    isDark ? 'text-white/70' : 'text-[#283b4a]/70'
                  }`}>
                    {service.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="text-center mt-8">
        <Button href="/services" variant={isDark ? 'outline-light' : 'primary'} size="md">
          Explore All Services
        </Button>
      </div>
    </Section>
  );
}
