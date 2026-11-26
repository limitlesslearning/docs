# Limitless Learning Docs

Public documentation site for **Limitless Learning** — a free-for-learners, open-source global knowledge graph with mastery-based progression and verifiable credentials linked to jobs.

- **Live site (planned):** [https://limitlesslearning.github.io/docs/](https://limitlesslearning.github.io/docs/)
- **Source of truth:** Platform Bible v1.0 (living draft)
- **Built with:** [Sveltepress](https://sveltepress.site/) `@sveltepress/vite` 1.10.x + default theme

## Licenses

| What | License |
| --- | --- |
| Site code, config, workflows, theme customization | [MIT](./LICENSE) |
| Documentation content under `src/routes/**/*.md` | [CC BY-SA 4.0](./LICENSE-CONTENT) |

## Local development

Requirements: Node.js `>=22.17`, [pnpm](https://pnpm.io/) 10 (recommended by Sveltepress).

```bash
pnpm install
pnpm run dev
```

Open the printed local URL. For a production-like base path (GitHub Pages uses `/docs`):

```bash
BASE_PATH=/docs pnpm run dev
# or
BASE_PATH=/docs pnpm run build
```

Build output is written to `dist/`.

## Project layout

```
src/routes/           # Markdown pages (home, bible sections, roadmap, status, decisions)
vite.config.ts        # Sveltepress + default theme + static adapter
.github/workflows/    # GitHub Pages deploy
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

- Content proposals → GitHub issue template **Content proposal**
- Site bugs → GitHub issue template **Bug**

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds with `BASE_PATH=/docs` and deploys to GitHub Pages.

**Manual step:** In the GitHub repository settings, enable **Pages → Source: GitHub Actions** if it is not already enabled. Without that setting the workflow cannot publish.
