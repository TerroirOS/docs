---
title: "Exporter workflows"
slug: "exporter-workflows"
locale: "en"
section: "workflows"
audience: "Exporters, trade facilitators, and product teams designing export-facing outputs."
tags:
  - "exporter"
  - "trade"
  - "shipment"
  - "verification packaging"
status_label: "Reference export workflow"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# Exporter workflows

Exporter workflows sit between producer records and commercial verification, packaging the right provenance story for cross-border review without forcing every reviewer into the same system.

!!! warning "Reference export workflow"
    This page describes the intended exporter-facing layer and does not correspond to a live export module in the current codebase.

## Exporter purpose

Exporters need to turn a potentially complex origin record into a format another organization can review quickly. That means summarizing the trust story without hiding the evidence path behind it.

## Reference export flow

### Exporter path

1. **Select the shipment-linked batches** - Identify which batch records are part of the exported lot.

2. **Assemble the verification package** - Combine origin summaries, issuer context, and verification status in a readable export view.

3. **Expose stable verification access** - Share a link, QR destination, or document package that can be revisited later.

4. **Record downstream review outcomes** - Track whether the buyer accepted, questioned, or requested more evidence.

## What the package should contain

### Minimum export package

- A clear shipment-to-batch mapping.

- Named attestations that matter to the trade decision.

- Any unresolved limitations or missing evidence called out plainly.

- Stable references for later customs, distributor, or buyer review.

## Related Pages

- [buyer-and-importer-guide](./buyer-and-importer-guide.md) - See how the packaged output should be consumed.
- [consumer-verification-guide](../trust-verification/consumer-verification-guide.md) - Compare commercial and public verification needs.
- [data-handling-and-privacy](../trust-verification/data-handling-and-privacy.md) - Review which details should stay restricted.
