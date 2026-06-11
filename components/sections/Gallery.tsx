'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '../ui/Section';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { projects, localizeProject } from '@/lib/projects';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import 'swiper/css';

export default function Gallery({ background = 'beige' }: { background?: 'white' | 'light' | 'dark' | 'beige' }) {
  const { lang, t } = useLanguage();
  // Get random images from all projects
  const allImages = projects.flatMap((project) => {
    const lp = localizeProject(project, lang);
    return lp.images.slice(0, 2).map((img) => ({ src: img, project: lp.name }));
  });
  const galleryImages = allImages.slice(0, 12);
  const isDark = background === 'dark';

  return (
    <Section background={background}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="mb-6 text-center"
      >
               <h2 className={`text-2xl lg:text-3xl font-playfair mb-3 ${
                 isDark ? 'text-[#e4ba8b]' : 'text-[#283b4a]'
               }`}>
          {t('معرض أعمالنا', 'Our Gallery')}
        </h2>
        <p className={`text-xs lg:text-sm ${
          isDark ? 'text-white/80' : 'text-[#283b4a]/70'
        }`}>
          {t('لمحة من عالمنا في تميّز التصميم', 'A glimpse into our world of design excellence')}
        </p>
      </motion.div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        spaceBetween={15}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className="!pb-0"
      >
        {galleryImages.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ scale: 1.05, z: 10 }}
                     className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl ring-1 ring-black/5 transition-all duration-300 group cursor-pointer"
            >
              <Image
                src={item.src}
                alt={t(`من ${item.project}`, `Gallery from ${item.project}`)}
                fill
                className="object-cover rounded-xl group-hover:scale-110 transition-transform duration-300 "
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
