---
title: "ბეჩის შექმნის API"
slug: "api-batch-creation"
locale: "ka"
section: "technical-reference"
audience: "დეველოპერები."
tags:
  - "api"
  - "batch"
status_label: "reference producer endpoint"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# ბეჩის შექმნის API

Batch creation API უნდა ქმნიდეს სტაბილურ პარტიის იდენტობას და არა უბრალოდ arbitrary field dump-ს.

!!! warning "reference producer endpoint"
    batch-ების შექმნის live endpoint ამ რეპოზიტორიაში არ არსებობს.

## რისთვის არის endpoint

Batch creation endpoint-ის მთავარი ამოცანაა producer input-იდან სტაბილური passport-ს მსგავსი ჩანაწერის შექმნა, draft/public/committed მდგომარეობების არევა კი არა.

## Related Pages

- [batch-schema](../trust-verification/batch-schema.md) - იხილეთ batch-ის core ველები.
- [hashing-model](../trust-verification/hashing-model.md) - განიხილეთ commitment timing.
- [api-authentication](./api-authentication.md) - ნახეთ auth boundary.
