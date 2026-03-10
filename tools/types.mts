export type Locale = "en" | "ka";

export type DocSectionId =
  | "start-here"
  | "trust-verification"
  | "workflows"
  | "technical-reference"
  | "project-governance";

export type DocStatusTone = "implemented" | "reference" | "planned" | "conceptual";

export interface Citation {
  id: string;
  title: string;
  publisher: string;
  kind: "official" | "research" | "standards" | "documentation" | "license";
  url: string;
  note?: string;
}

export interface RelatedLink {
  slug: string;
  description: string;
}

export interface PageStatus {
  label: string;
  tone: DocStatusTone;
  summary: string;
}

export interface TocEntry {
  id: string;
  title: string;
}

interface BaseBlock {
  citations?: string[];
}

export interface ParagraphBlock extends BaseBlock {
  type: "paragraph";
  content: string;
}

export interface CalloutBlock extends BaseBlock {
  type: "callout";
  tone: "note" | "trust" | "warning" | "plain-language";
  title: string;
  content: string;
}

export interface QuoteBlock extends BaseBlock {
  type: "quote";
  quote: string;
  attribution: string;
}

export interface BulletListBlock extends BaseBlock {
  type: "bulletList";
  title?: string;
  intro?: string;
  items: string[];
}

export interface StepItem {
  title: string;
  body: string;
}

export interface StepsBlock extends BaseBlock {
  type: "steps";
  title?: string;
  intro?: string;
  items: StepItem[];
}

export interface ComparisonTableBlock extends BaseBlock {
  type: "comparisonTable";
  title?: string;
  intro?: string;
  columns: string[];
  rows: string[][];
}

export interface DiagramNode {
  title: string;
  body: string;
  accent?: "green" | "gold" | "plum" | "slate";
}

export interface DiagramColumn {
  title: string;
  items: DiagramNode[];
}

export interface DiagramBlock extends BaseBlock {
  type: "diagram";
  layout: "flow" | "split" | "anatomy" | "timeline";
  title: string;
  caption: string;
  alt: string;
  nodes?: DiagramNode[];
  columns?: DiagramColumn[];
  centerLabel?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqBlock extends BaseBlock {
  type: "faq";
  title?: string;
  items: FaqItem[];
}

export interface GlossaryItem {
  term: string;
  definition: string;
}

export interface GlossaryListBlock extends BaseBlock {
  type: "glossaryList";
  title?: string;
  items: GlossaryItem[];
}

export interface ReferenceListBlock extends BaseBlock {
  type: "referenceList";
  title?: string;
  intro?: string;
  sourceIds: string[];
}

export interface StatusNoteBlock extends BaseBlock {
  type: "statusNote";
  tone: DocStatusTone;
  title: string;
  content: string;
}

export type DocBlock =
  | ParagraphBlock
  | CalloutBlock
  | QuoteBlock
  | BulletListBlock
  | StepsBlock
  | ComparisonTableBlock
  | DiagramBlock
  | FaqBlock
  | GlossaryListBlock
  | ReferenceListBlock
  | StatusNoteBlock;

export interface DocSection {
  id: string;
  title: string;
  summary?: string;
  blocks: DocBlock[];
}

export interface DocPage {
  slug: string;
  section: DocSectionId;
  title: string;
  summary: string;
  audience: string;
  tags: string[];
  status: PageStatus;
  lastReviewed: string;
  sources: Citation[];
  relatedPages: RelatedLink[];
  availability: Partial<Record<Locale, "full" | "fallback">>;
  sections: DocSection[];
  toc: TocEntry[];
}

export type WhitepaperBlockKind =
  | "paragraph"
  | "callout"
  | "equation"
  | "figure"
  | "table"
  | "list"
  | "quote";

export interface CitationEntry {
  id: string;
  type: "official" | "paper" | "report" | "policy";
  apa: string;
  url: string;
  short: string;
  year: number;
  authors: string[];
  title: string;
  summary: string;
  relevance: string;
  category: string;
}

export interface FigureEntry {
  id: string;
  title: string;
  caption: string;
  asset: string;
  alt: string;
  citationIds?: string[];
}

export interface TableEntry {
  id: string;
  title: string;
  caption: string;
  columns: string[];
  rows: string[][];
  citationIds?: string[];
}

export interface EquationEntry {
  id: string;
  title: string;
  expression: string;
  variables: { symbol: string; meaning: string }[];
  interpretation: string;
  citationIds?: string[];
}

export interface ParagraphWpBlock {
  kind: "paragraph";
  text: string;
  citationIds?: string[];
}

export interface CalloutWpBlock {
  kind: "callout";
  title: string;
  text: string;
  citationIds?: string[];
}

export interface EquationWpBlock {
  kind: "equation";
  equationId: string;
}

export interface FigureWpBlock {
  kind: "figure";
  figureId: string;
}

export interface TableWpBlock {
  kind: "table";
  tableId: string;
}

export interface ListWpBlock {
  kind: "list";
  title?: string;
  items: string[];
  citationIds?: string[];
}

export interface QuoteWpBlock {
  kind: "quote";
  text: string;
  attribution: string;
  citationIds?: string[];
}

export type WhitepaperBlock =
  | ParagraphWpBlock
  | CalloutWpBlock
  | EquationWpBlock
  | FigureWpBlock
  | TableWpBlock
  | ListWpBlock
  | QuoteWpBlock;

export interface WhitepaperSection {
  id: string;
  title: string;
  shortTitle: string;
  blocks: WhitepaperBlock[];
  citationIds: string[];
}

export interface WhitepaperDocument {
  title: string;
  subtitle: string;
  downloadPath: string;
  heroLabel: string;
  executiveSummaryTitle: string;
  abstractTitle: string;
  abstractBlocks: WhitepaperBlock[];
  executiveSummaryBlocks: WhitepaperBlock[];
  sections: WhitepaperSection[];
  appendixTitle: string;
  appendixBlocks: WhitepaperBlock[];
}

export interface WhitepaperSupport {
  categories: string[];
  citations: CitationEntry[];
  figures: FigureEntry[];
  tables: TableEntry[];
  equations: EquationEntry[];
}

export interface WhitepaperSummaryKa {
  heroLabel: string;
  title: string;
  subtitle: string;
  noticeTitle: string;
  noticeBody: string;
  downloadLabel: string;
  abstractTitle: string;
  abstractParagraphs: string[];
  findingsTitle: string;
  findings: string[];
  outlineTitle: string;
  outline: { title: string; summary: string }[];
  figureCaptionTitle: string;
  figureCaptions: string[];
}

export interface SourceSnapshot {
  docs: {
    enPages: DocPage[];
    kaPages: DocPage[];
    sectionTitles: Record<Locale, Record<DocSectionId, string>>;
    lastReviewed: string;
  };
  whitepaper: {
    documentEn: WhitepaperDocument;
    summaryKa: WhitepaperSummaryKa;
    support: WhitepaperSupport;
  };
}
