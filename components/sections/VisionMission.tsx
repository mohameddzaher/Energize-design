'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { Target, Rocket } from 'lucide-react';

export default function VisionMission({ background = 'dark' }: { background?: 'white' | 'light' | 'dark' | 'beige' }) {
  const cards = [
    {
      title: 'Our Vision',
      content: 'Raising design and execution standards by merging refined craftsmanship with modern innovation to ensure trust, distinction, and long-term value in every project.',
      icon: Target,
      color: 'text-[#e4ba8b]',
    },
    {
      title: 'Our Mission',
      content: 'To become leaders in delivering refined, timeless interior designs that redefine quality and creativity across the industry.',
      icon: Rocket,
      color: 'text-[#e4ba8b]',
    },
  ];

  return (
    <Section background={background}>
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl lg:text-2xl font-bold text-center text-[#e4ba8b] mb-8"
        >
          Vision & Mission
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#283b4a] rounded-xl p-5 lg:p-6 border border-[#e4ba8b]/20 h-full flex flex-col"
              >
                <div className="flex items-center mb-3">
                  <div className="bg-[#e4ba8b]/10 p-2 rounded-xl mr-3">
                    <Icon className={`w-4 h-4 ${card.color}`} />
                  </div>
                  <h3 className={`text-base lg:text-lg font-bold ${card.color}`}>
                    {card.title}
                  </h3>
                </div>
                <p className="text-xs lg:text-sm text-white/80 leading-relaxed text-justify flex-1">
                  {card.content}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
