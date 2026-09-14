import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "page-content");

export function loadPage(key) {
  const meta = JSON.parse(
    fs.readFileSync(path.join(CONTENT_DIR, "_meta.json"), "utf8")
  )[key];
  const html = fs.readFileSync(path.join(CONTENT_DIR, `${key}.html`), "utf8");
  return { html, meta };
}
