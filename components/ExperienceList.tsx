import type { Experience } from "@/data/experience";
import { ExperienceItem } from "@/components/ExperienceItem";

type ExperienceListProps = {
  experiences: Experience[];
};

export function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <div>
      {experiences.map((experience) => (
        <ExperienceItem key={`${experience.company}-${experience.period}`} experience={experience} />
      ))}
    </div>
  );
}
