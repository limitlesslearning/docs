---
title: Decision Log
description: Locked project decisions with dates and rationale.
---

Record of locked decisions for the Klados documentation and platform foundations. Add new rows when a decision is made; do not silently overwrite history — supersede with a new entry that references the old `#`.

| # | Date | Decision | Rationale |
| --- | --- | --- | --- |
| 1 | 2026-11-26 | Documentation lives in the public repository [`limitlesslearning/docs`](https://github.com/limitlesslearning/docs) | Transparent, forkable single source of truth for the Platform Bible and community contributions |
| 2 | 2026-11-26 | Documentation site is built with [Sveltepress](https://sveltepress.site/) (default theme) | Markdown-first docs with full SvelteKit power; aligns with the planned SvelteKit application stack |
| 3 | 2026-11-26 | Documentation **content** is licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | Share-alike openness for educational text while requiring attribution |
| 4 | 2026-11-26 | Documentation site **code** is licensed [MIT](https://opensource.org/licenses/MIT) | Standard permissive license for tooling, config, and theme customization |
| 5 | 2026-11-26 | Site is hosted on GitHub Pages at `https://limitlesslearning.github.io/docs/` | Free static hosting integrated with the public GitHub org; Actions-based deploys |
| 6 | 2026-11-27 | The project is renamed from Limitless Learning to Klados | Chosen by Renoy on 27 Nov 2026. GitHub organisation and repository slugs stay `limitlesslearning` until a rename is approved. |

:::note[License split]
See [`LICENSE`](https://github.com/limitlesslearning/docs/blob/main/LICENSE) (MIT, code) and [`LICENSE-CONTENT`](https://github.com/limitlesslearning/docs/blob/main/LICENSE-CONTENT) (CC BY-SA 4.0, content). The Platform Bible TOC historically mentioned AGPL-3.0 for the broader platform; that is **not** overridden here for application code outside this docs repo until a separate decision is logged.
:::
