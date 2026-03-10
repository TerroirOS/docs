import fs from "node:fs";
import path from "node:path";

export function ensureDir(dirPath: string): void {
  fs.mkdirSync(dirPath, { recursive: true });
}

export function writeFile(targetPath: string, content: string): void {
  ensureDir(path.dirname(targetPath));
  fs.writeFileSync(targetPath, `${content.replace(/\s+$/u, "")}\n`, "utf8");
}

export function cleanupDir(targetPath: string): void {
  fs.rmSync(targetPath, { recursive: true, force: true });
}

export function toKebabCase(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function escapePipes(value: string): string {
  return value.replace(/\|/g, "\\|");
}

export function toMarkdownTable(headers: string[], rows: string[][]): string {
  const normalizedRows = rows.map((row) => {
    if (row.length < headers.length) {
      return [...row, ...Array.from({ length: headers.length - row.length }, () => "")];
    }
    return row.slice(0, headers.length);
  });

  const lines = [
    `| ${headers.map(escapePipes).join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...normalizedRows.map((row) => `| ${row.map(escapePipes).join(" | ")} |`),
  ];

  return lines.join("\n");
}

export function blockQuote(text: string): string {
  return text
    .split("\n")
    .map((line) => `> ${line}`)
    .join("\n");
}

export function indentLines(text: string, spaces = 4): string {
  const indent = " ".repeat(spaces);
  return text
    .split("\n")
    .map((line) => `${indent}${line}`)
    .join("\n");
}

export function toFrontmatter(entries: Record<string, string | string[]>): string {
  const lines = ["---"];

  for (const [key, value] of Object.entries(entries)) {
    if (Array.isArray(value)) {
      lines.push(`${key}:`);
      for (const item of value) {
        lines.push(`  - ${yamlEscape(item)}`);
      }
      continue;
    }

    lines.push(`${key}: ${yamlEscape(value)}`);
  }

  lines.push("---");
  return lines.join("\n");
}

function yamlEscape(value: string): string {
  const normalized = value.replace(/\r?\n/g, " ").trim();
  if (!normalized) {
    return '""';
  }

  return `"${normalized.replace(/\\/g, "\\\\").replace(/\"/g, '\\\"')}"`;
}

export function relativeLink(fromFile: string, toFile: string): string {
  const rel = path.relative(path.dirname(fromFile), toFile);
  return rel.startsWith(".") ? rel : `./${rel}`;
}

export function normalizeMdPath(pathValue: string): string {
  if (pathValue.endsWith(".md")) return pathValue;
  return `${pathValue}.md`;
}
