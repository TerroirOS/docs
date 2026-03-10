---
title: "Quickstart"
slug: "quickstart"
locale: "en"
section: "technical-reference"
audience: "Developers and collaborators trying to avoid setup confusion."
tags:
  - "quickstart"
  - "setup"
  - "website"
  - "future stack"
status_label: "Mixed: real website setup + future stack note"
status_tone: "reference"
last_reviewed: "March 8, 2026"
---

# Quickstart

There are two quickstarts to keep separate: the real one for this website repository, and the future one for a full Terroir provenance stack.

!!! info "Mixed: real website setup + future stack note"
    This page documents the actual setup for the repository in front of you and then outlines the larger platform setup that does not yet exist here.

## This repository today

If your goal is to work on the documentation and website, the real setup is simple: install dependencies, run the Next.js app, and work within the public content surface.

### Actual website quickstart

1. **Install dependencies** - Run `npm install` in the repository root if you do not already have `node_modules`.

2. **Start the site** - Run `npm run dev` to launch the website on port 3001.

3. **Validate changes** - Run `npm run lint` after edits. A production build currently depends on Google Fonts access in `app/layout.tsx`.

## Future full-stack quickstart

!!! warning "Reference only"
    The rest of this section documents the setup expectations for a future provenance stack, not a working local environment in this repository.

### Future stack expectations

- Provision a trusted data store for batches, attestations, and evidence metadata.

- Provision an issuer and authentication layer for producers, certifiers, and reviewers.

- Add a public verification surface that can read committed records.

- Add an integrity layer only for fields that benefit from tamper-evident commitments.

## Related Pages

- [implementation-status](../start-here/implementation-status.md) - Check the repo reality before assuming the larger stack exists.
- [app-setup](./app-setup.md) - Read the future reference-app expectations separately.
- [architecture](../start-here/architecture.md) - See where the website fits in the broader architecture.
