---
title: "რეგისტრის კონტრაქტი"
slug: "registry-contract"
locale: "ka"
section: "technical-reference"
audience: "ტექნიკური მკითხველები."
tags:
  - "contract"
  - "registry"
  - "integrity"
status_label: "reference contract design"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# რეგისტრის კონტრაქტი

Registry contract გვერდი აღწერს მომავალი integrity ფენის ვიწრო პასუხისმგებლობას.

!!! warning "reference contract design"
    ამ რეპოზიტორიაში contract-ების პაკეტი ან ABI არ არსებობს; გვერდი სამომავლო როლს აღწერს.

## რისთვის უნდა არსებობდეს registry

თუ მომავალში Terroir გამოიყენებს on-chain ან სხვა tamper-evident registry-ს, მისი მიზანი უნდა იყოს commitments-ისა და role rules-ის შენახვა, და არა მთელი აპლიკაციის ლოგიკის მასში გადატანა.

ამ კოდბაზაში ასეთი კონტრაქტი ჯერ არ არსებობს, ამიტომ ეს გვერდი design constraint-ად უნდა წაიკითხოთ.

## Related Pages

- [contract-events](./contract-events.md) - იხილეთ რომელი event-ები უნდა იყოს ხილული.
- [function-reference](./function-reference.md) - იხილეთ reference ოპერაციები.
- [deployment-guide](./deployment-guide.md) - ნახეთ rollout კონტექსტი.
