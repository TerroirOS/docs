# Contributing

TerroirOS documentation is canonical in this repository. New documentation changes should be proposed here first.

## Principles

- Keep wording accurate to current implementation status.
- Preserve evidence-backed claims with verifiable sources.
- Maintain bilingual parity where applicable (English and Georgian).

## Local workflow

1. Install Node.js 20+ and Python 3.11+.
2. Install Node dependencies: `npm install`.
3. Install Python dependencies: `pip install -r requirements.txt`.
4. Run sync from website source if needed: `npm run docs:sync -- /absolute/path/to/TerroirOS-Website`.
5. Run validation: `npm run docs:check` and `mkdocs build --strict`.

## Source-of-truth note

After migration, this repository is the canonical location for public documentation artifacts.
