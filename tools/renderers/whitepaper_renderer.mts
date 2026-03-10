import path from "node:path";
import type {
  CitationEntry,
  EquationEntry,
  FigureEntry,
  Locale,
  TableEntry,
  WhitepaperBlock,
  WhitepaperDocument,
  WhitepaperSection,
  WhitepaperSummaryKa,
  WhitepaperSupport,
} from "../types.mts";
import { blockQuote, escapePipes, toFrontmatter, toMarkdownTable } from "./markdown.mts";

export function renderWhitepaperOverview(documentEn: WhitepaperDocument): string {
  const fm = toFrontmatter({
    title: `${documentEn.title} - Overview`,
    locale: "en",
    section: "whitepaper",
    tags: ["whitepaper", "trace", "shield", "research"],
    status_label: "Whitepaper",
    status_tone: "reference",
    last_reviewed: new Date().toISOString().slice(0, 10),
    audience: "Researchers, policymakers, technical partners, and implementers",
  });

  return [
    fm,
    "",
    `# ${documentEn.title}`,
    "",
    documentEn.subtitle,
    "",
    `- **Label:** ${documentEn.heroLabel}`,
    `- **PDF:** [Download the whitepaper](../assets/whitepaper/terroir-trace-shield-whitepaper.pdf)`,
    `- **Full text:** [Read full paper](full-paper.md)`,
    `- **Georgian summary:** [წაიკითხეთ მოკლე ქართული ვერსია](ka-summary.md)`,
    "",
    "## Contents",
    "",
    `- ${documentEn.abstractTitle}`,
    `- ${documentEn.executiveSummaryTitle}`,
    ...documentEn.sections.map((section, index) => `- ${index + 1}. ${section.title}`),
    `- ${documentEn.appendixTitle}`,
    "",
  ].join("\n");
}

export function renderWhitepaperFullPaper(
  documentEn: WhitepaperDocument,
  support: WhitepaperSupport,
): string {
  const citationMap = new Map(support.citations.map((citation) => [citation.id, citation]));
  const figureMap = new Map(support.figures.map((figure) => [figure.id, figure]));
  const tableMap = new Map(support.tables.map((table) => [table.id, table]));
  const equationMap = new Map(support.equations.map((equation) => [equation.id, equation]));

  const usedCitationIds = new Set<string>();

  const fm = toFrontmatter({
    title: documentEn.title,
    locale: "en",
    section: "whitepaper",
    tags: ["whitepaper", "research", "architecture", "traceability"],
    status_label: "Research reference",
    status_tone: "reference",
    last_reviewed: new Date().toISOString().slice(0, 10),
    audience: "Technical reviewers, policy stakeholders, and implementers",
  });

  const lines: string[] = [
    fm,
    "",
    `# ${documentEn.title}`,
    "",
    documentEn.subtitle,
    "",
    `[Download PDF](../assets/whitepaper/terroir-trace-shield-whitepaper.pdf)`,
    "",
    `## ${documentEn.abstractTitle}`,
    "",
    renderWhitepaperBlocks(documentEn.abstractBlocks, {
      citationMap,
      figureMap,
      tableMap,
      equationMap,
      usedCitationIds,
      figureLabel: "Figure",
      tableLabel: "Table",
      equationLabel: "Equation",
    }),
    "",
    `## ${documentEn.executiveSummaryTitle}`,
    "",
    renderWhitepaperBlocks(documentEn.executiveSummaryBlocks, {
      citationMap,
      figureMap,
      tableMap,
      equationMap,
      usedCitationIds,
      figureLabel: "Figure",
      tableLabel: "Table",
      equationLabel: "Equation",
    }),
    "",
  ];

  documentEn.sections.forEach((section, index) => {
    lines.push(`## ${index + 1}. ${section.title}`);
    lines.push("");
    lines.push(
      renderWhitepaperBlocks(section.blocks, {
        citationMap,
        figureMap,
        tableMap,
        equationMap,
        usedCitationIds,
        figureLabel: "Figure",
        tableLabel: "Table",
        equationLabel: "Equation",
      }),
    );
    lines.push("");
  });

  lines.push(`## ${documentEn.appendixTitle}`);
  lines.push("");
  lines.push(
    renderWhitepaperBlocks(documentEn.appendixBlocks, {
      citationMap,
      figureMap,
      tableMap,
      equationMap,
      usedCitationIds,
      figureLabel: "Figure",
      tableLabel: "Table",
      equationLabel: "Equation",
    }),
  );
  lines.push("");

  lines.push("## References");
  lines.push("");
  for (const citationId of Array.from(usedCitationIds)) {
    const citation = citationMap.get(citationId);
    if (!citation) continue;
    lines.push(`[^${citationId}]: ${citation.apa} [Source](${citation.url})`);
  }
  lines.push("");

  return lines.join("\n");
}

