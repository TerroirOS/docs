import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();

const enFiles = listMarkdown(path.join(repoRoot, "docs", "en"));
const kaFiles = listMarkdown(path.join(repoRoot, "docs", "ka"));

assert(enFiles.length === 41, `Expected 41 EN pages, found ${enFiles.length}`);
assert(kaFiles.length === 27, `Expected 27 KA pages, found ${kaFiles.length}`);

const whitepaperFull = fs.readFileSync(
  path.join(repoRoot, "docs", "whitepaper", "full-paper.md"),
  "utf8",
);
const sectionCount = (whitepaperFull.match(/^## \d+\. /gm) || []).length;
assert(sectionCount === 9, `Expected 9 whitepaper sections, found ${sectionCount}`);

[...enFiles, ...kaFiles].forEach((filePath) => {
  const content = fs.readFileSync(filePath, "utf8");
  assert(content.startsWith("---\n"), `Missing frontmatter in ${filePath}`);
  ["slug:", "locale:", "section:", "audience:", "status_label:", "status_tone:", "last_reviewed:"].forEach((requiredKey) => {
    assert(content.includes(requiredKey), `Missing frontmatter key ${requiredKey} in ${filePath}`);
  });
});

const mkdocs = fs.readFileSync(path.join(repoRoot, "mkdocs.yml"), "utf8");
const expectedPaths = [
  ...enFiles.map((p) => path.relative(path.join(repoRoot, "docs"), p).replaceAll(path.sep, "/")),
  ...kaFiles.map((p) => path.relative(path.join(repoRoot, "docs"), p).replaceAll(path.sep, "/")),
];

expectedPaths.forEach((relativeMdPath) => {
  assert(mkdocs.includes(relativeMdPath), `mkdocs nav appears to miss ${relativeMdPath}`);
});

ensureInternalLinksResolve(path.join(repoRoot, "docs"));

console.log("Docs checks passed.");

function listMarkdown(rootDir) {
  const out = [];
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

function ensureInternalLinksResolve(docsRoot) {
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
      assert(fs.existsSync(resolved), `Broken internal link in ${filePath}: ${href}`);
    }
  });
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}
