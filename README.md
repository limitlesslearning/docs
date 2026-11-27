<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/brand/lockup-horizontal-inverse.svg">
    <img src="assets/brand/lockup-horizontal-ink.svg" alt="Klados" height="64">
  </picture>
</p>

# Klados Docs

Public documentation site for **Klados** — a free-for-learners, open-source global knowledge graph with mastery-based progression and verifiable credentials linked to jobs.

- **Live site (planned):** [https://limitlesslearning.github.io/docs/](https://limitlesslearning.github.io/docs/)
- **Source of truth:** Platform Bible v1.0 (living draft)
- **Built with:** [Sveltepress](https://sveltepress.site/) `@sveltepress/vite` 1.10.x + default theme
- **Logo use:** [docs/brand/USAGE.md](./docs/brand/USAGE.md) · [Brand guide](./docs/brand/BRAND.md)

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
assets/brand/         # Branch Out mark and lockups
docs/brand/           # Brand guide, logo usage, license note
src/lib/site.ts       # Public product name (SITE_NAME)
src/routes/           # Markdown pages (home, bible, roadmap, status, decisions, brand)
static/               # Favicon, app icons, manifest, og-image
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
