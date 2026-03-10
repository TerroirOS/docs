---
title: "Attestation schema"
slug: "attestation-schema"
locale: "en"
section: "trust-verification"
audience: "Developers, certifiers, and product teams designing claim types."
tags:
  - "attestation"
  - "claims"
  - "issuers"
  - "evidence"
status_label: "Reference attestation model"
status_tone: "reference"
last_reviewed: "March 8, 2026"
---

# Attestation schema

Attestations are the structured claims that give a batch record depth. They explain who said what, in what role, with what evidence, and under which conditions.

!!! info "Reference attestation model"
    This schema is documented as the intended shape of future attestations. It is not yet backed by live storage or API code in this repository.

## What every attestation should contain

### Reference fields

| Field | Why it exists | Example |
| --- | --- | --- |
| Attestation ID | Lets the claim be referenced independently of the batch. | origin-claim-2026-001 |
| Batch reference | Connects the claim to the right lot or passport. | batch-kakheti-2026-03 |
| Issuer identity | Makes authorship reviewable. | Regional certifier, lab, cooperative |
| Claim type | Keeps different claim classes understandable. | origin_verified, organic_reviewed, lab_result |
| Evidence links | Shows what supports the claim. | inspection report, photo set, lab file |
| Status | Tracks whether the claim is active, superseded, challenged, or withdrawn. | active |

## Attestation lifecycle

### Attestation lifecycle
A good attestation remains readable even when it later changes state. [^easHome]
*Alt text: A flow from attestation draft to issued claim, evidence linked, integrity commitment, public verification, and later superseded or challenged states.*
*Layout: flow*
- **Draft:** Issuer prepares the claim and supporting evidence.
- **Issued:** The attestation is signed or otherwise published as authoritative.
- **Evidence linked:** Supporting files or documents are attached by reference.
- **Committed:** Critical fields are recorded in an integrity layer.
- **Reviewed later:** The claim can become verified, superseded, challenged, or withdrawn.

## Related Pages

- [trust-model](./trust-model.md) - Pair schema shape with role authority.
- [verification-logic](./verification-logic.md) - See how attestation consistency should be checked.
- [certifier-onboarding](../workflows/certifier-onboarding.md) - Review the operational expectations for issuers.

## Sources

1. **Ethereum Attestation Service** (EAS, documentation). [Source](https://attest.org/). Official EAS overview.

## Footnotes

[^easHome]: **Ethereum Attestation Service** (EAS). [https://attest.org/](https://attest.org/)
