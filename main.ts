// One Word, First Thought — make.fun entry.
// The single word that came to mind first: the sound of wind in the trees.
import * as fs from "node:fs";
import * as path from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
const firstThought = "psithurism";

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), firstThought, "utf8");

// No trailing newline: the file holds exactly the one word, nothing else.