export function renderWhitepaperKaSummary(summaryKa: WhitepaperSummaryKa): string {
  const fm = toFrontmatter({
    title: summaryKa.title,
    locale: "ka",
    section: "whitepaper",
    tags: ["whitepaper", "summary", "georgian"],
    status_label: "ქართული შეჯამება",
    status_tone: "reference",
    last_reviewed: new Date().toISOString().slice(0, 10),
    audience: "ქართული აუდიტორია და პარტნიორები",
  });

  const lines: string[] = [
    fm,
    "",
    `# ${summaryKa.title}`,
    "",
    summaryKa.subtitle,
    "",
    `!!! note "${summaryKa.noticeTitle}"`,
    `    ${summaryKa.noticeBody}`,
    "",
    `[${summaryKa.downloadLabel}](../assets/whitepaper/terroir-trace-shield-whitepaper.pdf)`,
    "",
    `## ${summaryKa.abstractTitle}`,
    "",
    ...summaryKa.abstractParagraphs,
    "",
    `## ${summaryKa.findingsTitle}`,
    "",
    ...summaryKa.findings.map((finding) => `- ${finding}`),
    "",
    `## ${summaryKa.outlineTitle}`,
    "",
    ...summaryKa.outline.map((outline, index) => `${index + 1}. **${outline.title}** - ${outline.summary}`),
    "",
    `## ${summaryKa.figureCaptionTitle}`,
    "",
    ...summaryKa.figureCaptions.map((caption, index) => `${index + 1}. ${caption}`),
    "",
  ];

  return lines.join("\n");
}

export function renderResearchLibrary(
  support: WhitepaperSupport,
  locale: Locale,
  sectionTitlesByCitation: Map<string, string>,
): string {
  const title = locale === "ka" ? "კვლევის ბიბლიოთეკა" : "Research Library";
  const subtitle =
    locale === "ka"
      ? "წყაროები, რომლებიც Terroir-ის თეთრ ნაშრომს და არქიტექტურულ გადაწყვეტილებებს ამყარებს."
      : "Evidence sources that support Terroir whitepaper claims and architecture decisions.";

  const fm = toFrontmatter({
    title,
    locale,
    section: "research",
    tags: ["research", "citations", "evidence"],
    status_label: "Evidence base",
    status_tone: "reference",
    last_reviewed: new Date().toISOString().slice(0, 10),
    audience: locale === "ka" ? "პარტნიორები, მკვლევრები, დეველოპერები" : "Partners, researchers, and implementers",
  });

  const lines: string[] = [
    fm,
    "",
    `# ${title}`,
    "",
    subtitle,
    "",
  ];

  for (const category of support.categories) {
    lines.push(`## ${category}`);
    lines.push("");

    const entries = support.citations.filter((entry) => entry.category === category);
    for (const entry of entries) {
      const citedIn = sectionTitlesByCitation.get(entry.id) ?? "Executive Summary";
      lines.push(`### ${entry.title}`);
      lines.push("");
      lines.push(`- **Type:** ${entry.type}`);
      lines.push(`- **Year:** ${entry.year}`);
      lines.push(`- **Cited in:** ${citedIn}`);
      lines.push(`- **Source:** [${entry.url}](${entry.url})`);
      lines.push(`- **APA:** ${entry.apa}`);
      lines.push("");
      lines.push(`**Summary:** ${entry.summary}`);
      lines.push("");
      lines.push(`**Why it matters:** ${entry.relevance}`);
      lines.push("");
    }
  }

  return lines.join("\n");
}

