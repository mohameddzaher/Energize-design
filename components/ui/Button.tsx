'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl';
  
  const variants = {
    primary: 'bg-[#283b4a] text-white hover:bg-[#1f2d38] focus:ring-[#283b4a] shadow-md hover:shadow-lg rounded-xl',
    secondary: 'bg-[#e4ba8b] text-[#283b4a] hover:bg-[#d4a97a] focus:ring-[#e4ba8b] shadow-md hover:shadow-lg rounded-xl',
    outline: 'border-2 border-[#283b4a] text-[#283b4a] hover:bg-[#283b4a] hover:text-white focus:ring-[#283b4a] rounded-xl',
    'outline-light': 'border-2 border-white/30 text-white hover:bg-white hover:text-[#283b4a] focus:ring-white rounded-xl',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href={href} className={buttonClasses}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
