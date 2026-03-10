---
title: "Public verification API"
slug: "api-verification"
locale: "en"
section: "technical-reference"
audience: "Developers building public verification experiences or downstream trust checks."
tags:
  - "api"
  - "verification"
  - "public read"
  - "qr"
status_label: "Reference public endpoint"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# Public verification API

The public verification API should expose clear, graded outcomes without requiring privileged credentials or hiding uncertainty behind a binary pass/fail.

!!! warning "Reference public endpoint"
    This page documents a future public verification interface only. There is no live `/api/verify` route in this repository.

## How to read this page

A public verification interface should be easy to consume, but it should still explain whether a record is verified, incomplete, changed later, or otherwise limited.

!!! note "Current repo reality"
    The repository ships content describing verification, not a live verification API or scanner service.

## Reference shape

### Public verification response shape

| Response element | Purpose | Trust value |
| --- | --- | --- |
| Readable summary | Lets humans understand the record quickly. | Builds trust through clarity. |
| Graded verification state | Avoids misleading binary answers. | Supports better risk decisions. |
| Attestation chain | Shows who made which claims. | Supports accountability and challenge. |
| Integrity comparison result | Explains whether the current record still matches its commitment. | Makes silent change visible. |

## Guidance for future implementation

### Design and delivery guidance

- Make the API safe for unauthenticated read access where public trust views are intended.

- Expose enough context for downstream systems to render a readable explanation.

- Treat incomplete and changed states as first-class response outcomes.

## Related Pages

- [how-verification-works](../trust-verification/how-verification-works.md) - Read the plain-language logic behind the endpoint.
- [consumer-verification-guide](../trust-verification/consumer-verification-guide.md) - See what a public-facing client should say.
- [contract-events](./contract-events.md) - Understand how downstream services may reconstruct timelines.
