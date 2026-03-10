---
title: "Registry contract"
slug: "registry-contract"
locale: "en"
section: "technical-reference"
audience: "Developers and reviewers evaluating the future integrity layer."
tags:
  - "registry contract"
  - "integrity layer"
  - "roles"
status_label: "Reference contract design"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# Registry contract

The registry contract page documents the intended role of a minimal integrity layer that stores commitments and authorization rules without becoming the entire application.

!!! warning "Reference contract design"
    No registry contract code exists in this website repository. This page describes the intended responsibilities of that future component.

## How to read this page

If Terroir later uses an on-chain or similarly tamper-evident registry, that layer should stay narrow. Its job is to hold commitments and role rules, not to store every piece of business logic or user-facing content.

!!! note "Current repo reality"
    There is no `packages/contracts` directory or deployed contract artifact in this repository today.

## Reference shape

### Keep the registry narrow

| Responsibility | Should live in the registry | Should stay outside |
| --- | --- | --- |
| Identity of committed records | Yes | Human-readable passport views |
| Role-based write permissions | Yes | Full operational workflows and evidence handling |
| Integrity commitments | Yes | Large media files or rich document content |
| Search and reporting UX | No | Application and public website layers |

## Guidance for future implementation

### Design and delivery guidance

- Prefer minimal state that helps later verification without leaking unnecessary operational detail.

- Pair registry roles with human governance rather than treating role assignment as purely technical.

- Design for revocation, supersession, and visible dispute states.

## Related Pages

- [contract-events](./contract-events.md) - See the event surface that would sit around the registry.
- [function-reference](./function-reference.md) - Review the reference write/read responsibilities.
- [security-and-limitations](../trust-verification/security-and-limitations.md) - Understand the limits of contract-based trust.

## Sources

1. **Access Control** (OpenZeppelin Docs, documentation). [Source](https://docs.openzeppelin.com/contracts/5.x/access-control). Role-based access control reference for EVM contracts.
2. **Ethereum Attestation Service** (EAS, documentation). [Source](https://attest.org/). Official EAS overview.
