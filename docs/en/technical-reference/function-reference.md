---
title: "Function reference"
slug: "function-reference"
locale: "en"
section: "technical-reference"
audience: "Developers evaluating contract or service interfaces."
tags:
  - "functions"
  - "write operations"
  - "read operations"
status_label: "Reference interface"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# Function reference

This page describes the kinds of read and write operations a future integrity layer would need to expose in order to support provenance commitments and verification.

!!! warning "Reference interface"
    The interface below is descriptive guidance only. It is not backed by code in this repository.

## How to read this page

A good trust interface exposes only a few critical operations: commit a record, read the last commitment, check authority, and surface supersession or dispute states.

!!! note "Current repo reality"
    There is no contract ABI or service interface implementation in the current repository.

## Reference shape

### Core interface responsibilities

| Operation | Purpose | Notes |
| --- | --- | --- |
| Commit record | Store the integrity commitment for a batch or attestation. | Should be role-restricted. |
| Read commitment | Return the current commitment for verification. | Must be public and stable. |
| Check issuer authority | Confirm whether an actor can issue a given class of statement. | Needs revocation handling. |
| Mark superseded or disputed | Keep trust history readable over time. | Should not rely on silent overwrites. |

## Guidance for future implementation

### Design and delivery guidance

- Optimize for clarity and auditability rather than feature count.

- Keep read paths easy for public verifiers and downstream services to consume.

- Model change history explicitly so later readers can see why trust status shifted.

## Related Pages

- [registry-contract](./registry-contract.md) - Review the system role of these functions.
- [verification-logic](../trust-verification/verification-logic.md) - See how the read functions would be used.
- [deployment-guide](./deployment-guide.md) - Review the operational concerns around rollout.
