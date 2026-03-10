---
title: "Trust model"
slug: "trust-model"
locale: "en"
section: "trust-verification"
audience: "Partners, certifiers, designers, and developers defining roles and responsibilities."
tags:
  - "trust model"
  - "roles"
  - "authorization"
  - "issuers"
status_label: "Reference trust rules"
status_tone: "conceptual"
last_reviewed: "March 8, 2026"
---

# Trust model

The trust model explains who is allowed to say what, who is expected to review it, and how different kinds of claims should gain or lose weight over time.

!!! note "Reference trust rules"
    This page describes the governance logic that future Terroir workflows should enforce. It is not yet represented by live authorization services in this repository.

## The core rule

Terroir does not try to make every claim equally trustworthy. It assumes that different actors have authority over different statements. A producer can describe their own batch. A certifier can attest to what they inspected. A lab can report a test result. A buyer can confirm receipt. The system becomes more trustworthy when those roles are clear and challengeable.

## Role and responsibility matrix

### Who should say what

| Actor | Good claim types | Claims that should stay outside their authority |
| --- | --- | --- |
| Producer | Batch identity, origin narrative, production context, declared process. | Self-issued regulatory approval or independent quality certification. |
| Certifier or regulator | Inspection outcome, standards compliance, protected-origin review. | Changing producer-supplied batch facts without an explicit amendment trail. |
| Lab | Test results linked to method and sample. | Commercial origin guarantees without chain context. |
| Logistics partner | Shipment custody, handoff, route events. | Agronomic or quality claims they did not observe. |
| Buyer | Receipt, acceptance, or discrepancy reports. | Retroactive certification of upstream conditions. |

This aligns with role-oriented authorization patterns used in many contract and application designs: authority is limited by purpose, not just by whether a user is logged in.[1][2]

## Design implications

### Implications for future product design

- Treat issuer identity as part of the claim, not as surrounding metadata that can be ignored.

- Show the difference between producer-supplied facts and independently attested claims.

- Preserve amendments instead of silently overwriting significant fields.

- Favor explicit trust states such as verified, pending, disputed, or superseded.

## Related Pages

- [certifier-onboarding](../workflows/certifier-onboarding.md) - See how a certifier would enter the trust model operationally.
- [attestation-schema](./attestation-schema.md) - Review the structured shape of a claim inside the trust model.
- [security-and-limitations](./security-and-limitations.md) - Understand where trust rules help and where they do not.

## Sources

1. **Ethereum Attestation Service** (EAS, documentation). [Source](https://attest.org/). Official EAS overview.
2. **Access Control** (OpenZeppelin Docs, documentation). [Source](https://docs.openzeppelin.com/contracts/5.x/access-control). Role-based access control reference for EVM contracts.
