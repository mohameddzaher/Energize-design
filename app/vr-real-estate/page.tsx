"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import PageIntro from "@/components/sections/PageIntro";
import {
  Glasses,
  Paintbrush,
  Move3D,
  Eye,
  Lightbulb,
  Sofa,
  Palette,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Initial Design",
    description:
      "We create detailed 2D and 3D designs based on your requirements and preferences.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "3D Modeling",
    description:
      "Your space is transformed into a photorealistic 3D model with accurate dimensions and materials.",
    icon: Move3D,
  },
  {
    step: "03",
    title: "VR Experience",
    description:
      "Put on VR glasses and step into your virtual apartment for a fully immersive walkthrough.",
    icon: Glasses,
  },
  {
    step: "04",
    title: "Live Customization",
    description:
      "Change wall colors, materials, lighting, furniture, and layouts in real-time within VR.",
    icon: Paintbrush,
  },
  {
    step: "05",
    title: "Final Approval",
    description:
      "Review the finalized design and approve every detail before construction begins.",
    icon: CheckCircle,
  },
];

const benefits = [
  {
    icon: Eye,
    title: "See Before You Build",
    description:
      "Experience your future space in photorealistic detail before any construction work starts. No more guessing or relying on imagination.",
  },
  {
    icon: Palette,
    title: "Unlimited Design Options",
    description:
      "Try different color schemes, materials, and layouts instantly. Experiment with countless combinations without any real-world cost.",
  },
  {
    icon: Sofa,
    title: "Perfect Furniture Placement",
    description:
      "Test furniture arrangements and see exactly how pieces fit in your space. Ensure proportions and flow are perfect.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Simulation",
    description:
      "Experience how natural and artificial lighting affects your space throughout the day. Optimize for comfort and ambiance.",
  },
  {
    icon: CheckCircle,
    title: "Confident Decisions",
    description:
      "Make informed decisions with full visual confidence. Eliminate costly changes during construction.",
  },
  {
    icon: Move3D,
    title: "Spatial Understanding",
    description:
      "Walk through spaces to truly understand dimensions and proportions. Experience the flow between rooms firsthand.",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    alt: "3D living room visualization",
  },
  {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    alt: "Modern interior 3D render",
  },
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    alt: "Architectural visualization walkthrough",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "3D bedroom design preview",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    alt: "Virtual kitchen tour",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Immersive 3D space experience",
  },
];

export default function VRRealEstatePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-40 lg:h-34 flex items-center justify-center overflow-hidden mt-20 lg:mt-18">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=1920&q=80"
            alt="Virtual Tours Hero"
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
            Immersive Virtual Tours
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs text-white/90 max-w-2xl mx-auto"
          >
            Experience your dream space in stunning 3D before construction begins
          </motion.p>
        </div>
      </section>

      {/* Page Intro Section */}
      <PageIntro
        title="Experience Your Space Before It's Built"
        description="Our cutting-edge VR technology transforms architectural plans into immersive virtual environments. Walk through rooms, feel the space, and make design decisions with complete confidence."
      />

      {/* What are Virtual Tours Section */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-xl lg:text-3xl font-playfair font-bold text-white mb-6">
                  What are{" "}
                  <span className="text-[#e4ba8b]">Virtual Tours?</span>
                </h2>
                <div className="space-y-4 text-sm lg:text-base text-white/80 leading-relaxed">
                  <p>
                    Virtual Tours are a revolutionary approach to interior
                    design and space visualization. Using immersive 3D technology,
                    clients can explore a fully detailed digital
                    version of their future apartment or space.
                  </p>
                  <p>
                    Walk freely through your virtual space using VR glasses
                    or on any screen. Open doors, look out windows, and experience the
                    true scale and proportions of every room. It's as close to
                    being there as possible — without a single brick being laid.
                  </p>
                  <p>
                    The real magic happens when you start customizing. Change
                    wall colors with a gesture, swap marble floors for hardwood,
                    adjust lighting from warm to cool, move furniture around,
                    and see every change rendered in photorealistic quality
                    instantly.
                  </p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
                  alt="Virtual Tour Experience"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Process Steps Section */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-[#283b4a] mb-4">
              The <span className="italic text-[#e4ba8b]">VR Experience</span>{" "}
              Process
            </h2>
            <p className="text-sm lg:text-base text-[#283b4a]/70 max-w-2xl mx-auto">
              From initial concept to final approval, our streamlined process
              ensures you have complete control over every design decision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg ring-1 ring-black/5 h-full hover:shadow-xl transition-shadow duration-300">
                    <div className="text-[#e4ba8b] text-3xl font-playfair font-bold mb-3">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#e4ba8b]/10 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-[#283b4a]" />
                    </div>
                    <h3 className="font-semibold text-sm text-[#283b4a] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#283b4a]/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {/* Connector Line - Hidden on last item and mobile */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#e4ba8b]/30" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Key Benefits Section */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-white mb-4">
              Key <span className="italic text-[#e4ba8b]">Benefits</span> for
              Clients
            </h2>
            <p className="text-sm lg:text-base text-white/70 max-w-2xl mx-auto">
              VR technology transforms the design process, giving you
              unprecedented control and confidence in your investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/15 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#e4ba8b]/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#e4ba8b]" />
                  </div>
                  <h3 className="font-semibold text-base text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Gallery Section */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-[#283b4a] mb-4">
              VR Experience <span className="italic text-[#e4ba8b]">Gallery</span>
            </h2>
            <p className="text-sm lg:text-base text-[#283b4a]/70 max-w-2xl mx-auto">
              Explore our VR real estate visualization capabilities through
              these immersive experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  index === 0 || index === 5 ? "lg:col-span-2 h-64" : "h-48"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Video Section */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-white mb-4">
              See VR in <span className="italic text-[#e4ba8b]">Action</span>
            </h2>
            <p className="text-sm lg:text-base text-white/70 max-w-xl mx-auto">
              Watch how our VR technology transforms the design experience for
              our clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://assets.mixkit.co/videos/4198/4198-720.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section background="beige">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex w-fit rounded-full bg-[#283b4a] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white shadow-lg">
              Start Your Journey
            </div>
            <h2 className="text-2xl lg:text-4xl font-playfair font-bold text-[#283b4a] mb-4">
              Ready to Experience Your
              <br />
              <span className="italic">Future Space?</span>
            </h2>
            <p className="text-sm lg:text-base text-[#283b4a]/80 max-w-xl mx-auto mb-8 leading-relaxed">
              Book a VR session and walk through your dream space before
              construction begins. Make every decision with complete confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#283b4a] px-8 py-3.5 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:bg-[#1f2d38] hover:shadow-xl hover:scale-[1.02]"
              >
                Book VR Experience
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#283b4a] px-8 py-3.5 text-sm font-medium text-[#283b4a] transition-all duration-200 hover:bg-[#283b4a]/10"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