function renderWhitepaperBlocks(
  blocks: WhitepaperBlock[],
  ctx: {
    citationMap: Map<string, CitationEntry>;
    figureMap: Map<string, FigureEntry>;
    tableMap: Map<string, TableEntry>;
    equationMap: Map<string, EquationEntry>;
    usedCitationIds: Set<string>;
    figureLabel: string;
    tableLabel: string;
    equationLabel: string;
  },
): string {
  const lines: string[] = [];

  blocks.forEach((block, index) => {
    switch (block.kind) {
      case "paragraph": {
        lines.push(withCitationMarkers(block.text, block.citationIds, ctx.usedCitationIds, ctx.citationMap));
        lines.push("");
        break;
      }
      case "callout": {
        lines.push(`!!! note "${block.title}"`);
        lines.push(`    ${withCitationMarkers(block.text, block.citationIds, ctx.usedCitationIds, ctx.citationMap)}`);
        lines.push("");
        break;
      }
      case "list": {
        if (block.title) {
          lines.push(`### ${block.title}`);
          lines.push("");
        }

        block.items.forEach((item) => lines.push(`- ${item}`));
        if (block.citationIds?.length) {
          lines.push(withCitationMarkers("", block.citationIds, ctx.usedCitationIds, ctx.citationMap).trim());
        }
        lines.push("");
        break;
      }
      case "quote": {
        lines.push(blockQuote(withCitationMarkers(block.text, block.citationIds, ctx.usedCitationIds, ctx.citationMap)));
        lines.push(">");
        lines.push(`> - ${block.attribution}`);
        lines.push("");
        break;
      }
      case "figure": {
        const figure = ctx.figureMap.get(block.figureId);
        if (!figure) throw new Error(`Missing whitepaper figure: ${block.figureId}`);
        figure.citationIds?.forEach((id) => ctx.usedCitationIds.add(id));

        const assetName = path.basename(figure.asset);
        lines.push(`### ${ctx.figureLabel} ${index + 1}. ${figure.title}`);
        lines.push("");
        lines.push(`![${figure.alt}](../assets/whitepaper/figures/${assetName})`);
        lines.push("");
        lines.push(withCitationMarkers(figure.caption, figure.citationIds, ctx.usedCitationIds, ctx.citationMap));
        lines.push("");
        break;
      }
      case "table": {
        const table = ctx.tableMap.get(block.tableId);
        if (!table) throw new Error(`Missing whitepaper table: ${block.tableId}`);
        table.citationIds?.forEach((id) => ctx.usedCitationIds.add(id));

        lines.push(`### ${ctx.tableLabel} ${index + 1}. ${table.title}`);
        lines.push("");
        lines.push(withCitationMarkers(table.caption, table.citationIds, ctx.usedCitationIds, ctx.citationMap));
        lines.push("");
        lines.push(toMarkdownTable(table.columns, table.rows));
        lines.push("");
        break;
      }
      case "equation": {
        const equation = ctx.equationMap.get(block.equationId);
        if (!equation) throw new Error(`Missing whitepaper equation: ${block.equationId}`);
        equation.citationIds?.forEach((id) => ctx.usedCitationIds.add(id));

        lines.push(`### ${ctx.equationLabel} ${index + 1}. ${equation.title}`);
        lines.push("");
        lines.push("```latex");
        lines.push(equation.expression);
        lines.push("```");
        lines.push("");

        if (equation.variables.length > 0) {
          lines.push("| Symbol | Meaning |");
          lines.push("| --- | --- |");
          equation.variables.forEach((item) => {
            lines.push(`| ${escapePipes(item.symbol)} | ${escapePipes(item.meaning)} |`);
          });
          lines.push("");
        }

        lines.push(withCitationMarkers(equation.interpretation, equation.citationIds, ctx.usedCitationIds, ctx.citationMap));
        lines.push("");
        break;
      }
      default:
        break;
    }
  });

  return lines.join("\n");
}

function withCitationMarkers(
  text: string,
  citationIds: string[] | undefined,
  usedCitationIds: Set<string>,
  citationMap: Map<string, CitationEntry>,
): string {
  if (!citationIds || citationIds.length === 0) return text;

  const valid = citationIds.filter((id) => citationMap.has(id));
  valid.forEach((id) => usedCitationIds.add(id));
  if (valid.length === 0) return text;

  const markers = valid.map((id) => `[^${id}]`).join(" ");
  if (!text) return markers;

  if (/\[\d+\]/.test(text)) {
    return text;
  }

  return `${text} ${markers}`;
}

export function collectWhitepaperSectionTitlesByCitation(
  documentEn: WhitepaperDocument,
  support: WhitepaperSupport,
): Map<string, string> {
  const figureMap = new Map(support.figures.map((figure) => [figure.id, figure]));
  const tableMap = new Map(support.tables.map((table) => [table.id, table]));
  const equationMap = new Map(support.equations.map((equation) => [equation.id, equation]));
  const output = new Map<string, string>();

  const add = (citationId: string, label: string) => {
    const existing = output.get(citationId);
    output.set(citationId, existing ? `${existing}, ${label}` : label);
  };

  const collectBlockCitations = (blocks: WhitepaperBlock[]): string[] => {
    const ids = new Set<string>();
    blocks.forEach((block) => {
      if ("citationIds" in block && block.citationIds) {
        block.citationIds.forEach((id) => ids.add(id));
      }

      if (block.kind === "figure") {
        figureMap.get(block.figureId)?.citationIds?.forEach((id) => ids.add(id));
      }

      if (block.kind === "table") {
        tableMap.get(block.tableId)?.citationIds?.forEach((id) => ids.add(id));
      }

      if (block.kind === "equation") {
        equationMap.get(block.equationId)?.citationIds?.forEach((id) => ids.add(id));
      }
    });

    return Array.from(ids);
  };

  collectBlockCitations(documentEn.abstractBlocks).forEach((id) => add(id, documentEn.abstractTitle));
  collectBlockCitations(documentEn.executiveSummaryBlocks).forEach((id) =>
    add(id, documentEn.executiveSummaryTitle),
  );
  documentEn.sections.forEach((section: WhitepaperSection) => {
    const sectionIds = new Set<string>(section.citationIds);
    collectBlockCitations(section.blocks).forEach((id) => sectionIds.add(id));
    sectionIds.forEach((id) => add(id, section.shortTitle));
  });
  collectBlockCitations(documentEn.appendixBlocks).forEach((id) => add(id, documentEn.appendixTitle));

  return output;
}
