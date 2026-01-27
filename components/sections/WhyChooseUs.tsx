'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Award-Winning Design',
    description: 'Recognized excellence in architectural and interior design with a portfolio of distinguished projects.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'A dedicated team of architects, designers, and craftsmen committed to delivering exceptional results.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'We respect deadlines and deliver projects on time without compromising quality or attention to detail.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Guaranteed',
    description: 'Every project is executed with precision, using premium materials and proven construction methods.',
  },
];

export default function WhyChooseUs({ background = 'dark' }: { background?: 'white' | 'light' | 'dark' | 'beige' }) {
  const isDark = background === 'dark';
  
  return (
    <Section background={background}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`text-2xl lg:text-3xl font-playfair text-center mb-6 ${
          isDark ? 'text-white' : 'text-[#283b4a]'
        }`}
      >
        Why Choose Us
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`rounded-xl p-5 h-full flex flex-col shadow-lg hover:shadow-xl ring-1 ring-black/5 transition-all duration-300 ${
                isDark ? 'bg-white/10 text-white' : 'bg-white'
              }`}
            >
              <div className={`mb-2 flex justify-center ${isDark ? 'text-[#e4ba8b]' : 'text-[#e4ba8b]'}`}>
                <Icon className="w-8 h-8" />
              </div>
              <h3 className={`font-semibold text-sm mb-1 text-center ${
                isDark ? 'text-white' : 'text-[#283b4a]'
              }`}>
                {feature.title}
              </h3>
              <p className={`text-xs leading-relaxed flex-1 text-justify ${
                isDark ? 'text-white/80' : 'text-[#283b4a]/70'
              }`}>
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
