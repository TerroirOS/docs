---
title: "ჰეშირების მოდელი"
slug: "hashing-model"
locale: "ka"
section: "trust-verification"
audience: "ტექნიკური მკითხველები."
tags:
  - "hashing"
  - "integrity"
status_label: "reference integrity pattern"
status_tone: "reference"
last_reviewed: "March 8, 2026"
---

# ჰეშირების მოდელი

ჰეშირების მოდელი წყვეტს რომელი ველები უნდა იყოს ისეთი მნიშვნელოვანი, რომ მათი შემდგომი ცვლილება მაშინვე შესამჩნევი გახდეს.

!!! info "reference integrity pattern"
    ეს აღწერს commitment სტრატეგიას და არა უკვე არსებულ util-ებს ამ კოდბაზაში.

## რატომ გვჭირდება hashing მოდელი

ჰეში აქ უბრალოდ compact storage არაა; ის trust მექანიზმია. იდეაა, რომ ყველაზე მნიშვნელოვანი ველები ისეთი ფორმით იყოს შეკრული, რომ მათი შემდგომი უხმო ცვლილება verification-ისას გამოაშკარავდეს.

ამიტომ hashing მოდელი უნდა იყოს ფრთხილი: უნდა მოიცავდეს იმ ნაწილს, რომლის შეცვლაც claim-ის მნიშვნელობას ცვლის, და არ უნდა ახშობდეს ისეთ ოპერაციულ დეტალებს, რომლებიც ბუნებრივად იცვლება.

## Related Pages

- [verification-logic](./verification-logic.md) - ნახეთ როგორ იკითხება mismatch-ები.
- [batch-schema](./batch-schema.md) - იხილეთ core ველები.
- [security-and-limitations](../../en/trust-verification/security-and-limitations.md) - ინგლისურად წაიკითხეთ hash-only მიდგომის ზღვარი.
