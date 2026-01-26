'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    quote: 'Energize Design transformed our space beyond expectations. Their attention to detail and commitment to quality is unmatched.',
    author: 'Client Name',
    role: 'Residential Project',
  },
  {
    quote: 'Working with Energize Design was a seamless experience. They delivered on time, within budget, and exceeded our vision.',
    author: 'Client Name',
    role: 'Commercial Project',
  },
  {
    quote: 'The team\'s creativity and professionalism made our renovation project a true success. Highly recommended.',
    author: 'Client Name',
    role: 'Renovation Project',
  },
];

export default function Testimonials({ background = 'dark' }: { background?: 'white' | 'light' | 'dark' | 'beige' }) {
  return (
    <Section background={background}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
                 className={`text-2xl lg:text-3xl font-playfair text-center mb-6 ${
                   background === 'dark' ? 'text-white' : 'text-[#283b4a]'
                 }`}
      >
        Client Testimonials
      </motion.h2>

      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        loop
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`rounded-xl p-5 h-full flex flex-col shadow-lg hover:shadow-xl ring-1 ring-black/5 transition-all duration-300 ${
                background === 'dark' ? 'bg-white/10 text-white' : 'bg-white'
              }`}
            >
              <Quote className={`w-6 h-6 mb-3 ${background === 'dark' ? 'text-[#e4ba8b]' : 'text-[#e4ba8b]'}`} />
              <p className={`text-xs lg:text-sm italic leading-relaxed text-justify mb-4 flex-1 ${
                background === 'dark' ? 'text-white/90' : 'text-[#283b4a]'
              }`}>
                "{testimonial.quote}"
              </p>
              <div className={`border-t pt-3 mt-auto ${
                background === 'dark' ? 'border-white/10' : 'border-[#283b4a]/10'
              }`}>
                <p className={`font-semibold text-xs mb-1 ${
                  background === 'dark' ? 'text-white' : 'text-[#283b4a]'
                }`}>{testimonial.author}</p>
                <p className={`text-xs ${
                  background === 'dark' ? 'text-white/60' : 'text-[#283b4a]/60'
                }`}>{testimonial.role}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
