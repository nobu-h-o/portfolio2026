import { skillGroups } from "@/data/profile";

export function SkillGroups() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {skillGroups.map((group) => (
        <section
          key={group.title}
          className="rounded-md border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
        >
          <h3 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
            {group.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            {group.note}
          </p>
          <ul className="mt-4 space-y-2">
            {group.skills.map((skill) => (
              <li key={skill} className="text-sm text-zinc-800 dark:text-zinc-200">
                {skill}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
