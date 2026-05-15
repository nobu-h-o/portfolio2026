export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  status: "Released" | "In Progress" | "Prototype";
  period: string;
  techStack: string[];
  role: string[];
  githubUrl?: string;
  demoUrl: string;
  featured: boolean;
  overview: string;
  background: string;
  approach: string[];
  challenges: string[];
  improvements: string[];
};

export const projects: Project[] = [
  {
    slug: "koto-koto",
    title: "Koto-Koto",
    tagline: "フロー状態を誘発する禅インスパイアの日本語タイピングゲーム",
    description:
      "無駄を削ぎ落としたUI、心地よい打鍵音、季節に合わせて変化する演出を組み合わせた日本語タイピングゲームです。練習効率だけでなく、リラックスして集中できるZen Typing体験を目指して制作しました。",
    status: "Released",
    period: "2026",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zod",
      "NextAuth.js",
      "Prisma",
      "Supabase",
      "Jest",
    ],
    role: [
      "企画",
      "UI設計",
      "フロントエンド実装",
      "入力判定エンジン実装",
      "認証・データベース連携",
      "ランキング機能",
      "テスト",
    ],
    githubUrl: "https://github.com/Aoi3u/koto-koto",
    demoUrl: "https://koto-koto.vercel.app/",
    featured: true,
    overview:
      "ClassicとWord Endlessの2つのプレイスタイルを持つ日本語タイピングゲームです。スコアやランキングを競うモードに加え、記録を気にせず単語を打ち続ける瞑想的なモードを用意しています。",
    background:
      "単なるタイピング練習ではなく、集中しやすい画面、心地よいフィードバック、季節感のある演出を組み合わせることで、タイピングそのものに没入できる体験を作りたいと考えて制作しました。",
    approach: [
      "「si/shi」「tu/tsu」などの入力揺れを許容するため、Trieベースのローマ字かな変換・判定エンジンを自作",
      "Cherry MX軸やTopreなど、13種類のメカニカルキーボード打鍵音を用意し、入力時のフィードバックを設計",
      "現実の季節に合わせてテーマとパーティクル演出が変化する仕組みを実装",
      "NextAuth.js、Prisma、Supabaseを用いて認証、スコア保存、ランキング機能を構築",
      "JestとReact Testing Libraryで入力ロジック、結果判定、ランキング周辺のテストを作成",
    ],
    challenges: [
      "日本語ローマ字入力の揺れを、ユーザーの入力体験を損なわずに高速に判定する設計が難しかった",
      "打鍵音やパーティクル演出を加えながら、タイピング中の集中を妨げないUIに調整する必要があった",
      "ゲームロジック、認証、ランキング、UI演出を分離し、保守しやすい構成に整理することに取り組んだ",
    ],
    improvements: [
      "Word Endlessモードの単語セット拡充",
      "Zen Scoreの算出ロジックの検証と調整",
      "ARCHITECTURE.mdをもとに、Custom HooksとContext APIの責務をさらに整理",
    ],
  },
  {
    slug: "blog-application",
    title: "Blog Application",
    tagline: "Markdownで記事を管理できる認証付きブログプラットフォーム",
    description:
      "Next.jsを用いて作成したブログプラットフォームです。Markdownでの記事管理、Supabaseを利用した認証やデータ保存、記事のCRUDを実装しています。",
    status: "Released",
    period: "2025",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Supabase"],
    role: ["UI設計", "フロントエンド実装", "認証機能", "記事CRUD", "データベース設計", "デプロイ"],
    githubUrl: "https://github.com/Aoi3u/next-blog",
    demoUrl: "https://tech-notes-waseda.vercel.app/",
    featured: true,
    overview:
      "学習内容や技術メモをMarkdownで蓄積し、ブラウザ上で読みやすく公開するためのアプリケーションです。認証、データ保存、記事の作成・編集・削除までを含めて実装しました。",
    background:
      "技術メモをMarkdownで管理し、認証付きで投稿・編集できるブログとして制作しました。記事CRUD、認証、データベース設計を含めることで、コンテンツ管理を行うWebアプリケーションとして構成しました。",
    approach: [
      "Next.jsとTypeScriptで、記事一覧、詳細、作成・編集画面を実装",
      "Supabaseを利用して認証とデータ保存を構成",
      "Prismaを用いて記事データのモデル定義とデータベース操作を実装",
      "Markdown本文が読みやすく見えるよう、見出し、行間、余白を調整",
    ],
    challenges: [
      "認証状態によって表示や操作を切り替える設計に注意が必要だった",
      "記事CRUDとデータベース設計を結びつけて理解することが学習上の大きなポイントだった",
      "Markdown本文の自由度と、ブログとしての読みやすさのバランス調整が難しかった",
    ],
    improvements: [
      "タグやカテゴリによる記事整理",
      "検索機能と下書き管理の追加",
      "主要な投稿・編集フローに対するE2Eテストの追加",
    ],
  },
  {
    slug: "lite-markdown-editor",
    title: "Lite Markdown Editor",
    tagline: "軽量で機能的な2ペイン構成のMarkdownエディタ",
    description:
      "Next.jsとTypeScriptで構築した軽量Markdownエディタです。CodeMirrorによる編集体験、markdown-itによるプレビュー、KaTeXやMermaidの描画に対応しています。",
    status: "Released",
    period: "2025",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "CodeMirror",
      "markdown-it",
      "DOMPurify",
      "KaTeX",
      "Mermaid",
    ],
    role: ["UI設計", "エディタ実装", "プレビュー描画", "パフォーマンス調整", "デプロイ"],
    githubUrl: "https://github.com/Aoi3u/lite-md-editor",
    demoUrl: "https://lite-md-editor.vercel.app/",
    featured: true,
    overview:
      "Markdownの編集とプレビューを同時に行える、2ペイン構成の軽量エディタです。数式、図表、HTMLサニタイズなど、実用的なMarkdown編集に必要な機能を取り入れています。",
    background:
      "Markdown編集、リアルタイムプレビュー、スクロール同期、数式・図表描画を一つの画面で扱うため、入力体験と描画パフォーマンスの両方を意識して制作しました。",
    approach: [
      "CodeMirrorを用いて、編集しやすい入力エリアを実装",
      "markdown-itでMarkdownをHTMLに変換し、DOMPurifyで安全性を考慮",
      "KaTeXやMermaidを遅延読み込みし、初期表示の負荷を抑える構成にした",
      "エディタとプレビューの双方向スクロール同期を調整",
    ],
    challenges: [
      "即時プレビューの更新頻度と描画負荷のバランス調整が難しかった",
      "KaTeXやMermaidのような重い描画処理を、操作感を損なわずに扱う必要があった",
      "2ペイン構成で、編集位置とプレビュー位置を自然に対応させる調整に取り組んだ",
    ],
    improvements: [
      "ファイル保存・読み込み機能の追加",
      "キーボードショートカットやコマンドパレットの拡充",
      "大きなMarkdownファイルでの描画パフォーマンス改善",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
