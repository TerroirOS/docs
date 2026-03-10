---
title: "დეპლოის გზამკვლევი"
slug: "deployment-guide"
locale: "ka"
section: "technical-reference"
audience: "პილოტის დამგეგმავები და ოპერატორები."
tags:
  - "deploy"
  - "pilot"
  - "operations"
status_label: "reference deployment guide"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# დეპლოის გზამკვლევი

Deployment guide აღწერს იმ გადაწყვეტილებებს, რომლებიც provenance სისტემაში code push-ზე მეტია.

!!! warning "reference deployment guide"
    დღეს deployable provenance stack ამ რეპოზიტორიაში არ არსებობს; გვერდი მომავალი rollout-ის პრინციპებს აღწერს.

## რატომ არის deployment განსაკუთრებული

ნდობის ინფრასტრუქტურაში deployment მხოლოდ კოდის გაშვება არ არის. მას ახლავს issuer governance, verification continuity, incident response და გარემოების მკაფიო გამიჯვნა demo/pilot/production შორის.

## Related Pages

- [app-env-vars](./app-env-vars.md) - იხილეთ configuration boundary.
- [governance-roadmap](../project-governance/governance-roadmap.md) - შეადარეთ მმართველობით გზას.
- [app-setup](./app-setup.md) - იხილეთ app boundary.
