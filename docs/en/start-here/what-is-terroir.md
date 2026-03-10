---
title: "What is Terroir"
slug: "what-is-terroir"
locale: "en"
section: "start-here"
audience: "Everyone new to the project, from producers and certifiers to technical evaluators."
tags:
  - "overview"
  - "origin"
  - "trust"
  - "georgia"
  - "digital public goods"
status_label: "Project overview"
status_tone: "reference"
last_reviewed: "March 8, 2026"
---

# What is Terroir

Terroir is a public-facing project and documentation site for an open approach to trusted agricultural origin, starting with Georgian wine and designed to grow into a reusable provenance stack.

!!! info "Project overview"
    This repository currently contains the Terroir website and documentation experience. The broader provenance platform described here is the project direction and reference model.

## In plain language

Terroir is an attempt to make product origin easier to trust. The idea is simple: if a producer says where a product came from, who handled it, and what was verified about it, other people should be able to inspect that claim without relying on opaque paperwork or a single private platform.

!!! note "What exists today"
    The code in this repository delivers the marketing site, whitepaper, research library, bilingual documentation shell, and a demo gate. It does not yet ship the full producer, certifier, database, smart-contract, or API implementation described in several reference pages.

The project starts in Georgian wine because origin is unusually important there: geography, cultivation method, and local heritage are part of the product's meaning as well as its market value.[1][2]

## Why the project exists

High-value agricultural goods often depend on claims that are hard to verify quickly: where the crop was grown, whether a certifier inspected it, whether the shipment stayed linked to the right lot, or whether a label legitimately represents a protected origin. Terroir proposes an open way to organize those claims so they can be checked by more than one party.

The project is also shaped by a digital public goods mindset. Instead of turning provenance into another closed vendor dependency, the long-term goal is to publish reusable schemas, verification patterns, and reference interfaces that communities can adapt to their own crops, regions, and regulatory environments.[3]

## How the trust story is supposed to work

### Provenance lifecycle
Terroir treats provenance as a sequence of accountable handoffs, not a single branding claim.
*Alt text: A six-step flow showing land and harvest, batch creation, attestations, verification packaging, public checks, and feedback into future trust decisions.*
*Layout: flow*
- **Origin captured:** A producer records where and how a batch began.
- **Batch defined:** The product is described as a concrete lot or passport.
- **Claims attested:** Inspectors, labs, or certifiers add signed evidence.
- **Integrity anchored:** Important records are committed to a tamper-evident reference layer.
- **Verification shared:** Buyers, regulators, and consumers get a readable proof path.
- **Trust reused:** The same record supports export, compliance, and storytelling.

This pattern is intentionally broader than a single technology choice. A database, an attestation protocol, QR-linked verification pages, and selective ledger anchoring can all play a role. The design question is not 'how much blockchain can we add?' but 'which evidence needs to stay independently checkable over time?'

## Related Pages

- [why-trusted-origin-matters](./why-trusted-origin-matters.md) - Understand the problem space that makes provenance infrastructure worth building.
- [architecture](./architecture.md) - See how the website, reference architecture, and planned operational stack fit together.
- [implementation-status](./implementation-status.md) - Check what exists in this repository today versus what remains planned.

## Sources

1. **Ancient Georgian traditional Qvevri wine-making method** (UNESCO, official). [Source](https://en.unesco.org/silkroad/silk-road-themes/intangible-cultural-heritage/ancient-georgian-traditional-qvevri-wine-making). UNESCO overview of the qvevri tradition.
2. **Early Neolithic wine of Georgia in the South Caucasus** (PubMed / PNAS, research). [Source](https://pubmed.ncbi.nlm.nih.gov/29133421/). Peer-reviewed archaeological evidence frequently cited in discussions of Georgian wine history.
3. **Digital Public Goods Standard** (Digital Public Goods Alliance, standards). [Source](https://www.digitalpublicgoods.net/standard). DPG requirements and indicators.
