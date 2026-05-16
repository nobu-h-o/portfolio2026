type TechStackProps = {
  items: string[];
};

export function TechStack({ items }: TechStackProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
