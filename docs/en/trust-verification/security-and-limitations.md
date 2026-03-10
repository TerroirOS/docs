---
title: "Security and limitations"
slug: "security-and-limitations"
locale: "en"
section: "trust-verification"
audience: "Technical evaluators, risk owners, and skeptical readers."
tags:
  - "security"
  - "limitations"
  - "risk"
  - "trust boundaries"
status_label: "Risk guide"
status_tone: "reference"
last_reviewed: "March 8, 2026"
---

# Security and limitations

Terroir can improve trust, but it cannot make bad evidence true, prevent every fraud tactic, or replace operational governance. This page explains both the safeguards and the limits.

!!! info "Risk guide"
    This page captures the risk boundaries future Terroir implementations should acknowledge explicitly rather than hiding behind technical language.

## Security posture

### Foundational safeguards

- Use least-privilege access rules so actors can only issue or change the claims appropriate to their role.

- Preserve audit history for important changes instead of overwriting records silently.

- Protect secrets and operational credentials outside public verification surfaces.

- Treat verification UI language as part of security because misleading labels create false trust. [^nistSsdf] [^openzeppelinAccess]

## What the system cannot do on its own

### Trust boundaries

| Risk | What Terroir can help with | What still requires governance or human review |
| --- | --- | --- |
| False original input | It can make later tampering visible. | It cannot prove that a false original statement was true at the moment of entry. |
| Weak issuer governance | It can record who made a claim. | It cannot decide whether a badly chosen issuer should have been trusted in the first place. |
| Poor evidence quality | It can link evidence to a claim. | It cannot make blurry photos or weak inspection practices reliable. |
| Overclaiming by UI | It can show graded verification states. | Teams still need to choose careful wording that does not imply certainty where there is only partial evidence. |

!!! warning "Trust is layered, not magical"
    Integrity commitments, attestation protocols, and access control help, but they do not replace field inspection, competent certifiers, or honest operational process.

## Related Pages

- [implementation-status](../start-here/implementation-status.md) - See which safeguards are document-level versus code-level today.
- [trust-model](./trust-model.md) - Review the role model that mitigates some misuse cases.
- [data-handling-and-privacy](./data-handling-and-privacy.md) - Pair security boundaries with data disclosure boundaries.

## Sources

1. **Secure Software Development Framework (SSDF) Version 1.1** (NIST, standards). [Source](https://csrc.nist.gov/publications/detail/sp/800-218/final). NIST secure software development guidance.
2. **Access Control** (OpenZeppelin Docs, documentation). [Source](https://docs.openzeppelin.com/contracts/5.x/access-control). Role-based access control reference for EVM contracts.

## Footnotes

[^nistSsdf]: **Secure Software Development Framework (SSDF) Version 1.1** (NIST). [https://csrc.nist.gov/publications/detail/sp/800-218/final](https://csrc.nist.gov/publications/detail/sp/800-218/final)
[^openzeppelinAccess]: **Access Control** (OpenZeppelin Docs). [https://docs.openzeppelin.com/contracts/5.x/access-control](https://docs.openzeppelin.com/contracts/5.x/access-control)
