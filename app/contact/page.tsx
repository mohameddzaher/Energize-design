'use client';

import { useState } from 'react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import MapSection from '@/components/sections/MapSection';
import PageIntro from '@/components/sections/PageIntro';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-40 lg:h-34 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/Offices/Offices-Makkah-03.jpg"
            alt="Contact Background"
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
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs text-white/90 max-w-2xl mx-auto"
          >
            Let's discuss how we can bring your vision to life
          </motion.p>
        </div>
      </section>

      {/* Page Intro Section */}
      <PageIntro
        title="Let's Start the Conversation"
        description="Every exceptional space begins with a dialogue—share your vision, and together we'll craft an environment that reflects your identity while elevating your daily experience through thoughtful design and impeccable execution."
      />

      {/* Contact Form Section */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl lg:text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm lg:text-base font-semibold text-white mb-1">Email</h3>
                  <a
                    href="mailto:info@energize-designs.com"
                    className="text-sm text-white/80 hover:text-[#e4ba8b] transition-colors"
                  >
                    info@energize-designs.com
                  </a>
                </div>
                <div>
                  <h3 className="text-sm lg:text-base font-semibold text-white mb-1">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-sm text-white/80 hover:text-[#e4ba8b] transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
                <div>
                  <h3 className="text-sm lg:text-base font-semibold text-white mb-1">Follow Us</h3>
                  <a
                    href="https://linktr.ee/Energize_Design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/80 hover:text-[#e4ba8b] transition-colors inline-flex items-center"
                  >
                    Linktree
                    <svg
                      className="w-3 h-3 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-white mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm bg-white/10 border-2 border-white/20 rounded-xl focus:outline-none focus:border-[#e4ba8b] transition-colors text-white placeholder-white/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-white mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm bg-white/10 border-2 border-white/20 rounded-xl focus:outline-none focus:border-[#e4ba8b] transition-colors text-white placeholder-white/50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-white mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm bg-white/10 border-2 border-white/20 rounded-xl focus:outline-none focus:border-[#e4ba8b] transition-colors text-white placeholder-white/50"
                  placeholder="+1 (234) 567-890"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-white mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 text-sm bg-white/10 border-2 border-white/20 rounded-xl focus:outline-none focus:border-[#e4ba8b] transition-colors resize-none text-white placeholder-white/50"
                  placeholder="Your message..."
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full"
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </Button>
            </motion.form>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <MapSection />
    </>
  );
}
