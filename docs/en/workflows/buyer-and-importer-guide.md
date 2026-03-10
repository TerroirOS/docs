---
title: "Buyer and importer guide"
slug: "buyer-and-importer-guide"
locale: "en"
section: "workflows"
audience: "Importers, distributors, procurement teams, and compliance reviewers."
tags:
  - "buyer"
  - "importer"
  - "procurement"
  - "verification workflow"
status_label: "Reference commercial workflow"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# Buyer and importer guide

This guide focuses on the buyer decision: what a commercial reviewer needs to see before they can rely on a provenance record during sourcing or import review.

!!! warning "Reference commercial workflow"
    The guide documents the intended verification flow for commercial users before the underlying operational tooling exists in this repo.

## Buyer goal

A buyer or importer does not need every operational detail. They need enough trustworthy information to answer a business question: should this batch be accepted, escalated for review, or rejected because the trust story is incomplete or inconsistent?

## Commercial review checklist

### Commercial verification questions

| Question | What the buyer should look for | Why it matters |
| --- | --- | --- |
| Is this the right product and lot? | Stable batch identifier, product summary, and origin context. | Prevents confusion between adjacent lots or marketing narratives. |
| Who made the important claims? | Named certifiers, labs, or operational actors rather than anonymous badges. | Makes accountability visible. |
| Is the verification state clear? | A graded status rather than a generic green check. | Lets the buyer match trust depth to commercial risk. |
| What remains unresolved? | Explicit missing evidence or open issues. | Allows conditional decisions instead of false certainty. |

## What buyers should receive

### Expected outputs

- A readable product passport or export-ready verification view.

- Access to the attestation chain for claims that affect the purchase decision.

- A visible explanation of any incomplete, changed, or disputed state.

- A stable link or QR destination so later audits point back to the same record.

## Related Pages

- [how-verification-works](../trust-verification/how-verification-works.md) - Review the underlying verification logic.
- [exporter-workflows](./exporter-workflows.md) - See what the exporter side should package for commercial review.
- [consumer-verification-guide](../trust-verification/consumer-verification-guide.md) - Compare the commercial checklist with the public one.
