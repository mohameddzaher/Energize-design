'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Button from '../ui/Button';

export default function ContactCTA({ background = 'dark' }: { background?: 'white' | 'light' | 'dark' | 'beige' }) {
  const isDark = background === 'dark';
  return (
    <Section background={background}>
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className={`text-2xl lg:text-3xl font-playfair mb-4 ${
            isDark ? 'text-[#e4ba8b]' : 'text-[#283b4a]'
          }`}
        >
          Ready to Transform Your Space?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={`text-sm lg:text-base mb-6 ${
            isDark ? 'text-white/80' : 'text-gray-700'
          }`}
        >
          Let's discuss how we can bring your vision to life with our premium design and construction services.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.08 }}
        >
          <Button href="/contact" variant={isDark ? 'outline-light' : 'primary'} size="lg">
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
