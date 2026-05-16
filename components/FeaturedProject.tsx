import Link from "next/link";
import type { Project } from "@/data/projects";
import { TechStack } from "@/components/TechStack";

type FeaturedProjectProps = {
  project: Project;
};

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className="rounded-md border border-zinc-200 bg-white p-5 transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 sm:p-6">
      <div className="flex h-full flex-col">
        <div>
          <p className="text-xs font-medium text-accent-600 dark:text-accent-500">
            {project.status}
          </p>
          <h3 className="mt-3 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            {project.tagline}
          </p>
        </div>
        <div className="mt-5">
          <TechStack items={project.techStack.slice(0, 4)} />
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="mt-6 inline-flex text-sm font-medium text-zinc-950 underline decoration-zinc-300 underline-offset-4 hover:text-accent-600 dark:text-zinc-50 dark:decoration-zinc-700"
        >
          詳細を見る
        </Link>
      </div>
    </article>
  );
}
