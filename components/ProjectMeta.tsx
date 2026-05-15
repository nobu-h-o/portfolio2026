import type { Project } from "@/data/projects";

type ProjectMetaProps = {
  project: Project;
};

export function ProjectMeta({ project }: ProjectMetaProps) {
  const items = [
    { label: "Status", value: project.status },
    { label: "Period", value: project.period },
    { label: "Role", value: project.role.join(" / ") },
  ];

  return (
    <dl className="grid gap-4 border-y border-zinc-200 py-5 dark:border-zinc-800 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
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
