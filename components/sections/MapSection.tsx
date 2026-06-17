'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function MapSection({ background = 'dark' }: { background?: 'white' | 'light' | 'dark' | 'beige' }) {
  const isDark = background === 'dark';
  const { t } = useLanguage();
  return (
    <Section background={background}>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-6"
        >
          <div className="flex items-center justify-center mb-3">
            <MapPin className={`w-4 h-4 mr-2 ${isDark ? 'text-[#e4ba8b]' : 'text-[#e4ba8b]'}`} />
            <h2 className={`text-lg lg:text-xl font-bold ${
              isDark ? 'text-[#e4ba8b]' : 'text-[#283b4a]'
            }`}>
              {t('زورونا', 'Visit Us')}
            </h2>
          </div>
          <p className={`text-xs lg:text-sm ${
            isDark ? 'text-white/80' : 'text-[#283b4a]/70'
          }`}>
            {t(
              'نقع في جدة، المملكة العربية السعودية. يسعدنا زيارتكم لمكتبنا لمناقشة مشروعكم.',
              'Located in Jeddah, Saudi Arabia. We welcome you to visit our office and discuss your project.',
            )}
          </p>
        </motion.div>

        <motion.a
          href="https://maps.app.goo.gl/cwkhF2BvWVbLHDVM8"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.08 }}
          className="w-full h-64 rounded-xl overflow-hidden shadow-lg block relative cursor-pointer group"
        >
          <iframe
            src="https://maps.google.com/maps?q=21.5772316,39.1669975&z=17&output=embed"
            width="100%"
            height="100%"
            title={t('خريطة موقع Energize Design', 'Energize Design Location Map')}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0 pointer-events-none"
          />
          <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 transition-colors pointer-events-auto"></div>
        </motion.a>
        <div className="text-center mt-4">
          <a
            href="https://maps.app.goo.gl/cwkhF2BvWVbLHDVM8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#e4ba8b] hover:text-[#283b4a] transition-colors inline-flex items-center"
          >
            {t('افتح في خرائط Google', 'Open in Google Maps')}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </Section>
  );
}
