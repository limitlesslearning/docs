# Contributing

Thank you for helping improve Klados documentation.

Participation is governed by our [Code of Conduct](./CODE_OF_CONDUCT.md). Organisation-wide practices (labels, DCO, issue lifecycle) are in the [`.github` contributing guide](https://github.com/limitlesslearning/.github/blob/main/CONTRIBUTING.md). This page covers the docs site.

## Start with a discussion

Please [open a discussion](https://github.com/limitlesslearning/docs/discussions) before opening an issue, unless you are reporting a clear bug or a maintainer has asked you to file one. Issues are for work that has already been agreed, and each one uses a template.

- **Questions** and first ideas belong in Discussions.
- **Translation offers** can start as a discussion or use the Translation offer issue form.
- **Security problems** must be reported privately — see [SECURITY.md](https://github.com/limitlesslearning/.github/blob/main/SECURITY.md). Never post them in a public issue or discussion.

## Ways to contribute

1. **Content** — Draft or improve Klados Handbook sections (especially stubs marked *Needs drafting*).
2. **Fixes** — Correct typos, broken links, formatting, or build/deploy issues.
3. **Translations** — Help make the Handbook readable in your language. Check the Malayalam (ക്ലാഡോസ്) and Devanagari (क्लाडोस) samples of the name, or offer to translate a page.
4. **Decisions** — Propose new locked decisions via a discussion, then a PR that updates the [Decision log](./src/routes/decisions/+page.md) (do not silently rewrite history).

## Local setup

```bash
pnpm install
pnpm run dev
pnpm run build   # verify before opening a PR
```

Use pnpm 10 and Node.js `>=22.17`.

## Content guidelines

- Preserve substance from source drafts; clean formatting (headings, lists, tables, callouts) without inventing facts or numbers.
- Mark notebook-discussion material clearly (e.g. `:::note[From notebook discussion]`).
- Stub pages must keep **Status: needs drafting** and label open questions as questions, not decisions.
- Keep tone neutral and community-oriented. Do not invent personal details about contributors.

## Pull requests

1. Fork (or branch) from `main`.
2. Make focused changes; update [Status](./src/routes/status/+page.md) if a section’s draft status changes.
3. Commit with **DCO sign-off** (`git commit -s`). The `-s` flag adds `Signed-off-by: Your Name <email@example.com>` and certifies you have the right to submit the work under the project licences, per the [Developer Certificate of Origin](https://developercertificate.org/).
4. Ensure `pnpm run build` succeeds.
5. Open a PR with a clear summary of what changed and why.

## Licensing

By contributing, you agree that your contribution is licensed as follows:

| What | Licence |
| --- | --- |
| Documentation content (Markdown and other educational text) | [CC BY-SA 4.0](./LICENSE-CONTENT) |
| Documentation site code and configuration | [MIT](./LICENSE) |
| Platform server (in `limitlesslearning/platform`, when it lands) | AGPL-3.0 |
| SDKs | MIT |

The split is locked as decision 7 (Q9) in the [Decision log](https://limitlesslearning.github.io/docs/decisions/). Nobody from Klados will ask for your passwords, keys, or tokens, in an issue or anywhere else.
