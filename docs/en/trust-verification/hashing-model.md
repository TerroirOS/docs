---
title: "Hashing model"
slug: "hashing-model"
locale: "en"
section: "trust-verification"
audience: "Technical readers deciding what should and should not be locked into an integrity commitment."
tags:
  - "hashing"
  - "integrity"
  - "canonicalization"
status_label: "Reference integrity pattern"
status_tone: "reference"
last_reviewed: "March 8, 2026"
---

# Hashing model

The hashing model defines which parts of a record should be committed for later integrity checks and which parts can remain flexible or private.

!!! info "Reference integrity pattern"
    The docs describe the intended commitment strategy. The website repository does not yet implement canonical hashing utilities for these records.

## Why a hashing model exists

Hashing is useful when you need later readers to detect silent change. It is not useful when you only want to store data more compactly. In Terroir, the hashing model is a trust device: it defines which fields are important enough that changing them later should trigger a visible difference.

## What should typically be hashed

### Good candidates for commitment

- Stable identifiers that tie later evidence to the same batch or attestation.

- Core descriptive fields whose change would alter the meaning of the claim.

- Issuer-linked attestation payloads that need later integrity review.

- Pointers to evidence sets when those pointers themselves are part of the claim.

!!! warning "What usually should not be hashed directly"
    Ephemeral UI state, generated summaries, and fields that are expected to change operationally without changing the trust meaning of the underlying claim.

## Related Pages

- [batch-schema](./batch-schema.md) - Review the core batch fields first.
- [verification-logic](./verification-logic.md) - See how commitment mismatches should be interpreted.
- [security-and-limitations](./security-and-limitations.md) - Read the limitations of hash-only trust guarantees.
