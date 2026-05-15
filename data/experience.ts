export type Experience = {
  period: string;
  company: string;
  domain: string;
  role: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  improvements: string[];
  learnings: string[];
};

export const experiences: Experience[] = [
  {
    period: "2025.02 - Present",
    company: "Emoba Inc.",
    domain: "金融データ可視化プラットフォーム / AI営業支援サービス",
    role: "Software Engineer Intern",
    summary:
      "React / TypeScript を用いた経済データ可視化プラットフォームのフロントエンド開発を担当しています。分析機能、WebLLMを用いた予測拡張、i18n、レスポンシブ対応、E2Eテストに取り組みました。また以前は、Svelteを用いたLLMベースのメッセージングUI開発にも携わっていました。",
    responsibilities: [
      "金融データ可視化プラットフォームのフロントエンド開発",
      "相関分析などの分析機能と、WebLLMを用いた予測拡張の実装",
      "i18n対応とレスポンシブデザインによるUX改善",
      "PlaywrightによるE2Eテストと基本的なSEO最適化",
      "Svelteを用いたAI営業支援サービスのメッセージングUI開発",
    ],
    technologies: ["React", "TypeScript", "Svelte", "WebLLM", "Playwright", "Git/GitHub"],
    improvements: [
      "データ分析に必要な情報を整理し、画面上で比較・判断しやすいUIとして実装",
      "多言語化と画面幅ごとの表示調整により、利用環境に左右されにくい体験を改善",
      "E2Eテストを導入し、主要なユーザーフローの品質確認を自動化",
    ],
    learnings: [
      "分析プロダクトでは、データの正確さだけでなく、判断しやすい表示設計が重要であること",
      "LLMをUIに組み込む際は、応答生成中の状態やユーザー入力の扱いまで設計する必要があること",
      "テスト、SEO、レスポンシブ対応を含めて、公開・運用される画面として実装する視点",
    ],
  },
];
