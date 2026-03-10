import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import {
  getDocOutputPath,
  renderDocPage,
  SECTION_ORDER,
} from "./renderers/docs_renderer.mts";
import {
  buildMkdocsConfig,
} from "./renderers/mkdocs_config.mts";
import {
  cleanupDir,
  ensureDir,
  writeFile,
} from "./renderers/markdown.mts";
import {
  collectWhitepaperSectionTitlesByCitation,
  renderResearchLibrary,
  renderWhitepaperFullPaper,
  renderWhitepaperKaSummary,
  renderWhitepaperOverview,
} from "./renderers/whitepaper_renderer.mts";
import type {
  DocPage,
  DocSectionId,
  Locale,
  SourceSnapshot,
} from "./types.mts";

const REPO_ROOT = process.cwd();
const DEFAULT_SOURCE_ROOT = path.resolve(REPO_ROOT, "../TerroirOS-Website");

function main(): void {
  const sourceRoot = resolveSourceRoot();
  const snapshot = loadSnapshotFromSource(sourceRoot);

  validateSource(snapshot);

  resetGeneratedDirectories();

  const slugToFileByLocale = buildSlugMaps(snapshot.docs.enPages, snapshot.docs.kaPages);
  writeLocalizedDocPages(snapshot.docs.enPages, "en", slugToFileByLocale);
  writeLocalizedDocPages(snapshot.docs.kaPages, "ka", slugToFileByLocale);

  copyWhitepaperAssets(sourceRoot);
  writeWhitepaperAndResearch(snapshot);

  writeDocsIndex(snapshot);
  writeDocsContributing();
  writeMkdocsConfig(snapshot);

  validateGeneratedArtifacts(snapshot);

  process.stdout.write(
    [
      "Documentation sync complete.",
      `Source: ${sourceRoot}`,
      `EN pages: ${snapshot.docs.enPages.length}`,
      `KA pages: ${snapshot.docs.kaPages.length}`,
      `Whitepaper sections: ${snapshot.whitepaper.documentEn.sections.length}`,
    ].join("\n") + "\n",
  );
}

function resolveSourceRoot(): string {
  const argPath = process.argv[2];
  const envPath = process.env.TERROIR_WEBSITE_PATH;
  const target = argPath ?? envPath ?? DEFAULT_SOURCE_ROOT;
  const resolved = path.resolve(target);

  if (!fs.existsSync(resolved)) {
    throw new Error(
      `Source repo path does not exist: ${resolved}. Pass an explicit path: npm run docs:sync -- /absolute/path/to/TerroirOS-Website`,
    );
  }

  if (!fs.existsSync(path.join(resolved, "content", "docs", "index.ts"))) {
    throw new Error(`Source path does not look like the website repo: ${resolved}`);
  }

  return resolved;
}

function loadSnapshotFromSource(sourceRoot: string): SourceSnapshot {
  const exportCode = `
    import { EN_DOC_PAGES } from "./content/docs/en";
    import { KA_DOC_PAGES } from "./content/docs/ka";
    import { SECTION_TITLES, DOC_LAST_REVIEWED } from "./content/docs/catalog";
    import { whitepaperDocumentEn, whitepaperSummaryKa, whitepaperSupport } from "./content/whitepaper";

    console.log(JSON.stringify({
      docs: {
        enPages: EN_DOC_PAGES,
        kaPages: KA_DOC_PAGES,
        sectionTitles: SECTION_TITLES,
        lastReviewed: DOC_LAST_REVIEWED
      },
      whitepaper: {
        documentEn: whitepaperDocumentEn,
        summaryKa: whitepaperSummaryKa,
        support: whitepaperSupport
      }
    }));
  `;

  const raw = execFileSync("npx", ["--yes", "tsx", "-e", exportCode], {
    cwd: sourceRoot,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });

  return JSON.parse(raw) as SourceSnapshot;
}

function validateSource(snapshot: SourceSnapshot): void {
  if (snapshot.docs.enPages.length !== 41) {
    throw new Error(`Expected 41 EN docs pages, found ${snapshot.docs.enPages.length}.`);
  }

  if (snapshot.docs.kaPages.length !== 27) {
    throw new Error(`Expected 27 KA docs pages, found ${snapshot.docs.kaPages.length}.`);
  }

  if (snapshot.whitepaper.documentEn.sections.length !== 9) {
    throw new Error(
      `Expected 9 whitepaper sections, found ${snapshot.whitepaper.documentEn.sections.length}.`,
    );
  }
}

