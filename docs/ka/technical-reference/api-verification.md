---
title: "საჯარო ვერიფიკაციის API"
slug: "api-verification"
locale: "ka"
section: "technical-reference"
audience: "დეველოპერები და public verification UX-ის დიზაინერები."
tags:
  - "api"
  - "verification"
  - "public"
status_label: "reference public endpoint"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# საჯარო ვერიფიკაციის API

Public verification API უნდა აბრუნებდეს მკაფიო, graded შედეგებს ისე, რომ გაურკვევლობა არ დაიმალოს.

!!! warning "reference public endpoint"
    public verification route ამ რეპოზიტორიაში ჯერ არ არის.

## რას უნდა აბრუნებდეს

Verification API-ს უნდა შეეძლოს readable summary-ის, attestation chain-ისა და integrity comparison-ის დაბრუნება ისე, რომ პასუხში გამოირჩეს verified, incomplete, changed ან disputed მდგომარეობები.

## Related Pages

- [verification-logic](../trust-verification/verification-logic.md) - იხილეთ შიდა წესი.
- [contract-events](./contract-events.md) - იხილეთ downstream timeline.
- [api-authentication](./api-authentication.md) - ნახეთ auth split.
