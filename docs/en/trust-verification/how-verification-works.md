---
title: "How verification works"
slug: "how-verification-works"
locale: "en"
section: "trust-verification"
audience: "Buyers, certifiers, product teams, and developers who need the verification logic explained clearly."
tags:
  - "verification"
  - "proof"
  - "attestations"
  - "checks"
status_label: "Reference verification flow"
status_tone: "reference"
last_reviewed: "March 8, 2026"
---

# How verification works

Verification in Terroir means checking whether a readable product record, its supporting claims, and its integrity commitments still line up with one another.

!!! info "Reference verification flow"
    The verification logic described here is the intended reference model. This repository does not yet implement the full verification service or scanner experience.

## What verification means

Verification is not the same thing as displaying information. A page can show a producer name, a harvest date, and a certification badge without proving any of it. Verification begins when the record tells you who made each claim, what evidence supports it, and whether the critical parts of that record still match their trusted commitment.

Food-system guidance often treats traceability as a chain of accountability, not just a chain of data.[1] Attestation systems make that explicit by tying claims to identifiable issuers and reusable evidence structures.[2]

## Reference verification flow

### Verification flow
A readable verification experience should move from claim to evidence to integrity check without hiding uncertainty.
*Alt text: A five-step flow showing passport retrieval, claim review, issuer check, integrity comparison, and human decision.*
*Layout: flow*
- **Retrieve passport:** Load the human-readable record for the batch or shipment.
- **Read claims:** Identify which statements come from the producer and which come from other actors.
- **Check issuers:** Confirm whether certifiers, labs, or other actors are the expected parties.
- **Compare integrity record:** Verify that the committed record still matches the current one.
- **Decide with context:** Surface whether the record is consistent, incomplete, or changed later.

## Possible outcomes

### Verification needs graduated outcomes

| Outcome | Meaning | What the UI should say |
| --- | --- | --- |
| Verified | The current record matches the stored integrity commitment and issuer expectations. | This record is internally consistent and traceable to the referenced claims. |
| Incomplete | The record may be readable but is missing expected attestations or issuer context. | Some claims are present without the expected supporting evidence. |
| Changed after commitment | Important fields no longer match the integrity commitment. | The current record differs from the committed version and should be reviewed. |
| Untrusted issuer | The claim exists but comes from an actor outside the expected trust model. | A claim was made by a party that the workflow does not treat as authoritative for that claim type. |

## Related Pages

- [consumer-verification-guide](./consumer-verification-guide.md) - Use the plain-language checklist for non-technical verification.
- [verification-logic](./verification-logic.md) - Continue into the structured logic and failure modes.
- [example-product-passport](./example-product-passport.md) - See what the output of verification should look like to a reader.

## Sources

1. **Traceability & recalls** (FAO, official). [Source](https://www.fao.org/food-safety/food-control-systems/supply-chains-and-consumers/traceability-and-recalls/en/). FAO guidance on why traceability matters in food systems.
2. **Ethereum Attestation Service** (EAS, documentation). [Source](https://attest.org/). Official EAS overview.
