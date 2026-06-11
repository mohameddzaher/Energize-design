'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ContactCTA({ background = 'dark' }: { background?: 'white' | 'light' | 'dark' | 'beige' }) {
  const isDark = background === 'dark';
  const { t } = useLanguage();
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
          {t('هل أنت مستعد لتحويل مساحتك؟', 'Ready to Transform Your Space?')}
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
          {t(
            'لنتحدّث عن كيفية تحويل رؤيتك إلى واقع عبر خدماتنا المتميّزة في التصميم والإنشاء.',
            "Let's discuss how we can bring your vision to life with our premium design and construction services.",
          )}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.08 }}
        >
          <Button href="/contact" variant={isDark ? 'outline-light' : 'primary'} size="lg">
            {t('تواصل معنا', 'Get In Touch')}
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
