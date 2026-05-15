type CaseStudySectionProps = {
  title: string;
  children?: React.ReactNode;
  items?: string[];
};

export function CaseStudySection({ title, children, items }: CaseStudySectionProps) {
  return (
    <section className="border-t border-zinc-200 py-8 dark:border-zinc-800">
      <div className="grid gap-5 lg:grid-cols-[220px_1fr]">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
          {title}
        </h2>
        <div>
          {children}
          {items && (
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item} className="text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
