---
title: "კონტრაქტის ივენთები"
slug: "contract-events"
locale: "ka"
section: "technical-reference"
audience: "დეველოპერები და ინდექსაციის გუნდები."
tags:
  - "events"
  - "audit"
status_label: "reference event surface"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# კონტრაქტის ივენთები

Event-ები მომავალი integrity ფენის audit trail-ს შექმნისთვისაა საჭირო.

!!! warning "reference event surface"
    ამ რეპოზიტორიაში event-producing contract არ არსებობს.

## რატომ გვჭირდება ივენთები

Event-ები საჭიროა იმისთვის, რომ integrity-სთან დაკავშირებული ცვლილებები downstream სისტემებმა სწრაფად და ერთმნიშვნელოვნად დაინახონ: რა დაემატა, რა შეიცვალა authority-ში, რა superseded ან disputed გახდა.

## Related Pages

- [registry-contract](./registry-contract.md) - ნახეთ registry-ს ვიწრო პასუხისმგებლობა.
- [api-verification](./api-verification.md) - იხილეთ downstream verification interface.
- [function-reference](./function-reference.md) - ნახეთ reference operations.
