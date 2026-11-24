import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Toaster Error Message — one line, max 120 chars.
// Deadpan appliance voice: a stuck-bread error that escalates into a
// hostage negotiation — and the ransom demand is the punchline.
// No toast pun, no setup, lands on a single read.
const LINE = "BREAD JAMMED. I HAVE TAKEN IT HOSTAGE. SEND BUTTER.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
