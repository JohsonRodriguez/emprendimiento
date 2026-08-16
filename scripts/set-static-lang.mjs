import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

for (const locale of ["en", "es"]) {
  const file = join(process.cwd(), "out", locale, "index.html");
  const html = await readFile(file, "utf8");
  const localized = html.replace(/<html lang="[^"]+"/, `<html lang="${locale}"`);
  await writeFile(file, localized, "utf8");
}
