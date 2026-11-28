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
| 7 | 2026-11-28 | Licences for the project are: platform server [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.html), SDKs [MIT](https://opensource.org/licenses/MIT), documentation content [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), documentation site code [MIT](https://opensource.org/licenses/MIT). | Locked as Q9 by Renoy on 28 Nov 2026. Rows 3 and 4 already recorded the docs-content and docs-site licences; this entry records the platform server and SDK licences and confirms the existing docs split. |

:::note[License split]
See [`LICENSE`](https://github.com/limitlesslearning/docs/blob/main/LICENSE) (MIT, documentation site code) and [`LICENSE-CONTENT`](https://github.com/limitlesslearning/docs/blob/main/LICENSE-CONTENT) (CC BY-SA 4.0, content). The project-wide licence split — platform server AGPL-3.0, SDKs MIT, content CC BY-SA 4.0, documentation site code MIT — is recorded as decision 7 (Q9) above. Rows 3 and 4, which already recorded the two docs-repo licences, are unchanged.
:::


