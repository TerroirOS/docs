---
title: "Implementation status"
slug: "implementation-status"
locale: "en"
section: "start-here"
audience: "Technical reviewers, partners, and anyone assessing project maturity."
tags:
  - "status"
  - "roadmap"
  - "repo reality"
  - "implementation"
status_label: "Current repo status"
status_tone: "implemented"
last_reviewed: "March 8, 2026"
---

# Implementation status

This page is the honesty layer for the docs: it shows which capabilities exist in this repository today, which are represented only by content or design language, and which remain future work.

!!! tip "Current repo status"
    This page is grounded in the contents of the repository as inspected on March 8, 2026.

## What is present now

### Reality check

| Capability | Status | What is actually in the repo |
| --- | --- | --- |
| Bilingual docs and marketing site | Implemented | Next.js pages, locale middleware, navigation, whitepaper, research, blog, and documentation routes. |
| Expanded documentation system | Implemented in this pass | Typed content registry, rich doc blocks, navigation metadata, and English-first fallback behavior. |
| Interactive product demo | Partial / placeholder | An email gate exists, but the redirect target `/portal/producer` is not implemented in this repository. |
| Producer/certifier application | Planned | Described in docs and marketing copy, not present as working routes or services. |
| API layer, smart contracts, database schema | Planned | Referenced in docs as future interfaces or reference architecture, not present as code in this repository. |

## How to interpret the roadmap

### Implementation timeline
The website and documentation foundation exist now; workflow, data, and integrity layers remain roadmap work.
*Alt text: A vertical timeline showing website foundation completed, documentation system completed, workflow application planned, data and verification services planned, and integrity anchoring planned.*
*Layout: timeline*
- **Website foundation:** Implemented: public site, docs shell, research and whitepaper pages.
- **Structured documentation system:** Implemented in this docs expansion.
- **Workflow application:** Planned: producer, certifier, buyer, and verification interfaces.
- **Operational services:** Planned: storage, APIs, and evidence handling.
- **Integrity anchoring:** Planned: contracts, attestation commitments, and public verification guarantees.

!!! info "How to read planned pages"
    Pages in the technical reference section remain useful even before implementation. They now read as design references and trust constraints rather than claims about already-shipped interfaces.

## Related Pages

- [architecture](./architecture.md) - Use this page together with the architecture overview.
- [quickstart](../technical-reference/quickstart.md) - See the documentation-site quickstart and the future full-stack note.
- [governance-roadmap](../project-governance/governance-roadmap.md) - Compare the current repo with the larger product roadmap narrative.
