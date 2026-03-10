---
title: "Reference frontend architecture"
slug: "app-frontend"
locale: "en"
section: "technical-reference"
audience: "Frontend engineers, designers, and technical reviewers."
tags:
  - "frontend"
  - "ux"
  - "reference app"
  - "public website"
status_label: "Reference frontend design"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# Reference frontend architecture

The future operational frontend should help multiple audiences understand trust states clearly, while this repository today focuses on the public website and docs experience.

!!! warning "Reference frontend design"
    The operational frontend described here is not yet present. The implemented frontend in this repository is the public website and docs.

## How to read this page

A Terroir frontend should not merely display data. It should help each user understand what they can do, what has been verified, and what still requires attention.

!!! note "Current repo reality"
    Today the repo contains the marketing site, research pages, whitepaper, and documentation UI.

## Reference shape

### Frontend surfaces to keep separate

| Surface | Primary job | Trust concern |
| --- | --- | --- |
| Producer workspace | Create and maintain records. | Avoid accidental publication or commitment of draft data. |
| Issuer workspace | Review and issue claims. | Make issuer scope and evidence requirements obvious. |
| Public verification page | Explain trust state to non-technical readers. | Use careful language and graded statuses. |
| Documentation layer | Explain the system and its limits. | Stay aligned with actual implementation status. |

## Guidance for future implementation

### Design and delivery guidance

- Design status language first, then visual polish.

- Preserve consistent trust cues across producer, issuer, and public views.

- Use the docs site as the truth-telling layer when implementation is still catching up.

## Related Pages

- [example-product-passport](../trust-verification/example-product-passport.md) - See the intended public verification artifact.
- [consumer-verification-guide](../trust-verification/consumer-verification-guide.md) - Review public-facing copy expectations.
- [implementation-status](../start-here/implementation-status.md) - Compare current and future frontend scope.
