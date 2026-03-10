import path from "node:path";
import type {
  CalloutBlock,
  ComparisonTableBlock,
  DiagramBlock,
  DocBlock,
  DocPage,
  DocSectionId,
  FaqBlock,
  GlossaryListBlock,
  Locale,
  ReferenceListBlock,
  StatusNoteBlock,
} from "../types.mts";
import {
  blockQuote,
  indentLines,
  relativeLink,
  toFrontmatter,
  toMarkdownTable,
} from "./markdown.mts";

export const SECTION_ORDER: DocSectionId[] = [
  "start-here",
  "trust-verification",
  "workflows",
  "technical-reference",
  "project-governance",
];

interface RenderDocPageInput {
  page: DocPage;
  locale: Locale;
  pageFile: string;
  slugToFileByLocale: Record<Locale, Map<string, string>>;
}

export function getDocOutputPath(locale: Locale, sectionId: string, slug: string): string {
  return path.join("docs", locale, sectionId, `${slug}.md`);
}

export function renderDocPage(input: RenderDocPageInput): string {
  const { page, locale, pageFile, slugToFileByLocale } = input;
  const sourceMap = new Map(page.sources.map((source) => [source.id, source]));
  const usedCitationIds = new Set<string>();

  const frontmatter = toFrontmatter({
    title: page.title,
    slug: page.slug,
    locale,
    section: page.section,
    audience: page.audience,
    tags: page.tags,
    status_label: page.status.label,
    status_tone: page.status.tone,
    last_reviewed: page.lastReviewed,
  });

  const parts: string[] = [
    frontmatter,
    "",
    `# ${page.title}`,
    "",
    page.summary,
    "",
    statusAdmonition(page.status.label, page.status.summary, page.status.tone),
    "",
  ];

  for (const section of page.sections) {
    parts.push(`## ${section.title}`);
    parts.push("");

    if (section.summary) {
      parts.push(section.summary);
      parts.push("");
    }

    for (const block of section.blocks) {
      parts.push(renderBlock(block, sourceMap, usedCitationIds));
      parts.push("");
    }
  }

  if (page.relatedPages.length > 0) {
    parts.push("## Related Pages");
    parts.push("");

    for (const related of page.relatedPages) {
      const linkTarget = resolveRelatedPath(
        locale,
        pageFile,
        related.slug,
        slugToFileByLocale,
      );
      parts.push(`- [${related.slug}](${linkTarget}) - ${related.description}`);
    }

    parts.push("");
  }

  if (page.sources.length > 0) {
    parts.push("## Sources");
    parts.push("");

    page.sources.forEach((source, index) => {
      const note = source.note ? ` ${source.note}` : "";
      parts.push(
        `${index + 1}. **${source.title}** (${source.publisher}, ${source.kind}). [Source](${source.url}).${note}`,
      );
    });

    parts.push("");
  }

  if (usedCitationIds.size > 0) {
    parts.push("## Footnotes");
    parts.push("");

    for (const citationId of Array.from(usedCitationIds)) {
      const source = sourceMap.get(citationId);
      if (!source) continue;
      parts.push(
        `[^${citationId}]: **${source.title}** (${source.publisher}). [${source.url}](${source.url})`,
      );
    }

    parts.push("");
  }

  return parts.join("\n");
}

function resolveRelatedPath(
  locale: Locale,
  pageFile: string,
  slug: string,
  slugToFileByLocale: Record<Locale, Map<string, string>>,
): string {
  const sameLocaleFile = slugToFileByLocale[locale].get(slug);
  const englishFile = slugToFileByLocale.en.get(slug);
  const target = sameLocaleFile ?? englishFile;

  if (!target) {
    throw new Error(`Unable to resolve related page slug \"${slug}\" from ${pageFile}`);
  }

  return relativeLink(pageFile, target).replaceAll(path.sep, "/");
}

function renderBlock(
  block: DocBlock,
  sourceMap: Map<string, DocPage["sources"][number]>,
  usedCitationIds: Set<string>,
): string {
  switch (block.type) {
    case "paragraph": {
      return withCitations(block.content, block.citations, sourceMap, usedCitationIds);
    }
    case "callout": {
      const tone = mapCalloutTone(block.tone);
      const body = withCitations(block.content, block.citations, sourceMap, usedCitationIds);
      return admonition(tone, block.title, body);
    }
    case "quote": {
      const quote = withCitations(block.quote, block.citations, sourceMap, usedCitationIds);
      return `${blockQuote(quote)}\n>\n> - ${block.attribution}`;
    }
    case "bulletList": {
      const lines: string[] = [];
      if (block.title) lines.push(`### ${block.title}`);
      if (block.intro) lines.push(withCitations(block.intro, block.citations, sourceMap, usedCitationIds));
      for (const item of block.items) {
        lines.push(`- ${item}`);
      }
      if (block.citations && block.citations.length > 0 && block.items.length > 0) {
        const markerLine = inlineCitationMarkers(block.citations, sourceMap, usedCitationIds);
        if (markerLine) {
          lines[lines.length - 1] = `${lines[lines.length - 1]} ${markerLine}`;
        }
      }
      return lines.join("\n\n");
    }
    case "steps": {
      const lines: string[] = [];
      if (block.title) lines.push(`### ${block.title}`);
      if (block.intro) lines.push(withCitations(block.intro, block.citations, sourceMap, usedCitationIds));
      block.items.forEach((item, index) => {
        lines.push(`${index + 1}. **${item.title}** - ${item.body}`);
      });
      if (block.citations && block.citations.length > 0 && block.items.length > 0) {
        const markerLine = inlineCitationMarkers(block.citations, sourceMap, usedCitationIds);
        if (markerLine) {
          lines[lines.length - 1] = `${lines[lines.length - 1]} ${markerLine}`;
        }
      }
      return lines.join("\n\n");
    }
    case "comparisonTable":
      return renderComparisonTable(block, sourceMap, usedCitationIds);
    case "diagram":
      return renderDiagram(block, sourceMap, usedCitationIds);
    case "faq":
      return renderFaq(block, sourceMap, usedCitationIds);
    case "glossaryList":
      return renderGlossary(block);
    case "referenceList":
      return renderReferenceList(block, sourceMap, usedCitationIds);
    case "statusNote":
      return renderStatusNote(block, sourceMap, usedCitationIds);
    default:
      return "";
  }
}

