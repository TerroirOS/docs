---
title: "Architecture overview"
slug: "architecture"
locale: "en"
section: "start-here"
audience: "Developers, partners, and evaluators who need a truthful system map."
tags:
  - "architecture"
  - "website"
  - "reference architecture"
  - "implementation status"
status_label: "Implemented website + reference architecture"
status_tone: "reference"
last_reviewed: "March 8, 2026"
---

# Architecture overview

The current repository ships the documentation and marketing layer, while the docs also describe a broader reference architecture for future provenance workflows, data storage, attestations, and verification.

!!! info "Implemented website + reference architecture"
    This page deliberately separates what the website already implements from the broader system Terroir intends to support later.

## Current site versus future system

### The most important distinction to keep in mind

| Layer | Present in this repository today | Described as planned/reference |
| --- | --- | --- |
| Website | Marketing pages, whitepaper, research library, docs navigation, and docs content. | A richer documentation index and future trust-facing onboarding surfaces. |
| Demo | A demo gate page that stores an email locally before redirecting. | A real producer/certifier workflow, verification surfaces, and working portal routes. |
| Application services | Not present. | Batch management, attestations, public verification endpoints, and role-aware workflows. |
| Data/storage | Not present. | Structured provenance records and evidence storage. |
| Integrity layer | Not present. | Selective anchoring and role-controlled attestation commitments. |

!!! info "Why this distinction matters"
    The earlier docs blurred the line between public concept and shipped code. This rewrite keeps the vision intact while making the current repository boundary explicit.

## Reference architecture

### On-chain/off-chain split in the reference model
The planned system keeps human-readable evidence off-chain while using a narrower integrity layer for critical commitments. [^easHome] [^openzeppelinAccess]
*Alt text: A split diagram with an application side containing docs, evidence, workflows, and verification views, and an integrity side containing hashes, roles, and tamper-evident commitments.*
*Layout: split*
- **Application and evidence layer**
  - **Product passport data:** Human-readable records for producers, batches, and supporting evidence.
  - **Verification pages:** Readable pages, export views, and QR-linked experiences for non-technical users.
  - **Workflow logic:** Authorization, review states, and submission rules.
- **Integrity and authorization layer**
  - **Content commitments:** Hashes or attestations that make later tampering visible.
  - **Role control:** Rules about who can write which commitments.
  - **Public audit trail:** Independent checks without exposing all underlying private data.

That split is deliberately conservative. It follows a pattern seen in modern attestation systems: keep the human workflow understandable and flexible, and reserve the integrity layer for the part that benefits from stronger independent verification.[1][2]

## Related Pages

- [implementation-status](./implementation-status.md) - See the repo-by-repo reality check behind this architecture diagram.
- [how-verification-works](../trust-verification/how-verification-works.md) - Follow the verification path from human-readable record to integrity check.
- [quickstart](../technical-reference/quickstart.md) - Continue into the future-facing technical reference layer.

## Sources

1. **Ethereum Attestation Service** (EAS, documentation). [Source](https://attest.org/). Official EAS overview.
2. **Access Control** (OpenZeppelin Docs, documentation). [Source](https://docs.openzeppelin.com/contracts/5.x/access-control). Role-based access control reference for EVM contracts.
3. **Digital Public Goods Standard** (Digital Public Goods Alliance, standards). [Source](https://www.digitalpublicgoods.net/standard). DPG requirements and indicators.

## Footnotes

[^easHome]: **Ethereum Attestation Service** (EAS). [https://attest.org/](https://attest.org/)
[^openzeppelinAccess]: **Access Control** (OpenZeppelin Docs). [https://docs.openzeppelin.com/contracts/5.x/access-control](https://docs.openzeppelin.com/contracts/5.x/access-control)
