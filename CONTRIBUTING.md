# Contributing

Thank you for helping improve Limitless Learning documentation.

## Code of conduct

Participation is governed by our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Ways to contribute

1. **Content** — Draft or improve Platform Bible sections (especially stubs marked *Needs drafting*).
2. **Fixes** — Correct typos, broken links, formatting, or build/deploy issues.
3. **Decisions** — Propose new locked decisions via a PR that updates the [Decision log](./src/routes/decisions/+page.md) (do not silently rewrite history).

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
3. Ensure `pnpm run build` succeeds.
4. Open a PR with a clear summary of what changed and why.

## Licensing

By contributing, you agree that:

- Code and configuration contributions are licensed under the [MIT License](./LICENSE).
- Documentation content contributions are licensed under [CC BY-SA 4.0](./LICENSE-CONTENT).
