type TechStackProps = {
  items: string[];
};

export function TechStack({ items }: TechStackProps) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-2">
      {items.map((item) => (
        <li key={item} className="text-sm text-zinc-700 dark:text-zinc-300">
          <span className="mr-3 text-zinc-300 dark:text-zinc-700">/</span>
          {item}
        </li>
      ))}
    </ul>
  );
}
