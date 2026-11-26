---
title: 10. User Verification & Platform Integrity
description: Security Circles, reputation ranking, immutable history, and bot/duplicate prevention.
---

:::tip[Status: Drafted]
Final Draft v1.0 — Ready for Review (from Platform Bible source).
:::

## 10.1 Security Circles (Pi-Inspired but Fully Independent)

To ensure every account represents a real human being and to prevent bots, duplicates, or sock-puppet accounts at global scale, Limitless uses a Security Circle system directly inspired by Pi Network’s proven proof-of-personhood model — but built as a lightweight, open-source, non-crypto layer that does not require any token or mining.

### How Security Circles work

- New users must be vouched for by 3–5 existing trusted users who already have a completed Security Circle.
- Each voucher must have a minimum Reviewer Rank (Section 10.2) and no recent integrity flags.
- Vouchers are visible only to moderators (anonymized for privacy).
- A user’s “Circle Strength” score (0–100) increases as more trusted members vouch for them and as they contribute positively over time.
- Optional palm-print or government-ID KYC (via future open APIs) can be added for advanced verification but is never required for core learning or credentialing.

### Enforcement rules (backend, ElysiaJS + SurrealDB)

- No actions (submitting projects, reviewing, earning coins) are allowed until the circle is complete.
- Circles are periodically re-validated: if any member is removed for fraud, the entire circle is flagged for review.

This creates a growing web of human trust that scales organically while staying resistant to large-scale bot attacks.

This mechanism directly solves the duplication and gaming risks that plague open platforms and supports the “radical equality” principle (Section 2.4.4) by focusing solely on verified human participation rather than any demographic data.

## 10.2 Reputation & Reviewer Ranking Engine

Reputation is the platform’s internal currency of trust and is earned exclusively through demonstrated knowledge and helpful behaviour — never purchased or inherited.

### Ranking levels (Bronze → Silver → Gold → Diamond)

| Rank | Requirements |
| --- | --- |
| Bronze | Minimum 50 verified contributions (reviews, help posts, accurate assessments) |
| Silver | Bronze + consistent 80%+ agreement with community consensus on reviews |
| Gold | Silver + completed at least 3 advanced levels (16+) in any domain |
| Diamond | Gold + zero integrity flags for 6+ months + community-nominated moderator status |

### Engine mechanics (`reputation_record`)

- Points awarded daily for: accurate reviews (matched to consensus), helpful forum answers, project submissions that receive high peer scores, and graph-edge improvement suggestions.
- Points deducted for: repeated mismatches with AI/human consensus, collusion patterns (Section 8.5), or reported abuse.
- Transparent audit trail: every point change is linked to a specific action and visible on the user’s profile (with privacy controls).
- Reviewers must maintain their rank to continue reviewing higher-level content.

This ranking system ensures that the people who shape content quality and assessments (Section 6 & 8) are the most competent and trusted members of the community, reinforcing the autonomous, self-improving ecosystem (Section 2.3.5).

## 10.3 Immutable History & Anti-Tampering

All learner progress, assessments, reviews, and credentials are designed to be cryptographically immutable once issued.

### Implementation

1. Every critical record (`progress_record`, `assessment_attempt`, review, credential) receives a SHA-256 hash at creation.
2. Hashes are batched and published to the blockchain snapshot layer (Polygon/Ceramic – see Section 9.1) at least once every 24 hours.
3. SurrealDB stores the full readable record for speed and search; the blockchain hash serves as the single source of truth for verification.
4. Any attempt to alter a record (even by administrators) creates a new version with an explicit “edited” flag and a link to the original hash — the original remains provably unchanged.

### Learner protection

- Learners can request a full history export with all hashes at any time.
- Third-party verifiers (employers, universities) can instantly confirm integrity by checking the blockchain hash without needing platform login.

This layer makes it literally impossible to change scores, erase history, or fake credentials — fulfilling the exact requirement stated in the original project vision.

## 10.4 Bot & Duplicate Prevention Rules

Beyond Security Circles, the platform runs multiple automated and community-driven defenses:

- **Device & Behaviour Fingerprinting:** Privacy-preserving signals (browser + Tauri client hash, typing cadence, mouse patterns) are used only for anomaly detection, never stored personally.
- **IP & Network Analysis:** Rate limiting + geographic clustering flags suspicious mass-account creation.
- **AI Bot Detection:** New accounts are given a lightweight diagnostic quiz that is difficult for current LLMs/bots to game consistently.
- **Community Reporting:** Any user can flag suspicious behaviour; flags trigger automatic circle re-validation and moderator review.
- **Zero-Tolerance Policy:** Confirmed bots or duplicates result in immediate permanent ban + public transparency post (anonymized) so the community learns the detection patterns.

These rules ensure the platform remains a community of real humans, preserving the integrity of reviews, assessments, and credentials at any scale.

## 10.5 Minute Features & Technical Safeguards

- Reputation Badge on every profile and review comment (e.g., “Reviewed by Silver-Ranked Expert – Mathematics”).
- Trust Score Tooltip on Security Circle members (visible only to moderators).
- Integrity Dashboard for moderators showing platform-wide anomaly heatmaps.
- Self-Audit Tool for learners: one-click “Verify My Entire History” that recomputes all hashes against the blockchain.
- Emergency Freeze capability (community-governed): in case of a critical vulnerability, the platform can temporarily lock new circles while fixes are deployed — never affecting existing learners’ progress.

All verification logic is open-source and auditable in the main GitHub repo (Section 13).

Together, these mechanisms create a platform where trust is earned, verifiable, and self-reinforcing — protecting the free, equitable, and high-quality learning environment described in the vision (Section 2) while eliminating the fraud and gaming problems that plague traditional and most online education systems (Section 3.1.5).