function resetGeneratedDirectories(): void {
  cleanupDir(path.join(REPO_ROOT, "docs", "en"));
  cleanupDir(path.join(REPO_ROOT, "docs", "ka"));
  cleanupDir(path.join(REPO_ROOT, "docs", "whitepaper"));
  cleanupDir(path.join(REPO_ROOT, "docs", "research"));
  cleanupDir(path.join(REPO_ROOT, "docs", "assets", "whitepaper"));

  ensureDir(path.join(REPO_ROOT, "docs"));
  ensureDir(path.join(REPO_ROOT, "docs", "en"));
  ensureDir(path.join(REPO_ROOT, "docs", "ka"));
  ensureDir(path.join(REPO_ROOT, "docs", "whitepaper"));
  ensureDir(path.join(REPO_ROOT, "docs", "research"));
  ensureDir(path.join(REPO_ROOT, "docs", "assets", "whitepaper", "figures"));
}

function buildSlugMaps(
  enPages: DocPage[],
  kaPages: DocPage[],
): Record<Locale, Map<string, string>> {
  const en = new Map<string, string>();
  const ka = new Map<string, string>();

  enPages.forEach((page) => {
    en.set(page.slug, getDocOutputPath("en", page.section, page.slug));
  });

  kaPages.forEach((page) => {
    ka.set(page.slug, getDocOutputPath("ka", page.section, page.slug));
  });

  return { en, ka };
}

function writeLocalizedDocPages(
  pages: DocPage[],
  locale: Locale,
  slugToFileByLocale: Record<Locale, Map<string, string>>,
): void {
  pages.forEach((page) => {
    const pageFile = getDocOutputPath(locale, page.section, page.slug);
    const absolutePath = path.join(REPO_ROOT, pageFile);
    const content = renderDocPage({
      page,
      locale,
      pageFile,
      slugToFileByLocale,
    });
    writeFile(absolutePath, content);
  });
}

function copyWhitepaperAssets(sourceRoot: string): void {
  const figuresSource = path.join(sourceRoot, "public", "whitepaper", "figures");
  const figuresTarget = path.join(REPO_ROOT, "docs", "assets", "whitepaper", "figures");
  fs.cpSync(figuresSource, figuresTarget, { recursive: true });

  const pdfSource = path.join(
    sourceRoot,
    "public",
    "downloads",
    "terroir-trace-shield-whitepaper.pdf",
  );
  const pdfTarget = path.join(
    REPO_ROOT,
    "docs",
    "assets",
    "whitepaper",
    "terroir-trace-shield-whitepaper.pdf",
  );
  fs.copyFileSync(pdfSource, pdfTarget);
}

function writeWhitepaperAndResearch(snapshot: SourceSnapshot): void {
  const { documentEn, summaryKa, support } = snapshot.whitepaper;

  writeFile(
    path.join(REPO_ROOT, "docs", "whitepaper", "overview.md"),
    renderWhitepaperOverview(documentEn),
  );
  writeFile(
    path.join(REPO_ROOT, "docs", "whitepaper", "full-paper.md"),
    renderWhitepaperFullPaper(documentEn, support),
  );
  writeFile(
    path.join(REPO_ROOT, "docs", "whitepaper", "ka-summary.md"),
    renderWhitepaperKaSummary(summaryKa),
  );

  const sectionTitlesByCitation = collectWhitepaperSectionTitlesByCitation(documentEn, support);
  writeFile(
    path.join(REPO_ROOT, "docs", "research", "library.md"),
    renderResearchLibrary(support, "en", sectionTitlesByCitation),
  );
}

function writeDocsIndex(snapshot: SourceSnapshot): void {
  const sectionCountsEn = countSections(snapshot.docs.enPages);
  const sectionCountsKa = countSections(snapshot.docs.kaPages);

  const lines = [
    "# TerroirOS Documentation",
    "",
    "Canonical documentation repository for TerroirOS architecture, workflows, trust verification, whitepaper materials, and contribution guidance.",
    "",
    "## Structure",
    "",
    "- [English docs](en/start-here/what-is-terroir.md)",
    "- [Georgian docs](ka/start-here/what-is-terroir.md)",
    "- [Whitepaper overview](whitepaper/overview.md)",
    "- [Research library](research/library.md)",
    "- [Contributing](contributing.md)",
    "",
    "## Coverage",
    "",
    `- English pages: ${snapshot.docs.enPages.length}`,
    `- Georgian pages: ${snapshot.docs.kaPages.length}`,
    `- Whitepaper sections: ${snapshot.whitepaper.documentEn.sections.length}`,
    `- Last reviewed baseline: ${snapshot.docs.lastReviewed}`,
    "",
    "### English sections",
    "",
    ...SECTION_ORDER.map(
      (sectionId) => `- ${snapshot.docs.sectionTitles.en[sectionId]}: ${sectionCountsEn[sectionId] ?? 0}`,
    ),
    "",
    "### Georgian sections",
    "",
    ...SECTION_ORDER.map(
      (sectionId) => `- ${snapshot.docs.sectionTitles.ka[sectionId]}: ${sectionCountsKa[sectionId] ?? 0}`,
    ),
    "",
  ];

  writeFile(path.join(REPO_ROOT, "docs", "index.md"), lines.join("\n"));
}

