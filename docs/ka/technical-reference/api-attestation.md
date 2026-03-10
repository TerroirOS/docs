---
title: "ატესტაციის ენდპოინტები"
slug: "api-attestation"
locale: "ka"
section: "technical-reference"
audience: "დეველოპერები და issuer workflow-ის დამგეგმავები."
tags:
  - "api"
  - "attestation"
status_label: "reference issuer endpoint"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# ატესტაციის ენდპოინტები

Attestation endpoints უნდა ეხმარებოდეს issuer-ებს role-scoped claim-ების უსაფრთხოდ გაცემაში.

!!! warning "reference issuer endpoint"
    ამ ეტაპზე attestation API ამ რეპოზიტორიაში არ არის.

## რა უნდა აკეთებდეს

Attestation endpoint-მა უნდა დაადასტუროს, რომ actor-ს აქვს შესაბამისი scope, claim-ს აქვს სტრუქტურული ფორმა და evidence-თან კავშირი, ხოლო ცვლილებები ისტორიას ინარჩუნებს.

## Related Pages

- [attestation-schema](../trust-verification/attestation-schema.md) - იხილეთ claim-ის ფორმა.
- [certifier-onboarding](../workflows/certifier-onboarding.md) - იხილეთ issuer-ების operational მხარე.
- [api-authentication](./api-authentication.md) - ნახეთ auth boundary.
