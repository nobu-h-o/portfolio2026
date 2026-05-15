import type { Experience } from "@/data/experience";
import { TechStack } from "@/components/TechStack";

type ExperienceItemProps = {
  experience: Experience;
};

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article className="border-t border-zinc-200 py-8 first:border-t-0 first:pt-0 dark:border-zinc-800">
      <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
        <div>
          <p className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
            {experience.period}
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">{experience.domain}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
            {experience.company}
          </h3>
          <p className="mt-1 text-sm font-medium text-accent-600 dark:text-accent-500">
            {experience.role}
          </p>
          <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            {experience.summary}
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <DetailList title="Responsibilities" items={experience.responsibilities} />
            <DetailList title="Improvements" items={experience.improvements} />
            <DetailList title="Learnings" items={experience.learnings} />
          </div>
          <div className="mt-6">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
              Technologies
            </p>
            <TechStack items={experience.technologies} />
          </div>
        </div>
      </div>
    </article>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">{title}</h4>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
