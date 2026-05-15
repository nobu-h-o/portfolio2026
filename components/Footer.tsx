import { Container } from "@/components/Container";
import { ContactLinks } from "@/components/ContactLinks";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
      <Container className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          © 2026 {profile.name}. Built with Next.js and Tailwind CSS.
        </p>
        <ContactLinks compact />
      </Container>
    </footer>
  );
}
