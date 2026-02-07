'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '../ui/Section';
import { Award, Shield, Lightbulb, CheckCircle, Users, Heart, AlertCircle } from 'lucide-react';

const values = [
  { name: 'Excellence & Quality', icon: Award },
  { name: 'Integrity & Trust', icon: Shield },
  { name: 'Innovation & Creativity', icon: Lightbulb },
  { name: 'Accountability & Reliability', icon: CheckCircle },
  { name: 'Collaboration & Commitment', icon: Users },
  { name: 'Client-Centric Focus', icon: Heart },
  { name: 'Safety First', icon: AlertCircle },
];

import { projects } from '@/lib/projects';

export default function CoreValues({ background = 'light' }: { background?: 'white' | 'light' | 'dark' | 'beige' }) {
  const isDark = background === 'dark';
  return (
    <Section background={background}>
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className={`text-xl lg:text-2xl font-bold text-center mb-8 ${
            isDark ? 'text-[#e4ba8b]' : 'text-[#283b4a]'
          }`}
        >
          Our Core Values
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Image - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="relative rounded-xl overflow-hidden shadow-xl h-full"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/projects/Studio/Studio-02.jpg"
                alt="Core Values"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Content - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="flex flex-col justify-between h-full"
          >
            <div className="grid grid-cols-1 gap-2">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className={`p-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${
                      isDark ? 'bg-white/10' : 'bg-white'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="bg-[#e4ba8b]/10 p-1 rounded-xl">
                        <Icon className="w-3 h-3 text-[#e4ba8b]" />
                      </div>
                      <h3 className={`text-xs font-semibold ${
                        isDark ? 'text-white' : 'text-[#283b4a]'
                      }`}>
                        {value.name}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
