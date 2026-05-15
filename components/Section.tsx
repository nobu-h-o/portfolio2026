import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ title, description, children, className }: SectionProps) {
  return (
    <section className={cn("border-t border-zinc-200 py-12 dark:border-zinc-800 sm:py-16", className)}>
      {(title || description) && (
        <div className="mb-8 max-w-3xl">
          {title && (
            <h2 className="text-xl font-semibold tracking-normal text-zinc-950 dark:text-zinc-50">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
