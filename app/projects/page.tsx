import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ProjectList } from "@/components/ProjectList";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "制作プロジェクト",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="制作プロジェクト"
        description="Koto-Koto、Blog Application、Lite Markdown Editorを掲載しています。"
      />
      <Container className="pb-16">
        <ProjectList projects={projects} />
      </Container>
    </>
  );
}
