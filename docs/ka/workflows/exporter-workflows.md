---
title: "ექსპორტერის სამუშაო ნაკადები"
slug: "exporter-workflows"
locale: "ka"
section: "workflows"
audience: "ექსპორტერები და სავაჭრო პარტნიორები."
tags:
  - "export"
  - "workflow"
  - "trade"
status_label: "reference export flow"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# ექსპორტერის სამუშაო ნაკადები

ექსპორტერის workflow producer-ის ჩანაწერს ამზადებს ისე, რომ buyer-მა ან customs-მა მისი სწრაფი გადამოწმება შეძლოს.

!!! warning "reference export flow"
    ეს აღწერა export მოდულის მიზნობრივ სურათს ასახავს და არა live ფუნქციონალს.

## workflow-ის ამოცანა

ექსპორტერის ამოცანაა შეაგროვოს სწორი batch-ები, შეკრას verification package და მეორე მხარეს გადასცეს ისეთი ფორმით, რომ ჩანაწერი მოგვიანებითაც ხელახლა შემოწმებადი დარჩეს.

ეს package უნდა შეიცავდეს origin summary-ს, issuer context-ს, verification status-ს და სტაბილურ ბმას იმ provenance ჩანაწერთან, რომელსაც buyer ან regulator მოგვიანებით დაუბრუნდება.

## Related Pages

- [integrations](./integrations.md) - იხილეთ broader integration patterns.
- [verification-logic](../trust-verification/verification-logic.md) - ნახეთ verification-ის შინაგანი წესი.
- [buyer-and-importer-guide](../../en/workflows/buyer-and-importer-guide.md) - ინგლისურად წაიკითხეთ buyer-ის მხარე.
