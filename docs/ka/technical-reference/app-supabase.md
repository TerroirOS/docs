---
title: "Supabase სქემა"
slug: "app-supabase"
locale: "ka"
section: "technical-reference"
audience: "ტექნიკური მკითხველები."
tags:
  - "supabase"
  - "schema"
  - "database"
status_label: "reference data layer"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# Supabase სქემა

ადრინდელი ტექსტი Supabase schema-ს ახსენებდა, თუმცა ასეთი migrations ამ რეპოზიტორიაში არ არსებობს.

!!! warning "reference data layer"
    ეს გვერდი მომავალ data-store shape-ს აღწერს და არა უკვე არსებულ Supabase პროექტს.

## როგორ უნდა წავიკითხოთ ეს გვერდი

Reference data layer-ს უნდა შეეძლოს producers, batches, attestations და verification outputs-ის გამოყოფა ისე, რომ history, evidence linkage და public/private split არ დაიკარგოს. თუმცა რეალური migrations ამ კოდბაზაში არ არის.

## Related Pages

- [data-model](../trust-verification/data-model.md) - იხილეთ conceptual model.
- [app-env-vars](./app-env-vars.md) - შეადარეთ config boundary-ს.
- [app-frontend](./app-frontend.md) - იხილეთ app boundary-ს next step.
