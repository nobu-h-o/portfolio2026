import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactLinks } from "@/components/ContactLinks";
import { ExperienceList } from "@/components/ExperienceList";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SkillGroups } from "@/components/SkillGroup";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: "自己紹介、スキル、インターン経験",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="自己紹介"
        description={profile.summary}
      />
      <Container className="pb-16">
        <Section title="Profile" className="pt-0">
          <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
            <div>
              <p className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
                {profile.name}
              </p>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
                {profile.location}
              </p>
            </div>
            <div className="max-w-3xl">
              <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                {profile.shortIntro}
              </p>
              <dl className="mt-6 grid gap-5 border-y border-zinc-200 py-5 dark:border-zinc-800 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                    Education
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-zinc-800 dark:text-zinc-200">
                    {profile.education.school}
                    <br />
                    {profile.education.graduation}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                    Languages
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-zinc-800 dark:text-zinc-200">
                    {profile.languages.join(" / ")}
                  </dd>
                </div>
              </dl>
              <div className="mt-6">
                <ContactLinks />
              </div>
            </div>
          </div>
        </Section>

        <Section
          title="Skills / Tech Stack"
        >
          <SkillGroups />
        </Section>

        <Section
          title="Work Experience"
        >
          <ExperienceList experiences={experiences} />
        </Section>
      </Container>
    </>
  );
}
