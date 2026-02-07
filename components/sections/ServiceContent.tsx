'use client';

import { motion } from 'framer-motion';
import { Check, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function ServiceContent({ service }: { service: any }) {
  return (
    <>
      <div className="mb-6">
        <Link href="/services" className="inline-flex items-center text-[#283b4a] hover:text-[#e4ba8b] transition-colors text-sm mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <h2 className="text-xl lg:text-2xl font-bold text-[#283b4a] mb-4">Service Overview</h2>
        <p className="text-sm lg:text-base text-[#283b4a]/80 leading-relaxed text-justify mb-6">
          {service.fullDescription}
        </p>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.08 }}
      >
        <h3 className="text-lg lg:text-xl font-bold text-[#283b4a] mb-4">What We Offer</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {service.features.map((feature: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center space-x-3 bg-[#fff9f2] p-3 rounded-xl h-full"
            >
              <Check className="w-4 h-4 text-[#e4ba8b] flex-shrink-0" />
              <span className="text-sm text-[#283b4a]">{feature}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="mt-8 text-center">
        <Button href="/contact" variant="primary" size="md">
          Get a Quote
        </Button>
      </div>
    </>
  );
}
