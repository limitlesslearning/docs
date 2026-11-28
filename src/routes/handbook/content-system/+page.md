---
title: 6. Content System (Phase 1: External Only)
description: Discovery pipeline, YouTube strategy, AI quality gate, human review, freshness, multilingual access, and minute features.
---

:::tip[Status: Drafted]
Final Draft v1.0 — Ready for Review (from the Klados Handbook source, originally titled Platform Bible).
:::

## 6.1 Content Discovery & Ingestion Pipeline

The content system is deliberately external-first in Phase 1. We do not create or host original video/audio/text from scratch. Instead, we intelligently discover, ingest, and map the best existing free, high-quality resources already available on the open internet (primarily YouTube, public MOOCs, arXiv, GitHub repos with tutorials, and open-licensed PDFs).

This approach solves two problems simultaneously:

1. Instant depth across thousands of subjects without years of content creation (addressing 3.1.8).
2. Keeps the platform 100% free and scalable while the knowledge graph (Section 5) grows.

### Pipeline flow (automated + human oversight)

1. Nightly AI Content Discovery Agent (Bun cron job) queries YouTube Data API v3, public APIs, and semantic search.
2. Results are filtered by relevance to existing graph nodes (using vector embeddings in SurrealDB).
3. **Metadata only** is stored — never the full video file (to respect copyrights and storage costs).
4. AI review gate (see 6.3) runs automatically.
5. Flagged items go to ranked human reviewers.
6. Approved content is linked to the appropriate concept node(s) via SurrealDB relations.

## 6.2 YouTube & Open-Source Content Strategy

### Primary sources (priority order)

1. **YouTube** (90%+ of initial content) — channels such as 3Blue1Brown, MIT OCW, freeCodeCamp, Numberphile, Veritasium, Indian JEE/NEET educators, European university lectures, etc.
2. **Public MOOC platforms** (Coursera audit videos, edX, Khan Academy where embeddable).
3. **Open-licensed repositories** (GitHub READMEs with code walkthroughs, arXiv explainers, Creative Commons PDFs).

Regional creators are explicitly prioritized to reduce cultural/linguistic bias (Section 2.4.2).

### Storage rule

Only metadata is saved in SurrealDB:

```surrealql
DEFINE TABLE content_link SCHEMAFULL;
DEFINE FIELD concept ON content_link TYPE record(concept);
DEFINE FIELD type ON content_link TYPE string; // "youtube", "pdf", "github"
DEFINE FIELD external_id ON content_link TYPE string; // video_id or URL
DEFINE FIELD title ON content_link TYPE string;
DEFINE FIELD transcript_summary ON content_link TYPE string;
DEFINE FIELD duration ON content_link TYPE number;
DEFINE FIELD license ON content_link TYPE string;
DEFINE FIELD ai_score ON content_link TYPE float;
```

Full videos remain on their original platforms (YouTube embeds are used for playback). This respects fair-use/educational guidelines and avoids legal risk.

Internal content uploading (by verified creators) is disabled until Phase 3, when the creator compensation flywheel is live.

## 6.3 AI-First Review & Quality Gate

Every discovered piece of content must pass an AI-first gate before any human sees it. This ensures scale and consistency.

### AI review process (Ollama local or free-tier OpenRouter)

1. Accuracy & completeness scoring (0–1.0) against the target concept node.
2. Ideology & bias check against the Evidence-First Standard (Section 2.4.2).
3. Clarity, pacing, and learning-style coverage.
4. Prerequisite alignment suggestion (auto-proposes `requires` edges).
5. Freshness & duplication check.

- If AI score ≥ 0.85 → auto-link to graph (with low-confidence flag for later review).
- If AI score < 0.85 or bias flag → routed to human reviewers.

Full AI Prompt Library is stored in Appendix 20.2 (version-controlled). Example core prompt snippet:

> “You are a neutral, evidence-based educator. Score the following video for accuracy, clarity, and ideological neutrality on the topic ‘[concept name] Level [X]’. Flag any unsubstantiated claims, cultural bias, or outdated information. Suggest exact prerequisite mappings to other concepts.”

## 6.4 Human Reviewer Pipeline & Ranking System

Human oversight is mandatory for final quality and trust.

### Reviewer eligibility (enforced in backend)

- Must have completed the relevant domain at least 3 levels above the content being reviewed.
- Must hold “Reviewer Rank” ≥ Bronze (earned through past accurate reviews + security-circle trust).
- Reviewers themselves are periodically re-reviewed by higher-ranked peers and AI.

### Review workflow

1. Minimum 3 independent reviewers per content item (5+ for advanced levels).
2. Each reviewer scores accuracy, clarity, ideology, and suggests edge improvements.
3. Consensus threshold = 80% agreement.
4. Disagreements escalate to subject moderators (Section 15).
5. Approved content is published; rejected content is archived with reason (transparent for community learning).

### Reviewer ranking engine

- Points earned for accurate reviews that match final community consensus.
- Deductions for repeated mismatches or bias flags.
- Visible on profile (Section 9) — gamifies quality without monetary pressure in Phase 1.

## 6.5 Content Update & Freshness Engine

The graph is living (Section 5.6).

1. Nightly agent re-scans top YouTube channels and semantic keywords for each published concept.
2. New/better videos trigger an AI comparison against existing linked content.
3. If superior (higher AI score + reviewer approval), the old link is marked “deprecated” and the new one is added with a migration note for learners.
4. Learners see “Updated …” badges and can switch to newer material instantly.

This ensures the platform never suffers from the “slow adaptation” problem (Section 3.1.6).

## 6.6 Multilingual & Accessibility Layer

- Auto-detection of video language via YouTube API.
- Priority tagging for non-English creators (Hindi, Tamil, Spanish, Arabic, etc.).
- Future integration (Phase 2+) with open-source dubbing/subtitling models (e.g., Coqui TTS or Whisper-based).
- Accessibility metadata: closed captions, high-contrast diagrams, screen-reader-friendly descriptions, and alternative text for every linked resource.
- Learner preference stored in profile (auto-suggests dubbed or subtitled versions).

## 6.7 Minute Features (Complete List)

These are the small but powerful details that make the learner experience delightful and effective:

- Auto-generated transcript summaries + key-concept bullet points (AI-extracted and editable by reviewers).
- Alternative content carousel — shows 2–3 different styles (visual animation vs. lecture vs. code-along) for the same concept.
- Embedded interactive simulations — where possible, link to free tools (GeoGebra, Desmos, PhET, Python sandboxes via WebAssembly).
- Spaced-repetition practice sets auto-generated from video timestamps.
- Learning-style tags (visual/auditory/kinesthetic) on every content item so the AI path optimizer can personalize.
- Progress bar per content item showing “% of learners who mastered this after watching”.
- Community notes — any verified learner can add public, moderated clarifications directly under a video link.
- Downloadable offline bundle (for Tauri desktop later) — metadata + transcript + key diagrams cached locally.
- Version history viewer — learner can see exactly which content was used when they completed a level.

All features are designed to be lightweight, embed-first, and 100% free for learners while feeding directly into the knowledge graph and assessment system.
