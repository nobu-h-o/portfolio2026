import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { ContactLinks } from "@/components/ContactLinks";
import { ExperienceList } from "@/components/ExperienceList";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Section } from "@/components/Section";
import { SkillGroups } from "@/components/SkillGroup";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

export default function Home() {
  return (
    <Container>
      <section className="grid gap-10 pb-12 pt-12 sm:pb-16 sm:pt-20 lg:grid-cols-[1fr_320px] lg:gap-16">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-accent-600 dark:text-accent-500">
            {profile.role}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal text-zinc-950 dark:text-zinc-50 sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-6 text-lg leading-9 text-zinc-700 dark:text-zinc-300">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <ContactLinks />
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-950 underline decoration-zinc-300 underline-offset-4 hover:text-accent-600 dark:text-zinc-50 dark:decoration-zinc-700"
            >
              View projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <aside className="border-l-0 border-zinc-200 pt-0 dark:border-zinc-800 lg:border-l lg:pl-8">
          <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
            What I work on
          </p>
          <ul className="mt-5 space-y-4">
            {profile.focusAreas.map((area) => (
              <li key={area} className="text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                {area}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <Section
        title="Work Experience"
        description="Emoba Inc.で、金融データ可視化プラットフォームとAI営業支援サービスの開発に携わっています。"
      >
        <ExperienceList experiences={experiences.slice(0, 1)} />
      </Section>

      <Section
        title="Featured Projects"
        description="公開中の個人プロジェクトです。"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <FeaturedProject key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section
        title="Skills"
      >
        <SkillGroups />
      </Section>
    </Container>
  );
}
