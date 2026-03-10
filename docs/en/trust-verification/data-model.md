---
title: "Data model"
slug: "data-model"
locale: "en"
section: "trust-verification"
audience: "Technical readers who need the shape of the record before discussing endpoints or storage choices."
tags:
  - "data model"
  - "schema"
  - "batches"
  - "evidence"
status_label: "Reference schema"
status_tone: "reference"
last_reviewed: "March 8, 2026"
---

# Data model

The reference data model organizes provenance around producers, batches, attestations, evidence, and verification outputs so that each claim can stay linked to the actor and context that created it.

!!! info "Reference schema"
    This is a structured target model for future implementation. The website repository itself does not contain a live provenance database.

## Reference model shape

At the center of the model sits a batch or passport record. Around it are evidence-linked attestations, supporting media or documents, and a verification view that translates the raw record into something a human can assess.

### Core entities

| Entity | Purpose | Key questions it answers |
| --- | --- | --- |
| Producer | Represents the origin actor. | Who is making the initial claim and where do they operate? |
| Batch / passport | Defines the specific lot or unit being described. | What product is this, from where, and for which time window? |
| Attestation | Carries a role-specific statement about the batch. | Who verified or observed what? |
| Evidence asset | Supports the attestation with files or documents. | What concrete material backs the claim? |
| Verification view | Packages the record for review. | What should a buyer or consumer see first? |

## Model rules

### Rules that keep the model trustworthy

- Batch identity should stay stable even when later claims are added.

- Each attestation should point back to both the batch and the issuer who made the claim.

- Evidence should be linked by reference so that verification can explain which files support which claims.

- Integrity commitments should cover the fields whose silent change would undermine trust.

## Related Pages

- [batch-schema](./batch-schema.md) - Review the batch object in more detail.
- [attestation-schema](./attestation-schema.md) - Review the claim object that surrounds a batch.
- [data-handling-and-privacy](./data-handling-and-privacy.md) - See how sensitive and public data should be separated.

## Sources

1. **Traceability & recalls** (FAO, official). [Source](https://www.fao.org/food-safety/food-control-systems/supply-chains-and-consumers/traceability-and-recalls/en/). FAO guidance on why traceability matters in food systems.
2. **Ethereum Attestation Service** (EAS, documentation). [Source](https://attest.org/). Official EAS overview.
