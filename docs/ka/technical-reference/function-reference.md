---
title: "ფუნქციების რეფერენსი"
slug: "function-reference"
locale: "ka"
section: "technical-reference"
audience: "დეველოპერები."
tags:
  - "functions"
  - "interface"
status_label: "reference interface"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# ფუნქციების რეფერენსი

Reference functions აღწერს მომავალი integrity ინტერფეისის ძირითად read/write ოპერაციებს.

!!! warning "reference interface"
    ეს არის მხოლოდ აღწერითი ინტერფეისი; live ABI ან service contract ამ რეპოზიტორიაში არ არის.

## რა ოპერაციები გვჭირდება

მომავალ integrity ფენას, დიდი ალბათობით, დასჭირდება რამდენიმე ძირითადი ოპერაცია: record-ის commitment, commitment-ის კითხვა, issuer authority-ის შემოწმება და superseded/disputed მდგომარეობების ხილული დაფიქსირება.

## Related Pages

- [registry-contract](./registry-contract.md) - იხილეთ ამ ფუნქციების კონტექსტი.
- [verification-logic](../trust-verification/verification-logic.md) - ნახეთ read paths-ის გამოყენება.
- [deployment-guide](./deployment-guide.md) - იხილეთ rollout მხარე.
