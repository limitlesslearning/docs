---
title: 13. Project Structure & Development Standards
description: Platform Bible Section 13 — intended scope and open questions.
---

:::warning[Status: needs drafting]
This section is listed in the Platform Bible table of contents but was not present in the source notebook transcription. Scope and open questions below are inferred from the TOC only.
:::

## Intended scope

From the Platform Bible v1.0 table of contents:

- 13.1 GitHub Repository Layout (exact folder structure)
- 13.2 Coding Conventions & Lint Rules
- 13.3 Branching Strategy & CI/CD Pipeline
- 13.4 Documentation Standards (this bible + inline comments)
- 13.5 Testing Strategy (unit, integration, graph integrity)

## Open questions

:::caution[Open questions — not settled decisions]
These are questions to resolve while drafting, not answers:

1. What is the monorepo vs multi-repo layout for app, graph, and docs?
2. Which lint/format tools are mandatory at PR time?
3. What branching model (trunk-based, GitFlow, or other) applies before Phase 1 code?
4. How are graph-integrity tests defined (broken edges, orphan nodes, level conflicts)?
:::

## Related

- [Status dashboard](/status/)
- [Decision log](/decisions/)
