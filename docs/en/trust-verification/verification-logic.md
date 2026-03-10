---
title: "Verification logic"
slug: "verification-logic"
locale: "en"
section: "trust-verification"
audience: "Developers and auditors defining deterministic verification behavior."
tags:
  - "verification logic"
  - "deterministic checks"
  - "failure modes"
status_label: "Reference verification rules"
status_tone: "reference"
last_reviewed: "March 8, 2026"
---

# Verification logic

Verification logic turns the trust model into a repeatable decision process by checking identity, claim scope, evidence presence, and integrity consistency.

!!! info "Reference verification rules"
    This logic is documented as a target behavior for future services and verification views.

## Decision steps

### Reference logic

1. **Confirm record identity** - The verifier should know exactly which batch or passport is under review.

2. **Check issuer fitness** - Each attestation must come from an actor appropriate to that claim type.

3. **Check evidence completeness** - Important claims should point to supporting records or explain why evidence is absent.

4. **Check integrity consistency** - Committed fields should still match the current record.

5. **Return a graded result** - The outcome should distinguish verified, incomplete, changed, and disputed states.

## Failure modes worth surfacing

### Failures a good verifier should name explicitly

- The batch exists but lacks the attestation type needed for the current decision.

- An attestation is present but the issuer is not the right authority for that claim.

- The evidence link resolves, but the record has changed since the commitment was made.

- The record is internally consistent but still incomplete for the buyer's risk threshold.

## Related Pages

- [how-verification-works](./how-verification-works.md) - Start with the plain-language explanation first.
- [trust-model](./trust-model.md) - See which actors are expected to make which claims.
- [consumer-verification-guide](./consumer-verification-guide.md) - Translate these rules into a human checklist.
