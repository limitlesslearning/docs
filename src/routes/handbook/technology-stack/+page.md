---
title: 12. Technology Stack & System Architecture
description: Klados Handbook Section 12 — intended scope and open questions.
---

:::warning[Status: needs drafting]
This section is listed in the Klados Handbook table of contents (the source document was titled Platform Bible) but was not present in the source notebook transcription. Scope and open questions below are inferred from the TOC only.
:::

## Intended scope

From the Platform Bible v1.0 table of contents:

- 12.1 High-Level Architecture Diagram (text + future Mermaid)
- 12.2 Chosen Stack (why each tool)
- 12.2.1 Frontend – SvelteKit
- 12.2.2 Backend – ElysiaJS + Bun
- 12.2.3 Database – SurrealDB (full schema)
- 12.2.4 AI Layer – Ollama / OpenRouter
- 12.2.5 Auth & Verification
- 12.2.6 Blockchain Snapshots (Polygon / Ceramic)
- 12.2.7 Offline Client – Tauri
- 12.2.8 Monitoring & Logging
- 12.3 Free & Open-Source Services We Use
- 12.4 Security, Privacy & Compliance (GDPR, DPDP, future KYC)

## Open questions

:::caution[Open questions — not settled decisions]
These are questions to resolve while drafting, not answers:

1. Is the stack listed in the TOC still canonical for MVP, or are any tools under reconsideration?
2. Where should the full SurrealDB schema live before Appendix 20.1 is drafted?
3. What is the minimum monitoring/logging set for Phase 1?
4. Which compliance obligations apply at MVP (before KYC)?
:::

## Related

- [Status dashboard](/status/)
- [Decision log](/decisions/)