function renderComparisonTable(
  block: ComparisonTableBlock,
  sourceMap: Map<string, DocPage["sources"][number]>,
  usedCitationIds: Set<string>,
): string {
  const lines: string[] = [];
  if (block.title) lines.push(`### ${block.title}`);
  if (block.intro) lines.push(withCitations(block.intro, block.citations, sourceMap, usedCitationIds));

  lines.push(toMarkdownTable(block.columns, block.rows));

  if (block.citations && block.citations.length > 0) {
    const markers = inlineCitationMarkers(block.citations, sourceMap, usedCitationIds);
    if (markers) lines.push(markers);
  }

  return lines.join("\n\n");
}

function renderDiagram(
  block: DiagramBlock,
  sourceMap: Map<string, DocPage["sources"][number]>,
  usedCitationIds: Set<string>,
): string {
  const lines: string[] = [
    `### ${block.title}`,
    withCitations(block.caption, block.citations, sourceMap, usedCitationIds),
    `*Alt text: ${block.alt}*`,
    `*Layout: ${block.layout}*`,
  ];

  if (block.centerLabel) {
    lines.push(`- **Center:** ${block.centerLabel}`);
  }

  if (block.columns && block.columns.length > 0) {
    for (const column of block.columns) {
      lines.push(`- **${column.title}**`);
      for (const item of column.items) {
        lines.push(`  - **${item.title}:** ${item.body}`);
      }
    }
  }

  if (block.nodes && block.nodes.length > 0) {
    for (const node of block.nodes) {
      lines.push(`- **${node.title}:** ${node.body}`);
    }
  }

  return lines.join("\n");
}

function renderFaq(
  block: FaqBlock,
  sourceMap: Map<string, DocPage["sources"][number]>,
  usedCitationIds: Set<string>,
): string {
  const lines: string[] = [];
  if (block.title) lines.push(`### ${block.title}`);

  for (const item of block.items) {
    lines.push(`#### ${item.question}`);
    lines.push(withCitations(item.answer, block.citations, sourceMap, usedCitationIds));
  }

  return lines.join("\n\n");
}

function renderGlossary(block: GlossaryListBlock): string {
  const lines: string[] = [];
  if (block.title) lines.push(`### ${block.title}`);

  for (const item of block.items) {
    lines.push(`- **${item.term}:** ${item.definition}`);
  }

  return lines.join("\n\n");
}

function renderReferenceList(
  block: ReferenceListBlock,
  sourceMap: Map<string, DocPage["sources"][number]>,
  usedCitationIds: Set<string>,
): string {
  const lines: string[] = [];

  if (block.title) lines.push(`### ${block.title}`);
  if (block.intro) lines.push(block.intro);

  block.sourceIds.forEach((sourceId, index) => {
    const source = sourceMap.get(sourceId);
    if (!source) {
      throw new Error(`Missing source \"${sourceId}\" for reference list.`);
    }

    lines.push(`${index + 1}. **${source.title}** (${source.publisher}). [${source.url}](${source.url})`);
  });

  return lines.join("\n\n");
}

function renderStatusNote(
  block: StatusNoteBlock,
  sourceMap: Map<string, DocPage["sources"][number]>,
  usedCitationIds: Set<string>,
): string {
  const tone = mapStatusTone(block.tone);
  const body = withCitations(block.content, block.citations, sourceMap, usedCitationIds);
  return admonition(tone, block.title, body);
}

function admonition(kind: string, title: string, body: string): string {
  return `!!! ${kind} "${title}"\n${indentLines(body)}`;
}

function statusAdmonition(title: string, body: string, tone: string): string {
  return admonition(mapStatusTone(tone), title, body);
}

function mapCalloutTone(tone: CalloutBlock["tone"]): string {
  switch (tone) {
    case "warning":
      return "warning";
    case "trust":
      return "info";
    case "plain-language":
      return "note";
    case "note":
    default:
      return "note";
  }
}

function mapStatusTone(tone: string): string {
  switch (tone) {
    case "planned":
      return "warning";
    case "implemented":
      return "tip";
    case "reference":
      return "info";
    case "conceptual":
    default:
      return "note";
  }
}

function withCitations(
  text: string,
  citations: string[] | undefined,
  sourceMap: Map<string, DocPage["sources"][number]>,
  usedCitationIds: Set<string>,
): string {
  if (!citations || citations.length === 0) return text;

  if (/\[\d+\]/.test(text)) {
    return text;
  }

  const markers = inlineCitationMarkers(citations, sourceMap, usedCitationIds);
  if (!markers) return text;

  return `${text} ${markers}`;
}

function inlineCitationMarkers(
  citationIds: string[],
  sourceMap: Map<string, DocPage["sources"][number]>,
  usedCitationIds: Set<string>,
): string {
  const validIds = citationIds.filter((citationId) => sourceMap.has(citationId));
  validIds.forEach((citationId) => usedCitationIds.add(citationId));
  if (validIds.length === 0) return "";
  return validIds.map((citationId) => `[^${citationId}]`).join(" ");
}
