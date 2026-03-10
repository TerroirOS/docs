---
title: "Data handling and privacy"
slug: "data-handling-and-privacy"
locale: "en"
section: "trust-verification"
audience: "Teams evaluating whether Terroir can balance transparency with operational privacy."
tags:
  - "privacy"
  - "data handling"
  - "public vs private"
  - "evidence"
status_label: "Reference data policy"
status_tone: "reference"
last_reviewed: "March 8, 2026"
---

# Data handling and privacy

Trustworthy provenance systems need to separate what must be public, what can stay private, and what should only be revealed to the right operational role.

!!! info "Reference data policy"
    This page documents the privacy boundaries future Terroir implementations should respect. It does not represent a live privacy policy for unshipped services.

## Privacy principle

A trustworthy system is not a system that publishes everything. It is a system that publishes enough for the intended decision while protecting what should remain private, commercially sensitive, or operationally restricted.

## Public, restricted, and private layers

### A practical separation model

| Data class | Should usually be visible to the public? | Examples |
| --- | --- | --- |
| Public trust signals | Yes | Origin summary, issuer names, high-level verification status, public certificates. |
| Restricted operational detail | Sometimes | Internal workflow notes, precise contact details, shipment exceptions, non-public evidence links. |
| Private or sensitive detail | No | Personally identifying information, secret commercial terms, raw credentials, internal access tokens. |

This separation also helps keep provenance useful across different deployment contexts. Open digital public goods patterns encourage reuse, but reuse only works when communities can adapt visibility rules to local needs rather than adopting a one-size-fits-all disclosure model.[1][2]

## Related Pages

- [security-and-limitations](./security-and-limitations.md) - Read the security caveats that sit next to the privacy design.
- [data-model](./data-model.md) - See how private and public data separate within the reference model.
- [consumer-verification-guide](./consumer-verification-guide.md) - Compare internal data policy with the end-user view.

## Sources

1. **Traceability & recalls** (FAO, official). [Source](https://www.fao.org/food-safety/food-control-systems/supply-chains-and-consumers/traceability-and-recalls/en/). FAO guidance on why traceability matters in food systems.
2. **Digital Public Goods Standard** (Digital Public Goods Alliance, standards). [Source](https://www.digitalpublicgoods.net/standard). DPG requirements and indicators.
