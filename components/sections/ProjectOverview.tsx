'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { CheckCircle, Lightbulb, Palette, Ruler } from 'lucide-react';

export default function ProjectOverview({ project }: { project: any }) {
  const details = [
    { icon: Ruler, title: 'Space Planning', description: 'Strategic layout optimization for maximum functionality' },
    { icon: Palette, title: 'Design Concept', description: 'Innovative design solutions tailored to your vision' },
    { icon: Lightbulb, title: 'Lighting Design', description: 'Professional lighting solutions for ambiance' },
    { icon: CheckCircle, title: 'Quality Execution', description: 'Premium materials and craftsmanship' },
  ];

  return (
    <>
      <div className="mb-6">
        <Link href="/projects" className="inline-flex items-center text-[#283b4a] hover:text-[#e4ba8b] transition-colors text-sm mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="text-center mb-8"
      >
        <h2 className="text-xl lg:text-2xl font-bold text-[#283b4a] mb-4">Project Overview</h2>
        <p className="text-sm lg:text-base text-[#283b4a]/80 leading-relaxed text-justify mb-8">
          {project.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {details.map((detail, index) => {
          const Icon = detail.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="bg-[#fff9f2] p-5 rounded-xl border border-[#e4ba8b]/20 h-full"
            >
              <div className="flex items-start space-x-4 h-full">
                <div className="bg-[#e4ba8b]/10 p-3 rounded-xl flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#e4ba8b]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-[#283b4a] mb-1">{detail.title}</h3>
                  <p className="text-xs text-[#283b4a]/70">{detail.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
