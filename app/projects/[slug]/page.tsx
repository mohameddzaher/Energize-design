import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Section from '@/components/ui/Section';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects';
import ProjectGallery from '@/components/sections/ProjectGallery';
import ProjectHero from '@/components/sections/ProjectHero';
import ProjectOverview from '@/components/sections/ProjectOverview';

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: `${project.name} | Energize Design`,
      description: project.description,
      images: project.images.length > 0 ? [project.images[0]] : ['/images/logo.png'],
      type: 'website',
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectHero project={project} />

      {/* Project Overview */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <ProjectOverview project={project} />
        </div>
      </Section>

      {/* Image Gallery */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-bold text-center text-[#283b4a] mb-6">
            Project Gallery
          </h2>
          <ProjectGallery images={project.images} projectName={project.name} />
        </div>
      </Section>
    </>
  );
}
