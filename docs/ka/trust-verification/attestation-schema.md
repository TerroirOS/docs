---
title: "ატესტაციის სქემა"
slug: "attestation-schema"
locale: "ka"
section: "trust-verification"
audience: "ტექნიკური მკითხველები და სერტიფიკატორები."
tags:
  - "attestation"
  - "issuer"
  - "claim"
status_label: "reference claim model"
status_tone: "reference"
last_reviewed: "March 8, 2026"
---

# ატესტაციის სქემა

Attestation schema აღწერს ვინ ამბობს რას, რომელ batch-ზე და რა evidence-ით.

!!! info "reference claim model"
    ეს სქემა მომავალ claim-ების მოდელს აღწერს და არა მიმდინარე სერვისს.

## ატესტაციის ფორმა

Attestation უნდა ინახავდეს batch-ის ბმას, issuer-ის იდენტობას, claim-ის ტიპს, evidence-ის კვალს და claim-ის მდგომარეობას. ამგვარად verification-ს შემდეგ შეუძლია არა მხოლოდ ტექსტის წაკითხვა, არამედ იმის გარჩევაც, ვინ თქვა რა და რაზე დაყრდნობით.

ქვეტიპები შეიძლება განსხვავდებოდეს: origin review, quality claim, lab result ან სხვა. თუმცა საერთო rule უცვლელია — claim უნდა იყოს issuer-თან და context-თან მჭიდროდ შეკრული.

## Related Pages

- [verification-logic](./verification-logic.md) - იხილეთ როგორ მოწმდება claim-ების თანხვედრა.
- [certifier-onboarding](../workflows/certifier-onboarding.md) - ნახეთ issuer-ების ოპერაციული მხარე.
- [trust-model](../../en/trust-verification/trust-model.md) - ინგლისურად წაიკითხეთ role matrix.
