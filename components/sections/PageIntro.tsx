'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';

interface PageIntroProps {
  title: string;
  description: string;
}

export default function PageIntro({ title, description }: PageIntroProps) {
  return (
    <Section background="light">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {/* Simple decorative line */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-px bg-[#e4ba8b]"></div>
            <div className="w-2 h-2 bg-[#e4ba8b] rounded-full mx-3"></div>
            <div className="w-12 h-px bg-[#e4ba8b]"></div>
          </div>

          <div className="text-center">
            <h2 className="text-lg lg:text-xl font-semibold text-[#283b4a] mb-3">{title}</h2>
            <p className="text-xs lg:text-sm text-[#283b4a]/70 leading-relaxed text-center">
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
