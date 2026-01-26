'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full bg-white shadow-lg"
    >
      <nav className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-7xl w-full">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-12 w-40 lg:h-14 lg:w-48"
            >
              <Image
                src="/images/logo.png"
                alt="Energize Design Logo"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors duration-300 text-xs ${
                    isActive
                      ? 'text-[#e4ba8b] font-extrabold text-xl'
                      : 'text-[#283b4a] hover:text-[#e4ba8b]'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Button - Right */}
          <div className="hidden lg:block">
            <Button href="/contact" variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#283b4a] p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pb-4"
            >
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`font-medium transition-colors duration-300 py-2 text-sm ${
                        isActive
                          ? 'text-[#e4ba8b] font-bold text-base'
                          : 'text-[#283b4a] hover:text-[#e4ba8b]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <div className="pt-2">
                  <Button href="/contact" variant="primary" size="sm">
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