function writeDocsContributing(): void {
  const content = [
    "# Contributing",
    "",
    "TerroirOS documentation is canonical in this repository. New documentation changes should be proposed here first.",
    "",
    "## Principles",
    "",
    "- Keep wording accurate to current implementation status.",
    "- Preserve evidence-backed claims with verifiable sources.",
    "- Maintain bilingual parity where applicable (English and Georgian).",
    "",
    "## Local workflow",
    "",
    "1. Install Node.js 20+ and Python 3.11+.",
    "2. Install Node dependencies: `npm install`.",
    "3. Install Python dependencies: `pip install -r requirements.txt`.",
    "4. Run sync from website source if needed: `npm run docs:sync -- /absolute/path/to/TerroirOS-Website`.",
    "5. Run validation: `npm run docs:check` and `mkdocs build --strict`.",
    "",
    "## Source-of-truth note",
    "",
    "After migration, this repository is the canonical location for public documentation artifacts.",
    "",
  ].join("\n");

  writeFile(path.join(REPO_ROOT, "docs", "contributing.md"), content);
  writeFile(path.join(REPO_ROOT, "CONTRIBUTING.md"), content);
}

function writeMkdocsConfig(snapshot: SourceSnapshot): void {
  const mkdocs = buildMkdocsConfig({
    enPages: snapshot.docs.enPages,
    kaPages: snapshot.docs.kaPages,
    sectionTitles: snapshot.docs.sectionTitles,
  });
  writeFile(path.join(REPO_ROOT, "mkdocs.yml"), mkdocs);
}

function countSections(pages: DocPage[]): Record<DocSectionId, number> {
  const counts = {
    "start-here": 0,
    "trust-verification": 0,
    workflows: 0,
    "technical-reference": 0,
    "project-governance": 0,
  } satisfies Record<DocSectionId, number>;

  pages.forEach((page) => {
    counts[page.section] += 1;
  });

  return counts;
}

function validateGeneratedArtifacts(snapshot: SourceSnapshot): void {
  const enFiles = listMarkdown(path.join(REPO_ROOT, "docs", "en"));
  const kaFiles = listMarkdown(path.join(REPO_ROOT, "docs", "ka"));

  if (enFiles.length !== snapshot.docs.enPages.length) {
    throw new Error(
      `EN generated file count mismatch. expected ${snapshot.docs.enPages.length}, found ${enFiles.length}`,
    );
  }

  if (kaFiles.length !== snapshot.docs.kaPages.length) {
    throw new Error(
      `KA generated file count mismatch. expected ${snapshot.docs.kaPages.length}, found ${kaFiles.length}`,
    );
  }

  ensureFrontmatter(enFiles);
  ensureFrontmatter(kaFiles);
  ensureInternalLinksResolve(path.join(REPO_ROOT, "docs"));
}

function listMarkdown(rootDir: string): string[] {
  const out: string[] = [];
  const stack = [rootDir];

  while (stack.length > 0) {
    const current = stack.pop();
    if (!current) continue;

    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(full);
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        out.push(full);
      }
    }
  }

  return out;
}

function ensureFrontmatter(files: string[]): void {
  files.forEach((filePath) => {
    const content = fs.readFileSync(filePath, "utf8");
    if (!content.startsWith("---\n")) {
      throw new Error(`Missing frontmatter: ${filePath}`);
    }
  });
}

function ensureInternalLinksResolve(docsRoot: string): void {
  const mdFiles = listMarkdown(docsRoot);

  mdFiles.forEach((filePath) => {
    const content = fs.readFileSync(filePath, "utf8");
    const matches = content.matchAll(/\[[^\]]+\]\(([^)]+)\)/g);

    for (const match of matches) {
      const href = match[1].trim();
      if (!href || href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto:")) {
        continue;
      }

      const hrefWithoutAnchor = href.split("#")[0];
      if (!hrefWithoutAnchor) continue;

      const resolved = path.resolve(path.dirname(filePath), hrefWithoutAnchor);
      if (!fs.existsSync(resolved)) {
        throw new Error(`Broken internal link in ${filePath}: ${href}`);
      }
    }
  });
}

main();
