import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectMeta } from "@/components/ProjectMeta";
import { TechStack } from "@/components/TechStack";

type ProjectListItemProps = {
  project: Project;
};

export function ProjectListItem({ project }: ProjectListItemProps) {
  return (
    <article className="border-t border-zinc-200 py-8 first:border-t-0 first:pt-0 dark:border-zinc-800">
      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        <div>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-600 dark:text-accent-500">
                {project.status}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-zinc-950 dark:text-zinc-50">
                <Link href={`/projects/${project.slug}`} className="hover:text-accent-600">
                  {project.title}
                </Link>
              </h2>
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className="text-sm font-medium text-zinc-950 underline decoration-zinc-300 underline-offset-4 hover:text-accent-600 dark:text-zinc-50 dark:decoration-zinc-700"
            >
              詳細を見る
            </Link>
          </div>
          <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>
          <div className="mt-6">
            <ProjectMeta project={project} />
          </div>
        </div>
        <aside className="space-y-5 lg:border-l lg:border-zinc-200 lg:pl-6 lg:dark:border-zinc-800">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
              Stack
            </p>
            <TechStack items={project.techStack} />
          </div>
          <div className="flex flex-wrap gap-3">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-accent-600 dark:text-zinc-300"
              >
                GitHub <ExternalLink size={14} />
              </Link>
            )}
            <Link
              href={project.demoUrl}
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-accent-600 dark:text-zinc-300"
            >
              Demo <ExternalLink size={14} />
            </Link>
          </div>
        </aside>
      </div>
    </article>
  );
}
