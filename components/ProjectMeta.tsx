import type { Project } from "@/data/projects";

type ProjectMetaProps = {
  project: Project;
};

export function ProjectMeta({ project }: ProjectMetaProps) {
  const items = [
    { label: "Status", value: project.status },
    { label: "Period", value: project.period },
    { label: "Built", value: project.role.join(" / ") },
  ];

  return (
    <dl className="flex flex-wrap gap-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-md border border-zinc-200 bg-white px-3 py-2 dark:border-zinc-800 dark:bg-zinc-950"
        >
          <dt className="text-xs font-medium text-zinc-500">
            {item.label}
          </dt>
          <dd className="mt-2 text-sm leading-6 text-zinc-800 dark:text-zinc-200">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
