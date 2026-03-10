import type { DocPage, DocSectionId, Locale } from "../types.mts";
import { SECTION_ORDER } from "./docs_renderer.mts";

interface BuildMkdocsConfigInput {
  enPages: DocPage[];
  kaPages: DocPage[];
  sectionTitles: Record<Locale, Record<DocSectionId, string>>;
}

export function buildMkdocsConfig(input: BuildMkdocsConfigInput): string {
  const { enPages, kaPages, sectionTitles } = input;

  const navLines = [
    "nav:",
    "  - Home: index.md",
    "  - English:",
    ...localeSectionNav("en", enPages, sectionTitles.en, 4),
    "  - ქართული:",
    ...localeSectionNav("ka", kaPages, sectionTitles.ka, 4),
    "  - Whitepaper:",
    "      - Overview: whitepaper/overview.md",
    "      - Full Paper: whitepaper/full-paper.md",
    "      - ქართული შეჯამება: whitepaper/ka-summary.md",
    "  - Research:",
    "      - Library: research/library.md",
    "  - Contributing: contributing.md",
  ];

  return [
    "site_name: TerroirOS Docs",
    "site_description: Documentation, architecture, APIs, research references, and contribution guidance for TerroirOS.",
    "site_url: https://terroiros.github.io/docs/",
    "repo_url: https://github.com/TerroirOS/docs",
    "edit_uri: edit/main/docs/",
    "docs_dir: docs",
    "theme:",
    "  name: material",
    "  language: en",
    "  features:",
    "    - navigation.sections",
    "    - navigation.expand",
    "    - navigation.top",
    "    - search.suggest",
    "    - search.highlight",
    "  palette:",
    "    - scheme: default",
    "      primary: green",
    "      accent: amber",
    "markdown_extensions:",
    "  - admonition",
    "  - attr_list",
    "  - footnotes",
    "  - tables",
    "  - toc:",
    "      permalink: true",
    "plugins:",
    "  - search",
    ...navLines,
    "",
  ].join("\n");
}

function localeSectionNav(
  locale: Locale,
  pages: DocPage[],
  titles: Record<DocSectionId, string>,
  indent: number,
): string[] {
  const lines: string[] = [];
  const pad = " ".repeat(indent);
  const leafPad = " ".repeat(indent + 4);

  for (const sectionId of SECTION_ORDER) {
    const sectionPages = pages.filter((page) => page.section === sectionId);
    if (sectionPages.length === 0) continue;

    lines.push(`${pad}- ${titles[sectionId]}:`);
    for (const page of sectionPages) {
      lines.push(`${leafPad}- ${escapeYaml(page.title)}: ${locale}/${sectionId}/${page.slug}.md`);
    }
  }

  return lines;
}

function escapeYaml(value: string): string {
  return `"${value.replace(/\\/g, "\\\\").replace(/\"/g, '\\\"')}"`;
}
