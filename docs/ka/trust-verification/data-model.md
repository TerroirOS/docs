---
title: "მონაცემთა მოდელი"
slug: "data-model"
locale: "ka"
section: "trust-verification"
audience: "ტექნიკური მკითხველები."
tags:
  - "მონაცემთა მოდელი"
  - "schema"
status_label: "reference სქემა"
status_tone: "reference"
last_reviewed: "March 8, 2026"
---

# მონაცემთა მოდელი

მონაცემთა მოდელი producers, batches და attestations ობიექტების გარშემოა აგებული.

!!! info "reference სქემა"
    ეს აღწერს მიზნობრივ მონაცემთა მოდელს და არა უკვე არსებულ მონაცემთა ბაზას ამ რეპოზიტორიაში.

## მოდელის ლოგიკა

Terroir-ის reference მონაცემთა მოდელი ისეთ მინიმალურ ერთეულებზეა აგებული, რომლებიც provenance-ისთვის საკმარისია და თან სხვადასხვა პროდუქტის შემთხვევაშიც გამოსადეგია. ცენტრში დგას პარტია, მის გარშემო კი მწარმოებელი, attestations და evidence-თან დაკავშირებული ობიექტები.

მთავარი პრინციპი ის არის, რომ claim უნდა დარჩეს დაკავშირებული როგორც batch-თან, ისე იმ აქტორთან, ვინც ეს claim გააკეთა. ამით verification-ის დროს ჩანაწერის მნიშვნელობა და პასუხისმგებლობა არ იკარგება.

## Related Pages

- [batch-schema](./batch-schema.md) - იხილეთ პარტიის ძირითადი ველები.
- [attestation-schema](./attestation-schema.md) - იხილეთ claim-ების სტრუქტურა.
- [data-handling-and-privacy](../../en/trust-verification/data-handling-and-privacy.md) - ინგლისურ ვერსიაში წაიკითხეთ public/private გაყოფა.
