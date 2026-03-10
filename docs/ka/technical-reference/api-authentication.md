---
title: "API ავტენტიკაცია"
slug: "api-authentication"
locale: "ka"
section: "technical-reference"
audience: "დეველოპერები და ინტეგრატორები."
tags:
  - "api"
  - "auth"
  - "roles"
status_label: "reference API boundary"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# API ავტენტიკაცია

სამომავლო API-სთვის მთავარი ზღვარი public verification-სა და privileged write ოპერაციებს შორის გადის.

!!! warning "reference API boundary"
    live API route-ები ამ რეპოზიტორიაში არ არის; გვერდი მომავალი trust boundary-ს აღწერს.

## რა უნდა განვასხვავოთ

Public verification ideally უნდა რჩებოდეს ადვილად ხელმისაწვდომი, ხოლო write ოპერაციები მკაცრად უნდა იყოს მიბმული actor identity-სა და role scope-ზე.

## Related Pages

- [api-batch-creation](./api-batch-creation.md) - იხილეთ producer-side write path.
- [api-attestation](./api-attestation.md) - იხილეთ issuer-side endpoint.
- [api-verification](./api-verification.md) - იხილეთ public read interface.
