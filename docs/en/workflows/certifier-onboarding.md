---
title: "Certifier onboarding"
slug: "certifier-onboarding"
locale: "en"
section: "workflows"
audience: "Certification bodies, associations, governance partners, and product designers."
tags:
  - "certifier"
  - "issuer onboarding"
  - "roles"
  - "trust registry"
status_label: "Reference issuer workflow"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# Certifier onboarding

Certifier onboarding is where the trust model becomes operational: a future implementation will need a careful process for deciding who can issue which attestation types and under what conditions.

!!! warning "Reference issuer workflow"
    This page documents the intended onboarding expectations for certifiers before role management and attestation tooling are implemented.

## Why certifier onboarding must be careful

A trust system fails quickly if anyone can issue authoritative claims without review. Terroir therefore treats certifier onboarding as a governance step, not a self-service growth funnel.

!!! note "Practical reading"
    The current website does not yet implement a certifier registry or approval flow. This page exists to document the control points that future work should preserve.

## Reference onboarding workflow

### Issuer onboarding steps

1. **Confirm organizational identity** - Document the institution behind the certifier account.

2. **Define attestation scope** - List which claim types the certifier is actually qualified to issue.

3. **Set review and renewal rules** - Decide how status is rechecked over time and who can suspend authority.

4. **Publish readable issuer metadata** - Future verification views should make the certifier understandable to downstream readers.

## Related Pages

- [trust-model](../trust-verification/trust-model.md) - Review the role matrix behind onboarding.
- [attestation-schema](../trust-verification/attestation-schema.md) - See the structure of the claims a certifier would issue.
- [security-and-limitations](../trust-verification/security-and-limitations.md) - Understand why certifier governance matters as much as the technology.
