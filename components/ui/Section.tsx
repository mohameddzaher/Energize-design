'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark' | 'beige';
}

export default function Section({
  children,
  className = '',
  id,
  background = 'white',
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    light: 'bg-[#fff9f2]',
    dark: 'bg-[#283b4a]',
    beige: 'bg-[#e4ba8b]',
  };

  return (
    <section
      id={id}
      className={`${backgrounds[background]} ${className} py-8 lg:py-12 w-full overflow-hidden`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl 2xl:max-w-7xl w-full">
        {children}
      </div>
    </section>
  );
}
