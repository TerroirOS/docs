---
title: "API authentication"
slug: "api-authentication"
locale: "en"
section: "technical-reference"
audience: "Developers and integration partners planning future service boundaries."
tags:
  - "api"
  - "authentication"
  - "roles"
  - "access control"
status_label: "Reference API boundary"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# API authentication

The future API should authenticate different actors clearly and distinguish public verification from privileged write actions.

!!! warning "Reference API boundary"
    No API routes exist in this repository today. This page documents the trust boundary a future API should preserve.

## How to read this page

The key rule is simple: public verification should stay easy to read, while actions that create or modify trust-critical records must be strongly tied to actor identity and role.

!!! note "Current repo reality"
    There is no `app/api` implementation in this repository at the moment.

## Reference shape

### Authentication boundary

| Actor type | Authentication expectation | Allowed actions |
| --- | --- | --- |
| Public verifier | No account required for reading public trust views. | Read verification results only. |
| Producer | Authenticated identity linked to organization context. | Create or manage producer-side records. |
| Certifier / issuer | Authenticated identity plus issuer authority checks. | Issue or update attestation records within scope. |
| Service or admin actor | Strongly restricted service credentials. | Background processing and governance-only actions. |

## Guidance for future implementation

### Design and delivery guidance

- Separate read-only verification from write-capable service boundaries.

- Make issuer scope visible instead of encoding it only in backend logic.

- Avoid leaking privileged credentials into client-side surfaces.

## Related Pages

- [api-batch-creation](./api-batch-creation.md) - See the producer-side write path.
- [api-attestation](./api-attestation.md) - See the issuer-side write path.
- [api-verification](./api-verification.md) - See the public read path.

## Sources

1. **Secure Software Development Framework (SSDF) Version 1.1** (NIST, standards). [Source](https://csrc.nist.gov/publications/detail/sp/800-218/final). NIST secure software development guidance.
