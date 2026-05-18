import Link from "next/link";
import { ExternalLink, Github, type LucideIcon } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

type ContactLinksProps = {
  compact?: boolean;
};

const links = [
  { href: profile.links.github, label: "GitHub", icon: Github },
] satisfies Array<{ href: string; label: string; icon: LucideIcon }>;

export function ContactLinks({ compact = false }: ContactLinksProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", compact && "gap-3")}>
      {links.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.label}
            href={item.href}
            target={!isInternal ? "_blank" : undefined}
            rel={!isInternal ? "noopener noreferrer" : undefined}
            className={cn(
              "inline-flex items-center gap-2 border border-zinc-300 text-sm font-medium text-zinc-800 transition hover:border-zinc-500 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:text-zinc-50",
              compact ? "border-0 p-0" : "px-3 py-2",
            )}
          >
            <Icon size={16} />
            {item.label}
            {!compact && item.href.startsWith("http") && <ExternalLink size={14} />}
          </Link>
        );
      })}
    </div>
  );
}
