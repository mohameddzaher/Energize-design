import { Metadata } from "next";
import { notFound } from "next/navigation";
import Section from "@/components/ui/Section";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import ProjectHero from "@/components/sections/ProjectHero";
import ProjectOverview from "@/components/sections/ProjectOverview";
import ProjectVideoGalleryWrapper from "@/components/sections/ProjectVideoGalleryWrapper";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: `${project.name} | Energize Design`,
      description: project.description,
      images:
        project.images.length > 0 ? [project.images[0]] : ["/images/logo.png"],
      type: "website",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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

      {/* Video & Gallery Section */}
      <Section background="light">
        <ProjectVideoGalleryWrapper
          video={project.video}
          images={project.images}
          projectName={project.name}
        />
      </Section>
    </>
  );
}
