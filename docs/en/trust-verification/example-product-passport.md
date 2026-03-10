---
title: "Example product passport"
slug: "example-product-passport"
locale: "en"
section: "trust-verification"
audience: "Designers, product teams, and non-technical reviewers evaluating the user-facing record format."
tags:
  - "passport"
  - "verification view"
  - "ui"
  - "example"
status_label: "Reference UX artifact"
status_tone: "reference"
last_reviewed: "March 8, 2026"
---

# Example product passport

A trustworthy product passport should let a reader move from story to evidence without losing track of who said what and what still needs review.

!!! info "Reference UX artifact"
    This page describes the intended shape of a readable passport and can guide design work before the verification application exists.

## Passport anatomy

### Product passport anatomy
A readable passport needs both human narrative and structured trust signals.
*Alt text: A center label product passport surrounded by origin summary, attestation chain, evidence links, status signal, shipment context, and integrity record.*
*Layout: anatomy*
- **Center:** Product passport
- **Origin summary:** Where the batch comes from, in plain language.
- **Attestation chain:** Who added which claims and in what role.
- **Evidence links:** Files, reports, photos, or certificates backing those claims.
- **Status signal:** Verified, incomplete, changed, disputed, or superseded.
- **Shipment context:** Optional logistics or commercial handoff context.
- **Integrity record:** The commitment that lets later readers check for silent change.

## Recommended reading order

1. **Start with the origin summary** - The first screen should explain the product and why the record exists.

2. **Check the status badge** - A reader should immediately see whether the record is verified, incomplete, or changed later.

3. **Open the attestation chain** - Details should explain which claims come from which parties.

4. **Inspect evidence only when needed** - Evidence should be available without overwhelming the first-time reader.

## Related Pages

- [consumer-verification-guide](./consumer-verification-guide.md) - See how a casual reader should use the passport.
- [batch-schema](./batch-schema.md) - Review the structured fields behind the passport.
- [how-verification-works](./how-verification-works.md) - Understand the verification flow the passport must support.
