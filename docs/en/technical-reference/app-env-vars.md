---
title: "Environment variables"
slug: "app-env-vars"
locale: "en"
section: "technical-reference"
audience: "Developers planning future operational deployment."
tags:
  - "env vars"
  - "configuration"
  - "secrets"
status_label: "Reference configuration surface"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# Environment variables

The environment variable surface for a future Terroir application should make trust boundaries explicit instead of hiding critical secrets or role assumptions.

!!! warning "Reference configuration surface"
    This page is future-facing. The current repository uses only the website configuration that Next.js needs today.

## How to read this page

Environment variables should tell you which services the system depends on and which secrets must never reach the browser.

!!! note "Current repo reality"
    The current website repository does not include a live backend service requiring the broader environment described here.

## Reference shape

### Configuration classes

| Configuration class | Examples | Handling rule |
| --- | --- | --- |
| Public app config | Base URLs, public locale behavior, non-secret feature flags. | Safe for client exposure when truly public. |
| Restricted service config | Database URLs, signing keys, issuer credentials. | Server-only and tightly controlled. |
| Deployment metadata | Environment names, rollout markers, logging endpoints. | Visible to operators, not necessarily public. |

## Guidance for future implementation

### Design and delivery guidance

- Name secrets so their sensitivity is obvious.

- Separate client-safe and server-only configuration paths early.

- Document what happens when configuration is absent or inconsistent.

## Related Pages

- [deployment-guide](./deployment-guide.md) - Pair configuration with rollout planning.
- [app-setup](./app-setup.md) - See the broader future app boundary.
- [data-handling-and-privacy](../trust-verification/data-handling-and-privacy.md) - Compare config exposure to data exposure.

## Sources

1. **Secure Software Development Framework (SSDF) Version 1.1** (NIST, standards). [Source](https://csrc.nist.gov/publications/detail/sp/800-218/final). NIST secure software development guidance.
