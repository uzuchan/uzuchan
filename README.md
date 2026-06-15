<!--
==================================================================
  編集ガイド / EDIT GUIDE
==================================================================
  このREADMEは uzuchan/uzuchan（プロフィール用リポジトリ）に置きます。
  ※ ユーザー名 uzuchan は各URLに埋め込み済みです。別名なら全置換してください。

  [方針]
    - 本名・所属・メールアドレス・SNS などの個人特定情報は載せない
      （応募時に直接伝えるため、プロフィールからは繋げない）。

  [自動で動くもの（設定済み・URLは変更しない）]
    - スネーク: .github/workflows/snake.yml が output ブランチに SVG を生成
      （「More Stats」折りたたみ内に配置。URL不変更）。
    - Metrics: .github/workflows/metrics.yml が metrics.svg を毎日自動更新
      （「More Stats」折りたたみ内に配置。URL不変更）。
    - 統計系（トロフィー / 連続記録 / GitHub Stats / 使用言語）: .github/workflows/trophies.yml
      （Generate Stats）が assets/ 配下の各SVGを実データから6時間ごとに自動生成（外部サービス非依存。
      scripts/generate-trophies.mjs / generate-streak.mjs / generate-stats.mjs）。
    - ヘッダー/フッター/スキルアイコンは assets/ 内の自前SVG（skilliconsの出力を取り込み
      self-host。camoの壊れキャッシュ対策で外部依存なし）。
    - 残る外部サービス依存は typing SVG と閲覧カウンタのみ（campキャッシュのため反映に時差あり）。
==================================================================
-->

<!-- ============ ヘッダーバナー（自作SVG・assets/header.svg） ============ -->
<div align="center">

