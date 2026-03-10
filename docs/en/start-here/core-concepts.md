---
title: "Core concepts"
slug: "core-concepts"
locale: "en"
section: "start-here"
audience: "Readers who want a shared vocabulary before diving into workflows or technical reference pages."
tags:
  - "concepts"
  - "batches"
  - "attestations"
  - "verification"
status_label: "Conceptual model"
status_tone: "conceptual"
last_reviewed: "March 8, 2026"
---

# Core concepts

Terroir revolves around a handful of reusable concepts: producers, batches, attestations, verification views, and the trust rules that connect them.

!!! note "Conceptual model"
    These concepts describe the reference model used throughout the docs. They are not yet represented as a full application model inside this website repository.

## The five ideas to keep in mind

A producer is the organization or person making the origin claim. A batch is the concrete unit of product that the claim refers to, such as one harvest lot, shipment lot, or packaged production run.

An attestation is a structured statement made by another actor about that batch, such as a certifier, lab, cooperative, logistics partner, or buyer. A verification view is the readable surface that assembles the underlying record into something another person can inspect.

Behind those objects sits a trust rule: not every actor can say everything. Good provenance design limits who can issue which kinds of statements and how those statements are checked later.[1][2]

## A practical mental model

### How the core concepts fit together
A batch sits at the center, with supporting claims and verification evidence attached around it.
*Alt text: An anatomy diagram with Batch passport in the center and surrounding nodes for producer, certifier, evidence, verification view, and integrity anchor.*
*Layout: anatomy*
- **Center:** Batch passport
- **Producer:** Defines the product, place, and production context.
- **Attestor:** Adds an accountable claim about quality, origin, process, or movement.
- **Evidence:** Photos, inspections, documents, or lab results linked to the claim.
- **Integrity layer:** Makes important changes visible instead of silent.
- **Verification view:** Turns the record into something a human can read and challenge.

## Related Pages

- [trust-model](../trust-verification/trust-model.md) - See how different actors are supposed to make and verify claims.
- [data-model](../trust-verification/data-model.md) - Move from plain-language concepts to a structured reference schema.
- [glossary](../project-governance/glossary.md) - Review the terminology used repeatedly across the docs.

## Sources

1. **Traceability & recalls** (FAO, official). [Source](https://www.fao.org/food-safety/food-control-systems/supply-chains-and-consumers/traceability-and-recalls/en/). FAO guidance on why traceability matters in food systems.
2. **Ethereum Attestation Service** (EAS, documentation). [Source](https://attest.org/). Official EAS overview.
