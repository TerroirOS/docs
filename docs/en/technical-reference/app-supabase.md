---
title: "Reference data-store shape"
slug: "app-supabase"
locale: "en"
section: "technical-reference"
audience: "Developers evaluating the operational data layer."
tags:
  - "data store"
  - "database"
  - "reference schema"
status_label: "Reference data layer"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# Reference data-store shape

Older docs referenced a Supabase schema that does not exist in this repository. This page rewrites that content as a future data-store guide rather than a claim about already-shipped migrations.

!!! warning "Reference data layer"
    There are no database migrations or Supabase files in this repository today.

## How to read this page

A future data layer needs to support structured provenance records, evidence references, role-aware writes, and readable verification views without turning everything into one table.

!!! note "Current repo reality"
    The website repository contains no `supabase` directory or database migration history.

## Reference shape

### Reference data-layer responsibilities

| Data area | Purpose | Key design caution |
| --- | --- | --- |
| Producer and organization records | Represent origin actors and issuer identities. | Do not mix public profile copy with private governance metadata. |
| Batch records | Store stable passport data. | Avoid letting important fields mutate silently. |
| Attestation records | Store issuer-linked claims. | Preserve history and evidence references. |
| Verification outputs | Cache or package readable trust views. | Do not let cached summaries diverge from source truth without detection. |

## Guidance for future implementation

### Design and delivery guidance

- Model history and supersession explicitly.

- Separate public verification output from restricted operational state.

- Design the data layer around explanation as well as storage.

## Related Pages

- [data-model](../trust-verification/data-model.md) - Start with the conceptual model.
- [data-handling-and-privacy](../trust-verification/data-handling-and-privacy.md) - Review visibility boundaries.
- [implementation-status](../start-here/implementation-status.md) - Confirm current repo scope.
