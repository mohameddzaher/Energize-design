'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaSnapchat, FaXTwitter, FaTiktok, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Projects', href: '/projects' },
    ],
    innovation: [
      { name: 'Virtual Tours', href: '/vr-real-estate' },
    ],
    resources: [
      { name: 'Contact', href: '/contact' },
      { name: 'Linktree', href: 'https://linktr.ee/Energize_Design', external: true },
    ],
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/energize-design-and-decoration/', icon: FaLinkedin },
    { name: 'Instagram', href: 'https://www.instagram.com/energize_design?igsh=bXdxcXJpbWY5bTBq&utm_source=qr', icon: FaInstagram },
    { name: 'Snapchat', href: 'https://www.snapchat.com/@energize_design?sender_web_id=411878c2-81b4-462f-9fb4-a85b7173a9b3&device_type=desktop&is_copy_url=true', icon: FaSnapchat },
    { name: 'Twitter', href: 'https://x.com/energize_design', icon: FaXTwitter },
    { name: 'TikTok', href: 'https://www.tiktok.com/@energize_design?is_from_webapp=1&sender_device=pc', icon: FaTiktok },
    { name: 'YouTube', href: 'https://www.youtube.com/@Energize_Design', icon: FaYoutube },
  ];

  return (
    <footer className="bg-[#1a2632] text-[#fff9f2] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-7xl w-full pt-12 lg:pt-12 pb-6 lg:pb-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* Brand Section */}
          <div className="lg:col-span-2 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/" className="inline-block mb-4">
                <div className="relative h-14 w-48 lg:h-16 lg:w-56 mx-auto md:mx-0">
                  <Image
                    src="/images/logo.png"
                    alt="Energize Design Logo"
                    fill
                    className="object-contain brightness-0 invert"
                    unoptimized
                  />
                </div>
              </Link>
              <p className="text-[#fff9f2]/70 text-xs lg:text-sm leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
                Raising design and execution standards by merging refined craftsmanship with modern innovation to ensure trust, distinction, and long-term value.
              </p>
              <div className="mb-4 flex justify-center md:justify-start">
                <a
                  href="mailto:info@energize-designs.com"
                  className="text-[#fff9f2]/70 hover:text-[#e4ba8b] transition-colors text-xs lg:text-sm flex items-center space-x-2 mb-3"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@energize-designs.com</span>
                </a>
              </div>
              <div className="flex space-x-3 justify-center md:justify-start">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#fff9f2]/60 hover:text-[#e4ba8b] transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <div className="text-center md:text-left">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="font-bold mb-5 text-white text-sm uppercase tracking-wider"
            >
              Company
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.08 }}
              className="space-y-3"
            >
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#fff9f2]/70 hover:text-[#e4ba8b] transition-colors duration-300 text-sm flex items-center justify-center md:justify-start group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#e4ba8b] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Innovation Links */}
          <div className="text-center md:text-left">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="font-bold mb-5 text-white text-sm uppercase tracking-wider"
            >
              Innovation
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.08 }}
              className="space-y-3"
            >
              {footerLinks.innovation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#fff9f2]/70 hover:text-[#e4ba8b] transition-colors duration-300 text-sm flex items-center justify-center md:justify-start group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#e4ba8b] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#fff9f2]/70 hover:text-[#e4ba8b] transition-colors duration-300 text-sm flex items-center justify-center md:justify-start group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-[#e4ba8b] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[#fff9f2]/70 hover:text-[#e4ba8b] transition-colors duration-300 text-sm flex items-center justify-center md:justify-start group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-[#e4ba8b] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.12 }}
          className="border-t border-[#fff9f2]/10 pt-6 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#fff9f2]/50 space-y-2 md:space-y-0">
            <p>&copy; {currentYear} Energize Design. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="/about" className="hover:text-[#e4ba8b] transition-colors">Privacy Policy</a>
              <a href="/contact" className="hover:text-[#e4ba8b] transition-colors">Terms of Service</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
