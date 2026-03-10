# TerroirOS Docs

Canonical documentation repository for TerroirOS.

This repository publishes the public documentation site for:
- architecture and trust model
- module workflows and technical reference
- governance and contribution process
- whitepaper and research evidence base

## Source of truth

As of March 10, 2026, this repository is the canonical source for public documentation artifacts.

## Local development

1. Install dependencies:
   - `npm install`
   - `pip install -r requirements.txt`
2. (Optional) Regenerate from website source content:
   - `npm run docs:sync -- /absolute/path/to/TerroirOS-Website`
3. Validate docs:
   - `npm run docs:check`
   - `mkdocs build --strict`
4. Serve docs locally:
   - `mkdocs serve`

## Publish

Push to `main` to trigger GitHub Pages deployment.
