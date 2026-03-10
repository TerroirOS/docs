---
title: "გარემოს ცვლადები"
slug: "app-env-vars"
locale: "ka"
section: "technical-reference"
audience: "დეველოპერები და ოპერატორები."
tags:
  - "env"
  - "config"
  - "secrets"
status_label: "reference configuration surface"
status_tone: "planned"
last_reviewed: "March 8, 2026"
---

# გარემოს ცვლადები

Environment variable surface მომავალში მკაფიოდ უნდა ჰყოფდეს public config-სა და server-only secret-ებს.

!!! warning "reference configuration surface"
    ამ რეპოზიტორიაში ფართო backend config არ არსებობს; გვერდი სამომავლო წესებს აღწერს.

## რატომ არის config boundary მნიშვნელოვანი

Configuration-მა უნდა თქვას რომელი პარამეტრებია უსაფრთხო client exposure-ისთვის და რომელი secrets არასდროს უნდა გავიდეს browser-ში. ეს trust boundary-ს ნაწილია.

## Related Pages

- [deployment-guide](./deployment-guide.md) - იხილეთ rollout კონტექსტი.
- [app-setup](./app-setup.md) - შეადარეთ broader app boundary-ს.
- [app-supabase](./app-supabase.md) - იხილეთ data-layer note.
