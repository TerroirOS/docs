---
title: "Deployment guide"
slug: "deployment-guide"
locale: "en"
section: "technical-reference"
audience: "Teams planning pilots or future deployments."
tags:
  - "deployment"
  - "environments"
  - "pilots"
  - "governance"
status_label: "Reference deployment guide"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# Deployment guide

This guide explains what future Terroir deployments should separate into environments, governance steps, and trust controls before any integrity-sensitive service goes live.

!!! warning "Reference deployment guide"
    There is no deployable provenance stack in this repository. The guidance below exists to steer future pilot planning.

## How to read this page

Deployment for a trust system is not just pushing code. It includes deciding who runs which services, how issuers are approved, how changes are reviewed, and what a rollback means for public verification.

!!! note "Current repo reality"
    Today this repository deploys only the public website experience.

## Reference shape

### Deployment questions that matter

| Deployment concern | Questions to answer before go-live | Why it matters |
| --- | --- | --- |
| Environment separation | Which services differ between demo, pilot, and production? | Avoids mixing public experimentation with trusted records. |
| Issuer governance | Who approves and revokes trusted actors? | Bad governance weakens the entire trust model. |
| Verification continuity | How will old links or QR codes remain readable after updates? | Trust records lose value if they rot quickly. |
| Incident handling | What happens if data, keys, or claims need urgent review? | Trust systems need explicit operational playbooks. |

## Guidance for future implementation

### Design and delivery guidance

- Treat pilot rollout as both a product and governance exercise.

- Preserve stable verification URLs wherever possible.

- Write human-readable incident language before the first incident arrives.

## Related Pages

- [implementation-status](../start-here/implementation-status.md) - See what is deployable today versus later.
- [security-and-limitations](../trust-verification/security-and-limitations.md) - Review the risk model that should shape deployment.
- [governance-roadmap](../project-governance/governance-roadmap.md) - Pair technical rollout with governance evolution.

## Sources

1. **Secure Software Development Framework (SSDF) Version 1.1** (NIST, standards). [Source](https://csrc.nist.gov/publications/detail/sp/800-218/final). NIST secure software development guidance.
