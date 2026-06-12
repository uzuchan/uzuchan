// GitHub統計からトロフィーSVG（assets/trophies.svg）を生成する。
// 外部サービス（github-profile-trophy等）に依存しないための自前実装。
// 必要環境変数: GITHUB_TOKEN（読み取りのみ使用）、GH_LOGIN（対象ユーザー名）
// 注: Commits は GitHub API の仕様上「直近1年間」のコントリビューション数。

import { writeFileSync, mkdirSync } from "node:fs";

const TOKEN = process.env.GITHUB_TOKEN;
const LOGIN = process.env.GH_LOGIN || "uzuchan";
if (!TOKEN) {
  console.error("GITHUB_TOKEN is required");
  process.exit(1);
}

const QUERY = `
query($login: String!) {
  user(login: $login) {
    followers { totalCount }
    repositories(first: 100, ownerAffiliations: OWNER, privacy: PUBLIC, isFork: false) {
      totalCount
      nodes { stargazerCount }
    }
    pullRequests { totalCount }
    issues { totalCount }
    contributionsCollection {
      totalCommitContributions
      restrictedContributionsCount
    }
  }
}`;

const res = await fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: {
    Authorization: `bearer ${TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query: QUERY, variables: { login: LOGIN } }),
});
const json = await res.json();
if (!json.data?.user) {
  console.error("GraphQL error:", JSON.stringify(json.errors || json));
  process.exit(1);
}
const u = json.data.user;

const stats = {
  stars: u.repositories.nodes.reduce((s, r) => s + r.stargazerCount, 0),
  commits:
    u.contributionsCollection.totalCommitContributions +
    u.contributionsCollection.restrictedContributionsCount,
  followers: u.followers.totalCount,
  repos: u.repositories.totalCount,
  prs: u.pullRequests.totalCount,
  issues: u.issues.totalCount,
};

// しきい値は [SSS, SS, S, AAA, AA, A, B] の順。下回れば C。
const TIERS = ["SSS", "SS", "S", "AAA", "AA", "A", "B"];
function rank(value, thresholds) {
  for (let i = 0; i < thresholds.length; i++) {
    if (value >= thresholds[i]) return TIERS[i];
  }
  return "C";
}

const RANK_COLOR = {
  SSS: "#ffd700", SS: "#ffc83d", S: "#ffb300",
  AAA: "#c4a7ff", AA: "#a988f7", A: "#9b7bf7",
  B: "#6f8ff7", C: "#8b949e",
};

// 各メトリクスのアイコン（シンプルなベクターパス。絵文字は使わない）
const ICONS = {
  stars:
    '<path d="M12 1.5l3.1 6.7 7.2.8-5.4 4.9 1.5 7.1L12 17.4 5.6 21l1.5-7.1L1.7 9l7.2-.8z"/>',
  commits:
    '<circle cx="12" cy="12" r="4.2" fill="none" stroke-width="2.6"/><line x1="0.5" y1="12" x2="7.8" y2="12" stroke-width="2.6"/><line x1="16.2" y1="12" x2="23.5" y2="12" stroke-width="2.6"/>',
  followers:
    '<circle cx="12" cy="7.5" r="4.5"/><path d="M3.5 21.5c0-4.7 3.8-8 8.5-8s8.5 3.3 8.5 8z"/>',
  repos:
    '<path d="M5 2.5h13a1.5 1.5 0 0 1 1.5 1.5v16a1.5 1.5 0 0 1-1.5 1.5H6.5A2.5 2.5 0 0 1 4 19V4a1.5 1.5 0 0 1 1-1.5z" fill="none" stroke-width="2.2"/><line x1="8.2" y1="2.5" x2="8.2" y2="21.5" stroke-width="2.2"/>',
  prs:
    '<circle cx="6.5" cy="5.5" r="3" fill="none" stroke-width="2.4"/><circle cx="6.5" cy="18.5" r="3" fill="none" stroke-width="2.4"/><circle cx="17.5" cy="18.5" r="3" fill="none" stroke-width="2.4"/><line x1="6.5" y1="8.5" x2="6.5" y2="15.5" stroke-width="2.4"/><path d="M11 5.5h4a2.5 2.5 0 0 1 2.5 2.5v7.5" fill="none" stroke-width="2.4"/>',
  issues:
    '<circle cx="12" cy="12" r="9.5" fill="none" stroke-width="2.6"/><circle cx="12" cy="12" r="3.2"/>',
};

const CARDS = [
  { key: "stars", label: "Stars", value: stats.stars, thresholds: [100, 50, 25, 10, 5, 3, 2] },
  { key: "commits", label: "Commits", value: stats.commits, thresholds: [2000, 1000, 500, 200, 100, 50, 20] },
  { key: "followers", label: "Followers", value: stats.followers, thresholds: [100, 50, 25, 10, 5, 3, 2] },
  { key: "repos", label: "Repositories", value: stats.repos, thresholds: [50, 30, 20, 12, 8, 5, 3] },
  { key: "prs", label: "Pull Requests", value: stats.prs, thresholds: [200, 100, 50, 25, 12, 6, 3] },
  { key: "issues", label: "Issues", value: stats.issues, thresholds: [100, 50, 25, 12, 8, 4, 2] },
];

const CARD_W = 118;
const CARD_H = 130;
const GAP = 10;
const width = CARDS.length * CARD_W + (CARDS.length - 1) * GAP;

let body = "";
CARDS.forEach((c, i) => {
  const x = i * (CARD_W + GAP);
  const r = rank(c.value, c.thresholds);
  const color = RANK_COLOR[r];
  body += `
  <g transform="translate(${x},0)">
    <rect x="1" y="1" width="${CARD_W - 2}" height="${CARD_H - 2}" rx="10"
          fill="none" stroke="#8b949e" stroke-opacity="0.35" stroke-width="1.5"/>
    <g transform="translate(${CARD_W / 2 - 12},14)" fill="${color}" stroke="${color}">
      ${ICONS[c.key]}
    </g>
    <text x="${CARD_W / 2}" y="68" text-anchor="middle"
          font-family="Segoe UI, Helvetica, Arial, sans-serif"
          font-size="26" font-weight="800" fill="${color}">${r}</text>
    <text x="${CARD_W / 2}" y="92" text-anchor="middle"
          font-family="Segoe UI, Helvetica, Arial, sans-serif"
          font-size="12.5" font-weight="600" fill="#8b949e">${c.label}</text>
    <text x="${CARD_W / 2}" y="113" text-anchor="middle"
          font-family="Segoe UI, Helvetica, Arial, sans-serif"
          font-size="14" font-weight="700" fill="#6f8ff7">${c.value.toLocaleString("en-US")}</text>
  </g>`;
});

const svg = `<svg width="${width}" height="${CARD_H}" viewBox="0 0 ${width} ${CARD_H}"
  xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${LOGIN}'s trophies">${body}
</svg>
`;

mkdirSync("assets", { recursive: true });
writeFileSync("assets/trophies.svg", svg);
console.log("generated assets/trophies.svg:", JSON.stringify(stats));
