import { Container } from "@/components/Container";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <Container className="pb-10 pt-12 sm:pb-14 sm:pt-16">
      <div className="max-w-3xl">
        {eyebrow && (
          <p className="mb-3 text-sm font-medium text-accent-600 dark:text-accent-500">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl font-semibold tracking-normal text-zinc-950 dark:text-zinc-50 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-5 text-base leading-8 text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </div>
    </Container>
  );
}
