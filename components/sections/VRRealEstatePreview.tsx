'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { Glasses, Paintbrush, Move3D, Eye } from 'lucide-react';

const vrFeatures = [
  {
    icon: Glasses,
    title: 'Immersive VR Experience',
    description: 'Walk through your future space using VR glasses before construction begins.',
  },
  {
    icon: Move3D,
    title: 'Free Movement',
    description: 'Explore every corner of your virtual apartment with complete freedom.',
  },
  {
    icon: Paintbrush,
    title: 'Real-Time Customization',
    description: 'Change colors, materials, lighting, furniture, and layouts instantly.',
  },
  {
    icon: Eye,
    title: 'Realistic Preview',
    description: 'See the final photorealistic result before any construction work starts.',
  },
];

export default function VRRealEstatePreview({ background = 'dark' }: { background?: 'white' | 'light' | 'dark' | 'beige' }) {
  const isDark = background === 'dark';

  return (
    <Section background={background}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <div className="mb-3 inline-flex w-fit rounded-full bg-[#e4ba8b] px-3.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#283b4a] shadow-lg">
              New Service
            </div>
            <h2
              className={`text-2xl lg:text-3xl font-playfair mb-4 ${
                isDark ? 'text-white' : 'text-[#283b4a]'
              }`}
            >
              Immersive
              <br />
              <span className={`italic ${isDark ? 'text-[#e4ba8b]' : 'text-[#e4ba8b]'}`}>
                Virtual Tours
              </span>
            </h2>
            <p
              className={`text-sm lg:text-base leading-relaxed mb-6 ${
                isDark ? 'text-white/80' : 'text-[#283b4a]/80'
              }`}
            >
              Step into your future home before it exists. Using cutting-edge VR technology,
              you can walk through your apartment, change wall colors, switch materials,
              adjust lighting, rearrange furniture, and see realistic results — all before
              construction begins.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {vrFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                    className={`rounded-xl p-4 ${
                      isDark ? 'bg-white/10' : 'bg-white shadow-md ring-1 ring-black/5'
                    }`}
                  >
                    <div className="text-[#e4ba8b] mb-2">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3
                      className={`font-semibold text-xs mb-1 ${
                        isDark ? 'text-white' : 'text-[#283b4a]'
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-[10px] leading-relaxed ${
                        isDark ? 'text-white/70' : 'text-[#283b4a]/70'
                      }`}
                    >
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <Link
              href="/vr-real-estate"
              className="inline-flex items-center justify-center rounded-full bg-[#e4ba8b] px-6 py-2.5 text-xs sm:text-sm font-medium text-[#283b4a] shadow-lg transition-all duration-200 hover:bg-[#d4a97a] hover:shadow-xl hover:scale-[1.02]"
            >
              Explore VR Experience
            </Link>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="relative"
          >
            <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80"
                alt="Virtual Tour Experience"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* VR Badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#e4ba8b]/20 flex items-center justify-center">
                      <Glasses className="w-5 h-5 text-[#283b4a]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#283b4a]">
                        Experience Before You Build
                      </p>
                      <p className="text-[10px] text-[#283b4a]/70">
                        Live customization in virtual reality
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#e4ba8b]/10 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-[#283b4a]/10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
