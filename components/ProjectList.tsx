import type { Project } from "@/data/projects";
import { ProjectListItem } from "@/components/ProjectListItem";

type ProjectListProps = {
  projects: Project[];
};

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectListItem key={project.slug} project={project} />
      ))}
    </div>
  );
}
