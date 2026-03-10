---
title: "ძირითადი კონცეფციები"
slug: "core-concepts"
locale: "ka"
section: "start-here"
audience: "მკითხველები, რომლებსაც საერთო ენის შექმნა სჭირდებათ."
tags:
  - "კონცეფციები"
  - "batch"
  - "attestation"
  - "verification"
status_label: "კონცეპტუალური მოდელი"
status_tone: "conceptual"
last_reviewed: "March 8, 2026"
---

# ძირითადი კონცეფციები

Terroir-ის მოდელი producer-ების, batch-ების, attestation-ებისა და verification ხედების გარშემოა აგებული.

!!! note "კონცეპტუალური მოდელი"
    ეს ტერმინები reference მოდელს აღწერს და ჯერ არაა წარმოდგენილი სრული აპლიკაციის სახით ამ რეპოზიტორიაში.

## ძირითადი ობიექტები

Terroir ოთხ ძირითად პრიმიტივზეა აგებული: Producers, Batches, Attestations და Verification Proofs. Producer არის აქტორი, რომელიც წარმოშობის საწყის მტკიცებას აკეთებს; Batch არის ის კონკრეტული პროდუქტის ერთეული, რომლის შესახებაც ვსაუბრობთ.

Attestation წარმოადგენს ხელმოწერილ მტკიცებას კონკრეტულ პარტიაზე: მას შეიძლება აკეთებდეს სერტიფიკატორი, ლაბორატორია, კოოპერატივი ან სხვა ავტორიზებული მხარე. Verification view არის ის ადამიანისთვის წაკითხვადი ფორმა, სადაც ეს ყველაფერი ერთ სურათად იყრის თავს.

## Related Pages

- [data-model](../trust-verification/data-model.md) - იხილეთ სტრუქტურული მონაცემთა მოდელი.
- [attestation-schema](../trust-verification/attestation-schema.md) - ნახეთ როგორ ფორმდება claim-ები.
- [verification-logic](../trust-verification/verification-logic.md) - ნახეთ როგორ მოწმდება თანხვედრა.
