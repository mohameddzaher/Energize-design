'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Button from '../ui/Button';

export default function Newsletter({ background = 'light' }: { background?: 'white' | 'light' | 'dark' | 'beige' }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const isDark = background === 'dark';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <Section background={background}>
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className={`text-2xl lg:text-3xl font-playfair mb-3 ${
            isDark ? 'text-[#e4ba8b]' : 'text-[#283b4a]'
          }`}
        >
          Stay Connected
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={`text-xs lg:text-sm mb-6 ${
            isDark ? 'text-white/80' : 'text-gray-700'
          }`}
        >
          Subscribe to our newsletter for design insights, project updates, and industry news.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.08 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className={`flex-1 px-4 py-2 text-sm border-2 rounded-full focus:outline-none transition-colors ${
              isDark 
                ? 'border-white/30 bg-white/10 text-white placeholder-white/50 focus:border-[#e4ba8b]' 
                : 'border-gray-300 focus:border-[#283b4a]'
            }`}
          />
          <Button
            type="submit"
            variant={isDark ? 'outline-light' : 'primary'}
            size="md"
            className="whitespace-nowrap"
          >
            {submitted ? 'Subscribed!' : 'Subscribe'}
          </Button>
        </motion.form>
      </div>
    </Section>
  );
}
