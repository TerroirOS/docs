---
title: "Integration guides"
slug: "integrations"
locale: "en"
section: "workflows"
audience: "Technical partners, systems integrators, and organizations evaluating adoption."
tags:
  - "integrations"
  - "erp"
  - "customs"
  - "verification widgets"
status_label: "Reference integration patterns"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# Integration guides

Terroir is meant to fit around existing agricultural operations, not replace every system around it. This page explains the main integration patterns the future stack should support.

!!! warning "Reference integration patterns"
    This repository documents integration patterns but does not yet ship the corresponding operational APIs or widgets.

## Common integration patterns

### Integration modes

| Pattern | What it connects | Why it matters |
| --- | --- | --- |
| Operational data sync | Producer systems and future batch-management services. | Reduces duplicate entry. |
| Issuer workflow integration | Certifier or lab tools and attestation issuance flows. | Lets independent actors stay in their own systems where possible. |
| Verification embedding | Retail, export, or partner-facing interfaces and public verification views. | Moves trust evidence closer to the decision point. |
| Registry or customs handoff | Country- or sector-level systems and product passport summaries. | Supports broader interoperability without forcing a single monolith. |

## Integration principles

### Guidance for future adapters

- Keep the record portable so communities are not trapped in one vendor or deployment model.

- Separate public verification outputs from private operational credentials.

- Design for gradual adoption: a workflow should still work if only part of the chain has integrated.

- Use stable identifiers and explicit versioning when schemas evolve.

## Related Pages

- [api-authentication](../technical-reference/api-authentication.md) - Review the future API trust boundary.
- [api-verification](../technical-reference/api-verification.md) - See the public verification interface concept.
- [app-frontend](../technical-reference/app-frontend.md) - Understand how future UX surfaces could consume shared data.
