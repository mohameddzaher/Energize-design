'use client';

import Image from 'next/image';
import Section from '@/components/ui/Section';
import { motion } from 'framer-motion';
import PageIntro from '@/components/sections/PageIntro';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-40 lg:h-34 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/Studio/Studio-02.jpg"
            alt="About Background"
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
            transition={{ duration: 0.6 }}
            className="text-xl lg:text-2xl font-bold text-white mb-2"
          >
            About Energize Design
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs lg:text-sm text-white/90 max-w-2xl mx-auto"
          >
            Crafting timeless spaces through innovation and excellence
          </motion.p>
        </div>
      </section>

      {/* Page Intro Section */}
      <PageIntro
        title="Where Vision Meets Reality"
        description="We transform architectural concepts into living experiences, where every detail is intentional, every material tells a story, and every space becomes a testament to refined craftsmanship and timeless elegance."
      />


      {/* Who We Are Section */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-6">
              Who We Are
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <p className="text-sm lg:text-base text-white/80 leading-relaxed text-justify">
                  Energize Design is a luxury architecture and decoration studio that redefines spaces with power and elegance. Rooted in visionary design principles, Energize fuses the precision of modern construction with the sophistication of timeless aesthetics. We believe true design goes beyond aesthetics — it tells a story, creates emotional impact, and delivers measurable results. Through passion for detail and continuous innovation, we transform ideas into real-world experiences that make a difference.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-xl order-1 lg:order-2"
              >
                <Image
                  src="/images/projects/Studio/Studio-01.jpg"
                  alt="Energize Design"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Vision Section */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5"
            >
              <Image
                src="/images/projects/LANO Cafe/LANO CAFE-02.jpg"
                alt="Our Vision"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xl lg:text-2xl font-bold text-[#283b4a] mb-4">Our Vision</h2>
              <p className="text-sm lg:text-base text-[#283b4a]/80 leading-relaxed text-justify">
                Raising design and execution standards by merging refined craftsmanship with modern innovation 
                to ensure trust, distinction, and long-term value in every project.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Mission Section */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xl lg:text-2xl font-bold text-[#e4ba8b] mb-4">Our Mission</h2>
              <p className="text-sm lg:text-base text-white/80 leading-relaxed text-justify">
                To become leaders in delivering refined, timeless interior designs that redefine quality 
                and creativity across the industry.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5"
            >
              <Image
                src="/images/projects/Offices/Offices-Makkah-02.jpg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CEO Section */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl lg:text-2xl font-bold text-center text-[#283b4a] mb-8"
          >
            Leadership
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <div className="relative w-48 h-48">
                <Image
                  src="/images/ceo.png"
                  alt="Aliaa ElSalhy - CEO"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4">
                <span className="text-xs lg:text-sm text-[#e4ba8b] font-semibold">Chief Executive Officer</span>
                <h2 className="text-xl lg:text-2xl font-bold text-[#283b4a] mt-2">
                  Aliaa ElSalhy
                </h2>
              </div>
              <div className="space-y-3 text-[#283b4a]/80 leading-relaxed">
                <p className="text-xs lg:text-sm text-justify">
                  As the CEO of Energize Design, Aliaa ElSalhy brings visionary leadership and 
                  extensive expertise in interior design and construction management. With a passion 
                  for excellence and innovation, Aliaa has been instrumental in establishing Energize 
                  Design as a leader in the industry.
                </p>
                <p className="text-xs lg:text-sm text-justify">
                  Under her guidance, the company has consistently delivered projects that exceed 
                  client expectations, combining refined craftsmanship with modern innovation. 
                  Aliaa&apos;s commitment to quality and her strategic approach to design and execution 
                  have shaped the company&apos;s reputation for excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}
