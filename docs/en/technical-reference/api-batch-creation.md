---
title: "Batch creation API"
slug: "api-batch-creation"
locale: "en"
section: "technical-reference"
audience: "Developers planning producer-side services."
tags:
  - "api"
  - "batch creation"
  - "producer service"
status_label: "Reference producer endpoint"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# Batch creation API

A future batch-creation API should turn producer input into a stable batch passport without confusing draft authoring, publish states, or trust commitments.

!!! warning "Reference producer endpoint"
    This page documents a future interface shape only. There is no batch-creation endpoint in this repository.

## How to read this page

Creating a batch should be more than posting a blob of fields. The API needs to establish a stable identity, preserve provenance context, and prepare the record for later attestations.

!!! note "Current repo reality"
    The current codebase contains no batch-management backend.

## Reference shape

### Batch-creation responsibilities

| Concern | What the endpoint should do | What it should avoid |
| --- | --- | --- |
| Identity | Create a stable batch or passport reference. | Changing identifiers every time a detail changes. |
| Validation | Check required origin and product fields. | Accepting ambiguous or meaningless records. |
| Workflow state | Support draft versus publish-ready states. | Treating every save as immediately public or final. |
| Commitment timing | Commit only when the workflow is ready. | Locking noisy draft changes into the integrity layer. |

## Guidance for future implementation

### Design and delivery guidance

- Keep draft authoring separate from integrity commitment where possible.

- Return a record shape that downstream attestations can reference cleanly.

- Make later supersession and correction strategies explicit early.

## Related Pages

- [batch-schema](../trust-verification/batch-schema.md) - Review the reference fields behind the endpoint.
- [producer-journey](../workflows/producer-journey.md) - See the user workflow wrapped around the endpoint.
- [hashing-model](../trust-verification/hashing-model.md) - Decide when commitments should occur.