![header](https://raw.githubusercontent.com/uzuchan/uzuchan/main/assets/header.svg)

<!-- ============ トロフィー（自前生成・assets/trophies-*.svg・毎日自動更新） ============ -->

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/uzuchan/uzuchan/main/assets/trophies-dark.svg?v=1781527521">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/uzuchan/uzuchan/main/assets/trophies-light.svg?v=1781527521">
  <img alt="uzuchan's trophies" src="https://raw.githubusercontent.com/uzuchan/uzuchan/main/assets/trophies-light.svg?v=1781527521">
</picture>

<!-- ============ タイピングアニメーション（readme-typing-svg） ============ -->

[![Typing SVG](https://readme-typing-svg.demolab.com/?font=Fira+Code&weight=600&size=24&pause=1000&color=6F8FF7&center=true&vCenter=true&width=600&lines=Hello%2C+I'm+uzuchan;Student+Developer+from+Japan;NLP+Researcher+%C3%97+Web+Developer;research+%C3%97+making;Building+with+React%2C+TypeScript+%26+Three.js;Open+to+work+%26+internships)](https://git.io/typing-svg)

<!-- ============ プロフィール閲覧カウンタ（komarev ghpvc） ============ -->

![Profile Views](https://komarev.com/ghpvc/?username=uzuchan&label=Profile%20Views&color=6f8ff7&style=flat)

</div>

<br>

<!-- ============================================================= -->
<!-- 1. 自己紹介セクション（日本語）                                -->
<!-- ============================================================= -->

## About Me

```yaml
name:        uzuchan
location:    Japan
role:        Student Developer / NLP Researcher
status:      就職活動中 / Open to Work
focus:       research × making
```

- **研究テーマ**: 自然言語処理 × 言語発達 — 子どもがどのようにことばを獲得していくのかを、日本語の親子会話コーパスや小規模言語モデルを用いて分析しています。
- **興味分野**: Web フロントエンド / インタラクティブ表現（Three.js・Canvas）/ 自然言語処理 / 個人開発・プロトタイピング
- **いま取り組んでいること**: React 19 + TypeScript による学習アプリ、Three.js を使ったインタラクティブ作品づくり。研究で得た問いを「実際に動くプロダクト」として試すことを大切にしています。
- **就活ステータス**: 就職活動中。エンジニア職を志望し、インターン・共同制作のお声がけも歓迎しています。

> 「research × making」をテーマに、研究で生まれた問いを手を動かしながらプロダクトへ。

<br>

<!-- ============================================================= -->
<!-- 2. 代表プロジェクト（github-readme-stats extra-pins / 2列グリッド） -->
<!-- ライト/ダーク両対応: <picture> で theme=tokyonight / default    -->
<!-- ============================================================= -->

## Featured Projects

<div align="center">

<table>
<tr>
<td width="50%" valign="top" align="center">

<picture>
  <source media="(prefers-color-scheme: dark)"
    srcset="https://github-readme-stats.vercel.app/api/pin/?username=uzuchan&repo=hikari&hide_border=true&theme=tokyonight">
  <source media="(prefers-color-scheme: light)"
    srcset="https://github-readme-stats.vercel.app/api/pin/?username=uzuchan&repo=hikari&hide_border=true&theme=default">
  <img alt="hikari repo card"
    src="https://github-readme-stats.vercel.app/api/pin/?username=uzuchan&repo=hikari&hide_border=true">
</picture>

**hikari** — 光・音・自然をテーマにした 27 作品のインタラクティブ試作集。Playwright で実ブラウザ検証。

[![Demo](https://img.shields.io/badge/Demo-Live-6f8ff7?style=flat-square&logo=googlechrome&logoColor=white)](https://uzuchan.github.io/hikari/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white)](https://threejs.org)
![Canvas 2D](https://img.shields.io/badge/Canvas_2D-E34F26?style=flat-square&logo=html5&logoColor=white)
![Web Audio](https://img.shields.io/badge/Web_Audio_API-FF9900?style=flat-square&logo=javascript&logoColor=white)
[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white)](https://playwright.dev)

</td>
<td width="50%" valign="top" align="center">

<picture>
  <source media="(prefers-color-scheme: dark)"
    srcset="https://github-readme-stats.vercel.app/api/pin/?username=uzuchan&repo=Sparta-Typing&hide_border=true&theme=tokyonight">
  <source media="(prefers-color-scheme: light)"
    srcset="https://github-readme-stats.vercel.app/api/pin/?username=uzuchan&repo=Sparta-Typing&hide_border=true&theme=default">
  <img alt="Sparta-Typing repo card"
    src="https://github-readme-stats.vercel.app/api/pin/?username=uzuchan&repo=Sparta-Typing&hide_border=true">
</picture>

**Sparta-Typing** — 間隔反復法 × ローマ字判定で語彙定着を狙う英単語タイピング学習 SPA。

[![Demo](https://img.shields.io/badge/Demo-Live-6f8ff7?style=flat-square&logo=googlechrome&logoColor=white)](https://uzuchan.github.io/Sparta-Typing/)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
![Zustand](https://img.shields.io/badge/Zustand-orange?style=flat-square)

</td>
</tr>

<tr>
<td colspan="2" valign="top" align="center">

<picture>
  <source media="(prefers-color-scheme: dark)"
    srcset="https://github-readme-stats.vercel.app/api/pin/?username=uzuchan&repo=NEXUS&hide_border=true&theme=tokyonight">
  <source media="(prefers-color-scheme: light)"
    srcset="https://github-readme-stats.vercel.app/api/pin/?username=uzuchan&repo=NEXUS&hide_border=true&theme=default">
  <img alt="NEXUS repo card"
    src="https://github-readme-stats.vercel.app/api/pin/?username=uzuchan&repo=NEXUS&hide_border=true">
</picture>

**NEXUS** — SF 世界観の没入型 Web 体験。GPU パーティクル × シネマティック演出。

[![Demo](https://img.shields.io/badge/Demo-Live-6f8ff7?style=flat-square&logo=googlechrome&logoColor=white)](https://uzuchan.github.io/NEXUS/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white)](https://threejs.org)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
![GLSL](https://img.shields.io/badge/GLSL-5586A4?style=flat-square)
![GPU Particles](https://img.shields.io/badge/GPU_Particles-000000?style=flat-square)

</td>
</tr>
</table>

<sub>ほかの制作物は <a href="https://github.com/uzuchan?tab=repositories">公開リポジトリ一覧</a> からご覧いただけます。</sub>

</div>

<br>

<!-- ============================================================= -->
<!-- Open Source（自作テンプレートの宣伝）                          -->
<!-- ============================================================= -->

## Open Source

<div align="center">

<a href="https://github.com/uzuchan/github-profile-starter">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-stats.vercel.app/api/pin/?username=uzuchan&repo=github-profile-starter&hide_border=true&theme=tokyonight">
  <source media="(prefers-color-scheme: light)" srcset="https://github-readme-stats.vercel.app/api/pin/?username=uzuchan&repo=github-profile-starter&hide_border=true&theme=default">
  <img alt="github-profile-starter" src="https://github-readme-stats.vercel.app/api/pin/?username=uzuchan&repo=github-profile-starter&hide_border=true">
</picture>
</a>

**github-profile-starter** — このプロフィールを誰でも作れるテンプレートとして公開しています。トロフィー・統計・連続記録・使用言語・スネーク・メトリクス・3Dの街を実データから自動更新（PAT不要・英日解説つき）。<br>
A reusable starter kit for this profile — auto-updating stats, trophies, languages, and a 3D contribution city.

[![Use this template](https://img.shields.io/badge/Use_this_template-2ea44f?style=for-the-badge&logo=github&logoColor=white)](https://github.com/uzuchan/github-profile-starter/generate)
[![Repository](https://img.shields.io/badge/Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/uzuchan/github-profile-starter)

</div>

<br>

<!-- ============================================================= -->
<!-- 3. スキルアイコン（skillicons.dev / カテゴリ別・<picture>両対応） -->
<!-- ============================================================= -->

## Skills & Tools

<div align="center">

<!-- ─── Languages ─────────────────────────────────────── -->
<h4>Languages</h4>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/uzuchan/uzuchan/main/assets/skills-languages-dark.svg">
  <img src="https://raw.githubusercontent.com/uzuchan/uzuchan/main/assets/skills-languages-light.svg"
       alt="Languages: C, C++, C#, Java, Kotlin, PHP, Python, JavaScript, TypeScript, Swift, HTML, CSS">
</picture>

<!-- ─── Frameworks & Libraries ────────────────────────── -->
<h4>Frameworks &amp; Libraries</h4>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/uzuchan/uzuchan/main/assets/skills-frameworks-dark.svg">
  <img src="https://raw.githubusercontent.com/uzuchan/uzuchan/main/assets/skills-frameworks-light.svg"
       alt="Frameworks: React, Vue, Node.js, Flask, jQuery, Three.js, Electron, OpenCV, PyTorch">
</picture>

<!-- skillicons に無い: Zustand / Recharts / Dexie / Web Audio API / Canvas 2D -->
<br>
<img src="https://img.shields.io/badge/Zustand-443E38?style=flat-square&logo=react&logoColor=white" alt="Zustand">
<img src="https://img.shields.io/badge/Recharts-22B5BF?style=flat-square&logo=react&logoColor=white" alt="Recharts">
<img src="https://img.shields.io/badge/Dexie.js_(IndexedDB)-EB5E28?style=flat-square&logo=databricks&logoColor=white" alt="Dexie.js (IndexedDB)">
<img src="https://img.shields.io/badge/Web_Audio_API-4285F4?style=flat-square&logo=googlechrome&logoColor=white" alt="Web Audio API">
<img src="https://img.shields.io/badge/Canvas_2D_API-E34F26?style=flat-square&logo=html5&logoColor=white" alt="Canvas 2D API">

<!-- ─── Tools & Infrastructure ─────────────────────────── -->
<h4>Tools &amp; Infrastructure</h4>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/uzuchan/uzuchan/main/assets/skills-tools-dark.svg">
  <img src="https://raw.githubusercontent.com/uzuchan/uzuchan/main/assets/skills-tools-light.svg"
       alt="Tools: Git, GitHub, Docker, AWS, Firebase, Nginx, MySQL, npm, Bash, PowerShell, Linux, Ubuntu, Apple">
</picture>

<!-- skillicons に無いツールは shields.io バッジで補完 -->
<br>
<img src="https://img.shields.io/badge/Warp-01A4FF?style=flat-square&logo=warp&logoColor=white" alt="Warp">
<img src="https://img.shields.io/badge/UTM-4A7EBF?style=flat-square" alt="UTM">
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white" alt="ESLint">
<img src="https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white" alt="Playwright">
<img src="https://img.shields.io/badge/Claude_Code-D97757?style=flat-square&logo=claude&logoColor=white" alt="Claude Code">

<!-- ─── Editors & IDEs ─────────────────────────────────── -->
<h4>Editors &amp; IDEs</h4>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/uzuchan/uzuchan/main/assets/skills-editors-dark.svg">
  <img src="https://raw.githubusercontent.com/uzuchan/uzuchan/main/assets/skills-editors-light.svg"
       alt="Editors: VS Code, Eclipse, Vim">
</picture>

<!-- skillicons に無いエディタ/IDEは shields.io バッジで補完 -->
<br>
<img src="https://img.shields.io/badge/Cursor-000000?style=flat-square&logo=cursor&logoColor=white" alt="Cursor">
<img src="https://img.shields.io/badge/Xcode-147EFB?style=flat-square&logo=xcode&logoColor=white" alt="Xcode">
<img src="https://img.shields.io/badge/Swift_Playgrounds-F05138?style=flat-square&logo=swift&logoColor=white" alt="Swift Playgrounds">

<!-- ─── Design, Docs & Apps ────────────────────────────── -->
<h4>Design, Docs &amp; Apps</h4>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/uzuchan/uzuchan/main/assets/skills-design-dark.svg">
  <img src="https://raw.githubusercontent.com/uzuchan/uzuchan/main/assets/skills-design-light.svg"
       alt="Design/Docs/Apps: Figma, Illustrator, Photoshop, Blender, LaTeX, Markdown, SVG, Obsidian, Notion, WordPress">
</picture>

<!-- skillicons に無いアプリは shields.io バッジで補完 -->
<br>
<img src="https://img.shields.io/badge/Zotero-CC2936?style=flat-square&logo=zotero&logoColor=white" alt="Zotero">
<img src="https://img.shields.io/badge/Fitbit_OS_Simulator-00B0B9?style=flat-square&logo=fitbit&logoColor=white" alt="Fitbit OS Simulator">

</div>

<br>

<!-- ============================================================= -->
<!-- 4. 統計カード（stats + top-langs + streak）常時表示・コンパクト -->
<!-- ライト/ダーク両対応: <picture> で theme を切り替え             -->
<!-- ============================================================= -->

## GitHub Stats

<div align="center">

<img height="165" alt="uzuchan's GitHub stats" src="https://raw.githubusercontent.com/uzuchan/uzuchan/main/assets/stats.svg?v=1781527521">
&nbsp;
<img height="165" alt="uzuchan's top languages" src="https://raw.githubusercontent.com/uzuchan/uzuchan/main/assets/top-langs.svg?v=1781527521">

<!-- ============ ストリーク（自前生成・assets/streak.svg?v=1781527521・自動更新） ============ -->

![uzuchan's streak](https://raw.githubusercontent.com/uzuchan/uzuchan/main/assets/streak.svg?v=1781527521)

</div>

<br>

<!-- ============================================================= -->
<!-- 5. Contribution City（github-profile-3d-contrib night-view・毎日自動更新）-->
<!--   コミット履歴から街が育つ。クリックで honzaap の操作できる3D版が開く  -->
<!-- ============================================================= -->

## Contribution City

<div align="center">

[![uzuchan's contribution city](https://raw.githubusercontent.com/uzuchan/uzuchan/main/profile-3d-contrib/profile-night-view.svg)](https://honzaap.github.io/GithubCity/?name=uzuchan&year=2026)

<sub>コミット履歴から街が育ちます。クリックすると <a href="https://honzaap.github.io/GithubCity/?name=uzuchan&year=2026">操作できる3Dシティ（GithubCity）</a> が開きます。<br>3D SVG: <a href="https://github.com/yoshi389111/github-profile-3d-contrib">github-profile-3d-contrib</a> ／ interactive city: <a href="https://github.com/honzaap/GithubCity">honzaap/GithubCity</a></sub>

</div>

<br>

<!-- ============================================================= -->
<!-- 6. More Stats（<details> 折りたたみ）                          -->
<!--   Activity Graph → Snake → Metrics の順                        -->
<!--   ※ snake / metrics は自動更新URLをそのまま維持               -->
<!-- ============================================================= -->

## More Stats

<details>
<summary>詳細な GitHub アクティビティを見る（Activity / Snake / Metrics）</summary>

<br>

<!-- ============ アクティビティグラフ（github-readme-activity-graph） ============ -->

<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-activity-graph.vercel.app/graph?username=uzuchan&bg_color=1a1b27&color=6f8ff7&line=6f8ff7&point=ffffff&area=true&hide_border=true">
  <source media="(prefers-color-scheme: light)" srcset="https://github-readme-activity-graph.vercel.app/graph?username=uzuchan&bg_color=ffffff&color=6f8ff7&line=6f8ff7&point=1a1b27&area=true&hide_border=true">
  <img alt="uzuchan's activity graph" src="https://github-readme-activity-graph.vercel.app/graph?username=uzuchan&area=true&hide_border=true">
</picture>

<!-- ============ スネークアニメーション（output ブランチ参照・自動更新） ============ -->

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/uzuchan/uzuchan/output/github-contribution-grid-snake-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/uzuchan/uzuchan/output/github-contribution-grid-snake.svg">
  <img alt="uzuchan's contribution snake animation" src="https://raw.githubusercontent.com/uzuchan/uzuchan/output/github-contribution-grid-snake.svg">
</picture>

<!-- ============ メトリクスダッシュボード（lowlighter/metrics・毎日自動更新） ============ -->

<img alt="uzuchan's metrics" src="https://raw.githubusercontent.com/uzuchan/uzuchan/main/metrics.svg">

</div>

</details>

<br>

<!-- ============ フッターバナー（自作SVG・assets/footer.svg） ============ -->
<div align="center">

![footer](https://raw.githubusercontent.com/uzuchan/uzuchan/main/assets/footer.svg)

<sub>Thanks for visiting! ご覧いただきありがとうございます。</sub>

</div>
