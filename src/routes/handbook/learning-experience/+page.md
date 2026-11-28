---
title: 7. Learning Experience & User Flows
description: Learner journey, dashboard and graph UI, learning modes, personalization, offline/desktop, and community features.
---

:::tip[Status: Drafted]
Final Draft v1.0 — Ready for Review (from the Klados Handbook source, originally titled Platform Bible).
:::

## 7.1 Learner Journey (Onboarding → Mastery → Job)

The entire user experience is built around one continuous, frictionless journey that replaces the fragmented “enroll → attend → graduate → job hunt” model of traditional education.

### Phase A – Onboarding (first 5 minutes)

- New user creates account via Security Circles (Section 10) or email + optional Pi-inspired palm verification.
- Quick diagnostic assessment (AI-generated, 10–15 adaptive questions) maps the learner’s current mastery level across all domains without requiring any prior profile.
- Personalized “Starting Graph” is displayed — a zoomed-in view of the knowledge graph showing only reachable nodes based on the diagnostic.
- No age, gender, or background questions are asked (Section 2.4.4). The system only cares about demonstrated knowledge.

### Phase B – Daily Learning Loop (core experience)

- Learner opens the interactive graph or AI-recommended path.
- Chooses a concept → sees linked content (YouTube embeds + alternatives from Section 6).
- Completes lessons → practice → project → assessment (all tracked in real time).
- 90% mastery threshold unlocks the next layer of nodes.
- Progress is saved instantly in SurrealDB; real-time updates appear on the dashboard.

### Phase C – Mastery & Credentialing

- Upon level completion, the learner receives an immediate verifiable credential (JSON-LD + blockchain snapshot).
- Public profile updates automatically (Section 9).
- AI suggests next interdisciplinary steps (e.g., “You just finished Math Level 12 — Physics Level 8 and Programming Level 10 are now unlocked and recommended”).

### Phase D – Job & Opportunity Linkage

- Learner browses or is matched to live Job Profiles (Section 9.4).
- One-click “Match My Levels” button generates a shareable capability report for employers.
- Future partnered labs (Section 2.4.5) appear as optional “Hands-On Quest” nodes that can be claimed at no cost to the learner.

The entire journey is self-paced, lifelong, and never resets. A learner can pause for years and return to the exact same graph position.

:::note[From notebook discussion — diagnostic to employment]
Onboarding is intentionally non-demographic: adaptive diagnostics estimate mastery (including IRT-style approaches discussed in research notes), then interests/goals and live Job Profiles feed the AI Path Optimizer. The plan is continuous, not a static syllabus — modality and cognitive-load signals reshape *how* content is served as the learner progresses, while “Match My Levels” keeps the path anchored to hiring requirements.
:::

## 7.2 Dashboard & Graph Visualization (UI Specifications)

Frontend: Built in SvelteKit with Cytoscape.js (or D3.js fallback) for the interactive knowledge graph.

### Main dashboard layout (responsive, mobile-first, dark/light mode)

- **Left sidebar:** Domain list + quick-search bar (vector-powered semantic search).
- **Center:** Interactive graph canvas
  - Nodes: Color-coded by domain, sized by difficulty, filled % by learner progress.
  - Edges: Thickness represents strength; hover shows reason and required level.
  - Zoom/pan with smooth physics; “Focus Mode” collapses unrelated branches.
  - Click node → right panel opens full learning view.
- **Top bar:** Streak counter, daily AI recommendation pill, notification bell (review requests, graph updates).
- **Bottom bar (mobile):** Progress heatmap calendar + “What’s Next” button.

### Accessibility & performance specs

- Full keyboard navigation and screen-reader support (ARIA labels on every node/edge).
- Graph rendering capped at 500 visible nodes initially; lazy loading for larger views.
- SvelteKit SSR for instant first paint; real-time updates via SurrealDB live queries + WebSockets.

## 7.3 Learning Modes

Three interchangeable modes let learners choose their style while the backend enforces the same competency rules.

### 7.3.1 Linear Mode

Step-by-step guided path (default for beginners). AI presents content → practice → project → assessment in strict sequence.

### 7.3.2 Exploratory Mode

Free graph browsing. Learner can jump to any unlocked node. System shows warning + prerequisite list if they attempt an advanced concept too early, but never blocks curiosity.

### 7.3.3 Project-Driven Mode

Reverse learning: Start with a real-world project template (e.g., “Build a simple neural net”). System auto-generates the exact prerequisite subgraph needed and guides the learner through it. Ideal for advanced or vocational learners (directly addressing 3.1.8).

All modes feed the same mastery data into the graph.

## 7.4 Personalization Engine (AI Path Optimizer)

Powered by SurrealDB vector search + Ollama (or free-tier model):

- **Daily Recommendation:** “Based on your Math Level 12 and interest in AI, here is the optimal 7-day path to Machine Learning Level 1.”
- **Learning-Style Adaptation:** Uses tags from content items (Section 6.7) and past engagement data to prefer video, text, or interactive formats.
- **Pacing Engine:** Spaced-repetition scheduling for practice exercises; adaptive difficulty for AI exams.
- **Motivation Layer:** Gentle nudges (“You’re 3 concepts away from unlocking Robotics Engineer job profile”), streak preservation, and optional community challenges.
- **Guardrails:** Never suggests paths that violate ideology/neutrality rules or prerequisite integrity.

All recommendations are explainable — learner can click “Why this path?” to see the graph edges and AI reasoning.

## 7.5 Offline & Desktop Experience (Tauri Spec)

Phase 2 feature (desktop client using Tauri + SvelteKit):

- Full offline cache of enrolled concepts (videos download as progressive web app bundles + transcripts + diagrams).
- Local assessment engine runs a subset of AI-generated questions (pre-cached).
- Progress syncs automatically when back online (conflict-free via SurrealDB timestamps).
- System tray notifications for review requests or graph updates.
- Native integrations: drag-and-drop project submission from local filesystem, GitHub Copilot-style local code sandbox for programming concepts.

This ensures learners in low-bandwidth or remote areas (Section 3.1.4) never lose momentum.

## 7.6 Community & Collaboration Features

- **Real-time Discussion:** WebSocket-powered threaded forums attached to every concept node. Verified learners only (Security Circles).
- **Collaborative Projects:** Multi-user project rooms where learners can co-edit code, documents, or simulations in real time (Tauri + Yjs CRDT for offline sync).
- **Peer Help System:** “Request Review” or “Ask for Explanation” buttons — matched to reviewers who have already mastered the concept.
- **Study Groups:** AI-suggested or manual groups based on current levels and time zones.
- **Mentorship Matching:** Advanced learners (Reviewer Rank Silver+) can offer 1:1 guidance sessions (optional future coin reward).

All community actions earn platform coins (Section 11) and contribute to reputation — reinforcing the autonomous ecosystem (Section 2.3.5).

### Minute experience details

- “Mastery Celebration” confetti + shareable certificate animation on level completion.
- Hover tooltips on graph edges showing real learner success rate (“87% of users who finished this prerequisite succeeded in the next concept”).
- One-tap “Save for Later” across any content item.
- Voice-command support for navigation (future Web Speech API).
- Progress export as beautiful PDF or JSON-LD at any time.
- Dark-mode default with Kerala-inspired color accents for cultural warmth.

The entire learning experience is intentionally joyful, respectful, and empowering — treating every user as a capable human (Section 2.4.4) while never hiding the rigorous competency standards that make credentials meaningful.
