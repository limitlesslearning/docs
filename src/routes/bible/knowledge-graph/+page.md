---
title: 5. Core Architecture – The Global Knowledge Graph
description: Graph design philosophy, node schema, edges, levels, cross-disciplinary mapping, and versioning.
---

:::tip[Status: Drafted]
Final Draft v1.0 — Ready for Review (from Platform Bible source).
:::

## 5.1 Graph Design Philosophy

The entire Limitless platform is built around one central data structure: a single, living, global knowledge graph.

This is not a collection of separate courses or playlists. It is the digital representation of all human knowledge as a network of interconnected concepts. Every node is a precise unit of mastery; every edge is an explicit prerequisite relationship.

This architecture directly solves the eight structural failures in Section 3:

- No more silos or fixed curricula (3.1.2) — everything is explicitly linked.
- No more knowledge gaps (3.1.3) — the graph enforces prerequisites automatically.
- No more age or background barriers (3.1.1) — any learner can enter at any node they have mastered.
- Practical and niche skills become discoverable and mappable (3.1.8) — even if content is initially theoretical, the graph shows exactly where future lab partnerships fit.

The graph is native to SurrealDB (chosen for its built-in graph, vector, and real-time capabilities) so queries such as “show me the shortest mastery path from Algebra Level 1 to Machine Learning Level 3” are single-line operations. It is designed to scale to millions of nodes while remaining fast and auditable.

## 5.2 Node Types & Attributes (Detailed Schema)

Every piece of knowledge is stored as a concept node. There are no separate tables for “subjects” or “courses” — everything is a concept at a specific mastery level.

### Core Node Table (`concept`) — SCHEMAFULL

| Field | Type | Notes |
| --- | --- | --- |
| `id` | record ID | Auto-generated, e.g. `concept:math_calc_1` |
| `name` | string | e.g. “Calculus Fundamentals” |
| `domain` | string | e.g. “Mathematics”, “Physics”, “Programming” |
| `level` | number | Absolute mastery level 1–25+ (see 5.4) |
| `description` | string | Short, human-readable explanation |
| `difficulty_score` | float | 0.0–1.0, auto-calculated by AI + reviewer consensus |
| `last_updated` | datetime | Freshness tracking |
| `status` | string | `draft` \| `reviewed` \| `published` \| `deprecated` |
| `tags` | array\<string\> | Search/filtering, e.g. `["vector", "machine-learning"]` |

### Additional related / embedded metadata

- `learning_materials`: array of objects → `{type: "youtube", video_id, title, duration, transcript_summary, license}`
- `practice_exercises`: array of AI-generated templates (JSON with seed parameters)
- `assessments`: reference to assessment templates (generated on-demand)
- `projects`: array of project templates with submission guidelines
- `references`: array of external links or related concepts

All content starts as YouTube/open-web metadata only (Section 6). Internal uploads are enabled only after Phase 3.

### Sample SurrealQL

```surrealql
DEFINE TABLE concept SCHEMAFULL PERMISSIONS FULL;

DEFINE FIELD name ON concept TYPE string ASSERT $value != '';
DEFINE FIELD domain ON concept TYPE string;
DEFINE FIELD level ON concept TYPE number ASSERT $value >= 1 AND $value <= 30;
DEFINE FIELD difficulty_score ON concept TYPE float DEFAULT 0.5;
DEFINE FIELD last_updated ON concept TYPE datetime DEFAULT time::now();
```

## 5.3 Edge Types & Dependency Rules

Relationships are first-class citizens and stored as relation tables.

### Main edge types

| Edge | Purpose | Fields |
| --- | --- | --- |
| `requires` | Core dependency | `strength` (float 0.0–1.0), `reason` (text), `updated_at` |
| `part_of` | Hierarchical grouping | e.g. “Integration by Parts” is part of “Calculus Level 10” |
| `extends` | Optional advanced relationship | Future topics |
| `alternative_to` | Multiple paths to the same competency | — |

### Enforcement rules

- A learner cannot unlock a concept until all required prerequisite concepts are completed at the required mastery threshold (default 90%).
- Strength-weighted paths allow the AI personalization engine to suggest optimal routes.
- Edges are versioned and can be deprecated (old edges remain for historical learner paths).

### Example edge

```surrealql
RELATE concept:math_linear_algebra_7 -> requires -> concept:math_calculus_10
    CONTENT {
        strength: 0.95,
        reason: "Calculus requires strong linear algebra foundations for vector spaces and matrices",
        updated_at: time::now()
    };
```

## 5.4 Level System

Each domain (Mathematics, Physics, Programming, etc.) uses absolute, non-overlapping mastery levels from 1 to 25+.

| Levels | Band |
| --- | --- |
| 1–5 | Foundational / basic literacy |
| 6–10 | Intermediate / functional application |
| 11–15 | Advanced / professional competency |
| 16–20 | Expert / research or specialized application |
| 21–25+ | Cutting-edge / innovation and modeling |

Levels are domain-specific but cross-linked via edges. A learner’s profile can simultaneously show, for example:

- Mathematics Level 14
- Physics Level 9
- Programming Level 12
- Biology Level 4

### Progression logic

- Mastery = 90%+ on AI exam + project review + (for advanced levels) interview/defense.
- No time limits. No age gates.
- Levels are immutable once published (new versions create new nodes with deprecation links).

## 5.5 Cross-Disciplinary Mapping Rules

Any concept can have outgoing `requires` edges to any other domain.

Examples:

- Physics Level 8 requires Mathematics Level 12 + Statistics Level 6
- Machine Learning Level 3 requires Mathematics Level 15 + Programming Level 10 + Statistics Level 8

The AI Content Mapper (Section 6) automatically proposes these edges when ingesting new YouTube content. Community reviewers can strengthen, weaken, or add edges with transparent voting history.

This creates true interdisciplinary navigation — the graph visually shows “what you need next” regardless of traditional subject boundaries.

## 5.6 Versioning & Evolution of the Graph

The graph is living, not static.

- Every node and edge has a full history (SurrealDB’s built-in change tracking + manual snapshots).
- When knowledge evolves (new research, better explanations, deprecated methods), a new node/edge is created and the old one is marked deprecated with a migration path.
- Nightly AI agent scans for fresher YouTube content and proposes updates.
- Community governance (Section 15) votes on major structural changes.

This built-in evolution mechanism ensures the platform never becomes outdated — directly countering the stagnation problem in Section 3.

:::important[Technical implementation note]
All graph operations are exposed via ElysiaJS endpoints with full audit logging. Vector embeddings (via SurrealDB vector search) enable semantic search and AI path recommendations on top of the explicit graph.
:::

:::note[From notebook discussion — node metadata & AI hooks]
Beyond the schema above, notebook discussion emphasized additional node affordances for a multimodal, personalized graph:

1. **Core metadata & taxonomy** — node ID/domain, difficulty + cognitive-load estimates, tags/keywords, freshness/`last_updated`.
2. **Practical application** — project templates & rubrics; interactive simulations/sandboxes (PhET, GeoGebra, Wasm code sandboxes).
3. **AI & personalization hooks** — learning-style/modality tags (visual/auditory/textual/interactive); alternative content carousels (2–3 styles for the same concept); AI transcript summaries & bullet points; spaced-repetition practice sets as seeded JSON templates.
4. **Community hooks** — community notes under content links; peer help / mentorship routing (“Request Review”); collaborative project rooms.
5. **Credentialing & analytics** — historical success rates per resource; explicit mastery thresholds; fields for blockchain/VC hashes on completion.

These items align with Sections 6–9 and should stay synchronized as those sections evolve.
:::
