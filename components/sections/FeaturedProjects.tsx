'use client';

import Link from 'next/link';
import Image from 'next/image';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { projects } from '@/lib/projects';
import 'swiper/css';
import 'swiper/css/navigation';

export default function FeaturedProjects({ background = 'beige' }: { background?: 'white' | 'light' | 'dark' | 'beige' }) {
  const featuredProjects = projects.slice(0, 6);
  const isDark = background === 'dark';

  return (
    <Section background={background}>
      <div className="mb-6 text-center">
        <h2
          className={`text-2xl lg:text-3xl font-playfair mb-3 ${
            isDark ? 'text-[#e4ba8b]' : 'text-[#283b4a]'
          }`}
        >
          Featured Projects
        </h2>
        <p
          className={`text-xs lg:text-sm ${
            isDark ? 'text-white/80' : 'text-[#283b4a]/70'
          }`}
        >
          Showcasing our commitment to excellence in design and execution
        </p>
      </div>

      {/* Mobile: Horizontal Scroll */}
      <div className="lg:hidden overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-4 scrollbar-hide">
        <div className="flex gap-4 w-max">
          {featuredProjects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`} className="snap-start">
              <div
                className={`!w-56 rounded-xl overflow-hidden shadow-lg hover:shadow-xl ring-1 ring-black/5 transition-shadow duration-200 group cursor-pointer h-full ${
                  isDark ? 'bg-white/10' : 'bg-white'
                }`}
              >
                <div className="relative h-32 lg:h-36 overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <span className="inline-block px-2 py-1 bg-[#e4ba8b] text-[#283b4a] text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className={`text-sm lg:text-base font-bold mb-2 text-center ${
                    isDark ? 'text-white' : 'text-[#283b4a]'
                  }`}>
                    {project.name}
                  </h3>
                  <p className={`text-xs flex-1 ${
                    isDark ? 'text-white/70' : 'text-[#283b4a]/70'
                  }`}>{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop: Grid */}
      <div className="hidden lg:grid grid-cols-3 gap-5 max-w-6xl mx-auto">
        {featuredProjects.map((project) => (
          <Link key={project.id} href={`/projects/${project.slug}`}>
              <div
                className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl ring-1 ring-black/5 transition-shadow duration-200 h-full flex flex-col ${
                  isDark ? 'bg-white/10' : 'bg-white'
                }`}
              >
              <div className="relative h-32 lg:h-36 overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2">
                  <span className="inline-block px-2 py-1 bg-[#e4ba8b] text-[#283b4a] text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className={`text-sm lg:text-base font-bold mb-2 text-center ${
                  isDark ? 'text-white' : 'text-[#283b4a]'
                }`}>
                  {project.name}
                </h3>
                <p className={`text-xs flex-1 ${
                  isDark ? 'text-white/70' : 'text-[#283b4a]/70'
                }`}>{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-6">
        <Button href="/projects" variant={isDark ? 'outline-light' : 'outline'} size="md">
          View All Projects
        </Button>
      </div>
    </Section>
  );
}
