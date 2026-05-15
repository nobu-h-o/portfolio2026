import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { CaseStudySection } from "@/components/CaseStudySection";
import { Container } from "@/components/Container";
import { ProjectMeta } from "@/components/ProjectMeta";
import { TechStack } from "@/components/TechStack";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Container className="pb-16 pt-12 sm:pt-16">
      <div className="max-w-4xl">
        <Link
          href="/projects"
          className="text-sm font-medium text-zinc-600 hover:text-accent-600 dark:text-zinc-400"
        >
          Back to projects
        </Link>
        <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-accent-600 dark:text-accent-500">
          Project
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-normal text-zinc-950 dark:text-zinc-50 sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-5 text-base leading-8 text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        <div className="mt-8">
          <ProjectMeta project={project} />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              className="inline-flex items-center gap-2 border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-800 hover:border-zinc-500 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:text-zinc-50"
            >
              GitHub <ExternalLink size={14} />
            </Link>
          )}
          <Link
            href={project.demoUrl}
            className="inline-flex items-center gap-2 border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-800 hover:border-zinc-500 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:text-zinc-50"
          >
            Demo <ExternalLink size={14} />
          </Link>
        </div>
      </div>

      <div className="mt-12 max-w-4xl">
        <CaseStudySection title="Overview">
          <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-300">
            {project.overview}
          </p>
        </CaseStudySection>
        <CaseStudySection title="Background">
          <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-300">
            {project.background}
          </p>
        </CaseStudySection>
        <CaseStudySection title="Tech Stack">
          <TechStack items={project.techStack} />
        </CaseStudySection>
        <CaseStudySection title="Scope" items={project.role} />
        <CaseStudySection title="Approach" items={project.approach} />
        <CaseStudySection title="Challenges" items={project.challenges} />
        <CaseStudySection title="Next Steps" items={project.improvements} />
      </div>
    </Container>
  );
}
