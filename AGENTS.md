# AGENTS.md

このリポジトリは、三浦 碧生 / Aoi Miura のポートフォリオサイトです。Next.js App Router、TypeScript、Tailwind CSSで実装されています。

## Project Overview

- 目的: GitHubプロフィールや履歴書から訪れた人に、人物像、技術力、制作物、インターン経験を短時間で伝える。
- 方針: Profile + Project detail 型の、静かで実務寄りのポートフォリオ。履歴書の補足として読めるが、サイト単体では人物像と制作姿勢が自然に伝わることを重視する。
- 避けること: 派手なLP風デザイン、テンプレートっぽい自己紹介、仮URL、未提供の連絡先、過剰な装飾。

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- lucide-react

## Directory Notes

- `app/`: App Router pages and layouts.
- `components/`: Reusable UI components.
- `data/`: Profile, project, and experience content. Most portfolio copy should be edited here.
- `lib/`: Small utilities.

## Content Rules

- `data/projects.ts` is the source of truth for project content.
- Project titles should use product/project names consistently:
  - `Koto-Koto`
  - `Blog Application`
  - `Lite Markdown Editor`
- Keep technology names consistent and omit version numbers in `techStack`.
  - Good: `Next.js`, `TypeScript`, `Tailwind CSS`, `Prisma`
  - Avoid: `Next.js 16`, `TypeScript 5`, `Prisma 7`
- Prefer concrete descriptions over generic phrases.
  - Good: `Trieベースのローマ字かな変換・判定エンジンを自作`
  - Avoid: `継続的に成長し、様々なプロジェクトに貢献`
- Keep Japanese body copy natural, but avoid unnecessary template language.

## Design Rules

- Keep the UI minimal, readable, and calm, but avoid making the whole site feel like a plain resume table.
- Use white/off-white backgrounds, gray/black text, and one accent color.
- Avoid gradients, decorative backgrounds, large hero sections, and heavy animation.
- Use cards only where they clarify repeated items.
- Keep border radius modest and spacing deliberate.
- Maintain dark mode support.
- Prefer natural section titles, lightweight metadata, and readable groupings over heavy uppercase labels or dense definition-list layouts.

## Development Commands

```bash
npm install
npx tsc --noEmit
npm run build
npm run dev
```

Notes:

- `npx tsc --noEmit` is the fastest local sanity check for data and type changes.
- `npm run build` uses Next.js/Turbopack and may fail inside restricted sandboxes with a port/process permission error. In a normal local environment it should be used before publishing.
- The current `lint` script is inherited from the scaffold. Confirm it works before relying on it.

## Editing Guidance

- Prefer editing data files before changing page components.
- Keep new components small and consistent with existing `Container`, `Section`, and list components.
- Do not introduce new UI libraries unless necessary.
- Do not remove future-facing type options like project statuses unless they are causing an actual problem.
- When adding a project, include:
  - `slug`
  - `title`
  - `tagline`
  - `description`
  - `status`
  - `period`
  - `techStack`
  - `role`
  - `githubUrl` when available
  - `demoUrl`
  - `overview`
  - `background`
  - `approach`
  - `challenges`
  - `improvements`

## Verification

For content-only edits:

```bash
npx tsc --noEmit
```

For UI or routing edits:

```bash
npm run build
```

If build cannot run because of sandbox restrictions, mention that clearly in the final response and include the `npx tsc --noEmit` result.
