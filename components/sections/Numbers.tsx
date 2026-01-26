'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Section from '../ui/Section';

const stats = [
  { label: 'Clients', value: 150, suffix: '+' },
  { label: 'Projects', value: 200, suffix: '+' },
  { label: 'Years Experience', value: 10, suffix: '+' },
  { label: 'Awards', value: 25, suffix: '+' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      const stepDuration = duration / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, stepDuration);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Numbers({ background = 'dark' }: { background?: 'white' | 'light' | 'dark' | 'beige' }) {
  const isDark = background === 'dark';
  return (
    <Section background={background} className={isDark ? 'text-white' : ''}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center"
          >
            <div className={`text-3xl lg:text-4xl font-bold mb-2 ${
              isDark ? 'text-[#e4ba8b]' : 'text-[#283b4a]'
            }`}>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            </div>
            <div className={`text-lg ${
              isDark ? 'text-[#fff9f2]' : 'text-[#283b4a]'
            }`}>{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
