---
title: "Attestation endpoints"
slug: "api-attestation"
locale: "en"
section: "technical-reference"
audience: "Developers, certifiers, and product teams planning issuer tooling."
tags:
  - "api"
  - "attestation"
  - "issuer workflow"
status_label: "Reference issuer endpoint"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# Attestation endpoints

Future attestation endpoints should help issuers create accountable, role-scoped claims without turning the API into an unreviewable free-form note system.

!!! warning "Reference issuer endpoint"
    This page documents a future interface shape only. There is no live attestation API in the current repository.

## How to read this page

Attestation endpoints should help the right issuers make the right kinds of claims, in a shape that later verification can still explain clearly.

!!! note "Current repo reality"
    No attestation service implementation is present in this repository.

## Reference shape

### Attestation endpoint expectations

| Concern | Expected behavior | Why it matters |
| --- | --- | --- |
| Issuer scope | Check whether the actor can issue the requested claim type. | Authority matters as much as authentication. |
| Structured payloads | Use claim-type-aware fields instead of arbitrary notes. | Readable verification depends on consistent shapes. |
| Evidence references | Link supporting material to the claim. | Claims without evidence are hard to trust or challenge. |
| Status history | Allow superseded or challenged states instead of destructive edits. | Trust requires visible history. |

## Guidance for future implementation

### Design and delivery guidance

- Keep claim classes explicit and documented.

- Preserve issuer identity and scope in the response model.

- Favor append-and-supersede patterns over hard overwrite for trust-critical changes.

## Related Pages

- [attestation-schema](../trust-verification/attestation-schema.md) - Review the reference attestation shape.
- [trust-model](../trust-verification/trust-model.md) - Review authority boundaries.
- [certifier-onboarding](../workflows/certifier-onboarding.md) - See how issuers enter the system operationally.
