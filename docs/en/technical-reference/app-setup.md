---
title: "Reference app setup"
slug: "app-setup"
locale: "en"
section: "technical-reference"
audience: "Developers looking for the boundaries of the future reference app."
tags:
  - "reference app"
  - "setup"
  - "future app"
status_label: "Reference app concept"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# Reference app setup

The future reference application should demonstrate end-to-end provenance workflows, but this repository currently contains only the public website layer.

!!! warning "Reference app concept"
    There is no standalone producer/certifier reference app in this repository today.

## How to read this page

Think of the future reference app as the operational companion to this website: where producers create records, issuers add claims, and public verification outputs are generated.

!!! note "Current repo reality"
    The current app routes cover the website, docs, marketing pages, and a demo gate only.

## Reference shape

### Future app boundary

| Future app area | Why it exists | Current repo status |
| --- | --- | --- |
| Producer workflow | Create and manage origin records. | Planned |
| Issuer workflow | Issue and manage attestations. | Planned |
| Verification output management | Package public trust views. | Planned |
| Website and docs | Explain the project and trust model. | Implemented |

## Guidance for future implementation

### Design and delivery guidance

- Keep the public website and operational application concerns separated even if they share components.

- Use the reference app to demonstrate workflow truth, not just attractive UI states.

- Preserve clear role boundaries across producer, issuer, and public surfaces.

## Related Pages

- [quickstart](./quickstart.md) - See the real website setup versus the future app note.
- [app-frontend](./app-frontend.md) - Review the frontend architecture expectations.
- [implementation-status](../start-here/implementation-status.md) - See what exists now.
