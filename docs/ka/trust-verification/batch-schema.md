---
title: "ბეჩის სქემა"
slug: "batch-schema"
locale: "ka"
section: "trust-verification"
audience: "დეველოპერები და პროდუქტის დიზაინერები."
tags:
  - "batch"
  - "schema"
  - "passport"
status_label: "reference batch shape"
status_tone: "reference"
last_reviewed: "March 8, 2026"
---

# ბეჩის სქემა

Batch schema განსაზღვრავს იმ მინიმალურ ინფორმაციას, რომლის გარეშეც წარმოშობის მტკიცება ბუნდოვანი რჩება.

!!! info "reference batch shape"
    ეს გვერდი აღწერს მიზნობრივ პარტიის ფორმას და არა live object-ს.

## რას უნდა შეიცავდეს პარტია

პარტიის ჩანაწერმა უნდა აღწეროს კონკრეტული ერთეული: რა პროდუქტია, ვინ აწარმოა, სად არის მისი origin კონტექსტი და რა დროის ან პროცესის ჭრილს ეკუთვნის. მიზანი ყველაფრის ერთ ობიექტში მოთავსება არაა; მიზანია ძირითადი იდენტობა და წარმოშობის ჩარჩო მკაფიო იყოს.

უმჯობესია core schema იყოს მცირე და სტაბილური, ხოლო richer context ატესტაციებში, evidence-ში ან commodity-specific გაფართოებებში გადაინაცვლოს.

## Related Pages

- [hashing-model](./hashing-model.md) - იხილეთ რომელი ველები უნდა იყოს integrity commitment-ში.
- [producer-journey](../../en/workflows/producer-journey.md) - ინგლისურად ნახეთ batch-ის workflow.
- [example-product-passport](../../en/trust-verification/example-product-passport.md) - ინგლისურად ნახეთ მომხმარებლისთვის წაკითხვადი შედეგი.
