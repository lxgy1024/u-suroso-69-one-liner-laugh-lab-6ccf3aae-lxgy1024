import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I didn't eat your sock. I performed an emergency extraction on a tripping hazard. You're welcome.";

// Gate: the entry must be 1 to 200 characters, not only white space.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error("entry line is outside the 1-200 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
