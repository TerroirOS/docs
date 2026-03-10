---
title: "Batch schema"
slug: "batch-schema"
locale: "en"
section: "trust-verification"
audience: "Developers, product designers, and certifiers reviewing the baseline origin record."
tags:
  - "batch schema"
  - "passport"
  - "origin data"
status_label: "Reference batch shape"
status_tone: "reference"
last_reviewed: "March 8, 2026"
---

# Batch schema

A batch schema is the smallest trustworthy description of a product lot: enough to identify what is being discussed, where it came from, and which later claims should attach to it.

!!! info "Reference batch shape"
    The schema below is a documentation reference target, not a live contract or database object in this repository.

## Minimum trustworthy shape

### Fields worth protecting first

| Field | Why it matters | Notes |
| --- | --- | --- |
| Batch identifier | Lets every later claim point to the same product unit. | Should be stable and human-referenceable. |
| Producer reference | Connects the batch to its origin actor. | Can point to an organization record rather than duplicate text. |
| Product type | Prevents ambiguous descriptions such as 'agricultural product'. | Use a controlled vocabulary where possible. |
| Origin details | Captures the region, site, or protected-origin context. | Precision depends on privacy and commercial constraints. |
| Time window | Anchors the batch in harvest, production, or packaging time. | The relevant date can vary by commodity. |
| Current status | Shows whether the batch is draft, attested, shipped, superseded, or disputed. | Important for user-facing trust signals. |

## Design guidance

The batch schema should stay intentionally lean. Terroir should not attempt to encode every agronomic nuance directly into the core object. The core schema should identify the batch cleanly, while richer context can live in evidence, attestations, or commodity-specific extensions.

!!! note "Why restraint matters"
    Overloaded schemas become hard to validate, hard to explain, and hard to carry across commodities. A trustworthy passport starts with a small set of stable fields and expands through linked evidence.

## Related Pages

- [example-product-passport](./example-product-passport.md) - See how a structured batch should be rendered to humans.
- [hashing-model](./hashing-model.md) - Review which fields matter when computing integrity commitments.
- [producer-journey](../workflows/producer-journey.md) - See how the batch record is introduced in workflow form.
