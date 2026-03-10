---
title: "Contract events"
slug: "contract-events"
locale: "en"
section: "technical-reference"
audience: "Developers planning indexing or verification services."
tags:
  - "events"
  - "indexing"
  - "audit trail"
status_label: "Reference event surface"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# Contract events

Contract events should make integrity changes auditable and indexable without forcing every downstream tool to poll raw contract state.

!!! warning "Reference event surface"
    This page describes event patterns for a future contract or integrity layer. No event-producing contract is present here today.

## How to read this page

Events are the history feed for important trust changes. They help downstream systems notice when a batch was committed, a claim was added, or an authority changed.

!!! note "Current repo reality"
    The repository contains documentation only; there is no deployed contract event stream to subscribe to.

## Reference shape

### Event categories worth preserving

| Event type | Why it matters | Consumers |
| --- | --- | --- |
| Record committed | Lets systems know a batch or attestation entered the integrity layer. | Verification services, auditors, dashboards |
| Issuer authority changed | Makes trust-rule changes visible. | Governance tooling, risk review |
| Record superseded or challenged | Prevents stale trust signals. | Buyers, public verification views |

## Guidance for future implementation

### Design and delivery guidance

- Use event names that map cleanly to human meaning, not just low-level storage actions.

- Include stable identifiers so off-chain services can reconstruct the timeline accurately.

- Treat supersession and challenge events as first-class trust events, not edge cases.

## Related Pages

- [registry-contract](./registry-contract.md) - Review the narrow role of the future registry.
- [api-verification](./api-verification.md) - See how downstream services could expose the event history.
- [implementation-status](../start-here/implementation-status.md) - Confirm the current repo does not yet contain this layer.
